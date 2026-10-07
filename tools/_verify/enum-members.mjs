// Member enumerator for bucket-listing work.
// Counts DECLARED members of a single C# type, and prints each one with its line number
// and declaration text, so the count can be checked line by line against the source.
//
// Convention (stated explicitly, because the divergence being investigated is exactly
// this): a MEMBER is one of
//   enum | delegate | const | field | property | constructor | method
// that is DECLARED in the type's own body, at any access level
// (public / internal / protected / private / none).
// Explicitly NOT counted — and these are the axes the divergence lives on:
//   * inherited members (declared in a base type)
//   * using directives, namespace, attributes, comments
//   * local variables and parameters inside method bodies
//   * compiler-generated members
//
// Usage: node tools/_verify/enum-members.mjs <source.cs> [More.cs ...]
//        node tools/_verify/enum-members.mjs --json <source.cs> ...
import fs from 'node:fs';

const argv = process.argv.slice(2);
const asJson = argv[0] === '--json';
const files = asJson ? argv.slice(1) : argv;

const DECL = /^\s*(?:\[[^\]]*\]\s*)*(public|internal|protected|private)?\s*(static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|async\s+|extern\s+|unsafe\s+|partial\s+|new\s+|readonly\s+|const\s+|volatile\s+)*/;

// does the next meaningful line open an accessor body?
function nextStartsWithBrace(lines, i) {
  for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
    const t = lines[j].replace(/\t/g, '    ').trim();
    if (!t || t.startsWith('//')) continue;
    return t.startsWith('{');
  }
  return false;
}

// NB: tally with a Map, not a plain object — the key "constructor" collides with
// Object.prototype.constructor on a plain object and silently corrupts the count.
function tally(list) {
  const m = new Map();
  for (const x of list) m.set(x.kind, (m.get(x.kind) || 0) + 1);
  return Object.fromEntries(m);
}

function classify(line) {
  const t = line.trim();
  if (!t || t.startsWith('//') || t.startsWith('/*') || t.startsWith('*')) return null;
  // enum
  if (/^(?:public |internal |protected |private )?enum\s+\w+/.test(t)) return { kind: 'enum', name: t.match(/enum\s+(\w+)/)[1] };
  // delegate
  if (/^(?:public |internal |protected |private )?delegate\s/.test(t)) {
    const m = t.match(/delegate\s+[^(]*?\b(\w+)\s*\(/);
    return { kind: 'delegate', name: m ? m[1] : t };
  }
  // const
  const cm = t.match(/^(?:public |internal |protected |private )?(?:static\s+)?const\s+[\w<>,\[\]\.]+\s+(\w+)/);
  if (cm) return { kind: 'const', name: cm[1] };
  return null;
}

// full member scan with brace-depth awareness so we only take depth-1 declarations
function scan(file) {
  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split(/\r?\n/);
  const out = [];
  // locate the top-level type declaration(s)
  let depth = 0, started = false, header = null;
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const l = raw.replace(/\t/g, '    ').trim();
    if (l.startsWith('//') || l.startsWith('/*') || l.startsWith('*')) continue;

    if (!header) {
      const m = l.match(/^(?:public |internal |protected |private )?(?:sealed |abstract |static |partial )*(class|struct|interface|record)\s+(\w+)/);
      if (m) header = { name: m[2], line: i + 1, kind: m[1] };
      continue;                       // usings + namespace + attributes before the type
    }
    if (depth === 0) {
      if (l === '{') { depth = 1; continue; }
      continue;                       // base list / where clause
    }

    const c = classify(l);
    if (c) { out.push({ line: i + 1, ...c, decl: l }); continue; }

    if (depth === 1 && DECL.test(l)) {
      const mods = '(?:public |internal |protected |private )?(?:static\\s+|virtual\\s+|override\\s+|abstract\\s+|async\\s+|extern\\s+|unsafe\\s+|new\\s+|readonly\\s+|volatile\\s+)*';
      // TN must allow whitespace INSIDE a tuple type, e.g. (SizePolicy, SizePolicy).
      const TN = '[\\w<>,\\[\\]\\.\\?()]+(?:,[ \\t]+[\\w<>,\\[\\]\\.\\?()]+)*';
      const T = '(' + TN + ')';
      const pm = l.match(new RegExp('^' + mods + T + '\\s+(\\w+)\\s*(=>|\\{)'));
      const pm2 = l.match(new RegExp('^' + mods + T + '\\s+(\\w+)\\s*$'));
      const fm = l.match(new RegExp('^' + mods + T + '\\s+(\\w+)\\s*(=[^=]|;)'));
      const call = l.match(new RegExp('^' + mods + '(?:' + TN + '\\s+)?(\\w+)\\s*\\('));
      const KW = new Set(['public', 'internal', 'protected', 'private', 'static', 'virtual', 'override',
        'abstract', 'sealed', 'new', 'readonly', 'const', 'partial', 'async', 'extern', 'unsafe',
        'volatile', 'event', 'delegate', 'get', 'set', 'if', 'return', 'base', 'this', 'value']);

      if (call && KW.has(call[1])) {
        // A capture slipped through as a name (e.g. a tuple-typed field where the
        // "(" of the tuple looks like an argument list). Fall through to the
        // field rule, which matches the same line as `<type> <name>;`.
        if (fm) out.push({ line: i + 1, kind: 'field', name: fm[2], decl: l });
      }
      else if (call && call[1] === header.name) { out.push({ line: i + 1, kind: 'constructor', name: call[1], decl: l }); }
      else if (pm) { out.push({ line: i + 1, kind: 'property', name: pm[2], decl: l }); }
      else if (pm2 && nextStartsWithBrace(lines, i)) { out.push({ line: i + 1, kind: 'property', name: pm2[2], decl: l }); }
      else if (call) { out.push({ line: i + 1, kind: 'method', name: call[1], decl: l }); }
      else if (fm) { out.push({ line: i + 1, kind: 'field', name: fm[2], decl: l }); }
    }
    // track depth (strip strings/chars crudely)
    for (const ch of raw) {
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
    }
    if (depth < 1) { /* left the type body */ }
  }
  return { file, header, members: out };
}

const results = files.map(scan);
if (asJson) {
  console.log(JSON.stringify(results.map(r => ({
    file: r.file.split('/').pop(),
    type: r.header ? r.header.name : null,
    typeLine: r.header ? r.header.line : null,
    total: r.members.length,
    byKind: tally(r.members),
  })), null, 1));
} else {
  for (const r of results) {
    console.log(`\n=== ${r.file.split('/').pop()}  (type ${r.header ? r.header.name : '?'} at line ${r.header ? r.header.line : '?'})`);
    for (const m of r.members) console.log(String(m.line).padStart(5) + `  [${m.kind.padEnd(11)}] ${m.name.padEnd(28)} ${m.decl.slice(0, 78)}`);
    const byKind = tally(r.members);
    console.log(`  TOTAL = ${r.members.length}   ${JSON.stringify(byKind)}`);
  }
}
