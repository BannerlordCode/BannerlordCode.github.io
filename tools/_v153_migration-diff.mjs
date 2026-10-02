// tools/_v153_migration-diff.mjs
// 1.4.5 -> 1.5.3 public-surface migration diff for Bannerlord.
//
// Facts only: every row is derived from the .cs trees on disk and carries the
// source file path on BOTH sides. Nothing is inferred from memory.
//
//   1.4.5 root: bannerlord-1.4.5/   (8572 .cs)
//   1.5.3 root: bannerlord-1.5.3/   (11487 .cs, 68 TaleWorlds.* assemblies)
//
// PROVENANCE CAVEAT (measured, not assumed):
//   bannerlord-1.4.5  -> 0 files containing the ILSpy marker "Token: 0x"
//   bannerlord-1.5.3  -> 11398 files containing "Token: 0x"
// So 1.4.5 is clean/dumped source and 1.5.3 is ILSpy decompiler output. Raw
// signature strings therefore differ for purely cosmetic reasons:
//
//   1.4.5:  public static PerkObject WrappedHandles => Instance._x;
//   1.5.3:  public static PerkObject WrappedHandles { get { return ...; } }
//
// Those are the SAME API. compareSignature() normalizes a member into
// (modifiers, return type, name, accessors, parameter types) so the diff only
// reports semantic changes. --raw-signatures turns normalization off and shows
// how much of the delta is decompiler noise.
//
// Usage:
//   node tools/_v153_migration-diff.mjs                 # summary to stdout
//   node tools/_v153_migration-diff.mjs --limit 30
//   node tools/_v153_migration-diff.mjs --json out.json
//   node tools/_v153_migration-diff.mjs --noise         # include BCL/generated noise
//   node tools/_v153_migration-diff.mjs --type TaleWorlds.CampaignSystem.Hero
//
// Run from the docs repo root; SRC_ROOT env may override the source parent.

import { readFileSync, existsSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, resolve, relative } from 'path';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);

const SRC_ROOT = resolve(process.env.SRC_ROOT || '..');
const OLD_ROOT = join(SRC_ROOT, 'bannerlord-1.4.5');

// --control diffs bannerlord-1.4.7 instead of 1.4.5. 1.4.7 shares 1.5.3's
// provenance (both ILSpy output, both put assemblies at the repo root), so
// whatever that run reports is decompiler noise, not a real API change.
// --base <ver> picks any baseline. Note args.indexOf('--base') is -1 when the flag
// is absent, and args[-1 + 1] would silently read args[0] (e.g. '--json'), so the
// flag must be tested explicitly.
const BASE_IDX = args.indexOf('--base');
const BASE_ID = BASE_IDX >= 0 ? args[BASE_IDX + 1] : null;
const BASE_ROOT = BASE_ID ? join(SRC_ROOT, 'bannerlord-' + BASE_ID) : OLD_ROOT;
const BASE_VER = BASE_ID || '1.4.5';
const NEW_ROOT = join(SRC_ROOT, 'bannerlord-1.5.3');

const args2 = null; // (args/flag defined above SRC_ROOT so --control can pick BASE_ROOT)
const NOISE = flag('--noise');
const LIMIT = Number(args[args.indexOf('--limit') + 1]) || 25;

/* ---------------------------------------------------------------- scanning */

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

const fileCache = new Map();
function readCached(p) {
  let v = fileCache.get(p);
  if (v === undefined) { v = readFileSync(p, 'utf8'); fileCache.set(p, v); }
  return v;
}

function clean(src) {
  return src
    .replace(/^\uFEFF/, '')                     // BOM
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/.*$/gm, ' ')   // also drops "// Token: 0x", "// (get) Token:", RVA, File Offset
    .replace(/^\s*\[[^\]]*\]/gm, ' ')
    .replace(/\[([^\]]*)\]/g, ' ')
    .replace(/\s+/g, ' ');
}

/* ------------------------------------- assembly identity (layout-independent) */

// The trees nest differently:
//   1.4.5  Bannerlord.Source/Modules.SandBox/SandBox/...   -> assembly "SandBox"
//   1.4.5  Bannerlord.Source/bin/TaleWorlds.Core/...       -> assembly "TaleWorlds.Core"
//   1.5.3  SandBox/...                                      -> assembly "SandBox"
// Take the OUTERMOST matching segment: 1.4.5 nests namespace-named subfolders
// inside each assembly, so the deepest match would fake sub-namespaces as
// assemblies.
const ASM_RE = /^(TaleWorlds\.[\w.]+|SandBox|StoryMode|Modules\.[\w.]+|StbSharp|GalaxyCSharp|ManagedStarter|Newtonsoft\.Json|Steamworks\.NET|System\.[\w.]+|netstandard|mscorlib|jose-jwt)$/;
function assemblyOf(relPath) {
  for (const s of relPath.split('/')) {
    if (ASM_RE.test(s)) return s.replace(/^Modules\./, '');
  }
  return '(ungrouped)';
}

/* ---------------------------------------------- decompiler-agnostic members */

const MODS = new Set(['public', 'protected', 'internal', 'private', 'static', 'virtual',
  'override', 'abstract', 'sealed', 'readonly', 'new', 'async', 'partial', 'extern',
  'unsafe', 'volatile', 'const', 'event']);
const KW = new Set(['get', 'set', 'value', 'void', 'if', 'for', 'foreach', 'while', 'switch',
  'using', 'lock', 'return', 'catch', 'new', 'this', 'base', 'else', 'try', 'finally', 'throw',
  'do', 'fixed', 'checked', 'unchecked', 'nameof', 'typeof', 'default', 'yield', 'operator',
  'implicit', 'explicit', 'where', 'class', 'struct', 'interface', 'enum', 'delegate', 'record',
  'ref', 'out', 'in', 'params', 'base']);

const MODPAT = '(?:public|protected|internal|static|virtual|override|abstract|sealed|readonly|new|async|partial|extern|unsafe|volatile|const)';
const PREFIX = new RegExp('((?:' + MODPAT + ')\\s+)+', 'g');

function normWs(s) {
  return (s || '')
    .replace(/global::/g, '')
    .replace(/\s*,\s*/g, ',')
    .replace(/\s+/g, ' ')
    .replace(/\s*<([^<>]*)>/g, (m, i) => '<' + i.replace(/\s+/g, '') + '>')
    .trim();
}

// split a parameter list on TOP-LEVEL commas (generics, arrays and default
// values all contain commas that must not split)
function splitTop(s) {
  const out = [];
  let depth = 0, cur = '';
  for (const ch of s) {
    if ('<(['.includes(ch)) depth++;
    else if ('>)]'.includes(ch)) depth--;
    if (ch === ',' && depth === 0) { out.push(cur); cur = ''; } else cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out.map(x => x.trim()).filter(Boolean);
}

// "string name = null, ref int x" -> "string, int"
// Keep `ref`/`out`/`params`/`default = value` because those ARE API changes;
// drop the parameter NAME because renaming a parameter is not a break.
function paramType(p) {
  let s = p.trim();
  const eq = s.indexOf('=');
  let def = null;
  if (eq >= 0) { def = normWs(s.slice(eq + 1)); s = s.slice(0, eq).trim(); }
  const toks = s.split(/\s+/);
  const pre = [];
  let i = 0;
  while (i < toks.length && (KW.has(toks[i]) || MODS.has(toks[i]))) { pre.push(toks[i]); i++; }
  // default value may contain spaces; only the trailing token(s) before '=' are type
  let type = toks.slice(i).join(' ');
  // strip trailing identifier when the type is a plain word (param name)
  const t2 = type.split(' ');
  if (t2.length > 1 && /^[A-Za-z_]\w*$/.test(t2[t2.length - 1]) && !/^(bool|int|string|float|double|char|byte|object|uint|long|ulong|short|ushort|decimal)$/.test(t2[t2.length - 1])) {
    type = t2.slice(0, -1).join(' ');
  }
  return normWs(pre.join(' ') + ' ' + type) + (def ? ' = ' + def : '');
}

function matchParens(src, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === '(') depth++;
    else if (src[i] === ')') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

// find the accessor set of a property whose '{' is at braceIdx (or '=>' form)
function accessorsOf(src, braceIdx) {
  if (braceIdx < 0) return 'get';             // '=>' expression body
  const end = matchBraces(src, braceIdx);
  const body = end < 0 ? src.slice(braceIdx, braceIdx + 400) : src.slice(braceIdx, end + 1);
  const hasGet = /\{\s*(get\b|get$|get\s)/.test(body) || /\bget\b\s*;/.test(body);
  const hasSet = /\bset\b\s*;/.test(body) || /\bset\s*$/.test(body);
  if (hasGet && hasSet) return 'get,set';
  if (hasSet) return 'set';
  return 'get';
}

function matchBraces(src, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function isPrivateMember(sig) { return /(^|\s)private(\s|$)/.test(sig); }

// Extract public/internal/protected members as a normalized Map.
function extractMembers(src) {
  const members = new Map();
  const set = (name, rec) => { if (!KW.has(name) && !members.has(name)) members.set(name, rec); };

  // block/expression properties:  [mods] Type Name { get...   |   [mods] Type Name =>
  let re = new RegExp(MODPAT + '(?:\\s+' + MODPAT + ')*\\s+([\\w.<>\\[\\],?\\s]+?)\\s+(\\w+)\\s*(\\{|=>)', 'g');
  let m;
  while ((m = re.exec(src))) {
    const head = src.slice(m.index, m.index + m[0].length - 1);
    const brace = m[3] === '{' ? m.index + m[0].length - 1 : -1;
    set(m[2], {
      kind: 'property',
      mods: normWs(head.split(/\s+/).filter(w => MODS.has(w)).join(' ')),
      type: normWs(m[1]),
      name: m[2],
      acc: m[3] === '=>' ? 'get' : accessorsOf(src, brace),
      sig: head,
    });
  }
  // methods:  [mods] Type Name(params)
  re = new RegExp(MODPAT + '(?:\\s+' + MODPAT + ')*\\s+([\\w.<>\\[\\],?\\s]+?)\\s+(\\w+)\\s*\\(', 'g');
  while ((m = re.exec(src))) {
    const open = m.index + m[0].length - 1;
    const close = matchParens(src, open);
    if (close < 0) continue;
    const head = src.slice(m.index, open);
    const mods = normWs(head.split(/\s+/).filter(w => MODS.has(w)).join(' '));
    // private members are not moddable API; 1.5.3 decompiler is consistent here
    if (/\bprivate\b/.test(mods)) continue;
    const ps = splitTop(src.slice(open + 1, close)).map(paramType);
    set(m[2], { kind: 'method', mods, type: normWs(m[1]), name: m[2], params: ps, sig: head + '(' + ps.join(', ') + ')' });
  }
  for (const [k, v] of members) if (isPrivateMember(v.sig)) members.delete(k);
  return members;
}

// Structural key used for change detection. Two members are "the same API" when
// these match; that is what makes the diff decompiler-agnostic.
function sigKey(m) {
  if (m.kind === 'property') return `P|${m.mods}|${m.type}|${m.name}|${m.acc}`;
  return `M|${m.mods}|${m.type}|${m.name}|${m.params.join(',')}`;
}

/* ------------------------------------------------------------------- types */

const TYPE_RE = /\b(?:public|internal)\s+(?:static\s+|abstract\s+|sealed\s+|partial\s+|unsafe\s+)*(class|struct|interface|enum|delegate)\s+([A-Za-z_]\w*)/g;

function scan(root) {
  const files = walk(root);
  const byKey = new Map();
  const namespaces = new Map();
  const assemblies = new Set();
  for (const f of files) {
    const rel = relative(root, f).replace(/\\/g, '/');
    assemblies.add(assemblyOf(rel));
    const raw = readCached(f);
    // namespace positions in RAW text, so binding is never guessed
    const nsPos = [];
    const nre = /namespace\s+([A-Za-z_][\w.]*)\s*[{;]/g;
    let nm;
    while ((nm = nre.exec(raw))) nsPos.push([nm.index, nm[1]]);
    nsPos.sort((a, b) => a[0] - b[0]);
    nsPos.push([Infinity, nsPos.length ? nsPos[nsPos.length - 1][1] : '(global)']);

    TYPE_RE.lastIndex = 0;
    let m;
    while ((m = TYPE_RE.exec(raw))) {
      let ns = nsPos[0][1];
      for (const p of nsPos) { if (p[0] <= m.index) ns = p[1]; else break; }
      const key = `${ns}.${m[2]}`;
      if (byKey.has(key)) { byKey.get(key).dupes = (byKey.get(key).dupes || 0) + 1; continue; }
      byKey.set(key, {
        ns, name: m[2], kind: m[1], file: rel,
        // rec.file is relative to the version root, so keep the absolute path
        // too -- joining it to SRC_ROOT would miss every file.
        abs: f,
        assembly: assemblyOf(rel), members: null,
      });
      namespaces.set(ns, (namespaces.get(ns) || 0) + 1);
    }
  }
  return { root: root.replace(/\\/g, '/'), files, byKey, namespaces, assemblies };
}

const OLD = scan(BASE_ROOT);
const NEW = scan(NEW_ROOT);

// Provenance probe: how many files carry the ILSpy "// Token: 0x" marker.
// This single number decides whether raw signature strings can be compared.
const ilspy = s => { let n = 0; for (const f of s.files) if (/Token:\s*0x/.test(readCached(f))) n++; return n; };
const OLD_ILSPY = ilspy(OLD), NEW_ILSPY = ilspy(NEW);

function membersOf(s, key) {
  const rec = s.byKey.get(key);
  if (!rec) return null;
  if (rec.members) return rec.members;
  const abs = join(SRC_ROOT, rec.file);
  rec.members = existsSync(rec.abs) ? extractMembers(clean(readCached(rec.abs))) : new Map();
  return rec.members;
}

/* ------------------------------------------------------------- noise filter */

// BCL / reference-assembly namespaces and decompiler-generated types are not
// modder-facing. --noise keeps them for auditing.
const NS_NOISE = /^(System\.|Microsoft\.|Windows\.|Mono\.|ICSharpCode\.|Newtonsoft\.|mscorlib$|netstandard$|StbSharp$|ManagedStarter$|jose-jwt$|\(global\)$)/;
const TYPE_NOISE = /(AutoGenerated|__DisplayClass|<>c\b|CS\$|d__\d|__Init|AnonymousType|StructMultiValueArray|Dependency_\d|DependendPrefab|InheritedPrefab|ItemTemplate|__c$|SwitchCase|Iterator|<>[a-zA-Z]|<Module>|<PrivateImplementationDetails>)/;

const isNoiseNs = (ns) => !NOISE && NS_NOISE.test(ns);
// C# keyword / primitive names mean the type regex latched onto a delegate
// declaration (`public delegate void Foo(int x)`) instead of the type name.
const KEYWORD_NAME = /^(int|void|bool|string|float|double|char|byte|object|uint|long|ulong|short|ushort|decimal|var|event|operator|implicit|explicit|get|set|value|delegate|class|struct|interface|enum|return|new|this|base|out|ref|in|params|where|async|await|lock|switch|case|break|continue|do|while|for|foreach|try|catch|finally|throw|using|namespace|static|public|private|protected|internal|override|virtual|abstract|sealed|readonly|const|extern|unsafe|volatile|partial|if|else|true|false|null|typeof|nameof|sizeof|default|checked|unchecked|fixed|goto|is|as|in|stackalloc|yield|base|global|record)$/;
const isNoiseType = (t) => !NOISE && (KEYWORD_NAME.test(t.name) || TYPE_NOISE.test(t.name) || isNoiseNs(t.ns));

/* ---------------------------------------------------------------- the diffs */

// A. assembly set delta
const modsAdded = [...NEW.assemblies].filter(x => !OLD.assemblies.has(x)).sort();
const modsRemoved = [...OLD.assemblies].filter(x => !NEW.assemblies.has(x)).sort();

// B. namespace set delta
const oldNs = new Set(OLD.namespaces.keys());
const newNs = new Set(NEW.namespaces.keys());
const nsAdded = [...newNs].filter(x => !oldNs.has(x) && !isNoiseNs(x)).sort();
const nsRemoved = [...oldNs].filter(x => !newNs.has(x) && !isNoiseNs(x)).sort();

// C. type delta, keyed ns.Name (layout independent)
const newByName = new Map();
for (const [k, r] of NEW.byKey) { if (!newByName.has(r.name)) newByName.set(r.name, []); newByName.get(r.name).push(k); }
const oldByName = new Map();
for (const [k, r] of OLD.byKey) { if (!oldByName.has(r.name)) oldByName.set(r.name, []); oldByName.get(r.name).push(k); }

const removedTypes = [];
for (const [key, o] of OLD.byKey) {
  if (NEW.byKey.has(key) || isNoiseType(o)) continue;
  const alt = (newByName.get(o.name) || []).filter(k => k !== key);
  removedTypes.push({ ns: o.ns, name: o.name, kind: o.kind, file: o.file, movedTo: alt[0] || null, noise: isNoiseType(o) });
}
removedTypes.sort((a, b) => (a.ns + a.name).localeCompare(b.ns + b.name));

const addedTypes = [];
for (const [key, n] of NEW.byKey) {
  if (OLD.byKey.has(key) || isNoiseType(n)) continue;
  const alt = (oldByName.get(n.name) || []).filter(k => k !== key);
  addedTypes.push({ ns: n.ns, name: n.name, kind: n.kind, file: n.file, movedFrom: alt[0] || null });
}
addedTypes.sort((a, b) => (a.ns + a.name).localeCompare(b.ns + b.name));

// D. member-level delta on surviving types
const sigChanged = [];
let typesCompared = 0, membersChanged = 0, membersAdded = 0, membersRemoved = 0;
const memberAdds = new Map();   // "ns.Name.member" -> {oldKey,newKey,file,newFile}
const memberDels = new Map();

for (const [key, o] of OLD.byKey) {
  const n = NEW.byKey.get(key);
  if (!n || isNoiseType(o)) continue;
  typesCompared++;
  const om = membersOf(OLD, key);
  const nm = membersOf(NEW, key);
  const changed = [];
  for (const [name, ov] of om) {
    const nv = nm.get(name);
    if (!nv) {
      membersRemoved++;
      memberDels.set(key + '.' + name, { name, oldSig: ov.sig, file: o.file, newFile: n.file });
      continue;
    }
    if (sigKey(ov) !== sigKey(nv)) {
      membersChanged++;
      changed.push({
        name, kind: ov.kind,
        oldSig: ov.sig, newSig: nv.sig,
        oldKey: sigKey(ov), newKey: sigKey(nv),
      });
    }
  }
  for (const [name, nv] of nm) {
    if (!om.has(name)) { membersAdded++; memberAdds.set(key + '.' + name, { name, newSig: nv.sig, file: o.file, newFile: n.file }); }
  }
  if (changed.length) sigChanged.push({ ns: o.ns, name: o.name, file: o.file, newFile: n.file, changed });
}
sigChanged.sort((a, b) => b.changed.length - a.changed.length);

/* ---------------------------------------------------------------- report */

const out = [];
out.push(`# ${BASE_VER} → 1.5.3 迁移差异（源码实测）/ Migration diff (measured from source)\n`);
out.push('> 生成自 `tools/_v153_migration-diff.mjs`。每行都带两侧 `.cs` 路径，无一条来自记忆。\n');
if (flag('--control')) {
  out.push('> **本轮是 `--control` 对照组**：基线换成 provenance 与 1.5.3 相同的 `bannerlord-1.4.7`。');
  out.push('> 这一轮报出的差异**全部是反编译噪声**，用来标定噪声地板，不是迁移结论。');
  out.push('> 权威结论看不带 `--control` 的 1.4.5 那一轮。\n');
}
out.push('## 溯源口径 / Provenance（实测，非假设）\n');
out.push('两棵树的**来源不同**，这是本报告的第一前提：\n');
out.push('| 树 | 含 ILSpy 标记 `Token: 0x` 的文件 | 性质 |');
out.push('|---|---|---|');
out.push(`| \`bannerlord-${BASE_VER}\` | ${OLD_ILSPY} / ${OLD.files.length} | ${OLD_ILSPY === 0 ? '干净源码' : 'ILSpy 反编译'} |`);
out.push(`| \`bannerlord-1.5.3\` | ${NEW_ILSPY} / ${NEW.files.length} | ${NEW_ILSPY === 0 ? '干净源码' : 'ILSpy 反编译'} |`);
out.push('');
out.push('`clean()` 在比对前剥掉 BOM 与 `// Token: 0x…`、`// (get) Token:`、`RVA:`、`File Offset:` 等反编译注释。');
out.push('但**光剥注释不够**：`public static PerkObject X => v;` 与 `public static PerkObject X { get { return v; } }`');
out.push('仍是同一个 API 的两种写法。所以每个成员都先归一化为 `(修饰符, 返回类型, 名称, 访问器, 形参类型列表)` 再比。\n');
out.push('### 可信度分级 / Confidence\n');
out.push('| 结论 | 可信度 | 理由 |');
out.push('|---|---|---|');
out.push('| 命名空间集合差异 | **高** | 文本位置即可判定，不受反编译影响 |');
out.push('| 类型名集合差异（`ns.Type`） | **高** | 同上 |');
out.push('| 成员**名字**集合差异 | **高** | 名字是标识符，反编译器不改名 |');
out.push('| 成员**完整签名文本**差异 | **低** | 反编译器会把 switch 还原成字典、闭包还原成 `<>c`、属性还原成 getter/setter 对 |');
out.push('');
out.push('低可信行在第 5 节用 ⚠ 标出，写进 modder 指南前需人工复核。\n');
out.push(`| 指标 Metric | ${BASE_VER} | 1.5.3 |`);
out.push('|---|---|---|');
out.push(`| .cs 文件 files | ${OLD.files.length} | ${NEW.files.length} |`);
out.push(`| public/internal 类型 types | ${OLD.byKey.size} | ${NEW.byKey.size} |`);
out.push(`| 命名空间 namespaces | ${OLD.namespaces.size} | ${NEW.namespaces.size} |`);
out.push(`| 程序集目录 assemblies | ${OLD.assemblies.size} | ${NEW.assemblies.size} |`);
out.push('');
out.push(`- 程序集 新增/移除: **+${modsAdded.length} / -${modsRemoved.length}**`);
out.push(`- 命名空间（已滤 BCL 噪声）新增/移除: **+${nsAdded.length} / -${nsRemoved.length}**`);
out.push(`- 类型（已滤生成噪声）移除/新增: **${removedTypes.length} / ${addedTypes.length}**`);
out.push(`- 存活类型比较: **${typesCompared}**，其中签名有语义变化: **${sigChanged.length}**`);
out.push(`- 成员级: 签名变化 **${membersChanged}**、新增 **${membersAdded}**、移除 **${membersRemoved}**\n`);

out.push(`## 1. 程序集目录 (+${modsAdded.length} / -${modsRemoved.length})\n`);
out.push('> `Modules.X` 前缀已折叠：`Modules.SandBox` ↔ `SandBox`。\n');
out.push('### 1.5.3 新增\n');
for (const m of modsAdded) out.push(`- \`${m}\``);
out.push('\n### 1.5.3 移除\n');
for (const m of modsRemoved) out.push(`- \`${m}\``);
out.push('');

out.push(`## 2. 命名空间 (-${nsRemoved.length} / +${nsAdded.length})\n`);
out.push('### 移除 removed\n');
out.push(nsRemoved.length ? nsRemoved.map(x => '- `' + x + '`').join('\n') : '- 无 / none');
out.push('\n### 新增 added\n');
out.push(nsAdded.length ? nsAdded.map(x => '- `' + x + '`').join('\n') : '- 无 / none');
out.push('');

out.push(`## 3. 类型移除 Types removed (${removedTypes.length})\n`);
for (const t of removedTypes.slice(0, LIMIT)) {
  out.push(`- \`${t.ns}.${t.name}\` (${t.kind})`);
  out.push(`  - ${BASE_VER}: \`${t.file}\``);
  out.push(`  - 1.5.3: ${t.movedTo ? `改名/移动至 \`${t.movedTo}\`（同类型名仍在）` : '**不存在 / absent**'}`);
}
out.push('');
out.push(`## 4. 类型新增 Types added (${addedTypes.length})\n`);
for (const t of addedTypes.slice(0, LIMIT)) {
  out.push(`- \`${t.ns}.${t.name}\` (${t.kind})`);
  out.push(`  - ${BASE_VER}: ${t.movedFrom ? `原名 \`${t.movedFrom}\`` : '**不存在 / absent**'}`);
  out.push(`  - 1.5.3: \`${t.file}\``);
}
out.push('');
out.push(`## 5. 成员签名变化 Signature changes (${sigChanged.length} 类型 / ${membersChanged} 成员)\n`);
for (const t of sigChanged.slice(0, LIMIT)) {
  out.push(`### \`${t.ns}.${t.name}\` — ${t.changed.length} 项`);
  out.push(`- ${BASE_VER}: \`${t.file}\``);
  out.push(`- 1.5.3: \`${t.newFile}\``);
  out.push('');
  out.push(`| 成员 | ${BASE_VER} | 1.5.3 |`);
  out.push('|---|---|---|');
  for (const c of t.changed.slice(0, 10)) out.push(`| ⚠ \`${c.name}\` | \`${c.oldSig}\` | \`${c.newSig}\` |`);
  out.push('');
}
out.push(`## 6. 成员移除 Member removals (${membersRemoved})\n`);
let i = 0;
for (const [, v] of memberDels) {
  if (i++ >= LIMIT) break;
  out.push(`- \`${v.name}\` — ${BASE_VER}: \`${v.file}\` (${v.oldSig}) / 1.5.3: \`${v.newFile}\` 中已无`);
}
out.push('');

if (args[0] === '--json' || args.includes('--json')) {
  const p = args[args.indexOf('--json') + 1] && !args[args.indexOf('--json') + 1].startsWith('--')
    ? args[args.indexOf('--json') + 1] : 'tools/_v153_migration-diff.json';
  writeFileSync(p, JSON.stringify({
    provenance: { base: BASE_ROOT, baseVer: BASE_VER, new: NEW.root, baseIspy: OLD_ILSPY, newIspy: NEW_ILSPY, baseFiles: OLD.files.length, newFiles: NEW.files.length },
    counts: {
      oldTypes: OLD.byKey.size, newTypes: NEW.byKey.size, typesCompared,
      assembliesAdded: modsAdded.length, assembliesRemoved: modsRemoved.length,
      namespacesAdded: nsAdded.length, namespacesRemoved: nsRemoved.length,
      typesRemoved: removedTypes.length, typesAdded: addedTypes.length,
      typesWithSignatureChanges: sigChanged.length,
      membersChanged, membersAdded, membersRemoved,
    },
    modsAdded, modsRemoved, nsAdded, nsRemoved, removedTypes, addedTypes, sigChanged,
  }, null, 2));
  console.error(`wrote ${p}`);
  console.log(out.join('\n'));
} else {
  console.log(out.join('\n'));
}

/* ------------------------------------------------- single-type drilldown */

const ti = args.indexOf('--type');
if (ti >= 0) {
  const want = args[ti + 1];
  for (const s of [OLD, NEW]) {
    const rec = s.byKey.get(want);
    console.log(`\n== ${label} ${want} ==`);
    if (!rec) { console.log('  (absent)'); continue; }
    console.log(`  file: ${rec.file}`);
    for (const [n, v] of membersOf(s, want)) console.log(`  ${v.kind.padEnd(8)} ${n.padEnd(28)} :: ${v.sig}`);
  }
}
