// tools/gen-class-ref.mjs
// Generate class reference pages from Bannerlord source. Two modes:
//  - Action classes (static class *Action in *.Actions ns): template page with Apply* methods.
//  - General classes: skeleton with properties/methods/fields + overview/use-case placeholders.
// Usage: node gen-class-ref.mjs [--ver 1.3.15] ClassName [...]   (writes zh+en pages)
// Run from repo root. Output dir inferred from namespace.
import { readFileSync, existsSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { STUB_RE, safeSuffix, extract, renderAction, renderGeneral, outSubdir } from './lib/class-ref.mjs';
import { REPO_ROOT, getArg } from './lib/paths.mjs';

const VER = getArg('--ver', '1.3.15');
const OUT = getArg('--out', 'content');
const ROOT = getArg('--src', join(REPO_ROOT, '..', 'bannerlord-' + VER)).replace(/\\/g, '/');
const API = join(REPO_ROOT, OUT, 'v' + VER);

const classes = process.argv.slice(2).filter((arg, i, arr) => !['--ver', '--out', '--src'].includes(arg) && !['--ver', '--out', '--src'].includes(arr[i - 1]));
if (!classes.length) { console.error('Usage: node gen-class-ref.mjs [--ver 1.3.15] ClassName [...]'); process.exit(1); }

const allCs = [];
(function walk(d) {
  let e;
  try { e = readdirSync(d); } catch { return; }
  for (const x of e) {
    if (x === 'node_modules' || x.startsWith('.')) continue;
    const p = join(d, x).replace(/\\/g, '/');
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p);
    else if (p.endsWith('.cs')) allCs.push(p);
  }
})(ROOT);

const typeIndex = new Map();
const publicTypeRegex = /\bpublic\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+|new\s+)*(class|struct|interface|enum)\s+(\w+)/g;
for (const path of allCs) {
  const raw = readFileSync(path, 'utf8');
  const ns = raw.match(/namespace\s+([\w.]+)/)?.[1] || '(global)';
  let match;
  publicTypeRegex.lastIndex = 0;
  while ((match = publicTypeRegex.exec(raw))) {
    const key = `${ns}|${match[2]}`;
    if (!typeIndex.has(key)) typeIndex.set(key, path);
  }
}

for (const input of classes) {
  const [expectedNamespace, className] = input.includes('|') ? input.split('|') : ['', input];
  const f = expectedNamespace
    ? typeIndex.get(`${expectedNamespace}|${className}`)
    : (allCs.find((path) => path.endsWith('/' + className + '.cs')) || [...typeIndex.entries()].find(([key]) => key.endsWith('|' + className))?.[1]);
  if (!f) { console.warn('SKIP ' + input + ' (not found in ' + VER + ')'); continue; }
  const ex = extract(f, className, ROOT);
  const sub = outSubdir(ex.ns, className);
  let wroteLangs = 0;
  for (const lang of ['en', 'zh']) {
    const body = ex.isActions ? renderAction(className, ex, lang) : renderGeneral(className, ex, lang);
    const dir = join(API, lang, 'api', sub);
    mkdirSync(dir, { recursive: true });
    const plainPath = join(dir, className + '.md');
    let outputFileName = className + '.md';
    let existingText = null;
    if (existsSync(plainPath)) {
      existingText = readFileSync(plainPath, 'utf8');
      const existingNamespaceLine = existingText.split(/\r?\n/).find((line) => line.startsWith('**Namespace:**') || line.startsWith('**命名空间:**')) || '';
      const existingNamespace = existingNamespaceLine.replace(/^\*\*(?:Namespace|命名空间):\*\*\s*/, '').trim();
      if (existingNamespace && existingNamespace !== ex.ns) {
        outputFileName = `${className}__${safeSuffix(ex.ns)}.md`;
        existingText = existsSync(join(dir, outputFileName)) ? readFileSync(join(dir, outputFileName), 'utf8') : null;
      }
    }
    const finalPath = join(dir, outputFileName);
    if (existsSync(finalPath)) {
      const existing = existingText != null ? existingText : readFileSync(finalPath, 'utf8');
      if (!STUB_RE.test(existing)) {
        console.log('skip ' + className + ' (' + lang + '): existing non-generated page');
        continue;
      }
    }
    writeFileSync(finalPath, body);
    wroteLangs++;
  }
  console.log(wroteLangs ? 'wrote ' + className + ' (' + (ex.isActions ? 'action' : 'general') + ', ns=' + ex.ns + ', methods=' + ex.methods.length + ')' : 'skip ' + className + ' (existing non-stub pages)');
}
