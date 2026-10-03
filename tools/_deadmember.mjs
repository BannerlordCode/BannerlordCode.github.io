#!/usr/bin/env node
// tools/_deadmember.mjs — 「源码自带的死成员」只读探针
//
// 用法
//   node tools/_deadmember.mjs <TypeName | PagePath>       单类型表
//   node tools/_deadmember.mjs --batch [--scope <file>]    清单批量表（默认 tools/_deadmember-scope.txt）
//   node tools/_deadmember.mjs --selftest                  只跑阳性对照自检
//
// 退出码（fail closed）
//   0  自检 6/6 通过，且本次查询全部解析出结论
//   1  自检通过，但有页面/类型 UNRESOLVED（部分结论）
//   2  阳性对照任一不过 / 参数错 / 源码树不可读 —— 一条结论都不出
//
// 本工具只读：只 fs.readFileSync，不写任何文件，更不碰 content/。
//
// ═══════════════════════════════════════════════════════════════════════════
// 三栏语义的定义（B-1：原始计数 ≠ 被引用次数；三栏必须分列）
//   hits          名字层面在【剔除之前】出现的总次数（.Name / 裸调用 / 裸读 / 声明位）
//   declSites     其中被判为「声明位」而剔除的次数（排除理由：declaration）
//   rawAccess     其中 `.Name` 的次数 —— 名字层面，【未做类型归属】
//   exclOtherType 其中因接收者标识符命中【另一个声明类型】而剔除的次数（B-2 串味）
//   attribAccess  rawAccess - exclOtherType —— 归属到本页类型的点访问次数
//   bareCallOwn   声明类型【自己文件里】的无限定调用（unqualified call，静态可归属）
//   bareCallOther 别的文件里的无限定调用 —— 静态不可归属，计入歧义不计入调用点
//   callSites     = attribAccess + bareCallOwn
//   bareRead      既不是 `.Name` 也不是调用的裸读 —— 不可靠（可能是局部变量遮蔽），只报不计
// ═══════════════════════════════════════════════════════════════════════════
// 阳性对照 fixture —— 6 个符号，每个数字都是人工 grep 核过的真实值，不是猜的
//
// 核实命令（在 C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source 下执行）
//   grep -rohE "\.SetLeader\b" --include=*.cs . | wc -l
//   grep -rnE "(^|[^.[:alnum:]_])SetLeader[[:space:]]*\(" --include=*.cs .
//   grep -rnE "override[^=;()]*\bGetTier\b" --include=*.cs .
//   grep -rn "GarrisonParty" --include=*.cs . | grep -E "^\S+:[0-9]+:\s*(public|protected|private|internal).*GarrisonParty"
//   grep -rn "enum ArmyTypes" --include=*.cs .
//   grep -rn "typeof(Army.ArmyTypes)" --include=*.cs .
//
// ⚠ 本机 git-bash 的 grep 陷阱：双引号里的 `[^.\w]` 不把 `\w` 当词类
//   （实测会把 OnPushScreen 里的 nPushScreen 算成裸命中）。凡带 \w 的类一律写
//   [^.[:alnum:]_]。本文件的 fixture 因此只用不含 \w 的 `.Name` 口径。
//
// fixture 实测值（2026-10-03，HEAD ccbc3d4）：
//   GarrisonParty  rawAccess=159  attribAccess=159  declFiles=1  overrides=0
//   GetTier        rawAccess=2    declFiles=2  overrides=1  abstractDecls=1
//   SetLeader      rawAccess=8    exclOtherType=1(LobbyClient.cs:1064 属 PartyPlayerInLobbyClient)
//                  attribAccess=7 bareCallOwn=1(Clan.cs:862)  callSites=8  declFiles=2
//   PushScreen     rawAccess=9    declFiles=1  overrides=0
//   PopScreen      rawAccess=10   declFiles=1  overrides=0
//   Raider（enum ArmyTypes 成员，B-6）refs=23 且必须 UNSUPPORTED（typeof 被反射消费）
// ═══════════════════════════════════════════════════════════════════════════
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DOC_ROOT = path.resolve(HERE, '..');
const SRC_ROOT = process.env.SRC_ROOT || path.resolve(DOC_ROOT, '..', 'bannerlord-1.4.5');
const SRC_CODE = path.join(SRC_ROOT, 'Bannerlord.Source');
const SRC_HEAD = 'ccbc3d40f88905765a1484492d41b7000e7249fa';
const DOC_HEAD = '56e94022941f1b16d86b934330620b145029ee90';

// name, rawAccess, declFiles, overrides, abstractDecls, attribAccess, bareCallOwn, ownType, note
const CONTROL = [
  ['GarrisonParty', 159, 1, 0, 0, 159, 0, 'Fief', 'Fief 上的表达式体属性；同前缀的 GarrisonPartyComponent 不得串味'],
  ['GetTier',         2, 2, 1, 1, 2, 0, 'CharacterStatsModel', '抽象基 + override 两个声明者；验「override 与 abstract 必须分列」(B-4)'],
  ['SetLeader',       8, 2, 0, 0, 7, 1, 'Clan', '同名属两个类型(B-2)：rawAccess=8，剔除 LobbyClient.cs:1064 后 7，加 Clan.cs:862 无限定调用 1 => callSites=8'],
  ['PushScreen',      9, 1, 0, 0, 9, 0, 'ScreenManager', '单声明者静态方法'],
  ['PopScreen',      10, 1, 0, 0, 10, 0, 'ScreenManager', '单声明者静态方法'],
];
// 第 6 个对照符号（boss-1 裁定）：断言形式与前 5 个不同 —— 验「知道什么时候不该数」
const CONTROL_B6 = { name: 'Raider', declType: 'ArmyTypes', declFile: 'bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Army.cs', minRefs: 1 };

const BCL_LINQ = new Set([
  'Count', 'Any', 'All', 'First', 'FirstOrDefault', 'Last', 'LastOrDefault', 'Single', 'SingleOrDefault',
  'Where', 'Select', 'SelectMany', 'OrderBy', 'ThenBy', 'GroupBy', 'ToList', 'ToArray', 'ToDictionary',
  'Sum', 'Min', 'Max', 'Average', 'Aggregate', 'OfType', 'Cast', 'Concat', 'Distinct', 'Skip', 'Take',
  'Contains', 'ElementAt', 'ElementAtOrDefault', 'Reverse', 'Union', 'Intersect', 'Except', 'Empty',
  'Add', 'Remove', 'Insert', 'Clear', 'ContainsKey', 'TryGetValue', 'GetValueOrDefault', 'Trim', 'Split',
  'Replace', 'Substring', 'ToString', 'Equals', 'GetHashCode', 'CompareTo', 'GetType', 'Clone',
]);
const CTRL_KW = new Set([
  'if', 'for', 'foreach', 'while', 'switch', 'catch', 'lock', 'using', 'return', 'throw', 'new',
  'typeof', 'nameof', 'fixed', 'checked', 'unchecked', 'yield', 'do', 'else', 'await', 'in', 'is',
]);
const MODS = 'public|protected|private|internal|static|virtual|override|abstract|sealed|extern|unsafe|new|partial|async|readonly|volatile|fixed|event|const|implicit|explicit';
const DECL_PREFIX = new RegExp(`^\\s*(?:\\[[^\\]]*\\]\\s*)*(?:(?:${MODS})\\s+)+[\\w<>\\[\\],?\\s]*$`);
const TYPE_DECL = /\b(class|struct|interface|enum|record)\s+([A-Za-z_]\w*)/g;
const ID_RE = /[A-Za-z_]\w*/g;

// ── 词法：注释与字符串替换成等长空格（B-3：字符串字面量里的人类可读单词不算命中）──
const M = ' ';
function stripLine(line) {
  const out = line.split('');
  let i = 0;
  const n = line.length;
  let mode = 0; // 0 code 1 block 2 verbatim 3 dq 4 char
  while (i < n) {
    const c = line[i], d = line[i + 1];
    if (mode === 1) {
      if (c === '*' && d === '/') { out[i] = out[i + 1] = M; i += 2; mode = 0; continue; }
      if (c !== '\t') out[i] = M; i++; continue;
    }
    if (mode === 2) {
      if (c === '"') { if (d === '"') { out[i] = out[i + 1] = M; i += 2; continue; } out[i] = M; i++; mode = 0; continue; }
      if (c !== '\t') out[i] = M; i++; continue;
    }
    if (mode === 3) {
      if (c === '\\') { out[i] = M; if (i + 1 < n) out[i + 1] = M; i += 2; continue; }
      if (c === '"') { out[i] = M; i++; mode = 0; continue; }
      if (c !== '\t') out[i] = M; i++; continue;
    }
    if (mode === 4) {
      if (c === '\\') { out[i] = M; if (i + 1 < n) out[i + 1] = M; i += 2; continue; }
      if (c === "'") { out[i] = M; i++; mode = 0; continue; }
      if (c !== '\t') out[i] = M; i++; continue;
    }
    if (c === '/' && d === '/') { for (let k = i; k < n; k++) out[k] = M; break; }
    if (c === '/' && d === '*') { out[i] = out[i + 1] = M; i += 2; mode = 1; continue; }
    if (c === '@' && d === '"') { out[i] = out[i + 1] = M; i += 2; mode = 2; continue; }
    if (c === '$' && d === '@' && line[i + 2] === '"') { out[i] = out[i + 1] = out[i + 2] = M; i += 3; mode = 2; continue; }
    if ((c === '$' && d === '"') || c === '"') { out[i] = M; i += 2; mode = 3; continue; }
    if (c === "'") { out[i] = M; i += 1; mode = 4; continue; }
    i++;
  }
  return out.join('');
}

// ── 源码树索引（读不到目录 = 抛错，不静默跳过：fail closed）──────────────────
let FILES = null;
function indexTree() {
  if (FILES) return FILES;
  if (!fs.existsSync(SRC_CODE)) throw new Error(`SRC_CODE 不存在: ${SRC_CODE}`);
  FILES = [];
  (function walk(dir) {
    const ents = fs.readdirSync(dir, { withFileTypes: true }); // 不 catch：静默少文件 = 假结论
    for (const e of ents) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.cs')) FILES.push(path.relative(SRC_CODE, p).split(path.sep).join('/'));
    }
  })(SRC_CODE);
  FILES.sort();
  return FILES;
}
const RELSET = new Set();
function relIndex() { indexTree(); for (const f of FILES) RELSET.add(f); return RELSET; }

// 页面 **File:** 形如 `<Module>.<SubNs>/<File>.cs`，真实路径在 bin/<Module>/<Module>.<SubNs>/…
// 或 Modules.SandBox/<SubNs>/<SubNs>/… —— 两种根不同，所以只能后缀匹配（已实测确认）
function resolveByFileHint(hint) {
  const h = String(hint || '').trim().replace(/^[`*\s]+|[`*\s]+$/g, '').replace(/\\/g, '/');
  if (!h) return null;
  relIndex();
  for (const rel of RELSET) if (rel === h || rel.endsWith('/' + h)) return rel;
  return null;
}
function resolveByTypeName(typeName) {
  const re = new RegExp(`\\b(?:class|struct|interface|enum|record)\\s+${typeName}\\b`);
  for (const rel of indexTree()) {
    if (re.test(fs.readFileSync(path.join(SRC_CODE, rel), 'utf8'))) return rel;
  }
  return null;
}
function typeNamesInFile(rel) {
  const txt = fs.readFileSync(path.join(SRC_CODE, rel), 'utf8');
  const out = new Set();
  let m; TYPE_DECL.lastIndex = 0;
  while ((m = TYPE_DECL.exec(txt))) out.add(m[2]);
  return out;
}

// ── 成员抽取（按花括号深度把成员归到正确的类型，支持嵌套类型与 enum 体）──────
function extractMembers(rel, wantedType) {
  const raw = fs.readFileSync(path.join(SRC_CODE, rel), 'utf8').split(/\r?\n/);
  const lines = raw.map(stripLine);
  const stack = []; // {name, isEnum, bodyDepth}
  let pending = null, depth = 0;
  const members = [];
  for (let li = 0; li < lines.length; li++) {
    const L = lines[li];
    const top = stack.length ? stack[stack.length - 1] : null;
    if (top && top.name === wantedType) {
      const ownerIsInterface = !!top.isInterface;
      if (top.isEnum) {
        const em = /^\s*([A-Za-z_]\w*)\s*(?:=|,|$)/.exec(L);
        if (em && !CTRL_KW.has(em[1])) members.push({
          name: em[1], kind: 'enum-member', declFile: rel, declLine: li + 1, ownerIsInterface,
          generic: false, noBody: false, ifaceLike: false, mods: '',
        });
      } else {
        ID_RE.lastIndex = 0;
        let m;
        while ((m = ID_RE.exec(L))) {
          const name = m[0], at = m.index;
          if (CTRL_KW.has(name)) continue;
          const before = L.slice(0, at);
          if (!DECL_PREFIX.test(before)) continue;
          if (new RegExp(`(^|[^\\w.>])class\\s+${name}\\b`).test(before)) continue;
          const after = L.slice(at + name.length);
          const afterTrim = after.replace(/^\s+/, '');
          let kind = null;
          if (afterTrim.startsWith('(')) kind = name === wantedType ? 'ctor' : 'method';
          else if (afterTrim.startsWith('=>') || /^[\s]*\{/.test(after)) kind = 'property';
          else if (afterTrim[0] === '=' || afterTrim[0] === ';' || afterTrim[0] === ',') kind = 'field';
          else continue;
          if (kind === 'ctor') continue;
          const modHit = new RegExp(`(?:^|\\s)(${MODS})(?=\\s|$)`).exec(before.replace(/\s+$/, ''));
          const mods = modHit ? modHit[1] : '';
          members.push({
            name, kind: mods === 'event' ? 'event' : kind, declFile: rel, declLine: li + 1, ownerIsInterface,
            generic: /^\s*</.test(afterTrim),
            noBody: /^\s*\([^;]*\)\s*;/.test(after) || /;\s*$/.test(after),
            ifaceLike: /^\s*(?:\[[^\]]*\]\s*)*[\w<>\[\],?\s]+[\w]+\s*;\s*$/.test(L.trim()),
            mods,
          });
        }
      }
    }
    // 类型声明 + 花括号推进
    TYPE_DECL.lastIndex = 0;
    let td;
    while ((td = TYPE_DECL.exec(L))) pending = { name: td[2], isEnum: td[1] === 'enum', isInterface: td[1] === 'interface' };
    for (let i = 0; i < L.length; i++) {
      if (L[i] === '{') { depth++; if (pending) { stack.push({ ...pending, bodyDepth: depth }); pending = null; } }
      else if (L[i] === '}') { depth--; while (stack.length && stack[stack.length - 1].bodyDepth > depth) stack.pop(); }
    }
  }
  return members;
}

// ── 全树单遍 ──────────────────────────────────────────────────────────────
function newRec() {
  return { hits: 0, declSites: 0, rawAccess: 0, exclOtherType: 0, bareCallOwn: 0, bareCallOther: 0,
    bareRead: 0, overrides: 0, abstractDecls: 0, declFiles: new Set(), declMods: new Map(),
    sites: [], exclSites: [], genericSites: [] };
}
function scanTree(names, ownFiles) {
  const st = new Map();
  for (const n of names) st.set(n, newRec());
  const ID = /[A-Za-z_]\w*/g;
  for (const rel of indexTree()) {
    const raw = fs.readFileSync(path.join(SRC_CODE, rel), 'utf8').split(/\r?\n/);
    let inBlock = false;
    for (let li = 0; li < raw.length; li++) {
      let L = raw[li];
      if (inBlock) { const e = L.indexOf('*/'); if (e < 0) continue; L = ' '.repeat(e + 2) + L.slice(e + 2); inBlock = false; }
      const s = stripLine(L);
      if (!ID.test(s)) continue; ID.lastIndex = 0;
      ID.lastIndex = 0;
      const toks = []; let m;
      while ((m = ID.exec(s))) toks.push({ name: m[0], at: m.index });
      if (!toks.length) continue;
      let ovs = -1, abs = -1;
      for (let k = 0; k < toks.length; k++) {
        const t = toks[k];
        if (t.name === 'override') ovs = k;
        if (t.name === 'abstract') abs = k;
        const rec = st.get(t.name);
        if (!rec) continue;
        rec.hits++;
        const head = s.slice(0, t.at);
        const isDecl = DECL_PREFIX.test(head) &&
          !new RegExp(`(^|[^\\w.>])class\\s+${t.name}\\b`).test(head) &&
          !new RegExp(`(^|[^\\w.>])enum\\s+${t.name}\\b`).test(head);
        if (isDecl) {
          rec.declSites++; rec.declFiles.add(rel);
          rec.declMods.set(rel, abs >= 0 && abs < k ? 'abstract' : (ovs >= 0 && ovs < k ? 'override' : 'plain'));
          if (ovs >= 0 && ovs < k) rec.overrides++;
          if (abs >= 0 && abs < k) rec.abstractDecls++;
          continue;
        }
        const before = head.replace(/\s+$/, '');
        const after = s.slice(t.at + t.name.length);
        // 点访问判定：`1.5` 这类数字字面量不能算成员访问，但 `val3.Foo` / `item2.Bar` 必须算。
        // 曾经的 bug：写成 /\d\.$/ 把一切「标识符以数字结尾」当数字字面量，val3.SetLeader 被丢掉。
        const prevCh = before.length >= 2 ? before[before.length - 2] : '';
        const numericTail = /\d$/.test(before) && !/[A-Za-z_]/.test(prevCh);
        const isDot = before.endsWith('.') && !numericTail && !before.endsWith('..');
        const isCall = /^\s*(?:<[^<>()]*>\s*)?\(/.test(after);
        if (isDot) {
          rec.rawAccess++;
          const recv = /([A-Za-z_]\w*)\s*\.$/.exec(before);
          const owner = ownFiles.get(t.name) || null;
          const other = exclOtherType && recv && owner ? recvOtherType(t.name, recv[1]) : false;
          if (other) {
            rec.exclOtherType++;
            if (rec.exclSites.length < 6) rec.exclSites.push(`${rel}:${li + 1} 接收者 ${recv[1]} 属于另一声明类型`);
            continue;
          }
          if (rec.sites.length < 6) rec.sites.push(`${rel}:${li + 1} .${t.name}`);
        } else if (isCall) {
          if (/\bnameof\s*\(/.test(before)) continue;
          if (ownFiles.get(t.name) && ownFiles.get(t.name).has(rel)) rec.bareCallOwn++;
          else { rec.bareCallOther++; if (rec.genericSites.length < 6) rec.genericSites.push(`${rel}:${li + 1} 跨文件无限定调用，静态不可归属`); }
        } else {
          rec.bareRead++;
          if (rec.genericSites.length < 6 && rec.genericSites.length === 0) rec.genericSites.push(`${rel}:${li + 1} 裸读，可能是局部变量遮蔽`);
        }
      }
    }
  }
  return st;
}
// 接收者标识符是否命中【另一个】声明类型（B-2）。大小写不敏感 + 首字母小写约定。
let exclOtherType = false;
let DECL_TYPES = new Map();  // name -> Set<typeName>（所有声明该名字的类型）
let OWN_TYPES = new Map();   // name -> Set<typeName>（本页类型）
// 接收者标识符是否命中【另一个】声明类型（B-2）。只在命中非本页类型时才剔除。
function recvOtherType(name, id) {
  const norm = s => s[0].toLowerCase() + s.slice(1);
  const decls = DECL_TYPES.get(name);
  const own = OWN_TYPES.get(name) || new Set();
  if (!decls) return false;
  for (const ty of decls) if (norm(id) === norm(ty)) return !own.has(ty);
  return false;
}

// 扩展方法同名冲突（BCL/Linq 盲区的可测代理）
function scanExtensionNames(names) {
  const out = new Set();
  for (const rel of indexTree()) {
    const txt = fs.readFileSync(path.join(SRC_CODE, rel), 'utf8');
    for (const n of names) {
      if (out.has(n)) continue;
      if (new RegExp(`static[^;=()]*\\b${n}\\s*(?:<[^<>()]*>)?\\s*\\(\\s*(?:this\\s+|[A-Za-z_][\\w<>,\\[\\]\\.\\?]*\\s+this\\s+)`).test(txt)) out.add(n);
    }
  }
  return out;
}
// B-6：enum 成员被 typeof 反射消费 —— 文本里成员名一次都不出现，按底层整数序列化
function scanEnumReflection(typeName) {
  if (!typeName) return null;
  const re = new RegExp(`typeof\\s*\\(\\s*(?:[A-Za-z_][\\w.]*\\.)?${typeName}\\s*\\)`);
  const sink = /AddEnumDefinition|Enum\.GetValues|Enum\.Parse|Enum\.GetNames|Enum\.ToObject/;
  const hits = [];
  for (const rel of indexTree()) {
    const txt = fs.readFileSync(path.join(SRC_CODE, rel), 'utf8');
    if (!txt.includes('typeof')) continue;
    if (re.test(txt) && sink.test(txt)) {
      txt.split(/\r?\n/).forEach((l, i) => { if (re.test(l) && sink.test(l)) hits.push(`${rel}:${i + 1}`); });
      if (!hits.length) hits.push(rel);
    }
  }
  return hits.length ? hits : null;
}
function scanReflectionAny(typeName) {
  if (!typeName) return false;
  const re = new RegExp(`typeof\\s*\\(\\s*(?:[A-Za-z_][\\w.]*\\.)?${typeName}\\s*\\)`);
  const re2 = /Get(?:Property|Method|Field|Event)\s*\(/;
  for (const rel of indexTree()) {
    const txt = fs.readFileSync(path.join(SRC_CODE, rel), 'utf8');
    if (!txt.includes('typeof')) continue;
    if (re.test(txt) && re2.test(txt)) return true;
  }
  return false;
}

// ── 页面解析 ──────────────────────────────────────────────────────────────
function pageInfo(pagePath) {
  const p = path.resolve(DOC_ROOT, pagePath);
  if (!fs.existsSync(p)) return null;
  const txt = fs.readFileSync(p, 'utf8');
  const f = /\*\*File:\*\*\s*`?([^`\n]+)`?/.exec(txt);
  const s = /\*\*Source:\*\*\s*`?([^`\n]+)`?/.exec(txt);
  const t = /^title:\s*"?(.*?)"?\s*$/m.exec(txt);
  return { fileHint: f ? f[1] : null, sourceHint: s ? s[1] : null,
    hintKey: f ? 'File:' : (s ? 'Source:' : null), hint: f ? f[1] : (s ? s[1] : null), name: t ? t[1] : null, abs: p };
}
function backtickIdents(abs) {
  const txt = fs.readFileSync(abs, 'utf8');
  const set = new Set();
  for (const m of txt.matchAll(/`([A-Za-z_]\w*)`/g)) set.add(m[1]);
  return set;
}

// ── 阳性对照自检 ──────────────────────────────────────────────────────────
function selftest() {
  const names = CONTROL.map(c => c[0]).concat([CONTROL_B6.name]);
  DECL_TYPES = new Map();
  exclOtherType = false;
  const st0 = scanTree(names, new Map());
  for (const n of names) {
    const tys = new Set();
    for (const f of st0.get(n).declFiles) for (const ty of typeNamesInFile(f)) tys.add(ty);
    DECL_TYPES.set(n, tys);
  }
  const ownFiles = new Map();
  for (const c of CONTROL) { OWN_TYPES.set(c[0], new Set([c[7]])); ownFiles.set(c[0], new Set([resolveByTypeName(c[7])].filter(Boolean))); }
  OWN_TYPES.set(CONTROL_B6.name, new Set([CONTROL_B6.declType]));
  ownFiles.set(CONTROL_B6.name, new Set([CONTROL_B6.declFile]));
  exclOtherType = true;
  const st = scanTree(names, ownFiles);
  const rows = [];
  let pass = 0;
  for (const [n, raw, df, ov, ab, attrib, bcOwn, ownType, why] of CONTROL) {
    const r = st.get(n);
    const got = { raw: r.rawAccess, attrib: r.rawAccess - r.exclOtherType, excl: r.exclOtherType,
      bareOwn: r.bareCallOwn, call: r.rawAccess - r.exclOtherType + r.bareCallOwn,
      df: r.declFiles.size, ov: r.overrides, ab: r.abstractDecls };
    const checks = [
      [`rawAccess=${raw}`, got.raw === raw],
      [`declFiles=${df}`, got.df === df],
      [`overrides=${ov}`, got.ov === ov],
      [`abstractDecls=${ab}`, got.ab === ab],
      [`attribAccess=${attrib}`, got.attrib === attrib],
      [`bareCallOwn=${bcOwn}`, got.bareOwn === bcOwn],
    ];
    const ok = checks.every(c => c[1]);
    if (ok) pass++;
    rows.push({ n, why, got, checks, ok, sites: r.sites, exclSites: r.exclSites });
  }
  // ── 第 6 个对照：验「该降级时必须降级」，不是验「能数到调用」 ──
  {
    const n = CONTROL_B6.name;
    const rel = CONTROL_B6.declFile;
    if (!fs.existsSync(path.join(SRC_CODE, rel))) {
      rows.push({ n: `${n}(B-6)`, why: '声明文件不存在', checks: [['file', false]], ok: false });
    } else {
      const mem = extractMembers(rel, CONTROL_B6.declType).filter(m => m.name === n);
      const r = st.get(n);
      const refl = scanEnumReflection(CONTROL_B6.declType);
      const refs = r.rawAccess + r.bareCallOwn + r.bareCallOther + r.bareRead;
      const downgraded = !!refl;
      const checks = [
        [`声明存在 (enum ${CONTROL_B6.declType})`, mem.length === 1],
        [`引用数 ${refs} != 0`, refs >= CONTROL_B6.minRefs],
        [`typeof 反射消费已检出 => 必须降级 UNSUPPORTED (${(refl || []).slice(0, 2).join(' ')})`, downgraded],
      ];
      const ok = checks.every(c => c[1]);
      if (ok) pass++;
      rows.push({ n: `${n}(B-6)`, why: 'enum ArmyTypes 成员；断言「必须降级 UNSUPPORTED 且引用数不等于 0」', got: { refs, refl: (refl || []).join(' ') }, checks, ok });
    }
  }
  exclOtherType = false;
  // ── 源文件定位的两个探针（键名 / 路径前缀）分开验，不合并成一个成功率 ──
  const RESOLVE_CASES = [
    ['bin 前缀族', 'TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AgeModel.cs'],
    ['Modules 前缀族', 'Modules.SandBox/SandBox.View/SandBox.View/CampaignMusicHandler.cs'],
  ];
  let rpass = 0;
  console.log('\n== 源文件定位探针（后缀匹配，两个前缀族分开验）==');
  for (const [label, hint] of RESOLVE_CASES) {
    const got = resolveByFileHint(hint);
    if (got) rpass++;
    console.log(`  ${got ? 'PASS' : 'FAIL'}  ${label.padEnd(20)} ${hint}  ->  ${got || 'UNRESOLVED'}`);
  }
  console.log(`  resolve probes: ${rpass}/${RESOLVE_CASES.length}`);
  console.log('\n== 阳性对照自检（fixture 数字已人工 grep 核实）==');
  for (const r of rows) {
    console.log(`  ${r.ok ? 'PASS' : 'FAIL'}  ${r.n}`);
    for (const [label, ok] of r.checks) console.log(`          ${ok ? 'ok  ' : 'FAIL'} ${label}`);
    if (!r.ok) console.log(`          实测 ${JSON.stringify(r.got)}`);
    if (r.sites && r.sites.length) console.log(`          命中点 ${r.sites.join(' | ')}`);
    console.log(`          — ${r.why}`);
  }
  console.log(`  positive control: ${pass}/${rows.length}`);
  return { pass, total: rows.length, rows, rpass, rtotal: RESOLVE_CASES.length };
}

// ── 主流程 ────────────────────────────────────────────────────────────────
function analyzeTargets(targets) {
  const resolved = [], unresolved = [];
  for (const t of targets) {
    const info = t.includes('/') ? pageInfo(t) : { name: t, hintKey: null, hint: null, abs: null };
    if (!info) { unresolved.push({ t, why: '页面文件不存在' }); continue; }
    const typeName = t.includes('/') ? info.name : t;
    let rel = info.hint ? resolveByFileHint(info.hint) : null;
    let how = info.hintKey ? `${info.hintKey} 提示后缀匹配` : '无 File:/Source: 键';
    let via = '提示';
    if (!rel) { rel = resolveByTypeName(typeName); how = '类名回退扫描'; via = '回退'; }
    if (!rel) { unresolved.push({ t, why: `${info.hintKey || '无键'}提示与类名回退都找不到类型 ${typeName}` }); continue; }
    resolved.push({ t, typeName, rel, how, via, hintKey: info.hintKey, hint: info.hint, pageAbs: info.abs });
  }
  const byKey = new Map();
  for (const r of resolved) {
    const key = r.rel + '::' + r.typeName;
    if (!byKey.has(key)) byKey.set(key, { ...r, members: extractMembers(r.rel, r.typeName), pages: [] });
    byKey.get(key).pages.push(r.t);
  }
  const nameSet = new Set();
  for (const v of byKey.values()) for (const m of v.members) nameSet.add(m.name);

  // 两遍：先按名字收集声明文件（歧义判定），再带 B-2 排除规则重数
  DECL_TYPES = new Map();
  exclOtherType = false;
  const pre = scanTree([...nameSet], new Map());
  for (const n of nameSet) {
    const files = pre.get(n).declFiles;
    DECL_TYPES.set(n, new Set());
    for (const f of files) for (const ty of typeNamesInFile(f)) DECL_TYPES.get(n).add(ty);
  }
  exclOtherType = true;
  const ownFiles = new Map();
  for (const v of byKey.values()) {
    for (const m of v.members) {
      if (!ownFiles.has(m.name)) ownFiles.set(m.name, new Set());
      ownFiles.get(m.name).add(v.rel);
      if (!OWN_TYPES.has(m.name)) OWN_TYPES.set(m.name, new Set());
      OWN_TYPES.get(m.name).add(v.typeName);
    }
  }
  const st = scanTree([...nameSet], ownFiles);
  const ext = scanExtensionNames([...nameSet]);

  const out = [];
  for (const v of byKey.values()) {
    const srcText = fs.readFileSync(path.join(SRC_CODE, v.rel), 'utf8');
    const isEnumType = new RegExp(String.raw`\benum\s+${v.typeName}\b`).test(srcText);
    const enumRefl = isEnumType ? scanEnumReflection(v.typeName) : null;
    const reflAny = scanReflectionAny(v.typeName);
    for (const m of v.members) {
      const r = st.get(m.name);
      const raw = r.rawAccess, excl = r.exclOtherType;
      const attrib = raw - excl;
      const callSites = attrib + r.bareCallOwn;
      const declFiles = r.declFiles.size;
      const otherTypes = [...(DECL_TYPES.get(m.name) || [])].filter(t => t !== v.typeName);
      // 虚函数家族：本页声明是 abstract，其余声明全是 override => 它们是同一个成员的多态实现，
      // 不构成「同名不同成员」的歧义（B-2 的例外，GetVirtualStageCount / GetTier 属这一类）
      const mods = r.declMods;
      const pageMod = mods.get(v.rel);
      const others = [...mods.entries()].filter(([f]) => f !== v.rel);
      const family = pageMod === 'abstract' && others.length > 0 && others.every(([, k]) => k === 'override');
      const reasons = [];
      const notes = [];
      if (m.kind === 'enum-member') {
        if (enumRefl) reasons.push(`B-6_ENUM_REFLECTION(typeof(${v.typeName}) 被 ${enumRefl[0]} 反射消费；枚举按底层整数序列化，成员名在文本里一次都不出现 → 0 引用不等于没人用)`);
        else notes.push('B-6_NOT_TRIGGERED(本 enum 类型未检出 typeof 反射消费)');
      }
      if (declFiles > 1 && !family) reasons.push(`B-2_AMBIGUOUS_DECLARERS(另有 ${otherTypes.join('/')} 声明同名成员；已按接收者标识符剔除 ${excl} 处，剩 ${attrib} 处仍是名字层面计数)`);
      if (declFiles > 1 && family) notes.push(`VIRTUAL_FAMILY(${declFiles} 个声明文件是同一 abstract 成员的多态实现，非同名不同成员；override 数已单列)`);
      if (ext.has(m.name)) reasons.push('BCL_LINQ_EXTENSION_COLLISION(全树有同名扩展方法，.Name() 可能派发到别的静态类)');
      if (m.generic) reasons.push('GENERIC_MEMBER(泛型成员，调用点写法含类型实参，静态计数不完整)');
      if (r.bareCallOther > 0) reasons.push(`CROSS_FILE_UNQUALIFIED_CALL(另有 ${r.bareCallOther} 处无限定调用在本页类型文件之外，静态不可归属，未计入调用点)`);
      // 只有【接口成员】才是「无法静态判调用」；抽象类里的 abstract/virtual 成员是虚函数家族的根，
      // 它的每一个实现都已被 override 计数枚举，属 MEASURED（GetVirtualStageCount 属这一类）
      if (m.ownerIsInterface && (m.noBody || m.ifaceLike)) reasons.push('INTERFACE_MEMBER(接口成员，静态无法判「谁实现了它并调用」)');
      if (BCL_LINQ.has(m.name)) reasons.push(`BCL_LINQ_NAME(${m.name} 是 BCL/Linq 常见扩展名)`);
      if (reflAny) reasons.push('REFLECTION_PRESENT(全树存在 typeof(Type)+GetProperty/GetMethod/GetField)');
      const status = reasons.length ? 'UNSUPPORTED' : 'MEASURED';
      out.push({
        page: v.pages, typeName: v.typeName, name: m.name, kind: m.kind, decl: `${v.rel}:${m.declLine}`,
        hits: r.hits, declSites: r.declSites, rawAccess: raw, exclOtherType: excl, attribAccess: attrib,
        bareCallOwn: r.bareCallOwn, bareCallOther: r.bareCallOther, bareRead: r.bareRead,
        callSites, overrides: r.overrides, abstractDecls: r.abstractDecls, declFiles, family,
        status, reasons, notes, sites: r.sites, exclSites: r.exclSites,
        dead: status === 'MEASURED' && r.overrides > 0 && callSites === 0,
      });
    }
  }
  out.sort((a, b) => (a.page[0] < b.page[0] ? -1 : a.page[0] > b.page[0] ? 1 : a.decl < b.decl ? -1 : 1));
  // 抽取器召回自检（gates §23c：先证明提取器看得见属性和字段）
  const recall = [];
  for (const v of byKey.values()) {
    if (!v.pageAbs) continue;
    const mentioned = backtickIdents(v.pageAbs);
    const got = new Set(v.members.map(m => m.name));
    const miss = [...mentioned].filter(x => !got.has(x) && /^[A-Z]/.test(x));
    if (miss.length) recall.push({ page: v.pages[0], n: miss.length, sample: miss.slice(0, 8).join(',') });
  }
  return { out, resolved, unresolved, byKey, ext, recall, csCount: indexTree().length };
}

function readScope(file) {
  return fs.readFileSync(path.resolve(DOC_ROOT, file), 'utf8').split(/\r?\n/).map(s => s.trim()).filter(s => s.startsWith('content/'));
}

function main() {
  const argv = process.argv.slice(2);
  // --dump 输出原始计数（仅作证据，不构成任何判定）；放在自检之前以便自检失败时仍能取证
  const di = argv.indexOf('--dump');
  if (di >= 0) {
    const n = argv[di + 1];
    if (!n) { console.error('--dump 需要一个成员名'); process.exit(2); }
    const r2 = scanTree([n], new Map()).get(n);
    console.log('RAW DUMP（不作判定，仅证据）');
    console.log(JSON.stringify({ hits: r2.hits, declSites: r2.declSites, rawAccess: r2.rawAccess, bareOwn: r2.bareCallOwn, bareOther: r2.bareCallOther, bareRead: r2.bareRead, overrides: r2.overrides, abstractDecls: r2.abstractDecls, declFiles: [...r2.declFiles], sites: r2.sites }, null, 1));
    process.exit(0);
  }
  let self;
  try { self = selftest(); }
  catch (e) { console.error('自检抛错（源码树不可读?）:', e.message); process.exit(2); }
  if (self.pass < self.total) {
    console.log('\n阳性对照未全过 —— 探针不可信，不出任何结论。');
    process.exit(2);
  }
  if (self.rpass < self.rtotal) {
    console.log('\n源文件定位探针未全过 —— 定位不可信，不出任何结论。');
    process.exit(2);
  }
  if (argv.includes('--selftest')) process.exit(0);
  const si = argv.indexOf('--scope');
  const targets = (argv.includes('--batch') || si >= 0)
    ? readScope(si >= 0 ? argv[si + 1] : 'tools/_deadmember-scope.txt')
    : argv.filter(a => !a.startsWith('--'));
  if (!targets.length) { console.error('用法: node tools/_deadmember.mjs <TypeName|PagePath> | --batch [--scope f]'); process.exit(2); }

  const r = analyzeTargets(targets);
  console.log(`\nsrc HEAD ${SRC_HEAD} · doc HEAD ${DOC_HEAD} · 全树 *.cs = ${r.csCount}（含 bin/）`);
  console.log('\n[逐页源文件解析] 页面 | 类型 | 用的键 | 解析方式 | 命中源文件');
  for (const v of r.resolved) console.log(`  ${v.t} | ${v.typeName} | ${v.hintKey || '(无)'} | ${v.how} | ${v.rel}`);
  console.log('\n页面 | 成员名 | 声明 file:line | override | abstract | 调用点 | kind | 状态 | 原因码');
  console.log('--- | --- | --- | ---: | ---: | ---: | --- | --- | ---');
  for (const o of r.out) {
    const codes = o.reasons.map(x => x.slice(0, x.indexOf('('))).join(',') || (o.notes || []).map(x => x.slice(0, x.indexOf('('))).join(',');
    console.log(`${o.page[0]} | ${o.name} | ${o.decl} | ${o.overrides} | ${o.abstractDecls} | ${o.callSites} | ${o.kind} | ${o.status}${o.dead ? ' DEAD' : ''} | ${codes}`);
  }
  const measured = r.out.filter(o => o.status === 'MEASURED');
  const unsupported = r.out.filter(o => o.status === 'UNSUPPORTED');
  const dead = r.out.filter(o => o.dead);
  const enumRows = r.out.filter(o => o.kind === 'enum-member');
  const enumDown = enumRows.filter(o => o.reasons.some(x => x.startsWith('B-6')));
  console.log(`\n分母: 页 ${targets.length} / 解析成功 ${r.resolved.length} / UNRESOLVED ${r.unresolved.length} / 唯一类型 ${r.byKey.size}`);
  const byKeyCount = {};
  for (const v of r.resolved) byKeyCount[v.hintKey || '(无键)'] = (byKeyCount[v.hintKey || '(无键)'] || 0) + 1;
  const byVia = {};
  for (const v of r.resolved) byVia[v.via] = (byVia[v.via] || 0) + 1;
  console.log(`键分布: ${Object.entries(byKeyCount).map(([k, n]) => `${k}=${n}`).join('  ')}`);
  console.log(`定位方式: ${Object.entries(byVia).map(([k, n]) => `${k}=${n}`).join('  ')}`);
  console.log(`成员总数 ${r.out.length}`);
  console.log(`MEASURED ${measured.length} · UNSUPPORTED ${unsupported.length}（不算成果）· 死成员(override>0 且 callSites=0 且 MEASURED) ${dead.length}`);
  console.log(`枚举成员 ${enumRows.length} 条，其中因 typeof 反射消费降级 UNSUPPORTED ${enumDown.length} 条`);
  if (r.unresolved.length) { console.log('\nUNRESOLVED:'); for (const u of r.unresolved) console.log(`  ${u.t} — ${u.why}`); }
  if (r.recall.length) { console.log('\n抽取器召回自检（页面 backtick 提到但没抽成成员的标识符）:'); for (const x of r.recall.slice(0, 20)) console.log(`  ${x.page} 缺 ${x.n}: ${x.sample}`); }
  console.log('\nUNSUPPORTED 盲区层级：① 泛型成员调用 Foo<T>() ② 接口/抽象成员实现 ③ BCL/Linq 扩展方法按类型派发 ④ 类型自身（x.Foo() 静态分不清接收者）⑤ B-6 枚举按整数序列化，成员名在文本里根本不出现');
  console.log('免责: 调用点数=0 是弱信号，不是「没人用」的证据（源码树本身不完整，handoff §3.1）；本工具已被证实存在「凭空造调用点」的失效模式（SetLeader 未剔除跨类型串味时 callSites 曾报 9 而真实为 8）。');
  process.exit(r.unresolved.length ? 1 : 0);
}

main();