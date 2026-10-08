#!/usr/bin/env node
// ============================================================================
// tools/_verify/mk-sig-b1.mjs — READ-ONLY 行号锚点表生成器（lead-29 的 b1 批次用）
// ----------------------------------------------------------------------------
// 用途：把 b1 的 9 个源文件里的【public 面】连同【行号】抽成一份纯文本锚点表，
//       给写手省掉「反复 grep / 通读大文件」这一步。
//
// ★★ 它【不是】文档生成器，也【绝不】写 content/：
//    - 输出只落 tools/_verify/sig-b1/*.sig.txt
//    - 表里只有「行号 + 源码原文那一行」，没有任何散文、没有用途说明
//    - 页面的解释性文字必须由写手读源码后自己写（HARD PREMISE）
//    这个分工与 `tools/_SCOPE-DECISION-20260824.md` §4「抽取器只是清单，不是作者」一致。
//
// 用法: node tools/_verify/mk-sig-b1.mjs
// ============================================================================
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..');
const SRC = resolve(REPO, '..', 'bannerlord-1.4.7');
const OUT = join(HERE, 'sig-b1');

const FILES = [
  'TaleWorlds.CampaignSystem/Hero.cs',
  'TaleWorlds.CampaignSystem/CharacterObject.cs',
  'TaleWorlds.CampaignSystem/Clan.cs',
  'TaleWorlds.CampaignSystem/Party/MobileParty.cs',
  'TaleWorlds.CampaignSystem/Party/PartyBase.cs',
  'TaleWorlds.CampaignSystem/Roster/TroopRoster.cs',
  'TaleWorlds.CampaignSystem/Settlements/Settlement.cs',
  'TaleWorlds.CampaignSystem/Kingdom.cs',
  'TaleWorlds.CampaignSystem/MapEvents/MapEvent.cs',
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
  out.push(`# 行号锚点表（只读抽取，不是正文来源）`);
  out.push(`# 源文件: bannerlord-1.4.7/${rel}`);
  out.push(`# 总行数: ${lines.length}   ← 页内所有 \`${rel.split('/').pop()}:N\` 的 N 必须 <= 这个数`);
  out.push(`# 用法: 下面的 \`行号: 原文\` 直接抄进「关键成员」表尾；用途说明必须你自己读代码后写。`);
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
  console.log(`${name.padEnd(24)} lines=${String(lines.length).padStart(5)}  publicLines=${pubCount}`);
}
console.log(`\nwritten to tools/_verify/sig-b1/  (${FILES.length} files, content/ untouched)`);
