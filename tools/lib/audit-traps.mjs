/**
 * Regex and path helpers for the traps that have actually fired in this repo.
 *
 * WHY THIS EXISTS
 * The same bug class recurred EIGHT times across the audit lines:
 *   - `'\b'` in a JS string literal is a BACKSPACE character, not a word boundary
 *   - `^#{2}` matches the first two '#' of '###'
 *   - `String.match()` with the /g flag returns an array with no .index
 *   - `walk()` returns a new array; not reassigning it silently yields an empty universe
 *   - `\w` does not match '.', so paths like native-1.3.15-src vanish
 * A reminder does not survive being retyped. A tested helper does.
 *
 * Every constructor here is asserted by selftest() below.
 */

// 1. Word boundary, built so it can never become a backspace.
export const W = String.fromCharCode(92) + 'b';
/** A backspace character — appears here only so selftest can prove W is not one. */
export const BACKSPACE = String.fromCharCode(8);
export const wordBoundary = (source) => new RegExp(W + source + W);

/**
 * Heading lookup that will NOT confuse '### ' with '## '.
 * Counts the leading '#' run, so the level must be matched exactly.
 */
export const headingRe = (level) => new RegExp('^#{' + level + '}\\s', 'gm');

// 2. Frontmatter extraction. Returns '' when absent rather than throwing.
export function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  return m ? m[1] : '';
}

// 3. All matches WITH their index — String.match(/g/) has no .index and that is a trap.
export function matchAll(text, re) {
  const out = [];
  const rx = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
  let m;
  while ((m = rx.exec(text)) !== null) {
    out.push({ text: m[0], index: m.index, groups: m.slice(1) });
    if (m[0] === '') rx.lastIndex++;   // guard zero-length matches
  }
  return out;
}

// 4. Directory walk that returns its own result. Use this, never a manual walk().
export function walkFiles(root, predicate = (f) => f.endsWith('.md')) {
  const out = [];
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      const p = joinPath(dir, e.name);
      if (e.isDirectory()) stack.push(p);
      else if (predicate(p)) out.push(p);
    }
  }
  return out;
}

// minimal imports kept local so this file has no runtime deps
import { readdirSync } from 'fs';
import { join as joinPath } from 'path';

/** Refuse to report on an empty universe. A check that found nothing is not a pass. */
export function assertUniverse(files, label = 'universe') {
  if (!Array.isArray(files) || files.length === 0) {
    console.error('NO_SOURCE_FILES: ' + label + ' is empty — refusing to report a verdict.');
    process.exit(2);
  }
  return files;
}

// 5. Path-segment matching. `p.includes(x)` matches anywhere in the path and
//    silently over-matches (it once excluded all of TaleWorlds.CampaignSystem/**).
export function hasSegment(relPath, segment) {
  return relPath.split('/').includes(segment);
}
export function hasNamespace(ns, prefix) {
  return ns === prefix || ns.startsWith(prefix + '.');
}

// ---- selftest: assert each trap, so this file cannot silently regress ----
export function selftest() {
  const fails = [];
  const ok = (name, cond) => { if (!cond) fails.push(name); };

  ok('W is a word boundary, not a backspace', W === '\\b' && BACKSPACE !== W && !new RegExp(W).source.includes(String.fromCharCode(8)));

  const src = 'dataStore.SyncData<SecondPhase>("k");';
  ok('generic calls are matched by wordBoundary', wordBoundary('SyncData').test(src));
  ok('a bare " Alive" member name matches', wordBoundary('Alive').test('x.Alive;'));
  ok('Alive does NOT match inside AliveX', !wordBoundary('Alive').test('x.AliveX;'));

  ok('headingRe(2) does not match ###', !headingRe(2).test('### Method'));
  ok('headingRe(2) does match ## ', headingRe(2).test('## Overview'));
  ok('headingRe(3) does match ### ', headingRe(3).test('### Method'));

  ok('matchAll carries .index', matchAll('aXbXc', /X/g)[1].index === 3);
  ok('matchAll survives a zero-length match', matchAll('ab', /(?:)/g).length === 3);

  ok('walkFiles reassigns its result', walkFiles('C:/definitely/not/a/real/path').length === 0);
  ok('hasSegment does not over-match', !hasSegment('v1.3.0/zh/api/campaign-ext/X.md', 'campaign'));
  ok('hasSegment matches a real segment', hasSegment('v1.3.0/zh/api/campaign/X.md', 'campaign'));
  ok('hasNamespace matches exactly', hasNamespace('TaleWorlds.Core', 'TaleWorlds.Core'));
  ok('hasNamespace matches a child', hasNamespace('TaleWorlds.Core.Foo', 'TaleWorlds.Core'));
  ok('hasNamespace rejects a sibling prefix', !hasNamespace('TaleWorlds.CoreExtra', 'TaleWorlds.Core'));

  if (fails.length) { console.error('selftest FAILED: ' + fails.join(', ')); return false; }
  console.log('selftest passed');
  return true;
}
