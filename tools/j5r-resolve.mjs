#!/usr/bin/env node
// ============================================================================
// tools/j5r-resolve.mjs  —  J5R 链接解析检查（跨线共用的独立小工具，READ-ONLY）
// ----------------------------------------------------------------------------
// 用法:
//   node tools/j5r-resolve.mjs <page.md> [<page.md> ...]
//   node tools/j5r-resolve.mjs --all                 # 全站基线
//   node tools/j5r-resolve.mjs --cross-check         # 与真门禁 audit-links.mjs 对账
//   node tools/j5r-resolve.mjs --all --content-root <dir>   # 夹具用（见下）
//
// 输入：一个或多个页路径（仓库相对，如 content/v1.4.5/zh/api/campaign-ext/Hero.md）。
// 输出：每页一行 `unresolved=N`；
//       每条明细 `页:行 → 目标原文 → 解析到哪 → 为什么失败`。
// 退出码：unresolved>0 时非零（有 unresolved 就非零）。DRIFT 也非零。
//
// ----------------------------------------------------------------------------
// ★ 本工具【只回答 J5R】：链接能不能解析。
//   它【不带】J10（链接位置）/ J11（叶子尾斜杠）/ J2（七节）/ J3（引用边界）
//   等任何本线（lead-145zh）的本地政策。别线用到的就是「能不能解析」这一件事。
//
// ★ 三条口径（boss-3 指定，别线能否安全使用的关键）:
//   ① 本工具只回答「链接能不能解析」，不回答「能不能走回去」（那是 orphan/回程口径）。
//   ② 本工具不检查「目标页是否在正确的桶」—— 它只证明目标存在；
//      桶错但目标存在的情况它【看不出来】（那是语义问题）。
//   ③ 配套的 J3（引用边界）现已按页面版本树推导源码根且不静默回退 ⇒ 跨线可用；
//      但 J10/J11/J2 是【本线 leaf 页的本地政策】，别线读到的是「不适用」。
//
// ----------------------------------------------------------------------------
// ★★ 解析算法是【副本】（重要）
//   下面的 fileToRoute() / resolveTarget() / existsAsPage() / contentRel() /
//   existsAsStatic() / unresolvedLinks() 六个函数，是 tools/audit-links.mjs
//   解析语义的【逐字副本】（取自已验证副本 tools/_verify/lead-145zh-judge.mjs，
//   该副本与真门禁对账过 AGREE）。STATIC_ROOT 与真门禁一样由内容根推导
//   （audit-links.mjs: `resolve(join(root,'..'))/static`），默认与 judge 的
//   `REPO/static` 完全相同。
//   为什么是副本而不是 import：audit-links.mjs 是三条内容线共用的门禁，
//   _HANDOFF.md §11 明确「改它需要窗口，不能赶」——所以这里复制、不改它。
//   **副本会漂移** ⇒ 本工具提供 `--cross-check`：真跑一次
//   `node tools/audit-links.mjs`，把「真门禁判为 broken 的文件集」与
//   「本工具判为 unresolved 的文件集」逐文件比对，不一致就报 DRIFT 并非零退出。
//   **权威读数永远是 tools/audit-links.mjs，不是本工具。**
//
//   `--content-root <dir>` 是【夹具钩子】，只给测试用：它同时把内容根喂给本工具
//   和（cross-check 时的）真门禁 AUDIT_CONTENT_ROOT，让两边在【同一棵树】上比较。
//   绝不要在验收真 content/ 时设置它。默认永远是 <repo>/content。
// ============================================================================
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, normalize, resolve, sep, posix, dirname, isAbsolute, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..');
const SLASH = '/';

const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
const toPosix = (p) => p.replace(reSep, SLASH);

// ---- 内容根 / 静态根（默认 <repo>/content 与 <repo>/static） -----------------
//     与 tools/audit-links.mjs 的 `root` / `STATIC_DIR` 推导一致。
let CONTENT_ROOT = join(REPO, 'content');
let STATIC_ROOT = join(REPO, 'static');

// ---- BEGIN 副本：与 tools/_verify/lead-145zh-judge.mjs 逐字一致 --------------
//      （该副本 = tools/audit-links.mjs 的解析语义；见文件头「解析算法是副本」）

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
// ---- END 副本 ---------------------------------------------------------------

// ---- 明细扫描：同一套判据 + 行号 --------------------------------------------
// 与 unresolvedLinks() 使用完全相同的过滤器与解析函数，只额外记录行号。
// 调用方会用 unresolvedLinks() 的长度做自洽校验（不一致即 INTERNAL-DRIFT）。
function unresolvedDetails(pageRel, text) {
  const abs = resolve(REPO, pageRel);
  const route = fileToRoute(abs);
  const fromUrl = route.endsWith('/') ? route : route + '/';
  const out = [];
  let m;
  let cursor = 0;
  let line = 1;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    for (let i = cursor; i < m.index; i++) if (text.charCodeAt(i) === 10) line++;
    cursor = m.index;
    const href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    const hrefPath = href.split('#')[0];
    if (hrefPath === '' || hrefPath === '.' || hrefPath === './') continue;
    const t = resolveTarget(fromUrl, href);
    if (existsAsPage(t)) continue;
    if (existsAsStatic(t)) continue;
    const rel = contentRel(t);
    const reason = t === null
      ? 'href 解析为空（仅 fragment）'
      : `无 content 页（${toPosix(t)}.md 与 ${toPosix(t)}/_index.md 均不存在）且无 static 文件（${rel === null || rel === '' ? '目标不在 content 根下，static 回退不适用' : 'static/' + rel}）`;
    out.push({ line, href, target: t === null ? '(null)' : toPosix(t), reason });
  }
  return out;
}

// ---- 工具函数 ----------------------------------------------------------------
function toRepoRel(p) {
  return toPosix(isAbsolute(p) ? relative(REPO, p) : p).replace(/^\.\//, '');
}
function contentKey(abs) {
  return toPosix(relative(CONTENT_ROOT, abs));
}
function isUnderContent(abs) {
  const a = toPosix(resolve(abs));
  const b = toPosix(resolve(CONTENT_ROOT));
  return a === b || a.startsWith(b + '/');
}

// 与 tools/audit-links.mjs 的 walk() 一致：跳过点目录与 public，收 .md/.txt
function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) {
      if (!e.startsWith('.') && e !== 'public') walk(p, acc);
    } else if (e.endsWith('.md') || e.endsWith('.txt')) acc.push(p);
  }
  return acc;
}

function analyzeAbs(abs) {
  const text = readFileSync(abs, 'utf8');
  const count = unresolvedLinks(abs, text).length;
  const details = unresolvedDetails(abs, text);
  if (details.length !== count) {
    console.error(`INTERNAL-DRIFT: ${toPosix(abs)}: unresolvedLinks=${count} 但 unresolvedDetails=${details.length}（副本内部不自洽，先修工具）`);
  }
  return { count, details };
}

function printDetails(display, details) {
  for (const d of details) {
    console.log(`  ${display}:${d.line} → ${d.href} → ${d.target} → ${d.reason}`);
  }
}

// 全站扫描（--all / --cross-check 共用）
function scanAll() {
  const t0 = Date.now();
  const absFiles = walk(CONTENT_ROOT).sort();
  let unresolvedTotal = 0;
  const withUnresolved = [];
  for (const abs of absFiles) {
    const { count, details } = analyzeAbs(abs);
    unresolvedTotal += count;
    if (count > 0) {
      withUnresolved.push({ page: toRepoRel(abs), key: contentKey(abs), count, details });
    }
  }
  return { fileCount: absFiles.length, unresolvedTotal, withUnresolved, elapsedMs: Date.now() - t0 };
}

// ---- --cross-check：拿真门禁对账 --------------------------------------------
function crossCheck(scan) {
  let raw = '';
  try {
    // 强制真门禁使用与本工具相同的内容根，保证是同一棵树上的比较。
    raw = execFileSync(process.execPath, [join(REPO, 'tools', 'audit-links.mjs')], {
      cwd: REPO, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024,
      env: { ...process.env, AUDIT_CONTENT_ROOT: CONTENT_ROOT },
    });
  } catch (e) {
    raw = (e.stdout || '').toString();
  }
  // 真门禁输出形如：`## v1.4.5/zh/api/.../Hero.md  (2)`（内容根相对路径）
  const gateBroken = new Set();
  let gateFiles = null;
  let gateBrokenCount = null;
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^## (.+?)\s+\(\d+\)\s*$/);
    if (m) gateBroken.add(m[1].trim());
    const mf = line.match(/^FILES=(\d+)$/);
    if (mf) gateFiles = Number(mf[1]);
    const mb = line.match(/^BROKEN_LINKS=(\d+)$/);
    if (mb) gateBrokenCount = Number(mb[1]);
  }
  const mineBroken = new Set(scan.withUnresolved.map((x) => x.key));
  const onlyGate = [...gateBroken].filter((f) => !mineBroken.has(f)).sort();
  const onlyMine = [...mineBroken].filter((f) => !gateBroken.has(f)).sort();
  const agree = onlyGate.length === 0 && onlyMine.length === 0;

  console.log('\n# CROSS-CHECK vs tools/audit-links.mjs (authoritative)');
  console.log(`#   content-root: ${toPosix(CONTENT_ROOT)}`);
  console.log(`#   gate: FILES=${gateFiles ?? '?'} BROKEN_LINKS=${gateBrokenCount ?? '?'} FILES_WITH_BROKEN=${gateBroken.size}`);
  console.log(`#   j5r : FILES=${scan.fileCount} UNRESOLVED_TOTAL=${scan.unresolvedTotal} PAGES_WITH_UNRESOLVED=${mineBroken.size}`);
  console.log(`#   only-in-gate (${onlyGate.length}): ${onlyGate.length ? onlyGate.join(', ') : '(none)'}`);
  console.log(`#   only-in-j5r  (${onlyMine.length}): ${onlyMine.length ? onlyMine.join(', ') : '(none)'}`);
  console.log(`#   verdict: ${agree ? 'AGREE' : 'DRIFT — trust audit-links.mjs, fix the j5r-resolve copy'}`);
  return agree;
}

// ---- main -------------------------------------------------------------------
const argv = process.argv.slice(2);
const pages = [];
let doAll = false;
let doCross = false;
let contentRootArg = null;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--all') doAll = true;
  else if (a === '--cross-check') doCross = true;
  else if (a === '--content-root') contentRootArg = argv[++i];
  else if (a === '-h' || a === '--help') {
    console.log('usage: node tools/j5r-resolve.mjs <page.md> ... | --all | --cross-check [--content-root <dir>]');
    process.exit(0);
  } else if (a.startsWith('--')) {
    console.error(`unknown option: ${a}`);
    process.exit(2);
  } else {
    pages.push(a);
  }
}
if (!pages.length && !doAll && !doCross) {
  console.error('usage: node tools/j5r-resolve.mjs <page.md> ... | --all | --cross-check [--content-root <dir>]');
  process.exit(2);
}
if (contentRootArg !== null) {
  CONTENT_ROOT = resolve(process.cwd(), contentRootArg);
  STATIC_ROOT = join(resolve(join(CONTENT_ROOT, '..')), 'static');
  console.error(`# NOTE: --content-root fixture hook in use: ${toPosix(CONTENT_ROOT)}`);
}

let exitCode = 0;

if (pages.length) {
  let any = 0;
  for (const p of pages) {
    const abs = resolve(REPO, p);
    const display = toRepoRel(abs);
    if (!existsSync(abs)) {
      console.error(`MISSING-PAGE: ${display} 不存在`);
      exitCode = 2;
      continue;
    }
    if (!isUnderContent(abs)) {
      console.error(`# NOTE: ${display} 不在内容根下，解析基准按副本语义（仅负向对照用）`);
    }
    const { count, details } = analyzeAbs(abs);
    console.log(`unresolved=${count}  ${display}`);
    printDetails(display, details);
    any += count;
  }
  if (any > 0) exitCode = 1;
}

const fullScan = (doAll || doCross) ? scanAll() : null;

if (doAll) {
  const scan = fullScan;
  console.log('# J5R full-site baseline');
  console.log(`TOTAL_PAGES=${scan.fileCount}`);
  console.log(`UNRESOLVED_TOTAL=${scan.unresolvedTotal}`);
  console.log(`PAGES_WITH_UNRESOLVED=${scan.withUnresolved.length}`);
  console.log(`ELAPSED_MS=${scan.elapsedMs}`);
  for (const x of scan.withUnresolved) {
    console.log(`unresolved=${x.count}  ${x.page}`);
    printDetails(x.page, x.details);
  }
  if (scan.unresolvedTotal > 0) exitCode = 1;
}

if (doCross) {
  const agree = crossCheck(fullScan);
  if (!agree) exitCode = 1;
}

process.exit(exitCode);
