# Push and deploy commands

## On your Mac: commit and push

After editing the website or adding, renaming, or deleting photos in `gallery/`:

```bash
cd /Users/sreekanthgopi/Desktop/Website/neuroheart-website && npm run push -- "Update website and photos"
```

This stages all non-ignored repository changes, commits them, and pushes `main`
to GitHub. Review `git status` first if you have unfinished changes. Both local
and server commands require the `main` branch.

## On the server: deploy

Log into the server yourself, then run:

```bash
cd /var/www/neuroheart.ai && npm run deploy
```

This pulls `main`, runs `npm ci`, builds the website and gallery, restarts the
`neuroheart` PM2 process, and checks `/gallery` locally. It stops on the first
failure and does not restart PM2 if the build fails.

## First deployment of the helper commands

If the server does not have the `deploy` command yet, run this while logged in:

```bash
cd /var/www/neuroheart.ai && git pull --ff-only origin main && npm run deploy
```

## If server changes block the pull

Save tracked edits and untracked files in a stash, then pull and deploy:

```bash
cd /var/www/neuroheart.ai &&
git stash push --include-untracked -m "Server changes before deployment" &&
git pull --ff-only origin main &&
npm run deploy
```

Your server changes remain saved. Leave the stash unapplied until reviewed.
To inspect saved stashes:

```bash
git stash list
git stash show --include-untracked -p 'stash@{0}'
```

Ignored files, including `.env` files, are not included in this stash command.
