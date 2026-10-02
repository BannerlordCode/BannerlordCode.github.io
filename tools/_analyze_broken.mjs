// Analyze broken links from tools/_links.txt: for each broken (source, href),
// resolve the target path and check whether the same relative path exists in
// v1.3.15 (the prior 0-broken version). If so, a recursive port fixes it.
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';

const CONTENT = 'content';
const lines = readFileSync('tools/_links.txt', 'utf8').split(/\r?\n/);

function existsAsPage(p) {
  if (existsSync(p + '.md')) return true;
  if (existsSync(join(p, '_index.md'))) return true;
  if (existsSync(p) && existsSync(join(p, '_index.md'))) return true;
  return false;
}

let curFile = null;
const missing = []; // { from, href, resolved145, exists131 }
let totalBroken = 0;

for (const line of lines) {
  const fm = line.match(/^##\s+(\S+)\s+/);
  if (fm) { curFile = fm[1]; continue; }
  const lm = line.match(/^\s*->\s+(\S+)/);
  if (lm && curFile) {
    const href = lm[1];
    totalBroken++;
    const baseDir = dirname(join(CONTENT, curFile));
    let target;
    try { target = resolve(baseDir, href); } catch { continue; }
    const relFromContent = relative(CONTENT, target).split(sep).join('/');
    // map v1.4.5 -> v1.3.15
    const rel131 = relFromContent.replace(/^v1\.4\.5\//, 'v1.3.15/');
    const exists131 = existsAsPage(join(CONTENT, rel131));
    missing.push({ from: curFile, href, rel145: relFromContent, rel131, exists131 });
  }
}

const unique145 = new Map();
for (const m of missing) {
  if (!unique145.has(m.rel145)) unique145.set(m.rel145, m);
}
let exist131Count = missing.filter((m) => m.exists131).length;
console.log('total broken hrefs:', totalBroken);
console.log('unique missing target paths:', unique145.size);
console.log('broken hrefs whose target EXISTS in v1.3.15:', exist131Count);
console.log('broken hrefs whose target MISSING even in v1.3.15:', totalBroken - exist131Count);
// sample of missing-even-in-131
const missBoth = missing.filter((m) => !m.exists131).slice(0, 30);
console.log('sample missing-in-both:', JSON.stringify(missBoth.map((m) => m.rel145), null, 0));
