// Scoped broken-link checker for the 4 L5 content pages (ZH campaign-ext).
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const PREFIX = '/v1.3.15/zh/api/campaign-ext/';
const files = ['ConversationManager', 'GameMenuManager', 'GameMenuOption', 'KingdomDecision'];
function existsAsPage(p) {
  return fs.existsSync(p + '.md') || fs.existsSync(p + '/_index.md') || fs.existsSync(p + '/index.md');
}
let total = 0, broken = 0; const brokenList = [];
for (const f of files) {
  const src = path.join(ROOT, 'content', 'v1.3.15/zh/api/campaign-ext', f + '.md');
  if (!fs.existsSync(src)) { console.log('MISSING FILE', src); continue; }
  const html = fs.readFileSync(src, 'utf8');
  const pageVirtual = PREFIX + f + '/';
  const re = /\[[^\]]+\]\(([^)]+)\)/g; let m;
  while ((m = re.exec(html))) {
    const href = m[1].trim();
    if (!href.startsWith('.')) continue;
    if (href.startsWith('mailto:')) continue;
    total++;
    const resolved = path.posix.normalize(path.posix.join(pageVirtual, href)).replace(/\/$/, '');
    const contentPath = path.join(ROOT, 'content', resolved);
    if (!existsAsPage(contentPath)) { broken++; brokenList.push({ page: f, href, resolved }); }
  }
}
console.log(`Checked ${files.length} pages · links=${total} · Broken=${broken}`);
for (const b of brokenList) console.log('  BROKEN', b.page, '->', b.href, '(', b.resolved, ')');
