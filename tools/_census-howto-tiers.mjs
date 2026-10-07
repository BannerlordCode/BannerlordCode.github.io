// 全池「只缺怎么用」定位 + 判别边界取证（boss #8511）。
// 判据取自 tools/_verify/DISPATCH-TEMPLATE.md 〇 六节清单与别名表；「何时使用」族非等价，排除出计数。
// 每个结论旁边给一个【具体文件名】作判别边界 —— 两例就能暴露分档与判据是否一致。
import fs from 'node:fs';
import path from 'node:path';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = R + '/content/v1.4.5/zh/api';

const SEC = [
  ['概述', ['概述']],
  ['心智模型', ['心智模型']],
  ['怎么用', ['如何使用', '使用示例', '怎么用', '如何用']],
  ['关键成员', ['关键成员', '主要成员', '成员说明', '主要方法', '主要属性']],
  ['真实示例', ['真实示例', '使用示例']],
  ['参见', ['参见', '依赖关系', '依赖图', '导航']],
];
const NEQ_STEMS = ['何时使用', '何时用'];
const SHAPE_A = ['它有什么状态', '它允许你做什么', '它保存的状态'];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.md') && !e.name.endsWith('_index.md')) files.push(p);
  }
})(API);

const rows = [];
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const rel = f.slice(R.length + 1).split('\\').join('/');
  const d = /^description:\s*"(.*)"\s*$/m.exec(t);
  const hasDesc = !!d && d[1].includes('的自动生成类参考。');
  const band = hasDesc && SHAPE_A.some(s => t.includes(s)) ? 'shell_strict' : hasDesc ? 'desc_only' : 'no_desc';
  const H = t.split(/\r?\n/).filter(l => /^##\s+/.test(l))
    .map(l => l.replace(/^##\s+/, '').split('（')[0].split('(')[0].trim());
  const present = new Set(H);
  let have = 0; const miss = [];
  for (const [c, a] of SEC) { if (a.some(x => present.has(x))) have++; else miss.push(c); }
  const neq = H.filter(h => NEQ_STEMS.some(s => h.includes(s))).length;
  rows.push({ page: rel, bucket: rel.split('/').slice(0, 5).join('/'), band, have, miss, neq, headings: H });
}

const nonShell = rows.filter(r => r.band !== 'shell_strict');
const onlyHowTo = nonShell.filter(r => r.miss.length === 1 && r.miss[0] === '怎么用');
const onlyMembers = nonShell.filter(r => r.miss.length === 1 && r.miss[0] === '关键成员');

console.log('=== 全池（判据 = DISPATCH-TEMPLATE 〇）===');
console.log('  叶页 ' + rows.length + '   shell_strict ' + rows.filter(r => r.band === 'shell_strict').length +
  '   desc_only ' + rows.filter(r => r.band === 'desc_only').length + '   no_desc ' + rows.filter(r => r.band === 'no_desc').length);
console.log('  非 shell_strict ' + nonShell.length + '   已齐 6/6 ' + nonShell.filter(r => r.have === 6).length);
console.log('  「只缺怎么用」= ' + onlyHowTo.length + '     「只缺关键成员」= ' + onlyMembers.length);

const byB = new Map();
for (const r of onlyHowTo) byB.set(r.bucket, (byB.get(r.bucket) || 0) + 1);
console.log('\n=== 「只缺怎么用」逐桶（这才是补一节工种）===');
for (const [b, n] of [...byB].sort((a, c) => c[1] - a[1])) console.log('  ' + b.padEnd(46) + n);

const byM = new Map();
for (const r of onlyMembers) byM.set(r.bucket, (byM.get(r.bucket) || 0) + 1);
console.log('\n=== 「只缺关键成员」逐桶（另一档工种，不混入）===');
for (const [b, n] of [...byM].sort((a, c) => c[1] - a[1]).slice(0, 8)) console.log('  ' + b.padEnd(46) + n);

// —— 判别边界：每档举一个具体文件名 ——
const byB2 = new Map();
for (const r of onlyHowTo) { if (!byB2.has(r.bucket)) byB2.set(r.bucket, []); byB2.get(r.bucket).push(r); }
const top = [...byB2.entries()].sort((a, c) => c[1].length - a[1].length);
console.log('\n=== 判别边界取证（boss 8511 要求：每档举一个具体文件名）===');
for (const [b, rs] of top.slice(0, 3)) {
  const s = rs[0];
  console.log('\n  【桶】' + b + '   (' + rs.length + ' 页判为「只缺怎么用」)');
  console.log('  【例·判为 5/6】' + s.page);
  console.log('    实测 h2 = ' + JSON.stringify(s.headings));
  console.log('    六节命中 = ' + SEC.filter(([, a]) => a.some(x => s.headings.includes(x))).map(c => c[0]).join(' / '));
  console.log('    缺 = 怎么用');
}
console.log('\n  【对照·判为 ≤4/6】' + (nonShell.filter(r => r.have <= 4)[0]?.page || '(无)'));
const c4 = nonShell.filter(r => r.have <= 4)[0];
if (c4) {
  console.log('    实测 h2 = ' + JSON.stringify(c4.headings));
  console.log('    命中 = ' + SEC.filter(([, a]) => a.some(x => c4.headings.includes(x))).map(c => c[0]).join(' / '));
  console.log('    缺 = ' + c4.miss.join(' + '));
}
console.log('\n  【反例检查】含「何时使用」族但未计为别名的页（证明排除生效）：');
const neqHit = nonShell.filter(r => r.neq > 0).slice(0, 3);
for (const r of neqHit) console.log('    ' + r.page + '  含非等价小节 ' + r.neq + ' 个，缺=' + (r.miss.join('+') || '-'));
