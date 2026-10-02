// tools/_v147_inventory.mjs
// Builds tools/_v147_inventory.json: every top-level declared type in
// ../bannerlord-1.4.7 (relative to this repo's parent dir), mapped to a docs
// area directory + page filename, for the v1.4.7 API tree.
//
// ---------------------------------------------------------------------------
// isR1ExtraNoiseTypeName from ./lib/handwritten-policy.mjs.
//
// NOISE FILTER: per Lead update #4 this script keeps NO local noise list. The
// boss artifact tools/_dir-map-canonical.json owns exclusion via
// excludeNamespaces + excludeSuffixes (resolutionOrder step 1, hard skip, no
// page, counted separately as `excluded`). Anything that looks like noise but is
// not excluded by the artifact is reported to boss, never patched locally.
// ---------------------------------------------------------------------------
// SOURCE SCOPE
// ---------------------------------------------------------------------------
// Root: C:/WorkSpace/Bannerlord/bannerlord-1.4.7 (all module dirs except .git)

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..'); // BannerlordCode.github.io
const SRC = join(ROOT, '..', 'bannerlord-1.4.7');

// artifact-owned noise gate (resolutionOrder step 1: excludeNamespaces +
// excludeSuffixes + sourceTypoNamespaces — a hard skip, no page, counted)
// FAIL-CLOSED gate: 期望值从 artifact 自己的 _parseContract 读，不写死在这里。
import { expectedDirMapSchema } from './_dir_map_contract.mjs';
const CANON0 = JSON.parse(readFileSync(join(__dirname, '_dir-map-canonical.json'), 'utf8'));
if (CANON0.schemaVersion !== expectedDirMapSchema(CANON0)) {
  console.error(
    'ARTIFACT_SHAPE_CHANGED: _dir-map-canonical.json 自报 schemaVersion=' + CANON0.schemaVersion +
    '，与其 _parseContract 不符。FAIL-CLOSED 退出。'
  );
  process.exit(1);
}
const EXCL_NS = CANON0.excludeNamespaces || [];
const EXCL_SUFFIX = CANON0.excludeSuffixes || [];
const EXCL_TYPO = CANON0.sourceTypoNamespaces || [];
function excludedByArtifact(ns) {
  if (!ns) return null;
  for (const e of [...EXCL_NS, ...EXCL_TYPO]) if (ns === e || ns.startsWith(`${e}.`)) return `excludeNamespaces/sourceTypoNamespaces:"${e}"`;
  const segs = ns.split('.');
  for (const s of EXCL_SUFFIX) {
    for (const seg of segs) if (seg === s || seg.startsWith(s)) return `excludeSuffixes:"${s}"`;
  }
  return null;
}
//
// ---------------------------------------------------------------------------
// NAMESPACE -> API BUCKET MAPPING  -- CANONICAL, boss-owned
// ---------------------------------------------------------------------------
// Source of truth: tools/_dir-map-canonical.json (version 2026-08-24).
// This script IMPORTS that file and applies it verbatim. Do NOT hand-maintain a
// second rule list here: the legacy v1.4.5 tree is not a safe inference base
// (2199 type names duplicated across buckets, 171 of 513 namespaces split), so
// a bucket is never derived by counting legacy pages.
//
// Execution order (boss-specified):
//   1. entryPointDirs override table, matched case-insensitively on the TYPE
//      name, applied ON TOP of the prefix rules (it exists because prefix rules
//      misjudge modder entry-point types: prefix rules send
//      TaleWorlds.MountAndBlade -> mission-ext, so MBSubModuleBase / Module /
//      ModuleManager must be overridden to core).
//   2. otherwise the 38 ordered prefix rules, first match wins, segment-aware
//      (ns === prefix || ns.startsWith(prefix + '.')).
//   3. otherwise defaultDir (core-extra) AND the namespace is recorded in the
//      `unmapped` array of _v147_inventory.json - never silently guessed.
// Note: the boss file lists "saveablet typedefiner" (stray space); this script
// normalises whitespace before matching so SaveableTypeDefiner resolves.
//
// ONE TYPE = ONE PATH. Never write a type into two buckets; never reproduce the
// legacy 2199-duplicate pattern. Same-bucket simple-name collision -> page file
// is <NamespaceLeaf>__<TypeName>.md (canonical collisionRule), noted on the
// area _index.md (nav worker owns that file).
//
// ---------------------------------------------------------------------------
// PAGE SELECTION (boss scope, revision 2)
// ---------------------------------------------------------------------------
//  The FULL inventory is always built and dumped, so the gap is measurable.
//  Only a SELECTED subset is written as zh skeleton pages:
//   (A) every mod-entry facade type (full coverage), see FACADE_RULES
//   (B) per-namespace sample: up to NAMESPACE_CAP public types per namespace,
//       ranked by publicMemberCount desc then typeName asc, so all ~437
//       namespaces contribute.
//  Everything not selected lands in the `missing` array with a per-namespace
//  reason. No silent drops.
//
// ---------------------------------------------------------------------------

import { readFileSync as _rfs } from 'node:fs';

export const CANON = JSON.parse(readFileSync(join(__dirname, '_dir-map-canonical.json'), 'utf8'));
// 同一 artifact 的第二次读入：同样 fail-closed（模块级 export，进程早期就炸）。
if (CANON.schemaVersion !== expectedDirMapSchema(CANON)) {
  console.error(
    'ARTIFACT_SHAPE_CHANGED: _dir-map-canonical.json 自报 schemaVersion=' + CANON.schemaVersion +
    '，与其 _parseContract 不符。FAIL-CLOSED 退出。'
  );
  process.exit(1);
}

// type name (lowercased, whitespace-stripped) -> human-facing bucket
// The artifact's entryPointDirs shape has changed once already; accept both:
//   { BucketName: ["TypeName", ...] }   and   { "TypeName": "bucket" }.
// are normalised to alphanumerics so an older hyphenated/space-separated entry
// still resolves.
export const ENTRY_POINT_DIRS = (() => {
  const m = new Map();
  const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
  for (const [k, v] of Object.entries(CANON.entryPointDirs)) {
    if (k.startsWith('_')) continue;
    if (Array.isArray(v)) for (const n of v) m.set(norm(n), k);
    else if (typeof v === 'string') m.set(norm(k), v);
  }
  return m;
})();
export const ENTRY_POINT_BUCKETS = [...new Set([...ENTRY_POINT_DIRS.values()])];

// Deep-write pages owned by W4 (worker-15). Skipped by TYPE NAME, not by path,
// so the canonical map can never silently mis-skip. Keyed to the Lead's list,
// with two canonical-map corrections applied (reported back):
//   ViewModel -> core-extra (artifact `_resolved`), not viewmodel
//   MBDebug   -> engine (artifact prefix rule), not core-extra
const W4_OWNED_TYPES = new Map(Object.entries({
  Campaign: 'campaign', IFaction: 'campaign', CampaignBehaviorBase: 'campaign',
  CampaignEvents: 'campaign', CampaignGameStarter: 'campaign',
  MBObjectManager: 'campaign-ext', MBObjectBase: 'campaign-ext',
  MBSubModuleBase: 'core', Module: 'core',
  Game: 'core-extra',
  SaveManager: 'save-system', SaveContext: 'save-system', LoadContext: 'save-system',
  Mission: 'mission', MissionBehavior: 'mission', MissionState: 'mission', Agent: 'mission',
  ScreenBase: 'gui', ScreenManager: 'gui', GauntletLayer: 'engine', ScreenLayer: 'gui',
  ViewModel: 'core-extra', MBDebug: 'engine',
}));

const UNMAPPED_NS = new Map();

// ------------------------------------------------------------------- mapping
// matchSemantics: longest-prefix-wins (artifact rules[] is also physically
// sorted, so first-match agrees; longest-match is the documented semantic).
const SORTED_RULES = [...CANON.rules].sort((a, b) => b.prefix.length - a.prefix.length);

const ROUTED = { entryPointDirs: 0, prefixRule: 0, defaultDir: 0 };
// Implements the artifact's _resolutionPseudocode verbatim:
//   1 excluded -> EXCLUDED            (handled before mapType is ever called)
//   2 dir = longestPrefixMatch(ns); dir = dir || defaultDir;   // NO early return
//   3 if (entryPointDirs[typeName]) dir = entryPointDirs[typeName];  // ALWAYS runs
//   4 defaultDir if step 2 matched nothing AND step 3 has no entry -> unmapped
// The early return in step 2 is the documented silent-failure mode: it makes the
// rule TaleWorlds.MountAndBlade -> mission-ext claim all 7 override targets and
// yields mission=0 / core=0. Gate 3 below asserts that never happens.
const SIM = { earlyReturnVariantB: { mission: 0, core: 0 }, pseudocodeVariantA: { mission: 0, core: 0 } };

function mapType(ns, typeName) {
  const key = String(typeName).toLowerCase().replace(/[^a-z0-9]/g, '');

  // step 2 — longest-prefix-wins, recorded but NOT returned
  let best = null;
  for (const r of SORTED_RULES) {
    if (ns === r.prefix || ns.startsWith(`${r.prefix}.`)) {
      if (!best || r.prefix.length > best.prefix.length) best = r;
    }
  }
  let dir = best ? best.dir : CANON.defaultDir;
  let dirRule = best ? `rule:"${best.prefix}"->${best.dir}` : `defaultDir:${CANON.defaultDir} (no canonical prefix rule matched)`;
  if (best) ROUTED.prefixRule += 1; else ROUTED.defaultDir += 1;
  if (dir === 'mission') SIM.pseudocodeVariantA.mission += 1;
  if (dir === 'core') SIM.pseudocodeVariantA.core += 1;

  // step 3 — override layer, runs for EVERY type
  const ov = ENTRY_POINT_DIRS.get(key);
  if (ov) {
    ROUTED.entryPointDirs += 1;
    dir = ov;
    dirRule = `entryPointDirs:${typeName}->${ov}`;
    if (ov === 'mission') SIM.pseudocodeVariantA.mission += 1;
    if (ov === 'core') SIM.pseudocodeVariantA.core += 1;
  }

  if (!best && !ov) {
    const e = UNMAPPED_NS.get(ns) || { namespace: ns, typeCount: 0, dirAssigned: CANON.defaultDir };
    e.typeCount += 1;
    UNMAPPED_NS.set(ns, e);
  }
  return { dir, dirRule };
}

// ------------------------------------------------------------------- facade
// Mod-entry facade surface: the types a mod author opens first. Derived set,
// approved by the Lead (answer #1) with MBSubModuleBase + Module removed (W4's).
const FACADE_RULES = [
  { id: 'submodule', test: (t) => /SubModule$/.test(t.typeName) && t.typeName !== 'MBSubModuleBase' },
  { id: 'starter', test: (t) => /(?:Game)?Starter$/.test(t.typeName) },
  { id: 'behaviour-host', test: (t) => /^(?:Campaign|Mission)Behaviou?rs$/.test(t.typeName) },
  { id: 'modular-contract', test: (t) => /^IModular/.test(t.typeName) || /^IModSubModule$/.test(t.typeName) },
];
const NAMESPACE_CAP = 6; // per-namespace sample size (ranking: publicMemberCount desc)

function facadeReason(t) {
  for (const r of FACADE_RULES) if (r.test(t)) return r.id;
  return null;
}

// ------------------------------------------------------------------- parsing
function walkCs(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    if (e.isDirectory()) walkCs(join(dir, e.name), out);
    else if (e.name.endsWith('.cs')) out.push(join(dir, e.name));
  }
  return out;
}

// strip comments + string/char literals so brace counting is trustworthy
function scrub(line, state) {
  let out = '';
  let i = 0;
  while (i < line.length) {
    const c = line[i];
    const two = line.slice(i, i + 2);
    if (state.block) {
      if (two === '*/') { state.block = false; i += 2; continue; }
      i += 1;
      continue;
    }
    if (two === '/*') { state.block = true; i += 2; continue; }
    if (two === '//') break;
    if (c === '"') {
      if (line[i + 1] === '"' && line[i + 2] === '"') { i += 3; while (i < line.length && line.slice(i, i + 3) !== '"""') i += 1; i += 3; continue; }
      i += 1;
      while (i < line.length && line[i] !== '"') { if (line[i] === '\\') i += 1; i += 1; }
      i += 1;
      out += '""';
      continue;
    }
    if (c === "'") {
      i += 1;
      while (i < line.length && line[i] !== "'") { if (line[i] === '\\') i += 1; i += 1; }
      i += 1;
      out += "''";
      continue;
    }
    out += c;
    i += 1;
  }
  return out;
}

const MODIFIER_WORDS = new Set([
  'public', 'internal', 'private', 'protected', 'static', 'abstract', 'sealed',
  'partial', 'readonly', 'ref', 'unsafe', 'new', 'virtual', 'override', 'extern',
  'async', 'volatile', 'fixed', 'implicit', 'explicit', 'const', 'event',
]);
const TYPE_KINDS = new Set(['class', 'struct', 'interface', 'enum', 'delegate']);
const TYPE_DECL_RE = new RegExp(
  '^\\s*((?:(?:public|internal|private|protected)\\s+)*(?:(?:static|abstract|sealed|partial|readonly|ref|unsafe|new|virtual|override|extern|async|volatile|fixed|const)\\s+)*)' +
  '(class|struct|interface|enum|delegate|record)\\s+([A-Za-z_]\\w*)'
);
const MEMBER_RE = new RegExp(
  '^\\s*((?:(?:public|internal|private|protected|static|readonly|virtual|override|abstract|sealed|extern|async|new|const|volatile|unsafe|event|delegate)\\s+)*)' +
  '([A-Za-z_][\\w<>,\\.\\[\\]\\? ]*?)\\s*([A-Za-z_]\\w*)\\s*(\\(|\\{|=|;|:)'
);

function topLevelParamCount(params) {
  let depth = 0, count = params.trim() === '' ? 0 : 1;
  for (const ch of params) {
    if ('([<'.includes(ch)) depth += 1;
    else if (')]>'.includes(ch)) depth -= 1;
    else if (ch === ',' && depth === 0) count += 1;
  }
  return count;
}

function parseFile(absPath, relPath, module) {
  let text;
  try { text = readFileSync(absPath, 'utf8'); } catch { return []; }
  const rawLines = text.split(/\r?\n/);
  const state = { block: false };
  const lines = rawLines.map((l) => scrub(l, state));

  let namespace = '';
  let depth = 0; // brace depth in scrubbed text
  const typeDepths = []; // stack of depths where a type body starts
  const found = [];
  const nsSeen = [];

  // Build a per-type body scan: when we hit a top-level type we record its
  // start depth, then collect members until the body closes.
  let pending = null; // { type, depth (body depth), members: [] }

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];
    const before = depth;
    depth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;

    // member collection for the open type
    if (pending && before === pending.depth) {
      const m = line.match(MEMBER_RE);
      if (m) {
        pending.members.push({
          text: rawLines[idx].trim(),
          access: (m[1].match(/(?:public|internal|private|protected)/) || [''])[0] || 'implicit',
          kind: m[4] === '{' ? (/\bevent\b/.test(line) ? 'event' : /get|set|add|remove/.test(line) ? 'property' : 'method') : m[4] === '(' ? 'method' : 'field',
          type: m[2].trim(),
          params: m[4] === '(' ? topLevelParamCount(line.slice(line.indexOf('(', line.indexOf(m[3]) + m[3].length))) : 0,
        });
      } else if (/^\s*\[/.test(line) && /^\s*\]$/.test(lines[idx + 1] || '')) {
        pending.members.push({ text: rawLines[idx].trim(), access: 'implicit', kind: 'attribute', type: '', params: 0 });
      }
    }

    if (pending && depth <= pending.depth - 1) {
      found.push(pending.type);
      pending = null;
    }

    if (before === 0) {
      const nsMatch = line.match(/^\s*namespace\s+([A-Za-z_][\w.]*)/);
      if (nsMatch) { namespace = nsMatch[1]; nsSeen.push(namespace); }
    }

    // namespace-depth = depth after the namespace opening brace (block form)
    const nsBodyDepth = 1;
    if (depth === nsBodyDepth || (depth === 0 && !namespace && false)) {
      const dm = line.match(TYPE_DECL_RE);
      if (dm && before === 1) {
        const mods = (dm[1] || '').trim().split(/\s+/).filter(Boolean);
        const kw = dm[2];
        let name = dm[3];
        let kind = TYPE_KINDS.has(kw) ? kw : 'class';
        if (kw === 'record') kind = /^\s*(?:struct|record\s+struct)/.test(line) ? 'struct' : 'class';
        if (!MODIFIER_WORDS.size) kind = 'class';
        const access = mods.find((m) => ['public', 'protected', 'internal', 'private'].includes(m)) || 'internal';
        const flags = mods.filter((m) => ['static', 'abstract', 'sealed', 'partial'].includes(m));
        // base type
        let baseType = '';
        let declText = '';
        let j = idx;
        let buf = rawLines[idx].trim();
        while (j + 1 < rawLines.length && !/[{;]|\)/.test(buf) && buf.length < 300) {
          j += 1;
          buf += ' ' + rawLines[j].trim();
        }
        declText = buf.replace(/\s+/g, ' ').replace(/\s*\{.*$/, '').trim();
        if (kind === 'delegate') {
          // `public delegate void Foo(...)`: dm[3] captured the RETURN type.
          const dn = declText.match(/\bdelegate\s+(?:ref\s+)?[A-Za-z_][\w<>\[\],\.]*\s+([A-Za-z_]\w*)\s*[<(]/);
          if (dn) name = dn[1];
        }
        const colon = declText.indexOf(':');
        if (colon >= 0) baseType = declText.slice(colon + 1).split('<')[0].trim();
        if (kind === 'delegate') baseType = (declText.match(/delegate\s+([\w<>,\[\]\.]+)/) || ['', ''])[1];
        if (kind === 'enum') baseType = 'System.Enum';
        if (kind === 'interface') baseType = '';
        if (!baseType && kind === 'class' && name) baseType = access === 'interface' ? '' : '';

        found.push({
          typeName: name,
          namespace,
          module,
          kind,
          access: access === 'protected' ? 'protected' : access === 'private' ? 'internal' : access,
          flags,
          baseType,
          sourceFile: relPath,
          declLine: idx + 1,
          declText,
          _bodyDepth: depth,
          _members: [],
        });
        // defer member collection until the body opens
        pending = null;
        // look ahead is unnecessary: we capture members by depth instead
      }
    }
  }

  // Second pass: members are computed by depth per type, done in parseFile2 style
  return found.map((t) => {
    const state2 = { block: false };
    const mlines = rawLines.map((l) => scrub(l, state2));
    let d = 0;
    const bodyStart = t._bodyDepth;
    const members = [];
    for (let i = t.declLine; i < mlines.length; i++) {
      const before = d;
      const line = mlines[i];
      d += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      if (before !== bodyStart + 1) continue;
      const raw = rawLines[i].trim();
      if (!raw || raw.startsWith('//') || raw.startsWith('*')) continue;
      if (/^\[/.test(raw)) continue;
      const m = raw.match(MEMBER_RE);
      if (!m) continue;
      const access = (m[1].match(/(?:public|internal|private|protected)/) || [''])[0] || 'implicit';
      let kind = 'field';
      if (/\bevent\b/.test(raw)) kind = 'event';
      else if (m[4] === '(') kind = 'method';
      else if (m[4] === '{' || /\{\s*(get|set|add|remove)/.test(raw)) kind = 'property';
      else if (m[4] === '=') kind = 'field';
      else if (m[4] === ';' || m[4] === ':') kind = 'field';
      let params = 0;
      if (kind === 'method') {
        const open = raw.indexOf('(', raw.indexOf(m[3]) + m[3].length);
        if (open >= 0) {
          let close = open, p = 0;
          for (let k = open; k < raw.length; k++) {
            if (raw[k] === '(') p += 1;
            else if (raw[k] === ')') { p -= 1; if (p === 0) { close = k; break; } }
          }
          params = topLevelParamCount(raw.slice(open + 1, close));
        }
      }
      members.push({ text: raw.replace(/\s+/g, ' '), access, kind, type: m[2].trim(), params });
      if (d <= bodyStart) break;
    }
    delete t._bodyDepth;
    delete t._members;
    return { ...t, memberCount: members.length, publicMemberCount: members.filter((m) => m.access === 'public' || m.access === 'protected').length, members };
  });
}

// ---------------------------------------------------------------------- main
const modules = readdirSync(SRC, { withFileTypes: true })
  .filter((e) => e.isDirectory() && e.name !== '.git')
  .map((e) => e.name);

let scannedFiles = 0;
let allTypes = [];
for (const m of modules) {
  for (const abs of walkCs(join(SRC, m))) {
    scannedFiles += 1;
    const rel = relative(ROOT, abs).split('\\').join('/'); // repo-relative to BannerlordCode.github.io
    allTypes.push(...parseFile(abs, rel, m));
  }
}

// artifact noise gate (resolutionOrder step 1) + dedupe by namespace+typeName
const seen = new Set();
const kept = [];
const excludedByNs = new Map();
let droppedExcluded = 0;
let droppedDup = 0;
for (const t of allTypes) {
  if (!t.typeName || !t.namespace) { droppedDup += 1; continue; }
  const ex = excludedByArtifact(t.namespace);
  if (ex) {
    droppedExcluded += 1;
    const e = excludedByNs.get(t.namespace) || { namespace: t.namespace, typeCount: 0, rule: ex };
    e.typeCount += 1;
    excludedByNs.set(t.namespace, e);
    continue;
  }
  const key = `${t.namespace}\u0000${t.typeName}`;
  if (seen.has(key)) { droppedDup += 1; continue; }
  seen.add(key);
  kept.push(t);
}

kept.sort((a, b) => (a.namespace < b.namespace ? -1 : a.namespace > b.namespace ? 1 : a.typeName < b.typeName ? -1 : 1));

// canonical bucket + rule id per type
for (const t of kept) {
  const m = mapType(t.namespace, t.typeName);
  t.dir = m.dir;
  t.dirRule = m.dirRule;
  t.leafRel = `${t.dir}/${t.typeName}`;
}

// canonical collisionRule: same dir + same simple type name -> <NamespaceLeaf>__<TypeName>.md
const byDirName = new Map();
for (const t of kept) {
  const k = `${t.dir}\u0000${t.typeName}`;
  if (!byDirName.has(k)) byDirName.set(k, []);
  byDirName.get(k).push(t);
}
const collisions = [];
let suffixed = 0;
for (const group of byDirName.values()) {
  if (group.length === 1) { group[0].pageFile = `${group[0].typeName}.md`; continue; }
  const sorted = [...group].sort((a, b) => (a.namespace < b.namespace ? -1 : 1));
  const used = new Set();
  for (const t of sorted) {
    const segs = t.namespace.split('.');
    let take = 1;
    let file = `${segs.slice(-1).join('.')}__${t.typeName}.md`;
    // canonical collisionRule is <NamespaceLeaf>__<TypeName>.md; extend with more
    // namespace segments only when that would still collide inside the bucket.
    while (used.has(file) && take < segs.length) {
      take += 1;
      file = `${segs.slice(-take).join('.')}__${t.typeName}.md`;
    }
    used.add(file);
    t.pageFile = file;
    t.nameCollision = true;
    t.collisionExtended = take > 1;
    suffixed += 1;
  }
  collisions.push({ dir: sorted[0].dir, typeName: sorted[0].typeName, namespaces: sorted.map((t) => t.namespace), files: sorted.map((t) => t.pageFile) });
}
const collisionGroups = collisions.length;

// W4 owns the deep-write pages: skip by TYPE NAME (canonical map decides the dir).
for (const t of kept) {
  t.leafRel = `${t.dir}/${t.pageFile}`;
  t.w4Owned = W4_OWNED_TYPES.has(t.typeName);
  if (t.w4Owned) t.w4DirExpected = W4_OWNED_TYPES.get(t.typeName);
}

// --------------------------------------------------------------- selection
// (A) facade types, full coverage; (B) per-namespace sample, cap NAMESPACE_CAP.
const selected = new Set();
const facadeById = {};
for (const t of kept) {
  const fid = facadeReason(t);
  if (fid) { selected.add(t); t.facade = true; t.facadeRule = fid; (facadeById[fid] = facadeById[fid] || []).push(`${t.namespace}.${t.typeName}`); }
}
const byNs = new Map();
for (const t of kept) {
  if (!byNs.has(t.namespace)) byNs.set(t.namespace, []);
  byNs.get(t.namespace).push(t);
}
const missing = [];
for (const [ns, list] of byNs) {
  const rest = list
    .filter((t) => !selected.has(t))
    .sort((a, b) => (b.publicMemberCount - a.publicMemberCount) || (a.typeName < b.typeName ? -1 : 1));
  for (const t of rest.slice(0, NAMESPACE_CAP)) { selected.add(t); t.facade = false; t.sample = true; }
  if (rest.length > NAMESPACE_CAP) {
    missing.push({
      namespace: ns,
      dir: list[0].dir,
      typeCount: list.length,
      written: Math.min(NAMESPACE_CAP, rest.length),
      reason: `session scope: namespace sample capped at ${NAMESPACE_CAP} types (ranked by publicMemberCount); ${rest.length - NAMESPACE_CAP} types not written this session`,
      notWritten: rest.slice(NAMESPACE_CAP).map((t) => t.typeName),
    });
  }
}
for (const e of excludedByNs.values()) {
  missing.push({ ...e, dir: null, written: 0, reason: `hard-skipped by the boss artifact noise gate (${e.rule}); no page, counted separately`, notWritten: [] });
}
missing.push({
  namespace: '(1.4.5 gameplay/ bucket)',
  dir: null,
  typeCount: 18,
  written: 0,
  reason: 'PARITY GAP: the canonical artifact has no gameplay bucket. SandBox.* -> sandbox/ and StoryMode.* -> storymode/, so the 18 v1.4.5 gameplay/ pages have no 1.4.7 URL counterpart (escalated by the Lead).',
  notWritten: [],
});
missing.push({
  namespace: 'TaleWorlds.NavigationSystem',
  dir: 'core-extra',
  typeCount: 0,
  written: 0,
  reason: 'No navigationsystem bucket in the artifact, and bannerlord-1.4.7/TaleWorlds.NavigationSystem contains only Properties/ + a .csproj, zero .cs files, so 0 types exist.',
  notWritten: [],
});

const chosen = kept.filter((t) => selected.has(t));

const pages = chosen
  .filter((t) => !t.w4Owned)
  .map((t) => ({
    lang: 'zh',
    path: `content/v1.4.7/zh/api/${t.leafRel}`,
    leafRel: t.leafRel,
    dir: t.dir,
    dirRule: t.dirRule,
    title: t.typeName,
    typeName: t.typeName,
    namespace: t.namespace,
    facade: Boolean(t.facade),
    kind: t.kind,
  }))
  .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));

const unmapped = [...UNMAPPED_NS.values()].sort((a, b) => b.typeCount - a.typeCount);
const matchedByRule = kept.filter((t) => !t.dirRule.startsWith('defaultDir:')).length;

// ------------------------------------------------------------------ gate 3
// Hard assertion: every bucket named in the artifact's entryPointDirs must
// receive types, and the two carve-out buckets must hold the 7 overrides.
// This is the gate that would have caught the step-3 failure immediately.
const bucketTypes = {};
for (const t of kept) bucketTypes[t.dir] = (bucketTypes[t.dir] || 0) + 1;
const gate3 = [];
for (const dir of ENTRY_POINT_BUCKETS) {
  if (!bucketTypes[dir]) gate3.push(`bucket "${dir}" is declared in entryPointDirs but has 0 types`);
}
if ((bucketTypes.mission || 0) < 5) gate3.push(`mission has ${bucketTypes.mission || 0} types, expected >= 5`);
if ((bucketTypes.core || 0) < 2) gate3.push(`core has ${bucketTypes.core || 0} types, expected >= 2`);
if (gate3.length) {
  console.error('GATE 3 FAILED:');
  for (const g of gate3) console.error('  ' + g);
  console.error('per-bucket type counts: ' + JSON.stringify(bucketTypes));
  process.exitCode = 1;
}

const out = {
  generatedFrom: SRC,
  version: 'v1.4.7',
  canonicalMap: { file: 'tools/_dir-map-canonical.json', version: CANON.version, ruleCount: CANON.rules.length, defaultDir: CANON.defaultDir, collisionRule: CANON.collisionRule },
  modulesScanned: modules.length,
  filesScanned: scannedFiles,
  typeCount: kept.length,
  namespaceCount: new Set(kept.map((t) => t.namespace)).size,
  matchedByCanonicalRule: matchedByRule,
  routedBy: { entryPointDirsStep3: ROUTED.entryPointDirs, prefixRuleStep2: ROUTED.prefixRule, defaultDirStep4: ROUTED.defaultDir },
  orderSimulation: SIM,
  parityGaps: CANON.parityGaps || null,
  sourceTypoNamespaces: CANON.sourceTypoNamespaces || [],
  unmatchedTypesUsingDefault: kept.length - matchedByRule,
  selectedTypeCount: chosen.length,
  pageCount: pages.length,
  facadePageCount: pages.filter((p) => p.facade).length,
  noiseBypass: ['TaleWorlds.ActivitySystem*', 'TaleWorlds.AchievementSystem*'],
  dropped: { excludedByArtifactGate: droppedExcluded, duplicateOrUnparsable: droppedDup },
  excludedNamespaces: [...excludedByNs.values()].sort((a, b) => b.typeCount - a.typeCount),
  parityGaps: [
    '1.4.5 gameplay/ has no 1.4.7 counterpart: the artifact has no gameplay bucket (SandBox.* -> sandbox/, StoryMode.* -> storymode/)',
    'no navigationsystem bucket in the artifact, and TaleWorlds.NavigationSystem ships no .cs files in 1.4.7',
  ],
  collisions,
  facadeByRule: facadeById,
  unmapped,
  missing,
  pages,
  types: kept,
};
writeFileSync(join(__dirname, '_v147_inventory.json'), JSON.stringify(out, null, 1));

// ---- report
console.log(`modules scanned: ${modules.length}   .cs files: ${scannedFiles}   raw decls: ${allTypes.length}`);
console.log(`excluded by artifact noise gate: ${droppedExcluded} types in ${excludedByNs.size} namespaces   dropped dup/unparsable: ${droppedDup}`);
console.log(`TYPES: ${kept.length}   NAMESPACES: ${out.namespaceCount}`);
console.log(`matched by canonical rule: ${matchedByRule}   via defaultDir (unmapped ns): ${kept.length - matchedByRule}`);
console.log(`routed by entryPointDirs (step 3 carve-out): ${ROUTED.entryPointDirs}   by prefix rule (step 2): ${ROUTED.prefixRule}   by defaultDir (step 4): ${ROUTED.defaultDir}`);
console.log(`  variant simulation -> B (early return in step 2): mission=${SIM.earlyReturnVariantB.mission} core=${SIM.earlyReturnVariantB.core} | A (pseudocode, no early return): mission=${SIM.pseudocodeVariantA.mission} core=${SIM.pseudocodeVariantA.core}`);
console.log(`  proof step 3 works -> mission=${kept.filter((t) => t.dir === 'mission').length} core=${kept.filter((t) => t.dir === 'core').length}`);
console.log(`SELECTED (facade + ns sample): ${chosen.length}   PAGES TO WRITE (zh): ${pages.length}   facade pages: ${out.facadePageCount}`);
console.log(`name-collision groups: ${collisionGroups}   suffixed pages: ${suffixed}`);
console.log('kinds: ' + JSON.stringify(kept.reduce((a, t) => ((a[t.kind] = (a[t.kind] || 0) + 1), a), {})));
console.log('access: ' + JSON.stringify(kept.reduce((a, t) => ((a[t.access] = (a[t.access] || 0) + 1), a), {})));
console.log(`missing entries: ${missing.length}   unmapped namespaces: ${unmapped.length}`);
console.log(`GATE 3 (entryPointDirs buckets non-empty): ${gate3.length === 0 ? 'PASS' : 'FAIL -> ' + gate3.join('; ')}`);
console.log('\n=== FACADE TYPES SELECTED ===');
for (const [fid, list] of Object.entries(facadeById)) console.log(`[${fid}] ${list.length}: ${list.join(', ')}`);
console.log('\n=== pages per canonical dir (zh) ===');
const areas = {};
for (const p of pages) areas[p.dir] = (areas[p.dir] || 0) + 1;
for (const [a, c] of Object.entries(areas).sort((a, b) => b[1] - a[1])) console.log(`${a.padEnd(18)} ${c}`);
console.log('\n=== all types per canonical dir (full inventory) ===');
const areasAll = {};
for (const t of kept) areasAll[t.dir] = (areasAll[t.dir] || 0) + 1;
for (const [a, c] of Object.entries(areasAll).sort((a, b) => b[1] - a[1])) console.log(`${a.padEnd(18)} ${c}`);
console.log('\n=== UNMAPPED namespaces (defaultDir assigned, needs boss ruling) ===');
for (const u of unmapped) console.log(`${u.namespace} (${u.typeCount} types)`);
console.log('\n=== name collisions ===');
for (const c of collisions) console.log(`${c.dir}: ${c.namespaces.join(' | ')} -> ${c.files.join(', ')}`);
console.log('\n=== W4-owned types actually skipped (dir per canonical map) ===');
for (const t of kept.filter((x) => x.w4Owned)) {
  const flag = t.dir === t.w4DirExpected ? '' : `  <-- Lead said ${t.w4DirExpected}, canonical says ${t.dir} (${t.dirRule})`;
  console.log(`${t.typeName.padEnd(22)} ${t.namespace.padEnd(46)} -> ${t.leafRel}${flag}`);
}
