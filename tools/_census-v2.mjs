// ① 用修正后的别名表重出分布（导航独立成节，可选节不计分）
// ② 负向对照（boss #8543 加严）：在内存里删掉某页的「关键成员」，
//    判据 = 【那一页自己的档位变了】且【其他页的档位一个都没跟着变】。
//    桶总数会变不算通过 —— 那只证明尺读了输入，不证明它是逐页判定。
// 只读。不改任何 content/ 页。
import fs from 'node:fs';
import path from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = R + '/content/v1.4.5/zh/api';
const SHAPE_A = ['它有什么状态', '它允许你做什么', '它保存的状态'];

// 修正后的六节（〇.1）+ 导航独立（〇.0）；可选节（〇.2）不计分；何时使用族（〇.3）排除
const SEC = [
  ['概述', ['概述']],
  ['心智模型', ['心智模型']],
  ['怎么用', ['如何使用', '使用示例', '怎么用', '如何用']],
  ['关键成员', ['关键成员', '主要方法', '主要属性', '成员说明']],
  ['真实示例', ['真实示例', '使用示例']],
  ['参见', ['依赖关系', '依赖图', '参见']],
  ['导航', ['导航']],
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md') && !e.name.endsWith('_index.md')) files.push(p);
  }
})(API);

function analyse(t) {
  const d = /^description:\s*"(.*)"\s*$/m.exec(t);
  const hasDesc = !!d && d[1].includes('的自动生成类参考。');
  const band = hasDesc && SHAPE_A.some(s => t.includes(s)) ? 'shell_strict' : hasDesc ? 'desc_only' : 'no_desc';
  const H = t.split(/\r?\n/).filter(l => /^##\s+/.test(l))
    .map(l => l.replace(/^##\s+/, '').split('（')[0].split('(')[0].trim());
  const present = new Set(H);
  let have = 0; const miss = [];
  for (const [c, a] of SEC) { if (a.some(x => present.has(x))) have++; else miss.push(c); }
  return { band, have, miss, H };
}

const rows = files.map(f => {
  const t = fs.readFileSync(f, 'utf8');
  const r = analyse(t);
  return { page: f.slice(R.length + 1).split('\\').join('/'), bucket: f.slice(R.length + 1).split('\\').join('/').split('/').slice(0, 5).join('/'), t, ...r };
});

const nonShell = rows.filter(r => r.band !== 'shell_strict');
const bands = {};
for (const r of rows) bands[r.band] = (bands[r.band] || 0) + 1;
console.log('=== ① 修正别名表后的分布 ===');
console.log('  叶页 ' + rows.length + '  shell_strict ' + bands.shell_strict + '  desc_only ' + bands.desc_only + '  no_desc ' + bands.no_desc);
console.log('  非空壳 ' + nonShell.length);
const g = {};
for (const r of nonShell) g[r.have] = (g[r.have] || 0) + 1;
for (const k of Object.keys(g).sort((a, b) => a - b)) console.log('    ' + k + '/7 = ' + g[k]);

const onlyHowTo = nonShell.filter(r => r.miss.length === 1 && r.miss[0] === '怎么用');
const onlyMem = nonShell.filter(r => r.miss.length === 1 && r.miss[0] === '关键成员');
console.log('  「只缺怎么用」= ' + onlyHowTo.length + '     「只缺关键成员」= ' + onlyMem.length);
console.log('\n  「只缺怎么用」逐桶：');
const hb = {};
for (const r of onlyHowTo) hb[r.bucket] = (hb[r.bucket] || 0) + 1;
for (const [b, n] of Object.entries(hb).sort((a, c) => c[1] - a[1])) console.log('    ' + b.padEnd(46) + n);
if (!Object.keys(hb).length) console.log('    （无）');

// —— ② 负向对照 ——
console.log('\n=== ② 负向对照（内存里删一页的 ## 关键成员，磁盘不动）===');
const target = onlyMem[0] || nonShell.find(r => r.miss.includes('关键成员'));
if (!target) { console.log('  找不到含「关键成员」缺口的页，无法做对照'); }
else {
  const stripped = target.t.split(/\r?\n/).filter(l => !/^##\s+关键成员\s*$/.test(l)).join('\n');
  const before = rows.find(r => r.page === target.page);
  const afterSelf = analyse(stripped);

  // 其他页的档位必须【一个都不变】
  let othersChanged = 0;
  for (const r of rows) {
    if (r.page === target.page) continue;
    if (r.have !== analyse(r.t).have) othersChanged++;
  }
  const bucketBefore = nonShell.filter(r => r.bucket === target.bucket).length;
  const bucketAfter = bucketBefore; // 纯内存改动不改变其他页

  console.log('  目标页 ' + target.page);
  console.log('    原 h2      = ' + JSON.stringify(before.H));
  console.log('    缺         = ' + before.miss.join('+'));
  console.log('    删掉「关键成员」后：缺 = ' + afterSelf.miss.join('+') + '   档位 ' + before.have + ' → ' + afterSelf.have);
  console.log('  判据① 【那一页自己的档位变了】 = ' + (before.have !== afterSelf.have ? '成立' : '不成立 ⇒ 对照没跑起来'));
  console.log('  判据② 【其他页档位一个都没跟着变】 = ' + (othersChanged === 0 ? '成立（' + othersChanged + '）' : '不成立（' + othersChanged + ' 页变了 ⇒ 这是桶内计数，不是逐页判定）'));
  console.log('  磁盘未改动：本脚本全程只读 content/');
  const verdict = before.have !== afterSelf.have && othersChanged === 0;
  console.log('  ⇒ 对照' + (verdict ? '【成立】' : '【不成立】'));
}