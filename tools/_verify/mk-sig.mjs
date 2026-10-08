#!/usr/bin/env node
// ============================================================================
// tools/_verify/mk-sig.mjs — READ-ONLY 行号锚点表生成器（通用版，取代 mk-sig-b1/b2/b3 三份副本）
// ----------------------------------------------------------------------------
// 为什么存在：写手在 1k–5k 行的源文件上「反复 grep / 通读」会把整个会话吃在阅读上而零落盘
//   （lead-29 实测：两个 worker 13 分钟 0 页）。给一份预先抽好的行号锚点表后，
//   同一批 worker 1–2 分钟一页。
//
// ★ 它【不是】文档生成器，也【绝不】写 content/：
//   · 只读源码；输出只落 tools/_verify/<outDir>/*.sig.txt
//   · 表里只有「行号 + 源码原文那一行」，**零散文、零用途说明、零示例**
//   · 页面的解释性文字必须由写手读代码后自己写（HARD PREMISE，
//     见 tools/_SCOPE-DECISION-20260824.md §4「抽取器只是清单，不是作者」）
//
// 用法:
//   node tools/_verify/mk-sig.mjs <outDir> <relPathUnderTree> [<relPathUnderTree> ...]
// 例:
//   node tools/_verify/mk-sig.mjs b4 TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs
// ============================================================================
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..');
const SRC = resolve(REPO, '..', 'bannerlord-1.4.7');

const [outDir, ...files] = process.argv.slice(2);
if (!outDir || !files.length) {
  console.error('usage: node tools/_verify/mk-sig.mjs <outDir> <relPathUnderTree> [...]');
  process.exit(2);
}
if (!existsSync(SRC)) {
  console.error(`source tree not found: ${SRC}`);
  process.exit(2);
}

const OUT = join(HERE, outDir);
mkdirSync(OUT, { recursive: true });

const DECL_RE = /^\s*(?:\[[^\]]*\]\s*)*(?:public|internal|protected)\b[^;{]*\b(?:class|struct|interface|enum)\b/;
const MEMBER_RE = /^\s*(?:\[[^\]]*\]\s*)*(?:public|protected internal|protected|internal protected)\b/;

let total = 0;
for (const rel of files) {
  const abs = join(SRC, rel);
  if (!existsSync(abs)) {
    console.error(`MISSING SOURCE: ${rel}`);
    process.exit(2);
  }
  const lines = readFileSync(abs, 'utf8').split(/\r?\n/);
  const out = [];
  out.push('# 行号锚点表（只读抽取，不是正文来源）');
  out.push(`# 源文件: bannerlord-1.4.7/${rel}`);
  out.push(`# 总行数: ${lines.length}   ← 页内所有 \`${basename(rel)}:N\` 的 N 必须 <= 这个数`);
  out.push('# 用法: 下面的 `行号: 原文` 直接抄进「关键成员」表尾；用途说明必须你自己读代码后写。');
  out.push('# ★ 每条引用必须写 `File.cs:N`（带文件名），禁止裸 `:N` —— 裸引用会让 J13 检查不到它。');
  out.push('');
  out.push('## 类型声明行');
  lines.forEach((l, i) => {
    if (DECL_RE.test(l)) out.push(`${i + 1}: ${l.trim()}`);
  });
  out.push('');
  out.push('## public / protected 面（按行号升序）');
  let n = 0;
  lines.forEach((l, i) => {
    if (MEMBER_RE.test(l)) {
      out.push(`${i + 1}: ${l.trim()}`);
      n += 1;
    }
  });
  out.push('');
  const name = basename(rel).replace(/\.cs$/, '.sig.txt');
  writeFileSync(join(OUT, name), out.join('\n') + '\n', 'utf8');
  console.log(`${name.padEnd(44)} lines=${String(lines.length).padStart(5)}  memberLines=${n}`);
  total += 1;
}
console.log(`\nwritten to tools/_verify/${outDir}/  (${total} files, content/ untouched)`);
