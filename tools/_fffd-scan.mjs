// FFFD 全域扫描（我的地盘），UTF-8 直读，不经 shell 输出中文。
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const BS = String.fromCharCode(92);
const API = R + '/content/v1.4.5/zh/api';

const dirty = new Set(execSync('git status --porcelain -- content/v1.4.5/zh/api',
  { cwd: R, encoding: 'utf8', maxBuffer: 1 << 26 })
  .split(/\r?\n/).filter(Boolean).map(l => l.slice(3).trim().split(BS).join('/')));

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p); else if (p.endsWith('.md')) files.push(p);
  }
})(API);

let total = 0, hits = [];
for (const abs of files) {
  const rel = abs.split(BS).join('/').replace(R + '/', '');
  const t = readFileSync(abs, 'utf8');
  const n = (t.match(/\uFFFD/g) || []).length;
  if (n) { total += n; hits.push([rel, n, dirty.has(rel)]); }
}
console.log('FFFD 全域扫描 · 我的地盘 ' + files.length + ' 页（其中脏 ' + dirty.size + ' 页）');
console.log('  含 U+FFFD 的页 = ' + hits.length + '   总字符数 = ' + total);
for (const [rel, n, isDirty] of hits) {
  console.log('   ' + rel + '  x' + n + (isDirty ? '   [本轮脏]' : '   [非本轮]'));
  const lines = readFileSync(R + '/' + rel, 'utf8').split(/\r?\n/);
  lines.forEach((l, i) => {
    if (l.includes('\uFFFD')) console.log('       L' + (i + 1) + ': ' + l.replace(/\uFFFD/g, '[?]').slice(0, 100));
  });
}
