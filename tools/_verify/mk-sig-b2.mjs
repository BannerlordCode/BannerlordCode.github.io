#!/usr/bin/env node
// ============================================================================
// tools/_verify/mk-sig-b2.mjs — READ-ONLY 行号锚点表生成器（lead-29 的 b2 批次 = localization 桶）
// ----------------------------------------------------------------------------
// 与 mk-sig-b1.mjs 同一形态、同一纪律：
//   · 只读源码，只写 tools/_verify/sig-b2/
//   · 表里只有「行号 + 源码原文那一行」，零散文、零用途说明
//   · 解释性文字必须由写手读代码后自己写（HARD PREMISE）
//   · 不写 content/
// 用法: node tools/_verify/mk-sig-b2.mjs
// ============================================================================
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..');
const SRC = resolve(REPO, '..', 'bannerlord-1.4.7');
const OUT = join(HERE, 'sig-b2');

const FILES = [
  'TaleWorlds.Localization/TextObject.cs',
  'TaleWorlds.Localization/MBTextManager.cs',
  'TaleWorlds.Localization/LocalizedTextManager.cs',
  'TaleWorlds.Localization/VoiceObject.cs',
  'TaleWorlds.Localization/LocalizedVoiceManager.cs',
  'TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs',
  'TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs',
  'TaleWorlds.Localization/TextProcessor/TextGrammarProcessor.cs',
  'TaleWorlds.Localization/LocalizationException.cs',
];

const DECL_RE = /^\s*(?:\[[^\]]*\]\s*)*(?:public|internal|protected)\b[^;{]*\b(?:class|struct|interface|enum)\b/;
const PUBLIC_RE = /\bpublic\b/;

if (!existsSync(SRC)) {
  console.error(`source tree not found: ${SRC}`);
  process.exit(2);
}
mkdirSync(OUT, { recursive: true });

for (const rel of FILES) {
  const abs = join(SRC, rel);
  if (!existsSync(abs)) {
    console.error(`MISSING SOURCE: ${rel}`);
    process.exit(2);
  }
  const lines = readFileSync(abs, 'utf8').split(/\r?\n/);
  const out = [];
  out.push('# 行号锚点表（只读抽取，不是正文来源）');
  out.push(`# 源文件: bannerlord-1.4.7/${rel}`);
  out.push(`# 总行数: ${lines.length}   ← 页内所有 \`${rel.split('/').pop()}:N\` 的 N 必须 <= 这个数`);
  out.push('# 用法: 下面的 `行号: 原文` 直接抄进「关键成员」表尾；用途说明必须你自己读代码后写。');
  out.push('# ★ 每条引用必须写 `File.cs:N`（带文件名），禁止裸 `:N` —— 裸引用会让 J13 检查不到它。');
  out.push('');
  out.push('## 类型声明行');
  lines.forEach((l, i) => {
    if (DECL_RE.test(l)) out.push(`${i + 1}: ${l.trim()}`);
  });
  out.push('');
  out.push('## public 面（按行号升序）');
  lines.forEach((l, i) => {
    if (PUBLIC_RE.test(l)) out.push(`${i + 1}: ${l.trim()}`);
  });
  out.push('');
  const name = rel.split('/').pop().replace(/\.cs$/, '.sig.txt');
  writeFileSync(join(OUT, name), out.join('\n') + '\n', 'utf8');
  const pubCount = lines.filter((l) => PUBLIC_RE.test(l)).length;
  console.log(`${name.padEnd(34)} lines=${String(lines.length).padStart(5)}  publicLines=${pubCount}`);
}
console.log(`\nwritten to tools/_verify/sig-b2/  (${FILES.length} files, content/ untouched)`);
