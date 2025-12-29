const { execSync } = require('child_process');

try {
  // Get the list of files changed in the last merge/pull
  const changed = execSync('git diff --name-only HEAD@{1} HEAD', { encoding: 'utf8' }).trim();

  if (/(^|\/)package(-lock)?\.json/.test(changed)) {
    console.log('package.json or package-lock.json changed — running npm ci to sync dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
    console.log('npm ci finished.');
  } else {
    console.log('No package.json changes detected; skipping dependency install.');
  }
} catch (err) {
  console.error('Could not determine changed files or run npm ci:', err.message || err);
  // Fallback: don't fail the hook, but advise manual install
  process.exitCode = 0;
}