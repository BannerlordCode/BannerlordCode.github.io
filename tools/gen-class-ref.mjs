// tools/gen-class-ref.mjs
// Generate class reference pages from 1.3.15 source. Two modes:
//  - Action classes (static class *Action in *.Actions ns): template page with Apply* methods.
//  - General classes: skeleton with properties/methods/fields + overview/use-case placeholders.
// Usage: node gen-class-ref.mjs ClassName [...]   (writes zh+en pages)
// Run from repo root. Output dir inferred from namespace.
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { diffClass } from './class-version-diff.mjs';

const ROOT = 'bannerlord-1.3.15';
const API = 'BannerlordCode.github.io/docs/v1.3.15';

function clean(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/.*$/gm, ' ').replace(/\[([^\]]*)\]/g, ' ').replace(/\s+/g, ' ');
}

// Extract class declaration + members with full signatures.
function extract(filePath) {
  const raw = readFileSync(filePath, 'utf8');
  const nsM = raw.match(/namespace\s+([\w.]+)/);
  const ns = nsM ? nsM[1] : '(global)';
  const c = clean(raw);
  const declM = c.match(/((?:public|internal|sealed|abstract|static|partial|new)\s+)*(class|struct)\s+\w+(?:<[^>]*>)?(?:\s*:\s*[^{]*)?/);
  const decl = declM ? declM[0].trim() : 'class';
  const isStatic = /\bstatic\b/.test(decl);
  const isActions = /\.Actions$/.test(ns) && isStatic;
  // methods: capture full signature incl params
  const methods = [];
  const mre = /public\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|new\s+|async\s+)*(?:[\w.<>\[\],?\s]+?)\s+\w+\s*\(/g;
  let m;
  while ((m = mre.exec(c))) {
    const seg = m[0];
    if (/\b(get|set|if|for|foreach|while|switch|return|new|using|lock|catch)\s*\($/.test(seg)) continue;
    // capture balanced parens
    let depth = 0, i = m.index + seg.length - 1, end = -1;
    for (; i < c.length; i++) { if (c[i] === '(') depth++; else if (c[i] === ')') { depth--; if (depth === 0) { end = i; break; } } }
    if (end < 0) continue;
    const sig = c.slice(m.index, end + 1).trim();
    // skip property accessors (get(... rare) — already filtered; skip private
    if (/\bprivate\b/.test(sig)) continue;
    const nameM = sig.match(/\b(\w+)\s*\(/);
    methods.push({ sig, name: nameM ? nameM[1] : '?' });
  }
  // properties
  const props = [];
  const pre = /public\s+(?:static\s+|virtual\s+|override\s+|abstract\s+|sealed\s+|new\s+)*(?:[\w.<>\[\],?\s]+?)\s+\w+\s*\{/g;
  let p;
  while ((p = pre.exec(c))) {
    const decl = c.slice(p.index, p.index + 120).match(/public[^{=;]*/);
    if (!decl) continue;
    let s = decl[0].replace(/\s+/g, ' ').trim();
    if (/\bprivate\b/.test(s)) continue;
    if (/\b(class|struct|enum|interface)\b/.test(s)) continue;
    const nm = s.match(/(\w+)\s*$/);
    const win = c.slice(p.index, p.index + 200);
    const hasSet = /\bset\b/.test(win) && !/private\s+set/.test(win);
    s = s + ' { get;' + (hasSet ? ' set;' : '') + ' }';
    props.push({ sig: s, name: nm ? nm[1] : '?' });
  }
  return { ns, decl, isStatic, isActions, methods, props, file: filePath.replace(/\\/g, '/').replace(ROOT + '/', '') };
}

// Pick output subdir by namespace.
function outSubdir(ns) {
  if (ns.startsWith('TaleWorlds.CampaignSystem.Actions')) return 'campaign-ext';
  if (ns.startsWith('TaleWorlds.CampaignSystem')) return 'campaign-ext';
  if (ns.startsWith('TaleWorlds.MountAndBlade')) return 'mission-ext';
  if (ns.startsWith('TaleWorlds.Core')) return 'core-extra';
  if (ns.startsWith('TaleWorlds.Engine')) return 'engine';
  if (ns.startsWith('TaleWorlds.Library')) return 'core-extra';
  return 'campaign-ext';
}

// Derive a short purpose line from an action method name (ApplyByBattle -> battle).
function actionPurpose(methodName) {
  return methodName.replace(/^ApplyBy/, '').replace(/^Apply/, '').replace(/([A-Z])/g, ' $1').trim().toLowerCase();
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
  // ViewModel before Model; Widget/View/Brush/Data/Helper first
  for (const k of ['Widget', 'ViewModel', 'View', 'Brush', 'Data', 'Helper', 'Exception', 'Attribute', 'Component', 'Logic', 'Model', 'Manager', 'Controller', 'Handler']) {
    if (name.endsWith(k) && name.length > k.length) return k;
  }
  return null;
}
function kindOverview(name, kind, L) {
  const T = {
    Widget: L
      ? `\`${name}\` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。`
      : `\`${name}\` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.`,
    ViewModel: L
      ? `\`${name}\` 是一个 Gauntlet ViewModel——C# 逻辑与 Gauntlet UI 之间的数据绑定桥梁。用 \`[DataSourceProperty]\` 绑定属性，重写 OnPropertyChanged 响应变化。`
      : `\`${name}\` is a Gauntlet ViewModel — the data-binding bridge between C# logic and a Gauntlet UI. Bind properties with \`[DataSourceProperty]\`, override OnPropertyChanged to react.`,
    View: L
      ? `\`${name}\` 是一个引擎视图/表面（渲染、纹理、场景预览等）。经引擎视图系统访问。`
      : `\`${name}\` is an engine view/surface (render, texture, scene preview, etc.). Accessed via the engine view system.`,
    Brush: L
      ? `\`${name}\` 是一个 Gauntlet 画刷（视觉样式：精灵/颜色/状态），应用到控件上。`
      : `\`${name}\` is a Gauntlet brush (visual style: sprites/colors/states) applied to widgets.`,
    Data: L
      ? `\`${name}\` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。`
      : `\`${name}\` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.`,
    Helper: L
      ? `\`${name}\` 是一个静态工具类，提供辅助方法。`
      : `\`${name}\` is a static utility class providing helper methods.`,
    Exception: L
      ? `\`${name}\` 是一个异常类型（继承自 Exception），在特定错误条件发生时抛出。捕获它以处理该错误。`
      : `\`${name}\` is an exception type (derived from Exception) thrown when a specific error condition occurs. Catch it to handle that error.`,
    Attribute: L
      ? `\`${name}\` 是一个 .NET 特性（Attribute），应用到成员/类型上以标记某种用途（如序列化、缓存、验证）。用 \`[${name}]\` 注解。`
      : `\`${name}\` is a .NET attribute applied to members/types to mark them for a purpose (serialization, caching, validation). Annotate with \`[${name}]\`.`,
    Component: L
      ? `\`${name}\` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 \`agent.GetComponent<${name}>()\` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。`
      : `\`${name}\` is an AgentComponent — per-agent state/logic attached to an Agent. Access via \`agent.GetComponent<${name}>()\` (some have a typed agent property). Subclass AgentComponent to add your own.`,
    Logic: L
      ? `\`${name}\` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 \`mission.AddMissionBehavior(new ${name}())\` 添加；继承它可定制。`
      : `\`${name}\` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via \`mission.AddMissionBehavior(new ${name}())\`; subclass it to customize.`,
    Model: L
      ? `\`${name}\` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 \`Game.Current.ReplaceModel<${name}>(new My${name}())\` 注册，以改变其计算逻辑。`
      : `\`${name}\` is a game Model — a rules/override point. Subclass it and register via \`Game.Current.ReplaceModel<${name}>(new My${name}())\` to change how it computes.`,
    Manager: L
      ? `\`${name}\` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。`
      : `\`${name}\` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.`,
    Controller: L
      ? `\`${name}\` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。`
      : `\`${name}\` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.`,
    Handler: L
      ? `\`${name}\` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。`
      : `\`${name}\` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.`,
  };
  return T[kind] || null;
}
function kindUsage(name, kind, L) {
  const code = {
    Widget: `// 声明/访问一个 ${name}\nvar widget = root.GetChild(${JSON.stringify(name.charAt(0).toLowerCase()+name.slice(1))});`,
    ViewModel: `// 绑定一个 ${name} 到 Gauntlet UI\nvar vm = new ${name}();\nmovie.SetViewModel(vm);`,
    View: `${name} /* via engine view system */`,
    Brush: `// 应用 ${name} 到控件\nwidget.Brush = ${name};`,
    Data: `new ${name} { /* fill fields */ };`,
    Helper: `${name}./* static helper method */();`,
    Exception: `try { /* call */ } catch (${name} e) { /* handle */ }`,
    Attribute: `[${name}] /* applied to a member/type */`,
    Component: `agent.GetComponent<${name}>()`,
    Logic: `Mission.Current.AddMissionBehavior(new ${name}())`,
    Model: `Game.Current.ReplaceModel<${name}>(new My${name}())`,
    Manager: `${name}.Current`,
    Controller: `Mission.Current.GetMissionBehavior<${name}>()`,
    Handler: `Mission.Current.AddMissionBehavior(new ${name}())`,
  };
  if (!code[kind]) return null;
  const cmt = L ? `// ${name} (${kind}) 的典型用法` : `// Typical usage of ${name} (${kind})`;
  return cmt + '\n' + code[kind] + ';';
}

function renderGeneral(name, ex, lang) {
  const L = lang === 'zh';
  const baseM = ex.decl.match(/:\s*([^{]+)/);
  const base = baseM ? baseM[1].trim().split(',')[0].trim() : (L ? '无' : 'none');
  const out = [];
  out.push('# ' + name);
  out.push('');
  out.push('**Namespace:** ' + ex.ns);
  out.push('**Module:** ' + (ex.ns.startsWith('TaleWorlds.MountAndBlade') ? 'TaleWorlds.MountAndBlade' : ex.ns.split('.').slice(0, 2).join('.')));
  out.push('**Type:** `' + ex.decl.replace(/\s*\{?\s*$/, '').replace(/^\s+/, '') + '`');
  out.push('**Base:** ' + (base && base !== (L ? '无' : 'none') ? '`' + base + '`' : base));
  out.push('**File:** `' + ex.file + '`');
  out.push('');
  out.push('## ' + (L ? '概述' : 'Overview'));
  out.push('');
  const kind = kindOf(name);
  const ov = kind ? kindOverview(name, kind, L) : null;
  out.push(ov || (L ? '> TODO: 从开发者角度补充本类的职责与典型用例。' : '> TODO: add this class\'s responsibility and typical use-cases from a developer perspective.'));
  out.push('');
  if (ex.props.length) {
    out.push('## ' + (L ? '主要属性' : 'Key Properties'));
    out.push('');
    out.push('| Name | Signature |');
    out.push('|------|-----------|');
    for (const p of ex.props.slice(0, 40)) out.push('| `' + p.name + '` | `' + p.sig + '` |');
    out.push('');
  }
  if (ex.methods.length) {
    out.push('## ' + (L ? '主要方法' : 'Key Methods'));
    out.push('');
    for (const me of ex.methods.slice(0, 30)) {
      out.push('### ' + me.name);
      out.push('```csharp');
      out.push(me.sig);
      out.push('```');
      out.push('');
    }
  }
  out.push('## ' + (L ? '使用示例' : 'Usage Example'));
  out.push('');
  out.push('```csharp');
  const usage = kind ? kindUsage(name, kind, L) : null;
  out.push(usage || ('// ' + (L ? 'TODO: 补充典型用例' : 'TODO: add a typical use-case')));
  out.push('```');
  out.push('');
  out.push('## ' + (L ? '参见' : 'See Also'));
  out.push('');
  out.push('- [' + (L ? '完整类目录' : 'Complete Class Catalog') + '](../catalog)');
  return out.join('\n');
}

const classes = process.argv.slice(2);
if (!classes.length) { console.error('Usage: node gen-class-ref.mjs ClassName [...]'); process.exit(1); }
import('fs').then(({ readdirSync, statSync }) => {
  const target = (cn) => '/' + cn + '.cs';
  const allCs = [];
  (function walk(d) { let e; try { e = readdirSync(d); } catch { return; } for (const x of e) { if (x === 'node_modules' || x.startsWith('.')) continue; const p = join(d, x); let s; try { s = statSync(p); } catch { continue; } if (s.isDirectory()) walk(p); else if (p.replace(/\\/g, '/').endsWith('.cs')) allCs.push(p.replace(/\\/g, '/')); } })(ROOT);
  for (const name of classes) {
    const f = allCs.find(p => p.endsWith(target(name)));
    if (!f) { console.warn('SKIP ' + name + ' (not found in 1.3.15)'); continue; }
    const ex = extract(f);
    const sub = outSubdir(ex.ns);
    for (const lang of ['en', 'zh']) {
      const body = ex.isActions ? renderAction(name, ex, lang) : renderGeneral(name, ex, lang);
      const dir = join(API, lang, 'api', sub);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, name + '.md'), body);
    }
    console.log('wrote ' + name + ' (' + (ex.isActions ? 'action' : 'general') + ', ns=' + ex.ns + ', methods=' + ex.methods.length + ')');
  }
});
