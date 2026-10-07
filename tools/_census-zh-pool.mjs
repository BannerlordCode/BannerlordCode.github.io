// 剩余池普查 —— 一次量完六项（boss #8394 派单）。只读，不碰 content/。
//
// ① zh 叶页总数（完整相对路径去重）
// ② 机器空壳数 —— 语料导出的 zh 签名：description 含「的自动生成类参考。」且正文含两型模板句之一
// ③ 六节分布，只在【非空壳】页上算，拆 5/6 与 ≤4/6
// ④ 逐桶 ①②③ + 锚点计数（每页恰好一次）
// ⑤ 静默门：该桶最近一次写入距今多少分钟
// ⑥ 我今天已经落过页的桶
//
// §4v 范围声明：本工具只扫 content/v1.4.5/zh/api/**（单版本、单语言）。超出不引用。
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const R = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = R + '/content/v1.4.5/zh/api';
const ex = c => { try { return execSync(c, { cwd: R, encoding: 'utf8', maxBuffer: 1 << 28 }); } catch { return ''; } };

// —— 语料导出的空壳签名（不采信任何外部给的串）——
const SHELL_DESC = '的自动生成类参考。';
const SHELL_BODY = [
  '它有什么状态',          // 概述模板句（前半）
  '它允许你做什么',        // 概述模板句（后半）
  '先从命名空间',          // 心智模型模板句
];

// —— 六节：按语料自身的主导标题集取，标题别名一并计入 ——
const SECTIONS = [
  ['概述', ['概述']],
  ['心智模型', ['心智模型']],
  ['如何使用', ['如何使用', '使用示例']],
  ['关键成员', ['关键成员', '主要成员', '成员说明']],
  ['真实示例', ['真实示例', '使用示例']],
  ['参见', ['参见', '依赖关系', '依赖图']],
];

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p); else if (e.name.endsWith('.md')) files.push(p);
  }
})(API);

const rel = p => p.slice(R.length + 1).split('\\').join('/');
const leafs = files.filter(f => !f.endsWith('/_index.md'));
const inSet = new Set(leafs.map(rel));

// git 脏页 = 我这条线已动过的页（用于 ⑥ 与静默门）
const dirty = new Map();
for (const line of ex('git status --porcelain -- content/v1.4.5/zh/api').split('\n')) {
  if (!line) continue;
  const p = line.slice(3).trim().split('\\').join('/');
  dirty.set(p.replace('content/v1.4.5/zh/api/', ''), 1);
}

const rows = [];
for (const f of leafs) {
  const t = fs.readFileSync(f, 'utf8');
  const lines = t.split(/\r?\n/);
  const headings = lines.filter(l => /^##\s+/.test(l)).map(l => l.replace(/^##\s+/, '').trim());
  const has = name => headings.some(h => name.split('（')[0].split('(')[0].trim() === name);

  const desc = /^description:\s*"(.*)"\s*$/m.exec(t);
  const descShell = !!desc && desc[1].includes(SHELL_DESC);
  const bodyHits = SHELL_BODY.filter(s => t.includes(s));
  const isShell = descShell && bodyHits.length > 0;

  let have = 0;
  const missing = [];
  for (const [canon, aliases] of SECTIONS) {
    const ok = aliases.some(a => headings.some(h => h.split('（')[0].split('(')[0].trim() === a));
    if (ok) have++; else missing.push(canon);
  }

  const parts = rel(f).split('/');
  rows.push({ bucket: parts[4], page: rel(f), shell: isShell, descShell, bodyHits: bodyHits.length, have, missing, dirty: dirty.has(rel(f).replace('content/v1.4.5/zh/api/', '')) });
}

// —— 输出 ——
console.log('=== 剩余池普查 · ' + new Date().toISOString() + ' ===');
console.log('范围 = content/v1.4.5/zh/api/**（单版本单语言，§4v）');
console.log('六节定义 = ' + SECTIONS.map(s => s[0]).join(' / ') + '（别名已合并）');
console.log('');
console.log('① zh 叶页总数（完整相对路径去重，不含 _index.md）= ' + leafs.length);
console.log('   桶首页 _index.md = ' + (files.length - leafs.length));

const shellAll = rows.filter(r => r.shell);
const descOnly = rows.filter(r => r.descShell && !r.shell);
console.log('');
console.log('② 机器空壳 = ' + shellAll.length + '   (description 含签名 = ' + rows.filter(r => r.descShell).length + '，其中正文模板句也对上的 = ' + shellAll.length + ')');
console.log('   仅 description 命中、正文模板句未命中的 = ' + descOnly.length + '  ← 这一档我【不】算空壳，报出来待裁');

const nonShell = rows.filter(r => !r.shell);
const five = nonShell.filter(r => r.have === 5).length;
const four = nonShell.filter(r => r.have <= 4).length;
const six = nonShell.filter(r => r.have === 6).length;
console.log('');
console.log('③ 六节分布（只在【非空壳】' + nonShell.length + ' 页】上算）');
console.log('   6/6 已齐 = ' + six);
console.log('   5/6 只缺「怎么用」 = ' + five);
console.log('   ≤4/6 要真写 = ' + four);

// ④ 逐桶
console.log('');
console.log('④ 桶  叶页  空壳  非壳  6/6  5/6  ≤4/6  锚点(每页恰好一次)  dirty');
const byB = new Map();
for (const r of rows) {
  if (!byB.has(r.bucket)) byB.set(r.bucket, []);
  byB.get(r.bucket).push(r);
}
const tier1 = [];
for (const [b, rs] of byB) {
  const sh = rs.filter(r => r.shell).length;
  const ns = rs.length - sh;
  const s6 = rs.filter(r => !r.shell && r.have === 6).length;
  const s5 = rs.filter(r => !r.shell && r.have === 5).length;
  const s4 = rs.filter(r => !r.shell && r.have <= 4).length;
  // 锚点计数：tier1 = 5/6 + ≤4/6 = 需要补的页；每页恰好一次 ⇒ 桶内这些页互不重复
  const anchor = s5 + s4;
  const dcount = rs.filter(r => r.dirty).length;
  console.log(`${b.padEnd(14)} ${String(rs.length).padStart(4)} ${String(sh).padStart(5)} ${String(ns).padStart(5)} ${String(s6).padStart(4)} ${String(s5).padStart(4)} ${String(s4).padStart(5)} ${String(anchor).padStart(16)} ${String(dcount).padStart(6)}`);
  if (anchor > 0) tier1.push({ b, anchor, s5, s4, ns, dcount });
}

// ⑤ 静默门
console.log('');
console.log('⑤ 静默门：该桶最近一次写入距今分钟数（0 = 正在被写）');
const now = Date.now();
const mt = ex('git diff --numstat -- content/v1.4.5/zh/api');
for (const [b] of byB) {
  let newest = 0;
  for (const f of leafs) {
    if (!rel(f).includes('/' + b + '/')) continue;
    newest = Math.max(newest, fs.statSync(f).mtimeMs);
  }
  console.log('  ' + b.padEnd(14) + Math.round((now - newest) / 60000) + ' 分钟');
}

// ⑥
console.log('');
console.log('⑥ 我今天已落过页的桶（dirty>0）—— 避免与在跑的两条线重叠');
const touched = [...byB].map(([b, rs]) => [b, rs.filter(r => r.dirty).length]).filter(x => x[1] > 0);
console.log('  ' + (touched.map(t => t[0] + '(' + t[1] + ')').join('  ') || '(无)'));

// 取桶建议
console.log('');
console.log('=== 取桶建议：tier1(锚点>0) 按 anchor 降序 ===');
tier1.sort((a, b) => b.anchor - a.anchor).forEach(t => console.log('  ' + t.b.padEnd(14) + 'anchor=' + String(t.anchor).padStart(4) + '  5/6=' + t.s5 + '  ≤4/6=' + t.s4 + '  dirty=' + t.dcount + (t.dcount > 0 ? '   ← 已在跑' : '')));
