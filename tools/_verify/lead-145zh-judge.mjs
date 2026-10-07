#!/usr/bin/env node
// ============================================================================
// tools/_verify/lead-145zh-judge.mjs  —  READ-ONLY 判分器（lead-145zh 派单方给定）
// ----------------------------------------------------------------------------
// 用途：对 lead-145zh 的 v1.4.5/zh 手写深页做逐页验收。**不写 content/，只读**。
//
// 用法:
//   node tools/_verify/lead-145zh-judge.mjs <page.md> [<page.md> ...]
//   node tools/_verify/lead-145zh-judge.mjs --manifest tools/_verify/lead-145zh-b01.pages.txt
//   node tools/_verify/lead-145zh-judge.mjs --manifest <f> --json tools/_verify/lead-145zh-b01.judge.json
//
// 判据（每条独立输出 PASS/FAIL，缺一即该页判未通过）:
//   J1 U+FFFD == 0
//   J2 六节齐全: 概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航（H2 精确匹配）
//   J3 引用边界: 页内每条 `X.cs:N` 的 N <= (wc -l X.cs)，且文件存在（源码根 ../bannerlord-1.4.5）
//   J4 裸行号: 未落文件名的 `:N` 引用数（模板纪律：必须写成 `X.cs:N`）
//   J5 链接形态: 正文不得出现 `](./`；不得直接链 `_index.md`；`_index.md` 自身豁免
//   J6 机械深页: tools/lib/handwritten-policy.mjs classifyPage() === deep_pass
//   J7 脱离自动档: 全文不得含生成标记（的自动生成类参考 / 的自动生成战役动作参考 / Auto-generated*）
//   J8 体量: 正文（frontmatter 之后）字节 > 2500 且 H2/H3 >= 1
//   J9 真实示例: ```csharp 代码块总有效行 >= 3（去掉注释与空行后）
//
// 退出码: 0 = 全部页 PASS；1 = 至少一页 FAIL（stdout 打印失败明细）
// ============================================================================
import { readFileSync, existsSync, writeFileSync, readdirSync } from 'node:fs';
import { basename, join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { classifyPage } from '../lib/handwritten-policy.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..');
const SRC_ROOT = resolve(REPO, '..', 'bannerlord-1.4.5', 'Bannerlord.Source');

const SECTIONS = ['概述', '心智模型', '怎么用', '关键成员', '真实示例', '参见', '导航'];
const GEN_MARKERS = ['的自动生成类参考', '的自动生成战役动作参考', 'Auto-generated class reference', 'Auto-generated campaign action reference'];
const FFFD = '\uFFFD';

// ---- source index: basename(.cs, no ext) -> [abs paths] --------------------
let SRC_INDEX = null;
function buildSrcIndex() {
  if (SRC_INDEX) return SRC_INDEX;
  SRC_INDEX = new Map();
  if (!existsSync(SRC_ROOT)) return SRC_INDEX;
  const stack = [SRC_ROOT];
  while (stack.length) {
    const dir = stack.pop();
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      const p = join(dir, e.name);
      if (e.isDirectory()) { stack.push(p); continue; }
      if (!e.name.endsWith('.cs')) continue;
      const key = e.name.slice(0, -3);
      if (!SRC_INDEX.has(key)) SRC_INDEX.set(key, []);
      SRC_INDEX.get(key).push(p);
    }
  }
  return SRC_INDEX;
}
const lineCountCache = new Map();
function lineCount(abs) {
  if (!lineCountCache.has(abs)) lineCountCache.set(abs, readFileSync(abs, 'utf8').split(/\r?\n/).length);
  return lineCountCache.get(abs);
}

function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  return m ? { frontmatter: m[1], body: text.slice(m[0].length) } : { frontmatter: '', body: text };
}

function judge(pageRel) {
  const abs = resolve(REPO, pageRel);
  const out = { page: pageRel, checks: {}, fail: [], warn: [] };
  if (!existsSync(abs)) { out.fail.push('J0 file-missing'); return out; }
  const text = readFileSync(abs, 'utf8');
  const { body } = splitFrontmatter(text);
  const isIndex = basename(pageRel) === '_index.md';

  // J1
  const fffd = (text.match(new RegExp(FFFD, 'g')) || []).length;
  out.checks.J1_fffd = fffd;
  if (fffd !== 0) out.fail.push(`J1 fffd=${fffd}`);

  // J2
  const h2 = (body.match(/^##\s+(.+?)\s*$/gm) || []).map((l) => l.replace(/^##\s+/, '').trim());
  const missing = SECTIONS.filter((s) => !h2.includes(s));
  out.checks.J2_h2 = h2;
  out.checks.J2_missing = missing;
  if (missing.length) out.fail.push(`J2 missing=${missing.join(',')}`);

  // J3 / J4
  const cited = [...text.matchAll(/([A-Za-z_][\w.]*\.cs):(\d+)/g)].map((m) => ({ file: m[1], line: Number(m[2]) }));
  const bad = [];
  for (const c of cited) {
    const key = basename(c.file, '.cs');
    const hits = buildSrcIndex().get(key);
    if (!hits || !hits.length) { bad.push(`${c.file}:${c.line} (source-not-found)`); continue; }
    const ok = hits.some((h) => c.line <= lineCount(h));
    if (!ok) bad.push(`${c.file}:${c.line} (out-of-range, max=${Math.max(...hits.map(lineCount))})`);
  }
  out.checks.J3_citations = cited.length;
  out.checks.J3_bad = bad;
  if (bad.length) out.fail.push(`J3 bad-citations=${bad.length}`);

  const bareRe = /(?<![A-Za-z0-9_.]):(\d{1,5})(?![0-9])/g;
  const bare = [...text.matchAll(bareRe)].filter((m) => !/\.cs$|\.md$/.test(text.slice(Math.max(0, m.index - 40), m.index).trimEnd().slice(-4))).length;
  out.checks.J4_bare_line_refs = bare;
  if (bare > 0) out.warn.push(`J4 bare-line-refs=${bare}（须写成 \`X.cs:N\`）`);

  // J5
  if (!isIndex) {
    const dotSlash = (body.match(/\]\(\.\//g) || []).length;
    const indexLinks = (body.match(/\]\([^)]*_index\.md/g) || []).length;
    out.checks.J5_dot_slash = dotSlash;
    out.checks.J5_index_links = indexLinks;
    if (dotSlash) out.fail.push(`J5 dot-slash-links=${dotSlash}`);
    if (indexLinks) out.fail.push(`J5 direct-_index-links=${indexLinks}`);
  }

  // J6
  const cp = classifyPage(pageRel, text);
  out.checks.J6_classifyPage = { status: cp.status, reasons: cp.reasons };
  if (cp.status !== 'deep_pass') out.fail.push(`J6 classifyPage=${cp.status} (${cp.reasons.join(', ')})`);

  // J7
  const genHits = GEN_MARKERS.filter((s) => text.includes(s));
  out.checks.J7_gen_markers = genHits;
  if (genHits.length) out.fail.push(`J7 gen-marker=${genHits.join('|')}`);

  // J8
  const bodyBytes = Buffer.byteLength(body, 'utf8');
  const h2h3 = (body.match(/^#{2,3}\s+/gm) || []).length;
  out.checks.J8_bodyBytes = bodyBytes;
  out.checks.J8_h2h3 = h2h3;
  if (!(bodyBytes > 2500 && h2h3 >= 1)) out.fail.push(`J8 body=${bodyBytes}B h2h3=${h2h3}`);

  // J9
  let codeLines = 0;
  for (const m of text.matchAll(/```csharp\r?\n([\s\S]*?)```/gi)) {
    codeLines += m[1].split(/\r?\n/).map((l) => l.replace(/\/\/.*$/, '').trim()).filter(Boolean).length;
  }
  out.checks.J9_csharp_lines = codeLines;
  if (codeLines < 3) out.fail.push(`J9 csharp-lines=${codeLines}`);

  out.pass = out.fail.length === 0;
  return out;
}

// ---- main ------------------------------------------------------------------
const argv = process.argv.slice(2);
let pages = [];
let jsonOut = null;
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--manifest') {
    const lines = readFileSync(resolve(REPO, argv[++i]), 'utf8').split(/\r?\n/);
    pages.push(...lines.filter((l) => l.trim() && !l.startsWith('#')));
  } else if (argv[i] === '--json') {
    jsonOut = resolve(REPO, argv[++i]);
  } else {
    pages.push(argv[i]);
  }
}
if (!pages.length) { console.error('usage: lead-145zh-judge.mjs --manifest <f> [--json <f>] | <page.md> ...'); process.exit(2); }

const results = pages.map(judge);
for (const r of results) {
  console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.page}`);
  console.log(`      J1 fffd=${r.checks.J1_fffd} · J2 missing=[${(r.checks.J2_missing || []).join(',')}] · J3 cites=${r.checks.J3_citations} bad=${(r.checks.J3_bad || []).length} · J4 bare=${r.checks.J4_bare_line_refs}`);
  console.log(`      J5 dotSlash=${r.checks.J5_dot_slash ?? 'n/a'} indexLinks=${r.checks.J5_index_links ?? 'n/a'} · J6=${r.checks.J6_classifyPage?.status} · J7 markers=${(r.checks.J7_gen_markers || []).length} · J8 ${r.checks.J8_bodyBytes}B/${r.checks.J8_h2h3} · J9 csharp=${r.checks.J9_csharp_lines}`);
  if (r.checks.J2_h2?.length) console.log(`      H2: ${r.checks.J2_h2.join(' | ')}`);
  for (const f of r.fail) console.log(`      ✗ ${f}`);
  for (const w of r.warn) console.log(`      ! ${w}`);
}
const passed = results.filter((r) => r.pass).length;
console.log(`\nJUDGE total=${results.length} pass=${passed} fail=${results.length - passed}`);
if (jsonOut) writeFileSync(jsonOut, JSON.stringify({ judgedAt: new Date().toISOString(), total: results.length, pass: passed, results }, null, 2) + '\n');
process.exit(passed === results.length ? 0 : 1);
