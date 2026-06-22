/* enhance-stubs.mjs - Add method/property signatures from source to stub files.
   Searches source files by TYPE NAME (not file name) to find declarations.
   Updates existing stub files with extracted signatures.
   Usage: node BannerlordCode.github.io/tools/enhance-stubs.mjs
   Run from repo root.
*/
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = 'bannerlord-1.3.15';
const DOCS = 'BannerlordCode.github.io/docs/v1.3.15';

/* Walk all .cs files and build type name -> file path index */
function buildTypeIndex() {
  const index = {};
  let count = 0;
  function walk(d) {
    let entries;
    try { entries = readdirSync(d); } catch { return; }
    for (const e of entries) {
      if (e === 'node_modules' || e.startsWith('.')) continue;
      const p = join(d, e);
      let stat;
      try { stat = statSync(p); } catch { continue; }
      if (stat.isDirectory()) { walk(p); continue; }
      if (!p.replace(/\\/g, '/').endsWith('.cs')) continue;
      count++;
      const raw = readFileSync(p, 'utf8');
      const nsM = raw.match(/namespace\s+([\w.]+)/);
      const ns = nsM ? nsM[1] : '';
      const decls = raw.matchAll(/\b(?:class|struct|enum|interface)\s+(\w+)/g);
      for (const m of decls) {
        const name = m[1];
        if (!index[name]) index[name] = { file: p.replace(/\\/g, '/'), ns };
      }
    }
  }
  walk(ROOT);
  console.error('Scanned ' + count + ' .cs files, indexed ' + Object.keys(index).length + ' types');
  return index;
}

/* Extract public method and property signatures from a source file */
function extractSignatures(filePath, typeName) {
  let raw;
  try { raw = readFileSync(filePath, 'utf8'); } catch { return null; }
  const nsM = raw.match(/namespace\s+([\w.]+)/);
  const ns = nsM ? nsM[1] : '(global)';
  const cleaned = raw.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/.*$/gm, ' ').replace(/\[([^\]]*)\]/g, ' ').replace(/\s+/g, ' ');

  const kindM = cleaned.match(new RegExp('\\b(class|struct|enum|interface)\\s+' + typeName + '\\b'));
  const kind = kindM ? kindM[1] : 'class';

  if (kind === 'enum') {
    const enumM = cleaned.match(new RegExp('enum\\s+' + typeName + '\\s*[:{][^}]*}'));
    if (enumM) {
      const vals = enumM[0].match(/\b(\w+)\s*[=,]/g);
      if (vals) return { ns, kind, enumValues: vals.map(v => v.replace(/[=,]/g, '').trim()).slice(0, 30) };
    }
    return { ns, kind, enumValues: [] };
  }

  const methods = [];
  const mre = /public\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|new\s+|async\s+)*(?:[\w.<>\[\],?\s]+?)\s+\w+\s*\(/g;
  let m;
  while ((m = mre.exec(cleaned))) {
    const seg = m[0];
    if (/\b(get|set|if|for|foreach|while|switch|return|new|using|lock|catch)\s*\($/.test(seg)) continue;
    let depth = 0, i = m.index + seg.length - 1, end = -1;
    for (; i < cleaned.length; i++) { if (cleaned[i] === '(') depth++; else if (cleaned[i] === ')') { depth--; if (depth === 0) { end = i; break; } } }
    if (end < 0) continue;
    const sig = cleaned.slice(m.index, end + 1).trim();
    if (/\bprivate\b/.test(sig)) continue;
    const nameM = sig.match(/\b(\w+)\s*\(/);
    if (nameM) methods.push({ sig, name: nameM[1] });
  }

  const props = [];
  const pre = /public\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|new\s+)*(?:[\w.<>\[\],?\s]+?)\s+\w+\s*\{/g;
  let p;
  while ((p = pre.exec(cleaned))) {
    const decl = cleaned.slice(p.index, p.index + 120).match(/public[^{=;]*/);
    if (!decl) continue;
    let s = decl[0].replace(/\s+/g, ' ').trim();
    if (/\bprivate\b/.test(s)) continue;
    if (/\b(class|struct|enum|interface)\b/.test(s)) continue;
    const nm = s.match(/(\w+)\s*$/);
    const win = cleaned.slice(p.index, p.index + 200);
    const hasSet = /\bset\b/.test(win) && !/private\s+set/.test(win);
    s = s + ' { get;' + (hasSet ? ' set;' : '') + ' }';
    if (nm) props.push({ sig: s, name: nm[1] });
  }

  return { ns, kind, methods: methods.slice(0, 20), props: props.slice(0, 20) };
}

/* Update a stub file with extracted signatures */
function enhanceStub(stubPath, typeName, sigData, lang) {
  if (!sigData) return false;
  const L = lang === 'zh';
  let content;
  try { content = readFileSync(stubPath, 'utf8'); } catch { return false; }

  /* Only enhance stubs that have the placeholder */
  if (!content.includes('auto-generated stub') && !content.includes('\u81ea\u52a8\u751f\u6210\u7684\u5b58\u6839')) return false;

  const kindMap = { class: L ? '\u7c7b class' : 'class', struct: L ? '\u7ed3\u6784\u4f53 struct' : 'struct', enum: L ? '\u679a\u4e3e enum' : 'enum', interface: L ? '\u63a5\u53e3 interface' : 'interface' };
  const kindName = kindMap[sigData.kind] || 'type';

  let insert = '';
  if (sigData.kind === 'enum' && sigData.enumValues && sigData.enumValues.length) {
    insert += '\n## ' + (L ? '\u679a\u4e3e\u503c' : 'Enum Values') + '\n\n';
    insert += '| Name |\n|------|\n';
    for (const v of sigData.enumValues) insert += '| `' + v + '` |\n';
    insert += '\n';
  } else {
    if (sigData.props && sigData.props.length) {
      insert += '\n## ' + (L ? '\u4e3b\u8981\u5c5e\u6027' : 'Key Properties') + '\n\n';
      insert += '| Name | Signature |\n|------|-----------|\n';
      for (const p of sigData.props) insert += '| `' + p.name + '` | `' + p.sig + '` |\n';
      insert += '\n';
    }
    if (sigData.methods && sigData.methods.length) {
      insert += '\n## ' + (L ? '\u4e3b\u8981\u65b9\u6cd5' : 'Key Methods') + '\n\n';
      for (const me of sigData.methods) {
        insert += '### ' + me.name + '\n\n```csharp\n' + me.sig + '\n```\n\n';
      }
    }
  }

  if (!insert) return false;

  /* Insert before See Also section */
  const seeAlsoMarker = L ? '## \u53c2\u89c1' : '## See Also';
  const idx = content.indexOf(seeAlsoMarker);
  if (idx < 0) return false;

  /* Update overview to include kind info */
  const kindLine = '**' + (L ? '\u7c7b\u578b' : 'Type') + ':** ' + kindName;
  content = content.replace(/\*\*(?:\u7c7b\u578b|Type):\*\*\s*\S+/m, kindLine);

  /* Insert signatures */
  content = content.slice(0, idx) + insert + content.slice(idx);
  writeFileSync(stubPath, content);
  return true;
}

/* Main */
const typeIndex = buildTypeIndex();
let enhanced = 0;
let notFound = 0;
let alreadyEnhanced = 0;

for (const lang of ['zh', 'en']) {
  const apiDir = join(DOCS, lang, 'api');
  const subdirs = readdirSync(apiDir).filter(e => {
    const p = join(apiDir, e);
    return existsSync(p) && statSync(p).isDirectory();
  });
  for (const subdir of subdirs) {
    const dir = join(apiDir, subdir);
    const files = readdirSync(dir).filter(f => f.endsWith('.md') && f !== 'index.md');
    for (const f of files) {
      const stubPath = join(dir, f);
      const content = readFileSync(stubPath, 'utf8');
      if (!content.includes('auto-generated stub') && !content.includes('\u81ea\u52a8\u751f\u6210\u7684\u5b58\u6839')) {
        alreadyEnhanced++;
        continue;
      }
      const typeName = f.replace('.md', '');
      const info = typeIndex[typeName];
      if (!info) { notFound++; continue; }
      const sigData = extractSignatures(info.file, typeName);
      if (enhanceStub(stubPath, typeName, sigData, lang)) enhanced++;
    }
  }
}

console.log('Enhanced: ' + enhanced);
console.log('Not found in source: ' + notFound);
console.log('Already enhanced (skipped): ' + alreadyEnhanced);
