---
title: "CampaignBehaviorDataStore"
description: "CampaignBehaviorManager 内部保存每个 Behavior 的 SyncData 桶；mod 不应直接实例化或获取它。"
---
# CampaignBehaviorDataStore

**Namespace:** `TaleWorlds.CampaignSystem`<br>
**Module:** `TaleWorlds.CampaignSystem`<br>
**Type:** `internal class CampaignBehaviorDataStore`<br>
**Base:** 无（嵌套的 `BehaviorSaveData` 实现 [`IDataStore`](../../campaign-ext/IDataStore)）<br>
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviorDataStore.cs`（1.3.15）<br>
**Owner:** [`CampaignBehaviorManager`](../../campaign-ext/CampaignBehaviorManager)

## 一句话职责

`CampaignBehaviorDataStore` 是引擎为所有已注册 `CampaignBehaviorBase` 保存/读档时使用的内部容器：外层按 Behavior 的 `StringId` 分桶，内层按 `SyncData` 的字符串 key 存取值。它不是 mod 的公共服务或运行时数据库。

## 先明确 public/internal 边界

顶层 `CampaignBehaviorDataStore` 和嵌套 `BehaviorSaveData` 都是 `internal`。mod 代码不能可靠地 `new CampaignBehaviorDataStore()`、从 `Campaign.Current` 取它，或把它作为注册/通信服务注入。mod 唯一正常的入口是继承 [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase)，在 `SyncData(IDataStore dataStore)` 中使用引擎传入的 [`IDataStore`](../../campaign-ext/IDataStore)。

可见的 `IsSaving`、`IsLoading` 和 `SyncData<T>` 是嵌套 `BehaviorSaveData` 为实现 `IDataStore` 提供的契约，不是顶层 `CampaignBehaviorDataStore` 的 mod-facing public API。

## 心智模型：两层字典，一次性托盘

一次保存/读档可以抽象成：

```text
CampaignBehaviorManager
  -> CampaignBehaviorDataStore._behaviorDict[behavior.StringId]
       -> BehaviorSaveData._records[key]
            -> value passed by ref to Behavior.SyncData
```

- **外层 `StringId`：** 每个 Behavior 一个 `BehaviorSaveData` 桶。保存时由 `SaveBehaviorData` 创建 saving 桶；读档时按当前 Behavior 的 `StringId` 找桶。
- **内层 key：** 由 Behavior 自己在 `SyncData` 中提供。保存阶段用 `_records.Add(key, data)`；同一 Behavior 在同一次回调重复 key 会抛字典异常。
- **临时性：** `BehaviorSaveData` 只在某个 Behavior 的保存或加载回调中作为 `IDataStore` 使用。不要缓存 `IDataStore` 引用；每日 tick 应读取 Behavior 自己的字段。

## 内部结构与成员契约

### `CampaignBehaviorDataStore`

| 成员 | 契约/可见性 | 语义 |
| --- | --- | --- |
| `_behaviorDict` | `[SaveableField(1)] private readonly Dictionary<string, BehaviorSaveData>` | 外层 Behavior ID 到数据桶的映射 |
| `CampaignBehaviorDataStore()` | `internal` | 创建空的行为数据字典 |
| `SaveBehaviorData(CampaignBehaviorBase)` | `internal void` | 创建 saving 桶、调用 Behavior 的 `SyncData`、按 `StringId` 放入外层字典 |
| `LoadBehaviorData(CampaignBehaviorBase)` | `internal void` | 找到 loading 桶并调用 Behavior 的 `SyncData`；必要时尝试旧 ID 迁移 |
| `ClearBehaviorData()` | `internal void` | 清空临时外层字典 |

### `BehaviorSaveData : IDataStore`

| 成员 | 契约 | 语义 |
| --- | --- | --- |
| `_records` | `[SaveableField(0)] private Dictionary<string, object>` | 一个 Behavior 的 key/value 记录 |
| `IsSaving` | `public bool { get; }` | 构造时的 saving 标志 |
| `IsLoading` | `public bool { get; }` | `!IsSaving`；与 `IsSaving` 互斥 |
| `SyncData<T>(string key, ref T data)` | `public bool` | 保存时写入；加载时命中则通过 `ref` 回填并返回 `true` |

加载时 key 不存在会返回 `false`，不会改变传入字段。不要把 `true` 理解成“整个 Behavior 已成功加载”；它只表示当前 key 命中。

## Save lifecycle：谁创建、谁调用、何时清空

1. `CampaignBehaviorManager` 创建 `CampaignBehaviorDataStore`，并订阅 `CampaignEvents.OnBeforeSaveEvent`。它自身的 `_campaignBehaviorDataStore` 通过 `[SaveableField(1)]` 进入 `CampaignBehaviorManager` 的保存图。
2. 注册 Behavior 时，`AddBehavior` 将 Behavior 加入列表并立即调用其 `RegisterEvents()`；这只负责事件订阅，不会替代稳定的 `StringId` 或保存调用。
3. **保存前：** `OnBeforeSave` 先清空旧桶，再为每个已注册 Behavior 调用 `SaveBehaviorData`。每个 Behavior 得到新的 `BehaviorSaveData(true)`，随后执行一次 `SyncData`，把当前字段写入 `_records`。
4. **读档时：** `LoadBehaviorData` 为每个 Behavior 查找当前 `StringId` 对应的桶；命中后用 `BehaviorSaveData(false)` 调用 `SyncData`。所有 Behavior 处理完后清空临时外层字典。
5. **ID 迁移：** 若当前 `StringId` 没有精确命中，源码会复制外层字典，寻找包含当前 Behavior 类型名的旧 key；找到后移除旧桶、用当前 `StringId` 重新加入，再调用 `SyncData`。这不是通用版本迁移系统，不能依赖模糊匹配解决两个 Behavior 的相似命名。

`CampaignBehaviorManager.RegisterEvents()` 在战役启动阶段遍历 Behavior 调用订阅；行为事件执行和保存/加载回调是两条不同的生命周期。`DailyTickEvent` 改变的是 Behavior 字段，`OnBeforeSave` 才把字段写入行为数据桶。

## 依赖关系

| 方向 | 类型/系统 | 关系 |
|---|---|---|
| 持有者 | [`CampaignBehaviorManager`](../../campaign-ext/CampaignBehaviorManager) | 创建数据存储，调用保存/加载并清理临时桶 |
| mod 边界 | [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase) | 提供 `SyncData(IDataStore)`，持有需要持久化的字段 |
| 回调契约 | [`IDataStore`](../../campaign-ext/IDataStore) | 每次保存/加载时传入的临时接口 |
| 注册入口 | [`CampaignGameStarter`](../../campaign-ext/CampaignGameStarter) | 在管理器登记 Behavior 之前加入行为 |
| 存档图 | [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner) | 定义引擎内部存储成员，不替代 Behavior 的 `SyncData` |

## `SyncData` 与 `[SaveableField]` 不是一回事

| 机制 | 所属边界 | 用途 | 是否会注册 Behavior |
| --- | --- | --- | --- |
| `CampaignBehaviorBase.SyncData(IDataStore)` | Behavior 生命周期 | 保存/恢复 Behavior 的私有字段 | 否；Behavior 仍需通过 `CampaignGameStarter.AddBehavior(...)` 注册 |
| `[SaveableField]` / `[SaveableProperty]` | SaveSystem 对象图 | 为可保存类型定义成员和字段 ID | 否；标记不会创建 Behavior 或 DataStore |
| `CampaignBehaviorDataStore` 内部的 `[SaveableField(1)]`、`BehaviorSaveData._records` 的 `[SaveableField(0)]` | 引擎实现 | 让行为桶和 key/value 进入引擎保存图 | 由 `CampaignBehaviorManager` 持有，不供 mod 直接使用 |

因此，Behavior 的字段仅因为通过 `SyncData` 同步，并不需要再标 `[SaveableField]`。同一状态也不要同时通过两个通道持久化：这会产生重复来源、类型定义和加载顺序风险。普通可保存对象的成员定义应参考 [`SaveableFieldAttribute`](../../save-system/SaveableFieldAttribute)、[`SaveablePropertyAttribute`](../../save-system/SaveablePropertyAttribute) 和 [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner)。

## 何时使用 / 何时不要使用

**使用 `SyncData`：**

- 在 Behavior 的 `SyncData` 中登记计数器、集合、可保存对象引用和版本化状态。
- 在 `IsLoading` 时为缺失 key 初始化默认值或重建派生缓存。
- 用稳定、唯一、带 mod 前缀的 key 区分本 Behavior 的字段。

**不要把 `CampaignBehaviorDataStore` 用作：**

- mod 可获取的全局状态服务；不要 `new` 它、反射取它或缓存嵌套 `BehaviorSaveData`。
- Behavior 注册器；注册必须走 `CampaignGameStarter.AddBehavior`，并保持 Behavior 的 `StringId` 稳定。
- 每日 tick 的共享事件总线；`IDataStore` 在回调结束后即不应继续使用。
- `[SaveableField]` 的替代品；普通 SaveSystem 对象成员要走 SaveSystem 定义路线。

## 真实 mod 侧示例

下面展示实际可用的 mod 入口。行为通过 starter 注册，不直接接触内部 `CampaignBehaviorDataStore`。

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

public sealed class RelicTrackerBehavior : CampaignBehaviorBase
{
    private int _discoveredCount;
    private List<string> _discoveredRelicIds = new List<string>();

    public RelicTrackerBehavior(string stringId)
        : base(stringId)
    {
    }

    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        bool found = dataStore.SyncData(
            "_myMod_discoveredCount_v1",
            ref _discoveredCount);

        dataStore.SyncData(
            "_myMod_discoveredRelicIds_v1",
            ref _discoveredRelicIds);

        if (dataStore.IsLoading && !found)
        {
            _discoveredCount = 0;
        }

        if (_discoveredRelicIds == null)
        {
            _discoveredRelicIds = new List<string>();
        }
    }

    private void OnDailyTick()
    {
        // 只在这里读取/修改 Behavior 自己的字段。
    }
}

// 在 OnGameStart 收到 CampaignGameStarter 后注册：
// campaignStarter.AddBehavior(new RelicTrackerBehavior("MyMod.RelicTracker.v1"));
```

示例中显式传入稳定 `StringId`，避免类名变更破坏外层桶；key 也带 mod 前缀和版本。若从旧版本改动值类型，新增 `_v2` key 并设计兼容读取，不要让同一个 key 在旧档中从 `int` 静默变成集合。

## 风险与坏档边界

- **重复字段 key：** 保存路径使用 `Dictionary.Add`；同一 Behavior 的两个 `SyncData` 调用使用同一个 key 会抛异常并中止保存。
- **重复 Behavior ID：** 外层检测到相同 `StringId` 会触发 `Debug.FailedAssert`，随后以后写入的桶覆盖先前桶。两个 Behavior 必须使用不同且稳定的 ID。
- **模糊迁移误命中：** 精确 `StringId` 优先；旧 ID 迁移使用“包含类型名”的匹配，命名过于相似会带来错误桶选择风险。
- **缺失 key：** 返回 `false` 是正常的旧档/新字段情况。字段会保留当前默认值，代码必须决定默认值和派生缓存重建方式。
- **不可保存值：** UI 对象、临时引擎句柄或未被 SaveSystem 支持的第三方对象可能在收集/反序列化时失败。只同步可进入 Bannerlord 保存对象图的值。
- **错误使用阶段标志：** `IsSaving`/`IsLoading` 只说明当前 `SyncData` 回调阶段，不应被用来暂停每日扣费、事件或 gameplay 逻辑。
- **引用生命周期：** `IDataStore` 是临时回调参数；保存或加载结束后继续调用它，可能读写已经清空的临时桶。

## 版本对照

1.4.5 对照源码为 `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignBehaviorDataStore.cs`。其 `CampaignBehaviorDataStore` 仍是 `internal`，外层 `[SaveableField(1)]`、嵌套 `_records` 的 `[SaveableField(0)]`、`IsSaving`/`IsLoading` 和 `SyncData<T>` 的保存/加载语义保持一致。跨版本真正需要维护的是 Behavior `StringId`、key、值类型和缺失字段默认值，而不是直接依赖内部类名或私有字段。

## 导航

- ↑ 父级：[campaign API](./)
- ↔ 同级：[BehaviorSaveData](../BehaviorSaveData) · [Campaign](../Campaign)
- 上游宿主：[CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) · [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase) · [IDataStore](../../campaign-ext/IDataStore)
- 另一条保存路线：[SaveManager](../../save-system/SaveManager) · [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner)
- 返回对象索引：[CampaignObjectManager](../../campaign-ext/CampaignObjectManager)
