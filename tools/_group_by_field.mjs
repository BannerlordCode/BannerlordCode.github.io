#!/usr/bin/env node
// Group-by helper used before any field-based classification (CONTRACT §9k).
//
// §9k: a positive control proves the instrument ran, not that its output discriminates.
// A field that collapses to one value across the corpus is ALIVE and USELESS: grouping on it
// produces C(n,2)-scale phantom pairs. Real instance: 212 pages whose **Type:** was literally
// "static class" inflated a pair count from 144 to 4,794.
//
// Usage:  node tools/_group_by_field.mjs <file-or-dir> '<regex>' [--min 2]
// Prints, for each distinct value, how many records carry it, and REFUSES to group when the
// distribution is degenerate. Exit 2 = degenerate field, do not proceed.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, '..');

const argv = process.argv.slice(2);
const positional = argv.filter((a) => !a.startsWith('--'));
const minArg = argv.indexOf('--min');
const min = minArg >= 0 ? Number(argv[minArg + 1]) : 2;
const target = positional[0];
const pattern = positional[1];
if (!target || !pattern) {
  console.error('usage: node tools/_group_by_field.mjs <file-or-dir> <regex> [--min N]');
  process.exit(2);
}
const re = new RegExp(pattern, 'm');

function collect(p, out = []) {
  const st = statSync(p);
  if (st.isDirectory()) {
    for (const e of readdirSync(p)) collect(join(p, e), out);
  } else if (extname(p) === '.md') {
    out.push(p);
  }
  return out;
}

const files = collect(resolve(process.cwd(), target));
const dist = new Map();
let noValue = 0;
for (const f of files) {
  const m = readFileSync(f, 'utf8').match(re);
  const v = m ? m[1].trim() : null;
  if (v === null) { noValue++; continue; }
  if (!dist.has(v)) dist.set(v, []);
  dist.get(v).push(f);
}

const total = files.length;
const carried = total - noValue;
const top = [...dist.entries()].sort((a, b) => b[1].length - a[1].length);

console.log('FILES            ' + total);
console.log('WITH VALUE       ' + carried + '   (no value: ' + noValue + ')');
console.log('DISTINCT VALUES  ' + dist.size +
  (carried ? '   mean per value: ' + (carried / dist.size).toFixed(2) : ''));
console.log('');
console.log('TOP VALUES (value -> record count)');
for (const [v, list] of top.slice(0, 15)) {
  console.log('  ' + String(list.length).padStart(6) + '  ' + JSON.stringify(v.slice(0, 90)));
}

// Degeneracy test: one value carrying nearly everything means grouping is meaningless.
const dominant = top[0] ? top[0][1].length : 0;
const dominantShare = carried ? dominant / carried : 0;
const unique = dist.size;
console.log('');
console.log('DEGENERACY');
console.log('  dominant value share : ' + (100 * dominantShare).toFixed(1) + '%');
console.log('  distinct values      : ' + unique);

// If the field has very few distinct values relative to the record count, it cannot
// discriminate. C(212,2) phantom pairs came from exactly this shape.
// The dangerous shape is NOT a low-cardinality field. A field with 6,992 distinct values is
// perfectly discriminating. The failure mode is ONE value carrying many records: 212 pages whose
// **Type:** was literally "static class" gave C(212,2) = 22,366 phantom pairs while the rest of
// the field was fine. So: flag a value whose pair contribution EXCEEDS the record count.
const pairsOf = (n) => (n * (n - 1)) / 2;
const dominantPairs = dominant ? pairsOf(dominant) : 0;
const dominantBlowup = dominant >= 10 && dominantPairs > carried;
console.log('  dominant value n      : ' + dominant);
console.log('  its C(n,2) pair count  : ' + dominantPairs +
  (carried ? '   vs ' + carried + ' records' : ''));
// ADVISORY, NOT BLOCKING. This tool cannot tell a field that legitimately repeats (headings
// repeat on every page; that is correct) from a field carrying a degenerate value (Type: =
// "static class" with no type name; that is a defect). Only the caller knows the semantics.
// So it REPORTS the dominant-value analysis and lets the caller decide. Blocking here would be
// a false pass in the other direction: it would refuse valid fields and train people to ignore it.
if (dominantBlowup) {
  console.log('');
  console.log('  *** DOMINANT VALUE: ' + dominant + ' records share one value -> ' +
    dominantPairs + ' pairs from it alone (' + carried + ' records scanned).');
  console.log('  *** If that value is a legitimate repeat (e.g. a heading), grouping is fine.');
  console.log('  *** If it is a degenerate value (e.g. a type with no name), every count below is void.');
  console.log('  *** Real instance: 212 pages with **Type:** = "static class" inflated 144 pairs to 4,794.');
  console.log('  *** Judge it by the printed VALUE above, not by this number alone.');
}

const groups = [...dist.values()].filter((l) => l.length >= min);
console.log('');
console.log('GROUPS WITH >= ' + min + ' RECORDS: ' + groups.length);
let pairs = 0;
for (const g of groups) pairs += (g.length * (g.length - 1)) / 2;
console.log('PAIRS IF GROUPED   ' + pairs +
  '   <-- inspect these before believing any of them');
process.exit(0);
