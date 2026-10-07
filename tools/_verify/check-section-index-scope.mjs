#!/usr/bin/env node
/**
 * Mechanical commit gate for `content/**\/_index.md`.
 *
 * WHY THIS EXISTS
 * ---------------
 * AGENTS.md hard premise #1: "No script may emit a documentation page. A
 * generator emitting a `.md` under `content/` is a defect."
 *
 * Boss opened ONE narrow exception (recorded in
 * `tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md` §1, guard
 * `tools/lib/content-write-freeze.mjs` `assertStructuralScope()`): a script may
 * write the *mechanical sub-page list* of a bucket `_index.md`, and only that,
 * inside the markers:
 *
 *     <!-- BEGIN SECTION INDEX -->  ...  <!-- END SECTION INDEX -->
 *
 * The list is uniquely determined by the directory, so it contains no authorial
 * judgement. Writing prose, or editing a hand-written link, is OUTSIDE the
 * exception.
 *
 * WHAT THIS CHECKS
 * ----------------
 * For every changed `_index.md`: take the HEAD version and the working-tree
 * version, delete the marker block from BOTH, and compare. If the remainders are
 * byte-identical, then every difference lies inside the block -> PASS (may be
 * committed). Otherwise the diff reaches outside the block -> FAIL (must not be
 * committed; report the file).
 *
 * This is a *scope* check only. It says nothing about whether the list is
 * correct. "Structurally in-scope" is not "content is right".
 *
 * USAGE
 *   node tools/_verify/check-section-index-scope.mjs            # changed files
 *   node tools/_verify/check-section-index-scope.mjs <path>...  # explicit paths
 *
 * EXIT: 0 = every checked file is in-scope; 1 = at least one out-of-scope;
 *       2 = could not run (fail closed, never silently green).
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const BEGIN = '<!-- BEGIN SECTION INDEX -->';
const END = '<!-- END SECTION INDEX -->';
const REMOVED = '\n<SECTION-INDEX-BLOCK-REMOVED>\n';

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 1 << 28 });
}

function stripBlock(text) {
  const b = text.indexOf(BEGIN);
  if (b === -1) return text; // no block at all -> nothing excused
  const e = text.indexOf(END, b);
  if (e === -1) return text.slice(0, b) + '\n<SECTION-INDEX-BLOCK-UNTERMINATED>\n';
  return text.slice(0, b) + REMOVED + text.slice(e + END.length);
}

function changedIndexPages() {
  const raw = git(['status', '--porcelain', '-z']);
  const out = [];
  for (const rec of raw.split('\0')) {
    if (rec.length < 4) continue;
    const path = rec.slice(3);
    if (path.endsWith('_index.md')) out.push(path);
  }
  return [...new Set(out)];
}

function headVersion(path) {
  try {
    return git(['show', `HEAD:${path}`]);
  } catch {
    return null; // not in HEAD
  }
}

let targets = process.argv.slice(2);
if (targets.length === 0) {
  try {
    targets = changedIndexPages();
  } catch (err) {
    console.error(`FAIL-CLOSED: could not list changed files: ${err.message}`);
    process.exit(2);
  }
}

if (targets.length === 0) {
  console.log('OK: no changed _index.md to check');
  process.exit(0);
}

let failures = 0;
const rows = [];
for (const path of targets) {
  if (!existsSync(path)) {
    rows.push(['GONE', path, 'file deleted or missing on disk']);
    failures++;
    continue;
  }
  const head = headVersion(path);
  const work = readFileSync(path, 'utf8');
  if (head === null) {
    rows.push(['NEW', path, 'not in HEAD (new page = writes prose, outside the exception)']);
    failures++;
    continue;
  }
  const a = stripBlock(head);
  const b = stripBlock(work);
  if (a === b) {
    rows.push(['IN-SCOPE', path, 'all differences are inside the marker block']);
  } else {
    failures++;
    const al = a.split('\n');
    const bl = b.split('\n');
    let i = 0;
    while (i < al.length && i < bl.length && al[i] === bl[i]) i++;
    rows.push(['OUT-OF-SCOPE', path, `first difference outside the block at line ${i + 1}`]);
  }
}

const w = Math.max(...rows.map(r => r[0].length));
for (const [v, p, why] of rows) {
  console.log(`${v.padEnd(w)}  ${p}\n${' '.repeat(w)}  -> ${why}`);
}
console.log(`\nchecked=${rows.length} out_of_scope=${failures}`);
process.exit(failures === 0 ? 0 : 1);
