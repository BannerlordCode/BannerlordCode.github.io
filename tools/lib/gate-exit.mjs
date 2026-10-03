#!/usr/bin/env node
// tools/lib/gate-exit.mjs
//
// THE SINGLE SOURCE OF THE 0/1/2 EXIT CONTRACT.  Every gate in this repo must
// produce its verdict through exitCode() here.  Do not hand-roll a comparison
// in a caller; a second copy of "worst wins" is a second chance to be wrong.
//
// ---------------------------------------------------------------------------
// SEMANTICS -- read this before changing a number
// ---------------------------------------------------------------------------
//   0  OK           the axis ran, could measure, and found nothing to report.
//   1  FINDINGS     the axis ran, could measure, and found >=1 finding.
//   2  NO_VERDICT   the axis produced NO judgement at all.  Concretely:
//                   could not read its input, was never run, was called with a
//                   bad/missing argument, or its denominator came out as 0.
//
//   `2` is NOT "clean".  A checker that cannot see anything and a checker that
//   saw nothing are indistinguishable in the output; collapsing them into 0
//   converts "I am blind" into "all good", which is the single most expensive
//   failure mode a gate can have.  Aggregation takes the WORST value
//   (2 > 1 > 0) precisely so that one blind axis cannot be masked by nine
//   green ones.
//
//   Numerator/denominator are mandatory in every axis result.  A verdict with
//   no denominator is a claim about an unmeasured population -- print "n/??"
//   and let the reader see the instrument is uncalibrated, rather than printing
//   a bare verdict that reads like a measurement.
//
// ---------------------------------------------------------------------------
// USAGE
//   node tools/lib/gate-exit.mjs --selftest
//
// No I/O beyond stdout.  Safe to import from any tool.
// ---------------------------------------------------------------------------

import { pathToFileURL } from 'node:url';

export const OK = 0;
export const FINDINGS = 1;
export const NO_VERDICT = 2;

export const VERDICT_NAME = { [OK]: 'OK', [FINDINGS]: 'FINDINGS', [NO_VERDICT]: 'NO_VERDICT' };

// An axis result: { axis, verdict, numerator, denominator, unit?, blind?, note? }
//
// `blind` (optional, non-negative integer) = "how many inputs this axis could
// not read".  It exists because of a hole found in review: an axis that had
// read failures used to leave the count in `note`, and exitCode() only ever
// reads `verdict` -- so the blindness was lost at the aggregation boundary and
// the gate reported a clean FINDINGS over an incomplete population.  Making it
// a FIELD is the fix: it is now part of the contract, it survives aggregation,
// and exitCode() throws if an axis contradicts itself (blind > 0 while
// claiming OK or FINDINGS).  A note string can no longer carry state.
export function isAxisResult(r) {
  return !!r && typeof r === 'object' && Number.isInteger(r.verdict)
    && r.verdict >= OK && r.verdict <= NO_VERDICT;
}

/** Contract check: blindness and verdict must agree. Throws when they do not. */
function assertCoherent(r, i) {
  const blind = r.blind ?? 0;
  if (!Number.isInteger(blind) || blind < 0) {
    throw new Error(`gate-exit: axisResults[${i}].blind must be a non-negative integer, got ${JSON.stringify(r.blind)}`);
  }
  if (blind > 0 && r.verdict !== NO_VERDICT) {
    throw new Error(`gate-exit: axisResults[${i}] ("${r.axis ?? '?'}") reports blind=${blind} but verdict=${VERDICT_NAME[r.verdict]}. `
      + 'An axis that could not read its whole input has NO verdict; it must set NO_VERDICT itself. '
      + 'Aggregation cannot rescue this -- exitCode() reads verdict only, by design.');
  }
}

/**
 * Aggregate per-axis results into ONE process exit code.  Worst wins: 2 > 1 > 0.
 * Throws on a malformed axis result rather than guessing -- a malformed input
 * is a programming error, and silently downgrading it to OK is exactly the bug
 * this module exists to prevent.
 */
export function exitCode(axisResults) {
  if (!Array.isArray(axisResults) || axisResults.length === 0) {
    throw new Error('gate-exit: exitCode() needs a non-empty array of axis results');
  }
  let worst = OK;
  for (const [i, r] of axisResults.entries()) {
    if (!isAxisResult(r)) throw new Error(`gate-exit: axisResults[${i}] is malformed: ${JSON.stringify(r)}`);
    assertCoherent(r, i);
    if (r.verdict > worst) worst = r.verdict;
  }
  return worst;
}

/** Fraction with an explicit "no denominator" spelling -- never a fake 0. */
export function fraction(numerator, denominator) {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator <= 0) return 'n/d (no denominator)';
  return `${numerator}/${denominator} = ${(numerator / denominator).toFixed(4)}`;
}

/**
 * Print one block per axis: name, verdict, numerator, denominator.
 * Every line carries its own fraction so a reader can never see a verdict
 * without also seeing what it was measured over.
 */
export function printAxes(axisResults, log = console.log) {
  log('GATE AXES (worst verdict decides the process exit code; 2 = no verdict)');
  for (const r of axisResults) {
    if (!isAxisResult(r)) { log(`  ${'??'.padEnd(18)} MALFORMED AXIS RESULT: ${JSON.stringify(r)}`); continue; }
    const den = Number.isFinite(r.denominator) && r.denominator > 0 ? r.denominator : null;
    const blind = r.blind ?? 0;
    log(`  ${String(r.axis).padEnd(18)} ${VERDICT_NAME[r.verdict].padEnd(10)} numerator=${r.numerator}  denominator=${den ?? 'NONE (unmeasured)'}${r.unit ? ' ' + r.unit : ''}`);
    if (blind > 0) log(`      BLIND: ${blind} input(s) unreadable -> this axis has NO verdict, and it said so itself`);
    if (r.note) log(`      note: ${r.note}`);
  }
  const code = axisResults.every(isAxisResult) ? exitCode(axisResults) : NO_VERDICT;
  log(`  aggregate: exit ${code} (${VERDICT_NAME[code]})`);
  return code;
}

// ---------------------------------------------------------------- selftest

function selftest() {
  const OKCASE = { axis: 'ok-case', verdict: OK, numerator: 0, denominator: 10 };
  const FINDCASE = { axis: 'findings-case', verdict: FINDINGS, numerator: 3, denominator: 10 };
  const BLINDCASE = { axis: 'blind-case', verdict: NO_VERDICT, numerator: 5, denominator: 0 };

  const checks = [
    ['single OK axis -> 0', [OKCASE], 0],
    ['single FINDINGS axis -> 1', [FINDCASE], 1],
    ['single NO_VERDICT axis -> 2', [BLINDCASE], 2],
    ['worst wins: OK + FINDINGS -> 1', [OKCASE, FINDCASE], 1],
    ['worst wins: FINDINGS + NO_VERDICT -> 2', [FINDCASE, BLINDCASE], 2],
    ['blind axis NOT folded into OK', [{ ...BLINDCASE, numerator: 0 }, OKCASE, OKCASE], 2],
  ];

  let pass = 0, fail = 0;
  printAxes([OKCASE, FINDCASE, BLINDCASE]);
  console.log('');
  for (const [label, axes, want] of checks) {
    const got = exitCode(axes);
    const ok = got === want;
    ok ? pass++ : fail++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${label.padEnd(36)} want=${want} got=${got}`);
  }

  // NO_VERDICT must never be silently downgraded anywhere in the module.
  const downgradeAttempts = [
    ['printAxes([NO_VERDICT]) reports 2', printAxes([BLINDCASE], () => {}) === 2],
    ['exitCode([{verdict:NO_VERDICT,numerator:0,denominator:99}]) === 2', exitCode([{ axis: 'x', verdict: NO_VERDICT, numerator: 0, denominator: 99 }]) === 2],
    ['fraction(n=5,d=0) is not "0"', fraction(5, 0) !== '0'],
    ['fraction(n=0,d=0) is not "0/0=0.0000"', fraction(0, 0) !== '0/0=0.0000'],
    ['malformed axis throws instead of returning OK', (() => { try { exitCode([{ axis: 'x' }]); return false; } catch { return true; } })()],
    ['empty array throws instead of returning OK', (() => { try { exitCode([]); return false; } catch { return true; } })()],
    // --- the blind/verdict coherence contract ---
    ['blind>0 + NO_VERDICT -> 2 (legal)', exitCode([{ axis: 'x', verdict: NO_VERDICT, numerator: 0, denominator: 0, blind: 3 }]) === 2],
    ['blind>0 + OK -> THROWS (self-contradiction)', (() => { try { exitCode([{ axis: 'x', verdict: OK, numerator: 0, denominator: 10, blind: 3 }]); return false; } catch { return true; } })()],
    ['blind>0 + FINDINGS -> THROWS (blindness lost in note)', (() => { try { exitCode([{ axis: 'x', verdict: FINDINGS, numerator: 2, denominator: 10, blind: 1 }]); return false; } catch { return true; } })()],
    ['negative blind -> THROWS', (() => { try { exitCode([{ axis: 'x', verdict: NO_VERDICT, numerator: 0, denominator: 0, blind: -1 }]); return false; } catch { return true; } })()],
    ['non-integer blind -> THROWS', (() => { try { exitCode([{ axis: 'x', verdict: NO_VERDICT, numerator: 0, denominator: 0, blind: 'two' }]); return false; } catch { return true; } })()],
    ['omitted blind is treated as 0 (back-compat)', exitCode([OKCASE]) === 0],
    ['printAxes surfaces a BLIND line', (() => { let out = ''; printAxes([{ axis: 'x', verdict: NO_VERDICT, numerator: 0, denominator: 0, blind: 5 }], (s) => { out += s + '\n'; }); return /BLIND: 5/.test(out); })()],
  ];
  console.log('');
  for (const [label, ok] of downgradeAttempts) {
    ok ? pass++ : fail++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'}  ${label}`);
  }

  console.log(`\n  selftest: ${pass} passed, ${fail} failed`);
  if (fail) { console.error('  THE EXIT CONTRACT HAS NO TEETH. Refusing to issue a verdict.'); process.exit(2); }
  console.log('  teeth confirmed.');
  process.exit(0);
}

// Run the selftest only when this file is the process entry point -- otherwise
// an importing tool that happens to be invoked with --selftest would run it
// twice and exit underneath its caller.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href
    && process.argv.includes('--selftest')) selftest();