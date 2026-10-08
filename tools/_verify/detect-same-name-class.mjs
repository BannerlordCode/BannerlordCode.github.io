#!/usr/bin/env node
// ============================================================================
// tools/_verify/detect-same-name-class.mjs  —  READ-ONLY「同名异类」检测器
// ----------------------------------------------------------------------------
// 缺陷类（boss #23332 裁定要做成检测器）：
//   页面散文描述的**不是主语类**，而是**另一个同名类**。
//   实例：content/v1.4.6/zh/api/core-extra/EventManager.md
//     主语 = TaleWorlds.Library/EventSystem/EventManager.cs（58 行）
//     散文 = TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs（1505 行）
//   ⇒ 九条判据**完全抓不到**：引用可以全部合法、bad=0、J13=0、七节齐全。
//   ⇒ 读者照它写会用到**错误的 API** —— 最贵的一类缺陷（看起来对、实际错）。
//
// 判据（boss 给的算法）：
//   对每一页：
//     ① 从散文里收集它提到的成员名（反引号内 / 表格内）
//     ② 检查这些名字是否出现在【主语源文件】里
//     ③ 若「不在主语文件里」但「在同名的另一个文件里」⇒ 报「同名异类」嫌疑
//
// ★ 与 anchor-completeness.mjs 同源：**拿独立推导出的期望去对账产物**，
//   而不是假定「页面看起来在讲它自己」。
//
// 用法:
//   node tools/_verify/detect-same-name-class.mjs <repoRoot> <srcRoot> [<page.md> ...]
//   （不传页面则扫 content/v1.4.6/zh/api 全树）
// exit: 0 = 无嫌疑；1 = 有嫌疑
// ============================================================================

import fs from 'node:fs';
import path from 'node:path';

const [repoRoot, srcRoot, ...pageArgs] = process.argv.slice(2);
if (!repoRoot || !srcRoot) {
  console.error('usage: detect-same-name-class.mjs <repoRoot> <srcRoot> [<page.md> ...]');
  process.exit(2);
}

// ---- 收集源文件里的「声明名」集合（与锚表工具同源：类型 + public/protected 成员 + 构造函数） ----
function declarationNames(abs) {
  const lines = fs.readFileSync(abs, 'utf8').split(/\r?\n/);
  const names = new Set();
  const TYPE = /^\s*(?:\[[^\]]*\]\s*)*(?:public|protected internal|protected|internal|private)\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+)*(?:class|struct|interface|enum)\s+(\w+)/;
  const MEMBER = /^\s*(?:\[[^\]]*\]\s*)*(?:public|protected internal|protected|internal|private)\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|readonly\s+|const\s+|new\s+|partial\s+|extern\s+|unsafe\s+|async\s+)*(.+?)\s+(\w+)\s*(?:[(<{;=]|\s*$)/;
  const CTOR = /^\s*(?:\[[^\]]*\]\s*)*(?:public|protected internal|protected|internal|private)\s+(?:unsafe\s+|extern\s+)*([A-Z]\w*)\s*\(/;
  for (const L of lines) {
    const t = L.trim();
    if (t === '' || t.startsWith('//') || /^[{}();,]+$/.test(t)) continue;
    let m;
    if ((m = L.match(TYPE))) { names.add(m[1]); continue; }
    if ((m = L.match(CTOR))) { names.add(m[1]); continue; }
    if ((m = L.match(MEMBER))) { names.add(m[2]); }
  }
  return names;
}

// ---- 收集页面散文里提到的「成员名」候选 ----
// ★ 关键区分（由 FaceGen 假阳性实测得出）：
//   若散文写的是**带命名空间限定**的形式（如 `TaleWorlds.MountAndBlade.FaceGen.CreateInstance()`），
//   那说明作者**已经知道**有两个同名类、并主动消歧 ⇒ 这是**正确处理**，不是混淆。
//   ⇒ 必须把「限定形式」与「裸名形式」区分开，否则会误报（并反向惩罚写得好的页）。
function pageMentionedNames(md) {
  const body = md.replace(/^---[\s\S]*?\n---\n/, '');   // 去掉 frontmatter
  const out = new Map();                                 // name -> { ctx, qualified }
  for (const m of body.matchAll(/`([^`\n]+)`/g)) {
    const raw = m[1];
    const segs = raw.split('.');
    // 「限定」判定：该反引号串里出现了 ≥3 段（例：A.B.Method）或包含命名空间样式的多级路径
    const qualified = segs.length >= 3;
    for (const seg of segs) {
      const id = seg.replace(/[^\w]/g, '');
      if (/^[A-Za-z_]\w{2,}$/.test(id)) {
        const prev = out.get(id);
        // ★ 语义：缺陷是「**页面从没告诉你它指哪个同名类**」。
        //   只要页面**任何一处**用了限定形式，读者就已被告知 ⇒ 该名视为已消歧。
        //   （实测依据：FaceGen.md 在 :19/:43/:53 三处写了 `TaleWorlds.MountAndBlade.FaceGen.CreateInstance()`，
        //    所以 :23 的裸 `CreateInstance()` 是可读的；若按「任一处裸名即报」会误报它。）
        if (!prev) out.set(id, { ctx: raw.slice(0, 60), qualified });
        else if (qualified) prev.qualified = true;            // 任一处限定 ⇒ 已消歧
      }
    }
  }
  return out;
}

function subjectSource(md, pageAbs) {
  // ★ 页面格式跨批次不一致：新页用 `**Source:**`，早期批次用 `**File:**` ⇒ 两者都要认
  //   （实测：core-extra/EventManager.md 用的是 `**File:**`，用单一标签会把主语解析成 null 而静默跳过）
  const m = md.match(/^\*\*(?:Source|File):\*\*\s*`([^`]+)`/m);
  if (m) return m[1].trim();
  return null;
}

// BCL / 通用名 stop-list：它们在散文里常作为泛型参数或概念出现，不是「同名异类的成员」
const STOP = new Set([
  'List','Dictionary','Array','String','Int32','Int64','Boolean','Object','Type','Enum','Action','Func',
  'Nullable','ValueTuple','Tuple','IEnumerable','IReadOnlyList','ICollection','KeyValuePair','HashSet',
  'Task','Exception','EventArgs','Span','Memory','Math','Convert','Console','StringBuilder','EqualityComparer',
  'Single','Double','Float','Byte','Char','Void','Params','Nullable1'
]);

// ---- 扫页面清单 ----
let pages = pageArgs;
if (!pages.length) {
  const base = path.join(repoRoot, 'content/v1.4.6/zh/api');
  pages = [];
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.md') && e.name !== '_index.md') pages.push(path.relative(repoRoot, p));
    }
  };
  walk(base);
}

// ---- 预建 basename -> 全树文件列表（只算 ≥2 的，才有同名异类的可能） ----
const byBasename = new Map();
(function indexTree(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'bin' && e.name !== 'obj') indexTree(p); }
    else if (e.name.endsWith('.cs')) {
      if (!byBasename.has(e.name)) byBasename.set(e.name, []);
      byBasename.get(e.name).push(p);
    }
  }
})(srcRoot);

let suspects = 0, scanned = 0, skippedNoDup = 0;
for (const rel of pages) {
  const abs = path.join(repoRoot, rel);
  if (!fs.existsSync(abs)) continue;
  const md = fs.readFileSync(abs, 'utf8');
  const src = subjectSource(md, abs);
  if (!src) continue;
  const subjectAbs = path.join(srcRoot, src);
  if (!fs.existsSync(subjectAbs)) continue;
  scanned++;

  const base = path.basename(src);
  const dup = byBasename.get(base) || [];
  if (dup.length < 2) { skippedNoDup++; continue; }       // 无同名 ⇒ 结构上不可能

  const subjectNames = declarationNames(subjectAbs);
  const mentioned = pageMentionedNames(md);

  // 其他同名文件各自的声明名
  const others = dup.filter(p => path.resolve(p) !== path.resolve(subjectAbs));
  const otherNames = new Map();                            // name -> which other file
  for (const o of others) {
    for (const n of declarationNames(o)) {
      if (!subjectNames.has(n) && !otherNames.has(n)) otherNames.set(n, path.relative(srcRoot, o));
    }
  }

  const hits = [];
  for (const [name, info] of mentioned) {
    if (STOP.has(name)) continue;                            // 通用/BCL 名不计
    if (subjectNames.has(name)) continue;                  // 在主语里 ⇒ 正常
    if (info.qualified) continue;                          // 已用命名空间限定消歧 ⇒ 正确处理，不报
    if (otherNames.has(name)) hits.push({ name, ctx: info.ctx, in: otherNames.get(name) });
  }
  if (hits.length) {
    suspects++;
    console.log(`\n⚠ ${rel}`);
    console.log(`   主语: ${src}   （同名文件 ${dup.length} 个）`);
    for (const h of hits.slice(0, 12)) console.log(`   → 提到 \`${h.name}\`（在 ${h.in}）  上下文: ${h.ctx}`);
    if (hits.length > 12) console.log(`   … 另 ${hits.length - 12} 条`);
  }
}

console.log(`\n扫描 ${scanned} 页（其中 ${skippedNoDup} 页主语无同名文件 ⇒ 结构上不可能）。`);
console.log(`嫌疑页：${suspects}`);
process.exit(suspects ? 1 : 0);
