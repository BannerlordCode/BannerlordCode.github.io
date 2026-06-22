// tools/class-version-diff.mjs
// Compare a class's public API surface across 1.3.0 / 1.3.15 / 1.4.5 source trees.
// Usage: node class-version-diff.mjs ClassName [ClassName2 ...]
// Output: markdown to stdout. Run from repo root (parent of bannerlord-* dirs).
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';

const ROOTS = {
  '1.3.0':  'bannerlord-1.3.0',
  '1.3.15': 'bannerlord-1.3.15',
  '1.4.5':  'bannerlord-1.4.5',
};

function walk(dir, acc = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return acc; }
  for (const e of entries) {
    if (e === 'node_modules' || e === '.git' || e.startsWith('.')) continue;
    const p = join(dir, e);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc);
    else if (e.endsWith('.cs')) acc.push(p.replace(/\\/g, '/'));
  }
  return acc;
}
const _cache = {};
function listCs(root) {
  if (_cache[root]) return _cache[root];
  return (_cache[root] = existsSync(root) ? walk(root) : []);
}
function findFile(root, className) {
  const target = '/' + className + '.cs';
  return listCs(root).find(p => p.endsWith(target)) || null;
}

// Strip comments + attributes, collapse whitespace to a single line-normalized form.
function clean(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/.*$/gm, ' ')
    .replace(/^\s*\[[^\]]*\]\s*$/gm, ' ')   // attribute-only lines
    .replace(/\[([^\]]*)\]/g, ' ')          // inline attrs
    .replace(/\s+/g, ' ');
}

function extractDecl(src) {
  const m = src.match(/(?:public|internal|abstract|sealed|static|partial|\s)*\b(class|struct|interface)\s+\w+(?:<[^>]*>)?(?:\s*:\s*[^{]*)?/);
  return m ? m[0].trim() : null;
}

const MOD = '(?:public|protected|internal|static|virtual|override|abstract|sealed|readonly|new|async|partial|extern|unsafe|volatile|const)';
const KW = ['get','set','value','void','if','for','foreach','while','switch','using','lock','return','catch','new','this','base','else','try','finally','throw','do','fixed','checked','unchecked','nameof','typeof','default','yield'];

// Skip private members: not moddable API, and decompiled 1.4.5 marks private
// visibility inconsistently, which would otherwise pollute cross-version counts.
function isPrivate(sig) { return /(^|\s)private(\s|$)/.test(sig); }

// Extract public API members. Returns Map key(name) -> { kind, sig }.
function extractMembers(src) {
  const members = new Map();
  let m;
  // block properties:  [mods] Type Name { get; ... }
  let re = new RegExp(MOD + '(?:\\s+' + MOD + ')*\\s+([\\w.<>\\[\\],?\\s]+?)\\s+(\\w+)\\s*\\{\\s*(get|set)', 'g');
  while ((m = re.exec(src))) {
    const name = m[2];
    if (KW.includes(name)) continue;
    members.set(name, { kind: 'property', sig: m[0].trim() });
  }
  // expression-bodied properties:  [mods] Type Name => expr;  (no '(' before =>)
  re = new RegExp(MOD + '(?:\\s+' + MOD + ')*\\s+([\\w.<>\\[\\],?\\s]+?)\\s+(\\w+)\\s*=>', 'g');
  while ((m = re.exec(src))) {
    const name = m[2];
    if (KW.includes(name)) continue;
    if (members.has(name)) continue;
    members.set(name, { kind: 'property', sig: m[0].trim() });
  }
  // methods:  [mods] Type Name(params)  -- capture up to matching ')'
  re = new RegExp(MOD + '(?:\\s+' + MOD + ')*\\s+([\\w.<>\\[\\],?\\s]+?)\\s+(\\w+)\\s*\\(', 'g');
  while ((m = re.exec(src))) {
    const name = m[2];
    if (KW.includes(name)) continue;
    if (members.has(name)) continue;
    let depth = 0, i = m.index + m[0].length - 1, end = -1;
    for (; i < src.length; i++) {
      if (src[i] === '(') depth++;
      else if (src[i] === ')') { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end < 0) continue;
    members.set(name, { kind: 'method', sig: src.slice(m.index, end + 1).trim() });
  }
  for (const k of [...members.keys()]) if (isPrivate(members.get(k).sig)) members.delete(k);
  return members;
}

function diffClass(name) {
  const versions = {};
  for (const [v, root] of Object.entries(ROOTS)) {
    const f = findFile(root, name);
    if (!f) { versions[v] = null; continue; }
    const raw = readFileSync(f, 'utf8');
    const c = clean(raw);
    versions[v] = { file: f, decl: extractDecl(c), members: extractMembers(c), lines: raw.split('\n').length };
  }
  return versions;
}

function nameSet(v) {
  if (!v) return new Set();
  return new Set([...v.members.keys()]);
}

function md(className) {
  const V = diffClass(className);
  const out = [];
  out.push('# ' + className + ' 跨版本对比 / Cross-Version Comparison\n');
  out.push('> 自动生成自源码 API 提取（`tools/class-version-diff.mjs`）。比较 1.3.0 / 1.3.15 / 1.4.5 的可访问成员签名（public/protected/internal，不含 private）。\n');
  out.push('## 源文件与声明 / Source files & declaration\n');
  out.push('| 版本 Version | 文件 File | 行数 Lines |');
  out.push('|------|------|------|');
  for (const v of ['1.3.0','1.3.15','1.4.5']) {
    const d = V[v];
    out.push('| ' + v + ' | ' + (d ? '`' + d.file + '`' : '—') + ' | ' + (d ? d.lines : '—') + ' |');
  }
  out.push('');
  out.push('**类声明 / Class declaration:**');
  for (const v of ['1.3.0','1.3.15','1.4.5']) {
    out.push('- **' + v + ':** `' + (V[v] ? (V[v].decl || '(未提取 not extracted)') : '不存在 not found') + '`');
  }
  out.push('');

  const s0 = nameSet(V['1.3.0']), s1 = nameSet(V['1.3.15']), s2 = nameSet(V['1.4.5']);
  out.push('## 成员数量 / Member counts\n');
  out.push('| 版本 Version | 成员数 Members (excl. private) |');
  out.push('|------|------|');
  for (const v of ['1.3.0','1.3.15','1.4.5']) out.push('| ' + v + ' | ' + nameSet(V[v]).size + ' |');
  out.push('');

  function diffSets(a, b) {
    return { added: [...b].filter(x => !a.has(x)), removed: [...a].filter(x => !b.has(x)) };
  }
  const d01 = diffSets(s0, s1);
  const d12 = diffSets(s1, s2);
  const fmt = arr => arr.length ? arr.map(x => '`' + x + '`').join(', ') : '无 none';

  out.push('## 1.3.0 → 1.3.15 变化 / Changes\n');
  out.push('**新增 Added (' + d01.added.length + '):** ' + fmt(d01.added) + '\n');
  out.push('**移除 Removed (' + d01.removed.length + '):** ' + fmt(d01.removed) + '\n');

  out.push('## 1.3.15 → 1.4.5 变化 / Changes\n');
  out.push('**新增 Added (' + d12.added.length + '):** ' + fmt(d12.added) + '\n');
  out.push('**移除 Removed (' + d12.removed.length + '):** ' + fmt(d12.removed) + '\n');

  // detailed signatures for changed members
  function sigBlock(title, names, versionObj) {
    if (!names.length || !versionObj) return [];
    const rows = names.filter(n => versionObj.members.has(n)).map(n => {
      const mm = versionObj.members.get(n);
      return '| `' + n + '` | ' + mm.kind + ' | `' + mm.sig + '` |';
    });
    if (!rows.length) return [];
    return ['### ' + title + '\n', '| 成员 Member | 类型 Kind | 签名 Signature |', '|------|------|------|', ...rows, ''];
  }
  out.push(...sigBlock('1.4.5 新增成员签名 / Added in 1.4.5', d12.added, V['1.4.5']));
  out.push(...sigBlock('1.4.5 移除成员签名 / Removed in 1.4.5 (存在于 1.3.15)', d12.removed, V['1.3.15']));

  return out.join('\n');
}

export { md, diffClass, nameSet, scanRank };

// scanRank(names): cheap delta per class, returns sorted array of {name, n15, n45, added, removed, churn}
function scanRank(names) {
  const rows = [];
  for (const name of names) {
    const V = diffClass(name);
    if (!V['1.3.15'] || !V['1.4.5']) continue;
    const s1 = nameSet(V['1.3.15']), s2 = nameSet(V['1.4.5']);
    const added = [...s2].filter(x => !s1.has(x));
    const removed = [...s1].filter(x => !s2.has(x));
    rows.push({ name, n15: s1.size, n45: s2.size, added, removed, churn: added.length + removed.length });
  }
  rows.sort((a, b) => b.churn - a.churn);
  return rows;
}

// CLI
// CLI guard
const isMain = process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('class-version-diff.mjs');
if (isMain) {
  const args = process.argv.slice(2);
  if (!args.length) { console.error('Usage: node class-version-diff.mjs ClassName [...]  |  --scan ClassA,ClassB,...'); process.exit(1); }
  if (args[0] === '--scan') {
    const names = (args[1] || '').split(',').map(s => s.trim()).filter(Boolean);
    const rows = scanRank(names);
    console.log('name\tn15\tn45\t+added\t-removed\tchurn');
    for (const r of rows) console.log(`${r.name}\t${r.n15}\t${r.n45}\t+${r.added.length}\t-${r.removed.length}\t${r.churn}\t+:${r.added.slice(0,6).join(';')}${r.added.length>6?'…':''} -:${r.removed.slice(0,4).join(';')}${r.removed.length>4?'…':''}`);
  } else {
    for (const c of args) {
      console.log(md(c));
      console.log('\n---\n');
    }
  }
}
