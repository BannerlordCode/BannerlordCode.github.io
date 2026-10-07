// nav-Q-compare.mjs —— 重复页对比：campaign-event-system vs campaign-events（zh+en）
// 只读。产出逐项数字：体积/行数/节数/成员条目/引用核源/示例可编译性/断链。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const CONTENT = path.join(ROOT, 'content');

const FILES = [
  'content/v1.3.15/zh/architecture/campaign-event-system.md',
  'content/v1.3.15/zh/architecture/campaign-events.md',
  'content/v1.3.15/en/architecture/campaign-event-system.md',
  'content/v1.3.15/en/architecture/campaign-events.md',
];

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!e.startsWith('.') && e.name !== 'public') walk(p, acc); }
    else if (e.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function fileToRoute(rel) {
  const dir = path.posix.dirname(rel);
  const base = path.posix.basename(rel);
  if (base === '_index.md') return dir + '/';
  return rel.replace(/\.md$/, '/');
}

const allRoutes = new Set(
  walk(CONTENT).map((f) => fileToRoute(path.relative(CONTENT, f).replace(/\\/g, '/')))
);

const linkRe = /\[([^\]]*)\]\(([^)\s]+)\)/g;
// 引用核源模式：X.cs:N 或 X.cs:L-C
const refRe = /([\w.]+\.cs):(\d+)(?:-(\d+))?/g;

function analyze(rel) {
  const abs = path.join(ROOT, rel);
  const txt = fs.readFileSync(abs, 'utf8');
  const lines = txt.split('\n');
  const bytes = fs.statSync(abs).size;
  const h2 = [], h3 = [];
  let inCode = false, codeBlocks = 0, codeLangs = {};
  let listItems = 0;
  const memberEntries = [];   // 成员/条目：以 - 开头且含链接或代码标识符的行
  for (const l of lines) {
    if (/^```/.test(l)) {
      if (!inCode) { const lang = l.slice(3).trim(); codeLangs[lang || '(none)'] = (codeLangs[lang || '(none)'] || 0) + 1; }
      inCode = !inCode; if (!inCode) codeBlocks++;
      continue;
    }
    if (inCode) continue;
    let m;
    if ((m = /^##\s+(.+)/.exec(l))) h2.push(m[1].trim());
    else if ((m = /^###\s+(+.+)/.exec(l))) h3.push(m[1].trim());
    else if (/^\s*[-*]\s+/.test(l)) { listItems++; memberEntries.push(l.trim()); }
  }
  // 链接 + URL 模式解析
  const route = fileToRoute(rel);
  const links = [];
  let m;
  while ((m = linkRe.exec(txt))) {
    const href = m[2].split(/\s/)[0];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) continue;
    links.push({ href, text: m[1] });
  }
  const broken = [];
  for (const { href, text } of links) {
    const h = href.split('#')[0];
    if (!h) continue;
    let r;
    if (h.startsWith('/')) r = h.replace(/^\//, '');
    else {
      const base = route.endsWith('/') ? route : route + '/';
      r = path.posix.normalize(path.posix.join(base, h)).replace(/^\//, '');
    }
    if (!allRoutes.has(r)) broken.push({ href, text, resolved: r });
  }
  // 引用核源：X.cs:N —— 检查文件是否存在、行号是否越界
  const refs = [];
  let rm;
  const refTxt = txt.replace(/```[\s\S]*?```/g, '');   // 排除代码块内的伪引用
  while ((rm = refTxt.exec(refTxt))) {
    const file = rm[1], ln = parseInt(rm[2], 10), ln2 = rm[3] ? parseInt(rm[3], 10) : ln;
    refs.push({ file, ln, ln2 });
  }
  const refStats = { total: refs.length, filesFound: 0, filesMissing: 0, outOfBounds: 0, missingFiles: new Set(), oobExamples: [] };
  const seen = new Set();
  for (const r of refs) {
    const key = r.file + ':' + r.ln;
    if (seen.has(key)) continue;
    seen.add(key);
    // 在仓库里找该 .cs（限定在 src/ 或任意位置）
    const candidates = [];
    function findCs(dir) {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) { if (!e.startsWith('.') && e.name !== 'node_modules' && e.name !== 'public') findCs(p); }
        else if (e.name === r.file) candidates.push(p);
      }
    }
    try { findCs(ROOT); } catch {}
    if (!candidates.length) { refStats.filesMissing++; refStats.missingFiles.add(r.file); continue; }
    refStats.filesFound++;
    // 行号越界检查（取第一个候选）
    const src = fs.readFileSync(candidates[0], 'utf8');
    const totalLines = src.split('\n').length;
    if (r.ln > totalLines || r.ln2 > totalLines) {
      refStats.outOfBounds++;
      if (refStats.oobExamples.length < 5) refStats.oobExamples.push(`${r.file}:${r.ln}${r.ln2 !== r.ln ? '-' + r.ln2 : ''} (文件共 ${totalLines} 行)`);
    }
  }
  return { rel, lines: lines.length, bytes, h2, h3, listItems, memberEntries, codeBlocks, codeLangs, links, broken, refs: refStats };
}

const results = FILES.map(analyze);
for (const r of results) {
  console.log(`=== ${r.rel}`);
  console.log(`  lines=${r.lines} bytes=${r.bytes} H2=${r.h2.length} H3=${r.h3.length} listItems=${r.listItems} codeBlocks=${r.codeBlocks} codeLangs=${JSON.stringify(r.codeLangs)}`);
  console.log(`  links=${r.links.length} broken=${r.broken.length}`);
  if (r.broken.length) for (const b of r.broken) console.log(`    BROKEN: ${b.href} (from "${b.text}") -> ${b.resolved}`);
  console.log(`  refs: total=${r.refs.total} filesFound=${r.refs.filesFound} filesMissing=${r.refs.filesMissing} outOfBounds=${r.refs.outOfBounds}`);
  if (r.refs.missingFiles.size) console.log(`    missingFiles: ${[...r.refs.missingFiles].join(', ')}`);
  if (r.refs.oobExamples.length) console.log(`    oob: ${r.refs.oobExamples.join('; ')}`);
  console.log(`  H2: ${r.h2.join(' | ')}`);
  if (r.h3.length) console.log(`  H3: ${r.h3.join(' | ')}`);
}
