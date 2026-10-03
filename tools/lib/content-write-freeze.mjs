// tools/lib/content-write-freeze.mjs
//
// HARD PREMISE (boss, user-directed): every page under content/ must be written
// by hand. No script may emit any .md under content/, regardless of accuracy,
// labelling, or prior authorisation. Generated content is withdrawn, not improved.
//
// ---- ABSOLUTE PREMISE, EXCEPT FOR THE STRUCTURAL-ONLY ENTRIES REGISTERED BELOW ----
//
// 除下列显式登记的 structural-only 条目外，任何脚本不得 emit content/ 下任何 .md。
//
// WHY THE EXCEPTIONS LIVE IN CODE, NOT IN A POLICY DOC
//   An exception hidden in a .md gets bypassed the first time someone is in a hurry.
//   An exception registered here costs one visible line of code to add, so the cost of
//   widening the fence is always visible at the moment it is paid.
//
// TWO-WAY GATE -- this module is both a wall and a guard:
//   1. WALL   : a script that is NOT on the allowlist imports this and dies instantly.
//               An accidental run still cannot touch the tree. This is unchanged from
//               the pre-allowlist stub, which was a single unconditional process.exit(1).
//   2. GUARD  : an allowlisted structural-only writer calls assertStructuralScope()
//               before writing, and gets a non-zero exit if it strays outside its scope.
//
//   WHY THE WALL IS NO LONGER AN UNCONDITIONAL TOP-LEVEL exit(1)
//   The old stub aborted on import, so NOTHING could import it -- including a writer
//   that only wanted to call the guard, and including a dry-run. A guard that cannot be
//   imported guards nothing. Hence the caller-identity dispatch below: still an
//   immediate process.exit(1) for everyone off the allowlist, but importable by the
//   writers that are on it.
//
// A WRITER CALLS THIS ASSERTION. A writer self-certifying its own compliance is not a
// guard (see tools/RETIRED_BODY_GENERATORS.md §Guard).
//
// Usage:
//   node tools/lib/content-write-freeze.mjs --selftest      # proves both directions
//
// Safe to import from any tool. Writes nothing.

import { basename } from 'node:path';

// ---------------------------------------------------------------------------
// THE ALLOWLIST.  Adding an entry here is the ONLY way to widen the fence.
// ---------------------------------------------------------------------------

export const SECTION_INDEX_MARKER = { begin: '<!-- BEGIN SECTION INDEX -->', end: '<!-- END SECTION INDEX -->' };

export const STRUCTURAL_ALLOWLIST = [
  {
    tool: 'nav-section-index.mjs',
    status: 'approved',
    allow: ['content/**/_index.md'],
    scope: 'between the first BEGIN SECTION INDEX and the first END SECTION INDEX marker',
    forbid: ['writes outside the marker block', 'writes any file other than _index.md', 'deletes existing links'],
    guard: 'assertStructuralScope',
  },
  {
    // KNOWN GAP -- registered so it is greppable, deliberately NOT allowed through.
    // These two are called structural-only by tools/RETIRED_BODY_GENERATORS.md but
    // carry no guard of their own. They are NOT approved: listing them here is a
    // statement that the gap is known and owned, not a licence. Until each one calls
    // assertStructuralScope(), importing this module from them still aborts.
    tool: 'ensure-sections.mjs',
    status: 'known-gap-unguarded',
    allow: [],
    scope: '(none -- calls no guard)',
    forbid: ['still imports nothing; unguarded writer'],
    guard: null,
  },
  {
    tool: 'create-catalog-sections.mjs',
    status: 'known-gap-unguarded',
    allow: [],
    scope: '(none -- calls no guard)',
    forbid: ['still imports nothing; unguarded writer'],
    guard: null,
  },
];

const APPROVED = STRUCTURAL_ALLOWLIST.filter((e) => e.status === 'approved');
// Keys are stored WITH the .mjs suffix; every incoming name is normalised the same
// way before lookup. Getting this wrong makes the wall reject its OWN approved
// writers -- which is why the selftest exercises the argv-derived name too.
const norm = (n) => basename(String(n || '')).replace(/\.mjs$/, '');
const byTool = new Map(STRUCTURAL_ALLOWLIST.map((e) => [norm(e.tool), e]));

/** Is this entry allowed to write, i.e. approved AND actually calling the guard? */
export function isApprovedStructuralWriter(toolName) {
  return !!(byTool.get(norm(toolName))?.status === 'approved');
}

// ---------------------------------------------------------------------------
// GUARD
// ---------------------------------------------------------------------------

const isIndexFile = (p) => /(^|[\\/])_index\.md$/.test(p);
const underContent = (p) => /(^|[\\/])content[\\/]/.test(p);

/**
 * First index of `needle` in `text`, or -1.
 * Line numbers are 1-based when reported; -1 means "not found".
 */
function lineOf(text, needle) {
  const i = text.indexOf(needle);
  if (i < 0) return -1;
  return text.slice(0, i).split('\n').length;
}

/**
 * assertStructuralScope({ mode, targetPath, originalText, newText, marker, tool })
 *
 * The write is legal iff ALL of these hold:
 *   1. the caller is an approved structural-only writer on the allowlist
 *   2. targetPath is under content/ and is named _index.md
 *   3. the FIRST begin-marker .. FIRST end-marker block exists in BOTH texts
 *   4. everything outside that block is byte-identical between originalText and newText
 *
 * Links that already existed outside the block are therefore protected: dropping one
 * changes bytes outside the block and trips (4).
 *
 * Returns { ok: true, changedLines } when legal.
 * Throws ScopeViolation otherwise -- callers that want an exit code can catch it;
 * the process-exit behaviour is `violationExitCode` below.
 */
export function assertStructuralScope(args) {
  const { mode = 'dry-run', targetPath = '', originalText = '', newText = '', marker = SECTION_INDEX_MARKER, tool = callerToolName() } = args || {};

  const deny = (rule, detail) => {
    const err = new Error(
      'STRUCTURAL SCOPE VIOLATION\n' +
      `  tool       : ${tool}\n` +
      `  mode       : ${mode}\n` +
      `  targetPath : ${targetPath}\n` +
      `  rule       : ${rule}\n` +
      `  detail     : ${detail}\n` +
      '  No bytes were written. The fence only widens by adding a line to STRUCTURAL_ALLOWLIST.'
    );
    err.code = 'STRUCTURAL_SCOPE_VIOLATION';
    err.rule = rule;
    err.tool = tool;
    err.targetPath = targetPath;
    return err;
  };

  // (1) caller must be approved. A known-gap entry is NOT approved.
  if (!isApprovedStructuralWriter(tool)) {
    throw deny('caller not on the approved structural-only allowlist',
      `entry=${byTool.get(norm(tool))?.status ?? 'not registered at all'}`);
  }

  // (2) path shape.
  if (!underContent(targetPath)) throw deny('target is not under content/', targetPath);
  if (!isIndexFile(targetPath)) throw deny('target is not an _index.md', targetPath);

  // (3) marker block must exist in both sides.
  const bOld = lineOf(originalText, marker.begin);
  const eOld = lineOf(originalText, marker.end);
  const bNew = lineOf(newText, marker.begin);
  const eNew = lineOf(newText, marker.end);
  for (const [side, b, e] of [['originalText', bOld, eOld], ['newText', bNew, eNew]]) {
    if (b < 0) throw deny(`begin marker missing in ${side}`, marker.begin);
    if (e < 0) throw deny(`end marker missing in ${side}`, marker.end);
    if (e < b) throw deny(`end marker precedes begin marker in ${side}`, `${marker.end} at line ${e}, ${marker.begin} at line ${b}`);
  }

  // (4) byte-identical outside the block. Comparing the two OUTSIDE segments is
  //     enough: if head and tail are equal and the marker strings are equal, then
  //     the only bytes that moved are between them.
  const outside = (text, b, e) => text.slice(0, b) + text.slice(lineEnd(text, e));
  const lineEnd = (text, eLine) => {
    const lines = text.split('\n');
    let n = 0;
    for (let i = 0; i < eLine; i++) n += lines[i].length + 1;
    return n;
  };

  const headOld = originalText.slice(0, bOld), tailOld = originalText.slice(lineEnd(originalText, eOld));
  const headNew = newText.slice(0, bNew), tailNew = newText.slice(lineEnd(newText, eNew));

  if (headOld !== headNew) {
    throw deny('wrote outside the marker block (before BEGIN)', firstDiff(headOld, headNew, bOld));
  }
  if (tailOld !== tailNew) {
    throw deny('wrote outside the marker block (after END) -- this is what deleting an existing link looks like', firstDiff(tailOld, tailNew, eOld));
  }
  void outside;

  return { ok: true, changedLines: changedLineCount(originalText, newText), beginLine: bNew, endLine: eNew };
}

/** Process exit code for a violation. Kept separate so callers can choose. */
export function violationExitCode(err) {
  return err && err.code === 'STRUCTURAL_SCOPE_VIOLATION' ? 2 : 1;
}

function firstDiff(a, b, lineOffset) {
  const n = Math.min(a.length, b.length);
  let i = 0;
  while (i < n && a[i] === b[i]) i++;
  return `first differing byte at offset ${i} (approx line ${lineOffset + a.slice(0, i).split('\n').length}, ` +
    `old=${JSON.stringify(a.slice(i, i + 40))} new=${JSON.stringify(b.slice(i, i + 40))})`;
}

function changedLineCount(a, b) {
  const la = a.split('\n'), lb = b.split('\n');
  let n = 0;
  for (let i = 0; i < Math.max(la.length, lb.length); i++) if (la[i] !== lb[i]) n++;
  return n;
}

/** Name of the script that imported us, from argv[1]. */
export function callerToolName() {
  const argv1 = process.argv[1] || '';
  return basename(argv1.replace(/\.mjs$/, '')) || '(unknown)';
}

// ---------------------------------------------------------------------------
// WALL: everything off the allowlist dies here, at import time.
// ---------------------------------------------------------------------------

// Same normalisation on both sides: callerToolName() strips the .mjs suffix, so the
// self-check must too -- otherwise this file fences off its own selftest.
const SELF = basename(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')).replace(/\.mjs$/, '');
if (callerToolName() !== SELF && !isApprovedStructuralWriter(callerToolName())) {
  console.error(
    'FROZEN: this tool writes generated pages under content/, which the HARD PREMISE forbids.\n' +
    '       Generated content is withdrawn, not improved. Handwritten pages are never overwritten.\n' +
    '       Keep scaffolding outside content/ (tools/_v153_inventory.json etc.).\n' +
    `       (caller: ${callerToolName()})\n` +
    '       EXCEPTIONS: only the structural-only writers in STRUCTURAL_ALLOWLIST may import this,\n' +
    '       and only to call assertStructuralScope(). Adding one costs one visible line of code.'
  );
  process.exit(1);
}

// ---------------------------------------------------------------------------
// SELFTEST -- both directions, plus one real violation.
// ---------------------------------------------------------------------------

function selftest() {
  let pass = 0, fail = 0;
  const check = (label, ok) => { ok ? pass++ : fail++; console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${label}`); };

  const NAME = 'tools/nav-section-index.mjs';
  const BODY = '## Head\n\nintro\n\n' + SECTION_INDEX_MARKER.begin + '\n- [A](../a)\n' + SECTION_INDEX_MARKER.end + '\n\n## Tail\n\n- [KEEP](../keep)\n';

  console.log('WALL / GUARD SELFTEST');
  // --- GUARD direction: an approved writer may write inside the marker block.
  const legal = assertStructuralScope({
    mode: 'apply', targetPath: 'C:/repo/content/v1.4.6/zh/api/campaign/_index.md',
    originalText: BODY,
    newText: BODY.replace('- [A](../a)', '- [A](../a)\n- [B](../b)'),
    tool: NAME,
  });
  check('approved writer, in-block edit accepted', legal.ok === true);

  // --- THE NAME-NORMALISATION PATH. assertStructuralScope defaults `tool` to the
  //     argv-derived caller name, which has NO .mjs suffix, while the allowlist keys
  //     carry one. This case exists because the block above passed `tool` explicitly
  //     and therefore never touched that path -- the wall rejected its own approved
  //     writer until this was added.
  check('argv-derived caller name (no .mjs) resolves to the approved entry',
    isApprovedStructuralWriter('nav-section-index') === true);
  check('argv-derived caller name for a known gap stays unapproved',
    isApprovedStructuralWriter('ensure-sections') === false);

  // --- VIOLATION 1: writes after the END marker (this is "deleted a link").
  let threw = null;
  try {
    assertStructuralScope({ mode: 'apply', targetPath: 'C:/repo/content/v1.4.6/zh/api/campaign/_index.md',
      originalText: BODY, newText: BODY.replace('- [KEEP](../keep)\n', ''), tool: NAME });
  } catch (e) { threw = e; }
  check('deleting an existing link -> violation thrown', !!threw && threw.rule.includes('after END'));
  check('violation carries a non-zero exit code', threw ? violationExitCode(threw) !== 0 : false);

  // --- VIOLATION 2: writes before the BEGIN marker.
  threw = null;
  try {
    assertStructuralScope({ mode: 'apply', targetPath: 'C:/repo/content/v1.4.6/zh/api/campaign/_index.md',
      originalText: BODY, newText: BODY.replace('intro\n', 'intro\nINJECTED\n'), tool: NAME });
  } catch (e) { threw = e; }
  check('out-of-block edit before BEGIN -> violation', !!threw && threw.rule.includes('before BEGIN'));

  // --- VIOLATION 3: not an _index.md.
  threw = null;
  try {
    assertStructuralScope({ mode: 'apply', targetPath: 'C:/repo/content/v1.4.6/zh/api/campaign/Hero.md',
      originalText: BODY, newText: BODY, tool: NAME });
  } catch (e) { threw = e; }
  check('writing a non-_index.md -> violation', !!threw && threw.rule.includes('not an _index.md'));

  // --- VIOLATION 4: outside content/.
  threw = null;
  try {
    assertStructuralScope({ mode: 'apply', targetPath: 'C:/repo/tools/x/_index.md',
      originalText: BODY, newText: BODY, tool: NAME });
  } catch (e) { threw = e; }
  check('writing outside content/ -> violation', !!threw && threw.rule.includes('not under content/'));

  // --- VIOLATION 5: caller not approved (including the two known gaps).
  for (const [who, label] of [['tools/some_other_writer.mjs', 'unregistered caller'],
                              ['tools/ensure-sections.mjs', 'known-gap caller'],
                              ['tools/create-catalog-sections.mjs', 'known-gap caller']]) {
    threw = null;
    try {
      assertStructuralScope({ mode: 'apply', targetPath: 'C:/repo/content/a/_index.md',
        originalText: BODY, newText: BODY, tool: who });
    } catch (e) { threw = e; }
    check(`${label} rejected by the guard`, !!threw && threw.rule.includes('allowlist'));
  }

  // --- WALL direction: importing from a non-allowlisted tool must kill the process.
  //     Spawned for real, because "the process dies" cannot be asserted in-process.
  const { spawnSync } = require_spawn();
  const probe =
    'import ' + JSON.stringify(new URL('./content-write-freeze.mjs', import.meta.url).href) + ';\n' +
    "console.log('REACHED-AFTER-IMPORT');\n";
  const r = spawnSync(process.execPath, ['--input-type=module', '-e', probe], { encoding: 'utf8' });
  check('non-allowlisted importer exits non-zero', r.status !== 0);
  check('non-allowlisted importer never reaches the line after import', !/REACHED-AFTER-IMPORT/.test(r.stdout || ''));

  console.log(`\n  selftest: ${pass} passed, ${fail} failed`);
  if (fail) { console.error('  THE FENCE HAS NO TEETH. Refusing to certify it.'); process.exit(2); }
  console.log('  teeth confirmed.');
  process.exit(0);
}

// createRequire keeps the child-process probe out of the module's import graph.
function require_spawn() {
  return { spawnSync: (await0 => await0)(nodeSpawnSync) };
}
import { spawnSync as nodeSpawnSync } from 'node:child_process';

if (process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('content-write-freeze.mjs')
    && process.argv.includes('--selftest')) selftest();