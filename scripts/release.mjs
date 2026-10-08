import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const cwd = fileURLToPath(new URL('../', import.meta.url));
const [action, ...args] = process.argv.slice(2);

function run(command, arguments_, capture = false) {
  const result = spawnSync(command, arguments_, {
    cwd,
    stdio: capture ? ['inherit', 'pipe', 'inherit'] : 'inherit',
    encoding: 'utf8',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} failed; stopped before the next step.`);
  return result.stdout?.trim() ?? '';
}

try {
  if (!['push', 'deploy'].includes(action)) throw new Error('Use npm run push -- "Commit message" or npm run deploy.');
  if (run('git', ['branch', '--show-current'], true) !== 'main') throw new Error('Switch to main before publishing.');

  if (action === 'push') {
    console.log('Committing all changes in this repository, including photo additions and deletions.');
    run('git', ['add', '--all', '.']);
    if (run('git', ['diff', '--cached', '--name-only'], true)) {
      run('git', ['diff', '--cached', '--stat']);
      run('git', ['commit', '-m', args.join(' ').trim() || 'Update NeuroHeart website']);
    } else {
      console.log('No new changes to commit. Pushing any existing local commits.');
    }
    run('git', ['push', 'origin', 'main']);
    console.log('Pushed successfully. Run npm run deploy on the server.');
  } else {
    if (run('git', ['status', '--porcelain'], true)) throw new Error('Server checkout has local changes. Commit or stash them, then rerun npm run deploy.');
    run('git', ['pull', '--ff-only', 'origin', 'main']);
    run('npm', ['ci']);
    run('npm', ['run', 'build']);
    run('pm2', ['restart', 'neuroheart', '--update-env']);
    run('curl', ['--fail', '--silent', '--show-error', '--max-time', '30', '--output', '/dev/null', 'http://localhost:3000/gallery']);
    console.log('Deployed successfully. Gallery: https://neuroheart.ai/gallery');
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
