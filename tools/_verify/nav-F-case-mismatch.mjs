#!/usr/bin/env node
// tools/_verify/nav-F-case-mismatch.mjs
// 大小写错配链接检测器 —— 导航树完整性线 / worker F
//
// 判据来源：tools/_NAV-BASELINE.md §4.10
//   「把 href 的 basename 与磁盘 basename 做大小写敏感的 === 比较，
//     仅在大小写不同时命中真实文件 ⇒ 判为大小写错配。
//     这类链接在 Linux / GitHub Pages 上一定 404，因为 Zola 路由是大小写敏感的。」
//
// 解析口径：tools/_nav-verify.mjs 的 Zola route 语义（routeOf / linkKey），
//   按 _INTEGRATION-GATES.md §26 —— 按 Zola 输出 route 解析，不按文件路径。
//
// 存在性判定：逐组件精确比对目录项（Array.includes，=== 大小写敏感），
//   【不用 existsSync】—— Windows 上 existsSync 不区分大小写，会掩盖错配（§4.10）。
//
// 用法：
//   node tools/_verify/nav-F-case-mismatch.mjs            扫描 content/，写 TSV + 摘要
//   node tools/_verify/nav-F-case-mismatch.mjs --selftest  fixture 自检（阳性对照先行）

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..', '..');
const CONTENT_ROOT = path.join(REPO, 'content');
const TSV = path.join(__dirname, 'nav-F-case-mismatch.tsv');
// 当前扫描根：scan() 会被 content/ 与 selftest fixture 分别调用，故用可变绑定。
let ROOT = CONTENT_ROOT;

// ── Zola route 语义（逐字复用 tools/nav-verify.mjs:37-38,46-50）────────────
const routeOf = (rel) => { const q = rel.split(path.sep).join('/').replace(/\.md$/, ''); return q.endsWith('_index') ? q.replace(/_index$/, '') : q + '/'; };
const linkKey = (r) => {
  if (r === '' || r === '.' || r === '/') return '';
  if (r.endsWith('/_index')) return r.slice(0, -6);
  return r + '/';
};
const linkRe = /\[[^\]]*\]\(([^)\s]+)\)/g;

// ── 已知阳性对照（tools/_NAV-BASELINE.md §4.10）──────────────────────────
// 3 个唯一 (source, href) 对 / 5 次出现。
// 其中 3 次 ../../Campaign 已被 commit fdd540f17e 修正为 ../Campaign
// （该 commit 把 KingdomDecisionMapNotification.md 的 3 处 ../../Campaign 改为
//   ../Campaign —— 指向同桶 Campaign 类页，是正确链接）。
// 当前树上仍存 2 次：../MBEvent ×1、../../engine/Options ×1。
const POSITIVE = [
  { from: 'v1.3.0/zh/api/campaign/CampaignEvents.md', href: '../MBEvent' },
  { from: 'v1.3.0/zh/api/mission-ext/ActionOptionData.md', href: '../../engine/Options' },
  { from: 'v1.4.5/zh/api/campaign/KingdomDecisionMapNotification.md', href: '../../Campaign' },
];

// ── 目录项缓存（精确大小写；readdir 一次，全程复用）──────────────────────
const dirCache = new Map();
function listDir(dir) {
  if (!dirCache.has(dir)) {
    let entries = null;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }).map(e => e.name); } catch { entries = null; }
    dirCache.set(dir, entries);
  }
  return dirCache.get(dir);
}

// ── 逐组件精确比对（不用 existsSync）────────────────────────────────────
// relPath 相对 root。返回 { exact, existsCI, actualPath, mismatchAt }。
//   exact      = 每一级都精确命中（大小写一致）→ Linux 上能解析
//   existsCI   = 每一级都命中，但至少一级大小写不同 → Linux 上 404
//   actualPath = 磁盘上真实大小写路径（existsCI 时有效）
//   mismatchAt = 第一处大小写错配的组件（'期望 → 实际'）
function probeFile(relPath) {
  const comps = relPath.split('/');
  let dir = ROOT;
  const actual = [];
  let mismatchAt = null;
  for (const c of comps) {
    const entries = listDir(dir);
    if (!entries) return { exact: false, existsCI: false, actualPath: null, mismatchAt: null };
    if (entries.includes(c)) { actual.push(c); dir = path.join(dir, c); continue; }   // === 精确命中
    const ci = entries.find(e => e.toLowerCase() === c.toLowerCase());                 // 仅大小写不同
    if (ci) {
      if (mismatchAt === null) mismatchAt = c + ' → ' + ci;
      actual.push(ci); dir = path.join(dir, ci); continue;
    }
    return { exact: false, existsCI: false, actualPath: null, mismatchAt: null };      // 完全缺失
  }
  return { exact: mismatchAt === null, existsCI: true, actualPath: actual.join('/'), mismatchAt };
}

// ── route key → 候选文件路径 ────────────────────────────────────────────
// routeOf 把 'a/b/_index.md' 与 'a/b.md' 都映射到 'a/b/'；
// 把 'a/b/Foo.md' 与 'a/b/Foo/_index.md' 都映射到 'a/b/Foo/'。
// 故每个 key 有两个候选，任一精确命中即算「大小写一致」。
function candidatesFromKey(K) {
  if (K === '') return ['_index.md'];
  const base = K.replace(/\/$/, '');
  return [base + '_index.md', base + '.md'];
}

// ── fenced code block 行集合（CommonMark 围栏配对）──────────────────────
// 围栏内的 [t](u) 不是行内 markdown 链接（渲染为代码），不计入分母。
function computeFenceLines(txt) {
  const lines = txt.split('\n');
  const inFence = new Set();
  let fence = null;   // { char, len }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (fence) {
      inFence.add(i);
      const m = /^ {0,3}(`{3,}|~{3,})[ \t]*$/.exec(line);   // 闭合：同字符、长度≥开、后仅空白
      if (m && m[1][0] === fence.char && m[1].length >= fence.len) fence = null;
    } else {
      const m = /^ {0,3}(`{3,}|~{3,})/.exec(line);
      if (m) {
        const char = m[1][0];
        const info = line.slice(m[0].length);
        if (char === '`' && info.includes('`')) continue;   // 反引号围栏 info 不得含反引号
        fence = { char, len: m[1].length };
      }
    }
  }
  return inFence;
}

// ── 遍历 root 下所有 .md（跳过 . 开头目录与 public）─────────────────────
function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (!e.name.startsWith('.') && e.name !== 'public') walk(p, a); }
    else if (e.name.endsWith('.md')) a.push(p);
  }
  return a;
}

// ── 核心扫描：对单个 root 做全量链接扫描 ─────────────────────────────────
function scan(root) {
  dirCache.clear();
  ROOT = root;
  const files = walk(root);
  if (!files.length) { console.error('EMPTY_UNIVERSE @ ' + root); process.exit(2); }

  let totalLinks = 0, skippedExt = 0, skippedAnchor = 0, skippedSelf = 0, skippedFence = 0;
  let checked = 0, exactHit = 0, caseMismatch = 0, missing = 0;
  const mismatches = [];
  const missingSamples = [];
  const byTree = {};
  const byBucket = {};
  const posFound = [];

  for (const f of files) {
    const rel = path.relative(root, f).split(path.sep).join('/');
    const txt = fs.readFileSync(f, 'utf8');
    const fromRoute = routeOf(rel);
    const sourceKey = linkKey(fromRoute.replace(/\/$/, ''));
    const fenceLines = computeFenceLines(txt);

    let m; const re = new RegExp(linkRe.source, 'g');
    let cursor = 0, lineNo = 0;
    while ((m = re.exec(txt))) {
      while (cursor < m.index) { if (txt.charCodeAt(cursor) === 10) lineNo++; cursor++; }
      cursor = m.index;
      const href = m[1].split(/\s/)[0].replace(/^<|>$/g, '');
      const text = /^\[([^\]]*)\]/.exec(m[0])?.[1] ?? '';
      totalLinks++;
      if (/^(https?:|mailto:)/.test(href)) { skippedExt++; continue; }
      const h = href.split('#')[0];
      if (!h) { skippedAnchor++; continue; }
      let r;
      if (h.startsWith('/')) r = path.posix.normalize(h).replace(/^\//, '');
      else r = path.posix.normalize(path.posix.join(fromRoute, h)).replace(/^\//, '');
      r = r.replace(/\/$/, '');
      if (r === '.') r = '';
      const K = linkKey(r);
      if (K === sourceKey) { skippedSelf++; continue; }
      if (fenceLines.has(lineNo)) { skippedFence++; continue; }
      checked++;
      const cands = candidatesFromKey(K);
      let best = null;
      for (const cand of cands) {
        const pr = probeFile(cand);
        if (pr.exact) { best = { status: 'exact', ...pr }; break; }
        if (pr.existsCI && best === null) best = { status: 'ci', ...pr };
      }
      if (best === null) best = { status: 'missing' };
      if (best.status === 'exact') { exactHit++; continue; }
      if (best.status === 'ci') {
        caseMismatch++;
        const tree = rel.split('/')[0] || '(root)';
        byTree[tree] = (byTree[tree] || 0) + 1;
        const bm = rel.match(/^[^/]+\/[^/]+\/api\/([^/]+)\//);
        const bucket = bm ? bm[1] : '(non-api)';
        byBucket[bucket] = (byBucket[bucket] || 0) + 1;
        const rec = { from: rel, line: lineNo + 1, href, text, K, correctPath: best.actualPath, mismatchAt: best.mismatchAt };
        mismatches.push(rec);
        for (const p of POSITIVE) if (p.from === rel && p.href === href) posFound.push({ from: rel, href, line: lineNo + 1 });
      } else {
        missing++;
        if (missingSamples.length < 30) missingSamples.push({ from: rel, line: lineNo + 1, href, K });
      }
    }
  }
  return { root, files: files.length, totalLinks, skippedExt, skippedAnchor, skippedSelf, skippedFence,
           checked, exactHit, caseMismatch, missing, mismatches, byTree, byBucket, posFound, missingSamples };
}

// ── --selftest：fixture 阳性对照（门禁第 1 条：报「0」前先证明探测器会响）──
function selfTest() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'navF-'));
  const w = (rel, body) => { const p = path.join(dir, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, body); };
  // fixture 复刻 §4.10 的 3 对阳性对照 + 1 条好链接 + 1 条真断链 + 1 条围栏内链接
  w('v1/_index.md', '# v1\n');
  w('v1/api/_index.md', '# api\n');
  w('v1/api/campaign/_index.md', '# campaign\n');
  w('v1/api/campaign/MbEvent.md', '# MbEvent\n');                       // 磁盘真实名字（小写 b）
  w('v1/api/campaign/CampaignEvents.md', '- [MBEvent](../MBEvent)\n');   // 阳性对照 1
  w('v1/api/mission-ext/ActionOptionData.md', '实现 [IOptionData](../../engine/Options)\n'); // 阳性对照 2
  w('v1/api/engine/options.md', '# options\n');                          // 磁盘真实名字（小写 o）
  w('v1/api/campaign/KingdomDecisionMapNotification.md', '- [C](../../Campaign)\n- [C](../../Campaign)\n- [C](../../Campaign)\n'); // 阳性对照 3（×3）
  w('v1/api/campaign/Good.md', '- [MbEvent](../MbEvent)\n');             // 好链接（大小写一致）
  w('v1/api/campaign/Broken.md', '- [Nope](../Nope)\n');                 // 真断链（目标不存在）
  w('v1/api/campaign/Fenced.md', '```\n- [MBEvent](../MBEvent)\n```\n'); // 围栏内 → 不计入分母
  const r = scan(dir);
  const fails = [];
  const ok = (name, cond, detail) => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`); if (!cond) fails.push(name); };
  ok('fixture 大小写错配 = 5', r.caseMismatch === 5, `got ${r.caseMismatch}`);
  ok('fixture 好链接 exact = 1', r.exactHit === 1, `got ${r.exactHit}`);
  ok('fixture 真断链 missing = 1', r.missing === 1, `got ${r.missing}`);
  ok('fixture 围栏内链接被跳过', r.skippedFence === 1, `got ${r.skippedFence}`);
  ok('fixture 阳性对照 ../MBEvent 命中', r.posFound.some(p => p.href === '../MBEvent'));
  ok('fixture 阳性对照 ../../engine/Options 命中', r.posFound.some(p => p.href === '../../engine/Options'));
  ok('fixture 阳性对照 ../../Campaign 命中 ×3', r.posFound.filter(p => p.href === '../../Campaign').length === 3);
  fs.rmSync(dir, { recursive: true, force: true });
  if (fails.length) { console.error('SELFTEST_FAILED: ' + fails.join(', ')); process.exit(1); }
  console.log('SELFTEST_ALL_PASS');
}

// ── 主入口 ──────────────────────────────────────────────────────────────
if (process.argv.includes('--selftest')) { selfTest(); process.exit(0); }

const r = scan(ROOT);

// 写 TSV：source file / line / href / correct-case path / mismatch point / is-positive-control
const tsvLines = ['source_file\tline\thref\tcorrect_case_path\tmismatch_point\tis_positive_control'];
for (const m of r.mismatches) {
  const isPos = POSITIVE.some(p => p.from === m.from && p.href === m.href) ? 'yes' : 'no';
  tsvLines.push([m.from, m.line, m.href, m.correctPath ?? '', m.mismatchAt ?? '', isPos].join('\t'));
}
fs.writeFileSync(TSV, tsvLines.join('\n') + '\n');

// 摘要（供报告引用）
const lines = [];
lines.push('HEAD=' + r.root);
lines.push('files_scanned=' + r.files);
lines.push('total_links=' + r.totalLinks);
lines.push('skipped_ext_http_mailto=' + r.skippedExt);
lines.push('skipped_anchor=' + r.skippedAnchor);
lines.push('skipped_self_link=' + r.skippedSelf);
lines.push('skipped_in_fence=' + r.skippedFence);
lines.push('checked_denominator=' + r.checked);
lines.push('exact_hit=' + r.exactHit);
lines.push('case_mismatch=' + r.caseMismatch);
lines.push('missing_target=' + r.missing);
lines.push('by_tree=' + JSON.stringify(r.byTree));
lines.push('by_bucket=' + JSON.stringify(r.byBucket));
lines.push('positive_found=' + JSON.stringify(r.posFound));
lines.push('tsv_rows=' + r.mismatches.length);
console.log(lines.join('\n'));
console.log('--- mismatches (first 60) ---');
for (const m of r.mismatches.slice(0, 60)) {
  console.log(`${m.from}:${m.line}\t[${m.text}](${m.href})\t→ ${m.correctPath}\t@ ${m.mismatchAt}`);
}
if (r.mismatches.length > 60) console.log(`... (${r.mismatches.length - 60} more, see TSV)`);
console.log('--- missing samples (first 15, NOT case mismatch) ---');
for (const m of r.missingSamples.slice(0, 15)) console.log(`${m.from}:${m.line}\t${m.href}\t→ ${m.K}`);
