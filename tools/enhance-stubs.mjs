/* enhance-stubs.mjs - Add method/property signatures from source to stub files.
   Searches source files by TYPE NAME (not file name) to find declarations.
   Updates existing stub files with extracted signatures.
   Usage: node tools/enhance-stubs.mjs [--ver 1.3.15] [--out content]
   Run from repo root.
*/
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { basename, dirname, join } from 'path';
import * as docFragments from './doc-fragments.mjs';
import { REPO_ROOT, getArg } from './lib/paths.mjs';

const VER = getArg('--ver', '1.3.15');
const OUT = getArg('--out', 'content');
const ROOT = join(REPO_ROOT, '..', 'bannerlord-' + VER).replace(/\\/g, '/');
const DOCS = join(REPO_ROOT, OUT, 'v' + VER);

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
  const declM = cleaned.match(new RegExp('((?:public|internal|sealed|abstract|static|partial|new)\\s+)*(class|struct|enum|interface)\\s+' + typeName + '(?:<[^>]*>)?(?:\\s*:\\s*[^\\{]*)?'));
  const decl = declM ? declM[0].trim() : `${kind} ${typeName}`;
  const baseM = decl.match(/:\s*([^\{]+)/);
  const base = baseM ? baseM[1].trim().split(',')[0].trim() : '';

  if (kind === 'enum') {
    const enumM = cleaned.match(new RegExp('enum\\s+' + typeName + '\\s*[:{][^}]*}'));
    if (enumM) {
      const vals = enumM[0].match(/\b(\w+)\s*[=,]/g);
      if (vals) return { ns, kind, decl, base, enumValues: vals.map(v => v.replace(/[=,]/g, '').trim()).slice(0, 30) };
    }
    return { ns, kind, decl, base, enumValues: [] };
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

  return { ns, kind, decl, base, methods: methods.slice(0, 20), props: props.slice(0, 20) };
}

function areaToCatalog(dir) {
  const mapping = {
    'campaign-ext': 'catalog-campaign',
    'campaign': 'catalog-campaign',
    'mission-ext': 'catalog-mountandblade',
    'mission': 'catalog-mountandblade',
    'core-extra': 'catalog-core',
    'core': 'catalog-core',
    'engine': 'catalog-engine',
    'save-system': 'catalog-save',
    'localization': 'catalog-localization',
    'gui': 'catalog-ui',
    'items': 'catalog-other',
    'viewmodel': 'catalog-ui',
  };
  return mapping[dir] || 'catalog';
}

function splitBreadcrumb(content) {
  const start = content.indexOf('<!-- BEGIN BREADCRUMB -->');
  const endMarker = '<!-- END BREADCRUMB -->';
  if (start < 0) return { breadcrumb: '', body: content };
  const end = content.indexOf(endMarker, start);
  if (end < 0) return { breadcrumb: '', body: content };
  const breadcrumb = content.slice(start, end + endMarker.length).trim();
  const body = content.slice(end + endMarker.length).replace(/^\s+/, '');
  return { breadcrumb, body };
}

function buildStubPage(stubPath, typeName, sigData, lang, breadcrumb) {
  const isZh = lang === 'zh';
  const dirName = basename(dirname(stubPath));
  const catalog = areaToCatalog(dirName);
  const kind = docFragments.kindOf(typeName);
  const overview = kind ? docFragments.kindOverview(typeName, kind, lang) : (isZh
    ? `\`${typeName}\` 位于 \`${sigData.ns}\`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。`
    : `\`${typeName}\` lives in \`${sigData.ns}\`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.`);
  const usage = kind ? docFragments.kindUsage(typeName, kind, lang) : docFragments.genericUsage(typeName, sigData.methods || [], lang);
  const lines = [];
  if (breadcrumb) lines.push(breadcrumb);
  lines.push(`# ${typeName}`);
  lines.push('');
  lines.push(`**${isZh ? '命名空间' : 'Namespace'}:** ${sigData.ns}`);
  lines.push(`**${isZh ? '模块' : 'Module'}:** ${docFragments.moduleFromNamespace(sigData.ns)}`);
  lines.push(`**${isZh ? '类型' : 'Type'}:** ${sigData.decl ? `\`${sigData.decl}\`` : docFragments.kindLabel(sigData.kind, lang)}`);
  if (sigData.base) lines.push(`**${isZh ? 'Base' : 'Base'}:** \`${sigData.base}\``);
  lines.push(`**${isZh ? '领域' : 'Area'}:** ${dirName}`);
  lines.push('');
  lines.push(`## ${isZh ? '概述' : 'Overview'}`);
  lines.push('');
  lines.push(overview);
  lines.push('');
  lines.push(`## ${isZh ? '心智模型' : 'Mental Model'}`);
  lines.push('');
  lines.push(docFragments.mentalModel(typeName, kind, sigData.ns, lang));
  lines.push('');
  lines.push(...docFragments.renderEnumTable(sigData.enumValues, lang));
  lines.push(...docFragments.renderPropertyTable(sigData.props, lang));
  lines.push(...docFragments.renderMethodBlocks(sigData.methods, lang));
  lines.push(`## ${isZh ? '使用示例' : 'Usage Example'}`);
  lines.push('');
  lines.push('```csharp');
  lines.push(usage);
  lines.push('```');
  lines.push('');
  lines.push(`## ${isZh ? '参见' : 'See Also'}`);
  lines.push('');
  lines.push(`- [${isZh ? '完整类目录' : 'Complete Class Catalog'}](../catalog)`);
  lines.push(`- [${isZh ? '本领域目录' : 'Area catalog'}](../${catalog})`);
  return lines.join('\n');
}

/* Update a stub file with extracted signatures */
function enhanceStub(stubPath, typeName, sigData, lang) {
  if (!sigData) return false;
  const L = lang === 'zh';
  let content;
  try { content = readFileSync(stubPath, 'utf8'); } catch { return false; }

  /* Only enhance stubs that have the placeholder */
  if (!content.includes('auto-generated stub') && !content.includes('\u81ea\u52a8\u751f\u6210\u7684\u5b58\u6839')) return false;

  const { breadcrumb } = splitBreadcrumb(content);
  const rebuilt = buildStubPage(stubPath, typeName, sigData, lang, breadcrumb);
  writeFileSync(stubPath, rebuilt + '\n');
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
