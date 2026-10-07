// lead-7 gate helper: per-page FFFD scan + line-ending census + deep_pass status.
// Usage:
//   node tools/_lead7_gate.mjs <bucketDir> [--verbose]
//   node tools/_lead7_gate.mjs <bucketDir> --files a.md,b.md
// Prints one TSV row per page plus a trailing summary. Exit code 1 if any
// U+FFFD is found (mandatory zero) or any page regressed off deep_pass.
//
// Read-only. Never writes content.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';
import { classifyPage } from './lib/handwritten-policy.mjs';

const target = process.argv[2];
if (!target) {
  console.error('usage: node tools/_lead7_gate.mjs <bucketDir> [--verbose] [--files a.md,b.md]');
  process.exit(2);
}
const verbose = process.argv.includes('--verbose');
const fileIdx = process.argv.indexOf('--files');
const only = fileIdx >= 0 ? new Set(process.argv[fileIdx + 1].split(',').map((s) => s.trim())) : null;

let pages;
if (only) {
  pages = [...only].map((f) => join(target, f));
} else if (statSync(target).isDirectory()) {
  pages = readdirSync(target)
    .filter((f) => f.endsWith('.md') && f !== '_index.md')
    .sort()
    .map((f) => join(target, f));
} else {
  pages = [target];
}

let fffd = 0;
let notDeep = 0;
let crlf = 0;
let lf = 0;
let mixed = 0;

console.log(['page', 'bytes', 'eol', 'fffd', 'status', 'reasons'].join('\t'));
for (const p of pages) {
  let buf;
  try {
    buf = readFileSync(p);
  } catch {
    console.log(`${basename(p)}\tMISSING\t\t\t\t`);
    notDeep++;
    continue;
  }
  const text = buf.toString('utf8');
  const bad = (text.match(/\uFFFD/gu) || []).length;
  fffd += bad;

  const lfCount = (text.match(/\n/gu) || []).length;
  const crlfCount = (text.match(/\r\n/gu) || []).length;
  let eol = 'lf';
  if (crlfCount > 0 && crlfCount === lfCount) eol = 'crlf';
  else if (crlfCount > 0) eol = 'mixed';
  if (eol === 'crlf') crlf++;
  else if (eol === 'mixed') mixed++;
  else lf++;

  const r = classifyPage(p.replace(/\\/gu, '/'), text);
  if (r.status !== 'deep_pass') notDeep++;
  console.log(
    [basename(p), buf.length, eol, bad, r.status, (r.reasons || []).join('|')].join('\t')
  );
  if (verbose && bad > 0) {
    text.split(/\r?\n/u).forEach((l, i) => {
      if (l.includes('\uFFFD')) console.log(`  FFFD line ${i + 1}: ${JSON.stringify(l.slice(0, 160))}`);
    });
  }
}

console.log(
  ['SUMMARY', `pages=${pages.length}`, `fffd=${fffd}`, `not_deep_pass=${notDeep}`, `crlf=${crlf}`, `lf=${lf}`, `mixed=${mixed}`].join('\t')
);
if (fffd > 0 || mixed > 0) {
  console.error(`FAIL: fffd=${fffd} mixed_eol=${mixed} (both must be 0)`);
  process.exit(1);
}
if (notDeep > 0) {
  console.error(`FAIL: ${notDeep} page(s) not deep_pass`);
  process.exit(1);
}
console.log('OK');