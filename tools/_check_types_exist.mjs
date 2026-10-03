#!/usr/bin/env node
// READ-ONLY type-existence verifier. Prints; never writes. Never produces content/*.md.
//
// WHY THIS EXISTS
//   tools/lib/anti-fabrication.mjs harvests identifiers with exactly three patterns:
//       /\.([A-Za-z_]\w*)\s*\(/g    .Foo(
//       /\.([A-Za-z_]\w*)\s*</g    .Foo<
//       /\bnew\s+([A-Za-z_][\w.]*)/g  new Xxx
//   A type name that appears ONLY in a declaration, a cast, a base list or a generic
//   argument is therefore never checked:
//       AgentVisualsData visuals = new AgentVisualsData();   <- 'new' catches the ctor
//       AgentVisualsData visuals;                            <- nothing is checked at all
//       Hero h = (Hero)obj;                                  <- nothing is checked at all
//   That is exactly how `MBAgentVisual` survived into a shipped example on 2026-10-03:
//   the type does not exist in bannerlord-1.4.5 (find -name MBAgentVisual.cs -> 0 hits).
//
//   This script closes that hole for page authors. It is a REPORTING aid, not a gate:
//   it lists every capitalised identifier it could not find in the source corpus, and
//   the author decides which are real (reader-owned example classes, framework types
//   outside the game tree) and which are fabrications.
//
// Usage:
//   node tools/_check_types_exist.mjs <page.md> [more.md ...]
//   node tools/_check_types_exist.mjs --dir content/v1.4.5/zh/api/campaign
//
// Exit: 0 = no unresolved identifiers, 1 = unresolved found, 2 = setup failure.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve, relative, extname } from 'node:path';

const argv = process.argv.slice(2);
const arg = (name, dflt) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};

// NOTE: this script lives in tools/ (not tools/lib/), so the repo root is ONE level up.
// `new URL` resolves relative to the FILE, not its directory — `'../..'` would land in
// C:\WorkSpace\Bannerlord and silently resolve the source root to a path that does not
// exist. The setup check below turns that mistake into a loud failure instead.
const REPO = resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const SOURCE_ROOT = resolve(REPO, arg('--source', '../bannerlord-1.4.5'));

// ---------------------------------------------------------------- corpus
function walk(dir, ext, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const fp = join(dir, e.name);
    if (e.isDirectory()) walk(fp, ext, out);
    else if (extname(e.name) === ext) out.push(fp);
  }
  return out;
}

if (!existsSync(SOURCE_ROOT)) {
  console.error('SETUP FAILURE: source root not found: ' + SOURCE_ROOT);
  process.exit(2);
}
const csFiles = walk(SOURCE_ROOT, '.cs');
if (csFiles.length === 0) {
  console.error('SETUP FAILURE: 0 .cs files under ' + SOURCE_ROOT);
  process.exit(2);
}
const CORPUS = csFiles.map((f) => readFileSync(f, 'utf8')).join('\n');

// POSITIVE CONTROL — a checker that cannot see a type we know exists is worthless.
const CONTROL = ['MBObjectManager', 'CampaignBehaviorBase', 'AgentVisualsData'];
const controlMisses = CONTROL.filter((c) => !new RegExp(`\\b${c}\\b`).test(CORPUS));
console.log(`source root   : ${SOURCE_ROOT}`);
console.log(`.cs files     : ${csFiles.length}`);
console.log(`corpus chars  : ${CORPUS.length}`);
console.log(
  `positive ctrl : ${CONTROL.length - controlMisses.length}/${CONTROL.length} found` +
    (controlMisses.length ? `  MISSING=${controlMisses.join(',')}  <-- PROBE BROKEN` : '  (clean)')
);
if (controlMisses.length) process.exit(2);

// ---------------------------------------------------------------- extraction
function csharpBlocks(text) {
  return [...text.matchAll(/```csharp\r?\n([\s\S]*?)```/g)].map((m) => m[1]);
}

// Names the AUTHOR declared inside the page: their own example classes and members.
function readerOwned(block) {
  const owned = new Set();
  let m;
  const declMember =
    /(?:public|private|protected|internal)[\w\s<>,\[\]\.]*?\s([A-Za-z_]\w*)\s*\(/g;
  while ((m = declMember.exec(block))) owned.add(m[1]);
  const declProp = /(?:public|private|protected|internal)[\w\s<>,\[\]\.]*?\s([A-Za-z_]\w*)\s*\{/g;
  while ((m = declProp.exec(block))) owned.add(m[1]);
  // the reader's own type declarations: `class Foo : Bar`, `struct Foo`, `interface Foo`
  const declType = /\b(?:class|struct|interface|enum|record)\s+([A-Za-z_]\w*)/g;
  while ((m = declType.exec(block))) owned.add(m[1]);
  return owned;
}

// Same escape hatch anti-fabrication uses.
function isExampleName(id) {
  return /^(?:My|Your)[A-Z_]/.test(id) || /^(?:Some|Example|Demo|Sample)[A-Z_]?/.test(id);
}

// Every capitalised identifier that could be a game type, wherever it appears.
function candidateTypes(block) {
  const found = new Set();
  let m;
  // declarations: `AgentVisualsData visuals`, `var x = ...` excluded (lowercase anyway)
  const decl = /\b([A-Z][A-Za-z0-9_]{2,})\s+[A-Za-z_]\w*\s*[=;,)]/g;
  while ((m = decl.exec(block))) found.add(m[1]);
  // casts: `(Hero)obj`, `(Hero) x`
  const cast = /\(\s*([A-Z][A-Za-z0-9_]{2,}(?:<[^>]*>)?)\s*\)/g;
  while ((m = cast.exec(block))) found.add(m[1].replace(/<.*/, ''));
  // generic arguments: List<Hero>, Dictionary<string, Hero>
  const gen = /<\s*([A-Z][A-Za-z0-9_]{2,})/g;
  while ((m = gen.exec(block))) found.add(m[1]);
  // base list / static access: `: CampaignBehaviorBase`, `Campaign.Current`
  const base = /:\s*([A-Z][A-Za-z0-9_]{2,})/g;
  while ((m = base.exec(block))) found.add(m[1]);
  // qualified type at start of a declaration: `TaleWorlds.Core.Hero h`
  const qual = /\b([A-Z][A-Za-z0-9_]*(?:\.[A-Z][A-Za-z0-9_]*)+)\s+[A-Za-z_]\w*\s*[=;,)]/g;
  while ((m = qual.exec(block))) found.add(m[1]);
  return found;
}

function unresolvedIn(fileAbs) {
  const text = readFileSync(fileAbs, 'utf8');
  const blocks = csharpBlocks(text);
  const owned = new Set();
  for (const b of blocks) for (const id of readerOwned(b)) owned.add(id);
  const claimed = new Map();
  blocks.forEach((b, bi) => {
    for (const id of candidateTypes(b)) {
      if (owned.has(id) || isExampleName(id)) continue;
      if (!claimed.has(id)) claimed.set(id, bi + 1);
    }
  });
  const misses = [];
  for (const [id, blockNo] of claimed) {
    const re = new RegExp(`\\b${id.replace(/[$]/g, '\\$')}\\b`);
    if (!re.test(CORPUS)) misses.push({ id, blockNo });
  }
  return { blocks: blocks.length, declared: claimed.size, misses };
}

// Types whose .cs file we can locate, so `Type.Member` can be verified against it.
const BY_BASENAME = new Map();
for (const f of csFiles) {
  const b = f.slice(f.lastIndexOf('\\') + 1);
  if (!BY_BASENAME.has(b)) BY_BASENAME.set(b, []);
  BY_BASENAME.get(b).push(f);
}
const MEMBER_CACHE = new Map();
function membersOf(typeName) {
  if (MEMBER_CACHE.has(typeName)) return MEMBER_CACHE.get(typeName);
  const files = BY_BASENAME.get(typeName + '.cs') || [];
  const text = files.map((f) => readFileSync(f, 'utf8')).join('\n');
  MEMBER_CACHE.set(typeName, text);
  return text;
}

// Paren-less member access: `CampaignOptionDisableStatus.Locked`, `Campaign.Current`.
// NEITHER anti-fabrication (needs `.X(` / `new X`) nor the declaration/cast regexes
// below can see these — worker-85 shipped a fabricated `CampaignOptionDisableStatus.Locked`
// that passed both gates. Verified on 2026-10-03: that type is a struct, not an enum,
// so the member never existed.
// Rule: only report when the TYPE resolves to a source file but the MEMBER is absent
// from it. Types with no matching .cs (BCL / framework, e.g. `Debug.Print`) are skipped
// rather than flagged, so the check stays low-noise.
function memberAccess(block) {
  const found = new Map();
  let m;
  const re = /\b([A-Z][A-Za-z0-9_]*)\.([A-Za-z_]\w*)\b/g;
  while ((m = re.exec(block))) {
    const [, type, member] = m;
    if (!BY_BASENAME.has(type + '.cs')) continue; // framework/BCL -> not our business
    if (!found.has(type + '.' + member)) found.set(type + '.' + member, type + '|' + member);
  }
  return found;
}

function unresolvedMembers(fileAbs, blocks) {
  const owned = new Set();
  for (const b of blocks) for (const id of readerOwned(b)) owned.add(id);
  const misses = [];
  const seen = new Set();
  blocks.forEach((b, bi) => {
    for (const [label, packed] of memberAccess(b)) {
      if (seen.has(label)) continue;
      const [type, member] = packed.split('|');
      if (owned.has(member) || isExampleName(member)) continue;
      seen.add(label);
      const src = membersOf(type);
      const re = new RegExp(`\\b${member.replace(/[$]/g, '\\$')}\\b`);
      if (src && !re.test(src)) misses.push({ id: label, blockNo: bi + 1 });
    }
  });
  return misses;
}

// ---------------------------------------------------------------- main
let targets = [];
for (const a of argv) {
  if (a.startsWith('--')) continue;
  const abs = resolve(REPO, a); // REPO-relative, so it works from any cwd
  if (!existsSync(abs)) { console.error('no such page: ' + a); process.exit(2); }
  if (statSync(abs).isDirectory()) targets.push(...walk(abs, '.md'));
  else targets.push(abs);
}
if (targets.length === 0) { console.error('usage: node tools/_check_types_exist.mjs <page.md|--dir D>'); process.exit(2); }

let bad = 0;
for (const t of targets) {
  const r = unresolvedIn(t);
  const text = readFileSync(t, 'utf8');
  const blocks = csharpBlocks(text);
  const mMisses = unresolvedMembers(t, blocks);
  const rel = relative(REPO, t).replace(/\\/g, '/');
  const total = r.misses.length + mMisses.length;
  if (total === 0) {
    console.log(`ok   ${rel}  blocks=${r.blocks} types=${r.declared}`);
  } else {
    bad++;
    console.log(`MISS ${rel}  blocks=${r.blocks} types=${r.declared}`);
    for (const m of r.misses) console.log(`       ${m.id}   (block ${m.blockNo})   [type not in source]`);
    for (const m of mMisses) console.log(`       ${m.id}   (block ${m.blockNo})   [type exists, member not in its .cs]`);
  }
}
console.log(`\nTYPE-EXISTENCE CHECK: ${targets.length - bad}/${targets.length} clean, ${bad} with unresolved identifiers`);
console.log('NOTE: unresolved != fabricated. Judge each line: reader-owned example classes and');
console.log('      non-game framework types are legitimate; a missing TaleWorlds.* type is a fabrication.');
process.exit(bad > 0 ? 1 : 0);