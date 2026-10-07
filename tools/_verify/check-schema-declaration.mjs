#!/usr/bin/env node
/**
 * Section-schema declaration ruler for architecture pages.
 *
 * 覆盖缺陷（Boss #19517 ②）：架构页的节 schema 声明此前无机械校验，
 * 声明与页面真实 H2 结构脱节（数量不符、名称不符、H2 形态声明自身
 * 被计入 H2 导致假红）只能靠人读发现。本尺子把声明解析成数字并与
 * 真实 H2 计数比对。
 *
 * 设计通则「尺子必须比语料宽」：尺子只认 8 种已知形态，但数字位接受
 * 阿拉伯数字 / 中文数字（一…二十）/ 英文单词（one…twenty）三种写法；
 * 认不出的声明报 UNPARSABLE（不 FAIL、不当 0），绝不 false-red。
 * 本会话已修实例：7c72fe5575 —— 一处「尺子比语料窄」的误报，修复
 * 方式即此通则。
 *
 * 8 种形态（v1.3.15 架构桶实测分布）：
 *   EN-COUNT    > Section schema: this page uses N sections (in document order): A | B | C
 *   EN-CANON    > Section schema: this page uses the canonical seven sections (…).
 *   EN-MIRROR   > Section schema: this page mirrors the zh twin's canonical seven sections (…).
 *   EN-FOLLOWS  > Section schema: this page follows the canonical seven sections (…).
 *   EN-BODY     ## Section schema declaration + 实际节→规范节映射表
 *   ZH-COUNT    > 节 schema：本页采用 N 节（按出现顺序）：A ｜ B ｜ C
 *   ZH-CANON    > 节 schema：本页采用规范七节（…）。
 *   ZH-BODY     ## 节 schema 声明 + 实际节→规范节映射表
 *
 * 接口：
 *   node tools/_verify/check-schema-declaration.mjs <paths...>
 *     每页打印： <path>  decl=<N|UNPARSABLE>  h2=<M>  [OK|MISMATCH|NO-DECL|UNPARSABLE]
 *     有 MISMATCH ⇒ exit 1；全部 OK/NO-DECL ⇒ exit 0；
 *     UNPARSABLE ⇒ exit 2（不 FAIL、不当 0，fail closed）；跑不起来 ⇒ exit 2。
 *   无参：默认扫 content/v1.3.15/{en,zh}/architecture/*.md（目录为空 ⇒ 用法 + exit 2）。
 *   --versions v1.3.15,v1.4.5 可指定其他版本。
 *
 * 边界：
 *   1. H2 形态的声明本身是该页的一个 H2 ⇒ 比较时把声明行从 H2 计数排除
 *      （否则 mission-lifecycle.md en/zh 会假红：h2=7、自称规范六节）。
 *   2. 解析不出 ⇒ UNPARSABLE（不 FAIL、不当 0）。
 *   3. 找不到声明 ⇒ NO-DECL（不 FAIL）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

// --- 数字解析：阿拉伯 / 中文数字 / 英文单词 ---
const CN_DIGITS = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
const EN_WORDS = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
  sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20,
};

function parseChineseNumeral(s) {
  if (s === '十') return 10;
  if (s.startsWith('十')) return 10 + (CN_DIGITS[s[1]] ?? 0);
  if (s.endsWith('十')) return (CN_DIGITS[s[0]] ?? 0) * 10;
  if (s.includes('十')) {
    const [a, b] = s.split('十');
    return (CN_DIGITS[a] ?? 0) * 10 + (CN_DIGITS[b] ?? 0);
  }
  return CN_DIGITS[s] ?? null;
}

function parseCountToken(tok) {
  const t = tok.trim().toLowerCase();
  if (/^\d+$/.test(t)) return Number(t);
  if (t.includes('-')) {
    const [a, b] = t.split('-');
    if (EN_WORDS[a] != null && EN_WORDS[b] != null) return EN_WORDS[a] + EN_WORDS[b];
  }
  if (EN_WORDS[t] != null) return EN_WORDS[t];
  return parseChineseNumeral(t);
}

// 数字位（捕获组）：阿拉伯 | 中文数字 | 英文单词（含连字符复合）
const NUM = '(\\d+|[一二三四五六七八九十]+|[a-z]+(?:-[a-z]+)?)';

// --- 8 种形态 ---
const BLOCKQUOTE_FORMS = [
  {
    id: 'EN-COUNT',
    re: new RegExp(`^>\\s*Section schema: this page uses\\s*${NUM}\\s*sections \\(in document order\\):\\s*(.+?)\\s*$`),
    split: ' | ',
  },
  {
    id: 'EN-CANON',
    re: new RegExp(`^>\\s*Section schema: this page uses the canonical\\s*${NUM}\\s*sections \\((.+)\\)\\.$`),
    split: ' / ',
  },
  {
    id: 'EN-MIRROR',
    re: new RegExp(`^>\\s*Section schema: this page mirrors the zh twin['’]s canonical\\s*${NUM}\\s*sections \\((.+)\\)\\.$`),
    split: ' / ',
  },
  {
    id: 'EN-FOLLOWS',
    re: new RegExp(`^>\\s*Section schema: this page follows the canonical\\s*${NUM}\\s*sections \\((.+)\\)\\.$`),
    split: ' / ',
  },
  {
    id: 'ZH-COUNT',
    re: new RegExp(`^>\\s*节 schema：本页采用\\s*${NUM}\\s*节（按出现顺序）：\\s*(.+?)\\s*$`),
    split: ' ｜ ',
  },
  {
    id: 'ZH-CANON',
    re: new RegExp(`^>\\s*节 schema：本页采用规范\\s*${NUM}\\s*节（(.+)）。$`),
    split: ' / ',
  },
];

const BODY_FORMS = [
  { id: 'EN-BODY', heading: '## Section schema declaration' },
  { id: 'ZH-BODY', heading: '## 节 schema 声明' },
];

// 自称 schema 但匹配不了任何已知形态的块引用行
const UNKNOWN_BQ = /^>\s*(?:Section schema|节 schema)/;
// 自称 schema 的 H2 标题（含近似变体）
const UNKNOWN_H2 = /^##\s+(?:Section schema|节\s*schema)/i;

/** 围栏感知的 H2 提取（代码块内的 ## 不算）。 */
function extractHeadings(lines) {
  const heads = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = lines[i].match(/^##\s+(.+?)\s*$/);
    if (m) heads.push({ name: m[1], line: i });
  }
  return heads;
}

/** 声明标题之后的第一张 markdown 表（原始行）。 */
function parseMappingTable(lines, headingIdx) {
  let i = headingIdx + 1;
  while (i < lines.length && !lines[i].trimStart().startsWith('|')) i++;
  const rows = [];
  while (i < lines.length && lines[i].trimStart().startsWith('|')) {
    rows.push(lines[i]);
    i++;
  }
  return rows;
}

/** 表数据行首列（去反引号，`## Name` 形态）。 */
function tableFirstColumn(rows) {
  return rows.slice(2).map((r) =>
    r.trim().replace(/^\|/, '').split('|')[0].replace(/`/g, '').trim(),
  );
}

/** H2 形态：从声明 prose 中解析自称节数（数字须紧邻 section/节）。 */
function parseProseClaim(lines, headingIdx) {
  let prose = '';
  for (let i = headingIdx + 1; i < lines.length; i++) {
    if (lines[i].trimStart().startsWith('|')) break;
    prose += ' ' + lines[i];
  }
  const m = prose.match(
    new RegExp(`(\\d+|[一二三四五六七八九十]+|[a-z]+(?:-[a-z]+)?)\\s*-?\\s*(?:section|节)`, 'i'),
  );
  if (!m) return null;
  return parseCountToken(m[1]);
}

function diffLists(declared, actual, label) {
  const problems = [];
  if (declared.length !== actual.length) {
    problems.push(`${label}: declared ${declared.length} but actual ${actual.length}`);
  }
  const n = Math.min(declared.length, actual.length);
  for (let i = 0; i < n; i++) {
    if (declared[i] !== actual[i]) {
      problems.push(`${label} ${i + 1}: declared "${declared[i]}" but actual "${actual[i]}"`);
    }
  }
  return problems;
}

function checkPage(absPath) {
  const rel = path.relative(ROOT, absPath).replace(/\\/g, '/');
  const lines = fs.readFileSync(absPath, 'utf8').split(/\r?\n/);
  const headings = extractHeadings(lines);
  const problems = [];
  const formIds = [];
  let decl = null; // null = 未找到声明；数字 = 解析成功；'unparsable' = 认不出
  let h2 = headings.length;
  let foundDeclaration = false;

  // --- 块引用形态 ---
  const bqHits = [];
  for (let i = 0; i < lines.length; i++) {
    if (!UNKNOWN_BQ.test(lines[i])) continue;
    const form = BLOCKQUOTE_FORMS.find((f) => f.re.test(lines[i]));
    bqHits.push({ line: i, text: lines[i].trim(), form });
  }
  for (const hit of bqHits) {
    foundDeclaration = true;
    if (!hit.form) {
      if (decl == null) decl = 'unparsable';
      problems.push(`line ${hit.line + 1}: unrecognized declaration: "${hit.text}"`);
      continue;
    }
    formIds.push(hit.form.id);
    const m = lines[hit.line].match(hit.form.re);
    const n = parseCountToken(m[1]);
    if (n == null) {
      decl = 'unparsable';
      problems.push(`line ${hit.line + 1}: cannot parse count "${m[1]}"`);
      continue;
    }
    decl = n;
    const items = m[2].split(hit.form.split).map((s) => s.trim()).filter(Boolean);
    if (items.length !== n) {
      problems.push(`declares ${n} sections but lists ${items.length}`);
    }
    // EN-MIRROR 列的是中文节名而页面 H2 是英文 ⇒ 只比数量
    if (hit.form.id !== 'EN-MIRROR') {
      problems.push(...diffLists(items, headings.map((h) => h.name), 'section'));
    } else if (headings.length !== n) {
      problems.push(`declares ${n} sections but page has ${headings.length} '## ' headings`);
    }
  }
  if (bqHits.length > 1) problems.push(`${bqHits.length} blockquote declarations (expected at most 1)`);

  // --- H2 形态 ---
  for (const bf of BODY_FORMS) {
    const idx = lines.findIndex((l) => l.trim() === bf.heading);
    if (idx === -1) continue;
    foundDeclaration = true;
    formIds.push(bf.id);
    const claim = parseProseClaim(lines, idx);
    if (claim == null) {
      if (decl == null) decl = 'unparsable';
      problems.push(`declaration section has no parsable section count in its prose`);
      continue;
    }
    decl = claim;
    // 边界 1：声明行本身是 H2 ⇒ 从计数排除
    if (claim !== h2 - 1) {
      problems.push(
        `declares ${claim} sections but page has ${h2 - 1} content H2s (${h2} total minus the declaration section itself)`,
      );
    }
    const rows = parseMappingTable(lines, idx);
    if (rows.length === 0) {
      problems.push('declaration section has no mapping table');
    } else if (rows.length < 3 || !/-{3,}/.test(rows[1])) {
      problems.push('mapping table is missing its header/separator rows');
    } else {
      problems.push(...diffLists(tableFirstColumn(rows), headings.map((h) => `## ${h.name}`), 'table row'));
    }
  }
  // 认不出的 H2 声明
  for (let i = 0; i < lines.length; i++) {
    if (UNKNOWN_H2.test(lines[i]) && !BODY_FORMS.some((bf) => lines[i].trim() === bf.heading)) {
      foundDeclaration = true;
      if (decl == null) decl = 'unparsable';
      problems.push(`line ${i + 1}: unrecognized H2 declaration: "${lines[i].trim()}"`);
    }
  }

  if (!foundDeclaration) {
    return { rel, verdict: 'NO-DECL', decl: null, h2, problems: ['no section-schema declaration found'] };
  }
  // 判定：认不出 ⇒ UNPARSABLE（不 FAIL、不当 0）；有矛盾 ⇒ MISMATCH；否则 OK
  const verdict = decl === 'unparsable' ? 'UNPARSABLE' : problems.length ? 'MISMATCH' : 'OK';
  return { rel, verdict, decl, h2, problems };
}

function collectPages(args) {
  const positional = [];
  let versionFilter = null;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--versions' && args[i + 1]) versionFilter = args[++i];
    else if (!args[i].startsWith('--')) positional.push(args[i]);
  }
  if (positional.length > 0) {
    const pages = [];
    for (const p of positional) {
      const abs = path.resolve(ROOT, p);
      if (fs.statSync(abs).isDirectory()) {
        for (const f of fs.readdirSync(abs).filter((f) => f.endsWith('.md')).sort()) {
          pages.push(path.join(abs, f));
        }
      } else {
        pages.push(abs);
      }
    }
    return pages;
  }
  // 无参：默认扫 v1.3.15（可用 --versions 覆盖）
  const versions = versionFilter
    ? versionFilter.split(',').map((s) => s.trim())
    : ['v1.3.15'];
  const pages = [];
  for (const v of versions) {
    for (const lang of ['en', 'zh']) {
      const dir = path.join(ROOT, 'content', v, lang, 'architecture');
      if (!fs.existsSync(dir)) continue;
      for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort()) {
        pages.push(path.join(dir, f));
      }
    }
  }
  return pages;
}

function usage() {
  console.error('usage: node tools/_verify/check-schema-declaration.mjs <paths...>');
  console.error('       node tools/_verify/check-schema-declaration.mjs [--versions v1.3.15,v1.4.5]');
  console.error('  no args: scan content/v1.3.15/{en,zh}/architecture/*.md');
}

function main() {
  let pages;
  try {
    pages = collectPages(process.argv.slice(2));
  } catch (e) {
    console.error(`error: ${e.message}`);
    usage();
    process.exit(2);
  }
  if (pages.length === 0) {
    console.error('error: no architecture pages matched (directory empty?)');
    usage();
    process.exit(2);
  }

  const results = pages.map(checkPage).sort((a, b) => a.rel.localeCompare(b.rel));

  for (const r of results) {
    const declStr = r.decl == null ? '-' : String(r.decl);
    console.log(`${r.rel}  decl=${declStr}  h2=${r.h2}  ${r.verdict}`);
    for (const p of r.problems) console.log(`    - ${p}`);
  }

  const tally = (fn) => results.reduce((acc, r) => ({ ...acc, [fn(r)]: (acc[fn(r)] ?? 0) + 1 }), {});
  const byVerdict = tally((r) => r.verdict);
  console.log('---- summary ----');
  console.log(`pages: ${results.length}`);
  for (const v of ['OK', 'MISMATCH', 'NO-DECL', 'UNPARSABLE']) {
    if (byVerdict[v]) console.log(`${v}: ${byVerdict[v]}`);
  }
  const mismatches = results.filter((r) => r.verdict === 'MISMATCH');
  if (mismatches.length) {
    console.log('MISMATCH pages:');
    for (const r of mismatches) console.log(`  ${r.rel}`);
  }

  if (byVerdict.MISMATCH) process.exit(1);
  if (byVerdict.UNPARSABLE) process.exit(2);
  process.exit(0);
}

main();
