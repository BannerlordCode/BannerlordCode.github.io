import { readFileSync, existsSync } from 'fs';
import { dirname, resolve, join, basename } from 'path';

const pages = process.argv.slice(2);
const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
let totalBroken = 0;

for (const p of pages) {
  if (!existsSync(p)) { console.log(`MISSING  ${p}`); totalBroken++; continue; }
  const md = readFileSync(p, 'utf8');
  const leafDir = join(dirname(p), basename(p, '.md'));
  const links = [...md.matchAll(linkRe)].map((m) => m[1]);
  const broken = [];
  for (const raw of links) {
    if (/^(https?:|mailto:|#|\/)/.test(raw)) continue;
    let rel = raw.startsWith('./') ? raw.slice(2) : raw;
    const abs = resolve(leafDir, rel);
    const clean = abs.endsWith('/') ? abs.slice(0, -1) : abs;
    if (![clean + '.md', join(clean, '_index.md'), clean].some((c) => existsSync(c))) broken.push(raw);
  }
  if (broken.length) totalBroken += broken.length;
  console.log(`${broken.length ? 'BROKEN' : 'OK'}  ${p}  (links=${links.length}${broken.length ? ', broken=' + broken.join(', ') : ''})`);
}
console.log(`\nTOTAL_BROKEN = ${totalBroken}`);
process.exit(totalBroken === 0 ? 0 : 1);
