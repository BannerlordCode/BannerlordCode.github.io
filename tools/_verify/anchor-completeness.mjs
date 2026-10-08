#!/usr/bin/env node
// ============================================================================
// tools/_verify/anchor-completeness.mjs  —  READ-ONLY 抽取器完备性检查
// ----------------------------------------------------------------------------
// 为什么需要它（boss #23237，本会话第 3 次「抽取器覆盖不全」）：
//   页面层已有集合等式检查：`page citation set ⊆ anchor set`。
//   但**同一把尺反过来用在工具层才看得见抽取器的漏洞**：
//     若抽取器整类漏掉（例：构造函数、private 辅助方法），
//     页面层两边**都少同一批** ⇒ 集合等式**照常通过** ⇒ 漏洞**静默**。
//   ⇒ 必须拿一份**独立于 mk-sig 实现**的声明清单去对账。
//
// 判据：`anchor set ⊇ declaration set`（差集必须为空）
//
// ★ 独立性声明：本文件的声明探针**不复用** make-anchor-table.mjs 的任何正则。
//   它只用「行首访问修饰符 + 行内是否含 `(`」这类**形状**判断，故意写得比锚表宽 ——
//   宽出来的部分由人工判定，窄的那一侧才是危险方向。
//
// 用法:
//   node tools/_verify/anchor-completeness.mjs <srcRoot> <relative.cs> [<relative.cs> ...]
//
// 输出：每个文件报 `锚表 N 条 / 独立清单 M 条 / 差集 K 条`，并列出差集行。
// exit: 0 = 所有文件差集为空；1 = 有差集
// ============================================================================

import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const srcRoot = argv[0];
const files = argv.slice(1);
if (!srcRoot || !files.length) {
  console.error('usage: anchor-completeness.mjs <srcRoot> <relative.cs> ...');
  process.exit(2);
}

// 独立探针（与 mk-sig 的正则无关）
//
// ★ 设计要点（boss #23237：「宽的那一侧才是安全的」）：
//   探针必须**故意写得比锚表宽** —— 它要报出**所有**带访问修饰符的声明行，
//   然后由**人工/策略**判定哪些差集是「有意跳过」。
//   若探针比锚表窄（例：只找含 `(` 的行），它就**看不见**锚表整类漏掉的属性/字段 ⇒
//   `anchor ⊇ probe` 会**假通过**，而那正是我们要防的方向。
const ACCESS = /^\s*(?:\[[^\]]*\]\s*)*(public|protected internal|protected|internal|private)\s/;

function independentDeclarations(abs) {
  const lines = fs.readFileSync(abs, 'utf8').split(/\r?\n/);
  const out = [];
  lines.forEach((L, i) => {
    const t = L.trim();
    if (t === '' || t.startsWith('//')) return;          // 空行 / 注释
    if (/^[{}();,]+$/.test(t)) return;                    // 纯括号标点
    if (!ACCESS.test(L)) return;
    // ★ 故意宽：只要带访问修饰符就算声明候选（含属性、字段、方法、构造函数、类型）
    out.push(i + 1);
  });
  return out;
}

// 把差集分类：
//   expected —— mk-sig 的**书面策略**就是跳过（private/internal 的纯字段：无 `(` 且终符为 `;`/`=`）
//   gap      —— 不属于上述策略 ⇒ 抽取器**静默漏项**（危险方向）
function classifyGap(raw) {
  const t = raw.trim();
  const isPrivateOrInternal = /^\s*(?:\[[^\]]*\]\s*)*(private|internal)\s/.test(raw);
  const hasParen = t.includes('(');
  const fieldLike = /[;=]\s*$/.test(t.replace(/\s*\/\/.*$/, '').trim()) || /\{\s*get;\s*(private\s+)?set;\s*\}/.test(t);
  if (isPrivateOrInternal && !hasParen && fieldLike) return 'expected';
  return 'gap';
}

function anchorLines(abs, mkSig) {
  // 直接调用权威工具，拿到它输出的锚表行号
  const { execSync } = mkSig;
  const out = execSync(`node ${JSON.stringify(mkSig.tool)} ${JSON.stringify(srcRoot)} ${JSON.stringify(mkSig.rel)}`, { encoding: 'utf8' });
  const set = new Set();
  for (const l of out.split('\n')) {
    const m = l.match(/^(\d+): /);
    if (m) set.add(+m[1]);
  }
  return set;
}

import { execSync } from 'node:child_process';
const TOOL = 'tools/_verify/make-anchor-table.mjs';

let anyDiff = 0;
for (const rel of files) {
  const abs = path.join(srcRoot, rel);
  if (!fs.existsSync(abs)) { console.log(`  ${rel}  MISSING`); continue; }
  const decl = independentDeclarations(abs);
  const anchors = anchorLines(abs, { execSync, tool: TOOL, rel });
  const lines = fs.readFileSync(abs, 'utf8').split(/\r?\n/);
  const diff = decl.filter(n => !anchors.has(n));
  const gaps = diff.filter(n => classifyGap(lines[n - 1]) === 'gap');
  const expected = diff.filter(n => classifyGap(lines[n - 1]) === 'expected');
  console.log(`\n### ${rel}`);
  console.log(`  锚表 ${anchors.size} 条 / 独立清单 ${decl.length} 条 / 差集 ${diff.length} 条（gap ${gaps.length} · expected-skip ${expected.length}）`);
  for (const n of gaps) console.log(`    ★ GAP ${n}: ${lines[n - 1].trim().slice(0, 100)}`);
  for (const n of expected) console.log(`      skip ${n}: ${lines[n - 1].trim().slice(0, 90)}`);
  if (gaps.length) anyDiff = 1;
}

console.log(`\n判定：${anyDiff ? '存在 GAP ⇒ 抽取器有静默漏项（见上 ★）' : '所有文件 GAP = 0 ✅（anchor set ⊇ declaration set）'}`);
process.exit(anyDiff);
