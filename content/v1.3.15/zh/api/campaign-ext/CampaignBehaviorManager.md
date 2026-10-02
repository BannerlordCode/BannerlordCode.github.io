---
title: "CampaignBehaviorManager"
description: "Campaign.Current.CampaignBehaviorManager 背后的 CampaignBehaviorBase 注册表：运行时增删行为、按类型查询，并托管 Behavior 的存档数据。"
---
# CampaignBehaviorManager

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBehaviorManager : ICampaignBehaviorManager`
**Base:** `ICampaignBehaviorManager`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBehaviorManager.cs`

## 概述

`CampaignBehaviorManager` 是运行中的战役里真正持有每一个 [CampaignBehaviorBase](../CampaignBehaviorBase/) 实例的那个长生命周期对象。战役引导阶段，引擎用 [CampaignGameStarter](../CampaignGameStarter/) 收集到的列表构造它，然后一次性遍历列表调用每个 Behavior 的 `RegisterEvents()`——正是这一趟调用把所有人的 `CampaignEvents` 订阅接进了战役。此后 `Campaign.Current.CampaignBehaviorManager` 就是运行时句柄：可以在战役进行中新增行为、按类型移除行为、按类型查询行为，并且它持有承载 Behavior 状态的存档托盘，交由 [SaveManager](../../save-system/SaveManager/) 落盘。

这个类刻意做得很小——一共十三个成员，真正对外有用的只有 `RegisterEvents`、`AddBehavior`、`RemoveBehavior<T>`、`ClearBehaviors`、`GetBehavior<T>`、`GetBehaviors<T>`、`LoadBehaviorData` 和 `InitializeCampaignBehaviors`。它同时持有一个带 `[SaveableField]` 的 `CampaignBehaviorDataStore`，因此管理器本身也参与战役存档的序列化；并且在构造函数里订阅 `CampaignEvents.OnBeforeSaveEvent`，用来在每次存档前把托盘重新填满。

## 心智模型

把它理解成 **`Campaign.Current.CampaignBehaviorManager` 背后的注册表兼存档窗口**：

- **构造顺序是固定的。** `Campaign` 先建管理器，再单独调用一次 `RegisterEvents()`，对每个 Behavior 各一次。你想让它活着的东西，必须在这一趟之前就已经在列表里。
- **引导期注册走 starter。** 在 `InitializeGameStarter` / `OnCampaignStart` / `OnGameLoaded` 里用 `CampaignGameStarter.AddBehavior`。在**战役已经跑起来之后**则用 `Campaign.Current.CampaignBehaviorManager.AddBehavior`——那个重载会立刻对新行为调用 `RegisterEvents()`，所以同一帧就生效。
- **存档流程是事件驱动的，不是你调用的。** 管理器在构造函数里订阅 `CampaignEvents.OnBeforeSaveEvent`。保存时它清空托盘并重新遍历每个 Behavior 调用 `SaveBehaviorData`；加载时 `LoadBehaviorData()` 遍历每个 Behavior 调用 `LoadBehaviorData`，然后再次清空托盘。你自己永远不要碰那个 store。
- **坑：`RemoveBehavior<T>()` 最多删一个，而且返回 void。** 它从后往前找，删掉第一个匹配的实例就 `return`。如果你注册了两个 `T` 类型的 Behavior，删一次还剩一个存活。它只对该实例调用 `CampaignEventDispatcher.Instance.RemoveListeners(t)`。
- **坑：`ClearBehaviors()` 不退订任何东西。** 它只是把列表清空，于是 Behavior 不再被 tick、不再被存档，但它们挂在 dispatcher 上的 `CampaignEvents` 订阅依然有效。真正想删东西就用 `RemoveBehavior<T>()`。
- **坑：`GetBehavior<T>()` 返回 `default(T)`。** 引用类型就是 `null`；如果 `T` 是值类型则是零初始化结构体——这也是为什么查不到时它不会抛异常。

### 何时使用

**使用 `CampaignBehaviorManager` 的场景：**
- 你必须在战役已经运行时挂载或卸载一个 Behavior（可开关的任务系统、调试覆盖层、按 DLC 门控的系统）。
- 你要从别的系统拿到一个已存在的 Behavior，又不想硬引用自己创建的实例：调用 `GetBehavior<T>()`。
- 你需要拿到某一类的全部 Behavior：`GetBehaviors<T>()`，用于打补丁、批量巡检，或者在菜单界面里遍历。

**不要用 `CampaignBehaviorManager` 的场景：**
- 引导期注册。请用 `CampaignGameStarter.AddBehavior`——管理器在被构造的过程中不适合被戳。
- 你想持久化的是自己的对象。请用 `[SaveableField]` / `[SaveableProperty]` 配合 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/)，而不是 Behavior 数据托盘。
- 你指望 `RemoveBehavior` 顺手退掉你自己手工注册的 `CampaignEvents`。这里只清理被移除 Behavior 自己在 dispatcher 上的监听；你手写的 `CampaignEvents.XxxEvent.AddNonSerializedListener(...)` 不会被追踪。

## 依赖关系

- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 载荷类型；`RegisterEvents`、`SyncData` 以及内部的存档钩子都在那边。
- [CampaignGameStarter](../CampaignGameStarter/) — 引导期收集行为，管理器就是拿它的列表建出来的。
- [CampaignEvents](../CampaignEvents/) — `OnBeforeSaveEvent` 触发存档窗口重填，每个 Behavior 也都通过同一个 dispatcher 订阅。
- [CampaignEventDispatcher](../CampaignEventDispatcher/) — `RemoveBehavior<T>()` 内部调用它的 `RemoveListeners(t)` 来剥掉被删行为的监听。
- [IDataStore](../IDataStore/) — 每个 Behavior 在 `SyncData` 里收到的契约；其背后的 store 正是管理器负责序列化的东西。
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.CampaignBehaviorManager` 是指向本对象的唯一公开句柄。
- [SaveManager](../../save-system/SaveManager/) — 在战役对象图恢复完成后驱动加载那一半（`LoadBehaviorData`）。
- [MBSubModuleBase](../../core/MBSubModuleBase/) — 声明了大多数 Behavior 最初注册所用的 starter 钩子。

## 主要成员

#### `public CampaignBehaviorManager(IEnumerable<CampaignBehaviorBase> inputComponents)`

构造函数。把传入的可枚举物化成私有 `List<CampaignBehaviorBase>`，创建 `CampaignBehaviorDataStore`，并向 `CampaignEvents.OnBeforeSaveEvent` 注册 `OnBeforeSave`。
- **注意：** 构造函数**不会**调用 `RegisterEvents()`。引擎是在构造之后另起一趟单独调用的；如果你在测试里自己 new 一个，必须自己调用 `RegisterEvents()`，否则谁都没订阅上。
- **注意：** 这个 `OnBeforeSaveEvent` 订阅走的是 `AddNonSerializedListener`，读档时**不会**被恢复——管理器只在全新战役启动时被构造，从不是反序列化进一个已运行的战役里。

#### `public void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase> inputComponents)`

整体替换行为列表。相当于 `SetBehaviors` 加上**第二次** `OnBeforeSaveEvent` 注册。
- **副作用：** 和构造函数不同，它不会新建 `CampaignBehaviorDataStore`，所以已经收集的数据会保留。
- **坑：** 调用它会在构造函数那次之上再注册一个 `OnBeforeSave` 监听。于是每次存档都要把列表走两遍。

#### `public void RegisterEvents()`

引导钩子。按插入顺序遍历行为列表，对每个调用 `RegisterEvents()`。
- **调用顺序对互相依赖的 Behavior 有意义**：如果某个 Behavior 的 `RegisterEvents` 里读 `Campaign.Current.CampaignBehaviorManager.GetBehavior<TOther>()`，那就只有 `TOther` 被更早加进 starter 时才拿得到。
- **返回值：** 无。Behavior 内部抛出的异常会向上传播并中断整趟遍历，导致后面的 Behavior 全部没订阅上。

#### `public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

运行时注册。追加到列表，并**立即**对新 Behavior 调用 `RegisterEvents()`。
- **用途：** 在引导那一趟已经结束之后，向运行中的战役追加 Behavior。
- **返回值：** 无。这里没有任何校验——`null` 会被直接追加，然后下一行 `campaignBehavior.RegisterEvents()` 抛出空引用。
- **副作用：** 新 Behavior 之后会被 `OnBeforeSave` 遍历存档，也会被 `LoadBehaviorData` 读取，所以它的 `SyncData` 键结构必须能对上旧存档（见风险章节）。

#### `public void RemoveBehavior<T>() where T : CampaignBehaviorBase`

**从后往前**扫描列表，移除第一个 `is T` 的实例，对它调用 `CampaignEventDispatcher.Instance.RemoveListeners(t)`，然后返回。
- **返回值：** `void`。你无法从返回值判断到底删没删掉——需要确认就先调 `GetBehavior<T>()`。
- **坑：** 最多删一个。同一个 Behavior 类注册两次、只调一次 `RemoveBehavior<T>()`，第二个副本依然存活并且依然订阅着。
- **副作用：** 被删 Behavior 的 `SyncData` 数据**不会**立刻从 store 里清掉；下一次 `OnBeforeSave` 按存活列表重建 store 时，孤儿键自然消失。

#### `public void ClearBehaviors()`

直接清空私有列表。不做 dispatcher 清理，也不做 store 清理。
- **用途：** 只用于测试拆除和战役拆卸路径。
- **坑：** 存活下来的 Behavior 保留着 `CampaignEvents` 订阅并继续触发。任何捕获了你刚丢弃状态的闭包照样会跑。

#### `public T GetBehavior<T>()`

正序线性扫描列表，返回第一个 `is T` 的实例，否则返回 `default(T)`。
- **返回值语义：** 实践中绝大多数 Behavior 是引用类型，所以查不到就是 `null`。务必先判空，否则加载顺序靠后的 mod 会在调用点吃到 `NullReferenceException`，而不是优雅地什么都不做。
- **开销：** 对整个行为列表 O(n)。偶尔查几次无所谓，但不要放进几千个单位的逐个循环里。

#### `public IEnumerable<T> GetBehaviors<T>()`

对列表做 `Enumerable.OfType<T>`，是惰性投影——如果你很晚才枚举，它会反映之后的列表改动。
- **返回值语义：** 查不到时返回空序列，绝不是 `null`。需要索引或排序就先 `.ToList()`。

#### `public void LoadBehaviorData()`

遍历每个 Behavior 调用内部的 `LoadBehaviorData(behavior)`（它会再次以加载模式进入该 Behavior 的 `SyncData`），然后清空 store。
- **调用顺序：** 由存档系统在对象图恢复之后驱动，不由你调用。
- **坑：** 因为末尾有 `ClearBehaviorData()`，在同一次读档里第二次调用 `LoadBehaviorData()`（比如某个 mod 也挂了加载钩子）会遇到一个**空** store，所有键都 miss——字段会静默退回构造时的默认值。

#### `private void OnBeforeSave()`

注册在 `CampaignEvents.OnBeforeSaveEvent` 上。清空 store，然后对每个 Behavior 调用 `SaveBehaviorData`。
- **说明：** 它遍历的是列表里的**全部** Behavior。上一帧刚被 `RemoveBehavior` 删掉的那些已经不在列表里，会被自然跳过；而上一次存档之后才加进来的 Behavior 也会被走到，这正是你想要的行为。

## 使用示例

### 示例 1 — 在运行时开启与关闭一个 Behavior

```csharp
public class ToggleableOverlayManager
{
    private CampaignBehaviorManager Manager => Campaign.Current.CampaignBehaviorManager;

    public void Enable()
    {
        // GetBehavior<T>() 在还没有注册过时返回 null。
        if (Manager.GetBehavior<DebugOverlayBehavior>() == null)
        {
            // AddBehavior 会立刻订阅，不需要自己再调 RegisterEvents。
            Manager.AddBehavior(new DebugOverlayBehavior());
        }
    }

    public void Disable()
    {
        // 移除一个实例，并剥掉它在 dispatcher 上的监听。
        Manager.RemoveBehavior<DebugOverlayBehavior>();
    }
}
```

### 示例 2 — 解析别的 mod 注册的 Behavior

```csharp
public class MyQuestSystem : CampaignBehaviorBase
{
    private ReputationTracker _tracker;

    public override void RegisterEvents()
    {
        // 别的 mod 的 Behavior 可能还没注册，务必判空。
        _tracker = Campaign.Current.CampaignBehaviorManager.GetBehavior<ReputationTracker>();
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("_renownSpent", ref _renownSpent);
    }
}
```

### 示例 3 — 不持有引用地巡检某一类 Behavior

```csharp
public List<string> DescribeMyBehaviors()
{
    var manager = Campaign.Current.CampaignBehaviorManager;
    // GetBehaviors<T>() 是惰性的且永不返回 null；ToList() 取一个快照。
    return manager.GetBehaviors<MyFeatureBehavior>()
                  .Select(b => b.FeatureName)
                  .ToList();
}
```

## 风险与崩溃边界

- **存档序列化由管理器托管。** 管理器序列化一个带 `[SaveableField(1)]` 的 `CampaignBehaviorDataStore`。每个 Behavior 按其 `StringId`（即 Behavior 的类型名）分到一个独立托盘。如果你注册的两个 Behavior 的 `StringId` 相同，它们会共用一个托盘并互相覆盖 key。最容易踩到的现实方式是：在**不同程序集里放了相同命名空间和类型名的 Behavior 子类**。
- **战役中途新增 Behavior 会改变存档结构。** 存档写完之后才加进来的 Behavior 在那份存档里没有托盘。读档时 `LoadBehaviorData` 找不到数据，`SyncData` 每个键都 miss，你的字段会停在构造时的默认值。若"键缺失"不可接受，请在 `if (dataStore.IsLoading)` 分支里补初始化。
- **`LoadBehaviorData` 只能跑一趟。** 它结尾会清空 store。一次读档里调两次，结果不是"再恢复一次"，而是把所有 Behavior 静默重置。
- **跨域依赖：** 这个类型虽然位于 `TaleWorlds.CampaignSystem`，但实际伸进了 `TaleWorlds.SaveSystem`（`SaveableField`）和 `TaleWorlds.Core`（`CampaignEvents`）。如果某个 mod 自带的是旧版 `TaleWorlds.CampaignSystem`，报错会出现在**存档那一步**而不是加载时，看起来像是毫不相干的故障。
- **加载顺序依赖：** 某个 Behavior 的 `RegisterEvents` 里调 `GetBehavior<T>()` 依赖 starter 的插入顺序。Behavior 按 starter 收集到的顺序注册，而**跨模块的 starter 顺序 API 并不保证**。稳妥做法是延迟解析（第一次使用时再取），而不是在构造路径里把 `null` 缓存下来。
- **ID 稳定性：** 这里除了 Behavior 的 `StringId`（由类型推导）之外没有任何你自己可控的存档键。把 Behavior 类改名或挪到另一个命名空间会改变它的托盘键，从而孤立掉此前存档的数据。在你自己的 `SyncData` 里加版本化 key 前缀是官方支持的缓解手段。
- **`AddBehavior` 的 null 隐患：** 它不过滤 `null`。`null` 会被追加，下一行就抛异常。starter 的 `AddBehavior` 会忽略 `null`，而这个不会。
- **`InitializeCampaignBehaviors` 会造成双重订阅：** 它会额外注册一个 `OnBeforeSave` 监听，于是每次存档把行为列表走两遍；`SyncData` 不幂等的 Behavior 就会把值写两遍。

## 跨版本提示

- **v1.3.x（本页）：** 上述成员集合是完整的。`GetBehavior<T>` 返回 `default(T)`，而不是显式的 `null`。
- **v1.4.x：** 类型本身未变；`GetBehavior<T>()` 在未命中时返回显式的 `null`。对调用方而言行为完全一致——差别只在你写了 `var result = default(T);` 再做比较时才会显现。
- **v1.5.x：** `ICampaignBehaviorManager` 又增加了更多成员，但 `CampaignBehaviorManager` 仍是 `Campaign.Current.CampaignBehaviorManager` 所使用的具体实现。新代码请通过 `IGameStarter` 注册，不要直接操作这个具体类型。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](./)
- ↔ 同级：[CampaignBehaviorBase](../CampaignBehaviorBase/) — 本注册表保存的 Behavior 类型
- ↔ 同级：[CampaignGameStarter](../CampaignGameStarter/) — 引导期注册发生的地方
- ↔ 同级：[CampaignEvents](../CampaignEvents/) — 每个 Behavior 订阅的 dispatcher
- ↔ 同级：[IDataStore](../IDataStore/) — 传入各 Behavior 的持久化契约
- ↔ 同级：[CampaignEventDispatcher](../CampaignEventDispatcher/) — `RemoveListeners` 的执行位置
- ↑ 战役世界：[Campaign](../../campaign/Campaign/)
- ↑ 存档层：[SaveManager](../../save-system/SaveManager/)