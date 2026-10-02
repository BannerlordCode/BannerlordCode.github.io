// tools/_v146_xver.mjs  (worker-57, batch-3 task D)
// 1.4.5 (original source, bin/<Asm>/<Asm>/<Type>.cs) vs 1.4.6 (decompiled, top-level module dirs)
// Usage: node _v146_xver.mjs Type [Type...]
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const WS = 'C:/WorkSpace/Bannerlord';
const VERSIONS = {
  '1.3.15': { root: join(WS, 'bannerlord-1.3.15') },
  '1.4.5': { root: join(WS, 'bannerlord-1.4.5/Bannerlord.Source/bin') },
  '1.4.6': { root: join(WS, 'bannerlord-1.4.6') },
};

function walk(dir, acc = []) {
  let e;
  try { e = readdirSync(dir); } catch { return acc; }
  for (const n of e) {
    if (n === 'node_modules' || n === '.git' || n === 'obj' || n === 'Properties' || n.startsWith('.')) continue;
    const p = join(dir, n);
    let s; try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) walk(p, acc); else if (n.endsWith('.cs')) acc.push(p.replace(/\\/g, '/'));
  }
  return acc;
}
const _c = {};
const listCs = (r) => (_c[r] ||= existsSync(r) ? walk(r) : []);
function candidates(v, cls) {
  return listCs(VERSIONS[v].root).filter((p) => p.endsWith('/' + cls + '.cs'));
}
// Pick the candidate whose path carries the owning assembly/module segment, so
// `Module.cs` resolves to TaleWorlds.MountAndBlade and not mscorlib/System/Reflection.
function findFile(v, cls, hint) {
  const c = candidates(v, cls);
  if (!c.length) return null;
  // Substring (not slash-anchored): the hint may be an assembly name
  // (`TaleWorlds.Library`) or a folder fragment (`EventSystem`), and 1.4.5 mixes
  // both layouts (`bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/…`).
  if (hint) {
    const hit = c.filter((p) => p.includes(hint));
    if (hit.length) return hit[0];
    if (c.length > 1) return 'UNRESOLVED:' + c.join(' | ');
  }
  return c.find((p) => !/\/(mscorlib|System|netstandard|Newtonsoft\.Json|Steamworks\.NET|GalaxyCSharp|Properties)\//.test(p)) || c[0];
}

const clean = (s) => s
  .replace(/\/\*[\s\S]*?\*\//g, ' ')
  .replace(/\/\/.*$/gm, ' ')
  .replace(/^\s*\[[^\]]*\]\s*$/gm, ' ')
  .replace(/\[([^\]]*)\]/g, ' ')
  .replace(/\s+/g, ' ');

const MOD = '(?:public|protected|internal|static|virtual|override|abstract|sealed|readonly|new|async|partial|extern|unsafe|volatile|const|private)';
const KW = new Set(['get','set','value','void','if','for','foreach','while','switch','using','lock','return','catch','new','this','base','else','try','finally','throw','do','fixed','checked','unchecked','nameof','typeof','default','yield','add','remove','class','struct','interface','enum','var','string','int','bool','float','double','object','byte','sbyte','uint','ulong','short','ushort','long','ulong_']);

// Return Map name -> {kind, sig, mods}. Only public/protected surfaces.
function members(src) {
  const m = new Map();
  const put = (name, kind, sig, off) => {
    if (KW.has(name) || m.has(name)) return;
    const mods = (sig.match(/\b(public|protected|internal|private)\b/g) || []);
    m.set(name, { kind, sig: sig.trim(), mods: [...new Set(mods)].join(' '), off });
  };
  // properties (block or =>); require a { or => right after the name
  let re = new RegExp(MOD + '(?:\\s+' + MOD + ')*\\s+([\\w.<>\\[\\],?\\s]+?)\\s+(\\w+)\\s*(?:\\{\\s*(get|set)|=>)', 'g');
  let x;
  while ((x = re.exec(src))) put(x[2], 'prop', x[0], x.index);
  // methods
  re = new RegExp(MOD + '(?:\\s+' + MOD + ')*\\s+([\\w.<>\\[\\],?\\s]+?)\\s+(\\w+)\\s*\\(', 'g');
  while ((x = re.exec(src))) {
    if (m.has(x[2])) continue;
    let d = 0, i = x.index + x[0].length - 1, end = -1;
    for (; i < src.length; i++) { if (src[i] === '(') d++; else if (src[i] === ')') { d--; if (!d) { end = i; break; } } }
    if (end < 0) continue;
    put(x[2], 'method', src.slice(x.index, end + 1), x.index);
  }
  // events + public/protected/internal fields:  [mods] event T Name;   /   [mods] T Name;
  re = new RegExp(MOD + '(?:\\s+' + MOD + ')*\\s+(event\\s+)?([\\w.<>\\[\\],?\\s]+?)\\s+(\\w+)\\s*(;|=)', 'g');
  while ((x = re.exec(src))) {
    if (m.has(x[3])) continue;
    put(x[3], x[1] ? 'event' : 'field', x[0].replace(/[;=]$/, ''), x.index);
  }
  for (const [k, v] of [...m]) {
    const s = v.sig;
    if (/(^|\s)private(\s|$)/.test(s)) { m.delete(k); continue; }
    if (/\bstatic\b/.test(s) && !/\b(public|protected|internal)\b/.test(s)) { m.delete(k); continue; }
    v.sig = s.replace(/^(internal)/, 'internal');
  }
  return m;
}

// `hint` = owning assembly dir name (e.g. TaleWorlds.MountAndBlade), from the 1.4.5 hit.
function load(v, cls, hint) {
  const f = findFile(v, cls, hint);
  if (!f) return null;
  const raw = readFileSync(f, 'utf8');
  const c = clean(raw);
  return { file: f.replace(WS + '/', ''), lines: raw.split('\n').length, m: members(c), raw, clean: c };
}

// Declaration head only: drop the body opener so `T Foo =>` == `T Foo { get; }`
// (a decompilation-form difference, not a semantic one). Strip the outer-type
// qualifier the decompiler adds to nested types (`ArmorComponent.ArmorMaterialTypes`).
function normSig(s, cls) {
  let head = s.split('=>')[0].split('{')[0];
  head = head.replace(new RegExp('\\b' + cls + '\\.', 'g'), '');
  return head
    .replace(/^(?:(?:public|protected|internal|static|virtual|override|abstract|sealed|readonly|new|async|partial|extern|unsafe|volatile|const)\s+)+/, '')
    .replace(/\s+/g, '')
    .replace(/\bSystem\.Text\.StringBuilder\b/g, 'StringBuilder')
    .replace(/\bSystem\.Collections\.Generic\./g, '')
    .replace(/\bglobal::/g, '')
    .replace(/[<>]/g, '');
}

function report(cls, pathHint) {
  // Derive the owning assembly from the 1.3.15 hit (top-level module dirs => unambiguous).
  // Deriving it from the 1.4.5 candidate[0] mis-resolves duplicate type names
  // (EventManager exists in both TaleWorlds.Library and TaleWorlds.GauntletUI).
  const hint145 = candidates('1.4.5', cls).find((p) => p.includes('/bin/TaleWorlds.'))?.split('/bin/')[1]?.split('/')[0];
  const hint313 = candidates('1.3.15', cls).find((p) => /\/TaleWorlds\./.test(p))?.split('/bannerlord-1.3.15/')[1]?.split('/')[0];
  const hint = pathHint || hint313 || hint145;
  const A = load('1.4.5', cls, hint), B = load('1.4.6', cls, hint), C = load('1.3.15', cls, hint);
  const L = [];
  L.push(`### ${cls}`);
  L.push(`- 1.4.5: \`${A ? A.file : 'NOT FOUND'}\` (${A ? A.lines : 0} lines, ${A ? A.m.size : 0} members)`);
  L.push(`- 1.4.6: \`${B ? B.file : 'NOT FOUND'}\` (${B ? B.lines : 0} lines, ${B ? B.m.size : 0} members)`);
  L.push(`- 1.3.15: \`${C ? C.file : 'NOT FOUND'}\` (${C ? C.lines : 0} lines, ${C ? C.m.size : 0} members)`);
  if (!A || !B) { L.push('- **SKIP**: missing one side'); return L.join('\n'); }

  const added = [...B.m.keys()].filter((n) => !A.m.has(n));
  const removed = [...A.m.keys()].filter((n) => !B.m.has(n));
  const sigDiff = [...B.m.keys()].filter((n) => A.m.has(n) && normSig(A.m.get(n).sig, cls) !== normSig(B.m.get(n).sig, cls));
  const accDiff = [...B.m.keys()].filter((n) => A.m.has(n) && A.m.get(n).mods !== B.m.get(n).mods);

  L.push(`- **1.4.5→1.4.6 新增 (${added.length})**: ${added.length ? added.join(', ') : '无'}`);
  for (const n of added) L.push(`  - \`${n}\` → 1.4.6: \`${B.m.get(n).sig}\``);
  L.push(`- **1.4.5→1.4.6 移除 (${removed.length})**: ${removed.length ? removed.join(', ') : '无'}`);
  for (const n of removed) L.push(`  - \`${n}\` → 1.4.5: \`${A.m.get(n).sig}\``);
  L.push(`- **同名签名变化 (${sigDiff.length})**: ${sigDiff.length ? sigDiff.join(', ') : '无'}`);
  for (const n of sigDiff) L.push(`  - \`${n}\`  1.4.5: \`${A.m.get(n).sig}\`  ||  1.4.6: \`${B.m.get(n).sig}\``);
  L.push(`- **同名可访问性变化 (${accDiff.length})**: ${accDiff.length ? accDiff.join(', ') : '无'}`);
  for (const n of accDiff) L.push(`  - \`${n}\`  1.4.5:[${A.m.get(n).mods}]  1.4.6:[${B.m.get(n).mods}]`);
  if (C) {
    const a3 = [...B.m.keys()].filter((n) => !C.m.has(n));
    const r3 = [...C.m.keys()].filter((n) => !B.m.has(n));
    L.push(`- **1.3.15→1.4.6 新增 (${a3.length})**: ${a3.join(', ') || '无'}`);
    L.push(`- **1.3.15→1.4.6 移除 (${r3.length})**: ${r3.join(', ') || '无'}`);
    if (A) {
      const a35 = [...A.m.keys()].filter((n) => !C.m.has(n));
      const r35 = [...C.m.keys()].filter((n) => !A.m.has(n));
      L.push(`- **1.3.15→1.4.5 新增 (${a35.length})**: ${a35.join(', ') || '无'}`);
      L.push(`- **1.3.15→1.4.5 移除 (${r35.length})**: ${r35.join(', ') || '无'}`);
    }
  }
  return L.join('\n');
}

// Usage: node _v146_xver.mjs Type[@pathHint] [...]   (pathHint disambiguates duplicate type names)
const args = process.argv.slice(2);
for (const a of args) {
  const [cls, hint] = a.split('@');
  console.log(report(cls, hint));
  console.log();
}