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
 * THE FIRST-TIME-BLOCK FALSE POSITIVE, AND THE `NEW-BLOCK` BRANCH
 * ---------------------------------------------------------------
 * General rule, learned the hard way: **"strip the structure, then compare"
 * is only valid once BOTH sides are known to CONTAIN that structure.**
 * `stripBlock()` applied to a text with no marker is a silent no-op, not an
 * empty result. So the symmetric compare above is asymmetric exactly when the
 * two sides disagree about whether the structure exists at all:
 *
 *     stripBlock(headNoBlock)  = headNoBlock            (nothing removed)
 *     stripBlock(workWithBlock) = workWithoutBlock       (whole block removed)
 *
 * The remainders then differ by the entire block, so the gate reported
 * OUT-OF-SCOPE for *every* first-time block add, no matter how tiny the real
 * change outside the block was. Observed instance: the first landing of the
 * v1.4.5 campaign block had exactly ONE blank line of real out-of-block
 * difference (the blank line inserted before `<!-- BEGIN SECTION INDEX -->`)
 * and was reported as "first real difference outside the block at line 103".
 * That is a false accusation of the worst kind: it accuses a hand-written nav
 * line of crossing the narrow script-write exception, when nothing crossed it.
 *
 * Therefore the one-sided case gets its own verdict, `NEW-BLOCK`, which counts
 * as committable (exit 0) — but ONLY when the outside-the-block remainder is
 * genuinely untouched:
 *
 *   HEAD has no block, work has one:
 *     compare "HEAD as-is" vs "work with the block's whole line span removed"
 *     identical, or apart by a single blank line -> NEW-BLOCK (may commit)
 *     anything else                               -> OUT-OF-SCOPE (unchanged
 *       strictness: with no HEAD-side block there is nothing to excuse, so any
 *       real out-of-block difference is still a failure)
 *
 * Two deliberate sharp edges in that branch, both fail-closed:
 *   1. The comparison must NOT reuse `stripBlock()`, whose `<...-REMOVED>`
 *      sentinel only cancels out when BOTH sides receive it. On this path only
 *      one side ever does, so the sentinel would itself register as an
 *      out-of-block difference and the branch would never fire. Use
 *      `stripBlockRegion()`, which deletes the block's line span with no
 *      placeholder.
 *   2. "Has a block" means a COMPLETE BEGIN...END pair. A lone BEGIN is a
 *      half-written block, not a block, and takes the strict path (see
 *      `hasTerminatedBlock`).
 *
 * The single-blank-line allowance is deliberately narrow: inserting a blank
 * line ahead of the marker is the mechanical side effect of adding the block,
 * not authorial prose. `oneBlankLineApart()` accepts exactly one extra blank
 * line at exactly one position; two blank lines, a reworded line, a new link,
 * or a whole appended sub-page list are all still OUT-OF-SCOPE.
 *
 * The other shapes keep their existing behaviour, and none of them is
 * relaxed by this branch:
 *   both sides have a block  -> the original symmetric compare (unchanged)
 *   HEAD has a block, work does not -> still OUT-OF-SCOPE (a removed block
 *     leaves its former contents unexcused; deliberately NOT widened)
 *   work has a lone BEGIN and no END -> still OUT-OF-SCOPE (fail closed)
 *   neither side has a block -> full-text compare (unchanged)
 *
 * This is a *scope* check only. It says nothing about whether the list is
 * correct. "Structurally in-scope" is not "content is right".
 *
 * USAGE
 *   node tools/_verify/check-section-index-scope.mjs            # changed files
 *   node tools/_verify/check-section-index-scope.mjs <path>...  # explicit paths
 *
 * EXIT: 0 = every checked file is committable (IN-SCOPE or NEW-BLOCK);
 *       1 = at least one OUT-OF-SCOPE; 2 = could not run (fail closed, never
 *       silently green). NEW-BLOCK is a PASS, not a warning: it exists so a
 *       first-time block add is not misreported as an exception violation.
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const BEGIN = '<!-- BEGIN SECTION INDEX -->';
const END = '<!-- END SECTION INDEX -->';
const REMOVED = '\n<SECTION-INDEX-BLOCK-REMOVED>\n';

/**
 * Representation normalisation FIRST (project rule: "表示层归一化先行").
 * `git show HEAD:<path>` returns the blob (LF, per .gitattributes eol=lf for
 * content/**), while readFileSync returns the working-tree bytes, which are
 * frequently CRLF. Comparing those directly reports EVERY line as different and
 * makes the gate scream OUT-OF-SCOPE at line 1 on files that are perfectly
 * in-scope. That is a false accusation of the worst kind (it accuses the nav
 * line of crossing the narrow exception). So we compare normalised text, and we
 * also report the raw verdict so the difference stays visible instead of hidden.
 */
const normalize = (t) => t.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

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

/**
 * Remove the marker block INCLUDING the lines the markers sit on, and nothing
 * else - no sentinel placeholder.
 *
 * Why a second stripper: `stripBlock()` above inserts `<...-REMOVED>` because
 * the ORIGINAL symmetric compare needs a stable anchor present on BOTH sides,
 * so the sentinel cancels out. On the NEW-BLOCK path only ONE side ever gets
 * it, so the sentinel itself becomes an out-of-block difference and the branch
 * would never fire. The region form removes the block's whole line span, so
 * the text left over is exactly "everything that is not the block".
 */
function stripBlockRegion(text) {
  const b = text.indexOf(BEGIN);
  if (b === -1) return text;
  const e = text.indexOf(END, b);
  if (e === -1) return text.slice(0, b); // unterminated: drop everything from the marker on
  const start = text.lastIndexOf('\n', b - 1) + 1; // start of the BEGIN marker's own line
  const nl = text.indexOf('\n', e + END.length);
  const end = nl === -1 ? text.length : nl + 1; // end of the END marker's own line
  return text.slice(0, start) + text.slice(end);
}

const hasBlock = (text) => text.includes(BEGIN);

/**
 * A "marker block" means a COMPLETE `BEGIN ... END` pair. A lone BEGIN with no
 * END is a half-written block, not a block, and must not be excused: the region
 * stripper would truncate the file at the marker and the truncated text could
 * look "one blank line apart" from HEAD, letting a malformed write commit.
 * Fail closed instead.
 */
const hasTerminatedBlock = (text) => {
  const b = text.indexOf(BEGIN);
  return b !== -1 && text.indexOf(END, b) !== -1;
};

/**
 * True when the ONLY difference between `a` and `b` is one extra blank line at
 * one position. Used by the NEW-BLOCK branch to excuse the blank line that
 * adding a marker block mechanically inserts before it — and nothing else.
 */
function oneBlankLineApart(a, b) {
  const al = a.split('\n');
  const bl = b.split('\n');
  let i = 0;
  while (i < al.length && i < bl.length && al[i] === bl[i]) i++;
  let j = 0;
  while (
    j < al.length - i &&
    j < bl.length - i &&
    al[al.length - 1 - j] === bl[bl.length - 1 - j]
  ) {
    j++;
  }
  const aMid = al.slice(i, al.length - j);
  const bMid = bl.slice(i, bl.length - j);
  const blanksOnly = (lines) => lines.length > 0 && lines.every((l) => l.trim() === '');
  return (
    (blanksOnly(aMid) && aMid.length === 1 && bMid.length === 0) ||
    (blanksOnly(bMid) && bMid.length === 1 && aMid.length === 0)
  );
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
  // One-sided structure: never strip-and-compare across it (see header).
  // HEAD has no block, work introduces a complete one -> NEW-BLOCK branch.
  // A lone BEGIN (no END) deliberately falls through to the strict path below.
  if (!hasBlock(head) && hasTerminatedBlock(work)) {
    const hN = normalize(head);
    const wN = normalize(stripBlockRegion(work));
    if (hN === wN || oneBlankLineApart(hN, wN)) {
      rows.push([
        'NEW-BLOCK',
        path,
        hN === wN
          ? 'HEAD has no marker block; work introduces one and nothing outside it changed'
          : 'HEAD has no marker block; work introduces one and the only outside change is a single blank line',
      ]);
    } else {
      failures++;
      const al = hN.split('\n');
      const bl = wN.split('\n');
      let i = 0;
      while (i < al.length && i < bl.length && al[i] === bl[i]) i++;
      rows.push([
        'OUT-OF-SCOPE',
        path,
        `HEAD has no marker block, so nothing is excused; first real difference outside the block at line ${i + 1} (CRLF-normalised)`,
      ]);
    }
    continue;
  }

  const a = stripBlock(head);
  const b = stripBlock(work);
  const rawSame = a === b;
  const aN = normalize(a);
  const bN = normalize(b);
  if (aN === bN) {
    rows.push([
      'IN-SCOPE',
      path,
      rawSame
        ? 'all differences are inside the marker block'
        : 'all differences are inside the marker block (raw compare differed ONLY by CRLF vs LF)',
    ]);
  } else {
    failures++;
    const al = aN.split('\n');
    const bl = bN.split('\n');
    let i = 0;
    while (i < al.length && i < bl.length && al[i] === bl[i]) i++;
    rows.push([
      'OUT-OF-SCOPE',
      path,
      `first real difference outside the block at line ${i + 1} (CRLF-normalised)${rawSame ? '' : '; raw compare also differed'}`,
    ]);
  }
}

const w = Math.max(...rows.map(r => r[0].length));
for (const [v, p, why] of rows) {
  console.log(`${v.padEnd(w)}  ${p}\n${' '.repeat(w)}  -> ${why}`);
}
const newBlocks = rows.filter((r) => r[0] === 'NEW-BLOCK').length;
console.log(
  `\nchecked=${rows.length} out_of_scope=${failures} new_block=${newBlocks}`,
);
process.exit(failures === 0 ? 0 : 1);
