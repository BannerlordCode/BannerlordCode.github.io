// v1.4.6 手写/生成页数普查（只读，不写 content/）
// 检测方法（两套判据交叉）：
//  A) 生成指纹：generator 骨架特征段 `## 主要成员`（或英文 `## Main Members`）
//  B) 手写深写判据：同时具备 `## 心智模型`/`## 概述` + 风险段 + 真实 csharp 代码块
import fs from 'node:fs';
import path from 'node:path';
const ROOT = 'content/v1.4.6';
function walk(d, acc = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}
const files = walk(ROOT);
const rows = {};
for (const f of files) {
  const lang = f.split(path.sep)[2];
  const t = fs.readFileSync(f, 'utf8');
  const isIndex = path.basename(f) === '_index.md';
  const genFp = /^#{2}\s*(主要成员|Main Members)\s*$/m.test(t) || /自动生成的?类参考|auto-generated stub/i.test(t);
  const mental = /^#{2}\s*(心智模型|Mental\s*Model)\s*$/im.test(t);
  const overview = /^#{2}\s*(概述|Overview)\s*$/im.test(t);
  const risk = /^#{2}\s*(风险与边界|风险|边界|Risks?\b)/im.test(t);
  const csharp = /```csharp\r?\n[\s\S]*?```/.test(t);
  const handwritten = mental && overview && risk && csharp;
  const r = rows[lang] || (rows[lang] = { total: 0, index: 0, leaf: 0, hand: 0, gen: 0, genLeaf: 0, handLeaf: 0 });
  r.total++;
  if (isIndex) r.index++; else {
    r.leaf++;
    if (handwritten) { r.hand++; r.handLeaf++; }
    if (genFp) { r.gen++; r.genLeaf++; }
  }
}
console.log('lang,total,_index,leaf,handwritten_leaf,generated_leaf,gen_fp_but_no_hand,hand_but_gen_fp');
for (const lang of Object.keys(rows).sort()) {
  const r = rows[lang];
  console.log([lang, r.total, r.index, r.leaf, r.hand, r.gen, r.gen - r.hand, r.hand - r.gen].join(','));
}
