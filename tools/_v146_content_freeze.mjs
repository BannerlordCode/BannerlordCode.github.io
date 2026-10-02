/**
 * _v146_content_freeze.mjs — HARD GUARD for the project-level content freeze.
 *
 * The project premise is: every page under content/ must be handwritten page by
 * page; no script may produce a .md under content/. This module makes that
 * structurally true for the v1.4.6 tool line: any attempt to write, unlink,
 * rename or mkdir inside content/ throws instead of touching the tree.
 *
 * Import this module and use the guarded fs calls instead of the raw ones.
 */
import { writeFileSync, mkdirSync, unlinkSync, rmdirSync, renameSync } from 'fs';
import { join, relative, isAbsolute } from 'path';

export const CONTENT_ROOT = 'content';
const VIOLATIONS = [];

function assertOutsideContent(target, verb) {
  const abs = isAbsolute(target) ? target : join(process.cwd(), target);
  const rel = relative(process.cwd(), abs).replace(/\\/g, '/');
  if (rel === 'content' || rel.startsWith('content/')) {
    const msg = 'CONTENT FREEZE: refusing to ' + verb + ' ' + rel;
    VIOLATIONS.push(msg);
    throw new Error(msg);
  }
  return target;
}

export function writeGuarded(target, data, enc) {
  return writeFileSync(assertOutsideContent(target, 'write'), data, enc);
}
export function mkdirGuarded(target, opts) {
  return mkdirSync(assertOutsideContent(target, 'mkdir'), opts);
}
export function unlinkGuarded(target) {
  return unlinkSync(assertOutsideContent(target, 'unlink'));
}
export function rmdirGuarded(target) {
  return rmdirSync(assertOutsideContent(target, 'rmdir'));
}
export function renameGuarded(from, to) {
  return renameSync(assertOutsideContent(from, 'rename-from'), assertOutsideContent(to, 'rename-to'));
}
export function contentFreezeViolations() {
  return [...VIOLATIONS];
}

/** Self-check: prove the guard fires. Run: node tools/_v146_content_freeze.mjs */
export function selfCheck() {
  const results = [];
  for (const [name, fn] of [
    ['write', () => writeGuarded('content/v1.4.6/zh/api/_probe.md', 'x')],
    ['unlink', () => unlinkGuarded('content/v1.4.6/zh/api/_probe.md')],
    ['rmdir', () => rmdirGuarded('content/v1.4.6/zh/api')],
    ['rename', () => renameGuarded('content/v1.4.6/zh/api/a.md', 'content/v1.4.6/zh/api/b.md')],
  ]) {
    try {
      fn();
      results.push({ op: name, blocked: false });
    } catch (e) {
      results.push({ op: name, blocked: true, error: String(e.message) });
    }
  }
  // a non-content target must still be allowed
  try {
    writeGuarded('tools/_v146_out/.freeze-probe', 'ok');
    results.push({ op: 'write-outside-content', blocked: false });
  } catch (e) {
    results.push({ op: 'write-outside-content', blocked: true, error: String(e.message) });
  }
  return results;
}

if (process.argv[1] && process.argv[1].endsWith('_v146_content_freeze.mjs')) {
  const r = selfCheck();
  for (const x of r) console.log((x.blocked ? 'BLOCKED  ' : 'ALLOWED  ') + x.op + (x.error ? '  ' + x.error : ''));
  const leaked = r.filter((x) => x.op !== 'write-outside-content' && !x.blocked);
  console.log(leaked.length ? 'GUARD FAILED' : 'GUARD OK: every content/ mutation refused');
  process.exitCode = leaked.length ? 1 : 0;
}
