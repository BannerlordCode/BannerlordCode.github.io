// Scoped lead link-checker for the 5 batch pages — CORRECTED Zola page-as-dir math.
// Zola: content/v1.3.15/zh/api/<bucket>/<Class>.md => URL /v1.3.15/zh/api/<bucket>/<Class>/
// The page is a directory, so a relative link resolves relative to /v1.3.15/zh/api/<bucket>/<Class>/
import { readFileSync, existsSync } from 'node:fs';
import { resolve as pathResolve } from 'node:path';

const LANG_ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.3.15/zh';
const pages = [
  'api/core-extra/ItemObject.md',
  'api/campaign-ext/BarterManager.md',
  'api/campaign-ext/IssueManager.md',
  'api/campaign-ext/SettlementComponent.md',
  'api/campaign-ext/Workshop.md',
];

// build the page-as-dir base URL: drop .md, treat as directory
function baseUrlFor(page) {
  // page = api/<bucket>/<Class>.md
  const noExt = page.replace(/\.md$/, ''); // api/<bucket>/<Class>
  return '/' + noExt + '/'; // /v1.3.15/zh/ + api/<bucket>/<Class>/
}

const linkRe = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
let totalChecked = 0;
let totalBroken = 0;

for (const page of pages) {
  const pageAbs = `${LANG_ROOT}/${page}`;
  let text;
  try { text = readFileSync(pageAbs, 'utf8'); }
  catch (e) { console.log(`MISSING PAGE: ${page}`); continue; }
  const base = baseUrlFor(page); // e.g. /v1.3.15/zh/api/campaign-ext/Workshop/
  const found = [];
  let m;
  while ((m = linkRe.exec(text)) !== null) found.push(m[1].trim());
  const broken = [];
  for (const u of found) {
    if (!u || u.startsWith('http://') || u.startsWith('https://') || u.startsWith('mailto:') || u.startsWith('#')) continue;
    const clean = u.split('#')[0];
    if (!clean) continue;
    if (clean.startsWith('/')) { // absolute — should not happen; treat as broken if file missing
      const tgt = LANG_ROOT + clean;
      const ok = existsSync(tgt + '.md') || existsSync(tgt.replace(/\/$/, '') + '.md') || existsSync(tgt + '/_index.md');
      totalChecked++;
      if (!ok) broken.push(u);
      continue;
    }
    const resolvedUrl = pathResolve('https://x.invalid' + base, clean);
    const resolved = resolvedUrl.pathname; // /v1.3.15/zh/api/.../Name/
    const norm = resolved.replace(/\/$/, ''); // drop trailing slash
    const candidates = [
      `${LANG_ROOT}${norm}.md`,
      `${LANG_ROOT}${norm}/_index.md`,
      `${LANG_ROOT}${norm}/index.md`,
    ];
    const ok = candidates.some(c => existsSync(c));
    totalChecked++;
    if (!ok) broken.push(clean + '  ->  ' + norm);
  }
  totalBroken += broken.length;
  console.log(`\n===== ${page} =====`);
  console.log(`  checked ${found.length} links, broken ${broken.length}`);
  if (broken.length) broken.forEach(b => console.log('   BROKEN: ' + b));
}
console.log(`\nSUMMARY: checked=${totalChecked} broken=${totalBroken}`);
