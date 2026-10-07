// 校准过的基线：viewmodel 里 **File: 原样打不开** 的页数。
// 方法照 §6w 的裁决方式：取该页自己声明的路径，原样 statSync，不剥 bin/、不补根、不回落 basename。
// 用途：与 worker-43 的「64 页需改路径」做 §6w 比对（提案量 vs 缺陷量）。
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source';
const bucket = process.argv[2] || 'viewmodel';
const dir = 'content/v1.4.5/zh/api/' + bucket;

const declaredPath = line => {
  const bt = line.indexOf('`');
  if (bt >= 0) { const e = line.indexOf('`', bt + 1); if (e > bt) return line.slice(bt + 1, e); }
  const c = line.indexOf(':');
  return c >= 0 ? line.slice(c + 1).replace(/\*\*/g, '').trim() : '';
};

let open = 0, broken = 0, noKey = 0, index = 0;
const brokenList = [];
for (const f of readdirSync(dir).filter(x => x.endsWith('.md'))) {
  if (f === '_index.md') { index++; continue; }
  const line = readFileSync(join(dir, f), 'utf8').split(/\r?\n/).find(l => l.trimStart().startsWith('**File'));
  if (!line) { noKey++; continue; }
  const d = declaredPath(line);
  if (!d) { noKey++; continue; }
  let ok = false;
  try { ok = statSync(SRC + '/' + d).isFile(); } catch { ok = false; }
  if (ok) open++; else { broken++; if (brokenList.length < 10) brokenList.push(f + '  [' + d.slice(0, 55) + ']'); }
}
const tot = open + broken + noKey + index;
console.log('校准基线（原始字节 + 原样 statSync，无任何回落/补根）· ' + bucket);
console.log('  原样可打开 = ' + open);
console.log('  原样打不开 = ' + broken + '   ← 这才是真实缺陷量');
console.log('  无源键页   = ' + noKey);
console.log('  _index     = ' + index);
console.log('  相加 = ' + tot + (tot === open + broken + noKey + index ? '' : ''));
if (brokenList.length) { console.log('\n打不开的样例:'); brokenList.forEach(x => console.log('   ' + x)); }
