function buildArgsFromSignature(sig) {
  const open = sig.indexOf('(');
  const close = sig.lastIndexOf(')');
  if (open < 0 || close < open) return '';
  return sig.slice(open + 1, close)
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const pieces = part.split(/\s+/).filter(Boolean);
      const type = pieces[0] || 'var';
      const parameterName = (pieces[pieces.length - 1] || '').replace(/=.*$/, '').trim();
      if (/^(bool|Boolean)/.test(type)) return parameterName.endsWith('Notification') ? 'true' : 'false';
      if (/^(int|short|long|byte|sbyte|ushort|uint|ulong|float|double|decimal)/.test(type)) return '0';
      if (/^(string|String)/.test(type)) return '"example"';
      return parameterName ? parameterName.replace(/^./, (char) => char.toLowerCase()) : 'default';
    })
    .join(', ');
}

function inferMethodVerb(methodName) {
  return methodName.match(/^(Initialize|Execute|Refresh|Create|Remove|Update|Reset|Apply|Handle|Get|Set|Try|Can|Has|Load|Save|Init|On|Add)/)?.[1] || '';
}

function inferMethodSubject(methodName) {
  return methodName
    .replace(/^(Initialize|Execute|Refresh|Create|Remove|Update|Reset|Apply|Handle|Get|Set|Try|Can|Has|Load|Save|Init|On|Add)/, '')
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase() || methodName.toLowerCase();
}

export function methodPurpose(methodName, lang) {
  const verb = inferMethodVerb(methodName);
  const subject = inferMethodSubject(methodName);

  const zhTemplates = {
    Get: `获取 \`${subject}\` 的当前值。`,
    Set: `设置 \`${subject}\` 的值或状态。`,
    Try: `尝试获取 \`${subject}\`，通常以 out 参数返回结果。`,
    Can: `判断当前对象是否可以执行 \`${subject}\`。`,
    Has: `判断当前对象是否包含/拥有 \`${subject}\`。`,
    Create: `创建一个 \`${subject}\` 实例或对象。`,
    Add: `向当前集合/状态中添加 \`${subject}\`。`,
    Remove: `从当前集合/状态中移除 \`${subject}\`。`,
    Update: `更新 \`${subject}\` 的状态或数据。`,
    Refresh: `刷新 \`${subject}\` 的显示或缓存。`,
    Reset: `将 \`${subject}\` 重置为初始状态。`,
    Load: `加载 \`${subject}\` 数据。`,
    Save: `保存 \`${subject}\` 数据。`,
    Execute: `执行 \`${subject}\` 操作或流程。`,
    Apply: `将 \`${subject}\` 应用到当前对象。`,
    Init: `初始化 \`${subject}\` 的状态、资源或绑定。`,
    Initialize: `初始化 \`${subject}\` 的状态、资源或绑定。`,
    On: `当 \`${subject}\` 事件触发时调用此方法。`,
    Handle: `处理 \`${subject}\` 事件或回调。`,
  };

  const enTemplates = {
    Get: `Gets the current value of \`${subject}\`.`,
    Set: `Sets the value or state of \`${subject}\`.`,
    Try: `Attempts to get \`${subject}\`, usually returning the result in an out parameter.`,
    Can: `Checks whether the current object can \`${subject}\`.`,
    Has: `Checks whether the current object has/contains \`${subject}\`.`,
    Create: `Creates a new \`${subject}\` instance or object.`,
    Add: `Adds \`${subject}\` to the current collection or state.`,
    Remove: `Removes \`${subject}\` from the current collection or state.`,
    Update: `Updates the state or data of \`${subject}\`.`,
    Refresh: `Refreshes the display or cache of \`${subject}\`.`,
    Reset: `Resets \`${subject}\` to its initial state.`,
    Load: `Loads \`${subject}\` data.`,
    Save: `Saves \`${subject}\` data.`,
    Execute: `Executes the \`${subject}\` operation or workflow.`,
    Apply: `Applies \`${subject}\` to the current object.`,
    Init: `Initializes the state, resources, or bindings for \`${subject}\`.`,
    Initialize: `Initializes the state, resources, or bindings for \`${subject}\`.`,
    On: `Called when the \`${subject}\` event is raised.`,
    Handle: `Handles the \`${subject}\` event or callback.`,
  };

  if (lang === 'zh') {
    const template = zhTemplates[verb];
    if (template) return `**用途 / Purpose:** ${template}`;
    return `**用途 / Purpose:** 处理 \`${subject}\` 相关逻辑。`;
  } else {
    const template = enTemplates[verb];
    if (template) return `**Purpose:** ${template}`;
    return `**Purpose:** Handles logic related to \`${subject}\`.`;
  }
}

export function kindOf(name) {
  for (const suffix of ['Widget', 'ViewModel', 'View', 'Brush', 'Data', 'Helper', 'Exception', 'Attribute', 'Component', 'Logic', 'Model', 'Manager', 'Controller', 'Handler']) {
    if (name.endsWith(suffix) && name.length > suffix.length) return suffix;
  }
  return null;
}

export function kindOverview(name, kind, lang) {
  const isZh = lang === 'zh';
  const templates = {
    Widget: isZh
      ? `\`${name}\` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。`
      : `\`${name}\` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.`,
    ViewModel: isZh
      ? `\`${name}\` 是一个 Gauntlet ViewModel——C# 逻辑与 UI 之间的数据绑定桥梁。mod 常通过它暴露状态、命令和列表项给界面。`
      : `\`${name}\` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.`,
    View: isZh
      ? `\`${name}\` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。`
      : `\`${name}\` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.`,
    Brush: isZh
      ? `\`${name}\` 是一个视觉样式对象，用来给控件提供颜色、精灵或状态切换逻辑。`
      : `\`${name}\` is a visual-style object that provides colors, sprites, or state transitions for widgets.`,
    Data: isZh
      ? `\`${name}\` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。`
      : `\`${name}\` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.`,
    Helper: isZh
      ? `\`${name}\` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。`
      : `\`${name}\` is a helper class that usually provides static logic which does not depend on instance state.`,
    Exception: isZh
      ? `\`${name}\` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。`
      : `\`${name}\` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.`,
    Attribute: isZh
      ? `\`${name}\` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。`
      : `\`${name}\` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.`,
    Component: isZh
      ? `\`${name}\` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。`
      : `\`${name}\` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.`,
    Logic: isZh
      ? `\`${name}\` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。`
      : `\`${name}\` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.`,
    Model: isZh
      ? `\`${name}\` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。`
      : `\`${name}\` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.`,
    Manager: isZh
      ? `\`${name}\` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。`
      : `\`${name}\` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.`,
    Controller: isZh
      ? `\`${name}\` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。`
      : `\`${name}\` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.`,
    Handler: isZh
      ? `\`${name}\` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。`
      : `\`${name}\` is a handler used to run agreed response logic when a specific event occurs.`,
  };
  return templates[kind] || null;
}

export function mentalModel(name, kind, namespace, lang) {
  if (kind) {
    return lang === 'zh'
      ? `把 \`${name}\` 当作一个 ${kind} 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。`
      : `Treat \`${name}\` as a ${kind}-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.`;
  }
  return lang === 'zh'
    ? `先从命名空间 \`${namespace}\` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。`
    : `Start from namespace \`${namespace}\` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.`;
}

export function kindUsage(name, kind, lang) {
  const snippets = {
    Widget: `var widget = new ${name}(context);`,
    ViewModel: `var vm = new ${name}();\nmovie.SetViewModel(vm);`,
    View: `var view = new ${name}();`,
    Brush: `widget.Brush = new ${name}();`,
    Data: `var value = new ${name}();`,
    Helper: `${name}.Initialize();`,
    Exception: `try { Call${name}(); } catch (${name} exception) { Handle(exception); }`,
    Attribute: `[${name}]\npublic class Example { }`,
    Component: `var component = agent.GetComponent<${name}>();`,
    Logic: `Mission.Current.AddMissionBehavior(new ${name}());`,
    Model: `Game.Current.ReplaceModel<${name}>(new My${name}());`,
    Manager: `var manager = ${name}.Current;`,
    Controller: `var controller = Mission.Current.GetMissionBehavior<${name}>();`,
    Handler: `Mission.Current.AddMissionBehavior(new ${name}());`,
  };
  const snippet = snippets[kind];
  if (!snippet) return null;
  return snippet;
}

export function genericUsage(name, methods, lang) {
  // Singleton-like classes where `Current` is the canonical handle.
  if (name === 'Mission') {
    return `var mission = Mission.Current;\nmission.AddActiveMissionObject(missionObject);`;
  }
  if (name === 'Game') {
    return `var game = Game.Current;\ngame.AddGameObject(gameObject);`;
  }

  const firstMethod = methods?.[0] || null;
  if (!firstMethod) return `var example = new ${name}();`;

  const args = buildArgsFromSignature(firstMethod.sig);
  const isStatic = /\bstatic\b/.test(firstMethod.sig);
  if (isStatic) {
    return `${name}.${firstMethod.name}(${args});`;
  }

  return lang === 'zh'
    ? `var value = new ${name}();\nvalue.${firstMethod.name}(${args});`
    : `var value = new ${name}();\nvalue.${firstMethod.name}(${args});`;
}

export function moduleFromNamespace(namespace) {
  return namespace.startsWith('TaleWorlds.MountAndBlade') ? 'TaleWorlds.MountAndBlade' : namespace.split('.').slice(0, 2).join('.');
}

export function kindLabel(kind, lang) {
  const labels = {
    class: lang === 'zh' ? '类 class' : 'class',
    struct: lang === 'zh' ? '结构体 struct' : 'struct',
    enum: lang === 'zh' ? '枚举 enum' : 'enum',
    interface: lang === 'zh' ? '接口 interface' : 'interface',
  };
  return labels[kind] || 'type';
}

export function renderPropertyTable(props, lang) {
  if (!props?.length) return [];
  const title = lang === 'zh' ? '## 主要属性' : '## Key Properties';
  const lines = [title, '', '| Name | Signature |', '|------|-----------|'];
  for (const property of props) {
    lines.push(`| \`${property.name}\` | \`${property.sig}\` |`);
  }
  lines.push('');
  return lines;
}

export function renderMethodBlocks(methods, lang) {
  if (!methods?.length) return [];
  const title = lang === 'zh' ? '## 主要方法' : '## Key Methods';
  const lines = [title, ''];
  for (const method of methods) {
    lines.push(`### ${method.name}`);
    lines.push(`\`${method.sig}\``);
    lines.push('');
    lines.push(methodPurpose(method.name, lang));
    lines.push('');
  }
  return lines;
}

export function renderEnumTable(enumValues, lang) {
  if (!enumValues?.length) return [];
  const title = lang === 'zh' ? '## 枚举值' : '## Enum Values';
  const lines = [title, '', '| Name |', '|------|'];
  for (const value of enumValues) {
    lines.push(`| \`${value}\` |`);
  }
  lines.push('');
  return lines;
}
