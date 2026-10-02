// tools/_v147_skeleton.mjs
// Generates the v1.4.7 zh API skeleton leaf pages listed in
// tools/_v147_inventory.json -> `pages[]`. Chinese prose, REAL signatures
// copied verbatim from the 1.4.7 source lines recorded by _v147_inventory.mjs.
//
// These pages are deliberately SKELETONS, not deep writes: namespace / module /
// declaration text / base / source path / verbatim member signatures. Every page
// says so itself. No invented per-member purpose, no placeholder code.
//
// Writes ONLY: content/v1.4.7/zh/api/<dir>/<File>.md  (never _index.md, never en/)
// Reads:      tools/_v147_inventory.json, tools/_dir-map-canonical.json
//
// Usage: node tools/_v147_skeleton.mjs [--dry]

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DRY = process.argv.includes('--dry');
const INV = JSON.parse(readFileSync(join(__dirname, '_v147_inventory.json'), 'utf8'));
const OUT_ROOT = join(ROOT, 'content/v1.4.7/zh/api');
const MAX_MEMBERS = 30;

// Link emission is driven by the boss artifact's machine-readable linkRules
// (tools/_dir-map-canonical.json -> linkRules), not by hardcoded text, so a
// future artifact change is followed automatically.
const CANON = JSON.parse(readFileSync(join(__dirname, '_dir-map-canonical.json'), 'utf8'));
const LR = CANON.linkRules;
if (!LR || !LR.leafToSibling || !LR.leafToCrossBucket || !LR.leafToSectionIndex) {
  throw new Error('artifact linkRules missing leafToSibling/leafToCrossBucket/leafToSectionIndex');
}
const tpl = (rule, name, bucket) => rule.replace('<Name>', name).replace('<other-bucket>', bucket);

const KIND_CN = { class: '类', struct: '结构体', interface: '接口', enum: '枚举', delegate: '委托' };
const MODIFIER_CN = {
  static: '静态', abstract: '抽象', sealed: '密封', partial: '分部',
};
const ACCESS_CN = { public: 'public（公开）', internal: 'internal（程序集内）', protected: 'protected（受保护）', private: 'private（私有）' };

// ---------------------------------------------------------------- link index
// Page path (repo-relative, from inventory) for every type that will exist:
// my pages + the deep-write pages owned by W4 (worker-15), which are part of the
// same tree but are not written here.
const pathOf = new Map(); // "ns\0Type" -> repo-relative page path
const typeOfPage = new Map(); // repo-relative page path -> type record
for (const t of INV.types) {
  if (t.w4Owned) pathOf.set(`${t.namespace}\u0000${t.typeName}`, `content/v1.4.7/zh/api/${t.leafRel}`);
}
for (const p of INV.pages) {
  const t = INV.types.find((x) => x.namespace === p.namespace && x.typeName === p.typeName);
  if (t) { pathOf.set(`${t.namespace}\u0000${t.typeName}`, p.path); typeOfPage.set(p.path, t); }
}
const myPaths = new Set(INV.pages.map((p) => p.path));
const w4Paths = new Map();
for (const t of INV.types) if (t.w4Owned) w4Paths.set(t.typeName, `content/v1.4.7/zh/api/${t.leafRel}`);

// Route-relative href, emitted from the artifact's linkRules. On this site every
// page route is its own directory: a leaf at /zh/api/<bucket>/<Name>/ pops one
// segment per `..`. So a sibling leaf takes leafToSibling, a different bucket
// takes leafToCrossBucket, and dot-slash is never emitted from a leaf.
const bucketOf = (p) => p.replace(/\\/g, '/').split('/').slice(-2, -1)[0];
function href(fromPath, toPath) {
  const name = toPath.split('/').pop().replace(/\.md$/, '');
  return bucketOf(fromPath) === bucketOf(toPath)
    ? tpl(LR.leafToSibling, name)
    : tpl(LR.leafToCrossBucket, name, bucketOf(toPath));
}

// resolve a type token (e.g. "Mission", "List<Hero>") against the inventory
const bySimpleName = new Map();
for (const t of INV.types) {
  if (!bySimpleName.has(t.typeName)) bySimpleName.set(t.typeName, []);
  bySimpleName.get(t.typeName).push(t);
}
function findTypeToken(token, selfNs) {
  const name = String(token).replace(/^.*\./, '').replace(/[<>\[\],]/g, '').trim();
  if (!/^[A-Za-z_]\w*$/.test(name)) return null;
  const cands = bySimpleName.get(name);
  if (!cands || !cands.length) return null;
  const same = cands.filter((c) => c.namespace === selfNs);
  const usable = cands.filter((c) => pathOf.get(`${c.namespace}\u0000${c.typeName}`));
  return (same.find((c) => pathOf.get(`${c.namespace}\u0000${c.typeName}`)) || usable[0] || cands[0]) || null;
}

function memberKindCN(m, typeName) {
  if (m.kind === 'event') return `事件，类型 ${m.type || '未标注'}`;
  if (m.kind === 'method') {
    if (m.text.startsWith(typeName) && !/return|=>|\w\s*::/.test(m.text.slice(0, typeName.length + 8))) {
      if (new RegExp(`^\\s*(?:[\\w<>,\\[\\]\\.\\?]+\\s+)?${typeName}\\s*\\(`).test(m.text)) {
        return `构造函数，${m.params} 个参数`;
      }
    }
    const ret = m.type || 'void';
    return `方法，${m.params} 个参数，返回 ${ret}`;
  }
  if (m.kind === 'property') {
    const acc = /\bget\b/.test(m.text) ? 'get' : '';
    const set = /\bset\b/.test(m.text) ? 'set' : '';
    return `属性，${[acc, set].filter(Boolean).join('/') || 'get'}，类型 ${m.type || '未标注'}`;
  }
  if (m.kind === 'attribute') return '成员特性标记';
  return `字段，类型 ${m.type || '未标注'}`;
}

function baseLine(t) {
  if (t.kind === 'enum') return '无（枚举类型）';
  if (t.kind === 'interface') return '无（接口类型）';
  if (t.kind === 'delegate') return `无（委托，返回 ${t.baseType || '未标注'}）`;
  return t.baseType ? t.baseType : '无（源码未显式声明基类）';
}

function flagsCN(t) {
  const f = (t.flags || []).map((x) => MODIFIER_CN[x] || x);
  return f.length ? f.join('、') : '无特殊修饰';
}

function buildLinks(t, myPath) {
  const links = [];
  const seen = new Set();
  const push = (target, label, note) => {
    if (!target) return;
    const p = pathOf.get(`${target.namespace}\u0000${target.typeName}`);
    if (!p || p === myPath) return;
    const key = `${p}\u0000${label}`;
    if (seen.has(key)) return;
    seen.add(key);
    links.push({ href: href(myPath, p), label: note ? `${label}（${note}）` : label, target: p });
  };

  if (t.baseType && t.kind === 'class') push(findTypeToken(t.baseType, t.namespace), t.baseType, '基类');

  const memberTypes = [];
  for (const m of t.members || []) {
    if (m.access !== 'public' && m.access !== 'protected') continue;
    const rt = m.type || '';
    for (const tok of rt.match(/[A-Za-z_][\w.]*/g) || []) {
      const hit = findTypeToken(tok, t.namespace);
      if (hit && hit.typeName !== t.typeName) memberTypes.push(hit);
      if (memberTypes.length >= 6) break;
    }
    if (memberTypes.length >= 6) break;
  }
  for (const hit of memberTypes.slice(0, 3)) push(hit, hit.typeName, '成员类型');

  const siblings = INV.pages.filter((p) => p.dir === t.dir && p.path !== myPath && p.namespace !== t.namespace);
  for (const p of siblings.slice(0, 3)) push(typeOfPage.get(p.path), p.title, '同命名空间');
  const cross = INV.pages.filter((p) => p.dir !== t.dir && p.namespace !== t.namespace && p.facade);
  for (const p of cross.slice(0, 2)) push(typeOfPage.get(p.path), p.title, `${p.dir} 桶`);
  return links;
}

function render(t, myPath) {
  const kindCN = KIND_CN[t.kind] || t.kind;
  // 1.4.5 convention: source path is module-relative, e.g. TaleWorlds.Core/Game.cs
  const srcRel = t.sourceFile.replace(/^\.\.\/bannerlord-1\.4\.7\//, '');
  const visible = (t.members || []).filter((m) => m.access === 'public' || m.access === 'protected');
  const shown = visible.slice(0, MAX_MEMBERS);
  const hidden = visible.length - shown.length;
  const links = buildLinks(t, myPath);

  const memberLines = shown.length
    ? shown.map((m) => `- \`${m.text}\` — ${memberKindCN(m, t.typeName)}`)
    : ['- 源码中未声明 public 或 protected 成员。'];

  const linkLines = links.map((l) => `[${l.label}](${l.href})`);

  return `---
title: "${t.typeName}"
description: "${t.namespace}.${t.typeName} —— 命名空间 ${t.namespace} 中的${kindCN}，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# ${t.typeName}

**Namespace:** \`${t.namespace}\`  
**Module:** \`${t.module}\`  
**Type:** \`${t.declText}\`  
**Base:** \`${baseLine(t)}\`  
**Source:** \`${srcRel}\`

## 概述

\`${t.typeName}\` 是 bannerlord-1.4.7 源码中命名空间 \`${t.namespace}\` 下的${kindCN}，声明于模块目录 \`${t.module}\` 的 \`${srcRel}\`（第 ${t.declLine} 行声明）。该声明访问级别为${ACCESS_CN[t.access] || t.access}，修饰为${flagsCN(t)}，${t.kind === 'class' && t.baseType ? `基类型是 \`${t.baseType}\`` : '源码中未显式声明基类型'}；解析到的成员共 ${t.memberCount} 项，其中 ${t.publicMemberCount} 项为 public 或 protected。

本页由 \`tools/_v147_skeleton.mjs\` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

${memberLines.join('\n')}
${hidden > 0 ? `\n- 其余 ${hidden} 个 public/protected 成员未在此列出。` : ''}

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 ${visible.length} 条成员记录全部来自 \`${srcRel}\` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 \`${t.declText}\` 这一行的访问级别与修饰（当前为${ACCESS_CN[t.access] || t.access}、${flagsCN(t)}）以及上面每项的 get/set 与参数个数，而不是本页的措辞。${t.facade ? '该类型属于模块入口点集合（模块目录 \`' + t.module + '\`），它的公开成员就是该模块对宿主暴露的接口面。' : ''}

## 参见

- 本目录索引：[\`${t.dir}\` API](${LR.leafToSectionIndex})
${linkLines.length ? linkLines.map((l) => `- ${l}`).join('\n') : '- 暂无已生成的同类页面可链接。'}
`;
}

// ------------------------------------------------------------------ generate
let written = 0;
const perDir = {};
const linkTargets = []; // {from, href, text}
for (const p of INV.pages) {
  const t = typeOfPage.get(p.path);
  if (!t) { console.error(`!! inventory page without type: ${p.path}`); continue; }
  const abs = join(ROOT, p.path);
  const text = render(t, p.path);
  if (!DRY) {
    mkdirSync(dirname(abs), { recursive: true });
    writeFileSync(abs, text, 'utf8');
  }
  written += 1;
  perDir[p.dir] = (perDir[p.dir] || 0) + 1;
  for (const m of text.matchAll(/\[[^\]]+\]\((\.\.?[^)]*)\)/g)) linkTargets.push({ from: p.path, href: m[1] });
}

// -------------------------------------------------- route-relative link gate
// Mirrors tools/audit-links.mjs URL mode: a page route is its own directory,
// `..` pops one segment, and a route resolves if <route>.md or
// <route>/_index.md exists under content/v1.4.7/zh/.
const CONTENT_ROOT = 'content/v1.4.7/zh';
function routeOf(pagePath) {
  const segs = pagePath.split('/');
  return segs.slice(segs.indexOf('api')).join('/').replace(/\.md$/, '/');
}
function resolveRoute(fromRoute, hrefPath) {
  const base = fromRoute.endsWith('/') ? fromRoute : `${fromRoute}/`;
  const out = [];
  for (const seg of (base + hrefPath).split('/')) {
    if (seg === '' || seg === '.') continue;
    if (seg === '..') out.pop();
    else out.push(seg);
  }
  return out.join('/'); // no trailing slash: the artifact linkRules emit <Name> with no slash
}
function routeExists(route) {
  return existsSync(join(ROOT, CONTENT_ROOT, `${route}.md`)) || existsSync(join(ROOT, CONTENT_ROOT, route, '_index.md'));
}
const routeBroken = [];
const routePendingIndex = new Set();
const routePendingW4 = new Set();
const w4Routes = new Set(INV.types.filter((x) => x.w4Owned).map((x) => routeOf(`content/v1.4.7/zh/api/${x.leafRel}`).replace(/\/$/, '')));
let routeChecked = 0;
for (const p of INV.pages) {
  const abs = join(ROOT, p.path);
  if (!existsSync(abs)) continue;
  const text = readFileSync(abs, 'utf8');
  const from = routeOf(p.path);
  for (const m of text.matchAll(/\[[^\]]+\]\((\.[^)]*)\)/g)) {
    const hrefPath = m[1];
    routeChecked += 1;
    const route = resolveRoute(from, hrefPath);
    if (routeExists(route)) continue;
    const isW4 = w4Routes.has(route);
    const isIndex = hrefPath === '../' || hrefPath === '../../';
    if (isW4) routePendingW4.add(route);
    else if (isIndex) routePendingIndex.add(route);
    else routeBroken.push(`${p.path} -> ${hrefPath} (route ${route})`);
  }
}
if (routeBroken.length) {
  console.error('ROUTE GATE FAILED (links that do not resolve route-relative):');
  for (const b of routeBroken.slice(0, 40)) console.error('  ' + b);
  console.error(`total: ${routeBroken.length}`);
  process.exitCode = 1;
}
// --------------------------------------------- artifact linkRules.gate
// Implemented exactly as tools/_dir-map-canonical.json -> linkRules.gate states:
//   route(fromPage) = the page's own route, ending in '/' (each route is a dir)
//   target = normalize(route(fromPage) + href)   // one '..' pops one segment
//   routeExists(t)  = exists(content/<t>.md) || exists(content/<t>/_index.md)
// plus the two forbidden shapes from linkRules.forbidden. NOT fs.existsSync on a
// path joined from the file's directory: that check passes on wrong-level links.
const forbiddenDotSlash = [];
const forbiddenShortCross = [];
for (const p of INV.pages) {
  const abs = join(ROOT, p.path);
  if (!existsSync(abs)) continue;
  const from = routeOf(p.path);
  const text = readFileSync(abs, 'utf8');
  for (const m of text.matchAll(/\[[^\]]+\]\((\.[^)]*)\)/g)) {
    const hrefPath = m[1];
    if (hrefPath.startsWith('./')) forbiddenDotSlash.push(`${p.path} -> ${hrefPath}`);
    // one '..' followed by a bucket-shaped segment is the documented defect
    if (/^\.\.\/[^/.]+\/[^/]+\/$/.test(hrefPath)) forbiddenShortCross.push(`${p.path} -> ${hrefPath}`);
  }
}
if (forbiddenDotSlash.length || forbiddenShortCross.length) {
  console.error('linkRules.forbidden violated:');
  for (const f of forbiddenDotSlash.slice(0, 10)) console.error('  dot-slash from leaf: ' + f);
  for (const f of forbiddenShortCross.slice(0, 10)) console.error('  one-level-short cross-bucket: ' + f);
  process.exitCode = 1;
}

// ------------------------------------------------------------ invariant gate
// Boss gate: every written page filename must equal the type name declared in
// its own `**Type:**` line. `__` collision filenames are reported separately
// (they are the artifact's collisionRule, not a mismatch).
const invariantFailures = [];
const collisionPages = [];
for (const p of INV.pages) {
  const t = typeOfPage.get(p.path);
  if (!t) continue;
  const base = p.path.split('/').pop().replace(/\.md$/, '');
  // `public delegate void Foo(...)` declares the name AFTER the return type.
  const declName = (t.kind === 'delegate'
    ? (t.declText.match(/\bdelegate\s+[A-Za-z_][\w<>\[\],\.]*\s+([A-Za-z_]\w*)\s*[<(]/) || ['', ''])[1]
    : (t.declText.match(/\b(?:class|struct|interface|enum|record)\s+([A-Za-z_]\w*)/) || ['', ''])[1]);
  if (base.includes('__')) collisionPages.push(p.path);
  else if (declName !== t.typeName || base !== t.typeName) {
    invariantFailures.push(`${p.path}: filename=${base} declared=${declName} inventory=${t.typeName}`);
  }
}
if (invariantFailures.length) {
  console.error('INVARIANT GATE FAILED:');
  for (const f of invariantFailures.slice(0, 40)) console.error('  ' + f);
  console.error(`total failures: ${invariantFailures.length}`);
  process.exitCode = 1;
}

console.log(JSON.stringify({
  written,
  invariantGate: invariantFailures.length === 0 ? 'PASS' : 'FAIL',
  collisionRulePages: collisionPages.length,
  dirs: perDir,
  links: linkTargets.length,
  routeGate: routeBroken.length === 0 ? 'PASS' : 'FAIL',
  routeGateChecked: routeChecked,
  routeGatePendingIndex: [...routePendingIndex].sort(),
  routeGatePendingW4: [...routePendingW4].sort(),
  brokenLinks: routeBroken.length,
  brokenSample: routeBroken.slice(0, 20),
  timingPendingIndexLinks: routePendingIndex.size,
  timingPendingW4Links: routePendingW4.size,
  forbiddenDotSlash: forbiddenDotSlash.length,
  forbiddenOneLevelShortCrossBucket: forbiddenShortCross.length,
  inventoryPageCount: INV.pages.length,
  typeCount: INV.typeCount,
  namespaceCount: INV.namespaceCount,
}, null, 1));