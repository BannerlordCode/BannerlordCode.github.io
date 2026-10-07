#!/usr/bin/env node
// _src-manifest.mjs — mechanical source-extraction helper for doc pages.
//
// Reads doc pages READ-ONLY, resolves each page's type to its real .cs file in the
// game source tree, and emits a JSON manifest of member declarations with 1-based
// declaration line numbers.
//
// SCOPE BOUNDARY (deliberate, do not widen):
//   This tool produces EVIDENCE only: member / signature / file:line / access.
//   It never writes anything under content/**. Prose, mental models, usage
//   examples and "what this member is for" are judgement, not mechanical
//   extraction, and stay hand-written. There is deliberately no --write-content.
//
// Usage:
//   node tools/_src-manifest.mjs <bucket-dir> [--out <file>] [--version v1.4.5] [--src-root <dir>]
//
// Node built-ins only.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..');
const WORKSPACE = path.resolve(REPO, '..');

const DIMS = ['1.3.0', '1.3.15', '1.4.5', '1.4.6', '1.4.7', '1.5.3'];

// ---------------------------------------------------------------- arg parsing
function die(msg, code = 2) {
  process.stderr.write(`_src-manifest: ERROR: ${msg}\n`);
  process.exit(code);
}

const argv = process.argv.slice(2);
const opts = { bucket: null, out: null, version: null, srcRoot: null };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--out') opts.out = argv[++i];
  else if (a === '--version') opts.version = argv[++i];
  else if (a === '--src-root') opts.srcRoot = argv[++i];
  else if (a === '-h' || a === '--help') {
    process.stdout.write(
      'usage: node tools/_src-manifest.mjs <bucket-dir> [--out <file>] [--version v1.4.5] [--src-root <dir>]\n'
    );
    process.exit(0);
  } else if (a.startsWith('-')) die(`unknown flag: ${a}`);
  else if (!opts.bucket) opts.bucket = a;
  else die(`unexpected argument: ${a}`);
}
if (!opts.bucket) die('missing <bucket-dir>');

const bucketAbs = path.resolve(process.cwd(), opts.bucket);
if (!fs.existsSync(bucketAbs)) die(`bucket dir not found: ${opts.bucket}`);
if (!fs.statSync(bucketAbs).isDirectory()) die(`bucket dir is not a directory: ${opts.bucket}`);

// infer version from content/<version>/... bucket path
if (!opts.version) {
  const rel = path.relative(REPO, bucketAbs).split(path.sep);
  const v = rel.find((p) => /^v\d/.test(p));
  if (v) opts.version = v;
}

function sourceRootsFor(version) {
  if (opts.srcRoot) return [path.resolve(process.cwd(), opts.srcRoot)];
  const dim = (version || '').replace(/^v/, '');
  const roots = [];
  if (!dim || !DIMS.includes(dim)) die(`unknown --version ${version}; known: ${DIMS.map((d) => 'v' + d).join(' ')}`);
  const home = path.join(WORKSPACE, 'bannerlord-' + dim);
  // v1.4.5 ships Bannerlord.Source/{bin,Modules.*}; others are flat sln trees.
  for (const r of [path.join(home, 'Bannerlord.Source'), path.join(home, 'Bannerlord.Source', 'bin'), home]) {
    if (fs.existsSync(r)) roots.push(r);
  }
  if (!roots.length) die(`no source tree found for ${version} (looked under ${home})`);
  return roots;
}
const ROOTS = sourceRootsFor(opts.version);

// ------------------------------------------------------- output path + guard
const outAbs = opts.out
  ? path.resolve(process.cwd(), opts.out)
  : path.join(HERE, '_verify', path.basename(bucketAbs) + '.json');

function assertNotContent(p) {
  const rel = path.relative(REPO, p);
  if (rel && !rel.startsWith('..') && !path.isAbsolute(rel) && rel.split(path.sep)[0] === 'content') {
    die(`refusing to write inside content/ (${rel}). This tool is evidence-only; manifests live under tools/.`, 3);
  }
  if (p === bucketAbs || p.startsWith(bucketAbs + path.sep)) {
    die(`refusing to write inside the bucket dir (${path.relative(REPO, p)})`, 3);
  }
}
assertNotContent(outAbs);

// ------------------------------------------------------------ C# text cleaning
// Strips comments and string/char literals so brace+paren counting is honest.
// Leaves the character positions 1:1 with the input so verbatim slices stay valid.
function cleanLines(rawLines) {
  const out = new Array(rawLines.length);
  let inBlock = false;
  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    let res = '';
    let p = 0;
    while (p < line.length) {
      if (inBlock) {
        const end = line.indexOf('*/', p);
        if (end === -1) { p = line.length; } else { inBlock = false; p = end + 2; }
        continue;
      }
      const c = line[p];
      if (c === '/' && line[p + 1] === '/') break;                 // line comment
      if (c === '/' && line[p + 1] === '*') { inBlock = true; p += 2; continue; }
      if (c === '"' || c === "'") {                                  // string / char literal
        const quote = c;
        p++;
        if (quote === '"' && line[p] === '@' && line[p + 1] === '"') p += 2;  // verbatim @"..."
        while (p < line.length) {
          if (line[p] === '\\' && quote === '"' && !(line[p + 1] === '"')) { p += 2; continue; }
          if (line[p] === quote) { if (line[p + 1] === quote) { p += 2; continue; } p++; break; }
          p++;
        }
        res += ' ';                                                  // literal erased
        continue;
      }
      res += c;
      p++;
    }
    out[i] = res;
  }
  return out;
}

const TYPE_DECL_RE =
  /^\s*(?:public|internal|private|protected|static|sealed|abstract|partial|unsafe|readonly|ref|new)\s+(?:(?:public|internal|private|protected|static|sealed|abstract|partial|unsafe|readonly|ref|new)\s+)*(class|struct|interface|enum|record)\s+([A-Za-z_]\w*)/;

function findTypeDecl(clean, typeName) {
  for (let i = 0; i < clean.length; i++) {
    const m = clean[i].match(TYPE_DECL_RE);
    if (m && m[2] === typeName) return { line: i, kind: m[1] };
  }
  // fallback: any type declaration line mentioning the name (partial split across modifiers)
  for (let i = 0; i < clean.length; i++) {
    if (new RegExp('\\b(class|struct|interface|enum|record)\\s+' + typeName + '\\b').test(clean[i])) {
      const m = clean[i].match(TYPE_DECL_RE);
      return { line: i, kind: m ? m[1] : 'class' };
    }
  }
  return null;
}

// Depth-1 line span of the type body. The line that carries the type's own opening
// brace is NOT part of it — otherwise that `{` is read as the body of a phantom
// member and the whole type collapses into one.
function typeBodyRegion(clean, declLine) {
  let depth = 0, opened = false, singleLine = false;
  const region = [];
  for (let i = declLine; i < clean.length; i++) {
    for (const ch of clean[i]) {
      if (ch === '{') { depth++; opened = true; }
      else if (ch === '}') { depth--; if (opened && depth === 0) singleLine = region.length === 0; }
    }
    if (opened && depth === 1) region.push(i);
    if (opened && depth === 0) break;
  }
  return { region: region.slice(1), opened, singleLine };
}

// ------------------------------------------------------------ member scanning
function declHead(decl) {
  let p = 0, b = 0, k = 0;
  for (let i = 0; i < decl.length; i++) {
    const c = decl[i];
    if (c === '(') { if (p === 0 && b === 0 && k === 0) return decl.slice(0, i); p++; }
    else if (c === ')') p--;
    else if (c === '[') b++;
    else if (c === ']') b--;
    else if (c === '<') k++;
    else if (c === '>' && k > 0) k--;
    else if (p === 0 && b === 0 && k === 0) {
      if (c === '{' || c === '=' || c === ';') return decl.slice(0, i);
      if (c === '?' && decl[i + 1] === '>') return decl.slice(0, i);
      if (c === '!') return decl.slice(0, i);
    }
  }
  return decl;
}

function memberName(decl, typeName, isInterface) {
  let head = declHead(decl).trim();
  // trailing generic arity on the type:  Foo<T>  ->  keep the identifier
  const last = head.match(/([A-Za-z_]\w*)\s*(?:<[^<>]*>)?\s*$/);
  if (!last) return typeName;
  let n = last[1];
  if (n === typeName) return n;                     // constructor
  // explicit interface implementation:  void IFoo.Bar(  ->  Bar
  const dotted = head.match(/([A-Za-z_]\w*)\s*\.\s*([A-Za-z_]\w*)\s*(?:<[^<>]*>)?\s*$/);
  if (dotted) n = dotted[2];
  if (!isInterface && n === 'this') return 'this[]';
  return n;
}

function accessOf(decl, typeName, isInterface, isEnum) {
  const m = decl.match(/^\s*(public|internal|protected|private)\b/);
  if (m) {
    const second = decl.match(/^\s*(?:public|internal|protected|private)\s+(internal|protected|private|public)\b/);
    return second ? m[1] + ' ' + second[1] : m[1];
  }
  if (/\.[A-Za-z_]\w*\s*(?:<[^<>]*>)?\s*\(/.test(declHead(decl))) return 'private';  // explicit impl
  if (isInterface || isEnum) return 'public';
  if (memberName(decl, typeName, isInterface) === typeName) return 'public';           // ctor
  return 'private';
}

function isAttrOnly(t) {
  if (!t.startsWith('[') || !t.endsWith(']')) return false;
  let k = 0;
  for (const c of t) { if (c === '[') k++; else if (c === ']') { k--; if (k < 0) return false; } }
  return k === 0;
}

const ENUM_MEMBER_RE = /^([A-Za-z_]\w*)\s*(?:=\s*(.*?))?\s*[,;]?$/;

function scanMembers(raw, clean, declLine, kind, typeName) {
  const { region, opened, singleLine } = typeBodyRegion(clean, declLine);
  if (!opened) return { members: [], notes: ['type body not found (no opening brace)'] };
  if (singleLine) return { members: [], notes: ['type body is declared on a single line; members not extracted'] };
  if (!region.length) return { members: [], notes: ['type body is empty'] };

  const isInterface = kind === 'interface';
  const isEnum = kind === 'enum';
  const notes = [];
  const members = [];

  if (isEnum) {
    let bad = 0;
    for (const ln of region) {
      const t = clean[ln].trim();
      if (!t || t.startsWith('#') || isAttrOnly(t)) continue;
      const m = t.match(ENUM_MEMBER_RE);
      if (!m) { bad++; continue; }
      members.push({ name: m[1], signature: raw[ln].trim(), line: ln + 1, access: 'public' });
    }
    if (bad) notes.push(`${bad} enum line(s) not parsed`);
    return { members, notes };
  }

  let i = 0;
  let nested = 0;
  while (i < region.length) {
    const ln = region[i];
    const t0 = clean[ln].trim();
    if (!t0 || t0.startsWith('#')) { i++; continue; }

    // ---- gather until the member terminates
    const bufLines = [ln];                 // original line numbers
    let paren = 0, brack = 0, angle = 0;
    let bodyDepth = 0, bodyStartLine = -1, bodyEndLine = -1;
    let end = false, j = i;
    for (; j < region.length && !end; j++) {
      const cl = clean[region[j]];
      if (j > i) bufLines.push(region[j]);
      for (let k = 0; k < cl.length; k++) {
        const c = cl[k];
        if (bodyDepth > 0) {
          if (c === '{') bodyDepth++;
          else if (c === '}' && --bodyDepth === 0) { end = true; bodyEndLine = j; break; }
          continue;
        }
        if (c === '(') paren++;
        else if (c === ')') paren--;
        else if (c === '[') brack++;
        else if (c === ']') brack--;
        else if (c === '<') angle++;
        else if (c === '>' && angle > 0) angle--;
        else if (paren === 0 && brack === 0 && angle === 0) {
          if (c === ';' || (c === '?' && cl[k + 1] === '>')) { end = true; break; }
          if (c === '}') { end = true; break; }        // e.g. `public int X { get; }` degenerate
          if (c === '{') { bodyDepth = 1; bodyStartLine = j; }
        }
      }
    }
    if (!end) { i = j; continue; }                     // unterminated (shouldn't happen)

    // ---- signature: leading attribute lines + the declaration itself. Body lines
    // (everything from the opening `{` onward) are NOT part of the declaration.
    const attrIdx = [];
    for (let k = 0; k < bufLines.length; k++) {
      const tl = clean[bufLines[k]].trim();
      if (tl && isAttrOnly(tl)) { attrIdx.push(k); continue; }
      if (!tl || tl.startsWith('#')) continue;
      break;
    }
    const d = attrIdx.length;
    // A member whose body opened on a depth-2 line (a real method/ctor body) is invisible
    // to this scan: only the body's closing `}` shows up, alone on its line. That `}` is
    // the terminator but NOT part of the declaration, so step back off it.
    let lastIdx = bufLines.length - 1;
    if (bodyStartLine < 0 && clean[bufLines[lastIdx]].trim() === '}') lastIdx--;
    const bodyPos = bodyStartLine >= 0 ? bodyStartLine - i : -1;
    const endIdx = bodyPos >= 0 ? Math.min(bodyPos, lastIdx) : lastIdx;
    const declFirst = bufLines[d];
    let lastText = raw[bufLines[endIdx]];
    // body opening AND closing on the declaration's own line -> keep it whole
    // (auto-property, one-liner). Otherwise cut that line at its `{`.
    if (bodyPos >= 0 && bodyEndLine !== bodyStartLine) {
      const bi = clean[bufLines[endIdx]].indexOf('{');
      if (bi >= 0) lastText = raw[bufLines[endIdx]].slice(0, bi);
    }
    const parts = attrIdx.map((k) => raw[bufLines[k]].trim());
    parts.push(...bufLines.slice(d, endIdx + 1).map((l, k) => (d + k === endIdx ? lastText : raw[l]).trim()).filter(Boolean));
    const signature = parts.join(' ').replace(/[ \t]+/g, ' ').trim();

    const declClean = bufLines.slice(d, endIdx + 1).map((l) => clean[l]).join(' ');
    if (TYPE_DECL_RE.test(' ' + declClean.trim()) && !isInterface) {
      nested++;
      i = j;                                            // nested type: not a member of this type
      continue;
    }
    if (/^\s*(?:\[|delegate|event\b)/.test(declClean) && !/\bdelegate\b\s+\w+\s+\w+\s*[({]/.test(declClean)) {
      i = j;
      continue;
    }
    if (!signature) { i = j; continue; }

    members.push({
      name: memberName(declClean, typeName, isInterface),
      signature,
      line: declFirst + 1,
      access: accessOf(declClean, typeName, isInterface, false),
    });
    i = j;
  }
  if (!members.length && nested) notes.push(`body holds only ${nested} nested type(s); no direct members`);
  return { members, notes };
}

// --------------------------------------------------------- file cache + index
const fileCache = new Map();
function readSource(abs) {
  let v = fileCache.get(abs);
  if (v === undefined) {
    v = fs.readFileSync(abs, 'utf8').split(/\r?\n/);
    if (fileCache.size > 400) fileCache.clear();
    fileCache.set(abs, v);
  }
  return v;
}

let typeIndex = null;   // typeName -> [{ file (module-qualified), ns }]
function buildTypeIndex() {
  if (typeIndex) return typeIndex;
  typeIndex = new Map();
  for (const root of ROOTS) walkTree(root);
  return typeIndex;
  function walkTree(dir) {
    let ents;
    try { ents = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of ents) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { walkTree(p); continue; }
      if (!e.name.endsWith('.cs')) continue;
      let raw;
      try { raw = fs.readFileSync(p, 'utf8'); } catch { continue; }
      const clean = cleanLines(raw.split(/\r?\n/));
      const namespaces = [...new Set(clean
        .map((l) => l.match(/^\s*namespace\s+([\w.]+)/))
        .filter(Boolean)
        .map((m) => m[1]))];
      for (const cl of clean) {
        const m = cl.match(TYPE_DECL_RE);
        if (!m || m[1] === 'record' || /^\s*(private|static)\s/.test(cl)) continue;
        const qualified = sourceRel(p);
        if (!qualified) continue;
        const arr = typeIndex.get(m[2]) || [];
        if (!arr.some((x) => x.file === qualified)) arr.push({ file: qualified, abs: p, ns: namespaces });
        typeIndex.set(m[2], arr);
      }
    }
  }
}

// The emitted path is relative to the FIRST source root that contains the file, with
// NOTHING stripped. That is the whole contract: path.join(ROOTS[0], sourceFile) must open.
//
// The wrapper segments `bin/` and `Modules.<X>/` are KEPT on purpose. They are not noise:
// v1.4.5 has two parallel roots under Bannerlord.Source/ and stripping `Modules.Multiplayer/`
// produces a path that opens nowhere — a writer who cannot open it either wastes time
// re-hunting or concludes the API does not exist. The latter is the worst outcome here.
// Module qualification is still satisfied: the module directory segment is never dropped,
// so a bare `Properties/AssemblyInfo.cs` can never be emitted.
function sourceRel(abs) {
  for (const root of ROOTS) {
    if (abs.startsWith(root + path.sep)) return path.relative(root, abs).split(path.sep).join('/');
  }
  return null;
}

// Self-check on the output contract: the path must be openable AND carry a module segment.
function sourceRelIsUsable(rel) {
  if (!rel || !rel.endsWith('.cs')) return false;
  if (!fs.existsSync(path.join(ROOTS[0], ...rel.split('/')))) return false;
  return rel.split('/').length >= 2;   // never a bare, module-ambiguous filename
}

// ------------------------------------------------------------ page frontmatter
function fieldOf(text, label) {
  const re = new RegExp('^\\*\\*' + label + ':\\*\\*\\s*(.*)$', 'm');
  const m = text.match(re);
  if (!m) return null;
  return m[1].trim().replace(/^`+|`+$/g, '').trim() || null;
}

// Path-bearing labels, in priority order. `**File:**` is the common one; `**Source:**`
// is a second spelling used by hand-written pages; `**源文件：**` is the zh-tree variant.
// Missing a variant silently downgrades a resolvable page to UNRESOLVED, and a hand-found
// path is worse than an honest UNRESOLVED — so all three are recognised.
const PATH_LABEL_RE = /^\s*\*\*\s*(File|Source|源文件)\s*[:：]\s*\*\*\s*(.*)$/m;

// A path plus junk: markdown hard-break spaces, a backtick wrapper, or a trailing
// annotation such as `（声明见第 42 行）`. Strip all of it — the path itself never
// contains parentheses.
function cleanFieldValue(raw) {
  return raw
    .replace(/\s+$/, '')
    .replace(/`/g, '')
    .replace(/[（(][^）)]*[）)]\s*$/, '')
    .trim() || null;
}

function pathField(text) {
  const m = text.match(PATH_LABEL_RE);
  if (!m) return null;
  const value = cleanFieldValue(m[2]);
  return value ? { label: m[1], value } : null;
}

function typeNameFrom(pageType, pageName) {
  if (pageType) {
    const head = pageType.replace(/^(?:public|internal|abstract|sealed|static|partial)\s+/g, '');
    const m = head.match(/\b(?:class|struct|interface|enum|record)\s+([A-Za-z_]\w*)/);
    if (m) return m[1];
  }
  return pageName;
}

// ------------------------------------------------------------------ resolution
function resolveFromField(fieldValue, moduleField) {
  let v = fieldValue.replace(/\\/g, '/').replace(/^\.\//, '').trim();
  if (!v) return null;
  const tries = [];
  const noBin = v.replace(/^bin\//, '');
  for (const cand of [...new Set([v, noBin])]) {
    for (const root of ROOTS) {
      tries.push(path.join(root, ...cand.split('/')));
      if (moduleField) tries.push(path.join(root, moduleField, ...cand.split('/')));
    }
  }
  for (const t of tries) {
    if (fs.existsSync(t) && fs.statSync(t).isFile()) return t;
  }
  return null;
}

function namespaceMatches(declaredNs, wantNs) {
  if (!wantNs) return true;
  return declaredNs.some((ns) => ns === wantNs || wantNs.startsWith(ns + '.') || ns.startsWith(wantNs + '.'));
}

function extract(pageRel, abs) {
  const text = fs.readFileSync(abs, 'utf8');
  const pageName = path.basename(abs, '.md');
  const typeName = typeNameFrom(fieldOf(text, 'Type'), pageName);
  const rec = {
    page: pageRel.split(path.sep).join('/'),
    type: typeName,
    namespace: fieldOf(text, 'Namespace'),
    resolved: false,
    sourceFile: null,
    resolveMethod: null,
    members: [],
    notes: [],
  };

  const pf = pathField(text);
  const fileField = pf ? pf.value : null;
  const moduleField = fieldOf(text, 'Module');

  let hit = fileField ? resolveFromField(fileField, moduleField) : null;
  if (fileField && !hit) {
    rec.notes.push(`${pf.label} field "${fileField}" does not exist under any source root`);
  }

  if (hit) {
    const raw = readSource(hit);
    const clean = cleanLines(raw);
    const decl = findTypeDecl(clean, typeName);
    if (decl) {
      const rel = sourceRel(hit);
      if (!sourceRelIsUsable(rel)) {
        rec.notes.push(`resolved file ${hit} but the emitted path "${rel}" does not open; refusing to emit it`);
        hit = null;
      } else {
        const { members, notes } = scanMembers(raw, clean, decl.line, decl.kind, typeName);
        rec.resolved = true;
        rec.sourceFile = rel;
        rec.resolveMethod = 'file-field';
        rec.members = members;
        rec.notes.push(...notes);
        return rec;
      }
    } else {
      rec.notes.push(`${pf.label} resolved to ${path.basename(hit)} but that file does not declare ${typeName}; falling back to type-name search`);
      hit = null;
    }
  } else if (!fileField) {
    rec.notes.push(`no File:/Source:/源文件： field on page; resolved by type-name search`);
  }

  // type-name search
  const idx = buildTypeIndex().get(typeName);
  if (!idx || !idx.length) {
    rec.notes.push(`type-name search: no .cs file in the source tree declares ${typeName}`);
    return rec;
  }
  let cands = idx.filter((c) => sourceRelIsUsable(c.file));
  if (rec.namespace) {
    const nsFiltered = idx.filter((c) => namespaceMatches(c.ns, rec.namespace));
    if (nsFiltered.length) cands = nsFiltered.filter((c) => sourceRelIsUsable(c.file));
  }
  if (cands.length > 1) {
    rec.notes.push(`type-name search: ${cands.length} candidates (${cands.map((c) => c.file).join(' | ')}); refusing to guess`);
    return rec;
  }
  if (!cands.length) {
    rec.notes.push(`type-name search: every candidate path for ${typeName} is unusable; refusing to emit one`);
    return rec;
  }
  const c = cands[0];
  const raw = readSource(c.abs);
  const clean = cleanLines(raw);
  const decl = findTypeDecl(clean, typeName);
  if (!decl) {
    rec.notes.push(`type-name search: ${c.file} declares ${typeName} but the declaration line could not be re-found`);
    return rec;
  }
  const { members, notes } = scanMembers(raw, clean, decl.line, decl.kind, typeName);
  rec.resolved = true;
  rec.sourceFile = c.file;
  rec.resolveMethod = 'type-name-search';
  rec.members = members;
  rec.notes.push(...notes);
  return rec;
}

// ------------------------------------------------------------------- driver
function walkMd(dir, acc) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkMd(p, acc);
    else if (e.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}
const all = walkMd(bucketAbs, []).sort();
const pages = all.filter((p) => !/^_?index\.md$/i.test(path.basename(p)));
const skippedIndex = all.length - pages.length;
if (!pages.length) die(`no .md pages found under ${opts.bucket}`);

const records = pages.map((p) => extract(path.relative(REPO, p), p));

const totals = {
  totalPages: records.length,
  skippedIndexPages: skippedIndex,
  resolved: records.filter((r) => r.resolved).length,
  unresolved: records.filter((r) => !r.resolved).length,
  resolvedButZeroMembers: records.filter((r) => r.resolved && r.members.length === 0).length,
  byMethod: {
    'file-field': records.filter((r) => r.resolveMethod === 'file-field').length,
    'type-name-search': records.filter((r) => r.resolveMethod === 'type-name-search').length,
  },
  totalMembers: records.reduce((n, r) => n + r.members.length, 0),
};

const manifest = {
  tool: 'tools/_src-manifest.mjs',
  note: 'Mechanical evidence only: member / signature / file:line / access. No prose, no page bodies.',
  bucket: path.relative(REPO, bucketAbs).split(path.sep).join('/'),
  version: opts.version,
  sourceRoots: ROOTS,
  totals,
  records,
};

fs.mkdirSync(path.dirname(outAbs), { recursive: true });
fs.writeFileSync(outAbs, JSON.stringify(manifest, null, 1), 'utf8');

process.stdout.write(
  `bucket            ${manifest.bucket}\n` +
  `version           ${manifest.version}\n` +
  `sourceRoots       ${ROOTS.join('\n                   ')}\n` +
  `total pages       ${totals.totalPages}   (index pages skipped: ${totals.skippedIndexPages})\n` +
  `resolved true     ${totals.resolved}\n` +
  `resolved false    ${totals.unresolved}\n` +
  `resolved, 0 memb  ${totals.resolvedButZeroMembers}\n` +
  `  file-field      ${totals.byMethod['file-field']}\n` +
  `  type-name-search${String(totals.byMethod['type-name-search']).padStart(6)}\n` +
  `total members     ${totals.totalMembers}\n` +
  `manifest          ${path.relative(REPO, outAbs).split(path.sep).join('/')}\n`
);