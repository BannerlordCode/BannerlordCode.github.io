#!/usr/bin/env node
// ============================================================================
// tools/_verify/batch-selfconsistent.mjs — 并发批期间的「提交集合自洽」计算器
// ----------------------------------------------------------------------------
// 依据：boss-4 #20864 裁决 ②
//   「本线提交门禁 = 提交集合自洽：本批每个文件，其每条 markdown 链接必须解析到
//     **HEAD ∪ 本批提交集合**。满足即提交；不满足的页留在工作区等下批。」
//   「全站 broken 数在并发批期间不是本线的提交门禁」——别线在制品只上报、不阻塞。
//
// 本脚本把这条规则**机械地**算出来，而不是靠人挑子集：
//   · 取 HEAD 的文件全集（git ls-tree -r --name-only HEAD）
//   · 对候选页逐一解析 markdown 链接并解析成仓库相对路径
//   · 求【最大自洽子集】= 不动点：反复剔除「有链接解析不到 HEAD ∪ 当前集合」的页，
//     直到不再变化。剩下的就是可以安全提交的集合。
//
// ★ READ-ONLY：只跑 git 只读命令 + 读页面。不写 content/，不 add，不 commit。
//
// 用法:
//   node tools/_verify/batch-selfconsistent.mjs <page.md> [<page.md> ...]
//   node tools/_verify/batch-selfconsistent.mjs --manifest <list.txt>
// 退出码: 0 = 至少一页自洽（打印可提交集合）；1 = 自洽子集为空；2 = 用法/输入错误
// ============================================================================
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve, posix, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..', '..');

const argv = process.argv.slice(2);
let pages = [];
if (argv[0] === '--manifest') {
  const f = argv[1];
  if (!f || !existsSync(f)) {
    console.error(`manifest not found: ${f}`);
    process.exit(2);
  }
  pages = readFileSync(f, 'utf8')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
} else {
  pages = argv.filter((a) => !a.startsWith('--'));
}
if (!pages.length) {
  console.error('usage: node tools/_verify/batch-selfconsistent.mjs <page.md> [...]');
  process.exit(2);
}

const toPosix = (p) => p.replace(/\\/g, '/');
const cands = pages.map((p) => toPosix(relative(REPO, resolve(REPO, p))));

// HEAD 文件全集（只读）
const headOut = execFileSync('git', ['ls-tree', '-r', '--name-only', 'HEAD'], {
  cwd: REPO,
  encoding: 'utf8',
  maxBuffer: 64 * 1024 * 1024,
});
const HEAD = new Set(headOut.split(/\r?\n/).filter(Boolean));

function linksOf(rel) {
  const abs = resolve(REPO, rel);
  if (!existsSync(abs)) return null;
  const text = readFileSync(abs, 'utf8');
  const out = [];
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)) {
    let href = m[1].trim();
    if (/^(?:https?:|mailto:|#)/i.test(href)) continue;
    href = href.split('#')[0].split('?')[0];
    if (!href) continue;
    out.push(href);
  }
  return out;
}

// href -> 仓库相对目标路径
// ★★ 解析基准必须是【页面的 URL 目录】= 页文件路径去掉 `.md`，
//    而不是 `.md` 文件所在的目录。为什么：Zola 把 `X.md` 服务成 `X/index.html`，
//    所以页内 `../PartyBase` 从 `.../campaign/MobileParty/` 出发 = `.../campaign/PartyBase`
//    （同桶兄弟页），而不是 `.../api/PartyBase`。
//    实测依据：MobileParty.md 在 PartyBase.md/TroopRoster.md 落盘后，判分器 J5R 从
//    `unresolved=3` 变成 `unresolved=1 [../Hero]` ⇒ `../PartyBase` 确实解析到了 campaign 桶内。
//    ★ 我第一版用 `posix.dirname(pageRel)` 作基准，多退了一级 ⇒ 算出「零页自洽」的假 EMPTY。
// 页面的 URL 目录：
//   · 叶子页 `.../X.md`        ⇒ `.../X`   （静态站把 X.md 服务成 X/index.html）
//   · 节索引 `.../dir/_index.md` ⇒ `.../dir`  ★ 不能也去掉 .md 变成 `.../dir/_index`
//     —— 我第一版就是这么写的，于是 `../viewmodel/` 被算成 `.../localization/viewmodel/_index.md`，
//     把 9 页 + 桶索引全判成不自洽（**第二次同类自伤**）。
//   ⇒ 交叉验证手段：权威尺 `audit-links.mjs` 说我的文件 0 条断链，而我的工具说全不自洽
//     ⇒ **先怀疑自己的工具**。
function baseDirOf(pageRel) {
  if (pageRel.endsWith('/_index.md')) return pageRel.slice(0, -'/_index.md'.length);
  if (pageRel.endsWith('.md')) return pageRel.slice(0, -3);
  return pageRel;
}

function resolveHref(pageRel, href) {
  const base = baseDirOf(pageRel);
  const isDirLink = href.endsWith('/');
  let t = posix.normalize(posix.join(base, href));
  // ★ 去掉尾斜杠再加 /_index.md，否则会得到 `.../campaign//_index.md`（双斜杠）
  //   —— 这个 bug 曾让 4 页全被判为不自洽（`../` 解析不到），我把它当成了真结果。
  if (isDirLink) return t.replace(/\/+$/, '') + '/_index.md';
  const b = posix.basename(t);
  if (!b.includes('.')) return t + '.md';
  return t;
}

// 逐页链接现状（相对于 HEAD）
const info = new Map();
for (const rel of cands) {
  const links = linksOf(rel);
  if (links === null) {
    info.set(rel, { missing: true, links: [] });
    continue;
  }
  const resolved = links.map((h) => ({ href: h, target: resolveHref(rel, h) }));
  info.set(rel, { missing: false, links: resolved });
}

// 不动点：最大自洽子集（同时记下【被剔除那一刻】的未满足链接，而不是最后重算）
let keep = new Set(cands.filter((r) => !info.get(r).missing));
const removed = new Map();
for (;;) {
  const present = new Set([...HEAD, ...keep]);
  const drops = [];
  for (const r of keep) {
    const unsat = info.get(r).links.filter((l) => !present.has(l.target));
    if (unsat.length) drops.push({ rel: r, unsat });
  }
  if (!drops.length) break;
  for (const d of drops) {
    keep.delete(d.rel);
    removed.set(d.rel, d.unsat);
  }
}

console.log(`# batch self-consistency — ${cands.length} candidate page(s), HEAD=${process.env.HEAD_SHA || ''}`);
console.log(`# 规则（boss-4 #20864 ②）：每条 markdown 链接必须解析到 HEAD ∪ 本批提交集合`);
console.log('');
for (const rel of cands) {
  const i = info.get(rel);
  if (i.missing) {
    console.log(`  MISSING-ON-DISK  ${rel}`);
    continue;
  }
  const tag = keep.has(rel) ? 'COMMIT ' : 'HOLD   ';
  const unsat = removed.get(rel) || [];
  console.log(`  ${tag} links=${String(i.links.length).padStart(3)}  ${rel}`);
  for (const b of unsat) console.log(`             ↳ unsatisfied: ${b.href}  ->  ${b.target}`);
}
console.log('');
if (!keep.size) {
  console.log('RESULT: EMPTY — 没有任何页满足「提交集合自洽」⇒ 本批【不提交】，全部留工作区。');
  console.log('⇒ 原因见上面的 unsatisfied 行：通常是指向尚未落盘的兄弟页。');
  process.exit(1);
}
console.log(`RESULT: ${keep.size}/${cands.length} page(s) self-consistent ⇒ 可提交集合:`);
for (const r of [...keep].sort()) console.log(`  ${r}`);
if (removed.size) {
  console.log(`\n留在工作区（等下批）：${removed.size} 页`);
  for (const r of [...removed.keys()].sort()) console.log(`  ${r}`);
}
