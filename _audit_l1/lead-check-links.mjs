// Lead independent link checker for BannerlordCode.github.io Zola content.
// Resolves relative markdown links with correct Zola clean-URL math and verifies target .md exists.
import { readFileSync, existsSync } from 'node:fs';

const SITE = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const pages = [
  'content/v1.3.15/zh/api/core-extra/ItemObject.md',
  'content/v1.3.15/zh/api/campaign-ext/BarterManager.md',
  'content/v1.3.15/zh/api/campaign-ext/IssueManager.md',
  'content/v1.3.15/zh/api/campaign-ext/SettlementComponent.md',
  'content/v1.3.15/zh/api/campaign-ext/Workshop.md',
];

// Zola: page content/v1.3.15/zh/api/<bucket>/<Class>.md => URL /v1.3.15/zh/api/<bucket>/<Class>/
// base dir for relative resolution = /v1.3.15/zh/api/<bucket>/<Class>/
function baseDirFor(page) {
  // page relative to SITE/content
  const rel = page.replace(/^content\//, ''); // v1.3.15/zh/api/.../<Class>.md
  const noExt = rel.replace(/\.md$/, '');
  return '/' + noExt + '/';
}

function resolveTarget(baseDir, link) {
  // link may have anchor
  const [pathPart] = link.split('#');
  if (!pathPart) return { type: 'anchor', ok: true };
  if (/^https?:\/\//.test(pathPart)) return { type: 'abs-url', ok: true };
  if (pathPart.startsWith('/')) return { type: 'abs-path', ok: true };
  const url = new URL(pathPart, 'https://x.invalid' + baseDir);
  const pathname = decodeURIComponent(url.pathname); // e.g. /v1.3.15/zh/api/campaign-ext/Name/
  const ROOT = SITE + '/content'; // files live under content/
  const fileLeaf = ROOT + pathname.replace(/\/$/, '') + '.md';
  const fileSection = ROOT + pathname + '_index.md';
  const fileIdx = ROOT + pathname + 'index.md';
  const ok = existsSync(fileLeaf) || existsSync(fileSection) || existsSync(fileIdx);
  return { type: 'rel', ok, target: pathname, fileLeaf, fileSection };
}

let total = 0, broken = 0;
const brokenList = [];
for (const page of pages) {
  const text = readFileSync(SITE + '/' + page, 'utf8');
  const base = baseDirFor(page);
  const re = /\[[^\]]*\]\(\s*([^)\s]+)(?:\s+"[^"]*")?\s*\)/g;
  let m;
  const found = [];
  while ((m = re.exec(text))) found.push(m[1]);
  // also reference-style [text]: url
  const reRef = /^\[[^\]]+\]:\s*(\S+)/gm;
  while ((m = reRef.exec(text))) found.push(m[1]);
  let pageBroken = 0;
  for (const link of found) {
    total++;
    const r = resolveTarget(base, link);
    if (r.type === 'rel' && !r.ok) {
      broken++; pageBroken++;
      brokenList.push({ page, link, target: r.target });
      console.log(`BROKEN  ${page}\n        link=${link}\n        -> ${r.target}`);
    }
  }
  console.log(`OK page=${page} links=${found.length} broken=${pageBroken}`);
}
console.log(`\nSUMMARY total_links=${total} broken=${broken}`);
if (broken > 0) {
  console.log('BROKEN_LINKS=' + broken);
  process.exit(1);
} else {
  console.log('BROKEN_LINKS=0');
}
