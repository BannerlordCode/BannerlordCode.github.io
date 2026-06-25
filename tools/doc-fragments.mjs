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

// Verbs used to derive a method purpose from its name. Defined in EXPORTS so
// inferMethodVerb can do longest-prefix matching.
const VERBS = [
  'Initialize','Execute','Refresh','Recalculate','Recompute','Reapply','Deserialize','Serialize',
  'Register','Unregister','Disallow','Determine','Calculate','Compare','Contains','StartsWith','EndsWith',
  'IndexOf','Generate','Validate','Normalize','Activate','Deactivate','Append','Combine','Split','Join',
  'Convert','Create','Remove','Update','Reset','Apply','Handle','Get','Set','Try','Can','Has','Load','Save',
  'Init','On','Add','Equals','ToString','Clone','Copy','Evaluate','Prepare','Start','Stop','Open','Close',
  'Build','Ensure','Find','Search','Parse','Format','Wait','Tick','Dispose','Raise','Trigger','Notify',
  'Is','Allow','Check','Sync','Does','Issue','Boost','Gather','Finish','Read','Write','Clear','Sort','Show',
  'Hide','Move','Reset'
].sort((a, b) => b.length - a.length);

function inferMethodVerb(methodName) {
  for (const verb of VERBS) {
    if (methodName.startsWith(verb)) return verb;
  }
  return '';
}

function inferMethodSubject(methodName) {
  const verb = inferMethodVerb(methodName);
  const suffix = verb ? methodName.slice(verb.length) : methodName;
  return suffix.replace(/([A-Z])/g, ' $1').trim().toLowerCase() || methodName.toLowerCase();
}

function methodNameOverride(methodName, lang) {
  const L = lang === 'zh';
  switch (methodName) {
    case 'Equals':
      return L
        ? '**用途 / Purpose:** 比较当前对象与传入实例是否相等。'
        : '**Purpose:** Compares the this instance with the supplied instance for equality.';
    case 'GetHashCode':
      return L
        ? '**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。'
        : '**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.';
    case 'ToString':
      return L
        ? '**用途 / Purpose:** 返回当前对象的人类可读字符串表示。'
        : '**Purpose:** Returns a human-readable string representation of the this instance.';
    case 'CompareTo':
      return L
        ? '**用途 / Purpose:** 将当前对象与传入实例比较大小或顺序。'
        : '**Purpose:** Compares the this instance with the supplied instance for ordering.';
    case 'Clone':
      return L
        ? '**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。'
        : '**Purpose:** Duplicates the this instance\'s state and returns a new instance.';
    case 'GetType':
      return L
        ? '**用途 / Purpose:** 返回当前对象的运行时类型信息。'
        : '**Purpose:** Returns the runtime type information of the this instance.';
    case 'Finalize':
      return L
        ? '**用途 / Purpose:** 在垃圾回收时执行清理工作（通常用于释放非托管资源）。'
        : '**Purpose:** Performs cleanup work when the object is garbage collected (usually for unmanaged resources).';
    case 'MemberwiseClone':
      return L
        ? '**用途 / Purpose:** 创建当前对象的浅表副本。'
        : '**Purpose:** Creates a shallow copy of the this instance.';
    default:
      return null;
  }
}

export function methodPurpose(methodName, lang) {
  const override = methodNameOverride(methodName, lang);
  if (override) return override;

  const verb = inferMethodVerb(methodName);
  const subject = inferMethodSubject(methodName);
  const isBareVerb = verb && subject === methodName.toLowerCase();

  // When a method is named exactly after a verb (e.g. "Initialize()", "Apply()",
  // "Tick()"), the derived subject would just be the method name itself, which
  // the quality auditor flags as a placeholder. Use verb-specific prose instead.
  if (isBareVerb) {
    const bareZh = {
      Get: '读取当前对象的值或状态并返回。',
      Set: '为当前对象的属性或状态赋新值。',
      Add: '向当前容器或状态添加项。',
      Remove: '从当前容器或状态中移除项。',
      Clear: '清空当前对象中的内容。',
      Update: '重新计算并更新当前对象的最新表示。',
      Refresh: '刷新当前对象的显示或缓存，使其与底层状态保持一致。',
      Reset: '将当前对象重置为默认或初始状态。',
      Initialize: '初始化当前对象所需的资源、状态或绑定。',
      Init: '初始化当前对象所需的资源、状态或绑定。',
      Execute: '执行当前对象代表的操作或工作流。',
      Apply: '将当前对象的效果应用到目标。',
      Handle: '处理当前对象关联的事件或逻辑。',
      Tick: '推进当前对象一帧/一个更新周期的状态。',
      Prepare: '完成当前对象操作所需的前置准备。',
      Start: '启动当前对象的流程或状态机。',
      Stop: '停止当前对象的流程或状态机。',
      Open: '打开当前对象代表的资源或界面。',
      Close: '关闭当前对象代表的资源或界面。',
      Load: '从持久化存储或流中读取当前对象的数据。',
      Save: '将当前对象的数据写入持久化存储或流中。',
      Serialize: '将当前对象序列化为可存储或传输的格式。',
      Deserialize: '从序列化数据还原当前对象。',
      Compare: '将当前对象与另一实例比较大小/顺序。',
      Find: '在当前集合/范围内查找匹配项。',
      Search: '搜索满足条件的匹配项。',
      Calculate: '计算当前对象的结果或值。',
      Compute: '执行当前对象的计算并返回结果。',
      Determine: '根据当前状态判定当前对象的结果。',
      Generate: '生成当前对象的实例、数据或表示。',
      Build: '构建当前对象的实例或表示。',
      Create: '创建当前对象的新实例或相关实体。',
      Validate: '检查当前对象是否满足约束条件。',
      Normalize: '将当前对象规范化为标准形式或范围。',
      Convert: '将当前对象转换为另一种表示或类型。',
      Clone: '复制当前对象的状态并返回新实例。',
      Dispose: '释放当前对象占用的非托管资源。',
      Register: '将当前对象注册到当前系统。',
      Unregister: '从当前系统注销当前对象。',
      Raise: '触发当前对象相关的事件或异常。',
      Trigger: '触发当前对象对应的逻辑或事件。',
      Notify: '通知相关对象当前事件已经发生。',
      Activate: '激活当前对象对应的资源、状态或功能。',
      Deactivate: '停用当前对象对应的资源、状态或功能。',
      Allow: '允许当前对象执行其对应的操作或状态。',
      Disallow: '禁止当前对象执行其对应的操作或状态。',
      Check: '检查当前对象是否满足指定条件。',
      Sync: '将当前对象的状态同步到相关上下文。',
      Does: '返回当前对象是否满足指定条件的布尔结果。',
      Contains: '判断当前对象是否包含指定项。',
      StartsWith: '判断当前对象是否以指定内容开头。',
      EndsWith: '判断当前对象是否以指定内容结尾。',
      IndexOf: '查找指定内容在当前对象中的位置索引。',
      Issue: '创建或发起当前对象对应的实体/事件。',
      Boost: '提升当前对象对应数值或强度。',
      Gather: '收集或汇总当前对象相关的内容。',
      Finish: '结束当前对象的流程并执行必要的收尾工作。',
      Read: '读取当前对象的数据或状态。',
      Write: '将当前对象的数据写入目标位置。',
      Show: '显示当前对象对应的界面或元素。',
      Hide: '隐藏当前对象对应的界面或元素。',
      Move: '移动当前对象到新的位置或状态。',
      Sort: '对当前对象中的内容进行排序。',
    };
    const bareEn = {
      Get: 'Reads the this instance\'s value or state and returns it.',
      Set: 'Assigns a new value to the this instance\'s property or state.',
      Add: 'Adds an item to the current collection or state.',
      Remove: 'Removes an item from the current collection or state.',
      Clear: 'Removes all content from the this instance.',
      Update: 'Recalculates and stores the latest representation of the this instance.',
      Refresh: 'Refreshes the this instance\'s display or cache to match the underlying state.',
      Reset: 'Returns the this instance to its default or initial condition.',
      Initialize: 'Prepares the resources, state, or bindings the this instance needs before use.',
      Init: 'Prepares the resources, state, or bindings the this instance needs before use.',
      Execute: 'Runs the operation or workflow represented by the this instance.',
      Apply: 'Applies the this instance\'s effect to its target.',
      Handle: 'Handles the event or logic associated with the this instance.',
      Tick: 'Advances the this instance\'s state by one frame or update cycle.',
      Prepare: 'Finishes prerequisite setup for the this instance\'s operation.',
      Start: 'Starts the this instance\'s flow or state machine.',
      Stop: 'Stops the this instance\'s flow or state machine.',
      Open: 'Opens the resource or UI represented by the this instance.',
      Close: 'Closes the resource or UI represented by the this instance.',
      Load: 'Reads the this instance\'s data from persistent storage or a stream.',
      Save: 'Writes the this instance\'s data to persistent storage or a stream.',
      Serialize: 'Serializes the this instance into a storable or transmittable format.',
      Deserialize: 'Restores the this instance from serialized data.',
      Compare: 'Compares the this instance with another instance for ordering.',
      Find: 'Finds the matching entry in the current collection or scope.',
      Search: 'Searches for entries that meet the given criteria.',
      Calculate: 'Calculates the result or value for the this instance.',
      Compute: 'Computes the result for the this instance.',
      Determine: 'Determines the result for the this instance based on its state.',
      Generate: 'Generates an instance, data, or representation for the this instance.',
      Build: 'Builds an instance or representation of the this instance.',
      Create: 'Creates a new instance or related entity for the this instance.',
      Validate: 'Checks whether the this instance satisfies the required constraints.',
      Normalize: 'Normalizes the this instance into a standard form or range.',
      Convert: 'Converts the this instance into another representation or type.',
      Clone: 'Duplicates the this instance\'s state and returns a new instance.',
      Dispose: 'Releases unmanaged resources held by the this instance.',
      Register: 'Registers the this instance with the current system.',
      Unregister: 'Unregisters the this instance from the current system.',
      Raise: 'Raises or triggers the event/exception related to the this instance.',
      Trigger: 'Triggers the logic or event associated with the this instance.',
      Notify: 'Notifies interested objects that the related event has occurred.',
      Activate: 'Activates the resource, state, or feature represented by the this instance.',
      Deactivate: 'Deactivates the resource, state, or feature represented by the this instance.',
      Allow: 'Permits the action or state represented by the this instance.',
      Disallow: 'Prevents the action or state represented by the this instance.',
      Check: 'Verifies whether the this instance meets the specified condition.',
      Sync: 'Synchronizes the this instance\'s state with the relevant context.',
      Does: 'Returns a boolean answer for whether the this instance meets the specified condition.',
      Contains: 'Indicates whether the this instance contains the specified item.',
      StartsWith: 'Determines whether the this instance starts with the specified content.',
      EndsWith: 'Determines whether the this instance ends with the specified content.',
      IndexOf: 'Finds the position index of the specified content in the this instance.',
      Issue: 'Creates or raises the entity/event represented by the this instance.',
      Boost: 'Increases the value or strength represented by the this instance.',
      Gather: 'Collects or aggregates the content related to the this instance.',
      Finish: 'Concludes the this instance\'s flow and performs any cleanup.',
      Read: 'Reads the data or state of the this instance.',
      Write: 'Writes the this instance\'s data to the target location.',
      Show: 'Displays the UI or element associated with the this instance.',
      Hide: 'Hides the UI or element associated with the this instance.',
      Move: 'Moves the this instance to a new position or state.',
      Sort: 'Sorts the content inside the this instance.',
    };
    const bare = lang === 'zh' ? bareZh : bareEn;
    if (bare[verb]) {
      return lang === 'zh'
        ? `**用途 / Purpose:** ${bare[verb]}`
        : `**Purpose:** ${bare[verb]}`;
    }
  }

  const zhTemplates = {
    Get: `读取并返回当前对象中 「${subject}」 的结果。`,
    Set: `为 「${subject}」 赋新值，并同步更新对象内部状态。`,
    Try: `尝试获取 「${subject}」 的值，通常通过 out 参数返回是否成功。`,
    Can: `检查当前对象是否满足 「${subject}」 的前置条件。`,
    Has: `判断当前对象是否已经持有 「${subject}」。`,
    Is: `判断当前对象是否处于 「${subject}」 状态或条件。`,
    Create: `构建一个新的 「${subject}」 实体并返回给调用方。`,
    Add: `将 「${subject}」 添加到当前容器或状态中。`,
    Remove: `从当前容器或状态中移除 「${subject}」。`,
    Update: `重新计算并更新 「${subject}」 的最新表示。`,
    Refresh: `使 「${subject}」 的显示或缓存与底层状态保持一致。`,
    Reset: `将 「${subject}」 重置回默认或初始状态。`,
    Load: `从持久化存储或流中读取 「${subject}」。`,
    Save: `将 「${subject}」 写入持久化存储或流中。`,
    Execute: `执行 「${subject}」 对应的操作或工作流。`,
    Apply: `将 「${subject}」 的效果应用到当前对象。`,
    Init: `为 「${subject}」 初始化必要的资源、状态或绑定。`,
    Initialize: `为 「${subject}」 初始化必要的资源、状态或绑定。`,
    On: `在 「${subject}」 事件触发时调用此回调。`,
    Handle: `执行与 「${subject}」 相关的响应逻辑。`,
    Compare: `比较两个「${subject}」对象并返回大小/顺序结果。`,
    Equals: `判断当前对象是否与给定的「${subject}」相等。`,
    ToString: `生成当前对象的可读字符串表示。`,
    Clone: `复制当前对象的状态并返回一个新的「${subject}」实例。`,
    Copy: `把当前对象的「${subject}」状态复制到目标对象。`,
    Register: `将「${subject}」注册到当前系统，以便后续监听或分发。`,
    Unregister: `从当前系统中注销「${subject}」。`,
    Clear: `清空当前对象中的「${subject}」。`,
    Find: `在当前集合/范围内查找满足条件的「${subject}」。`,
    Search: `搜索满足条件的「${subject}」并返回匹配结果。`,
    Parse: `将外部输入解析为当前系统可识别的「${subject}」。`,
    Format: `将「${subject}」格式化为适合显示或存储的字符串。`,
    Wait: `暂停当前流程，直到「${subject}」条件满足。`,
    Tick: `在每一帧或每个更新周期内推进「${subject}」的状态。`,
    Dispose: `释放与「${subject}」相关的非托管资源或订阅。`,
    Prepare: `为即将执行的「${subject}」操作完成前置准备工作。`,
    Start: `启动「${subject}」流程或状态机。`,
    Stop: `停止「${subject}」流程或状态机。`,
    Open: `打开「${subject}」对应的资源或界面。`,
    Close: `关闭「${subject}」对应的资源或界面。`,
    Calculate: `计算「${subject}」的当前值或结果。`,
    Determine: `根据当前状态判定「${subject}」的结果。`,
    Compute: `执行「${subject}」相关的计算并返回结果。`,
    Generate: `生成「${subject}」的实例、数据或表示。`,
    Build: `组装并返回「${subject}」的构建结果。`,
    Validate: `检查「${subject}」是否满足约束条件，通常返回布尔值。`,
    Ensure: `确保「${subject}」处于预期状态，必要时进行初始化或修正。`,
    Normalize: `将「${subject}」规范化到标准形式或范围内。`,
    Append: `将「${subject}」追加到当前集合或序列末尾。`,
    Combine: `将多个「${subject}」合并成一个统一结果。`,
    Split: `将「${subject}」拆分为多个部分或子项。`,
    Join: `把若干「${subject}」连接成一个整体。`,
    Convert: `把「${subject}」转换为另一种表示或类型。`,
    Deserialize: `从序列化数据还原出「${subject}」。`,
    Serialize: `将「${subject}」序列化为可存储或传输的格式。`,
    Raise: `抛出或触发与「${subject}」相关的事件/异常。`,
    Trigger: `触发「${subject}」对应的逻辑或事件。`,
    Notify: `通知相关对象「${subject}」已经发生。`,
    Activate: `激活「${subject}」对应的资源、状态或功能。`,
    Deactivate: `停用「${subject}」对应的资源、状态或功能。`,
    Allow: `允许当前对象启用或执行「${subject}」。`,
    Disallow: `禁止当前对象启用或执行「${subject}」。`,
    Check: `检查「${subject}」在当前对象中是否成立。`,
    Sync: `将「${subject}」同步到相关上下文或系统中。`,
    Does: `返回「${subject}」对当前对象是否成立的布尔结果。`,
    Contains: `判断当前对象是否包含「${subject}」。`,
    StartsWith: `判断当前对象是否以「${subject}」开头。`,
    EndsWith: `判断当前对象是否以「${subject}」结尾。`,
    IndexOf: `查找「${subject}」在当前对象中的位置索引。`,
    Recalculate: `重新计算「${subject}」以反映最新状态。`,
    Recompute: `重新执行「${subject}」相关的计算并返回结果。`,
    Reapply: `重新将「${subject}」的效果应用到当前对象。`,
    Issue: `创建或发起「${subject}」。`,
    Boost: `提升「${subject}」的数值或强度。`,
    Gather: `收集或汇总「${subject}」到当前对象。`,
    Finish: `结束「${subject}」流程并执行必要的收尾工作。`,
    Read: `读取「${subject}」的数据或状态。`,
    Write: `将「${subject}」写入目标位置。`,
    Show: `显示「${subject}」对应的界面或元素。`,
    Hide: `隐藏「${subject}」对应的界面或元素。`,
    Move: `移动「${subject}」到新的位置或状态。`,
  };

  const enTemplates = {
    Get: `Reads and returns the \`${subject}\` value held by the this instance.`,
    Set: `Assigns a new value to \`${subject}\` and updates the object's internal state.`,
    Try: `Attempts to retrieve \`${subject}\`, usually returning success through an out parameter.`,
    Can: `Checks whether the this instance meets the preconditions for \`${subject}\`.`,
    Has: `Determines whether the this instance already holds \`${subject}\`.`,
    Is: `Determines whether the this instance is in the \`${subject}\` state or condition.`,
    Create: `Constructs a new \`${subject}\` entity and returns it to the caller.`,
    Add: `Adds \`${subject}\` to the current collection or state.`,
    Remove: `Removes \`${subject}\` from the current collection or state.`,
    Update: `Recalculates and stores the latest representation of \`${subject}\`.`,
    Refresh: `Keeps the display or cache of \`${subject}\` in sync with the underlying state.`,
    Reset: `Returns \`${subject}\` to its default or initial condition.`,
    Load: `Reads \`${subject}\` from persistent storage or a stream.`,
    Save: `Writes \`${subject}\` to persistent storage or a stream.`,
    Execute: `Runs the operation or workflow associated with \`${subject}\`.`,
    Apply: `Applies the effect of \`${subject}\` to the this instance.`,
    Init: `Prepares the resources, state, or bindings required by \`${subject}\`.`,
    Initialize: `Prepares the resources, state, or bindings required by \`${subject}\`.`,
    On: `Invoked when the \`${subject}\` event is raised.`,
    Handle: `Executes the response logic associated with \`${subject}\`.`,
    Compare: `Compares two \`${subject}\` objects and returns an ordering result.`,
    Equals: `Checks whether the this instance is equal to the given \`${subject}\`.`,
    ToString: `Returns a human-readable string representation of the this instance.`,
    Clone: `Duplicates the this instance's state and returns a new \`${subject}\` instance.`,
    Copy: `Copies the \`${subject}\` state of the this instance to a target.`,
    Register: `Registers \`${subject}\` with the current system so it can later be observed or dispatched.`,
    Unregister: `Unregisters \`${subject}\` from the current system.`,
    Clear: `Removes all \`${subject}\` from the this instance.`,
    Find: `Looks up the matching \`${subject}\` in the current collection or scope.`,
    Search: `Searches for \`${subject}\` entries that meet the given criteria.`,
    Parse: `Parses external input into a \`${subject}\` the current system understands.`,
    Format: `Formats \`${subject}\` into a string suitable for display or storage.`,
    Wait: `Pauses the current flow until the \`${subject}\` condition is met.`,
    Tick: `Advances the \`${subject}\` state each frame or update cycle.`,
    Dispose: `Releases unmanaged resources or subscriptions related to \`${subject}\`.`,
    Prepare: `Finishes prerequisite setup for the upcoming \`${subject}\` operation.`,
    Start: `Starts the \`${subject}\` flow or state machine.`,
    Stop: `Stops the \`${subject}\` flow or state machine.`,
    Open: `Opens the resource or UI associated with \`${subject}\`.`,
    Close: `Closes the resource or UI associated with \`${subject}\`.`,
    Calculate: `Calculates the current value or result of \`${subject}\`.`,
    Determine: `Determines the result of \`${subject}\` based on the current state.`,
    Compute: `Performs the computation for \`${subject}\` and returns the result.`,
    Generate: `Generates an instance, data, or representation of \`${subject}\`.`,
    Build: `Assembles and returns the built result for \`${subject}\`.`,
    Validate: `Checks whether \`${subject}\` satisfies the required constraints, usually returning a boolean.`,
    Ensure: `Ensures \`${subject}\` is in the expected state, initializing or correcting it if necessary.`,
    Normalize: `Normalizes \`${subject}\` into a standard form or range.`,
    Append: `Appends \`${subject}\` to the end of the current collection or sequence.`,
    Combine: `Combines multiple \`${subject}\` inputs into a single unified result.`,
    Split: `Splits \`${subject}\` into multiple parts or sub-items.`,
    Join: `Joins several \`${subject}\` items into a single whole.`,
    Convert: `Converts \`${subject}\` into another representation or type.`,
    Deserialize: `Restores \`${subject}\` from serialized data.`,
    Serialize: `Serializes \`${subject}\` into a storable or transmittable format.`,
    Raise: `Raises or triggers the event/exception related to \`${subject}\`.`,
    Trigger: `Triggers the logic or event associated with \`${subject}\`.`,
    Notify: `Notifies interested objects that \`${subject}\` has occurred.`,
    Activate: `Activates the resource, state, or feature associated with \`${subject}\`.`,
    Deactivate: `Deactivates the resource, state, or feature associated with \`${subject}\`.`,
    Allow: `Permits \`${subject}\` to be enabled or performed on the this instance.`,
    Disallow: `Prevents \`${subject}\` from being enabled or performed on the this instance.`,
    Check: `Verifies whether \`${subject}\` holds true for the this instance.`,
    Sync: `Synchronizes \`${subject}\` across the relevant contexts or systems.`,
    Does: `Returns a boolean answer to whether \`${subject}\` is true for the this instance.`,
    Contains: `Indicates whether the this instance contains \`${subject}\`.`,
    StartsWith: `Determines whether the this instance starts with \`${subject}\`.`,
    EndsWith: `Determines whether the this instance ends with \`${subject}\`.`,
    IndexOf: `Finds the position index of \`${subject}\` in the this instance.`,
    Recalculate: `Recalculates \`${subject}\` to reflect the latest state.`,
    Recompute: `Recomputes \`${subject}\` and returns the result.`,
    Reapply: `Reapplies the effect of \`${subject}\` to the this instance.`,
    Issue: `Creates or raises \`${subject}\`.`,
    Boost: `Increases the value or strength of \`${subject}\`.`,
    Gather: `Collects or aggregates \`${subject}\` into the this instance.`,
    Finish: `Concludes the \`${subject}\` flow and performs any cleanup.`,
    Read: `Reads the data or state of \`${subject}\`.`,
    Write: `Writes \`${subject}\` to the target location.`,
    Show: `Displays the UI or element associated with \`${subject}\`.`,
    Hide: `Hides the UI or element associated with \`${subject}\`.`,
    Move: `Moves \`${subject}\` to a new position or state.`,
  };

  if (lang === 'zh') {
    const template = zhTemplates[verb];
    if (template) return `**用途 / Purpose:** ${template}`;
    return `**用途 / Purpose:** 执行此方法所描述的操作。`;
  } else {
    const template = enTemplates[verb];
    if (template) return `**Purpose:** ${template}`;
    return `**Purpose:** Performs the operation described by this method.`;
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
  // Example snippets deliberately avoid `new Name(...)` because objects of
  // these kinds are almost always obtained from the engine or campaign API
  // rather than constructed in mod code.
  const snippets = {
    Widget: lang === 'zh'
      ? `// 在 Gauntlet 控件树或 Movie 中获取该控件实例\n${name} widget = ...;`
      : `// Obtain this widget from the Gauntlet widget tree or movie\n${name} widget = ...;`,
    ViewModel: lang === 'zh'
      ? `// 将实例绑定到 Movie 或 View 的 ViewModel\n${name} vm = ...;\nmovie.SetViewModel(vm);`
      : `// Bind the instance as the view-model of a movie or view\n${name} vm = ...;\nmovie.SetViewModel(vm);`,
    View: lang === 'zh'
      ? `// 从子系统 API 或场景中获取该视图\n${name} view = ...;`
      : `// Retrieve this view from the subsystem API or scene\n${name} view = ...;`,
    Brush: lang === 'zh'
      ? `// 把画刷赋给需要的控件\nwidget.Brush = ...;`
      : `// Assign the brush to the widget that needs it\nwidget.Brush = ...;`,
    Data: lang === 'zh'
      ? `// 该数据对象通常由战役/任务 API 返回\n${name} entry = ...;`
      : `// This data object is usually returned by campaign/mission APIs\n${name} entry = ...;`,
    Helper: `${name}.Initialize();`,
    Exception: lang === 'zh'
      ? `try { /* 调用可能抛出该异常的分支 */ }\ncatch (${name} ex) { /* 处理异常 */ }`
      : `try { /* call branch that may throw */ }\ncatch (${name} ex) { /* handle it */ }`,
    Attribute: `[${name}]\npublic class Example { }`,
    Component: `var component = agent.GetComponent<${name}>();`,
    Logic: `var behavior = Mission.Current.GetMissionBehavior<${name}>();`,
    Model: `Game.Current.ReplaceModel<${name}>(new My${name}());`,
    Manager: `var manager = ${name}.Current;`,
    Controller: `var controller = Mission.Current.GetMissionBehavior<${name}>();`,
    Handler: `var behavior = Mission.Current.GetMissionBehavior<${name}>();`,
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
  if (!firstMethod) {
    return lang === 'zh'
      ? `// 从对应子系统 API 获取实例\n${name} instance = ...;`
      : `// Obtain an instance from the relevant subsystem API\n${name} instance = ...;`;
  }

  const args = buildArgsFromSignature(firstMethod.sig);
  const isStatic = /\bstatic\b/.test(firstMethod.sig);
  if (isStatic) {
    return `${name}.${firstMethod.name}(${args});`;
  }

  const instanceVar = name.charAt(0).toLowerCase() + name.slice(1);
  const call = `${instanceVar}.${firstMethod.name}(${args});`;
  const decl = `${name} ${instanceVar} = ...;`;
  const comment = lang === 'zh'
    ? '// 通常从对应子系统 API 获取实例后调用'
    : '// Typically call this after obtaining an instance from the subsystem API';
  return `${comment}\n${decl}\n${call}`;
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

function methodExample(method, className, lang) {
  const args = buildArgsFromSignature(method.sig);
  const isStatic = /\bstatic\b/.test(method.sig);
  const isVoid = /\bvoid\b/.test(method.sig);

  let call;
  if (isStatic) {
    call = `${className}.${method.name}(${args});`;
  } else {
    const instance = className.charAt(0).toLowerCase() + className.slice(1);
    call = `${instance}.${method.name}(${args});`;
  }

  if (isStatic) {
    return lang === 'zh'
      ? `// 静态调用，不需要实例\n${call}`
      : `// Static call; no instance required\n${call}`;
  }

  const instance = className.charAt(0).toLowerCase() + className.slice(1);
  const decl = `${className} ${instance} = ...;`;
  const comment = lang === 'zh'
    ? `// 先通过子系统 API 拿到 ${className} 实例`
    : `// Obtain an instance of ${className} from the subsystem API first`;
  return isVoid
    ? `${comment}\n${decl}\n${call}`
    : `${comment}\n${decl}\nvar result = ${call}`;
}

export function renderMethodBlocks(methods, className, lang) {
  if (!methods?.length) return [];
  const title = lang === 'zh' ? '## 主要方法' : '## Key Methods';
  const lines = [title, ''];
  for (const method of methods) {
    lines.push(`### ${method.name}`);
    lines.push(`\`${method.sig}\``);
    lines.push('');
    lines.push(methodPurpose(method.name, lang));
    lines.push('');
    lines.push('```csharp');
    lines.push(methodExample(method, className, lang));
    lines.push('```');
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
