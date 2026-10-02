// tools/_v153_inventory.mjs — v1.5.3 public-type inventory scanner.
//
// 目录结构初稿工具（boss 明确授权）：只做「事实抽取 + 清单」，不写产品页正文。
// 正文生成在 gen-v153-stubs.mjs 里，那是另一件事。
//
// 扫描 bannerlord-1.5.3/*.cs，用正则抽取所有 public 类型（class/interface/struct/
// enum/delegate/record），输出 tools/_v153_inventory.json。幂等：同输入同输出。
//
// Usage: node tools/_v153_inventory.mjs [--src ../bannerlord-1.5.3] [--out tools/_v153_inventory.json]

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, resolve, sep, posix } from 'node:path';

const REPO_ROOT = resolve(import.meta.dirname, '..');

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const SRC = resolve(REPO_ROOT, arg('--src', '../bannerlord-1.5.3'));
const OUT = resolve(REPO_ROOT, arg('--out', 'tools/_v153_inventory.json'));

// ------------------------------------------------------- canonical dir mapping

// Boss-owned 权威映射；不硬编码副本，直接读 tools/_dir-map-canonical.json。
// FAIL-CLOSED：schemaVersion 不认就报错退出，绝不静默降级。
// 期望值不写死在这里 —— 从 artifact 自己的 _parseContract 读（_dir_map_contract.mjs）。
// entryPointDirs 在 v2 从 {dir:[slugArray]} 变成 {exactTypeName:dir}，当时只懂旧形状的
// 解析器静默丢掉了整个覆写层（mission/ 与 core/ 归零）且不报错——这是本断言存在的原因。
import { expectedDirMapSchema } from './_dir_map_contract.mjs';

const DIR_MAP_PATH = resolve(REPO_ROOT, 'tools/_dir-map-canonical.json');

function loadDirMap() {
  if (!existsSync(DIR_MAP_PATH)) {
    throw new Error('canonical 映射表缺失：' + DIR_MAP_PATH + '（拒绝回退到内置默认，避免映射与源码静默脱节）');
  }
  const m = JSON.parse(readFileSync(DIR_MAP_PATH, 'utf8'));
  const DIR_MAP_SCHEMA = expectedDirMapSchema(m);

  if (m.schemaVersion !== DIR_MAP_SCHEMA) {
    throw new Error(
      'canonical 映射表 schemaVersion=' + m.schemaVersion + '，本工具只认 ' + DIR_MAP_SCHEMA +
      '。FAIL-CLOSED：拒绝解析不认识的形状（否则会静默丢覆写层 / 噪声层）。先读 _parseContract 再改本工具。'
    );
  }
  if (!Array.isArray(m.rules) || m.rules.some((r) => typeof r?.prefix !== 'string' || typeof r?.dir !== 'string')) {
    throw new Error('canonical.rules 形状不认：必须是 {prefix:string, dir:string} 数组');
  }
  for (const [key, val] of Object.entries(m.entryPointDirs || {})) {
    if (key.startsWith('_')) continue;
    if (typeof val !== 'string') {
      throw new Error(
        'canonical.entryPointDirs["' + key + '"] 形状不认：v3 要求 {精确类型名: 桶字符串}，' +
        '收到 ' + (Array.isArray(val) ? '数组（v1 的 {dir:[slugArray]} 旧形状）' : typeof val) +
        '。FAIL-CLOSED 退出。'
      );
    }
  }
  for (const k of ['excludeNamespaces', 'excludeSuffixes', 'sourceTypoNamespaces']) {
    if (m[k] !== undefined && !Array.isArray(m[k])) {
      throw new Error('canonical.' + k + ' 形状不认：必须是字符串数组');
    }
  }
  if (typeof m.defaultDir !== 'string' || !m.defaultDir) {
    throw new Error('canonical.defaultDir 缺失或非字符串');
  }
  return m;
}

const DIR_MAP = loadDirMap();

// 前缀规则按前缀长度降序，最长前缀优先（CustomBattle 必须赢过 MountAndBlade）。
const PREFIX_RULES = [...(DIR_MAP.rules || [])]
  .filter((r) => r && r.prefix && r.dir)
  .map((r) => ({ ...r, len: r.prefix.length }))
  .sort((a, b) => b.len - a.len);

// entryPointDirs: 精确类型名 -> 桶，case-sensitive，在最长前缀之后套用；跳过 _ 开头的说明键。
const ENTRY_POINT = new Map();
for (const [typeName, dir] of Object.entries(DIR_MAP.entryPointDirs || {})) {
  if (typeName.startsWith('_') || typeof dir !== 'string' || !dir) continue;
  ENTRY_POINT.set(typeName, dir);
}

function dirFor(ns, typeName) {
  const epDir = ENTRY_POINT.get(typeName);
  if (epDir) return { dir: epDir, dirRule: 'entryPointDirs:' + typeName };
  for (const rule of PREFIX_RULES) {
    if (ns === rule.prefix || ns.startsWith(rule.prefix + '.')) {
      return { dir: rule.dir, dirRule: rule.prefix };
    }
  }
  return { dir: DIR_MAP.defaultDir || 'core-extra', dirRule: null };
}

// ------------------------------------------------------------------ noise filter
// 用 canonical 表里的共享噪声门，不再自己维护一份（避免三个版本三套过滤器）。
// resolutionOrder: 1. excludeNamespaces/excludeSuffixes → 2. rules → 3. entryPointDirs → 4. defaultDir

const EXCLUDE_NS = DIR_MAP.excludeNamespaces || [];
const EXCLUDE_SUFFIX = DIR_MAP.excludeSuffixes || [];
// TaleWorlds 自己源码里的拼写错误：按裁决排除，不得映射到 sandbox/storymode。
const TYPO_NS = new Set((DIR_MAP.sourceTypoNamespaces || []).map((s) => String(s).toLowerCase()));

function isNoiseNamespace(ns) {
  if (!ns) return true;
  if (TYPO_NS.has(ns.toLowerCase())) return true;
  if (EXCLUDE_NS.some((p) => ns === p || ns.startsWith(p + '.'))) return true;
  return ns.split('.').some((seg) => EXCLUDE_SUFFIX.some((x) => seg.endsWith(x)));
}

// ------------------------------------------------------------------- masking

// 把字符串 / 字符 / 注释内容替换成等长空格：保留 offset，让正则与下标都安全。
function mask(src) {
  const out = src.split('');
  const n = src.length;
  let i = 0;
  const blank = (from, to) => {
    for (let k = from; k < to; k++) if (out[k] !== '\n') out[k] = ' ';
  };
  while (i < n) {
    const c = src[i];
    const d = src[i + 1];
    if (c === '/' && d === '/') {
      let j = i;
      while (j < n && src[j] !== '\n') j++;
      blank(i, j);
      i = j;
    } else if (c === '/' && d === '*') {
      let j = i + 2;
      while (j < n && !(src[j] === '*' && src[j + 1] === '/')) j++;
      blank(i, Math.min(j + 2, n));
      i = Math.min(j + 2, n);
    } else if (c === '@' && d === '"') {
      let j = i + 2;
      while (j < n) {
        if (src[j] === '"' && src[j + 1] === '"') { j += 2; continue; }
        if (src[j] === '"') { j++; break; }
        j++;
      }
      blank(i, j);
      i = j;
    } else if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < n) {
        if (src[j] === '\\') { j += 2; continue; }
        if (src[j] === c) { j++; break; }
        if (src[j] === '\n') break;
        j++;
      }
      blank(i, j);
      i = j;
    } else if (c === '$' && (src[i + 1] === '"' || (src[i + 1] === '@' && src[i + 2] === '"'))) {
      i++; // 让下面的分支处理真正的引号起点
    } else {
      i++;
    }
  }
  return out.join('');
}

// ---------------------------------------------------------------- brace walk

// 返回 body 区间 [open, close]；open 是类型体的 '{'。
function bodySpan(masked, declEnd) {
  let open = masked.indexOf('{', declEnd);
  if (open < 0) return null;
  let depth = 0;
  for (let i = open; i < masked.length; i++) {
    const c = masked[i];
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) return [open, i];
    }
  }
  return null;
}

// 相对 body 起点的深度；用来只取类型体第一层的成员。
function depthMap(masked, open, close) {
  const depth = new Int32Array(close - open + 1);
  let d = 0;
  for (let i = open; i <= close; i++) {
    depth[i - open] = d;
    if (masked[i] === '{') d++;
    else if (masked[i] === '}') d--;
  }
  return depth;
}

// ------------------------------------------------------------------ decl scan

// delegate 的声明是 `delegate <返回类型> <名字>(`，返回类型不能当成名字。
// 正则里直接拿 kind 后的第一个标识符，所以 delegate 的名字在拿到声明行后单独修正。
const TYPE_RE =
  /(?:^|\n)[ \t]*public((?:[ \t]+(?:static|sealed|abstract|partial|readonly|ref|unsafe|new|extern|virtual|override|async|file)\b)*)[ \t]+(class|interface|struct|enum|delegate|record)[ \t]+([A-Za-z_]\w*)/g;

function delegateName(declHead) {
  const m = declHead.match(/\bdelegate[ \t]+[\w<>\[\],\.\?\s]*?([A-Za-z_]\w*)[ \t]*\(/u);
  return m ? m[1] : '';
}

// ILSpy 反编译产物清洗：Token/RID/RVA/File Offset 注释与整行 // 注释不进签名。
function cleanSignature(text) {
  return String(text)
    .replace(/\/\/[^\n]*/gu, ' ')
    .replace(/\/\*[\s\S]*?\*\//gu, ' ')
    .replace(/[\t\r]/gu, ' ')
    .replace(/[\s]+/gu, ' ')
    .replace(/\s*([(<,])\s*/gu, '$1')
    .replace(/\s*\)\s*>/gu, '>')
    .trim();
}

function lineAt(src, idx) {
  let s = src.lastIndexOf('\n', idx - 1) + 1;
  let e = src.indexOf('\n', idx);
  if (e < 0) e = src.length;
  return { start: s, end: e };
}

// 从 declStart 起吃到第一个 '{' / '=>' / ';'。text 含终止符（属性识别需要），end 指向终止符本身。
function declarationText(src, masked, declStart) {
  let i = declStart;
  let depth = 0;
  while (i < masked.length && i - declStart < 1200) {
    const c = masked[i];
    if (c === '(' || c === '[' || c === '<') depth++;
    else if (c === ')' || c === ']' || c === '>') depth--;
    else if (depth <= 0 && (c === '{' || c === ';')) return { text: src.slice(declStart, i + 1), end: i };
    else if (depth <= 0 && c === '=' && masked[i + 1] === '>') return { text: src.slice(declStart, i + 2), end: i };
    if (c === '\n' && depth <= 0 && i - declStart > 400) break;
    i++;
  }
  return { text: src.slice(declStart, Math.min(i, declStart + 600)), end: i };
}

// ------------------------------------------------------------------- members

const MEMBER_MOD = '[ \t]*(?:public|protected)[ \t]+(?:(?:new|virtual|override|abstract|sealed|static|readonly|const|extern|unsafe|async|volatile|event|partial)[ \t]+)*';

// 第一层成员（property / method / ctor），跳过嵌套类型声明。
function extractMembers(src, masked, open, close, ctorName, implicitAccess) {
  const depth = depthMap(masked, open, close);
  const members = [];
  const seen = new Set();
  const rel = (i) => i - open;

  const lineStart = /(?:\n)/gu;
  let lm;
  while ((lm = lineStart.exec(masked))) {
    const ls = lm.index + 1;
    if (ls <= open || ls >= close) continue;
    if (depth[rel(ls)] !== 1) continue;

    const le = masked.indexOf('\n', ls);
    const lineEnd = le < 0 || le > close ? close : le;
    const lead = masked.slice(ls, lineEnd);
    // 属性/方法/构造器声明必须以修饰符开头（行首可有缩进）；interface 成员允许无修饰符。
    const hasMod = new RegExp('^' + MEMBER_MOD, 'u').test(lead);
    if (!hasMod && !(implicitAccess && /^\s*(?:new|static|virtual|abstract|override|sealed|readonly|event|async|unsafe)\b/u.test(lead))) continue;
    if (/^\s*(?:return|throw|new|await|yield)\b/u.test(lead) && !/\breturn\b\s*;/u.test('')) {
      // 语句行也可能以 public 开头？不可能，保留判断但不影响。
    }

    const decl = declarationText(src, masked, ls);
    const sig = cleanSignature(decl.text).replace(/(?:\{|=>|;)\s*$/u, '');
    if (!sig) continue;

    let name = null;
    let kind = null;
    const prop = sig.match(new RegExp(MEMBER_MOD + '([^\\s(=;<>,]+(?:<[^>(]*>)?(?:\\[\\])?)[ \\t]+([A-Za-z_]\\w*)[ \\t]*(?:\\{|=>)', 'u'));
    if (prop) {
      name = prop[2];
      kind = 'property';
    } else {
      const meth = sig.match(new RegExp(MEMBER_MOD + '([\\w<>\\[\\],\\.\\s\\?]*?)[ \\t\\n]*([A-Za-z_]\\w*)[ \\t]*\\(', 'u'));
      if (meth) {
        name = meth[2];
        kind = 'method';
      }
    }
    if (!name || /^(?:get|set|add|remove|if|while|for|foreach|switch|return|lock|using|new|do|else|try|catch|finally|throw|yield|await)$/u.test(name)) continue;
    if (kind === 'method' && name === ctorName) continue; // 构造函数不计入方法表

    const key = kind + '\0' + name + '\0' + sig;
    if (seen.has(key)) continue;
    seen.add(key);
    members.push({ name, kind, signature: sig });
  }
  return members;
}

// --------------------------------------------------------------------- scan

function walkCs(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    let s;
    try {
      s = statSync(p);
    } catch {
      continue;
    }
    if (s.isDirectory()) {
      if (entry === '.git' || entry === 'bin' || entry === 'obj') continue;
      walkCs(p, acc);
    } else if (entry.endsWith('.cs')) {
      acc.push(p);
    }
  }
  return acc;
}

const files = walkCs(SRC).sort();
const byKey = new Map();
const unmapped = [];
let scannedFiles = 0;
let noiseTypes = 0;

for (const file of files) {
  scannedFiles++;
  const src = readFileSync(file, 'utf8');
  const masked = mask(src);
  const relFile = posix.normalize(relative(SRC, file).split(sep).join('/'));
  const moduleName = relFile.split('/')[0];

  const nsMatch = masked.match(/^[ \t]*namespace[ \t]+([A-Za-z_][\w.]*)/mu);
  const ns = nsMatch ? nsMatch[1] : '';

  TYPE_RE.lastIndex = 0;
  let tm;
  while ((tm = TYPE_RE.exec(masked))) {
    const declStart = tm.index + (tm[0].startsWith('\n') ? 1 : 0);
    const modifiers = 'public' + cleanSignature(tm[1] || '');
    let kind = tm[2];
    let name = tm[3];

    // record / record struct
    if (kind === 'record') {
      const after = masked.slice(declStart, declStart + 200).match(/^record[ \t]+(class|struct)\b/u);
      if (after) kind = after[1] === 'struct' ? 'struct' : 'class';
      else kind = 'class';
    }

    const decl = declarationText(src, masked, declStart);
    const declText = cleanSignature(decl.text);
    const declHead = declText.replace(/(?:\{|=>|;)\s*$/u, '');
    if (kind === 'delegate') name = delegateName(declHead) || name;
    const span = bodySpan(masked, decl.end);
    if (!span) continue;
    const [open, close] = span;

    const key = ns + '\0' + name;
    const baseMatch = declHead.match(/:\s*([^:{]+?)(?:\s*(?:where\b[\s\S]*))?$/u);
    const base = baseMatch ? cleanSignature(baseMatch[1]) : '';
    const isAbstract = /\babstract\b/u.test(modifiers) || (kind === 'class' && /\babstract\b/u.test(declHead));
    const isSealed = /\bsealed\b/u.test(modifiers);

    const entry = {
      typeName: name,
      namespace: ns,
      module: moduleName,
      kind,
      sourceFile: relFile,
      declaration: declHead || modifiers + ' ' + kind + ' ' + name,
      base: base || (kind === 'interface' || kind === 'enum' || kind === 'delegate' ? '' : 'System.Object'),
      isAbstract: Boolean(isAbstract),
      isSealed: Boolean(isSealed),
      members: extractMembers(src, masked, open, close, name, kind === 'interface'),
    };

    entry.properties = entry.members.filter((m) => m.kind === 'property');
    entry.methods = entry.members.filter((m) => m.kind === 'method');
    delete entry.members;

    if (isNoiseNamespace(ns)) {
      noiseTypes++;
      continue;
    }

    const { dir, dirRule } = dirFor(ns, name);
    entry.dir = dir;
    entry.dirRule = dirRule;
    if (!dirRule) unmapped.push(ns + '|' + name);

    const prev = byKey.get(key);
    if (!prev) {
      entry.sourceFiles = [relFile];
      // 计数用去重后的成员名，避免 getter/setter 对被算成两个方法、重载被重复计数。
      entry.propertyCount = new Set(entry.properties.map((m) => m.name)).size;
      entry.methodCount = new Set(entry.methods.map((m) => m.name)).size;
      byKey.set(key, entry);
    } else {
      // partial / 重复声明：合并成员，取首个声明行。
      const have = new Set(prev.methods.map((m) => m.signature));
      for (const m of entry.methods) if (!have.has(m.signature)) { prev.methods.push(m); have.add(m.signature); }
      const hprop = new Set(prev.properties.map((m) => m.signature));
      for (const m of entry.properties) if (!hprop.has(m.signature)) { prev.properties.push(m); hprop.add(m.signature); }
      if (!prev.sourceFiles.includes(relFile)) prev.sourceFiles.push(relFile);
      prev.methodCount = new Set(prev.methods.map((m) => m.name)).size;
      prev.propertyCount = new Set(prev.properties.map((m) => m.name)).size;
    }
  }
}

const types = [...byKey.values()].sort(
  (a, b) => a.namespace.localeCompare(b.namespace) || a.typeName.localeCompare(b.typeName)
);

const byDir = types.reduce((acc, t) => ((acc[t.dir] = (acc[t.dir] || 0) + 1), acc), {});

// 硬断言：canonical 表里声明存在的桶（规则目标 + entryPointDirs 目标 + defaultDir）
// 若最终 0 个叶子页，就是一次静默归零的变更，必须显式报错而不是只记个数字。
const declaredBuckets = new Set([
  ...PREFIX_RULES.map((r) => r.dir),
  ...ENTRY_POINT.values(),
  DIR_MAP.defaultDir,
].filter(Boolean));
const emptyBuckets = [...declaredBuckets].filter((d) => !byDir[d]).sort();

const payload = {
  generatedBy: 'tools/_v153_inventory.mjs',
  sourceRoot: relative(REPO_ROOT, SRC).split(sep).join('/'),
  provenance: {
    source: 'ILSpy-decompiled',
    evidence: 'bannerlord-1.5.3 是反编译产物：TaleWorlds.CampaignSystem/Campaign.cs 含 // Token: 0x02000033 RID: 51 与 // (get) Token: / RVA: / File Offset: 注释行，文件带 UTF-8 BOM 且为 CRLF。',
    artifactsStripped: ['BOM', 'CRLF', 'Token', 'RID', 'RVA', 'FileOffset', 'line-comments', 'block-comments'],
    countSemantics: 'methodCount / propertyCount = 去重后的 public+protected 成员名个数，重载不重复计数。',
    memberCaveat: '反编译器把 switch 还原为字典/哈希、闭包还原为 <>c__DisplayClass、自动属性还原为 getter/setter 对：成员名集合可靠，签名文本可靠性较低。',
  },
  scannedFiles,
  typeCount: types.length,
  noiseTypeCount: noiseTypes,
  byKind: types.reduce((acc, t) => ((acc[t.kind] = (acc[t.kind] || 0) + 1), acc), {}),
  dirMap: {
    source: 'tools/_dir-map-canonical.json',
    version: DIR_MAP.version || null,
    defaultDir: DIR_MAP.defaultDir || 'core-extra',
    matchSemantics: 'entryPointDirs(按 TypeName 小写 slug) 优先，其后最长前缀优先，最后 defaultDir。',
    byDir,
    declaredBuckets: [...declaredBuckets].sort(),
    emptyBuckets,
  },
  unmappedNamespaces: [...new Set(unmapped.map((u) => u.split('|')[0]))].sort(),
  unmappedCount: unmapped.length,
  namespaces: [...new Set(types.map((t) => t.namespace))].sort(),
  types,
};

writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');

console.log('scannedFiles=' + scannedFiles);
console.log('typeCount=' + types.length);
console.log('noiseTypeCount=' + noiseTypes);
console.log('byKind=' + JSON.stringify(payload.byKind));
console.log('namespaceCount=' + payload.namespaces.length);
console.log('byDir=' + JSON.stringify(payload.dirMap.byDir));
console.log('unmappedCount=' + payload.unmappedCount + ' namespaces=' + JSON.stringify(payload.unmappedNamespaces));

// 空桶不是记录，是失败：一个桶从有页变成 0 页会让整棵树的入口静默消失。
if (emptyBuckets.length) {
  console.error(
    'EMPTY_BUCKETS=' + emptyBuckets.length +
    ' canonical 表声明了这些桶，但本版本没有任何类型落入：' + emptyBuckets.join(', ')
  );
  console.error('  -> 映射表与源码已脱节：要么改 tools/_dir-map-canonical.json，要么这些桶在 1.5.3 确实不存在（需显式确认后才能忽略）。');
  process.exitCode = 1;
} else {
  console.log('emptyBuckets=0 (声明的 ' + declaredBuckets.size + ' 个桶均有叶子页)');
}
console.log('out=' + relative(REPO_ROOT, OUT).split(sep).join('/'));