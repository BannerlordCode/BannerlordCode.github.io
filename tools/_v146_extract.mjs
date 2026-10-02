#!/usr/bin/env node
/**
 * _v146_extract.mjs — bannerlord-1.4.6 public type inventory, driven by the
 * canonical namespace -> bucket map.
 *
 * Authority for the tree layout: tools/_dir-map-canonical.json. The schemaVersion
 * this tool asserts is NOT hardcoded here: it is read from the artifact's own
 * `_parseContract` (see _dir_map_contract.mjs), so a v3->v5 bump does not
 * fail-close this tool.
 * Resolution order is the artifact's, verbatim:
 *   1. excludeNamespaces / excludeSuffixes / sourceTypoNamespaces -> hard skip, counted
 *   2. rules[] longest-prefix-wins, recording the matched prefix
 *   3. entryPointDirs override by exact simple type name, applied to EVERY type
 *   4. defaultDir, also recorded in `unmapped`
 *
 * Also asserts, and exits non-zero on violation:
 *   G1  every inventoried type has a source file that exists on disk
 *   G2  no compiler-synthesized type (<>c__DisplayClass1, <Foo>d__12) gets a page
 *   G3  no type name that is a C# primitive (delegate parse mis-alignment)
 *   G4  every bucket declared by the artifact ends up with >= 1 type
 *   G5  step 3 (entryPointDirs) actually fires; mission=5 and core=2 expected
 *
 * Idempotent: re-running overwrites the JSON with the same content.
 * Usage: node tools/_v146_extract.mjs
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'fs';
import { writeGuarded, mkdirGuarded, unlinkGuarded, rmdirGuarded } from './_v146_content_freeze.mjs';
import { assertDirMapSchemaExit } from './_dir_map_contract.mjs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const SRC_ROOT = 'C:/WorkSpace/Bannerlord/bannerlord-1.4.6';
const CANON_PATH = join(REPO, 'tools', '_dir-map-canonical.json');
const OUT_JSON = join(REPO, 'tools', '_v146_inventory.json');

/* ------------------------------------------------- canonical map (fail closed) */

const CANON = JSON.parse(readFileSync(CANON_PATH, 'utf8'));
assertDirMapSchemaExit(CANON, '_v146_extract');
for (const key of ['rules', 'entryPointDirs', 'excludeNamespaces', 'excludeSuffixes', 'defaultDir', 'sourceTypoNamespaces', 'parityGaps']) {
  if (CANON[key] === undefined) {
    console.error('FATAL: _dir-map-canonical.json is missing required key: ' + key);
    process.exit(1);
  }
}
const RULES_BY_LEN = [...CANON.rules].sort((a, b) => b.prefix.length - a.prefix.length);
const ENTRY_POINTS = Object.fromEntries(Object.entries(CANON.entryPointDirs).filter(([k]) => !k.startsWith('_')));

/** step 1 */
function exclusionReason(ns) {
  for (const p of CANON.excludeNamespaces) if (ns === p || ns.startsWith(p + '.')) return 'excludeNamespaces:' + p;
  for (const p of CANON.sourceTypoNamespaces) if (ns === p || ns.startsWith(p + '.')) return 'sourceTypoNamespaces:' + p;
  const segs = ns.split('.');
  for (const suf of CANON.excludeSuffixes) {
    for (const seg of segs) {
      if (seg === suf || seg.startsWith(suf + '.') || seg.startsWith(suf + '_')) return 'excludeSuffixes:' + suf;
    }
  }
  return null;
}

/** step 2 — longest prefix wins, segment aware */
function longestPrefixRule(ns) {
  for (const r of RULES_BY_LEN) if (ns === r.prefix || ns.startsWith(r.prefix + '.')) return r;
  return null;
}

/** steps 2-4 */
function resolveDir(ns, typeName) {
  const r = longestPrefixRule(ns);
  const step2Dir = r ? r.dir : CANON.defaultDir;
  const step2Rule = r ? r.prefix : null;
  let dir = step2Dir;
  let dirRule = r ? 'rule:' + r.prefix : 'defaultDir';
  const unmapped = !r;
  let overridden = false;
  if (Object.prototype.hasOwnProperty.call(ENTRY_POINTS, typeName)) {
    dir = ENTRY_POINTS[typeName];
    dirRule = 'entryPointDirs.' + typeName;
    overridden = true;
  }
  return { dir, dirRule, step2Dir, step2Rule, unmapped, overridden };
}

/* ------------------------------------------------------------ source mask */

/** Blank out comments and string/char literal contents, preserving offsets. */
function mask(src) {
  const out = new Array(src.length);
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const c2 = src[i + 1];
    if (c === '\n' || c === '\r') { out[i] = c; i++; continue; }
    if (c === '/' && c2 === '/') { while (i < n && src[i] !== '\n') { out[i] = src[i] === '\t' ? '\t' : ' '; i++; } continue; }
    if (c === '/' && c2 === '*') {
      out[i] = ' '; out[i + 1] = ' '; i += 2;
      while (i < n && !(src[i] === '*' && src[i + 1] === '/')) { out[i] = src[i] === '\n' ? '\n' : ' '; i++; }
      if (i < n) { out[i] = ' '; out[i + 1] = ' '; i += 2; }
      continue;
    }
    if (c === '@' && c2 === '"') {
      out[i] = '@'; out[i + 1] = '"'; i += 2;
      while (i < n) {
        if (src[i] === '"' && src[i + 1] === '"') { out[i] = ' '; out[i + 1] = ' '; i += 2; continue; }
        if (src[i] === '"') { out[i] = '"'; i++; break; }
        out[i] = src[i] === '\n' ? '\n' : ' '; i++;
      }
      continue;
    }
    if (c === '"') {
      out[i] = '"'; i++;
      while (i < n) {
        if (src[i] === '\\') { out[i] = ' '; out[i + 1] = src[i + 1] === '\n' ? '\n' : ' '; i += 2; continue; }
        if (src[i] === '"') { out[i] = '"'; i++; break; }
        if (src[i] === '\n') break;
        out[i] = ' '; i++;
      }
      continue;
    }
    if (c === "'") {
      out[i] = "'"; i++;
      while (i < n) {
        if (src[i] === '\\') { out[i] = ' '; out[i + 1] = ' '; i += 2; continue; }
        if (src[i] === "'") { out[i] = "'"; i++; break; }
        if (src[i] === '\n') break;
        out[i] = ' '; i++;
      }
      continue;
    }
    out[i] = c; i++;
  }
  return out.join('');
}

/* ------------------------------------------------------------- type model */

const TYPE_RE =
  /^(?<mods>(?:(?:public|internal|private|protected|static|sealed|abstract|partial|readonly|unsafe|new|file)\s+)*)(?<kind>class|struct|interface|enum)\s+(?<name>[A-Za-z_]\w*)\s*(?<generics><[^{;]*?>)?\s*(?<rest>[^;{]*)/;
// A delegate's identifier FOLLOWS its return type. Greedy tail so the captured
// name is the LAST identifier before '(', not the return type.
const DELEGATE_RE =
  /^(?<mods>(?:(?:public|internal|private|protected|static|sealed|abstract|partial|readonly|unsafe|new)\s+)*)delegate\s+(?:<[^<>]*>\s*)?[A-Za-z_][\w<>,\[\]\.\?]*\s+(?<name>[A-Za-z_]\w*)\s*(?<generics><[^{;]*?>)?\s*\(/;

const MOD_RE = /^(?:public|internal|private|protected|static|sealed|abstract|partial|readonly|unsafe|new|file)\s+/;

function normalizeSig(line) {
  return line
    .replace(/\s+/g, ' ')
    .replace(/\s*([,(\[\]<>.])\s*/g, '$1')
    .replace(/\(\s*\)/g, '()')
    .replace(/,(?=[^\s])/g, ', ')
    .replace(/<>/g, '<>')
    .trim();
}

function splitBaseList(rest) {
  const colon = rest.indexOf(':');
  if (colon < 0) return [];
  let tail = rest.slice(colon + 1);
  const w = tail.search(/\bwhere\b/);
  if (w >= 0) tail = tail.slice(0, w);
  const parts = [];
  let depth = 0;
  let cur = '';
  for (const ch of tail) {
    if (ch === '<' || ch === '(') depth++;
    if (ch === '>' || ch === ')') depth--;
    if (ch === ',' && depth === 0) { parts.push(cur); cur = ''; } else cur += ch;
  }
  if (cur.trim()) parts.push(cur);
  return parts.map((p) => p.trim().replace(/\s+/g, ' ')).filter(Boolean);
}

const NAMEISH = /^[A-Za-z_<>,.\[\]?\s]+$/;

function readMemberSignature(text) {
  let s = text;
  const brace = s.indexOf('{');
  if (brace >= 0) s = s.slice(0, brace);
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(' || ch === '<' || ch === '[') depth++;
    else if (ch === ')' || ch === '>' || ch === ']') depth--;
    else if (ch === '=' && depth === 0) { s = s.slice(0, i); break; }
  }
  s = s.replace(/\s+/g, ' ').trim();
  if (!s) return null;
  if (s.startsWith('return ')) return null;
  if (/^(if|for|foreach|while|switch|case|do|try|catch|finally|throw|break|continue|lock|using|yield|new)\b/.test(s)) return null;
  if (s.endsWith(':')) s = s.slice(0, -1).trim();
  if (/^(get|set|add|remove|init|unsafe|checked|unchecked|fixed|where)\b/.test(s)) return null;
  return s || null;
}

function classifyMember(sig, typeName) {
  if (/\bevent\b/.test(sig)) return 'event';
  if (/\boperator\b/.test(sig)) return 'operator';
  if (/\bthis\s*\[/.test(sig)) return 'indexer';
  const bare = sig.replace(/^(?:(?:public|protected|private|internal|static|sealed|abstract|partial|readonly|unsafe|new|extern|virtual|override|async)\s+)+/, '');
  if (new RegExp('^~?' + typeName + '\\s*(?:<[^>]*>)?\\s*\\(').test(bare)) return bare.startsWith('~') ? 'destructor' : 'constructor';
  if (bare.includes('(')) return 'method';
  if (/\bdelegate\b/.test(sig)) return 'delegate';
  if (/\s[A-Za-z_]\w*(\s*<[^>]*>)?\s*$/.test(sig)) return 'field';
  return null;
}

/* --------------------------------------------------------------- scanning */

function findTypeEnd(lines, startLine) {
  let depth = 0;
  let seen = 0;
  for (let i = startLine; i < lines.length; i++) {
    for (const ch of lines[i]) {
      if (ch === '{') { depth++; seen++; }
      else if (ch === '}') { depth--; if (seen > 0 && depth === 0) return i; }
    }
  }
  return lines.length;
}

function dedupeMembers(members) {
  const seen = new Set();
  const out = [];
  for (const m of members) {
    const key = m.kind + '|' + m.signature;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(m);
  }
  return out;
}

function parseFile(absPath, moduleDir) {
  const raw = readFileSync(absPath, 'utf8');
  const masked = mask(raw);
  const lines = masked.split('\n');

  let ns = null;
  let nsLine = -1;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s*namespace\s+([A-Za-z_][\w.]*)/);
    if (m) { ns = m[1]; nsLine = i; break; }
  }
  if (!ns) return { ns: null, types: [] };

  const depthAt = new Array(lines.length);
  let depth = 0;
  for (let i = 0; i < lines.length; i++) {
    depthAt[i] = depth;
    for (const ch of lines[i]) {
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
    }
  }
  const NS_DEPTH = depthAt[nsLine] + 1;

  const types = [];
  const stack = [];

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed || trimmed.startsWith('//')) continue;
    const d = depthAt[i];
    // A lone `{` opens the body we are already inside; it must not pop the type.
    if (trimmed !== '{') {
      while (stack.length && d <= stack[stack.length - 1].depth) stack.pop();
    }

    let m = TYPE_RE.exec(trimmed);
    if (!m) m = DELEGATE_RE.exec(trimmed);
    if (!m) continue;
    const mods = m.groups.mods.trim();
    const head = mods || m.groups.kind || 'delegate';
    if (!/^(?:public|internal|private|protected)$/.test(head) && !mods) continue;
    if (d !== NS_DEPTH && !(stack.length && d === stack[stack.length - 1].depth + 1)) continue;
    // anonymous delegate: `public delegate void (T obj);`
    if ((m.groups.kind || 'delegate') === 'delegate' && /^\s*\(/.test(m.groups.rest || '')) continue;

    const kindWord = m.groups.kind || 'delegate';
    const kind = kindWord === 'class' ? 'class' : kindWord === 'struct' ? 'struct' : kindWord === 'interface' ? 'interface' : kindWord === 'enum' ? 'enum' : 'delegate';
    const name = m.groups.name;
    const generics = (m.groups.generics || '').replace(/\s+/g, '');

    let declParts = [trimmed];
    let j = i;
    let guard = 0;
    while (guard++ < 12) {
      const acc = declParts.join(' ');
      if (acc.includes('{') || acc.includes(';') || acc.includes('=>')) break;
      j++;
      if (j >= lines.length) break;
      declParts.push(lines[j].trim());
    }
    const declRaw = declParts.join(' ').replace(/\s+/g, ' ').trim();
    const bases = splitBaseList(m.groups.rest || '');
    const modifiers = mods.split(/\s+/).filter(Boolean);

    const entry = {
      name,
      generics,
      kind,
      namespace: ns,
      module: moduleDir,
      file: relative(SRC_ROOT, absPath).replace(/\\/g, '/'),
      decl: normalizeSig(declRaw.replace(/\s*\{.*$/, '').replace(/;$/, '')),
      modifiers,
      bases,
      isAbstract: modifiers.includes('abstract'),
      isSealed: modifiers.includes('sealed'),
      isStatic: modifiers.includes('static'),
      accessibility: modifiers.find((x) => ['public', 'internal', 'private', 'protected'].includes(x)) || 'private',
      line: i + 1,
      members: [],
      nestedPublic: 0,
      nestedAll: 0,
      parent: null,
    };
    types.push(entry);
    stack.push({ name, depth: d, entry, line: i });
  }

  const top = types.filter((t) => depthAt[t.line - 1] === NS_DEPTH);
  for (const t of top) {
    const memberDepth = depthAt[t.line - 1] + 1;
    const end = findTypeEnd(lines, t.line);
    t.lineEnd = end;
    for (let i = t.line + 1; i < end; i++) {
      const trimmed = lines[i].trim();
      if (!trimmed || trimmed.startsWith('//')) continue;
      if (depthAt[i] !== memberDepth) continue;

      if (t.kind === 'enum') {
        const em = /^([A-Za-z_]\w*)\s*(=\s*[^,]+)?\s*,?$/.exec(trimmed);
        if (em) t.members.push({ kind: 'enum', signature: normalizeSig(em[1] + (em[2] ? ' =' + em[2] : '')), line: i + 1 });
        continue;
      }

      let text = trimmed;
      let k = i;
      let guard = 0;
      while (guard++ < 10 && !/[;{]/.test(text) && k + 1 < end) { k++; text += ' ' + lines[k].trim(); }
      const hasBody = text.includes('{') && !text.slice(0, text.indexOf('{')).includes('(');
      const sig = readMemberSignature(text);
      if (!sig) continue;
      if (t.kind !== 'interface' && t.kind !== 'delegate') {
        const firstWord = sig.split(/\s+/)[0];
        if (firstWord !== 'public' && firstWord !== 'protected') continue;
      }
      const cat = hasBody
        ? (/\bevent\b/.test(sig) ? 'event' : /\bthis\s*\[/.test(sig) ? 'indexer' : 'property')
        : classifyMember(sig, t.name);
      if (!cat) continue;
      t.members.push({ kind: cat, signature: normalizeSig(sig), line: i + 1 });
    }

    for (const nt of types) {
      if (nt === t) continue;
      if (nt.line > t.line && nt.line <= t.lineEnd) {
        nt.parent = t.name;
        t.nestedAll++;
        if (nt.accessibility === 'public' || nt.accessibility === 'protected') {
          t.nestedPublic++;
          t.members.push({ kind: 'nested', signature: normalizeSig(nt.decl), line: nt.line });
        }
      }
    }
    t.members = dedupeMembers(t.members);
  }
  return { ns, types };
}

/* ------------------------------------------------------------------ walk */

function walkCs(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'Properties' || e.name === 'obj' || e.name === 'bin') continue;
      walkCs(p, acc);
    } else if (e.name.endsWith('.cs')) acc.push(p);
  }
  return acc;
}

const moduleDirs = readdirSync(SRC_ROOT, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .sort();

const allTypes = [];
let scannedFiles = 0;
const parseErrors = [];

for (const moduleDir of moduleDirs) {
  let files = [];
  try { files = walkCs(join(SRC_ROOT, moduleDir)); } catch { files = []; }
  scannedFiles += files.length;
  for (const f of files) {
    try {
      for (const t of parseFile(f, moduleDir).types) allTypes.push(t);
    } catch (e) {
      parseErrors.push({ file: relative(SRC_ROOT, f).replace(/\\/g, '/'), error: String(e && e.message) });
    }
  }
}

/* ------------------------------------------------- classify: page vs count */

const pageTypes = [];
const excludedTypes = [];
const unmapped = [];
const nonPublic = [];
const synthetic = [];
const primitiveNamed = [];
const PRIMITIVES = /^(?:void|bool|object|string|int|uint|long|ulong|float|double|char|byte|sbyte|short|ushort|decimal|var|dynamic|T|Task|List)$/;
const SYNTHETIC = /^[<]|^__|__DisplayClass\d|^\d+$/;
let step2Routed = 0;
let step3Overrides = 0;
const missingSource = [];

for (const t of allTypes) {
  if (t.parent) continue;                       // nested -> documented on the parent page
  const xr = exclusionReason(t.namespace);      // step 1
  if (xr) { t.excludedBy = xr; excludedTypes.push(t); continue; }
  if (t.accessibility !== 'public') { nonPublic.push(t); continue; }
  if (t.namespace.startsWith('<')) { synthetic.push(t); continue; }
  if (t.name.startsWith('<')) { synthetic.push(t); continue; }
  if (SYNTHETIC.test(t.name)) { synthetic.push(t); continue; }
  if (PRIMITIVES.test(t.name)) { primitiveNamed.push(t); continue; }
  if (!existsSync(join(SRC_ROOT, t.file))) { missingSource.push(t); continue; }  // gate G1

  const d = resolveDir(t.namespace, t.name);   // steps 2-4
  t.dir = d.dir;
  t.dirRule = d.dirRule;
  t.step2Dir = d.step2Dir;
  t.step2Rule = d.step2Rule;
  t.overriddenByEntryPoint = d.overridden;
  if (d.step2Rule) step2Routed++;
  if (d.overridden) step3Overrides++;
  if (d.unmapped) {
    unmapped.push({ namespace: t.namespace, typeName: t.name, count: 0 });
    t.unmapped = true;
  }
  pageTypes.push(t);
}

/* ------------------------------------------------- arity, dedupe, slugs */

for (const t of pageTypes) {
  const g = (t.generics || '').replace(/^<|>$/g, '').trim();
  t.arity = g ? g.split(',').length : 0;
  t.genericParams = g;
}

const merged = [];
const byKey = new Map();
const dupMerges = [];
for (const t of pageTypes) {
  const k = t.namespace + '|' + t.name + '#' + t.arity;
  const prev = byKey.get(k);
  if (!prev) { byKey.set(k, t); merged.push(t); continue; }
  const keep = t.members.length > prev.members.length ? t : prev;
  const drop = keep === t ? prev : t;
  keep.members = dedupeMembers([...keep.members, ...drop.members]);
  keep.extraFiles = [...new Set([...(keep.extraFiles || []), drop.file])].filter((f) => f !== keep.file);
  if (byKey.get(k) === prev) byKey.set(k, keep);
  dupMerges.push({ namespace: t.namespace, name: t.name, arity: t.arity, keptFile: keep.file, mergedFile: drop.file });
}
let types = merged;

const groups = new Map();
for (const t of types) {
  const base = t.arity > 0 ? t.name + '__' + t.arity : t.name;
  const k = t.dir + '|' + base;
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push(t);
}
const collisions = [];
function nsSuffix(t) {
  if (t.namespace === t.module) return '';
  const rest = t.namespace.startsWith(t.module + '.') ? t.namespace.slice(t.module.length + 1) : t.namespace;
  return rest.replace(/^TaleWorlds\./, '');
}
for (const [k, list] of groups) {
  const sep = k.indexOf('|');
  const bucket = k.slice(0, sep);
  const base = k.slice(sep + 1);
  if (list.length === 1) { list[0].slug = base; continue; }
  collisions.push({ bucket, base, namespaces: list.map((x) => x.namespace) });
  let bare = list.filter((x) => x.namespace === x.module);
  if (bare.length !== 1) bare = [list.slice().sort((a, b) => a.namespace.length - b.namespace.length || a.namespace.localeCompare(b.namespace))[0]];
  for (const t of list) {
    if (t === bare[0]) { t.slug = base; continue; }
    t.slug = base + '__' + (nsSuffix(t) || t.namespace).replace(/\./g, '-');
  }
}

for (const t of types) {
  if (!t.slug) t.slug = t.name;
  const c = { property: 0, method: 0, field: 0, event: 0, enum: 0, ctor: 0, nested: 0, other: 0 };
  for (const m of t.members) {
    if (m.kind === 'property') c.property++;
    else if (m.kind === 'method' || m.kind === 'operator' || m.kind === 'indexer') c.method++;
    else if (m.kind === 'field' || m.kind === 'const') c.field++;
    else if (m.kind === 'event') c.event++;
    else if (m.kind === 'enum') c.enum++;
    else if (m.kind === 'constructor' || m.kind === 'destructor') c.ctor++;
    else if (m.kind === 'nested') c.nested++;
    else c.other++;
  }
  t.memberCounts = c;
  t.memberTotal = t.members.length;
  t.pagePath = `content/v1.4.6/{zh,en}/api/${t.dir}/${t.slug}.md`;
  delete t.line;
  delete t.lineEnd;
  void MOD_RE; void NAMEISH;
}
types.sort((a, b) => (a.dir === b.dir ? a.slug.localeCompare(b.slug, 'en') : a.dir.localeCompare(b.dir, 'en')));

/* -------------------------------------------------------- bucket summary */

const byBucket = {};
for (const t of types) {
  if (!byBucket[t.dir]) byBucket[t.dir] = { bucket: t.dir, count: 0, kinds: {}, rules: {} };
  const b = byBucket[t.dir];
  b.count++;
  b.kinds[t.kind] = (b.kinds[t.kind] || 0) + 1;
  b.rules[t.dirRule] = (b.rules[t.dirRule] || 0) + 1;
}
const unmappedSummary = {};
for (const u of unmapped) unmappedSummary[u.namespace] = (unmappedSummary[u.namespace] || 0) + 1;
const excludedByNamespace = {};
for (const t of excludedTypes) excludedByNamespace[t.excludedBy] = (excludedByNamespace[t.excludedBy] || 0) + 1;

/* ------------------------------------------------------------------ gates */

const failures = [];
const notes = [];

// G1: every paged type has a real source file
if (missingSource.length) failures.push('G1 missing source file: ' + missingSource.map((t) => t.name).join(', '));
// G2: no compiler-synthesized type got a page
const synthPages = types.filter((t) => SYNTHETIC.test(t.name) || t.name.startsWith('<'));
if (synthPages.length) failures.push('G2 synthetic types paged: ' + synthPages.map((t) => t.slug).join(', '));
// G3: no primitive-named type got a page
const primPages = types.filter((t) => PRIMITIVES.test(t.name));
if (primPages.length) failures.push('G3 primitive-named pages: ' + primPages.map((t) => t.slug).join(', '));
// G3b: no `__<return-type>` slugs
const badSuffix = types.filter((t) => t.slug.includes('__') && !/^[^_]*__(?:\d+|[A-Za-z][\w-]*)$/.test(t.slug));
if (badSuffix.length) failures.push('G3b malformed __ slugs: ' + badSuffix.map((t) => t.slug).join(', '));
// G3c: never synthesize ModuleManager
if (types.some((t) => t.name === 'ModuleManager')) failures.push('G3c a ModuleManager type was inventoried; it must not exist in any version');
// G4: every declared bucket is non-empty
const declaredBuckets = [...new Set([...CANON.rules.map((r) => r.dir), ...Object.values(ENTRY_POINTS), CANON.defaultDir])];
for (const b of declaredBuckets) {
  const n = byBucket[b] ? byBucket[b].count : 0;
  if (n === 0) failures.push('G4 declared bucket is EMPTY: ' + b);
}
// G5: step 3 must fire
const mission = byBucket.mission ? byBucket.mission.count : 0;
const core = byBucket.core ? byBucket.core.count : 0;
if (mission === 0) failures.push('G5 entryPointDirs did not fire: mission bucket is empty');
if (core === 0) failures.push('G5 entryPointDirs did not fire: core bucket is empty');
notes.push('G5 mission=' + mission + ' (expected 5) core=' + core + ' (expected 2)');
notes.push('step2 prefix-routed=' + step2Routed + ' step3 entryPoint overrides=' + step3Overrides + ' (of ' + types.length + ' paged types)');

/* ------------------------------------------------------------------ output */

const stats = {
  sourceRoot: SRC_ROOT,
  dirMap: 'tools/_dir-map-canonical.json schemaVersion=' + CANON.schemaVersion + ' version=' + CANON.version,
  moduleDirs: moduleDirs.length,
  // 口径：`find bannerlord-1.4.6 -name '*.cs'` 会多出 90 个，全是 Properties/AssemblyInfo.cs
  // （90/90，声明级 0 个类型），walkCs 按目录名跳过 Properties|obj|bin。
  // 所以 11295 vs 11385 的 90 个差额是**口径差**，不是 inventory 过期，别再当成 stale。
  csFilesScannedScope: 'bannerlord-1.4.6 全树，排除目录 Properties|obj|bin（= 90 个 Properties/AssemblyInfo.cs，0 个类型声明）。与 find 的 11385 差 90 个文件，差在口径而非时间。',
  csFilesScanned: scannedFiles,
  typesParsed: allTypes.length,
  pagedPublicTopLevelTypes: types.length,
  excludedByNamespaceRules: excludedTypes.length,
  excludedBreakdown: Object.fromEntries(Object.entries(excludedByNamespace).sort((a, b) => b[1] - a[1])),
  nonPublicTopLevel: nonPublic.length,
  syntheticSkipped: synthetic.length,
  primitiveNamedSkipped: primitiveNamed.length,
  unmappedNamespaces: unmappedSummary,
  step2RoutedTypes: step2Routed,
  step3OverrideTypes: step3Overrides,
  nameCollisions: collisions.length,
  collisionDetail: collisions,
  duplicateFileMerges: dupMerges.length,
  parseErrors,
  gates: { failures, notes },
  parityGaps: CANON.parityGaps,
};

writeGuarded(OUT_JSON, JSON.stringify({ stats, byBucket, types }, null, 1));

console.log('csFilesScanned        ', stats.csFilesScanned);
console.log('typesParsed           ', stats.typesParsed);
console.log('paged public types    ', stats.pagedPublicTopLevelTypes);
console.log('excluded by artifact  ', stats.excludedByNamespaceRules);
console.log('non-public top-level  ', stats.nonPublicTopLevel);
console.log('synthetic skipped     ', stats.syntheticSkipped);
console.log('primitive skipped     ', stats.primitiveNamedSkipped);
console.log('buckets               ', Object.keys(byBucket).length);
console.log('step2 / step3         ', step2Routed, '/', step3Overrides);
for (const n of notes) console.log('  note:', n);
if (unmapped.length) {
  console.log('UNMAPPED namespaces (fell through to defaultDir):');
  for (const [ns, n] of Object.entries(unmappedSummary).sort((a, b) => b[1] - a[1])) console.log('  ', n, ns);
}
console.log('bucket counts:');
for (const b of Object.values(byBucket).sort((a, b) => b.count - a.count)) console.log('  ', String(b.count).padStart(5), b.bucket);
if (failures.length) {
  console.error('\nGATE FAILURES:');
  for (const f of failures) console.error('  !! ' + f);
  process.exitCode = 1;
} else {
  console.log('\nALL GATES PASS');
}
console.log('wrote ' + relative(REPO, OUT_JSON));
