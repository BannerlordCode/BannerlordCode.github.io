// Shared class-reference extraction + rendering used by gen-class-ref.mjs
// and generate-class-docs.mjs.
import { readFileSync } from 'fs';
import * as docFragments from '../doc-fragments.mjs';

export const STUB_RE = /auto-generated stub|\u81ea\u52a8\u751f\u6210\u7684\u5b58\u6839|处理\s+`[^`]+`\s+相关逻辑[。；]|Handles logic related to\s+`[^`]+`/;

export const safeSuffix = ns => ns.replace(/[^A-Za-z0-9]+/g, '_');

function clean(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/.*$/gm, ' ').replace(/\[([^\]]*)\]/g, ' ').replace(/\s+/g, ' ');
}

export function extractTypeBlock(cleaned, typeName) {
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

export function extract(filePath, typeName, sourceRoot) {
  const raw = readFileSync(filePath, 'utf8');
  const nsM = raw.match(/namespace\s+([\w.]+)/);
  const ns = nsM ? nsM[1] : '(global)';
  const c = clean(raw);
  const typeInfo = extractTypeBlock(c, typeName);
  const decl = typeInfo ? typeInfo.decl : 'class';
  const body = typeInfo ? typeInfo.body : c;
  const isStatic = /\bstatic\b/.test(decl);
  const isActions = /\.Actions$/.test(ns) && isStatic;

  const methods = [];
  const mre = /public\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|new\s+|async\s+)*(?:[\w.<>\[\],?\s]+?)\s+\w+\s*\(/g;
  let m;
  while ((m = mre.exec(body))) {
    const seg = m[0];
    if (/\b(get|set|if|for|foreach|while|switch|return|new|using|lock|catch)\s*\($/.test(seg)) continue;
    let depth = 0, i = m.index + seg.length - 1, end = -1;
    for (; i < body.length; i++) { if (body[i] === '(') depth++; else if (body[i] === ')') { depth--; if (depth === 0) { end = i; break; } } }
    if (end < 0) continue;
    const sig = body.slice(m.index, end + 1).trim();
    if (/\bprivate\b/.test(sig)) continue;
    const nameM = sig.match(/\b(\w+)\s*\(/);
    methods.push({ sig, name: nameM ? nameM[1] : '?' });
  }

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

  let file = filePath.replace(/\\/g, '/');
  if (sourceRoot) file = file.replace(sourceRoot.replace(/\\/g, '/') + '/', '');

  return { ns, decl, isStatic, isActions, methods, props, file };
}

export function outSubdir(ns, name) {
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
  if (ns.startsWith('SandBox') || ns.startsWith('StoryMode')) return 'campaign-ext';
  if (ns === 'Helpers') return 'system';
  return 'campaign-ext';
}

function actionPurpose(methodName) {
  return methodName.replace(/^ApplyBy/, '').replace(/^Apply/, '').replace(/([A-Z])/g, ' $1').trim().toLowerCase();
}

export function renderAction(name, ex, lang) {
  const L = lang === 'zh';
  const out = [];
  out.push('---');
  out.push('title: "' + name + '"');
  out.push('description: ' + (L ? '"' + name + ' 的自动生成战役动作参考。"' : '"Auto-generated campaign action reference for ' + name + '."'));
  out.push('---');
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
    const params = first.sig.slice(first.sig.indexOf('(') + 1, -1).split(',').map(p => p.trim()).filter(Boolean);
    const args = params.map(p => {
      const parts = p.split(/\s+/).filter(Boolean);
      const type = parts[0] || 'var';
      const pname = (parts[parts.length - 1] || '').replace(/=.*$/, '').trim();
      if (/^bool/.test(type)) return pname.endsWith('Notification') ? 'true' : 'false';
      if (/^int|^float|^double/.test(type)) return '100';
      return pname ? pname.replace(/^./, c => c.toLowerCase()) : '/* ' + type + ' */';
    }).join(', ');
    out.push('// ' + (L ? '在 mod 中触发一次该动作' : 'Trigger this action from a mod'));
    out.push(name + '.' + first.name + '(' + args + ');');
  }
  out.push('```');
  out.push('');
  out.push('## ' + (L ? '参见' : 'See Also'));
  out.push('');
  out.push('- [' + (L ? '本区域目录' : 'Area Index') + '](../)');
  out.push('- [' + (L ? '战役系统' : 'Campaign System') + '](../campaign/)');
  return out.join('\n');
}

export function renderGeneral(name, ex, lang) {
  const L = lang === 'zh';
  const declLower = ex.decl.toLowerCase();
  const baseM = ex.decl.match(/:\s*([^{]+)/);
  const base = baseM ? baseM[1].trim().split(',')[0].trim() : (L ? '无' : 'none');
  const out = [];
  out.push('---');
  out.push('title: "' + name + '"');
  out.push('description: ' + (L ? '"' + name + ' 的自动生成类参考。"' : '"Auto-generated class reference for ' + name + '."'));
  out.push('---');
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
  const kind = docFragments.kindOf(name);
  const ov = kind ? docFragments.kindOverview(name, kind, L ? 'zh' : 'en') : null;
  out.push(ov || (L
    ? `\`${name}\` 位于 \`${ex.ns}\`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。`
    : `\`${name}\` lives in \`${ex.ns}\` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.`));
  out.push('');
  out.push('## ' + (L ? '心智模型' : 'Mental Model'));
  out.push('');
  out.push(docFragments.mentalModel(name, kind, ex.ns, lang));
  out.push('');
  out.push(...docFragments.renderPropertyTable(ex.props, lang));
  out.push(...docFragments.renderMethodBlocks(ex.methods, name, lang));
  out.push('## ' + (L ? '使用示例' : 'Usage Example'));
  out.push('');
  out.push('```csharp');
  let usage = null;
  if (declLower.includes('interface')) {
    usage = L
      ? `// 通常通过依赖注入或工厂方法获得实现\nI${name} service = ...;`
      : `// Usually obtained through DI or a factory method\nI${name} service = ...;`;
  } else if (declLower.includes('abstract class')) {
    usage = L
      ? `// 通常通过子系统 API 或工厂获得派生实例\n${name} instance = ...;`
      : `// Typically obtained from a subsystem API or factory\n${name} instance = ...;`;
  } else if (kind) {
    usage = docFragments.kindUsage(name, kind, L ? 'zh' : 'en');
  }
  out.push(usage || docFragments.genericUsage(name, ex.methods, lang));
  out.push('```');
  out.push('');
  out.push('## ' + (L ? '参见' : 'See Also'));
  out.push('');
  out.push('- [' + (L ? '本区域目录' : 'Area Index') + '](../)');
  return out.join('\n');
}
