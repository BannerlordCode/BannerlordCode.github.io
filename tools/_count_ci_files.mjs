// Count UNIQUE files affected by each content-integrity category.
// Mirrors the regexes in audit-doc-quality.mjs for an honest unique-file baseline.
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, resolve, sep } from 'path';

const docsRoot = resolve(import.meta.dirname, '..', 'content');
const reSep = new RegExp(sep === '\\' ? '\\\\' : sep, 'g');
const rel = (p) => relative(docsRoot, p).replace(reSep, '/');

const AUTOGEN_DESC_RE = /description:\s*["'][^"'\n]*自动生成类参考[^"'\n]*["']/u;
const PLACEHOLDER_ASSIGN_RE = /\b[A-Za-z_]\w*\s*=\s*\.\.\.\s*;?/;
const DOUBLE_I_INTERFACE_RE = /\bII[A-Z]\w+\b/;
const OVERVIEW_STUB_RE = /(阅读时(?:先|再)?看?(?:属性|状态))|(是\s*TaleWorlds[^\n。]*公开类型)/u;

const files = { autogen: new Set(), assign: new Set(), dii: new Set(), overview: new Set() };

function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return acc; }
  for (const e of entries) {
    if (e.startsWith('.') || e === 'public' || e === 'node_modules') continue;
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

let n = 0;
for (const f of walk(docsRoot)) {
  n++;
  const text = readFileSync(f, 'utf8');
  const r = rel(f);
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fm && AUTOGEN_DESC_RE.test(fm[1])) files.autogen.add(r);
  if (OVERVIEW_STUB_RE.test(text)) files.overview.add(r);
  const blocks = text.match(/```[\w]*\n([\s\S]*?)```/g) || [];
  for (const raw of blocks) {
    const body = raw.replace(/```[\w]*\n/, '').replace(/```$/, '');
    if (PLACEHOLDER_ASSIGN_RE.test(body)) files.assign.add(r);
    if (DOUBLE_I_INTERFACE_RE.test(body)) files.dii.add(r);
  }
}

const union = new Set();
for (const s of Object.values(files)) for (const x of s) union.add(x);

console.log(`Scanned ${n} md files.`);
console.log(`Unique files by category:`);
console.log(`  autogen-description        : ${files.autogen.size}`);
console.log(`  formulaic-overview-stub    : ${files.overview.size}`);
console.log(`  placeholder-assignment     : ${files.assign.size}`);
console.log(`  double-i-fake-type         : ${files.dii.size}`);
console.log(`  UNION (any stub marker)    : ${union.size}`);
