// en 侧可派池 = 未被任何一方动过的页。
// 「动过」= 未提交改动（dirty） ∪ 最近 N 次提交里出现过的文件。
// 只统计 >10KB 的页（与小批口径一致）。
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const EN = 'content/v1.4.5/en/api';
const sh = c => { try { return execSync(c, { cwd: R, encoding: 'utf8', maxBuffer: 1 << 28 }).trim(); } catch { return ''; } };
const N_COMMITS = 25;

const dirty = new Set(sh(`git status --porcelain -- ${EN}`).split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim().replace(/\\/g, '/').replace(EN + '/', '')));
const committed = new Set(sh(`git log --name-only --pretty=format: -${N_COMMITS} -- ${EN}`).split(/\r?\n/).filter(Boolean).map(s => s.replace(/\\/g, '/').replace(EN + '/', '')));

const touched = new Set([...dirty, ...committed]);
console.log(`口径：未提交改动 ∪ 最近 ${N_COMMITS} 次提交内出现过的文件 = 「已动过」`);
console.log(`  dirty=${dirty.size}  committed=${committed.size}  合计已动过=${touched.size}\n`);

const buckets = ['core-extra', 'viewmodel', 'campaign-ext', 'campaign', 'mission', 'gui', 'system', 'localization', 'core', 'final', 'save-system', 'engine', 'mission-ext'];
console.log('桶            总页  >10KB  已动过(>10KB)   可派(>10KB)');
let totBig = 0, totFree = 0;
const free = [];
for (const b of buckets) {
  let n = 0, big = 0, bigTouched = 0;
  let es; try { es = readdirSync(`${R}/${EN}/${b}`); } catch { continue; }
  for (const f of es) {
    if (!f.endsWith('.md')) continue; if (f === '_index.md') continue;
    n++;
    const rel = `${b}/${f}`;
    const sz = statSync(`${R}/${EN}/${rel}`).size;
    if (sz <= 10240) continue;
    big++;
    if (touched.has(rel)) bigTouched++;
    else { free.push([rel, sz]); }
  }
  totBig += big; totFree += big - bigTouched;
  console.log(`${b.padEnd(14)} ${String(n).padStart(4)} ${String(big).padStart(6)} ${String(bigTouched).padStart(13)} ${String(big - bigTouched).padStart(12)}`);
}
console.log(`${'合计'.padEnd(14)} ${''.padStart(4)} ${String(totBig).padStart(6)} ${''.padStart(13)} ${String(totFree).padStart(12)}`);
free.sort((a, b) => b[1] - a[1]);
console.log('\n=== 可派页（>10KB，按大小降序，前 60）===');
free.slice(0, 60).forEach(([r, s]) => console.log(`  ${(s / 1024).toFixed(0).padStart(3)}KB  ${r}`));
console.log(`  ... 共 ${free.length} 页`);
