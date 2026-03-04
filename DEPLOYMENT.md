# Deploy NeuroHeart.AI to Production

**Server:** 159.198.44.98 (Ubuntu 24.04, 2GB RAM, 40GB disk)
**Domain:** neuroheart.ai (registered on Namecheap, currently on Wix DNS)
**Stack:** Next.js 16 → PM2 → Nginx → Let's Encrypt

---

## Overview: Migration Strategy (Minimal Downtime)

The domain currently points to Wix via `ns2.wixdns.net` / `ns3.wixdns.net`. We'll:

1. **First** — set up the server and verify the site works at `http://159.198.44.98`
2. **Then** — switch DNS from Wix to Namecheap and point to our server
3. **Then** — get SSL certificate
4. **Finally** — disconnect Wix

This order ensures the new site is fully ready before DNS switches, so downtime is only the DNS propagation time (~5-30 min).

---

## Step 1: Server Setup

SSH into the server:
```bash
ssh root@159.198.44.98
```

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify
node -v   # → v20.x
npm -v

# Install PM2
npm install -g pm2

# Install Nginx + Certbot
apt install -y nginx certbot python3-certbot-nginx

# Firewall
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

---

## Step 2: Deploy Code

**From your Mac (local terminal):**
```bash
rsync -avz --exclude 'node_modules' --exclude '.next' \
  ~/Desktop/Website/neuroheart-website/ \
  root@159.198.44.98:/var/www/neuroheart.ai/
```

**On server:**
```bash
cd /var/www/neuroheart.ai
npm install
npm run build
```

---

## Step 3: Start with PM2

```bash
cd /var/www/neuroheart.ai

pm2 start npm --name "neuroheart" -- start
pm2 save
pm2 startup
# → Copy and run the command it prints

# Verify
pm2 status
curl http://localhost:3000
```

---

## Step 4: Nginx Reverse Proxy

Create the config file:
```bash
nano /etc/nginx/sites-available/neuroheart.ai
```

Paste this:
```nginx
server {
    listen 80;
    server_name neuroheart.ai www.neuroheart.ai;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript
               text/xml application/xml text/javascript image/svg+xml;

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:
```bash
ln -s /etc/nginx/sites-available/neuroheart.ai /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

**Test:** Visit `http://159.198.44.98` in your browser — the site should load.

---

## Step 5: Namecheap DNS Migration (Step-by-Step)

Your domain is currently using Wix nameservers (`ns2.wixdns.net`, `ns3.wixdns.net`). We need to switch to Namecheap's DNS and point to our server.

### 5a. Switch Nameservers from Wix to Namecheap

1. Log in to **Namecheap** → **Dashboard** → click **Manage** next to `neuroheart.ai`
2. Scroll down to the **Nameservers** section
3. You'll see it's set to **Custom DNS** with `ns2.wixdns.net` and `ns3.wixdns.net`
4. Click the dropdown and change it to **Namecheap BasicDNS**
5. Click the **green checkmark** to save

> This tells the internet: "Namecheap now controls DNS for neuroheart.ai" instead of Wix.

### 5b. Screenshot Your Wix DNS Records First!

**Before switching nameservers**, go to Wix DNS settings and screenshot/note ALL existing records. You have subdomains that must be recreated in Namecheap:

| Subdomain | Current IP | Purpose |
|-----------|-----------|---------|
| `api.neuroheart.ai` | `159.198.44.98` | Backend API (FastAPI) |
| `neuro.neuroheart.ai` | `185.158.133.1` | Other service |

### 5c. Set DNS Records in Namecheap

1. After switching nameservers, go to **Advanced DNS** tab (it should now be clickable)
2. **Delete** any existing default records (parking page, email forwarding, etc.)
3. **Add ALL these records:**

| Type       | Host    | Value             | TTL       |
|------------|---------|-------------------|-----------|
| A Record   | `@`     | `159.198.44.98`   | Automatic |
| A Record   | `www`   | `159.198.44.98`   | Automatic |
| A Record   | `api`   | `159.198.44.98`   | Automatic |
| A Record   | `neuro` | `185.158.133.1`   | Automatic |

4. Click **Save All Changes**

> **Critical:** The `api` and `neuro` subdomains MUST be added at the same time as the main domain records, otherwise those services will go down when you switch nameservers away from Wix.

### 5d. Wait for DNS Propagation

```bash
# Check from your Mac terminal:
dig neuroheart.ai +short
# → Should return: 159.198.44.98

# Or check www:
dig www.neuroheart.ai +short
# → Should return: 159.198.44.98
```

This usually takes **5-30 minutes** but can take up to 48 hours in rare cases. You can also check at https://dnschecker.org

### 5e. Verify ALL Domains

```bash
# Main site:
dig neuroheart.ai +short          # → 159.198.44.98
dig www.neuroheart.ai +short      # → 159.198.44.98

# Subdomains (must still work!):
dig api.neuroheart.ai +short      # → 159.198.44.98
dig neuro.neuroheart.ai +short    # → 185.158.133.1
```

Visit `http://neuroheart.ai` in your browser — your new site should load.
Check `api.neuroheart.ai` and `neuro.neuroheart.ai` still work too.

---

## Step 6: Enable HTTPS (after DNS propagates)

Only run this **after** `dig neuroheart.ai +short` returns `159.198.44.98`:

```bash
# On server:
certbot --nginx -d neuroheart.ai -d www.neuroheart.ai
```

Follow the prompts:
1. Enter your email address
2. Agree to Terms of Service → `Y`
3. Share email with EFF → `N` (your choice)
4. Redirect HTTP to HTTPS → choose option `2` (Redirect)

```bash
# Verify auto-renewal works:
certbot renew --dry-run
```

---

## Step 7: Cancel Wix (After Everything Works)

Once ALL of these are confirmed working:
- `https://neuroheart.ai` — main site on your VPS
- `api.neuroheart.ai` — API still responding
- `neuro.neuroheart.ai` — still responding

Then you can fully cancel Wix:

1. Log in to **Wix** → go to your site dashboard
2. Go to **Settings** → **Domains**
3. Click **...** next to `neuroheart.ai` → **Disconnect Domain**
4. Go to **Account Settings** → **Premium Plans** → **Cancel** your paid plan
5. Optionally delete the Wix site: **Settings** → **General** → **Delete Site**

> **Safe to cancel:** Your nameservers already point to Namecheap BasicDNS, not Wix. Wix has no control over your domain anymore. The domain is registered on Namecheap until Dec 24, 2026. Cancelling Wix changes nothing about your DNS or domain.

---

## Future Deployments

```bash
# From Mac — push updated code:
rsync -avz --exclude 'node_modules' --exclude '.next' \
  ~/Desktop/Website/neuroheart-website/ \
  root@159.198.44.98:/var/www/neuroheart.ai/

# On server — rebuild & restart:
cd /var/www/neuroheart.ai && npm run build && pm2 restart neuroheart
```

---

## Checklist

- [ ] Server setup done (Node, PM2, Nginx, Certbot, firewall)
- [ ] Code deployed and built on server
- [ ] PM2 running (`pm2 status` shows "neuroheart" online)
- [ ] `http://159.198.44.98` shows the site
- [ ] Namecheap nameservers switched from Wix to BasicDNS
- [ ] A records set: `@` → 159.198.44.98, `www` → 159.198.44.98
- [ ] Subdomain records set: `api` → 159.198.44.98, `neuro` → 185.158.133.1
- [ ] `dig neuroheart.ai +short` returns 159.198.44.98
- [ ] `dig api.neuroheart.ai +short` returns 159.198.44.98
- [ ] `dig neuro.neuroheart.ai +short` returns 185.158.133.1
- [ ] `http://neuroheart.ai` loads the site
- [ ] `certbot` ran successfully — HTTPS works
- [ ] `https://neuroheart.ai` loads with valid SSL
- [ ] HTTP → HTTPS redirect works
- [ ] `www.neuroheart.ai` redirects properly
- [ ] `api.neuroheart.ai` still works (API responding)
- [ ] `neuro.neuroheart.ai` still works
- [ ] `pm2 startup` + `pm2 save` done (survives reboot)
- [ ] `certbot renew --dry-run` passes
- [ ] Wix domain disconnected and plan cancelled
