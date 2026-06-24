// tools/gen-class-ref.mjs
// Generate class reference pages from Bannerlord source. Two modes:
//  - Action classes (static class *Action in *.Actions ns): template page with Apply* methods.
//  - General classes: skeleton with properties/methods/fields + overview/use-case placeholders.
// Usage: node gen-class-ref.mjs [--ver 1.3.15] ClassName [...]   (writes zh+en pages)
// Run from repo root. Output dir inferred from namespace.
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { diffClass } from './class-version-diff.mjs';
import * as docFragments from './doc-fragments.mjs';

const versionArgIndex = process.argv.indexOf('--ver');
const VER = versionArgIndex >= 0 ? process.argv[versionArgIndex + 1] : '1.3.15';
const ROOT = 'bannerlord-' + VER;
const API = 'BannerlordCode.github.io/docs/v' + VER;

function safeNamespaceSuffix(namespace) {
  return namespace.replace(/[^A-Za-z0-9]+/g, '_');
}

function clean(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/.*$/gm, ' ').replace(/\[([^\]]*)\]/g, ' ').replace(/\s+/g, ' ');
}

function extractTypeBlock(cleaned, typeName) {
  const declRegex = new RegExp(`((?:public|internal|sealed|abstract|static|partial|new)\\s+)*(class|struct|enum|interface)\\s+${typeName}(?:<[^>]*>)?(?:\\s*:\\s*[^\\{]*)?`);
  const match = declRegex.exec(cleaned);
  if (!match) return null;
  const braceStart = cleaned.indexOf('{', match.index + match[0].length);
  if (braceStart < 0) return { decl: match[0].trim(), kind: match[2], body: match[0].trim() };
  let depth = 0;
  for (let index = braceStart; index < cleaned.length; index++) {
    if (cleaned[index] === '{') depth++;
    if (cleaned[index] === '}') {
      depth--;
      if (depth === 0) {
        return {
          decl: match[0].trim(),
          kind: match[2],
          body: cleaned.slice(match.index, index + 1)
        };
      }
    }
  }
  return { decl: match[0].trim(), kind: match[2], body: cleaned.slice(match.index) };
}

// Extract class declaration + members with full signatures.
function extract(filePath, typeName) {
  const raw = readFileSync(filePath, 'utf8');
  const nsM = raw.match(/namespace\s+([\w.]+)/);
  const ns = nsM ? nsM[1] : '(global)';
  const c = clean(raw);
  const typeInfo = extractTypeBlock(c, typeName);
  const decl = typeInfo ? typeInfo.decl : 'class';
  const body = typeInfo ? typeInfo.body : c;
  const isStatic = /\bstatic\b/.test(decl);
  const isActions = /\.Actions$/.test(ns) && isStatic;
  // methods: capture full signature incl params
  const methods = [];
  const mre = /public\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|new\s+|async\s+)*(?:[\w.<>\[\],?\s]+?)\s+\w+\s*\(/g;
  let m;
  while ((m = mre.exec(body))) {
    const seg = m[0];
    if (/\b(get|set|if|for|foreach|while|switch|return|new|using|lock|catch)\s*\($/.test(seg)) continue;
    // capture balanced parens
    let depth = 0, i = m.index + seg.length - 1, end = -1;
    for (; i < body.length; i++) { if (body[i] === '(') depth++; else if (body[i] === ')') { depth--; if (depth === 0) { end = i; break; } } }
    if (end < 0) continue;
    const sig = body.slice(m.index, end + 1).trim();
    // skip property accessors (get(... rare) — already filtered; skip private
    if (/\bprivate\b/.test(sig)) continue;
    const nameM = sig.match(/\b(\w+)\s*\(/);
    methods.push({ sig, name: nameM ? nameM[1] : '?' });
  }
  // properties
  const props = [];
  const pre = /public\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|new\s+)*(?:[\w.<>\[\],?\s]+?)\s+\w+\s*\{/g;
  let p;
  while ((p = pre.exec(body))) {
    const decl = body.slice(p.index, p.index + 120).match(/public[^{=;]*/);
    if (!decl) continue;
    let s = decl[0].replace(/\s+/g, ' ').trim();
    if (/\bprivate\b/.test(s)) continue;
    if (/\b(class|struct|enum|interface)\b/.test(s)) continue;
    const nm = s.match(/(\w+)\s*$/);
    const win = body.slice(p.index, p.index + 200);
    const hasSet = /\bset\b/.test(win) && !/private\s+set/.test(win);
    s = s + ' { get;' + (hasSet ? ' set;' : '') + ' }';
    props.push({ sig: s, name: nm ? nm[1] : '?' });
  }
  return { ns, decl, isStatic, isActions, methods, props, file: filePath.replace(/\\/g, '/').replace(ROOT + '/', '') };
}

// Pick output subdir by namespace.
function outSubdir(ns, name) {
  if (['Hero', 'Clan', 'Kingdom', 'Settlement', 'Town', 'Village', 'MobileParty', 'PartyBase'].includes(name)) return 'campaign';
  if (['Agent', 'Mission', 'Formation', 'MissionBehavior'].includes(name)) return 'mission';
  if (['MBSubModuleBase', 'Module'].includes(name)) return 'core';
  if (ns.startsWith('TaleWorlds.CampaignSystem.Actions')) return 'campaign-ext';
  if (ns.startsWith('TaleWorlds.CampaignSystem.ViewModelCollection')) return 'viewmodel';
  if (ns.startsWith('TaleWorlds.CampaignSystem')) return 'campaign';
  if (ns.startsWith('TaleWorlds.GauntletUI') || ns.startsWith('TaleWorlds.TwoDimension') || ns.startsWith('TaleWorlds.ScreenSystem')) return 'gui';
  if (ns.startsWith('TaleWorlds.MountAndBlade.ViewModelCollection')) return 'viewmodel';
  if (ns.startsWith('TaleWorlds.MountAndBlade')) return 'mission-ext';
  if (ns.startsWith('TaleWorlds.Core')) return 'core-extra';
  if (ns.startsWith('TaleWorlds.Engine')) return 'engine';
  if (ns.startsWith('TaleWorlds.SaveSystem')) return 'save-system';
  if (ns.startsWith('TaleWorlds.Localization')) return 'localization';
  if (ns.startsWith('TaleWorlds.Library')) return 'core-extra';
  if (ns.startsWith('SandBox.ViewModelCollection') || ns.startsWith('StoryMode.ViewModelCollection')) return 'viewmodel';
  if (ns.startsWith('SandBox') || ns.startsWith('StoryMode')) return 'gameplay';
  if (ns === 'Helpers') return 'system';
  return 'campaign-ext';
}

// Derive a short purpose line from an action method name (ApplyByBattle -> battle).
function actionPurpose(methodName) {
  return methodName.replace(/^ApplyBy/, '').replace(/^Apply/, '').replace(/([A-Z])/g, ' $1').trim().toLowerCase();
}

function methodPurpose(methodName, lang) {
  return docFragments.methodPurpose(methodName, lang);
}

function renderAction(name, ex, lang) {
  const L = lang === 'zh';
  const out = [];
  out.push('# ' + name);
  out.push('');
  out.push('**Namespace:** ' + ex.ns);
  out.push('**Module:** TaleWorlds.CampaignSystem');
  out.push('**Type:** static class');
  out.push('**File:** `' + ex.file + '`');
  out.push('');
  out.push(L ? name + ' 是一组静态方法，用于在战役中以特定原因触发"' + name.replace(/Action$/, '') + '"。modder通过调用其 `Apply*` 方法改变游戏状态（每种原因一个重载）。'
    : name + ' is a set of static methods that trigger "' + name.replace(/Action$/, '') + '" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).');
  out.push('');
  out.push('## ' + (L ? '方法' : 'Methods'));
  out.push('');
  for (const me of ex.methods) {
    if (!/^public\s+static/.test(me.sig)) continue;
    out.push('### ' + me.name);
    out.push('');
    out.push('```csharp');
    out.push(me.sig);
    out.push('```');
    out.push('');
    const why = actionPurpose(me.name);
    out.push(L ? '**用途 / Purpose:** ' + why + '。' : '**Purpose:** ' + why + '.');
    out.push('');
  }
  out.push('## ' + (L ? '使用示例' : 'Usage Example'));
  out.push('');
  out.push('```csharp');
  const first = ex.methods.find(mm => /^public\s+static/.test(mm.sig));
  if (first) {
    const callName = first.name;
    // extract param types from sig
    const params = first.sig.slice(first.sig.indexOf('(') + 1, -1).split(',').map(p => p.trim()).filter(Boolean);
    const args = params.map(p => {
      const parts = p.split(/\s+/).filter(Boolean);
      const type = parts[0] || 'var';
      const pname = (parts[parts.length - 1] || '').replace(/=.*$/, '').trim();
      if (/^bool/.test(type)) return pname.endsWith('Notification') ? 'true' : 'false';
      if (/^int|^float|^double/.test(type)) return '100';
      // reference type: use the param name (lowercased first char) as a readable placeholder
      return pname ? pname.replace(/^./, c => c.toLowerCase()) : '/* ' + type + ' */';
    }).join(', ');
    out.push('// ' + (L ? '在 mod 中触发一次该动作' : 'Trigger this action from a mod'));
    out.push(name + '.' + callName + '(' + args + ');');
  }
  out.push('```');
  out.push('');
  out.push('## ' + (L ? '参见' : 'See Also'));
  out.push('');
  out.push('- [' + (L ? '完整类目录' : 'Complete Class Catalog') + '](../catalog)');
  out.push('- [' + (L ? '战役系统目录' : 'Campaign System catalog') + '](../catalog-campaign)');
  return out.join('\n');
}

// Kind detection — gives honest developer guidance at scale.
function kindOf(name) {
  return docFragments.kindOf(name);
}
function kindOverview(name, kind, L) {
  return docFragments.kindOverview(name, kind, L ? 'zh' : 'en');
}
function kindUsage(name, kind, L) {
  return docFragments.kindUsage(name, kind, L ? 'zh' : 'en');
}

function renderGeneral(name, ex, lang) {
  const L = lang === 'zh';
  const declLower = ex.decl.toLowerCase();
  const baseM = ex.decl.match(/:\s*([^{]+)/);
  const base = baseM ? baseM[1].trim().split(',')[0].trim() : (L ? '无' : 'none');
  const out = [];
  out.push('# ' + name);
  out.push('');
  out.push('**Namespace:** ' + ex.ns);
  out.push('**Module:** ' + docFragments.moduleFromNamespace(ex.ns));
  out.push('**Type:** `' + ex.decl.replace(/\s*\{?\s*$/, '').replace(/^\s+/, '') + '`');
  out.push('**Base:** ' + (base && base !== (L ? '无' : 'none') ? '`' + base + '`' : base));
  out.push('**File:** `' + ex.file + '`');
  out.push('');
  out.push('## ' + (L ? '概述' : 'Overview'));
  out.push('');
  const kind = kindOf(name);
  const ov = kind ? kindOverview(name, kind, L) : null;
  out.push(ov || (L
    ? `\`${name}\` 位于 \`${ex.ns}\`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。`
    : `\`${name}\` lives in \`${ex.ns}\` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.`));
  out.push('');
  out.push('## ' + (L ? '心智模型' : 'Mental Model'));
  out.push('');
  out.push(docFragments.mentalModel(name, kind, ex.ns, lang));
  out.push('');
  out.push(...docFragments.renderPropertyTable(ex.props, lang));
  out.push(...docFragments.renderMethodBlocks(ex.methods, lang));
  out.push('## ' + (L ? '使用示例' : 'Usage Example'));
  out.push('');
  out.push('```csharp');
  const usage = declLower.includes('interface')
    ? `var implementation = Get${name.replace(/^I/, '')}Implementation();`
    : declLower.includes('abstract class')
      ? `var implementation = new Custom${name}();`
      : (kind ? kindUsage(name, kind, L) : null);
  out.push(usage || docFragments.genericUsage(name, ex.methods, lang));
  out.push('```');
  out.push('');
  out.push('## ' + (L ? '参见' : 'See Also'));
  out.push('');
  out.push('- [' + (L ? '完整类目录' : 'Complete Class Catalog') + '](../catalog)');
  return out.join('\n');
}

const classes = process.argv.slice(2).filter((arg, index, arr) => arg !== '--ver' && arr[index - 1] !== '--ver');
if (!classes.length) { console.error('Usage: node gen-class-ref.mjs [--ver 1.3.15] ClassName [...]'); process.exit(1); }
import('fs').then(({ readdirSync, statSync }) => {
  const allCs = [];
  (function walk(d) { let e; try { e = readdirSync(d); } catch { return; } for (const x of e) { if (x === 'node_modules' || x.startsWith('.')) continue; const p = join(d, x); let s; try { s = statSync(p); } catch { continue; } if (s.isDirectory()) walk(p); else if (p.replace(/\\/g, '/').endsWith('.cs')) allCs.push(p.replace(/\\/g, '/')); } })(ROOT);
  const typeIndex = new Map();
  const publicTypeRegex = /\bpublic\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+|new\s+)*(class|struct|interface|enum)\s+(\w+)/g;
  for (const path of allCs) {
    const raw = readFileSync(path, 'utf8');
    const ns = raw.match(/namespace\s+([\w.]+)/)?.[1] || '(global)';
    let match;
    publicTypeRegex.lastIndex = 0;
    while ((match = publicTypeRegex.exec(raw))) {
      const key = `${ns}|${match[2]}`;
      if (!typeIndex.has(key)) typeIndex.set(key, path);
    }
  }
  for (const input of classes) {
    const [expectedNamespace, className] = input.includes('|') ? input.split('|') : ['', input];
    const f = expectedNamespace ? typeIndex.get(`${expectedNamespace}|${className}`) : (allCs.find((path) => path.endsWith('/' + className + '.cs')) || [...typeIndex.entries()].find(([key]) => key.endsWith('|' + className))?.[1]);
    if (!f) { console.warn('SKIP ' + input + ' (not found in ' + VER + ')'); continue; }
    const ex = extract(f, className);
    const sub = outSubdir(ex.ns, className);
    for (const lang of ['en', 'zh']) {
      const body = ex.isActions ? renderAction(className, ex, lang) : renderGeneral(className, ex, lang);
      const dir = join(API, lang, 'api', sub);
      mkdirSync(dir, { recursive: true });
      const plainPath = join(dir, className + '.md');
      let outputFileName = className + '.md';
      if (existsSync(plainPath)) {
        const existingText = readFileSync(plainPath, 'utf8');
        const existingNamespaceLine = existingText.split(/\r?\n/).find((line) => line.startsWith('**Namespace:**') || line.startsWith('**命名空间:**')) || '';
        const existingNamespace = existingNamespaceLine.replace(/^\*\*(?:Namespace|命名空间):\*\*\s*/, '').trim();
        if (existingNamespace && existingNamespace !== ex.ns) {
          outputFileName = `${className}__${safeNamespaceSuffix(ex.ns)}.md`;
        }
      }
      writeFileSync(join(dir, outputFileName), body);
    }
    console.log('wrote ' + className + ' (' + (ex.isActions ? 'action' : 'general') + ', ns=' + ex.ns + ', methods=' + ex.methods.length + ')');
  }
});
