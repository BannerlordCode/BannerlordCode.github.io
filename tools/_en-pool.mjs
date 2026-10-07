// 核 boss 派给我的 en 侧约 47 页：实测规模 + 与 lead-6 已取的 39 页是否重叠。
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const EN = R + '/content/v1.4.5/en/api';

const buckets = ['core-extra', 'viewmodel', 'campaign-ext', 'campaign', 'localization', 'system', 'mission', 'gui', 'core'];
console.log('=== v1.4.5/en/api 各桶实测 ===');
let total = 0;
const byB = new Map();
for (const b of buckets) {
  let n = 0, big = 0;
  const d = EN + '/' + b;
  let es; try { es = readdirSync(d); } catch { console.log(`  ${b.padEnd(14)} (目录不存在)`); continue; }
  const pages = [];
  for (const f of es) if (f.endsWith('.md')) {
    const p = d + '/' + f;
    if (statSync(p).size > 10240) big++;
    pages.push(p); n++;
  }
  total += n;
  byB.set(b, pages);
  console.log(`  ${b.padEnd(14)} 页数 ${String(n).padStart(4)}   >10KB ${String(big).padStart(3)}`);
}
console.log(`  ${'合计'.padEnd(14)}     ${total}`);

// dirty = 本会话被写过的页 = 已有人做过的页（含 lead-6）
let dirtyOut;
try {
  dirtyOut = execSync('git status --porcelain -- content/v1.4.5/en/api', { cwd: R, encoding: 'utf8', maxBuffer: 1 << 26 });
} catch { dirtyOut = ''; }
const dirty = new Set(dirtyOut.split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim().replace(/\\/g, '/').replace('content/v1.4.5/en/api/', '')));

console.log('\n=== 本会话已被写过的 en 页（= 已分配出去，不能重复派）===');
const dirtyByB = new Map();
for (const d of dirty) { const b = d.split('/')[0]; if (!dirtyByB.has(b)) dirtyByB.set(b, []); dirtyByB.get(b).push(d); }
let dTot = 0;
for (const [b, v] of dirtyByB) { console.log(`  ${b.padEnd(14)} ${v.length}`); dTot += v.length; }
console.log(`  ${'合计'.padEnd(14)} ${dTot}`);

console.log('\n=== 未被写过的页（= 可派池）===');
let avail = 0, availBig = 0;
const availList = [];
for (const [b, pages] of byB) {
  const free = pages.filter(p => {
    const rel = b + '/' + p.split(/[\\/]/).pop();
    return !dirty.has(rel);
  });
  const freeBig = free.filter(p => statSync(p).size > 10240);
  avail += free.length; availBig += freeBig.length;
  console.log(`  ${b.padEnd(14)} 可派 ${String(free.length).padStart(4)}   其中 >10KB ${String(freeBig.length).padStart(3)}`);
  for (const p of freeBig) availList.push(b + '/' + p.split(/[\\/]/).pop() + '  ' + (statSync(p).size / 1024).toFixed(0) + 'KB');
}
console.log(`  ${'合计'.padEnd(14)} 可派 ${String(avail).padStart(4)}   其中 >10KB ${availBig}`);
console.log('\n=== >10KB 可派页清单（按桶 + 大小）===');
availList.sort().forEach(x => console.log('  ' + x));
