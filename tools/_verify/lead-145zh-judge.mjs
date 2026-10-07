#!/usr/bin/env node
// ============================================================================
// tools/_verify/lead-145zh-judge.mjs  —  READ-ONLY 判分器（lead-145zh 派单方给定）
// ----------------------------------------------------------------------------
// 用途：对 lead-145zh 的 v1.4.5/zh 手写深页做逐页验收。**不写 content/，只读**。
//
// 用法:
//   node tools/_verify/lead-145zh-judge.mjs <page.md> [<page.md> ...]
//   node tools/_verify/lead-145zh-judge.mjs --manifest <f> [--json <out>] [--links require|off]
//   node tools/_verify/lead-145zh-judge.mjs --manifest <f> --cross-check
//
// 判据（每条独立输出 PASS/FAIL，缺一即该页判未通过）:
//   J1 U+FFFD == 0
//   J2 七节齐全: 概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航（H2 精确匹配）
//   J3 引用边界: 页内每条 `X.cs:N` 的 N <= (wc -l X.cs)，且文件存在（源码根 ../bannerlord-1.4.5）
//   J4 裸行号: 未落文件名的 `:N` 引用数（WARN）
//   J5 链接形态: 正文不得出现 `](./`；不得直接链 `_index.md`；`_index.md` 自身豁免
//   J5R ★ 链接解析: 页内每条 markdown 链接必须真的能解析（见下方「解析算法是副本」）
//   J6 机械深页: classifyPage() === deep_pass（`--links off` 时见下方「政策模式」）
//   J7 脱离自动档: 全文不得含生成标记
//   J8 体量: 正文（frontmatter 之后）字节 > 2500 且 H2/H3 >= 1
//   J9 真实示例: ```csharp 代码块总有效行 >= 3
//
// ---------------------------------------------------------------------------
// ★ 政策模式 `--links off`（boss-3 #12289 裁定，2026-10-07）
//   本轮写作不写跨页 markdown 链接，一律反引号代码片段。
//   但 tools/lib/handwritten-policy.mjs 的 deep_pass **硬要求 参见/依赖 小节 >=2 条链接**
//   ⇒ 政策与 deep_pass 互斥。故本判分器在此模式下：
//     - J6 改为「除【链接族】理由外不得有其他 stub 理由」；
//     - **始终额外记录 `deepPass`（真值）与 `tier`（census 档）**，两个口径分开报，
//       避免出现「tier=deep 涨了 N 页而 deep_pass 涨了 N-1 页」而无人能解释。
//   默认模式 = off（与当前政策一致）。政策解除后用 `--links require` 恢复原判据。
// ---------------------------------------------------------------------------
// ★ 解析算法是【副本】（重要）
//   J5R 复刻 tools/audit-links.mjs 的解析（URL 口径 + static 回退）。
//   **为什么是副本而不是 import**：audit-links.mjs 是三条内容线共用的门禁，
//   _HANDOFF.md §11 明确「改它需要窗口，不能赶」。所以这里复制、不改它。
//   **副本会漂移** ⇒ 用 `--cross-check` 拿真门禁对账：它会真跑一次
//   `node tools/audit-links.mjs`，并把「真门禁报为 broken 的文件集合」与
//   「J5R 判为不可解析的文件集合」逐文件比对，不一致就报 DRIFT。
//   **权威读数永远是 audit-links.mjs，不是本判分器。**
// ============================================================================
import { readFileSync, existsSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { basename, join, dirname, resolve, normalize, sep, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { classifyPage } from '../lib/handwritten-policy.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..');
const SRC_ROOT = resolve(REPO, '..', 'bannerlord-1.4.5', 'Bannerlord.Source');
const CONTENT_ROOT = process.env.LEAD145ZH_CONTENT_ROOT
  ? resolve(REPO, process.env.LEAD145ZH_CONTENT_ROOT)
  : join(REPO, 'content');
// ↑ LEAD145ZH_CONTENT_ROOT 是【测试钩子】，只给 tools/_verify/lead-145zh-judge-fixture/ 用。
//   理由：J5R 的解析必须相对某个 content 根；把夹具放在 tools/ 下会让它永远解析不了自己的链接，
//   于是正向对照永远 PASS 不了 —— 那样「对照通过」就成了空话。
//   ⇒ 夹具自带一棵 content 形状的树，用这个钩子指过去。**绝不要在验收 content/ 时设置它。**
const STATIC_ROOT = join(REPO, 'static');

const SECTIONS = ['概述', '心智模型', '怎么用', '关键成员', '真实示例', '参见', '导航'];
const GEN_MARKERS = [
  '的自动生成类参考',
  '的自动生成战役动作参考',
  'Auto-generated class reference',
  'Auto-generated campaign action reference',
];
const DESC_AUTO_MARKERS = ['的自动生成类参考。', 'Auto-generated'];
const EMPTY_SHELL_SIGS = ['它有什么状态', '它允许你做什么', '它保存的状态'];
const DEEP_BODY_MIN_BYTES = 2500;
// 由「无跨页链接」政策唯一造成的 stub 理由 —— 只有这两个可以被政策豁免。
const LINK_FAMILY_REASONS = ['dependency-section-no-links', 'weak-deps'];
const FFFD = '\uFFFD';

// ---- 源码索引 --------------------------------------------------------------
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

// ---- J5R 解析（audit-links.mjs 的副本；见文件头「解析算法是副本」） ----------
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
const toPosix = (p) => p.replace(reSep, '/');

function fileToRoute(absOrRel) {
  const rel = toPosix(absOrRel).replace(toPosix(CONTENT_ROOT) + '/', '');
  const dir = posix.dirname(rel);
  const base = posix.basename(rel);
  if (base === '_index.md') return dir + '/';
  return rel.replace(/\.md$/, '/');
}

function resolveTarget(fromBase, href) {
  let h = href.split('#')[0];
  if (!h) return null;
  let rel;
  if (h.startsWith('/')) {
    rel = h.replace(/^\//, '');
  } else {
    const base = fromBase.endsWith('/') ? fromBase : fromBase + '/';
    rel = posix.normalize(posix.join(base, h)).replace(/^\//, '');
  }
  return normalize(join(CONTENT_ROOT, rel)).replace(/[\\/]+$/, '');
}

function existsAsPage(t) {
  if (t === null) return false;
  return existsSync(normalize(t + '.md')) || existsSync(normalize(join(t, '_index.md')));
}

function contentRel(t) {
  if (t === null) return null;
  const a = toPosix(normalize(t));
  const b = toPosix(normalize(CONTENT_ROOT));
  if (a === b) return '';
  if (!a.startsWith(b + '/')) return null;
  return a.slice(b.length + 1);
}

function existsAsStatic(t) {
  const rel = contentRel(t);
  if (rel === null || rel === '') return false;
  try { return existsSync(normalize(join(STATIC_ROOT, rel))); } catch { return false; }
}

const LINK_RE = /\[([^\]]*)\]\(([^)\s]+)\)/g;
function unresolvedLinks(pageRel, text) {
  const abs = resolve(REPO, pageRel);
  const route = fileToRoute(abs);
  const fromUrl = route.endsWith('/') ? route : route + '/';
  const out = [];
  let m;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    const href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    const hrefPath = href.split('#')[0];
    if (hrefPath === '' || hrefPath === '.' || hrefPath === './') continue;
    const t = resolveTarget(fromUrl, href);
    if (existsAsPage(t)) continue;
    if (existsAsStatic(t)) continue;
    out.push(href);
  }
  return out;
}

function splitFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  return m ? { frontmatter: m[1], body: text.slice(m[0].length) } : { frontmatter: '', body: text };
}
function extractDescription(fm) {
  const m = fm.match(/^description:\s*"([^"]*)"/m);
  return m ? m[1] : '';
}

// census 档位（与 tools/_verify/classify-tiers.mjs 同一套判据，顺序一致）
function censusTier(pageRel, text, body, cpStatus) {
  const { frontmatter } = splitFrontmatter(text);
  const desc = extractDescription(frontmatter);
  const bodyBytes = Buffer.byteLength(body, 'utf8');
  const h2h3 = (body.match(/^#{2,3}\s+/gm) || []).length;
  const substance = bodyBytes > DEEP_BODY_MIN_BYTES && h2h3 >= 1;
  if (GEN_MARKERS.some((s) => text.includes(s))) return 'generated';
  const descAuto = DESC_AUTO_MARKERS.some((s) => desc.includes(s));
  const sig = EMPTY_SHELL_SIGS.some((s) => body.includes(s));
  if ((descAuto || sig) && !substance) return 'empty_shell';
  if (cpStatus === 'deep_pass' || substance) return 'handwritten_deep';
  return 'other';
}

function judge(pageRel, mode) {
  const abs = resolve(REPO, pageRel);
  const out = { page: pageRel, checks: {}, fail: [], warn: [] };
  if (!existsSync(abs)) { out.fail.push('J0 file-missing'); return out; }
  const text = readFileSync(abs, 'utf8');
  const { frontmatter, body } = splitFrontmatter(text);
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

  // J3
  const cited = [...text.matchAll(/([A-Za-z_][\w.]*\.cs):(\d+)/g)].map((m) => ({ file: m[1], line: Number(m[2]) }));
  const bad = [];
  for (const c of cited) {
    const key = basename(c.file, '.cs');
    const hits = buildSrcIndex().get(key);
    if (!hits || !hits.length) { bad.push(`${c.file}:${c.line} (source-not-found)`); continue; }
    if (!hits.some((h) => c.line <= lineCount(h))) {
      bad.push(`${c.file}:${c.line} (out-of-range, max=${Math.max(...hits.map(lineCount))})`);
    }
  }
  out.checks.J3_citations = cited.length;
  out.checks.J3_bad = bad;
  if (bad.length) out.fail.push(`J3 bad-citations=${bad.length}`);

  // J4
  const bareRe = /(?<![A-Za-z0-9_.]):(\d{1,5})(?![0-9])/g;
  const bare = [...text.matchAll(bareRe)].filter(
    (m) => !/\.cs$|\.md$/.test(text.slice(Math.max(0, m.index - 40), m.index).trimEnd().slice(-4))
  ).length;
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

  // J5R
  const unresolved = unresolvedLinks(pageRel, text);
  out.checks.J5R_unresolved = unresolved;
  if (unresolved.length) out.fail.push(`J5R unresolved-links=${unresolved.length} [${[...new Set(unresolved)].join(', ')}]`);

  // J6 + 两个口径
  const cp = classifyPage(pageRel, text);
  const nonLinkReasons = cp.reasons.filter((r) => !LINK_FAMILY_REASONS.includes(r));
  const linkOnlyStub = cp.status !== 'deep_pass' && nonLinkReasons.length === 0 && cp.reasons.length > 0;
  const tier = censusTier(pageRel, text, body, cp.status);
  out.checks.J6_classifyPage = { status: cp.status, reasons: cp.reasons };
  out.checks.J6_nonLinkReasons = nonLinkReasons;
  out.checks.J6_linkOnlyStub = linkOnlyStub;
  out.checks.deepPass = cp.status === 'deep_pass';
  out.checks.tier = tier;
  if (mode === 'require') {
    if (cp.status !== 'deep_pass') out.fail.push(`J6 classifyPage=${cp.status} (${cp.reasons.join(', ')})`);
  } else {
    // 政策模式：只允许「链接族」理由，且必须显式记录这是政策造成的
    if (cp.status !== 'deep_pass' && nonLinkReasons.length > 0) {
      out.fail.push(`J6 classifyPage=${cp.status} 非链接族理由=[${nonLinkReasons.join(', ')}]`);
    } else if (linkOnlyStub) {
      out.warn.push(`J6 stub 仅因「无跨页链接」政策（${cp.reasons.join(', ')}）⇒ deepPass=false 但 tier=${tier}`);
    }
  }

  // J7
  const genHits = GEN_MARKERS.filter((s) => text.includes(s));
  out.checks.J7_gen_markers = genHits;
  if (genHits.length) out.fail.push(`J7 gen-marker=${genHits.join('|')}`);

  // J8
  const bodyBytes = Buffer.byteLength(body, 'utf8');
  const h2h3 = (body.match(/^#{2,3}\s+/gm) || []).length;
  out.checks.J8_bodyBytes = bodyBytes;
  out.checks.J8_h2h3 = h2h3;
  if (!(bodyBytes > DEEP_BODY_MIN_BYTES && h2h3 >= 1)) out.fail.push(`J8 body=${bodyBytes}B h2h3=${h2h3}`);

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

// ---- cross-check：拿真门禁对账 J5R 副本 -------------------------------------
function crossCheck(results) {
  let raw;
  try {
    raw = execFileSync(process.execPath, [join(REPO, 'tools', 'audit-links.mjs')], {
      cwd: REPO, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024,
    });
  } catch (e) {
    raw = (e.stdout || '').toString();
  }
  const realBroken = new Set();
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^## (.+?)\s+\(\d+\)\s*$/);
    if (m) realBroken.add(m[1].trim());
  }
  const mineBroken = new Set(results.filter((r) => (r.checks.J5R_unresolved || []).length).map((r) => r.page));
  const judged = results.map((r) => r.page);
  const judgedRel = new Set(judged.map((p) => toPosix(p).replace(/^content\//, '')));
  const realOnJudged = [...realBroken].filter((f) => judgedRel.has(f));
  const agree = realOnJudged.length === mineBroken.size
    && realOnJudged.every((f) => mineBroken.has('content/' + f));
  console.log('\n# CROSS-CHECK vs tools/audit-links.mjs (authoritative)');
  console.log('#   gate says broken among judged files: ' + (realOnJudged.length ? realOnJudged.join(', ') : '(none)'));
  console.log('#   J5R says unresolved among judged files: ' + (mineBroken.size ? [...mineBroken].join(', ') : '(none)'));
  console.log('#   verdict: ' + (agree ? 'AGREE' : 'DRIFT — trust audit-links.mjs, fix the J5R copy'));
  return agree;
}

// ---- main ------------------------------------------------------------------
const argv = process.argv.slice(2);
let pages = [];
let jsonOut = null;
let mode = 'off';
let doCross = false;
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--manifest') {
    const lines = readFileSync(resolve(REPO, argv[++i]), 'utf8').split(/\r?\n/);
    pages.push(...lines.filter((l) => l.trim() && !l.startsWith('#')));
  } else if (argv[i] === '--json') {
    jsonOut = resolve(REPO, argv[++i]);
  } else if (argv[i] === '--links') {
    mode = argv[++i] === 'require' ? 'require' : 'off';
  } else if (argv[i] === '--cross-check') {
    doCross = true;
  } else {
    pages.push(argv[i]);
  }
}
if (!pages.length) {
  console.error('usage: lead-145zh-judge.mjs --manifest <f> [--json <f>] [--links require|off] [--cross-check] | <page.md> ...');
  process.exit(2);
}

console.log(`# mode=--links ${mode}${doCross ? ' +cross-check' : ''}`);
const results = pages.map((p) => judge(p, mode));
for (const r of results) {
  console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.page}`);
  console.log(`      J1 fffd=${r.checks.J1_fffd} · J2 missing=[${(r.checks.J2_missing || []).join(',')}] · J3 cites=${r.checks.J3_citations} bad=${(r.checks.J3_bad || []).length} · J4 bare=${r.checks.J4_bare_line_refs}`);
  console.log(`      J5 dotSlash=${r.checks.J5_dot_slash ?? 'n/a'} indexLinks=${r.checks.J5_index_links ?? 'n/a'} · J5R unresolved=${(r.checks.J5R_unresolved || []).length} · J8 ${r.checks.J8_bodyBytes}B/${r.checks.J8_h2h3} · J9 csharp=${r.checks.J9_csharp_lines}`);
  console.log(`      J6=${r.checks.J6_classifyPage?.status} · deepPass=${r.checks.deepPass} · tier=${r.checks.tier} · J7 markers=${(r.checks.J7_gen_markers || []).length}`);
  if (r.checks.J2_h2?.length) console.log(`      H2: ${r.checks.J2_h2.join(' | ')}`);
  for (const f of r.fail) console.log(`      ✗ ${f}`);
  for (const w of r.warn) console.log(`      ! ${w}`);
}
const passed = results.filter((r) => r.pass).length;
const deepPass = results.filter((r) => r.checks.deepPass).length;
const tierDeep = results.filter((r) => r.checks.tier === 'handwritten_deep').length;
console.log(`\nJUDGE total=${results.length} pass=${passed} fail=${results.length - passed}`);
console.log(`# 两个口径（必须分开报）: deep_pass=${deepPass}/${results.length} · tier=handwritten_deep=${tierDeep}/${results.length}`);

let agree = null;
if (doCross) agree = crossCheck(results);

if (jsonOut) {
  writeFileSync(jsonOut, JSON.stringify({
    judgedAt: new Date().toISOString(), mode, total: results.length, pass: passed,
    deepPass, tierDeep, crossCheckAgree: agree, results,
  }, null, 2) + '\n');
}
process.exit(passed === results.length ? 0 : 1);
