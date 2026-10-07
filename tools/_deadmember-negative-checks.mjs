#!/usr/bin/env node
// tools/_deadmember-negative-checks.mjs
// ASCII-only on purpose (avoids the non-ASCII-through-shell rule entirely).
//
// WHY THIS EXISTS
//   2026-10-03: a check of the form "grep returns nothing -> therefore PASS" was run
//   against 17 files. The awk had an unterminated string. It never executed.
//   I printed "no output = clean OK".
//
//   "no output" is IDENTICAL for a check that passed and for a check that crashed.
//   That makes such a check a machine that only ever says OK.
//
// THE RULE THIS ENFORCES
//   Any "no output => pass" check must first be proven to FAIL on an input that
//   is known to be broken. Until then it is not a check, it is an OK-generator.
//
//   Same shape as the positive controls: a fixture that must fail.
//   Run: node tools/_deadmember-negative-checks.mjs --selftest
//        node tools/_deadmember-negative-checks.mjs --scan <file>...

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

// ---------------------------------------------------------------- checks
// Each returns {name, run(file) -> boolean "problem found"}.
const CHECKS = [
  {
    name: 'no-NUL-byte',
    why: 'a NUL means the write path corrupted the file',
    run(file) {
      const b = fs.readFileSync(file);
      return b.includes(0);
    },
  },
  {
    name: 'no-double-heading-prefix',
    why: 'writer prefixed "## " onto a title that already had it',
    run(file) {
      return /^## ## /m.test(fs.readFileSync(file, 'utf8'));
    },
  },
  {
    name: 'no-corrupted-token',
    why: 'a corrupted literal is silent; the file still greps clean',
    run(file) {
      return fs.readFileSync(file, 'utf8').includes('NO_INDEX_D_MD');
    },
  },
  {
    name: 'no-blank-line-inside-table',
    why: 'a blank line between | rows splits one table into two',
    run(file) {
      const L = fs.readFileSync(file, 'utf8').split('\n');
      for (let i = 1; i < L.length; i++) {
        if (L[i].trim() === '' && /^\s*\|/.test(L[i - 1]) && /^\s*\|/.test(L[i + 1] ?? '')) return true;
      }
      return false;
    },
  },
];

// ---------------------------------------------------------------- fixtures
const GOOD = ['---', 'title: x', '## Members', '', '| A | B |', '| --- | --- |', '| 1 | 2 |', '', 'done.', ''].join('\n');

function makeBad(kind) {
  switch (kind) {
    case 'nul':        return GOOD.replace('done.', 'do\u0000ne.');
    case 'double-h':   return GOOD.replace('## Members', '## ## Members');
    case 'token':      return GOOD.replace('done.', 'note: NO_INDEX_D_MD');
    // the blank line must sit BETWEEN two table rows; putting it after the last
    // row makes the check silently unfireable (first version of this fixture did
    // exactly that, and --selftest caught it -- which is the whole point)
    case 'table-gap':  return GOOD.replace('| --- | --- |\n', '| --- | --- |\n\n');
    default:           throw new Error('unknown fixture ' + kind);
  }
}

// ---------------------------------------------------------------- selftest
function selftest() {
  let fail = 0;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dm-neg-'));
  console.log('== negative-check selftest: every check must FAIL on a broken input ==');

  const goodFile = path.join(tmp, 'good.md');
  fs.writeFileSync(goodFile, GOOD);

  for (const c of CHECKS) {
    // (a) must NOT fire on the good input
    const onGood = c.run(goodFile);
    if (onGood) { fail++; console.log(`  FAIL  ${c.name}: fired on a CLEAN file (false positive)`); }
    else console.log(`  pass  ${c.name}: clean file -> no finding`);

    // (b) MUST fire on its broken fixture -- this is the part that was missing before
    let fired = false, which = '';
    for (const kind of ['nul', 'double-h', 'token', 'table-gap']) {
      const f = path.join(tmp, kind + '.md');
      fs.writeFileSync(f, makeBad(kind));
      if (c.run(f)) { fired = true; which = kind; }
    }
    if (!fired) { fail++; console.log(`  FAIL  ${c.name}: DID NOT fire on any broken fixture -> it is an OK-generator`); }
    else console.log(`  pass  ${c.name}: fires on broken input (${which})`);
  }

  console.log(`\n  selftest: ${CHECKS.length * 2 - fail}/${CHECKS.length * 2}`);
  if (fail) { console.log('  FAILED -> these checks are not trustworthy yet'); process.exit(2); }
  console.log('  All negative checks are proven to fail on broken input.');
  process.exit(0);
}

// ---------------------------------------------------------------- scan
function scan(files) {
  console.log('== scan (each check is proven to fail on broken input; see --selftest) ==');
  let problems = 0;
  for (const f of files) {
    for (const c of CHECKS) {
      let fired = false;
      try { fired = c.run(f); } catch (e) { console.log(`  THREW  ${c.name} on ${f} -- tool error, NOT a clean result`); problems++; continue; }
      if (fired) {
        // This file DEFINES the corrupted token as a fixture, so scanning ourselves
        // always trips it. A check that always fires on one file is noise that
        // teaches people to ignore it -- skip self, and say so.
        const isSelf = path.basename(f) === path.basename(new URL(import.meta.url).pathname);
        if (isSelf && c.name === 'no-corrupted-token') continue;
        console.log(`  FIND  ${c.name}  ${f}`); problems++;
      }
    }
  }
  console.log(problems ? `\n  ${problems} finding(s)` : '\n  no findings');
  process.exit(problems ? 1 : 0);
}

const argv = process.argv.slice(2);
if (!argv.length || argv[0] === '--help') {
  console.log('usage: node tools/_deadmember-negative-checks.mjs --selftest | <file>...');
  process.exit(argv.length ? 0 : 2);
}
if (argv[0] === '--selftest') selftest(); else scan(argv.slice(1));
