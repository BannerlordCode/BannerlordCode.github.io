#!/usr/bin/env node
// Anti-fabrication gate — shared by all version lanes (v1.3.0 / v1.3.15 / v1.4.5 / v1.4.6 / v1.4.7 / v1.5.3).
//
// WHY THIS EXISTS
// A documentation page can have a perfectly valid URL, resolve every link, pass the
// deep_pass classifier, and still be worthless: if the API in its examples was invented.
// A modder who copies it gets a compile error and loses trust in the whole page.
// That is the worst failure mode in this project, so it gets an executable gate rather
// than a written instruction.
//
// TWO DESIGN RULES, both learned the hard way — do not "simplify" them away:
//   1. POSITIVE CONTROL FIRST. Before trusting a single miss, prove the checker can see
//      real API (control identifiers must be FOUND). A checker that finds nothing is
//      indistinguishable from a broken checker.
//   2. DISTINGUISH "CLAIMED GAME API" FROM "THE READER'S OWN EXAMPLE CLASS".
//      An example like `campaign.AddBehavior<MyCampaignBehavior>()` names no game API for
//      `MyCampaignBehavior` — it is the reader's own type. Reporting those as fabrications
//      produces noise, and a gate whose output is ignored protects nothing.
//
// Usage:
//   node tools/lib/anti-fabrication.mjs --content content/v1.4.7 --source ../bannerlord-1.4.7
//   node tools/lib/anti-fabrication.mjs --content content/v1.4.7 --source ../bannerlord-1.4.7 --json
// Exit code: 0 = no fabrications, 1 = fabrications found, 2 = setup/control failure.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';

const argv = process.argv.slice(2);
const arg = (name, dflt) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};
const REPO = resolve(new URL('../..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));

export const CONTENT_ROOT = resolve(REPO, arg('--content', 'content/v1.4.7'));
export const SOURCE_ROOT = resolve(REPO, arg('--source', '../bannerlord-1.4.7'));

// Identifiers that must exist in the source tree for the gate to be considered live.
// If these are missing, the gate is broken and every "miss" below is meaningless.
export const CONTROL_IDENTIFIERS = [
  'AddBehavior', 'SyncData', 'IsLoading', 'OnGameStart', 'PushScreen', 'PopScreen',
];

// ---------------------------------------------------------------- helpers
export function walkMarkdown(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walkMarkdown(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

let _sourceText = null;
export function sourceCorpus() {
  if (_sourceText !== null) return _sourceText;
  if (!existsSync(SOURCE_ROOT)) return null;
  const parts = [];
  for (const f of walkCs(SOURCE_ROOT)) {
    try { parts.push(readFileSync(f, 'utf8')); } catch { /* unreadable file is not fatal */ }
  }
  _sourceText = parts.join('\n');
  return _sourceText;
}
function walkCs(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== '.git') walkCs(p, out); }
    else if (e.name.endsWith('.cs')) out.push(p);
  }
  return out;
}

// Identifiers that are the READER'S OWN, not the game's.
// Two signals: (a) the identifier is declared inside the same code block, and
// (b) it follows the conventional "My..." example-name shape.
export function readerOwnedIdentifiers(block) {
  const owned = new Set();
  let m;
  const declType = /(?:class|struct|interface|enum|record)\s+([A-Za-z_]\w*)/g;
  while ((m = declType.exec(block))) owned.add(m[1]);
  // members declared inside the block (a reader-owned class with its own methods)
  const declMember =
    /(?:public|private|protected|internal)[\w\s<>,\[\]\.]*?\s([A-Za-z_]\w*)\s*\(/g;
  while ((m = declMember.exec(block))) owned.add(m[1]);
  const declProp = /(?:public|private|protected|internal)[\w\s<>,\[\]\.]*?\s([A-Za-z_]\w*)\s*\{/g;
  while ((m = declProp.exec(block))) owned.add(m[1]);
  return owned;
}
export function isExampleName(id) {
  return /^(?:My|Your)[A-Z_]/.test(id) || /^(?:Some|Example|Demo|Sample)[A-Z_]?/.test(id);
}

export function identifiersInBlock(block) {
  const found = new Set();
  let m;
  for (const re of [/\.([A-Za-z_]\w*)\s*\(/g, /\.([A-Za-z_]\w*)\s*</g]) {
    while ((m = re.exec(block))) found.add(m[1]);
  }
  const ctor = /\bnew\s+([A-Za-z_][\w.]*)/g;
  while ((m = ctor.exec(block))) found.add(m[1].split('.').pop());
  return found;
}

export function csharpBlocks(text) {
  return [...text.matchAll(/```csharp\r?\n([\s\S]*?)```/g)].map((m) => m[1]);
}

// ---------------------------------------------------------------- main check
export function checkPage(fileAbs, corpus) {
  const text = readFileSync(fileAbs, 'utf8');
  const rel = relative(REPO, fileAbs).replace(/\\/g, '/');
  const blocks = csharpBlocks(text);
  // Reader-owned scope is the PAGE, not the block: a reader commonly declares their
  // example class in one block and uses it in another. Scoping per block produced a
  // false positive on a page that declared `VisitCounterBehavior` in block 1 and
  // called it in block 3.
  const pageOwned = new Set();
  for (const b of blocks) for (const id of readerOwnedIdentifiers(b)) pageOwned.add(id);

  const claimed = new Map();   // id -> first block number
  const readerOwned = new Set();
  blocks.forEach((b, bi) => {
    for (const id of identifiersInBlock(b)) {
      if (pageOwned.has(id) || isExampleName(id)) { readerOwned.add(id); continue; }
      if (!claimed.has(id)) claimed.set(id, bi + 1);
    }
  });
  const fabrications = [];
  for (const [id, blockNo] of claimed) {
    const re = new RegExp(`\\b${id.replace(/[$]/g, '\\$')}\\b`);
    if (!re.test(corpus)) fabrications.push({ page: rel, identifier: id, block: blockNo });
  }
  return { page: rel, fabrications, readerOwned: [...readerOwned] };
}

export function runGate({ contentRoot = CONTENT_ROOT, sourceRoot = SOURCE_ROOT } = {}) {
  const corpus = sourceCorpus();
  if (corpus === null) {
    return { ok: false, error: `source tree not found at ${sourceRoot}` };
  }
  // RULE 1: positive control BEFORE trusting any miss.
  const control = CONTROL_IDENTIFIERS.map((id) => ({
    id,
    found: new RegExp(`\\b${id}\\b`).test(corpus),
  }));
  const deadControls = control.filter((c) => !c.found).map((c) => c.id);
  if (deadControls.length) {
    return {
      ok: false,
      error: `POSITIVE CONTROL FAILED: ${deadControls.join(', ')} not found in source. ` +
        'The checker cannot see real API, so its misses are meaningless.',
      control,
    };
  }
  const pages = walkMarkdown(contentRoot);
  const fabrications = [];
  let readerOwnedTotal = 0;
  for (const p of pages) {
    const r = checkPage(p, corpus);
    fabrications.push(...r.fabrications);
    readerOwnedTotal += r.readerOwned.length;
  }
  return {
    ok: fabrications.length === 0,
    control,
    pagesScanned: pages.length,
    fabrications,
    readerOwnedIdentifiers: readerOwnedTotal,
    sourceRoot,
    contentRoot,
  };
}

// ---------------------------------------------------------------- CLI
const isMain = process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
if (isMain) {
  const res = runGate();
  if (res.error) { console.error('ANTI-FABRICATION GATE ERROR: ' + res.error); process.exit(2); }
  if (argv.includes('--json')) {
    console.log(JSON.stringify(res, null, 2));
  } else {
    console.log('ANTI-FABRICATION GATE');
    console.log(`  content root : ${res.contentRoot}`);
    console.log(`  source root  : ${res.sourceRoot}`);
    console.log(`  pages scanned: ${res.pagesScanned}`);
    console.log(`  positive control: ${res.control.filter((c) => c.found).length}/${res.control.length} found` +
      ` (${res.control.map((c) => c.id).join(', ')})`);
    console.log(`  reader-owned example identifiers skipped: ${res.readerOwnedIdentifiers}`);
    console.log(`  FABRICATED identifiers: ${res.fabrications.length}`);
    res.fabrications.forEach((f) => console.log(`    ${f.page}  .${f.identifier}()  [block ${f.block}]`));
    console.log(res.ok ? '\nRESULT: PASS' : '\nRESULT: FAIL');
  }
  process.exit(res.ok ? 0 : 1);
}
