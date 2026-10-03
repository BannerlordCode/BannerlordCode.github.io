#!/usr/bin/env node
// tools/_fix_fabricated.mjs
//
// Prints, per page, every FABRICATED identifier reported by anti-fabrication,
// with the exact line and surrounding context so a writer can fix it by reading.
//
// WHY THIS EXISTS
//   Batch 2 ended with "deep_pass 40/40" while 11 fabricated identifiers sat in
//   5 pages. The detector worked. The missing piece was that nothing stopped the
//   batch from closing, and the fix task produced a worker that edited the 5 files
//   without removing a single finding.
//
//   So: the fix list must be a FILE, produced mechanically, that a writer works
//   from item by item. Not a paragraph in a message that can be half-remembered.
//
// READ-ONLY. Prints to stdout only. Never touches content/.
//
// usage:
//   node tools/_fix_fabricated.mjs --content content/v1.3.0/zh/api/core-extra --source ../bannerlord-1.3.0
//   node tools/_fix_fabricated.mjs ... --only MBBindingList GameStateManager

import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..');
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const CONTENT = arg('--content', 'content');
const SOURCE = arg('--source', '../bannerlord-1.3.0');
// --only consumes ALL following non-flag tokens. Taking only argv[i+1] silently
// dropped every name after the first, so "--only A B C" behaved like "--only A".
const only = new Set();
{
  const i = argv.indexOf('--only');
  if (i >= 0) {
    for (let j = i + 1; j < argv.length; j++) {
      if (argv[j].startsWith('--')) break;
      only.add(argv[j].replace(/\.md$/, ''));
    }
  }
}

// anti-fabrication reads --content/--source from process.argv at import time,
// and ES module exports are read-only, so we must NOT try to override them.
const af = await import(pathToFileURL(path.join(REPO, 'tools/lib/anti-fabrication.mjs')).href);

const res = af.runGate();
// runGate() -> { ok, control[], pagesScanned, fabrications[{page,identifier,block}], readerOwnedIdentifiers }
const byPage = new Map();
for (const f of res.fabrications) {
  const p = f.page;
  const id = f.identifier;
  const block = f.block;
  if (!p || !id) continue;
  const base = path.basename(p).replace(/\.md$/, '');
  if (only.size && !only.has(base)) continue;
  if (!byPage.has(p)) byPage.set(p, []);
  byPage.get(p).push({ id, block });
}

let total = 0;
console.log('FIX LIST — every identifier anti-fabrication reported as fabricated.');
console.log('Each item: the page, the identifier, and the literal source lines around it.');
console.log('Fix by reading the declaration in the source tree. Do NOT invent a replacement name.\n');

// Every name passed to --only must match at least one page. A name matching
// nothing used to exit 0 (a silent pass) -- same bug class as "cannot read".
const unmatched = [...only].filter((n) => !(byPage.has(
  path.join(path.dirname([...byPage.keys()][0] || 'x'), n + '.md')) ||
  [...byPage.keys()].some((p) => path.basename(p).replace(/\.md$/, '') === n)));
if (unmatched.length) {
  console.log('!! --only names that matched NO page (silently ignored before):');
  for (const n of unmatched) console.log('     ' + n);
  console.log('   These are NOT verified clean. Fix the name or drop --only.\n');
}

for (const [page, items] of byPage) {
  const base = path.basename(page).replace(/\.md$/, '');
  if (only.size && !only.has(base)) continue;
  // f.page is already repo-relative (e.g. content/v1.3.0/zh/api/...).
  const abs = path.resolve(REPO, page);
  total += items.length;
  let text = '';
  try { text = readFileSync(abs, 'utf8'); }
  catch (e) {
    // A read failure is NOT "clean". Report it loudly and make it non-zero exit.
    console.log('='.repeat(78));
    console.log(`${path.basename(page)}   ${items.length} to fix   (${page})`);
    console.log('='.repeat(78));
    console.log(`\n  !! CANNOT READ ${abs}`);
    console.log(`     ${e.code || e.message}`);
    console.log('     Items below could NOT be located. This is a TOOL FAILURE, not a pass.\n');
    for (const it of items) console.log(`  ✗ ${it.identifier}   [block ${it.block}]  (location unknown - fix file unreadable)`);
    console.log('');
    continue;
  }
  const lines = text.split(/\r?\n/);
  console.log('='.repeat(78));
  console.log(`${path.basename(page)}   ${items.length} to fix   (${page})`);
  console.log('='.repeat(78));
  for (const it of items) {
    const hit = lines.findIndex((l) => l.includes(it.id));
    console.log(`\n  ✗ ${it.id}${it.block ? `   [block ${it.block}]` : ''}`);
    if (hit >= 0) {
      const from = Math.max(0, hit - 2), to = Math.min(lines.length, hit + 2);
      for (let i = from; i < to; i++) {
        console.log(`      ${String(i + 1).padStart(4)} ${i === hit ? '>' : ' '} ${lines[i].trim().slice(0, 100)}`);
      }
    } else {
      console.log('      (identifier not found on a single line - may span lines; search the page)');
    }
  }
  console.log('');
}

console.log('-'.repeat(78));
console.log(`TOTAL ${total} fabricated identifiers across ${byPage.size} pages.`);
console.log('A batch is NOT done until this number is 0 for the pages it produced.');
console.log('Positive control: the gate must still report 6/6 (proves the gate has teeth).');
process.exit(total || unmatched.length ? 1 : 0);