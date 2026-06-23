import { readFileSync } from 'node:fs';

const htaccess = readFileSync('public/.htaccess', 'utf8');
const workflow = readFileSync('.github/workflows/deploy-marketing.yml', 'utf8');

const requiredHtaccessRule = 'RewriteRule ^portal(/.*)?$ - [L]';
const requiredExclude = 'portal/**';

if (!htaccess.includes(requiredHtaccessRule)) {
  console.error(`Missing portal-preservation rewrite rule: ${requiredHtaccessRule}`);
  process.exit(1);
}

if (!workflow.includes(requiredExclude)) {
  console.error(`Missing FTP deploy exclusion: ${requiredExclude}`);
  process.exit(1);
}

console.log('Portal safety rules verified.');
