// Read-only census: how many campaign/en pages satisfy the lead's revised selection criteria?
//   ① lacks a `## 怎么用 / ## How to use` section
//   ② has a verifiable citation, EITHER form:
//        Form A  `Name.cs:N`   (file-qualified)
//        Form B  bare `:N`     (inherits its file from the page's own **File:** field)
//   ③ has no uncommitted change from another line (git diff --name-only)
// Plus the size tiers, because the previous batch was bimodal and an average rate over
// two page shapes would not transfer.
//
// Usage: node tools/_verify/census-criteria.mjs <content-relative-bucket-dir>
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const REPO = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const bucket = process.argv[2] || 'content/v1.4.5/en/api/campaign';

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = d + '/' + e.name;
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

const HAS_USAGE = /^##\s*(怎么用|How to use)\s*$/mi;
const FORM_A = /[A-Za-z_][A-Za-z0-9_]*\.cs:\d+/g;
// Form B: a bare `:N` not preceded by a word char / dot / slash, computed AFTER Form A
// and URLs are stripped, so the two forms can never double-count.
const FORM_B = /(?<![\w./]) :\d+/g;

const pages = walk(`${REPO}/${bucket}`);

const dirty = new Set();
try {
  const out = execFileSync('git', ['-C', REPO, 'diff', '--name-only'], { encoding: 'utf8', maxBuffer: 1e8 });
  for (const l of out.split('\n')) if (l.trim()) dirty.add(l.trim().split('\\').join('/'));
} catch (e) { console.log('WARN git diff failed:', e.message); }

let n1 = 0, n2 = 0, n3 = 0;
const qual = [], droppedByDirty = [], formBonly = [];
let totalA = 0, totalB = 0;

for (const p of pages) {
  const rel = p.replace(`${REPO}/`, '').split('\\').join('/');
  const t = fs.readFileSync(p, 'utf8');
  if (HAS_USAGE.test(t)) continue;
  n1++;
  const fa = (t.match(FORM_A) || []).length;
  const stripped = t.replace(FORM_A, ' ').replace(/https?:\/\/\S+/g, ' ');
  const fb = (stripped.match(FORM_B) || []).length;
  if (fa + fb === 0) continue;
  n2++;
  totalA += fa; totalB += fb;
  const row = { page: rel, formA: fa, formB: fb, bytes: fs.statSync(p).size };
  if (dirty.has(rel)) { droppedByDirty.push(row); continue; }
  n3++;
  qual.push(row);
}
qual.sort((a, b) => a.bytes - b.bytes);

console.log(`scope              : ${bucket}`);
console.log(`pages in scope     : ${pages.length}`);
console.log(`① lacks 怎么用/How to use : ${n1}`);
console.log(`①② also has a citation   : ${n2}`);
console.log(`①②③ all three           : ${n3}`);
console.log(`   of which excluded by ③ (another line has uncommitted edits): ${droppedByDirty.length}`);
console.log();
console.log(`citation occurrences among ①② : Form A = ${totalA}   Form B = ${totalB}`);
console.log();
console.log('--- qualifying pages (§4r: full relative path) ---');
for (const r of qual) console.log(`  ${r.page.padEnd(66)} A=${String(r.formA).padStart(2)} B=${String(r.formB).padStart(2)}  ${r.bytes}B`);
if (!qual.length) console.log('  (none)');
console.log();
console.log('--- excluded by ③ (do not schedule) ---');
for (const r of droppedByDirty) console.log(`  ${r.page}`);
console.log();
const tier = (f) => qual.filter(f).length;
console.log(`size tiers: <2KB ${tier((r) => r.bytes < 2000)} | 2-10KB ${tier((r) => r.bytes >= 2000 && r.bytes <= 10000)} | >10KB ${tier((r) => r.bytes > 10000)}`);
