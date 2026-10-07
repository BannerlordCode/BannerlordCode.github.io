#!/usr/bin/env node
/**
 * tools/coverage-census.mjs — 只读普查脚本（read-only census）
 *
 * 扫描 C:/WorkSpace/Bannerlord/bannerlord-<ver>/ 下全部 *.cs，
 * 用正则/语法抽取所有 public 类型（class/interface/struct/enum/delegate，含嵌套 public 类型），
 * 与 C:/WorkSpace/Bannerlord/classes.json（25 条样本）按 namespace+name 交叉核对，
 * 输出：
 *   tools/_verify/types-<ver>.json  （机器可读）
 *   tools/_verify/types-<ver>.md    （人读摘要）
 *
 * 用法: node tools/coverage-census.mjs <ver>
 *   ver ∈ {1.3.0, 1.3.15, 1.4.5, 1.4.6, 1.4.7, 1.5.3}
 *
 * 只读约束：绝不写入 content/；只写 tools/_verify/。
 * 可复跑：输出文件不含时间戳，两次运行字节一致。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const VERSIONS = ['1.3.0', '1.3.15', '1.4.5', '1.4.6', '1.4.7', '1.5.3'];
const PARENT_DIR = 'C:/WorkSpace/Bannerlord';
const CLASSES_JSON = path.join(PARENT_DIR, 'classes.json');
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(REPO_ROOT, 'tools', '_verify');

// ---------------- 参数校验 ----------------
const ver = process.argv[2];
if (!VERSIONS.includes(ver)) {
  console.error(`用法: node tools/coverage-census.mjs <ver>`);
  console.error(`ver 必须是: ${VERSIONS.join(', ')}`);
  process.exit(1);
}
const sourceRoot = path.join(PARENT_DIR, `bannerlord-${ver}`);
if (!fs.existsSync(sourceRoot)) {
  console.error(`来源树不存在: ${sourceRoot}`);
  process.exit(1);
}

// ---------------- 字符串/注释掩码（保留位置与换行，避免干扰正则与括号配对） ----------------
function maskVerbatim(src, out, i) {
  // @"..." 或 @$"..." / @$"..."："" 是转义
  const n = src.length;
  out[i] = ' '; out[i + 1] = ' '; i += 2;
  while (i < n) {
    if (src[i] === '"') {
      if (src[i + 1] === '"') { out[i] = ' '; out[i + 1] = ' '; i += 2; continue; }
      out[i] = ' '; i += 1; break;
    }
    if (src[i] !== '\n') out[i] = ' ';
    i += 1;
  }
  return i;
}

function maskInterpolated(src, out, i) {
  // $"..." / @$"..." / $$"..."：花括号深度为 0 时的 " 才是结束引号
  const n = src.length;
  while (i < n && src[i] !== '"') { out[i] = ' '; i += 1; }
  out[i] = ' '; i += 1;
  let depth = 0;
  while (i < n) {
    const c = src[i];
    if (c === '"') {
      if (src[i + 1] === '"') { out[i] = ' '; out[i + 1] = ' '; i += 2; continue; }
      if (depth === 0) { out[i] = ' '; i += 1; break; }
      out[i] = ' '; i += 1; continue;
    }
    if (c === '{') { depth += 1; out[i] = ' '; i += 1; continue; }
    if (c === '}') { if (depth > 0) depth -= 1; out[i] = ' '; i += 1; continue; }
    if (c !== '\n') out[i] = ' ';
    i += 1;
  }
  return i;
}

function maskRegularString(src, out, i) {
  const n = src.length;
  out[i] = ' '; i += 1;
  while (i < n) {
    const c = src[i];
    if (c === '\\') {
      out[i] = ' ';
      if (i + 1 < n && src[i + 1] !== '\n') out[i + 1] = ' ';
      i += 2; continue;
    }
    if (c === '"') { out[i] = ' '; i += 1; break; }
    if (c !== '\n') out[i] = ' ';
    i += 1;
  }
  return i;
}

function maskChar(src, out, i) {
  const n = src.length;
  out[i] = ' '; i += 1;
  while (i < n) {
    const c = src[i];
    if (c === '\\') {
      out[i] = ' ';
      if (i + 1 < n) out[i + 1] = ' ';
      i += 2; continue;
    }
    if (c === "'") { out[i] = ' '; i += 1; break; }
    if (c !== '\n') out[i] = ' ';
    i += 1;
  }
  return i;
}

/** 把注释与字符串字面量替换为空格（保留换行与索引位置），返回等长掩码串 */
function maskNonCode(src) {
  const n = src.length;
  const out = new Array(n);
  let i = 0;
  while (i < n) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '/') {
      while (i < n && src[i] !== '\n') { out[i] = ' '; i += 1; }
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      out[i] = ' '; out[i + 1] = ' '; i += 2;
      while (i < n && !(src[i] === '*' && src[i + 1] === '/')) {
        if (src[i] !== '\n') out[i] = ' ';
        i += 1;
      }
      if (i < n) { out[i] = ' '; out[i + 1] = ' '; i += 2; }
      continue;
    }
    if (c === '@' && src[i + 1] === '"') { i = maskVerbatim(src, out, i); continue; }
    if (c === '$' && (src[i + 1] === '"' || (src[i + 1] === '@' && src[i + 2] === '"') || (src[i + 1] === '$' && src[i + 2] === '"'))) {
      i = maskInterpolated(src, out, i); continue;
    }
    if (c === '"') { i = maskRegularString(src, out, i); continue; }
    if (c === "'") { i = maskChar(src, out, i); continue; }
    out[i] = c; i += 1;
  }
  return out.join('');
}

// ---------------- 正则 ----------------
// public 类型声明：public [modifiers] (class|interface|struct|enum|delegate) Name
const TYPE_RE = /\bpublic\s+(?:(?:static|sealed|abstract|partial|unsafe|readonly|ref|file|new)\s+)*(class|interface|struct|enum|delegate)\s+([A-Za-z_][A-Za-z0-9_]*)/g;
// 文件级命名空间：namespace X;
const NS_FILE_RE = /\bnamespace\s+([A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)*)\s*;/g;
// 块命名空间：namespace X {
const NS_BLOCK_RE = /\bnamespace\s+([A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)*)\s*\{/g;

function blockRange(masked, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < masked.length; i++) {
    const c = masked[i];
    if (c === '{') depth += 1;
    else if (c === '}') { depth -= 1; if (depth === 0) return [openIdx, i]; }
  }
  return [openIdx, masked.length - 1];
}

/** 取包含 pos 的最内层命名空间（块命名空间取范围最小者；文件级命名空间优先） */
function namespaceFor(pos, fileNs, blocks) {
  if (fileNs) return fileNs;
  let best = null;
  for (const b of blocks) {
    if (pos >= b.start && pos <= b.end) {
      if (!best || b.end - b.start < best.end - best.start) best = b;
    }
  }
  return best ? best.ns : '';
}

function extractFile(absPath, relPath) {
  const src = fs.readFileSync(absPath, 'utf8');
  const masked = maskNonCode(src);
  let m;
  let fileNs = null;
  NS_FILE_RE.lastIndex = 0;
  while ((m = NS_FILE_RE.exec(masked))) fileNs = m[1];
  const blocks = [];
  NS_BLOCK_RE.lastIndex = 0;
  while ((m = NS_BLOCK_RE.exec(masked))) {
    const openIdx = m.index + m[0].length - 1;
    const [s, e] = blockRange(masked, openIdx);
    blocks.push({ ns: m[1], start: s, end: e });
  }
  const types = [];
  TYPE_RE.lastIndex = 0;
  while ((m = TYPE_RE.exec(masked))) {
    types.push({
      namespace: namespaceFor(m.index, fileNs, blocks),
      name: m[2],
      kind: m[1],
      file: relPath,
    });
  }
  return types;
}

// ---------------- 确定性递归遍历 ----------------
function walk(dir, acc) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.isFile() && e.name.endsWith('.cs')) acc.push(p);
  }
  return acc;
}

const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

// ---------------- 主流程 ----------------
const t0 = Date.now();
const files = walk(sourceRoot, []);
const fileCount = files.length;

let types = [];
let readErrors = 0;
for (const abs of files) {
  const rel = path.relative(sourceRoot, abs).split(path.sep).join('/');
  try {
    types.push(...extractFile(abs, rel));
  } catch {
    readErrors += 1;
  }
}
types.sort((a, b) =>
  cmp(a.namespace, b.namespace) || cmp(a.name, b.name) || cmp(a.file, b.file) || cmp(a.kind, b.kind));

const namespaces = [...new Set(types.map((t) => t.namespace))].sort(cmp);
const aKeys = new Set(types.map((t) => `${t.namespace}::${t.name}`));
const kindCounts = { class: 0, interface: 0, struct: 0, enum: 0, delegate: 0 };
for (const t of types) kindCounts[t.kind] += 1;

// ---------------- 来源 B：classes.json ----------------
const bEntries = JSON.parse(fs.readFileSync(CLASSES_JSON, 'utf8'));
const bKeys = new Set(bEntries.map((e) => `${e.namespace}::${e.className}`));

// ---------------- 交叉核对（按 namespace+name 匹配） ----------------
const inBnotA = bEntries
  .filter((e) => !aKeys.has(`${e.namespace}::${e.className}`))
  .map((e) => ({ namespace: e.namespace, name: e.className, file: e.file ?? null }));
const inAnotB = [...aKeys].filter((k) => !bKeys.has(k)).length;
const disagreementCount = inBnotA.length + inAnotB;

// ---------------- 输出 JSON ----------------
fs.mkdirSync(OUT_DIR, { recursive: true });
const jsonPath = path.join(OUT_DIR, `types-${ver}.json`);
const report = {
  version: ver,
  script: 'tools/coverage-census.mjs',
  sourceRoot,
  fileCount,
  readErrors,
  namespaces,
  types,
  sourceACount: types.length,
  uniqueTypeCount: aKeys.size,
  kindCounts,
  sourceBCount: bEntries.length,
  disagreements: inBnotA,
  sourceAOnlyCount: inAnotB,
  disagreementCount,
};
fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2) + '\n');

// ---------------- 输出 MD ----------------
const nsCounts = new Map();
for (const t of types) nsCounts.set(t.namespace, (nsCounts.get(t.namespace) ?? 0) + 1);
const nsRows = [...nsCounts.entries()].sort((a, b) => b[1] - a[1] || cmp(a[0], b[0]));

const findCmd = `find "${sourceRoot}" -name "*.cs" -type f | wc -l`;
const countB = `node -e "console.log(require('${CLASSES_JSON}').length)"`;
const readJson = (field) => `node -e "console.log(require('./tools/_verify/types-${ver}.json').${field})"`;

const md = [];
md.push(`# 类型普查 types-${ver}`);
md.push('');
md.push(`- 脚本：\`node tools/coverage-census.mjs ${ver}\`（只读，仅写 \`tools/_verify/\`）`);
md.push(`- 来源 A（正则抽取）：\`${sourceRoot}\` 下全部 \`*.cs\` 中的 public 类型（class/interface/struct/enum/delegate，含嵌套 public 类型）`);
md.push(`- 来源 B（classes.json）：\`${CLASSES_JSON}\`（${bEntries.length} 条样本）`);
md.push(`- 匹配规则：namespace + name`);
md.push('');
md.push('## 关键数字（每个数字附「量它的命令」）');
md.push('');
md.push('| 指标 | 值 | 量它的命令 |');
md.push('|---|---:|---|');
md.push(`| 扫描 .cs 文件数 | ${fileCount} | \`${findCmd}\` |`);
md.push(`| 来源 A public 类型声明总数 sourceACount | ${types.length} | \`${readJson('sourceACount')}\` |`);
md.push(`| 去重后 namespace+name 数 uniqueTypeCount | ${aKeys.size} | \`${readJson('uniqueTypeCount')}\` |`);
md.push(`| namespace 数 | ${namespaces.length} | \`node -e "console.log(require('./tools/_verify/types-${ver}.json').namespaces.length)"\` |`);
md.push(`| 来源 B 条目数 sourceBCount | ${bEntries.length} | \`${countB}\` |`);
md.push(`| 两来源不一致条目数 disagreementCount | ${disagreementCount} | \`${readJson('disagreementCount')}\` |`);
md.push(`| 读取失败文件数 | ${readErrors} | \`${readJson('readErrors')}\` |`);
md.push('');
md.push('### 按 kind 分解（来源 A）');
md.push('');
md.push('| kind | 数量 |');
md.push('|---|---:|');
for (const k of ['class', 'interface', 'struct', 'enum', 'delegate']) md.push(`| ${k} | ${kindCounts[k]} |`);
md.push('');
md.push('## 按 namespace 分组计数（来源 A，按类型数降序）');
md.push('');
md.push('| namespace | types |');
md.push('|---|---:|');
for (const [ns, c] of nsRows) md.push(`| ${ns === '' ? '(global)' : ns} | ${c} |`);
md.push('');
md.push('## 两来源不一致');
md.push('');
md.push(`不一致总数：**${disagreementCount}** = classes.json 有但来源 A 没有（${inBnotA.length} 条，全列于下）+ 来源 A 有但 classes.json 没有（${inAnotB} 条，仅报数量——classes.json 只有 ${bEntries.length} 条样本，不逐条列出）。`);
md.push('');
md.push(`### classes.json 有但来源 A 没有（${inBnotA.length} 条）`);
md.push('');
if (inBnotA.length === 0) {
  md.push('（无）');
} else {
  md.push('| namespace | name | classes.json 中的 file |');
  md.push('|---|---|---|');
  for (const e of inBnotA) md.push(`| ${e.namespace} | ${e.name} | ${e.file ?? ''} |`);
}
md.push('');
md.push(`### 来源 A 有但 classes.json 没有`);
md.push('');
md.push(`数量：**${inAnotB}** 条（仅报数量，不报全列）。`);
md.push('');
md.push('## 复现命令');
md.push('');
md.push('```bash');
md.push(`node tools/coverage-census.mjs ${ver}`);
md.push(findCmd);
md.push(countB);
md.push(readJson('sourceACount'));
md.push(readJson('disagreementCount'));
md.push('```');
md.push('');
const mdPath = path.join(OUT_DIR, `types-${ver}.md`);
fs.writeFileSync(mdPath, md.join('\n'));

// ---------------- stdout 摘要 ----------------
console.log(`== coverage-census ${ver} ==`);
console.log(`sourceRoot: ${sourceRoot}`);
console.log(`fileCount (来源A扫描的.cs文件数): ${fileCount}`);
console.log(`sourceACount (public类型声明总数): ${types.length}`);
console.log(`uniqueTypeCount (去重namespace+name): ${aKeys.size}`);
console.log(`namespaces: ${namespaces.length}`);
console.log(`kindCounts: ${JSON.stringify(kindCounts)}`);
console.log(`sourceBCount (classes.json条目数): ${bEntries.length}`);
console.log(`disagreements: classes.json有而来源A没有 ${inBnotA.length} 条; 来源A有而classes.json没有 ${inAnotB} 条(仅计数)`);
console.log(`disagreementCount: ${disagreementCount}`);
console.log(`readErrors: ${readErrors}`);
console.log(`输出: ${jsonPath}`);
console.log(`输出: ${mdPath}`);
console.log(`耗时: ${Date.now() - t0}ms`);
console.log('--- 量它的命令 ---');
console.log(findCmd);
console.log(countB);
console.log(readJson('sourceACount'));
console.log(readJson('disagreementCount'));
