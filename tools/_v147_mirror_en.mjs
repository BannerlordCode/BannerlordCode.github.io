// tools/_v147_mirror_en.mjs
// Builds the English mirror of the v1.4.7 API tree from the AUTHORITATIVE type
// inventory (tools/_v147_inventory.json) plus, when it exists, the actual Chinese
// files on disk (disk wins over the inventory).
//
// Facts come from bannerlord-1.4.7 source, never from the Chinese prose: the
// declaration line and every member signature are parsed out of the .cs file.
// Only the *shape* of the page (H1, skeleton marker) is inherited from zh.
//
// Usage:
//   node tools/_v147_mirror_en.mjs --dry-run            # stats + samples, writes nothing
//   node tools/_v147_mirror_en.mjs                       # write content/v1.4.7/en/api/**
//   node tools/_v147_mirror_en.mjs --limit 40            # first N pages (smoke test)
//   node tools/_v147_mirror_en.mjs --dir campaign        # only one bucket
//   node tools/_v147_mirror_en.mjs --print campaign/Hero # print one rendered page
import { readFileSync, existsSync, readdirSync, statSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..');
const SRC_ROOT = resolve(join(REPO, '..', 'bannerlord-1.4.7'));
const INVENTORY = join(REPO, 'tools', '_v147_inventory.json');
const EN_ROOT = join(REPO, 'content', 'v1.4.7', 'en');
const ZH_ROOT = join(REPO, 'content', 'v1.4.7', 'zh');

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const DRY = flag('--dry-run');
const LIMIT = Number(opt('--limit', 0)) || 0;
const ONLY_DIR = opt('--dir', '');
const PRINT = opt('--print', '');

// Deep-write worker owns these leaf pages in BOTH languages. Matched on path AND on
// type name so a bucket disagreement (gui vs screensystem) cannot make us overwrite
// somebody else's page.
const SKIP_PATHS = new Set([
  'api/campaign/Campaign.md', 'api/campaign/IFaction.md', 'api/campaign/CampaignBehaviorBase.md',
  'api/campaign/CampaignEvents.md', 'api/campaign/CampaignGameStarter.md',
  'api/campaign-ext/MBObjectManager.md', 'api/campaign-ext/MBObjectBase.md',
  'api/core/MBSubModuleBase.md', 'api/core/Module.md',
  'api/core-extra/Game.md',
  'api/save-system/SaveManager.md', 'api/save-system/SaveContext.md', 'api/save-system/LoadContext.md',
  'api/mission/Mission.md', 'api/mission/MissionBehavior.md', 'api/mission/MissionState.md', 'api/mission/Agent.md',
  'api/gui/ScreenBase.md', 'api/gui/ScreenManager.md', 'api/gui/ScreenLayer.md',
  'api/screensystem/ScreenBase.md', 'api/screensystem/ScreenManager.md', 'api/screensystem/ScreenLayer.md',
  'api/gui/GauntletLayer.md', 'api/engine/GauntletLayer.md',
  'api/viewmodel/ViewModel.md', 'api/core-extra/ViewModel.md',
  'api/engine/MBDebug.md', 'api/core-extra/MBDebug.md',
]);
const SKIP_TYPES = new Set([
  'Campaign', 'IFaction', 'CampaignBehaviorBase', 'CampaignEvents', 'CampaignGameStarter',
  'MBObjectManager', 'MBObjectBase', 'MBSubModuleBase', 'Module', 'Game',
  'SaveManager', 'SaveContext', 'LoadContext', 'Mission', 'MissionBehavior', 'MissionState', 'Agent',
  'ScreenBase', 'ScreenManager', 'ScreenLayer', 'GauntletLayer', 'ViewModel', 'MBDebug',
]);

const SKELETON = '<!-- v147-skeleton -->';
const norm = (s) => String(s || '').replace(/[`\s]+/g, ' ').trim();
// Anything copied from a Chinese page must be a plain identifier; the zh skeleton
// writes placeholders such as 无（源码未显式声明基类） when a type has no base type.
const CJK = /[\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef\uac00-\ud7af]/;
const idOnly = (s) => { const v = String(s || '').replace(/`/g, '').trim(); return v && !CJK.test(v) && /^[\w.$<>\[\], ]+$/.test(v) ? v : ''; };

/* ------------------------------------------------------------------ manifest */

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (e.endsWith('.md')) out.push(p);
  }
  return out;
}

// zh skeleton pages are the source of truth for path, H1 and declaration shape.
function readZh(f) {
  const text = readFileSync(f, 'utf8');
  const pick = (re) => { const m = text.match(re); return m ? m[1].trim() : ''; };
  // NB: the colon sits INSIDE the bold — `**Namespace:**`, not `**Namespace**:`.
  const srcLine = pick(/\*\*(?:Source|源文件):?\*\*:?\s*`?([^`\n]+)`?/);
  const typeLine = pick(/\*\*(?:Type|类型):?\*\*:?\s*`?([^`\n]+?)`?\s*$/m);
  const baseLine = pick(/\*\*(?:Base|基类):?\*\*:?\s*`?([^`\n]+?)`?\s*$/m);
  const nsLine = pick(/\*\*(?:Namespace|命名空间):?\*\*:?\s*`?([^`\n]+?)`?\s*$/m);
  const modLine = pick(/\*\*(?:Module|模块):?\*\*:?\s*`?([^`\n]+?)`?\s*$/m);
  const h1 = pick(/^#\s+(.+)$/m);
  const declLine = text.split(/\r?\n/).find((l) => /^\s*(?:public|internal)\s+[\w\s]*\b(class|struct|interface|enum|delegate)\b/.test(l)) || '';
  return {
    text,
    typeName: h1,
    namespace: idOnly(nsLine),
    module: idOnly(modLine),
    zhType: typeLine.replace(/`/g, ''),
    zhBase: baseLine.replace(/`/g, ''),
    sourceFile: srcLine.replace(/`/g, '').trim(),
    skeleton: text.includes(SKELETON),
    declLine: declLine.replace(/\s+/g, ' ').trim(),
  };
}

function fromDisk(zhRoot) {
  const out = [];
  for (const f of walk(join(zhRoot, 'api'))) {
    if (f.endsWith(`${sep}_index.md`) || f.endsWith('/_index.md') || f.endsWith('\\')) continue;
    if (f.replace(/\\/g, '/').endsWith('/_index.md')) continue;
    const relZh = f.slice(zhRoot.length + 1).replace(/\\/g, '/');
    const parts = relZh.split('/');
    const dir = parts[1];
    const file = parts.pop();
    const z = readZh(f);
    out.push({
      typeName: z.typeName || file.replace(/\.md$/, ''),
      namespace: z.namespace, module: z.module,
      dir, file, rel: 'api/' + dir + '/' + file,
      collision: /__/.test(file),
      skeleton: z.skeleton,
      zhPath: f, zhText: z.text,
      zhType: z.zhType, zhBase: z.zhBase, zhDeclLine: z.declLine,
      sourceFile: z.sourceFile ? z.sourceFile.replace(/^.*?bannerlord-1\.4\.7\//, '') : '',
      onDisk: true,
    });
  }
  return out;
}

function fromInventory() {
  const byKey = new Map();
  if (!existsSync(INVENTORY)) return [];
  const inv = JSON.parse(readFileSync(INVENTORY, 'utf8'));
  for (const p of inv.pages || []) {
    const rel = 'api/' + p.dir + '/' + p.title + '.md';
    byKey.set(`${p.typeName}|${p.namespace}`, {
      typeName: p.typeName, namespace: p.namespace, kind: p.kind,
      dir: p.dir, file: p.title + '.md', rel, collision: /__/.test(p.title),
      invPath: p.path, facade: !!p.facade, onDisk: false, sourceFile: '',
    });
  }
  for (const t of inv.types || []) {
    const k = `${t.typeName}|${t.namespace}`;
    if (byKey.has(k)) byKey.get(k).sourceFile = String(t.sourceFile || '').replace(/^(\.\.(\/|\\\\))+/, '');
  }
  return [...byKey.values()];
}

function loadManifest() {
  const disk = fromDisk(ZH_ROOT);
  if (disk.length) return { pages: disk, source: 'zh files on disk' };
  return { pages: fromInventory(), source: 'tools/_v147_inventory.json (zh tree not written yet)' };
}

/* ------------------------------------------------------------ source parsing */

const stripComments = (src) => src.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/.*$/gm, ' ');

function readTypeBlock(file, typeName) {
  let raw;
  try { raw = readFileSync(file, 'utf8'); } catch { return null; }
  const nsM = raw.match(/^\s*namespace\s+([\w.]+)/m);
  const namespace = nsM ? nsM[1] : '';
  const src = stripComments(raw);
  // A delegate is declared `public delegate R Name(...)` — the return type sits between
  // the keyword and the name, so allow one optional type token before the name.
  const re = new RegExp(
    `(?:^|[\\r\\n])[ \\t]*((?:public|internal|sealed|abstract|static|partial|new|readonly|unsafe)[ \\t]+)*` +
    `(class|struct|enum|interface)[ \\t]+${typeName}\\b` +
    `|(?:^|[\\r\\n])[ \\t]*(?:public|internal)[ \\t]+delegate[ \\t]+[\\w.<>,\\[\\]?]+[ \\t]+${typeName}\\s*(?:<[^>]*>)?\\s*\\(`,
  );
  const m = re.exec(src);
  if (!m) return null;
  const declStart = m.index + (m[0].length - m[0].replace(/^[^\r\n]*/, '').length);
  const braceStart = src.indexOf('{', m.index + m[0].length);
  // Declaration text runs from declStart up to the '{' or the ';'.
  let declEnd = braceStart;
  if (braceStart < 0) declEnd = src.indexOf(';', declStart);
  if (declEnd < 0) declEnd = declStart + 300;
  if (m[0].includes('delegate')) declEnd = src.indexOf(';', declStart) + 1;
  const decl = src.slice(declStart, declEnd).replace(/\s+/g, ' ').trim().replace(/[:\s]+$/, '');
  const kind = /delegate/.test(decl) ? 'delegate' : m[2] || (m[3] ? 'delegate' : '');
  let body = '';
  if (braceStart >= 0) {
    let depth = 0;
    for (let i = braceStart; i < src.length; i++) {
      const c = src[i];
      if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) { body = src.slice(braceStart + 1, i); break; } }
    }
  }
  const enumLike = /\b(enum|interface)\b/.test(decl);
  return { namespace, decl, body, isEnumLike: enumLike, kind };
}

// Split a type body into depth-0 statements (";" terminated or "{ ... }" terminated).
function statements(body) {
  const out = [];
  let depth = 0, start = 0;
  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    if (c === '{') { depth++; continue; }
    if (c === '}') { depth--; if (depth === 0) { out.push(body.slice(start, i)); start = i + 1; } continue; }
    if (c === ';' && depth === 0) { out.push(body.slice(start, i + 1)); start = i + 1; }
  }
  if (start < body.length) out.push(body.slice(start));
  return out.map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
}

const MODS = '(?:static|virtual|override|abstract|sealed|new|readonly|const|async|extern|partial|unsafe|volatile|event)';
const MODRE = new RegExp(`^((?:public|protected|internal|private)[ \\t]+)((?:${MODS}[ \\t]+)*)`);

function classifyStatement(s, typeName) {
  const head = s.match(MODRE);
  if (!head) return null;
  const access = head[1].trim();
  if (access !== 'public' && access !== 'protected') return null;
  const mods = head[2].trim().split(/\s+/).filter(Boolean);
  const rest = s.slice(head[0].length).trim();
  if (/^event\s+/.test(rest)) {
    const m = rest.match(/^event\s+([\w.<>\[\],]+)\s+(\w+)/);
    if (m) return { kind: 'event', access, mods, type: m[1], name: m[2], sig: `${access} event ${m[1]} ${m[2]}` };
    return null;
  }
  const paren = rest.match(/^([\w.<>\[\],?\s]*?)\s*(\w+)\s*\(([^)]*)\)/);
  if (paren) {
    const ret = paren[1].trim();
    const name = paren[2];
    const params = paren[3].trim();
    if (!ret) {
      // Constructor: `public Foo(...)` — no return type token.
      if (name !== typeName) return null;
      return {
        kind: 'ctor', access, mods, type: '', name,
        params: params ? params.split(',').map((p) => p.trim()).filter(Boolean) : [],
        sig: `${access} ${name}(${params})`.replace(/\s+/g, ' '),
      };
    }
    return {
      kind: 'method', access, mods, type: ret, name,
      params: params ? params.split(',').map((p) => p.trim()).filter(Boolean) : [],
      sig: `${access} ${mods.join(' ')} ${ret} ${name}(${params})`.replace(/\s+/g, ' '),
    };
  }
  const prop = rest.match(/^([\w.<>\[\],?]+)\s+(\w+)\s*(\{|=>|=)/);
  if (prop) {
    const name = prop[2];
    const isConst = mods.includes('const');
    return {
      kind: isConst ? 'const' : 'property', access, mods, type: prop[1], name,
      sig: `${access} ${mods.join(' ')} ${prop[1]} ${name}`.replace(/\s+/g, ' '),
    };
  }
  const field = rest.match(/^([\w.<>\[\],?]+)\s+(\w+)\s*(=|;|$)/);
  if (field) {
    return {
      kind: 'field', access, mods, type: field[1], name: field[2],
      sig: `${access} ${mods.join(' ')} ${field[1]} ${field[2]}`.replace(/\s+/g, ' '),
    };
  }
  return null;
}

const NOISE_MEMBER = /^(AutoGenerated|get_|set_|if|for|foreach|while|switch|return|new|lock|using|catch|\.ctor|b__)/;

function extractMembers(body, typeName, decl) {
  const isStaticType = /\bstatic\b/.test(decl) && /\b(class|struct)\b/.test(decl);
  const seen = new Set();
  const members = [];
  const add = (m) => {
    if (!m || NOISE_MEMBER.test(m.name)) return;
    if (isStaticType && m.access === 'public' && !m.mods.includes('static') && m.kind !== 'const') return;
    const key = m.kind + '|' + m.name + '|' + (m.params ? m.params.length : 0);
    if (seen.has(key)) return;
    seen.add(key);
    members.push(m);
  };
  for (const s of statements(body)) add(classifyStatement(s, typeName));
  return members;
}

let FILE_INDEX = null; // basename -> [abs paths], built once, only if a lookup misses
function buildFileIndex() {
  const idx = new Map();
  const walkSrc = (d) => {
    if (!existsSync(d)) return;
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) { if (e.name !== '.git' && e.name !== 'obj' && e.name !== 'bin') walkSrc(p); }
      else if (e.name.endsWith('.cs')) {
        const b = e.name.slice(0, -3);
        if (!idx.has(b)) idx.set(b, []);
        idx.get(b).push(p);
      }
    }
  };
  walkSrc(SRC_ROOT);
  FILE_INDEX = idx;
}

function findSourceFile(page) {
  if (page.sourceFile) {
    // The inventory records paths like "../bannerlord-1.4.7/<Module>/<File>.cs", i.e.
    // relative to the parent of the repo. Strip the prefix and anchor at SRC_ROOT.
    const rel = String(page.sourceFile).replace(/^(\.\.(\/|\\\\))+/, '').replace(/\\/g, '/');
    for (const base of [SRC_ROOT, join(REPO, '..')]) {
      const p = resolve(join(base, rel));
      if (existsSync(p) && p.endsWith('.cs')) return p;
    }
  }
  if (!FILE_INDEX) buildFileIndex();
  const candidates = FILE_INDEX.get(page.typeName) || [];
  for (const c of candidates) {
    const t = readTypeBlock(c, page.typeName);
    if (t && (!page.namespace || t.namespace === page.namespace)) return c;
  }
  // Second chance: the type may live in a differently named file (partial classes).
  const loose = [...FILE_INDEX.entries()].filter(([b]) => b.includes(page.typeName));
  for (const [, paths] of loose) {
    for (const c of paths) {
      const t = readTypeBlock(c, page.typeName);
      if (t && (!page.namespace || t.namespace === page.namespace)) return c;
    }
  }
  return null;
}

/* ------------------------------------------------------------- categorisation */

const SUFFIX_CATEGORY = [
  [/VM$|ViewModel$/, 'viewmodel'],
  [/Action$/, 'action'],
  [/Behavior$|Logic$|Behaviour$/, 'behavior'],
  [/Controller$|Dispatcher$/, 'controller'],
  [/Manager$|Provider$|Creator$|Builder$|Registry$|Cache$/, 'manager'],
  [/Screen$|View$|Layer$|Widget$|Element$/, 'view'],
  [/Model$|Data$|Definition$|Info$|Descriptor$|Settings$|Config$/, 'model'],
  [/Helper$|Extensions?$/, 'helper'],
  [/Handler$|Listener$|Sink$|Observer$/, 'handler'],
  [/Condition$|Predicate$|Filter$|Comparer$|Sorter$/, 'rule'],
  [/Component$|Part$|Node$/, 'component'],
];

function categorise(page, decl, members, kind) {
  if (kind === 'enum' || /\benum\b/.test(decl)) return 'enum';
  if (kind === 'delegate' || /\bdelegate\b/.test(decl)) return 'delegate';
  if (kind === 'interface' || /\binterface\b/.test(decl)) return 'contract';
  const ns = page.namespace || '';
  if (/\.Actions(\.|$)/.test(ns) || /Action$/.test(page.typeName)) return 'action';
  for (const [re, cat] of SUFFIX_CATEGORY) if (re.test(page.typeName)) return cat;
  if (/ViewModelCollection/.test(ns)) return 'viewmodel';
  if (/Gauntlet|\.View(\.|$)/.test(ns)) return 'view';
  if (/CampaignBehaviors/.test(ns)) return 'behavior';
  const names = members.map((m) => m.name);
  if (names.some((n) => /^(RegisterEvents|SyncData|RegisterSaveableClass)/.test(n))) return 'behavior';
  if (names.every((n) => /^(get|set)_/.test(n))) return 'model';
  if (kind === 'struct') return 'model';
  return 'type';
}

/* ---------------------------------------------------------- member narration */

const backtick = (s) => '`' + String(s).replace(/`/g, '') + '`';

function memberPurpose(m, typeName, category) {
  const n = m.name;
  const ret = m.type;
  const isStatic = m.mods.includes('static');
  const isOverride = m.mods.includes('override');
  const isVirtual = m.mods.includes('virtual');
  const isAbstract = m.mods.includes('abstract');

  const access = isAbstract
    ? 'Abstract — a subclass must supply it'
    : isOverride ? 'Overrides the base member'
    : isVirtual ? 'Virtual — override it to change behaviour for every caller'
    : m.access === 'protected' ? 'Protected — for subclasses only'
    : isStatic ? 'Static entry point' : 'Instance entry point';

  // Naming convention -> what the shape of the member implies for the caller.
  const HINT = [
    [/^(Is|Has|Can|Should|Supports|Contains|Exists)[A-Z_]/, 'Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no.'],
    [/^(Get|Find|Lookup|Resolve|TryGet|Search)[A-Z_]/, 'Read path: prefer it over reaching for the backing store.'],
    [/^(Set|Change|Apply|Assign|Register)[A-Z_]/, 'Write path: where the engine offers a matching Action or owner method, prefer that instead.'],
    [/^(Add|Insert|Push|Attach|Append|Queue|Enqueue)[A-Z_]/, 'Adds to the collection or relation this type owns.'],
    [/^(Remove|Delete|Clear|Detach|Pop|Reset|Unregister)[A-Z_]/, 'Removes from or clears the collection this type owns.'],
    [/^(Create|Build|Make|Construct|Instantiate)[A-Z_]/, 'Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants.'],
    [/^(On|Handle|Process|Execute|Invoke|Notify)[A-Z_]/, 'Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw.'],
    [/^(Register|Subscribe|Attach)[A-Z_]/, 'Subscription point: call once, and undo it during teardown.'],
    [/^(Tick|Update|Refresh|Sync)[A-Z_]/, 'Called from the owner’s update loop — do not assume a frame boundary.'],
    [/^(Tick|Update)/, 'Called from the owner’s update loop — do not assume a frame boundary.'],
    [/^Can/, 'Capability check used to gate an operation.'],
  ];
  let hint = null;
  for (const [re, h] of HINT) if (re.test(n)) { hint = h; break; }

  if (m.kind === 'property') {
    if (m.mods.includes('const')) return `Constant of type ${backtick(ret)}, fixed at build time.`;
    return `${access} ${backtick(ret)} property.${hint ? ' ' + hint : ' Read it for current state; a declared setter writes that state in place.'}`;
  }
  if (m.kind === 'field') return `${access} ${backtick(ret)} field — direct storage with no validation or notification.`;
  if (m.kind === 'event') return `${access} ${backtick(ret)} event; the publisher invokes the handlers it is given.`;

  const ps = m.params && m.params.length
    ? ` Takes ${m.params.length} argument${m.params.length > 1 ? 's' : ''}: ${m.params.slice(0, 4).map((p) => backtick(String(p).replace(/\s*=.*$/, '').trim())).join(', ')}${m.params.length > 4 ? ', …' : ''}.`
    : ' Takes no arguments.';
  const retPart = ret === 'void' ? '' : ` Returns ${backtick(ret)}.`;
  const tail = hint ? ' ' + hint : '';
  return `${access}.${ps}${retPart}${tail}`;
}

function rankMembers(members, category) {
  const weight = (m) => {
    let w = 0;
    if (m.mods.includes('static')) w += 3;
    if (m.mods.includes('override')) w += 3;
    if (m.mods.includes('virtual') || m.mods.includes('abstract')) w += 2;
    if (m.access === 'public') w += 2;
    if (m.kind === 'method') w += 2;
    if (m.kind === 'property') w += 2;
    if (m.kind === 'const') w += 1;
    if (/^AutoGenerated/i.test(m.name)) w -= 10;
    if (m.kind === 'field') w -= 1;
    return w;
  };
  return [...members].sort((a, b) => weight(b) - weight(a) || a.name.localeCompare(b.name));
}

/* ----------------------------------------------------------- narrative text */

function kindWord(decl, kind) {
  if (/\benum\b/.test(decl)) return 'enum';
  if (/\binterface\b/.test(decl)) return 'interface';
  if (/\bstruct\b/.test(decl)) return 'struct';
  if (/\bdelegate\b/.test(decl)) return 'delegate type';
  return 'class';
}

function baseOf(decl) {
  const m = decl.match(/:\s*([^{]+)$/);
  if (!m) return '';
  return m[1].split(',').map((s) => s.trim()).filter((s) => s && s !== typeWordNoise(s))[0] || '';
}
function typeWordNoise(s) { return s; }

function moduleOf(page, sourceFile) {
  if (page.module) return page.module;
  if (sourceFile) {
    const rel = sourceFile.slice(SRC_ROOT.length + 1).replace(/\\/g, '/');
    return rel.split('/')[0];
  }
  return (page.namespace || '').split('.')[0];
}

function humanType(t) { return t.replace(/<.*>/, '').replace(/\[\]$/, '').replace(/^ref\s+/, ''); }

const CATEGORY_TEXT = {
  action: (n, p) => ({
    overview: `\`${n}\` is a static action class: a single place where one campaign change is applied. Rather than letting callers poke at fields and hope the rest of the world notices, the engine routes the change through a named operation so that side effects, event broadcasts and save consistency happen in a defined order.`,
    mental: `Treat an action class as a transaction with a fixed shape. You describe *what* should change; the action decides the order in which the related objects, events and save data are updated. Writing to a field directly bypasses that order, which is how campaign saves end up inconsistent.\n\nRead it as a set of static entry points rather than an object you own. There is no instance to keep: call the static method and the whole graph moves at once.`,
    risk: [
      'Action methods assume a live campaign. Calling one from `OnSubModuleLoad`, the main menu or campaign teardown will hit a null `Campaign.Current`.',
      'Do not mix an action with a direct field write in the same frame — the action reads the field it is about to change, so the order decides the result.',
      'Some actions fire events synchronously; a handler that writes the same object again can recurse.',
    ],
  }),
  behavior: (n, p) => ({
    overview: `\`${n}\` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.`,
    mental: `A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.\n\nThis makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.`,
    risk: [
      'Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.',
      'Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.',
      'A behavior registered twice is ticked twice; register from exactly one game starter.',
    ],
  }),
  manager: (n, p) => ({
    overview: `\`${n}\` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.`,
    mental: `Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.\n\nBecause the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.`,
    risk: [
      'Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.',
      'Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.',
      'Most managers are only valid between campaign start and campaign end.',
    ],
  }),
  viewmodel: (n, p) => ({
    overview: `\`${n}\` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.`,
    mental: `A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.\n\nBuild one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.`,
    risk: [
      'View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.',
      'Commands must be idempotent or guarded — widgets call them on selection and on confirm.',
      'A view model that outlives its layer keeps handlers alive and leaks screens.',
    ],
  }),
  contract: (n, p) => ({
    overview: `\`${n}\` is an interface: the published surface of one subsystem, with no implementation of its own. The engine ships the concrete types; you consume this interface so your code does not depend on which implementation is loaded.`,
    mental: `Use an interface as the shape of a dependency, not as something to implement. Find the subsystem that hands out instances of it and take the dependency from there; the concrete type is an implementation detail that changes between versions and between game modes.\n\nWhen you do implement one — a custom mission logic, a save resolver, an option provider — you are filling a slot the engine looks up by type.`,
    risk: [
      'Implementing the interface is not enough; the engine must be able to find your type (registration, discovery, or an explicit factory).',
      'Members added in a later patch version become part of your contract — keep the surface minimal.',
      'Do not cast an interface back to a concrete type unless you also handle the case where the game ships a different one.',
    ],
  }),
  controller: (n, p) => ({
    overview: `\`${n}\` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.`,
    mental: `A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.\n\nBecause controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.`,
    risk: [
      'Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.',
      'Controllers hold no durable state — anything that must survive a save belongs on a saveable object.',
      'Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.',
    ],
  }),
  model: (n, p) => ({
    overview: `\`${n}\` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.`,
    mental: `Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.\n\nBecause models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.`,
    risk: [
      'These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.',
      'A default-constructed instance is not a valid value — check the required fields before use.',
      'Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.',
    ],
  }),
  view: (n, p) => ({
    overview: `\`${n}\` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.`,
    mental: `Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.\n\nViews are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.`,
    risk: [
      'UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.',
      'A view kept alive by an event handler leaks the whole screen.',
      'Every view must clean up in its own finalize path; the engine does not do it for you.',
    ],
  }),
  helper: (n, p) => ({
    overview: `\`${n}\` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.`,
    mental: `A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.\n\nBecause helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.`,
    risk: [
      'Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.',
      'They are pure-looking but not pure: several helpers cache results for the current frame.',
      'Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.',
    ],
  }),
  handler: (n, p) => ({
    overview: `\`${n}\` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.`,
    mental: `Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.\n\nRegistration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.`,
    risk: [
      'Missing unsubscribe is the dominant leak in this pattern.',
      'Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.',
      'Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.',
    ],
  }),
  rule: (n, p) => ({
    overview: `\`${n}\` is a rule or comparison type: it answers a yes/no or ordering question so that callers can sort, filter or gate behaviour without writing the condition inline.`,
    mental: `A rule is a named decision. Keep the condition pure and cheap — it may be evaluated once per entity per frame — and keep the effect outside it.\n\nPrefer composing rules over branching inside one: a rule that reads as a single sentence is a rule you can trust when the data changes.`,
    risk: [
      'Rules are evaluated in hot loops; avoid allocation inside the comparison.',
      'The null case is usually unhandled and shows up as an exception rather than a filtered-out entry.',
      'A rule that captures mutable state gives order-dependent results; keep it stateless.',
    ],
  }),
  component: (n, p) => ({
    overview: `\`${n}\` is a component: a bundle of behaviour attached to an entity rather than a service in its own right. It exists to be added to something and then queried by the systems that need it.`,
    mental: `Components are how the engine keeps responsibilities separate: one component per concern, all of them hanging off the same entity. To use it, attach it to the entity during creation and query it back where the behaviour is needed.\n\nBecause components are created and destroyed with their entity, everything they cache should die with them.`,
    risk: [
      'Attaching a component twice silently duplicates its behaviour.',
      'Query order is not guaranteed; a system that needs an ordering must sort explicitly.',
      'Components created outside the entity lifecycle leak when the entity is replaced.',
    ],
  }),
  enum: (n, p) => ({
    overview: `\`${n}\` is an enum: a closed set of named integer values. The engine persists and switches on these numbers, so the numeric values are part of the save format and of the wire behaviour, not just an implementation detail.`,
    mental: `An enum is a vocabulary shared across systems. Read it as the set of states the engine can be in for one narrow concept, and never invent new values — extending a persisted enum means assigning a new number, not reusing an old one.\n\nCompare with the symbol, cast to integer only when talking to the engine, and always handle the Default/unknown member that a save from another version may contain.`,
    risk: [
      'The numeric values are persisted; reordering them corrupts existing saves.',
      'An unmatched value from a modded or newer build is legal — switch statements need a default branch.',
      'Flags-style enums combine with bitwise operators; a plain `==` comparison is wrong for those.',
    ],
  }),
  delegate: (n, p) => ({
    overview: `\`${n}\` is a delegate type: a named method signature. It lets the engine or a subsystem call back into your code without knowing your class, which is how extension points are handed out.`,
    mental: `A delegate here is an inversion-of-control point. You supply the method; the owner of the delegate decides when it runs, on which thread, and how often.\n\nWrite the callback so that it is safe to run twice and safe to skip, because a delegate contract rarely says which.`,
    risk: [
      'There is no call-site context, so the callback must fetch anything it needs.',
      'Throwing inside the callback surfaces in the engine call stack, not yours.',
      'A delegate held past the lifetime of the method’s target is a use-after-free in spirit.',
    ],
  }),
  type: (n, p) => ({
    overview: `\`${n}\` is a named type in the ${p.namespace || 'engine'} namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.`,
    mental: `Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.\n\nAssume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.`,
    risk: [
      'Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.',
      'Objects owned by a subsystem are not thread-safe.',
      'Public fields and setters are API — renaming one breaks every mod that used it.',
    ],
  }),
};

// Turn a real parameter declaration from the source into a call-site argument:
// keep the author's own parameter name, fall back to a type-appropriate literal.
function callArg(p) {
  const decl = String(p).replace(/\s*=.*$/, '').trim();
  const t = (decl.match(/^([\w.<>\[\]]+)/) || [])[1];
  const name = (decl.match(/^[\w.<>\[\]]+\s+(\w+)$/) || [])[1];
  if (name && !/^(params|ref|out|in)$/.test(name)) return name;
  if (!t) return 'theTarget';
  const h = humanType(t);
  if (/^(int|long|float|double|decimal|byte|sbyte|short|uint|ulong|ushort)$/.test(h)) return '0';
  if (/^bool$/i.test(h)) return 'true';
  if (/^string$/i.test(h)) return '"text"';
  return 'theTarget';
}

function pickExample(page, decl, members, category, baseName) {
  const statics = members.filter((m) => m.mods.includes('static') && m.kind === 'method');
  const ctors = members.filter((m) => m.kind === 'ctor');
  const inst = members.filter((m) => !m.mods.includes('static') && (m.kind === 'method' || m.kind === 'property'));
  const prop = (pred) => members.find(pred);
  const lines = [];
  const argsOf = (m) => (m.params || []).map((p) => callArg(p)).join(', ');
  const listOf = (m) => (m.params || []).map((p) => backtick(String(p).replace(/\s*=.*$/, '').trim())).join(', ');

  const isInternal = /^internal\b/.test(decl);

  if (isInternal) {
    lines.push(`// ${page.typeName} is internal: the engine creates it, a mod cannot.`);
    lines.push(`// Use it through whatever the engine exposes, and read the members below.`);
    const read = members.filter((m) => m.kind === 'method' || m.kind === 'property').slice(0, 5);
    for (const m of read) {
      lines.push(`//   ${m.kind === 'property' ? m.name : m.name + '(' + listOf(m) + ')'}`);
      lines.push(`//     ${m.kind === 'property' ? m.type : m.type !== 'void' ? m.type : 'void'}`);
    }
    if (!read.length) lines.push(`// It exposes no public members.`);
    return lines.join('\n');
  }

  if (category === 'enum') {
    const vals = members.filter((m) => m.kind === 'const').map((m) => m.name).slice(0, 6);
    lines.push(`// ${page.typeName} values used in ${page.namespace}.`);
    for (const v of vals) lines.push(`if (state == ${page.typeName}.${v}) { /* ... */ }`);
    if (!vals.length) lines.push(`// The members of this enum are declared in ${page.typeName}.cs.`);
    lines.push('', `var raw = (int)state;   // the integer is what the engine persists`);
    return lines.join('\n');
  }
  if (category === 'delegate') {
    const d = decl.match(/delegate\s+([\w.<>\[\],?]+)\s+([\w]+)\s*(<[^>]*>)?\s*\(([^)]*)\)/);
    const sig = d ? `${d[1]} ${d[2]}${d[3] || ''}(${d[4]})` : 'void Callback(object sender)';
    lines.push(`// Signature, taken from the source:`, `${sig}`, '',
      `${page.typeName} handler = sender => { /* runs on the owner's thread */ };`);
    return lines.join('\n');
  }
  if (category === 'contract') {
    const ms = members.filter((m) => m.kind === 'method').slice(0, 3);
    lines.push(`// ${page.typeName} is an interface: the engine supplies the implementation.`);
    lines.push(`public class MyConsumer`);
    lines.push('{');
    lines.push(`    private readonly ${page.typeName} _service;`);
    lines.push('');
    lines.push(`    public MyConsumer(${page.typeName} service)`);
    lines.push(`    {`);
    lines.push(`        _service = service;`);
    lines.push(`    }`);
    lines.push('');
    if (!ms.length) lines.push(`    // No public methods declared on this interface.`);
    for (const m of ms) {
      lines.push(`    // ${m.name}: ${m.sig}`);
      lines.push(`    _service.${m.name}(${argsOf(m)});`);
    }
    lines.push(`}`);
    return lines.join('\n');
  }
  if (category === 'behavior') {
    const base = baseName || 'CampaignBehaviorBase';
    lines.push(`public class My${page.typeName} : ${base}`);
    lines.push('{');
    lines.push(`    public override void RegisterEvents()`);
    lines.push(`    {`);
    lines.push(`        // Subscribe once to the events this behavior reacts to.`);
    lines.push(`    }`);
    lines.push('');
    lines.push(`    public override void SyncData() { /* restore per-campaign state */ }`);
    lines.push('');
    lines.push(`    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }`);
    lines.push('');
    lines.push(`    // Register it exactly once, from the game starter:`);
    lines.push(`    // CampaignGameStarter.AddBehavior(new My${page.typeName}());`);
    lines.push(`}`);
    return lines.join('\n');
  }
  if (category === 'action') {
    lines.push(`// Static action entry points — call them instead of writing the fields yourself.`);
    for (const m of statics.slice(0, 3)) lines.push(`${page.typeName}.${m.name}(${argsOf(m)});`);
    if (!statics.length) lines.push(`// ${page.typeName} exposes no public static method in ${page.namespace}.`);
    return lines.join('\n');
  }
  if (category === 'manager') {
    const local = page.typeName[0].toLowerCase() + page.typeName.slice(1);
    const instProp = prop((m) => m.kind === 'property' && /^(Instance|Current|Manager|Controller)$/.test(m.name));
    const getter = prop((m) => m.kind === 'method' && m.mods.includes('static') && /^Get/.test(m.name) && m.params.length === 0);
    lines.push(`// Reach the one live instance through the engine; do not construct a second copy.`);
    if (instProp) lines.push(`var ${local} = ${page.typeName}.${instProp.name};`);
    else if (getter) lines.push(`var ${local} = ${page.typeName}.${getter.name}();`);
    else if (ctors.length) lines.push(`var ${local} = new ${page.typeName}(${argsOf(ctors[0])});`);
    else lines.push(`// ${page.typeName} exposes no accessor; the engine passes the instance to its callbacks.`);
    for (const m of statics.slice(0, 2)) lines.push(`${page.typeName}.${m.name}(${argsOf(m)});`);
    const pr = members.find((x) => x.kind === 'property' && !x.mods.includes('static'));
    if (pr && (instProp || getter || ctors.length)) lines.push(`// Read the live state through ${local}.${pr.name}.`);
    return lines.join('\n');
  }
  if (category === 'viewmodel') {
    const propList = members.filter((m) => m.kind === 'property' && !m.mods.includes('static')).slice(0, 3);
    lines.push(`// Built on the UI thread, bound by the Gauntlet layer that owns the screen.`);
    if (ctors.length) lines.push(`var viewModel = new ${page.typeName}(${argsOf(ctors[0])});`);
    else lines.push(`// The engine or the owning screen constructs the view model; bind it from the layer.`);
    for (const p of propList) {
      if (/^Is[A-Z]/.test(p.name)) lines.push(`viewModel.${p.name} = true;`);
      else lines.push(`// viewModel.${p.name} = ...;   // ${p.type}`);
    }
    const cmd = members.find((m) => m.kind === 'method' && !m.mods.includes('static') && !/^get_/.test(m.name));
    if (cmd && (ctors.length || true)) lines.push('', `// Command the widget invokes on confirm:`, `viewModel.${cmd.name}(${argsOf(cmd)});`);
    return lines.join('\n');
  }
  if (category === 'model' || category === 'rule') {
    const propList = members.filter((m) => m.kind === 'property' || m.kind === 'field').slice(0, 5);
    if (!propList.length) {
      const m = statics[0] || inst[0];
      return m ? `${page.typeName}.${m.name}(${argsOf(m)});` : `// ${page.typeName} declares no public members.`;
    }
    lines.push(`var data = new ${page.typeName}`);
    lines.push('{');
    for (const p of propList) {
      const t = humanType(p.type);
      const v = /^bool$/i.test(t) ? 'false' : /^(int|float|double|long|byte|short)$/.test(t) ? '0' : /^string$/i.test(t) ? '""' : 'default';
      lines.push(`    ${p.name} = ${v},`);
    }
    lines.push('};');
    return lines.join('\n');
  }
  if (category === 'view') {
    const hooks = members.filter((m) => m.mods.includes('override') || /^On[A-Z]/.test(m.name)).slice(0, 4);
    const stat = statics[0];
    const pubCtor = ctors.find((c) => c.access === 'public');
    lines.push(`// A view/widget is created and destroyed by the layer that owns it.`);
    lines.push(`// Reach it through the screen, not by caching it past that screen.`);
    if (baseName) lines.push(`// Base widget: ${baseName}.`);
    if (pubCtor) {
      const local = page.typeName[0].toLowerCase() + page.typeName.slice(1);
      lines.push(`var ${local} = new ${page.typeName}(${argsOf(pubCtor)});`);
    } else if (!stat && !hooks.length) {
      lines.push(`// No public constructor: the widget factory in the owning layer creates it.`);
    }
    if (stat) lines.push(`${page.typeName}.${stat.name}(${argsOf(stat)});`);
    if (hooks.length) {
      lines.push('');
      lines.push(`// Lifecycle hooks this type declares:`);
      for (const h of hooks) lines.push(`//   ${h.sig}`);
    } else if (stat || pubCtor) {
      lines.push('');
      lines.push(`// It declares no lifecycle hooks of its own; it only adds state and helpers.`);
    }
    return lines.join('\n');
  }
  if (category === 'controller') {
    const base = baseName || 'CampaignBehaviorBase';
    lines.push(`// Controllers are callback-driven: the engine owns the lifetime.`);
    lines.push(`public class My${page.typeName} : ${base}`);
    lines.push('{');
    lines.push(`    // Register from the game starter, exactly once.`);
    lines.push(`    public override void RegisterEvents()`);
    lines.push(`    {`);
    lines.push(`        // forward the notification this controller reacts to`);
    lines.push(`    }`);
    lines.push('}');
    const m = members.find((x) => x.kind === 'method' && x.mods.includes('static'));
    if (m) lines.push('', `// Static helpers: ${page.typeName}.${m.name}(${argsOf(m)});`);
    return lines.join('\n');
  }
  // helper / type / component / handler / default
  if (statics.length) {
    lines.push(`// Static entry points on ${page.typeName}:`);
    for (const m of statics.slice(0, 3)) lines.push(`${page.typeName}.${m.name}(${argsOf(m)});`);
    return lines.join('\n');
  }
  if (ctors.length && ctors.some((c) => c.params.length === 0 || c.access === 'public')) {
    const c = ctors.find((x) => x.access === 'public') || ctors[0];
    const local = page.typeName[0].toLowerCase() + page.typeName.slice(1);
    lines.push(`var ${local} = new ${page.typeName}(${argsOf(c)});`);
    const m = members.find((x) => x.kind === 'method' && !x.mods.includes('static'));
    if (m) lines.push(`${local}.${m.name}(${argsOf(m)});`);
    const pr = members.find((x) => x.kind === 'property' && !x.mods.includes('static'));
    if (pr) lines.push(`// Read current state through ${local}.${pr.name}.`);
    return lines.join('\n');
  }
  const pr = members.find((x) => x.kind === 'property' && !x.mods.includes('static'));
  if (pr) {
    lines.push(`// ${page.typeName} is read through its properties:`);
    lines.push(`//   ${pr.name} : ${pr.type}`);
    return lines.join('\n');
  }
  lines.push(`// ${page.typeName} exposes no public members in ${page.namespace}.`);
  return lines.join('\n');
}

/* -------------------------------------------------------------------- links */

function linkHref(fromDir, toDir, file) {
  if (fromDir === toDir) return `../${file.replace(/\.md$/, '')}/`;
  return `../../${toDir}/${file.replace(/\.md$/, '')}/`;
}

/* ------------------------------------------------------------------- render */

function render(page, ctx) {
  const { decl, members, sourceRel, kind, baseName, zhText } = ctx;
  const name = page.typeName;
  const category = categorise(page, decl, members, kind);
  const kw = kindWord(decl, kind);
  const ns = page.namespace || (decl && '') || '';
  const mod = ctx.module;
  const text = CATEGORY_TEXT[category](name, { namespace: ns });
  const ranked = rankMembers(members, category);
  const shown = ranked.slice(0, 24);
  const statics = members.filter((m) => m.mods.includes('static'));
  const overrideCount = members.filter((m) => m.mods.includes('override') || m.mods.includes('virtual') || m.mods.includes('abstract')).length;
  const propCount = members.filter((m) => m.kind === 'property').length;

  const marker = zhText && zhText.includes(SKELETON) ? SKELETON + '\n\n' : '';

  const descBits = [];
  descBits.push(`${kw} in ${ns || mod}.`);
  descBits.push(members.length
    ? `${members.length} public member${members.length === 1 ? '' : 's'} (${statics.length} static).`
    : 'No public members of its own.');
  const description = `${name} — ${descBits.join(' ')}`;

  const out = [];
  out.push('---');
  out.push(`title: "${name.replace(/"/g, "'")}"`);
  out.push(`description: "${description.replace(/"/g, "'")}"`);
  out.push('---');
  out.push('');
  if (marker) out.push(marker.trimEnd());
  out.push(`# ${name}`);
  out.push('');
  out.push(`**Namespace:** \`${ns}\`  `);
  out.push(`**Module:** \`${mod}\`  `);
  out.push(`**Type:** \`${decl}\`  `);
  if (baseName) out.push(`**Base:** \`${baseName}\`  `);
  out.push(`**Source:** \`${sourceRel}\``);
  out.push('');
  out.push('## Overview');
  out.push('');
  if (/\binternal\b/.test(decl)) {
    out.push(`\`${name}\` is an internal ${kw} in ${ns}. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot \`new\` it or reference the type in a signature.`);
    out.push('');
    out.push(text.overview);
  } else {
    out.push(text.overview);
  }
  out.push('');
  if (baseName) {
    out.push(`It extends ${baseName}, so the members it does not redeclare are inherited from there. ${propCount ? `${propCount} of its own members are properties, which is where most reads and writes land.` : 'It adds its own members rather than shadowing a large part of the base surface.'}`);
    out.push('');
  }
  out.push(`## Mental Model`);
  out.push('');
  out.push(text.mental);
  out.push('');
  out.push('Concretely, the surface breaks down like this:');
  out.push('');
  const groups = [
    ['Constructed with', members.filter((m) => m.kind === 'ctor')],
    ['Static entry points', members.filter((m) => m.mods.includes('static') && (m.kind === 'method' || m.kind === 'property'))],
    ['Instance members', members.filter((m) => !m.mods.includes('static') && (m.kind === 'method' || m.kind === 'property'))],
    ['Extension points', members.filter((m) => m.mods.includes('override') || m.mods.includes('virtual') || m.mods.includes('abstract'))],
    ['Data and constants', members.filter((m) => m.kind === 'field' || m.kind === 'const' || m.kind === 'event')],
  ];
  for (const [label, list] of groups) {
    if (!list.length) continue;
    out.push(`- **${label}** (${list.length}): ` + list.slice(0, 6).map((m) => backtick(m.name)).join(', ') + (list.length > 6 ? ', …' : '') + '.');
  }
  if (!groups.some((g) => g[1].length)) {
    out.push('- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.');
  }
  out.push('');
  out.push('## Key Members');
  out.push('');
  if (shown.length) {
    out.push('| Member | Kind | What it is for |');
    out.push('| --- | --- | --- |');
    for (const m of shown) {
      const kindLabel = m.kind + (m.mods.includes('static') ? ' (static)' : m.mods.includes('override') ? ' (override)' : m.mods.includes('abstract') ? ' (abstract)' : m.mods.includes('virtual') ? ' (virtual)' : '');
      out.push(`| ${backtick(m.name)} | ${kindLabel} | ${memberPurpose(m, name, category).replace(/\|/g, '\\|')} |`);
    }
    out.push('');
    const ctorList = members.filter((m) => m.kind === 'ctor');
    if (ctorList.length) {
      for (const c of ctorList.slice(0, 3)) out.push(`- Constructed as ${backtick(c.sig)}.`);
      out.push('');
    }
    if (ranked.length > shown.length) out.push(`${ranked.length - shown.length} further public members follow the same patterns.`);
  } else {
    out.push(`No public members are declared on ${name} itself in \`${ns}\`; consumers use it through the subsystem that owns it.`);
  }
  out.push('## Usage Example');
  out.push('');
  out.push('```csharp');
  out.push(pickExample(page, decl, members, category, baseName));
  out.push('```');
  out.push('');
  out.push('## Risks and Boundaries');
  out.push('');
  for (const r of text.risk) out.push(`- ${r}`);
  if (overrideCount) out.push(`- ${overrideCount} of its member${overrideCount === 1 ? '' : 's'} ${overrideCount === 1 ? 'is' : 'are'} overridable; overriding one changes behaviour for every caller in the process, not just for your mod.`);
  out.push(`- The declaration in \`${sourceRel}\` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.`);
  out.push('');
  return { body: out.join('\n'), category, memberCount: members.length };
}

/* --------------------------------------------------------------------- main */

const DIRMAP = join(REPO, 'tools', '_dir-map-canonical.json');
// Noise gate is centralized in the artifact — read it, never re-derive a local list.
const GATE = existsSync(DIRMAP) ? JSON.parse(readFileSync(DIRMAP, 'utf8')) : {};
const EXCL_NS = GATE.excludeNamespaces || [];
const EXCL_SUFFIX = GATE.excludeSuffixes || [];
const TYPO_NS = GATE.sourceTypoNamespaces || [];
function excludedByGate(ns) {
  if (!ns) return false;
  for (const x of EXCL_NS) if (ns === x || ns.startsWith(x + '.')) return true;
  const segs = ns.split('.');
  if (segs.some((s) => EXCL_SUFFIX.includes(s))) return true;
  if (TYPO_NS.includes(ns)) return true;            // exact match: keeps the correct SandBox/StoryMode
  return false;
}

const manifest = loadManifest();
const allPages = manifest.pages;
const skipReport = [];
const collisionPages = [];
const gatedPages = [];
let pages = allPages.filter((p) => {
  const relNoApi = p.rel.replace(/^api\//, '');
  if (SKIP_PATHS.has(relNoApi) || SKIP_TYPES.has(p.typeName)) { skipReport.push(p.rel + '  [' + p.typeName + ']'); return false; }
  if (excludedByGate(p.namespace)) { gatedPages.push(p.rel + '  ns=' + p.namespace); return false; }
  if (p.collision) collisionPages.push(p.rel + '  ns=' + p.namespace);       // reported, still mirrored unless gated
  return true;
});
if (ONLY_DIR) pages = pages.filter((p) => p.dir === ONLY_DIR);
pages.sort((a, b) => a.rel.localeCompare(b.rel));

// Files that will exist under en/ once we are done: our own output, plus anything
// another worker already put there (deep-written pages, section indexes).
const enFiles = new Set();
for (const p of pages) enFiles.add(join(EN_ROOT, p.rel));
for (const f of walk(EN_ROOT)) enFiles.add(f.replace(/\\/g, '/'));
const byType = new Map();
for (const p of pages) {
  if (!byType.has(p.typeName)) byType.set(p.typeName, p);
  const k = `${p.typeName}|${p.namespace}`;
  if (!byType.has(k)) byType.set(k, p);
}

const wanted = PRINT
  ? pages.filter((p) => { const t = PRINT.replace(/\.md$/, ''); return p.rel === 'api/' + t || p.rel === t || p.rel.endsWith('/' + t) || p.rel.endsWith('/' + t + '.md') || p.rel === t + '.md'; })
  : pages;

// Prune: an en page whose zh twin no longer exists is an orphan that audit-links
// would flag. Never touch _index.md (nav worker) or the facade deep-write set.
function pruneOrphans() {
  if (DRY || PRINT) return { removed: 0, kept: 0 };
  const keep = new Set(pages.map((p) => join(EN_ROOT, p.rel).replace(/\\/g, '/')));
  const removed = [];
  for (const abs of walk(join(EN_ROOT, 'api'))) {
    const posixPath = abs.replace(/\\/g, '/');
    if (posixPath.endsWith('/_index.md')) continue;
    if (keep.has(posixPath)) continue;
    const head = readFileSync(abs, 'utf8');
    const h1 = (head.match(/^#\s+(.+)$/m) || [])[1];
    if (h1 && SKIP_TYPES.has(h1.trim())) continue; // facade worker's page
    removed.push(posixPath);
  }
  let n = 0;
  for (const f of removed) { try { rmSync(f); n++; } catch { /* concurrent writer */ } }
  return { removed: n, candidates: removed.length };
}
let written = 0, noSource = 0, printed = 0;
const cats = {};
const failures = [];
const declMismatch = [];
const markerCount = { withMarker: 0, without: 0 };

for (const page of wanted) {
  const srcFile = findSourceFile(page);
  let decl = null, members = [], kind = page.kind || '';
  let sourceRel = '(not located)';
  if (srcFile) {
    sourceRel = srcFile.slice(SRC_ROOT.length + 1).replace(/\\/g, '/');
    const tb = readTypeBlock(srcFile, page.typeName);
    if (tb) {
      decl = tb.decl;
      kind = kind || tb.kind;
      if (tb.namespace) page.namespace = tb.namespace;   // source wins over the copied line
      members = extractMembers(tb.body, page.typeName, tb.decl);
    }
  }
  if (!decl) { noSource++; failures.push(page.rel); continue; }
  // Source wins: compare our parse against the declaration the zh skeleton recorded.
  if (page.zhType && idOnly(page.zhType) && norm(idOnly(page.zhType)) !== norm(decl)) {
    declMismatch.push(page.rel + '\n    zh: ' + idOnly(page.zhType) + '\n    cs: ' + decl);
  }
  const baseName = baseOf(decl) || idOnly(page.zhBase);
  const module = page.module || moduleOf(page, srcFile);
  const zhText = page.zhText || (page.zhPath && existsSync(page.zhPath) ? readFileSync(page.zhPath, 'utf8') : null);
  markerCount[page.skeleton ? 'withMarker' : 'without']++;

  const { body, category, memberCount } = render(page, { decl, members, sourceRel, kind, baseName, module, zhText });
  cats[category] = (cats[category] || 0) + 1;

  // Dependencies: real types from this page's own source that exist in the tree.
  const refs = [];
  if (srcFile) {
    const rawTxt = stripComments(readFileSync(srcFile, 'utf8'));
    const idRe = /\b([A-Z][A-Za-z0-9_]{2,})\b/g;
    let mm;
    const local = new Set();
    while ((mm = idRe.exec(rawTxt))) local.add(mm[1]);
    const ordered = [baseName, ...(page.namespace && baseName ? [] : []), ...local];
    for (const cand of ordered) {
      const t = byType.get(cand);
      if (!t || t.rel === page.rel) continue;
      if (refs.some((r) => r.rel === t.rel)) continue;
      refs.push(t);
      if (refs.length >= 10) break;
    }
  }
  const depLines = refs.filter((t) => {
    const abs = join(EN_ROOT, t.rel).replace(/\\/g, '/');
    return enFiles.has(abs);
  });
  // Optional breadcrumb up to the bucket index, matching the zh skeleton pages.
  // Emitted only when the nav worker's _index.md is already on disk, so it can never 404.
  const idxAbs = join(EN_ROOT, 'api', page.dir, '_index.md').replace(/\\/g, '/');
  const breadcrumb = enFiles.has(idxAbs)
    ? '\nSection: [api/' + page.dir + '/](../) — the other types in this bucket.\n'
    : '\n';

  const full = body + '\n## Dependencies\n\n' + (depLines.length
    ? 'Types from this page that are documented in the same tree:\n\n' + depLines.map((t) =>
      `- [${t.typeName}](${linkHref(page.dir, t.dir, t.file)}) — \`${t.namespace}\`.`).join('\n')
    : 'Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.') + '\n' + breadcrumb;

  if (PRINT) { console.log(full); printed++; continue; }
  if (DRY) { written++; continue; }
  const outAbs = join(EN_ROOT, page.rel);
  mkdirSync(dirname(outAbs), { recursive: true });
  writeFileSync(outAbs, full, 'utf8');
  written++;
}

const report = {
  manifest: manifest.source,
  gate: { excludeNamespaces: EXCL_NS.length, excludeSuffixes: EXCL_SUFFIX.length, typo: TYPO_NS.length, dirmap: existsSync(DIRMAP) },
  zhPagesOnDisk: allPages.length,
  candidates: pages.length,
  skippedFacade: skipReport.length,
  skippedByNoiseGate: gatedPages.length,
  collisionPages: collisionPages.length,
  written, noSource, printed, categories: cats, markers: markerCount,
  prune: pruneOrphans(),
};
console.log(JSON.stringify(report, null, 1));
if (skipReport.length) console.log('SKIP_FACADE(' + skipReport.length + '):\n  ' + skipReport.join('\n  '));
if (collisionPages.length) console.log('COLLISION_SUFFIX(' + collisionPages.length + ', mirrored):\n  ' + collisionPages.join('\n  '));
if (gatedPages.length) console.log('SKIP_NOISE_GATE(' + gatedPages.length + '):\n  ' + gatedPages.join('\n  '));
if (declMismatch.length) console.log('DECL_MISMATCH zh-vs-source(' + declMismatch.length + '):\n  ' + declMismatch.slice(0, 20).join('\n  '));
if (failures.length) console.log('NO_SOURCE(' + failures.length + '):\n  ' + failures.slice(0, 30).join('\n  '));
if (PRINT) process.exit(printed ? 0 : 1);