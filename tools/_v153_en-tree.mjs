#!/usr/bin/env node
// v1.5.3 English class-reference tree builder.
//
// SOURCE OF TRUTH: content/v1.5.3/zh/api/**  (built by the parallel zh worker).
// This script never re-scans the C# source and never invents a fact: every
// namespace / module / type declaration / base / source path / property
// signature / method signature is copied verbatim from the matching zh page,
// so the en tree is isomorphic to the zh tree by construction.
//
// SCOPE (lead-3 ruling): only the facade-related sections are materialized.
// The zh tree is expected to be wider than the en tree on purpose; every
// zh leaf outside the allowlist is reported as an accounted gap, never
// silently dropped and never mirrored.
//
// Output: content/v1.5.3/en/api/**

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, unlinkSync, rmdirSync } from 'node:fs';
import { join, posix, relative } from 'node:path';

const ROOT = process.cwd();
// Env overrides exist only so the parser can be smoke-tested against the
// v1.4.5 tree before the v1.5.3 zh tree lands. Product run uses the defaults.
const ZH_API = process.env.V153_ZH_API || join(ROOT, 'content', 'v1.5.3', 'zh', 'api');
const EN_API = process.env.V153_EN_API || join(ROOT, 'content', 'v1.5.3', 'en', 'api');
const DRY = process.argv.includes('--dry');

// Default scope: mirror EVERY zh section, because the en tree must be a strict
// structural mirror of zh (same buckets, same filenames) and worker-5's landing
// page already links all of them. Set V153_FACADE_ONLY=1 to ship the narrower
// facade-first subset instead.
const FACADE = [
  'campaign',
  'campaign-ext',
  'core',
  'core-extra',
  'mission',
  'mission-ext',
  'save-system',
  'gui',
  'viewmodel',
];
const FACADE_ONLY = process.env.V153_FACADE_ONLY === '1';

const SECTION_TITLES = {
  achievementsystem: 'Achievement System',
  activitysystem: 'Activity System',
  campaign: 'Campaign',
  'campaign-ext': 'Campaign-Ext',
  core: 'Core',
  'core-extra': 'Core Extra',
  custombattle: 'Custom Battle',
  engine: 'Engine',
  final: 'Final',
  gameplay: 'Gameplay',
  gui: 'GUI',
  localization: 'Localization',
  mission: 'Mission',
  'mission-ext': 'Mission-Ext',
  modulemanager: 'Module Manager',
  network: 'Network',
  sandbox: 'SandBox',
  'save-system': 'Save System',
  storymode: 'Story Mode',
  system: 'System',
  viewmodel: 'ViewModel',
};

// ---------------------------------------------------------------- utilities

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (entry.endsWith('.md')) acc.push(full);
    else if (!entry.startsWith('.')) walk(full, acc);
  }
  return acc;
}

function writeIfChanged(path, text) {
  if (existsSync(path) && readFileSync(path, 'utf8') === text) return 0;
  if (!DRY) {
    mkdirSync(join(path, '..'), { recursive: true });
    writeFileSync(path, text, 'utf8');
  }
  return 1;
}

// Metadata lines are copied verbatim, so accept either language's label.
function meta(text, labels) {
  for (const label of labels) {
    const m = text.match(new RegExp(`^\\*\\*${label}[：:]\\*\\*\\s*(.+)$`, 'm'));
    if (m) return m[1].trim();
  }
  return '';
}

function backtick(value) {
  const v = String(value || '').trim();
  if (!v) return '';
  return v.startsWith('`') && v.endsWith('`') ? v : '`' + v + '`';
}

// Some zh pages carry a prose gloss inside the metadata value, e.g.
//   Module: TaleWorlds.CampaignSystem（位于 Core 之上的游戏逻辑层）
//   Base:   `GameType`（TaleWorlds.Core）
// The fact is the part before the gloss, so a CJK-only parenthetical is dropped
// and a non-CJK one is demoted to ASCII parens. No CJK reaches an en page.
const CJK = /[\u3400-\u9fff\u3000-\u303f\uff00-\uffef]/u;
const CJK_RUN = /^[\u3400-\u9fff\u3000-\u303f\uff00-\uffef:：、\s]+/u;
function deCJK(value) {
  let out = String(value || '');
  out = out.replace(/（([^（）]*)）/gu, (all, inner) => (CJK.test(inner) ? '' : ` (${inner})`));
  return out.replace(/\s{2,}/g, ' ').replace(/\s+([),])/g, '$1').trim();
}
// zh pages spell Base as prose: "实现 `X`" or "无（静态类）". The fact is the
// code span, or the absence of one, so lead-in CJK is dropped and "无" maps to
// the v1.4.5 English precedent `none`.
function normalizeBase(value) {
  const raw = String(value || '').trim();
  if (!raw) return 'none';
  // Prose can trail the fact too: "`A`（…）、实现 `B`" -> "`A`, `B`".
  const stripped = deCJK(raw)
    .replace(/、/g, ',')
    .replace(/[\u3400-\u9fff\u3000-\u303f\uff00-\uffef:：\s]+/gu, ' ')
    .replace(/\s*,\s*/g, ', ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  if (/^无/u.test(raw) || !stripped) return 'none';
  return stripped;
}

function sectionBody(text, headingRes) {
  for (const re of headingRes) {
    const m = text.match(re);
    if (!m) continue;
    const rest = text.slice(m.index + m[0].length);
    // Only a same-or-higher level heading ends the section: `### Method`
    // subsections belong to their `##` parent, so the cut is 1-2 hashes.
    const next = rest.search(/^#{1,2}\s+/m);
    return (next < 0 ? rest : rest.slice(0, next)).trim();
  }
  return '';
}

function parseProperties(text) {
  const body = sectionBody(text, [/^##\s+(?:主要属性|关键属性|Key Properties|Properties)\s*$/m]);
  if (!body) return [];
  const rows = [];
  for (const line of body.split(/\r?\n/)) {
    if (!/^\s*\|/.test(line) || /^\|\s*[-:\s|]+\s*\|/.test(line)) continue;
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.length < 2) continue;
    const name = cells[0].replace(/[`*]/g, '').trim();
    if (!name || /^name$/i.test(name) || /^名称$/i.test(name)) continue;
    rows.push({ name, signature: cells.slice(1).join(' | ').trim() });
  }
  return rows;
}

function parseMethods(text) {
  const body = sectionBody(text, [/^##\s+(?:主要方法|关键方法|Key Methods|Methods)\s*$/m]);
  if (!body) return [];
  const heads = [];
  const re = /^#{3,4}\s+(.+?)\s*$/gm;
  let m;
  while ((m = re.exec(body))) heads.push({ name: m[1].trim(), start: m.index, end: m.index + m[0].length });
  const out = [];
  for (let i = 0; i < heads.length; i++) {
    const chunk = body.slice(heads[i].end, heads[i + 1] ? heads[i + 1].start : undefined);
    const sig = chunk.match(/`([^`\n]+)`/);
    if (!sig) continue;
    out.push({ name: heads[i].name.replace(/`/g, '').trim(), signature: sig[1].trim() });
  }
  return out;
}

// Collision pages are named `<TypeName>__<Namespace>.md`; the page title is the
// bare type name (v1.4.5 precedent). Prefer the declaration, then H1, then stem.
function typeNameOf(rel, text, declType) {
  const fromDecl = String(declType || '').match(/\b(?:class|interface|struct|enum|delegate)\s+([A-Za-z_]\w*)/);
  if (fromDecl) return fromDecl[1];
  const h1 = text.match(/^#\s+(.+)$/m);
  if (h1) return h1[1].trim();
  return posix.basename(rel, '.md').split('__')[0];
}

// ------------------------------------------------------------- en leaf page

function renderLeaf(typeName, f) {
  const p = [];
  p.push('---');
  p.push(`title: "${typeName}"`);
  p.push(`description: "Auto-generated class reference for ${typeName}."`);
  p.push('---');
  p.push(`# ${typeName}`);
  p.push('');
  p.push(`**Namespace:** ${f.namespace}`);
  p.push(`**Module:** ${f.module}`);
  p.push(`**Type:** ${f.declType}`);
  p.push(`**Base:** ${f.base}`);
  p.push(`**Source:** ${f.source}`);
  p.push('');
  p.push('## Overview');
  p.push('');
  p.push(`Auto-generated stub for \`${typeName}\`. Deep documentation is scheduled in a later pass.`);
  p.push('');
  p.push('## Mental Model');
  p.push('');
  p.push('Auto-generated placeholder; to be replaced by the deep-documentation pass.');

  if (f.properties.length) {
    p.push('');
    p.push('## Key Properties');
    p.push('');
    p.push('| Name | Signature |');
    p.push('|------|-----------|');
    for (const prop of f.properties) p.push(`| ${prop.name} | ${backtick(prop.signature)} |`);
  }
  if (f.methods.length) {
    p.push('');
    p.push('## Key Methods');
    for (const meth of f.methods) {
      p.push('');
      p.push(`### ${meth.name}`);
      p.push(backtick(meth.signature));
    }
  }

  p.push('');
  p.push('## See Also');
  p.push('');
  p.push('- [Section index](../)');
  p.push('');
  return p.join('\n');
}

// ------------------------------------------------------------- en index pages

function groupKey(name) {
  const c = String(name)[0].toUpperCase();
  return /[A-Z]/.test(c) ? c : '#';
}

function renderSubIndex(name, entries) {
  const title = SECTION_TITLES[name] || name;
  const sorted = [...entries].sort((a, b) => a.slug.localeCompare(b.slug));
  const groups = new Map();
  for (const e of sorted) {
    const key = groupKey(e.name);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(e);
  }

  const p = [];
  p.push('---');
  p.push(`title: "${name} index"`);
  p.push(`description: "${title} API type index for Bannerlord v1.5.3 - ${sorted.length} public types."`);
  p.push('---');
  p.push(`# ${title} API (v1.5.3)`);
  p.push('');
  p.push(`Auto-generated index of ${sorted.length} public ${title} types in Bannerlord v1.5.3. Every leaf page is a stub; deep documentation lands in a later pass.`);
  p.push('');
  p.push('## ↑ Up');
  p.push('');
  p.push('- [API Reference](../)');
  p.push('- [Version Home](../../)');
  p.push('');
  p.push('## Child Types — Alphabetical');
  for (const [key, items] of [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    p.push('');
    p.push(`### ${key === '#' ? 'Other' : key}`);
    p.push('');
    for (const item of items) p.push(`- [${item.name}](./${item.slug})`);
  }
  p.push('');
  return p.join('\n');
}

function renderApiIndex(subs) {
  const p = [];
  p.push('---');
  p.push('title: "API Reference (v1.5.3)"');
  p.push(`description: "Bannerlord v1.5.3 API reference index - ${subs.length} sections over the public type surface."`);
  p.push('---');
  p.push('# API Reference (v1.5.3)');
  p.push('');
  p.push('Auto-generated index of the Bannerlord v1.5.3 public type surface. Every leaf page is a stub; deep documentation lands in a later pass.');
  p.push('');
  p.push('## ↑ Up');
  p.push('');
  // api/_index.md sits one level below the language root, so it climbs once.
  p.push('- [Version Home](../)');
  p.push('');
  p.push('## Modules');
  p.push('');
  for (const sub of subs) p.push(`- [${SECTION_TITLES[sub] || sub}](./${sub}/)`);
  p.push('');
  return p.join('\n');
}

// ------------------------------------------------------------------- driver

if (!existsSync(ZH_API)) {
  console.error(`MISSING_ZH_TREE: ${ZH_API} does not exist yet; nothing to mirror.`);
  process.exit(2);
}

const zhFiles = walk(ZH_API).map((f) => posix.normalize(relative(ZH_API, f).split('\\').join('/')));
const zhLeaves = zhFiles.filter((f) => posix.basename(f) !== '_index.md');
const zhSections = [...new Set(zhFiles.filter((f) => f.includes('/')).map((f) => f.split('/')[0]))].sort();
const inScope = FACADE_ONLY ? zhLeaves.filter((f) => FACADE.includes(f.split('/')[0])) : zhLeaves;
const outOfScope = zhLeaves.filter((f) => !inScope.includes(f));

let written = 0;
const warnings = [];
const entriesBySection = new Map();

for (const rel of inScope) {
  const text = readFileSync(join(ZH_API, rel), 'utf8');
  const f = {
    namespace: meta(text, ['Namespace', '命名空间']),
    module: deCJK(meta(text, ['Module', '模块'])),
    declType: deCJK(meta(text, ['Type', '类型'])),
    base: normalizeBase(meta(text, ['Base', '基类'])),
    source: deCJK(meta(text, ['Source', 'File', '来源', '源文件', '文件'])),
    properties: parseProperties(text).map((r) => ({ name: deCJK(r.name), signature: deCJK(r.signature) })),
    methods: parseMethods(text).map((r) => ({ name: deCJK(r.name), signature: deCJK(r.signature) })),
  };
  const typeName = typeNameOf(rel, text, f.declType);
  if (!f.namespace) warnings.push(`no-namespace ${rel}`);
  if (!f.declType) warnings.push(`no-type ${rel}`);
  if (!f.properties.length) warnings.push(`no-properties ${rel}`);
  if (!f.methods.length) warnings.push(`no-methods ${rel}`);

  written += writeIfChanged(join(EN_API, rel), renderLeaf(typeName, f));

  const dir = posix.dirname(rel);
  if (!entriesBySection.has(dir)) entriesBySection.set(dir, []);
  entriesBySection.get(dir).push({ slug: posix.basename(rel, '.md'), name: typeName });
}

const enSections = [...entriesBySection.keys()].map((d) => posix.basename(d)).sort();
for (const [dir, entries] of entriesBySection) {
  written += writeIfChanged(join(EN_API, dir, '_index.md'), renderSubIndex(posix.basename(dir), entries));
}
written += writeIfChanged(join(EN_API, '_index.md'), renderApiIndex(enSections));

// ------------------------------------------------------------- isomorphism

function walkRel(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (entry.endsWith('.md')) acc.push(posix.normalize(relative(EN_API, full).split('\\').join('/')));
    else if (!entry.startsWith('.')) walkRel(full, acc);
  }
  return acc;
}
const enFiles = walkRel(EN_API);
const enLeaves = enFiles.filter((f) => posix.basename(f) !== '_index.md');

// Prune: worker-3 renames/removes zh pages as defects are fixed, and the en
// tree must stay a mirror. Only touch paths this script owns (en/api/**) and
// only ones with no zh counterpart -- never invent a page zh does not have.
let pruned = 0;
for (const rel of enLeaves) {
  if (zhFiles.includes(rel)) continue;
  if (!DRY) unlinkSync(join(EN_API, rel));
  pruned++;
}
// Drop section indexes whose leaves were all pruned away.
let prunedSections = 0;
for (const rel of enFiles) {
  if (posix.basename(rel) !== '_index.md' || rel === '_index.md') continue;
  if (existsSync(join(ZH_API, rel))) continue;
  const dir = posix.dirname(rel);
  const survivors = enLeaves.filter((f) => posix.dirname(f) === dir && zhFiles.includes(f));
  if (survivors.length) continue;
  if (!DRY) unlinkSync(join(EN_API, rel));
  prunedSections++;
}
const orphanEn = DRY ? enLeaves.filter((f) => !zhFiles.includes(f)) : walkRel(EN_API).filter((f) => posix.basename(f) !== '_index.md' && !zhFiles.includes(f));

const gaps = [...new Set(outOfScope.map((f) => f.split('/')[0]))].sort();
const gapLeaves = outOfScope.length;
console.log(`ZH_FILES=${zhFiles.length}`);
console.log(`ZH_SECTIONS=${zhSections.length} (${zhSections.join(', ')})`);
console.log(`SCOPE=${FACADE_ONLY ? 'facade-only' : 'full-zh-mirror'}`);
console.log(`ALLOWLIST=${FACADE.join(', ')}`);
console.log(`EN_FILES=${enFiles.length}`);
console.log(`EN_LEAVES=${enLeaves.length}`);
console.log(`EN_SECTIONS=${enSections.length} (${enSections.join(', ')})`);
console.log(`WRITTEN=${written}${DRY ? ' (dry)' : ''}`);
console.log(`EN_NOT_IN_ZH=${orphanEn.length}`);
console.log(`PRUNED_LEAVES=${pruned}`);
console.log(`PRUNED_SECTION_INDEXES=${prunedSections}`);
console.log(`GAPS_OUT_OF_SCOPE_SECTIONS=${gaps.length} (${gaps.join(', ')})`);
console.log(`GAPS_OUT_OF_SCOPE_LEAVES=${gapLeaves}`);
console.log(`FACT_WARNINGS=${warnings.length}`);
if (warnings.length) console.log(warnings.slice(0, 30).map((w) => '  warn ' + w).join('\n'));
process.exitCode = orphanEn.length ? 1 : 0;