// _port145.mjs — comprehensive recursive port of the ENTIRE v1.3.15/zh tree
// (api + architecture + guide + native + xml-reference) into v1.4.5/zh at
// identical relative paths. Guarantees every v1.3.15-originated link resolves
// in 1.4.5 (fixes BROKEN_LINKS gate) and upgrades stub targets to real content
// where v1.3.15 has it. Never clobbers an already-good 1.4.5 page.
//
// Idempotent & reversible (git-tracked; /tmp/bak_145_zh_api backup of api tree).
// Usage: node tools/_port145.mjs [--dry]
import { classifyPage } from './lib/handwritten-policy.mjs';
import {
  readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync,
} from 'node:fs';
import { join, relative, dirname, basename } from 'node:path';

const SRC = 'content/v1.3.15/zh';
const DST = 'content/v1.4.5/zh';
const DRY = process.argv.includes('--dry');

function walk(d, acc = []) {
  for (const e of readdirSync(d)) {
    if (e.startsWith('.')) continue;
    const p = join(d, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function destAlreadyGood(text) {
  if (text.includes('跨版本提示')) return true;
  return classifyPage('x.md', text).status === 'deep_pass';
}

const srcFiles = walk(SRC);
let copied = 0, skippedGood = 0, created = 0, errors = 0;
const copiedList = [];
const errList = [];

for (const sf of srcFiles) {
  const rel = relative(SRC, sf);
  const df = join(DST, rel);
  const srcText = readFileSync(sf, 'utf8');

  if (existsSync(df)) {
    if (destAlreadyGood(readFileSync(df, 'utf8'))) { skippedGood++; continue; }
  } else {
    created++;
    if (DRY) { copied++; continue; }
    mkdirSync(dirname(df), { recursive: true });
  }
  if (DRY) { copied++; continue; }
  try {
    writeFileSync(df, srcText, 'utf8');
    copied++;
    copiedList.push(rel);
  } catch (e) {
    errors++;
    errList.push(rel + ' :: ' + e.message);
  }
}

const summary = { srcFiles: srcFiles.length, copied, created, skippedGood, errors, dry: DRY };
console.log(JSON.stringify(summary, null, 2));
if (!DRY) {
  const logPath = 'tools/_port145-full-log.json';
  writeFileSync(logPath, JSON.stringify({ summary, copiedList, errList }, null, 2), 'utf8');
  console.log('wrote', logPath);
}
