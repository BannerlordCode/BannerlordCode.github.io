// Independent scoped link checker for Zola clean-URL leaf pages.
// Usage: node tools/_audit_l1/verify-l9-links.mjs <relpath-no-ext-under-content> [more...]
// Example: node tools/_audit_l1/verify-l9-links.mjs v1.3.15/zh/api/campaign-ext/PartyComponent
// Resolves relative markdown links the way Zola does (page served at <path>/),
// then checks the target exists as .md or /_index.md under content/.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DOCS = join(process.cwd()); // run from docs site root
const CONTENT = join(DOCS, 'content');

function existsAsPage(absPathNoExt) {
  return existsSync(absPathNoExt + '.md') || existsSync(join(absPathNoExt, '_index.md'));
}

function resolveHref(baseSegs, href) {
  // href like ../MobileParty/ or ../../campaign/MobileParty/ or ../../../architecture/X/ or ../ or ./sib/
  let segs = baseSegs.slice();
  const parts = href.split('/').filter((p) => p.length > 0);
  for (const p of parts) {
    if (p === '.') continue;
    else if (p === '..') segs.pop();
    else segs.push(p);
  }
  return segs;
}

function checkFile(relNoExt) {
  const abs = join(CONTENT, relNoExt + '.md');
  const text = readFileSync(abs, 'utf8');
  // serving dir segments (page-as-dir): drop the .md filename, keep dirs
  const baseSegs = relNoExt.split('/'); // e.g. v1.3.15/zh/api/campaign-ext/PartyComponent
  const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
  let m;
  const links = [];
  while ((m = linkRe.exec(text)) !== null) {
    const href = m[1].trim();
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) continue;
    links.push(href);
  }
  let broken = 0;
  const brokenList = [];
  for (const href of links) {
    const segs = resolveHref(baseSegs, href);
    const targetNoExt = join(CONTENT, ...segs);
    if (!existsAsPage(targetNoExt)) {
      broken++;
      brokenList.push(href + '  ->  content/' + segs.join('/'));
    }
  }
  return { total: links.length, broken, brokenList };
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('usage: verify-l9-links.mjs <relpath-no-ext> [...]');
  process.exit(2);
}
let grandTotal = 0, grandBroken = 0;
for (const rel of args) {
  const r = checkFile(rel);
  grandTotal += r.total;
  grandBroken += r.broken;
  const status = r.broken === 0 ? 'PASS' : 'BROKEN';
  console.log(`[${status}] ${rel}  links=${r.total} broken=${r.broken}`);
  for (const b of r.brokenList) console.log('   BROKEN: ' + b);
}
console.log(`\nTOTAL links=${grandTotal} broken=${grandBroken}`);
process.exit(grandBroken === 0 ? 0 : 1);
