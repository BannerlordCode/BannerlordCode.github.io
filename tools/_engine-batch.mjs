// engine 批次1 清单 —— 按 DISPATCH-TEMPLATE 〇 的别名表（已修正），只取 5/6 且缺「关键成员」的页。
// 拒绝门：写盘后自检 —— 清单里出现非清单来源的页名 ⇒ 报警。
import fs from 'node:fs';
const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = R + '/content/v1.4.5/zh/api';
const D = API + '/engine';

const SEC = [
  ['概述', ['概述']], ['心智模型', ['心智模型']],
  ['怎么用', ['如何使用', '使用示例', '怎么用', '如何用']],
  ['关键成员', ['关键成员', '主要成员', '成员说明', '主要方法', '主要属性']],
  ['真实示例', ['真实示例', '使用示例']],
  ['参见', ['参见', '依赖关系', '依赖图', '导航']],
];
const SHAPE_A = ['它有什么状态', '它允许你做什么', '它保存的状态'];

const rows = [];
for (const f of fs.readdirSync(D)) {
  if (!f.endsWith('.md') || f === '_index.md') continue;
  const t = fs.readFileSync(D + '/' + f, 'utf8');
  const d = /^description:\s*"(.*)"\s*$/m.exec(t);
  const hasDesc = !!d && d[1].includes('的自动生成类参考。');
  const band = hasDesc && SHAPE_A.some(s => t.includes(s)) ? 'shell_strict' : hasDesc ? 'desc_only' : 'no_desc';
  const H = t.split(/\r?\n/).filter(l => /^##\s+/.test(l))
    .map(l => l.replace(/^##\s+/, '').split('（')[0].split('(')[0].trim());
  let have = 0; const miss = [];
  for (const [c, a] of SEC) { if (a.some(x => H.includes(x))) have++; else miss.push(c); }
  rows.push({ page: 'content/v1.4.5/zh/api/engine/' + f, band, have, miss, bytes: Buffer.byteLength(t, 'utf8') });
}

const work = rows.filter(r => r.band !== 'shell_strict' && r.miss.length === 1 && r.miss[0] === '关键成员')
  .sort((a, b) => a.bytes - b.bytes);
const realWrite = rows.filter(r => r.band === 'no_desc' && r.have <= 3).sort((a, b) => a.bytes - b.bytes);
const batch = [...work, ...realWrite];

console.log('=== engine 204 叶页，按修正后的别名表 ===');
const g = {};
for (const r of rows) { const k = r.band + ' ' + r.have + '/6'; g[k] = (g[k] || 0) + 1; }
for (const [k, v] of Object.entries(g).sort()) console.log('  ' + k.padEnd(24) + v);
console.log('\n  可做：5/6 且缺「关键成员」= ' + work.length + '   no_desc 且 ≤3/6（真写）= ' + realWrite.length);
console.log('  ⇒ 批次1 = ' + batch.length + ' 页');
console.log('  ⚠ 更正：我上一条报的「engine 5/6 = 49 页、只缺「怎么用」」两处都错 ——');
console.log('    正确是 ' + work.length + ' 页、缺的是【关键成员】。我用的是旧的错误别名表。');

const ts = new Date().toISOString();
const body = [
  '# engine 批次1（5/6 缺「关键成员」' + (realWrite.length ? ' + no_desc ≤3/6 真写' : '') + '，按体量升序）',
  '# N_before = ' + batch.length,
  '# sampled_at = ' + ts,
  '# scope = content/v1.4.5/zh/api/engine/**',
  '# 判据 = tools/_verify/DISPATCH-TEMPLATE.md 〇（六节清单与别名表）与 〇之二（空壳签名）',
  '# ⚠ 「何时使用 / 何时不要使用」族【不是】「怎么用」的别名，已排除出计数',
  '# 以下每行都是可解析的仓库相对路径',
  ...batch.map(x => x.page),
].join('\n');
fs.writeFileSync(R + '/tools/_verify/engine-batch1.pages.txt', body + '\n', 'utf8');
console.log('\n  写 tools/_verify/engine-batch1.pages.txt');

// —— 拒绝门自检（DISPATCH-TEMPLATE 一.2）：清单里不得出现清单外的页名 ——
const lines = body.split('\n');
const listed = lines.filter(l => l && !l.startsWith('#')).map(l => l.trim());
const expect = new Set(batch.map(x => x.page));
const extra = listed.filter(p => !expect.has(p));
const missingOnDisk = listed.filter(p => !fs.existsSync(R + '/' + p));
console.log('\n=== 拒绝门自检 ===');
console.log('  清单行数 = ' + listed.length + '   清单外页名 = ' + extra.length + (extra.length ? ' ⇒ 报警 ' + extra.join(',') : ' ⇒ 0，通过'));
console.log('  磁盘不存在的页 = ' + missingOnDisk.length + (missingOnDisk.length ? ' ⇒ 报警' : ' ⇒ 0，通过'));
console.log('  首行是注释 = ' + (lines[0].startsWith('#') ? '是' : '否 ⇒ 违反清单文件卫生'));
console.log('  全部只缺「关键成员」或 ≤3/6 = ' +
  (batch.every(x => (x.miss.length === 1 && x.miss[0] === '关键成员') || x.have <= 3) ? '是' : '否'));
console.log('\n=== 批次1 页清单 ===');
batch.forEach(x => console.log('  ' + String(x.bytes).padStart(6) + 'B  ' + x.have + '/6 缺:' + (x.miss.join('+') || '-').padEnd(10) + x.page));