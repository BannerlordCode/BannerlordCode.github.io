// Targeted link resolver for the 5 wave #B campaign pages.
// Mirrors audit-links.mjs resolution: strip trailing slash, check target.md or target/_index.md.
import { readFileSync, existsSync } from 'node:fs';
import { join, posix, normalize } from 'node:path';

const root = join(process.cwd(), 'content');
const targets = [
  'v1.4.5/zh/api/campaign/Hero.md',
  'v1.4.5/zh/api/campaign/MobileParty.md',
  'v1.4.5/zh/api/campaign/Settlement.md',
  'v1.4.5/zh/api/campaign/Clan.md',
  'v1.4.5/zh/api/campaign/Kingdom.md',
];

const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;

function resolveTarget(fromDir, href) {
  const h = href.split('#')[0];
  if (!h) return null;
  const base = fromDir.endsWith('/') ? fromDir : fromDir + '/';
  const rel = posix.normalize(posix.join(base, h)).replace(/^\//, '');
  return normalize(join(root, rel)).replace(/[\\/]+$/, '');
}

function existsAsPage(t) {
  if (t === null) return false;
  return existsSync(normalize(t + '.md')) || existsSync(normalize(join(t, '_index.md')));
}

let total = 0;
let broken = 0;
for (const rel of targets) {
  const abs = join(root, rel);
  const txt = readFileSync(abs, 'utf8');
  // Page-as-directory semantics (matches audit-links.mjs route resolution):
  // MobileParty.md -> .../campaign/MobileParty/ so ../PartyBase lands on the sibling page dir.
  const pageBase = posix.basename(rel).replace(/\.md$/, '');
  const fromDir = posix.dirname(rel) + '/' + pageBase + '/';
  let m;
  const localBroken = [];
  while ((m = linkRe.exec(txt))) {
    const href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    total++;
    const t = resolveTarget(fromDir, href);
    if (!existsAsPage(t)) {
      broken++;
      localBroken.push(`${m[1]} -> ${href}`);
    }
  }
  if (localBroken.length) {
    console.log(`BROKEN in ${rel}:`);
    for (const b of localBroken) console.log('   ' + b);
  } else {
    console.log(`OK     ${rel} (${'checked'})`);
  }
}
console.log(`\nTARGETED_LINKS total=${total} broken=${broken}`);
process.exitCode = broken > 0 ? 1 : 0;
