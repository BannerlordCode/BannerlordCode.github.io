---
title: "IDataStore"
description: "战役存档的“按 Behavior 分桶”键值容器：仅在 CampaignBehaviorBase.SyncData 调用期间出现，负责把单个 Behavior 的字段写入存档或从存档还原。"
---
# IDataStore

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public interface IDataStore`  
**Base:** 无（接口，无基类）  
**File:** `TaleWorlds.CampaignSystem/IDataStore.cs`

## 概述

`IDataStore` 是 Bannerlord 战役**存档/读档**机制里的一个极简契约：一个“按 key 存取一段数据”的容器。它只在**一次存档或读档流程中、针对某一个 Behavior** 时短暂存在，由引擎创建并交给你的 `CampaignBehaviorBase.SyncData(IDataStore dataStore)` 方法。你往里 `SyncData` 什么，存档就记下什么；读档时引擎再原样喂回来。

它**不是**一个跨战役的全局数据库，也**不是**运行时读写共享数据的通道。它的唯一职责是：让你把“属于这个 Behavior 的、需要跨存档存活的状态”存进档、读出来。

> 一句话职责：把单个 Behavior 的私有字段，在存档/读档时与游戏存档做一次 key 化的双向同步。

## 心智模型

把 `IDataStore` 想成**“一次存档/读档里、发给你的那一只临时托盘”**：

- 它的生命周期极短。引擎在存盘前触发 `OnBeforeSaveEvent`，给每个 Behavior 新建一个 `BehaviorSaveData`（内部实现了 `IDataStore`，`IsSaving = true`），调用你的 `SyncData`，把你 `SyncData(key, ref value)` 写入的字段收集进这只托盘；托盘随后被收进 `CampaignBehaviorManager` 持有的 `CampaignBehaviorDataStore`（`[SaveableField(1)]`）并随整个 `Campaign` 一起落盘。读档时流程相反：引擎为你的 Behavior 准备一只 `IsLoading = true` 的托盘，调用 `SyncData`，把你之前存的值按 key 填回 `ref` 变量，托盘随即被丢弃。
- 它是**按 Behavior 分桶**的。底层用 `Dictionary<string, BehaviorSaveData>`，以 `CampaignBehaviorBase.StringId` 作键。所以两只不同的 Behavior 用同一个 key（比如都叫 `"_counter"`）互不干扰；但**同一个 Behavior 内**的 key 会互相覆盖。
- 你拿到的 `IDataStore` 实例是**临时的、只在这次调用里有效**。它背后是 `internal` 的 `CampaignBehaviorDataStore.BehaviorSaveData`，mod 既不能 `new`，也不能从 `Campaign` 上“取”一个长期持有——`Campaign` 根本没有 `GetDataStore` / `DataStore` 这样的公开成员（只有 `CampaignTickCacheDataStore _tickData`，那是另一回事）。

## 何时用 / 何时不要用

**用它（正确场景）：**
- 在你的 `CampaignBehaviorBase` 子类里重写 `SyncData(IDataStore dataStore)`，把需要跨存档保留的私有字段逐个 `SyncData("key", ref field)` 登记进去。这是持久化你的 mod 状态的**标准、唯一**入口。
- 用 `IsSaving` / `IsLoading` 判断当前是存盘还是读档，从而决定是否需要做“读档后重建引用/重算缓存”之类的收尾工作。

**不要这样用：**
- **不要**自己实现 `IDataStore` 或 `new` 一个来当 mod 的全局数据容器。引擎只认它自己内部构造的 `BehaviorSaveData`；你实现的实例永远不会被调用。
- **不要**把 `SyncData` 调用得到的 `dataStore` 引用存到字段里留待以后用。它只在 `SyncData` 这一次调用期间有效，调用结束后托盘被丢弃或清空，之后再碰它毫无意义（甚至拿到的是别的 Behavior 的托盘）。
- **不要**用它在运行时“共享数据”。想让多个 Behavior 之间、或 Behavior 与 UI 之间共享状态，用 `Campaign.Current`、各 `Manager`、或你自己的静态/实例字段；`IDataStore` 只在存读档那一刻工作。
- **正确替代方案**：mod 的持久化状态 → 作为 `CampaignBehaviorBase` 子类的字段（或 `[SaveableField]` 字段），在 `SyncData` 里登记；mod 的运行时共享状态 → 放在 Behavior 实例字段、`Campaign.Current.GetCampaignBehavior<T>()` 取到的 Behavior、或 `Campaign` 提供的 Managers 上。

## 依赖图

- ↑ 上游：
  - [Campaign](../../campaign/Campaign/) — 整个战役的宿主；`CampaignBehaviorManager` 是其可存档的子对象，`CampaignBehaviorDataStore` 随战役存档一起落盘。
  - [CampaignBehaviorBase](../CampaignBehaviorBase/) / [ICampaignBehavior](../ICampaignBehavior/) — 你的 Behavior 通过 `SyncData(IDataStore)` 收到这只托盘。
  - 存档系统：[SaveManager](../../save-system/SaveManager/) —— `OnBeforeSaveEvent` 触发写盘、`LoadBehaviorData` 在 `OnGameLoaded` 之后回填。
- ↓ 下游：
  - 每一个重写了 `SyncData` 的战役 Behavior（原版 `WorkshopsCampaignBehavior`、`VillagerCampaignBehavior`、`ViewDataTrackerCampaignBehavior` 等都在用）。
  - 内部持有者：`CampaignBehaviorManager`（`[SaveableField(1)]` 持有 `CampaignBehaviorDataStore`）、`SaveableCampaignTypeDefiner`（把 `CampaignBehaviorDataStore` 与 `BehaviorSaveData` 登记进存档类型表）。

## 风险段

- **寿命只在 SyncData 调用内**：你收到的 `dataStore` 是当次存/读档流程中临时构造的 `BehaviorSaveData`。把它赋给字段、在 tick 或事件里再调用它，是不确定的（通常是空托盘或别的 Behavior 的托盘）。需要持久化就用 `SyncData` 登记字段，需要运行时访问就用 Behavior 自己的字段。
- **key 覆盖**：同一个 Behavior 内，两次 `SyncData` 用相同 key，后一次覆盖前一次。给每个字段起唯一、带前缀的 key（例如 `"_myMod_counter"`）。不同 Behavior 之间 key 隔离，但同名不冲突只是因为分桶，改 `StringId` 后旧档会按类型名兜底匹配——见下。
- **跨战役/跨版本引用**：`SyncData` 的 `data`` 必须是可序列化、属于存档对象图的对象（基本类型、实现了保存契约的 `MBObjectBase` 派生类、标准容器等）。把“不属于存档图的、跨战役的引用”（例如对某个只存在于本局内存的对象、对 `MobileParty` 之外的临时对象）塞进去，会导致存档收集对象失败或读档拿到 `null`。读档时 `SyncData` 返回 `false` 即代表该 key 在档里不存在，此时你的 `ref` 变量保持默认值——务必处理“新档/旧档缺字段”的情况。
- **版本演进**：存盘时写的是字段的当前类型。如果你之后改了某字段的类型（比如 `int` 改 `List<int>`），旧存档读回来会反序列化失败或抛异常。稳妥做法是**给 key 加版本号**（如 `"_myMod_counter_v2"`），或在 `SyncData` 里兼容默认值。
- **`StringId` 决定分桶键**：底层用 `CampaignBehaviorBase.StringId`（`StringId` 默认是类型名）定位存档片段。load 时若严格按 `StringId` 找不到，会按“类型名包含”做兜底匹配；所以**不要让两个 Behavior 的类型名互相包含**，否则读档可能串桶。`Debug.FailedAssert` 也会在“同一 StringId 存了多次”时报警。
- **`IsSaving` / `IsLoading` 只是阶段标志**：不要基于它做游戏逻辑分支（例如“正在存盘就不扣钱”之类），它只说明当前是写档还是读档回填。真正影响游戏状态的是你写进 `ref` 的值。

## 成员说明

`IDataStore` 只有三个成员，全部围绕“一次存/读档”的同步。

### 数据读写

#### `bool SyncData<T>(string key, ref T data)`
按 `key` 与存档做一次双向同步——这是你与存档交互的**唯一方法**。

- **存盘时（`IsSaving == true`）**：把 `data` 当前值存入该 `key`，返回 `true`。引擎随后把它收进当前 Behavior 的托盘并落盘。
- **读档时（`IsLoading == true`）**：若存档中存在该 `key`，把保存的值填回 `data`（通过 `ref`），返回 `true`；若不存在，保持 `data` 的默认值，返回 `false`。
- **副作用**：修改 `data` 的值（读档时）。`T` 必须可序列化并属于存档对象图。
- **何时调用**：只在 `CampaignBehaviorBase.SyncData(IDataStore dataStore)` 重写体内调用；不要在其他任何地方调用。

```csharp
public override void SyncData(IDataStore dataStore)
{
    // 存盘：把 _raidCount 写入 "_raidCount"；读档：从档里还原，没有则返回 false
    dataStore.SyncData("_raidCount", ref _raidCount);
    dataStore.SyncData("_trackedVillages", ref _trackedVillages);
}
```

### 生命周期 / 阶段标志

#### `bool IsSaving { get; }`
当前这只托盘是否处于**存盘**阶段（`true`）。“是否正在把数据写进档”。实现上等价于 `BehaviorSaveData._isSaving`。

#### `bool IsLoading { get; }`
当前这只托盘是否处于**读档**阶段（`true`）。实现上等价于 `!_isSaving`，因此 `IsSaving` 与 `IsLoading` 在同一只托盘上必定一真一假。典型用途：读档回填后据此重建内存引用或重算派生缓存。

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("_cachedHero", ref _cachedHero);
    if (dataStore.IsLoading)
    {
        // 读档完成：重建非存档的派生引用
        RebuildDerivedReferences();
    }
}
```

## 最小真实示例

### 示例 1：在 Behavior 内持久化私有状态（正确做法）

```csharp
using TaleWorlds.CampaignSystem;
using System.Collections.Generic;

public class MyTrackerBehavior : CampaignBehaviorBase
{
    private int _raidCount;                       // 需要跨存档保留的字段
    private List<string> _trackedVillageIds;

    public override void RegisterEvents()
    {
        // 照常订阅战役事件……
    }

    public override void SyncData(IDataStore dataStore)
    {
        // dataStore 就是引擎在存/读档时给你的那只托盘
        dataStore.SyncData("_raidCount", ref _raidCount);
        dataStore.SyncData("_trackedVillageIds", ref _trackedVillageIds);

        // 读档阶段回填完毕后，重建内存里的派生状态
        if (dataStore.IsLoading)
        {
            _trackedVillageIds ??= new List<string>();
        }
    }
}
```

`MyTrackerBehavior` 被 `CampaignGameStarter` 注册后，引擎会在存盘前调用它的 `SyncData`（此时 `IsSaving`），读档后在 `OnGameLoaded` 之后调用（此时 `IsLoading`），`_raidCount` 与 `_trackedVillageIds` 便能跨存档存活。

### 示例 2：你不应该做的事

```csharp
// ❌ 错误 1：试图从 Campaign 上“取”一个长期 IDataStore——它不存在
// IDataStore store = Campaign.Current.GetDataStore();   // 编译/运行都不存在此 API

// ❌ 错误 2：把 SyncData 参数存到字段，留到 tick 里用
private IDataStore _cachedStore;
public override void SyncData(IDataStore dataStore)
{
    _cachedStore = dataStore;   // 这只托盘调用结束就被丢弃，之后用它是未定义行为
}

// ❌ 错误 3：把 IDataStore 当运行时共享总线，在每日 tick 里读写它
// 它只在存/读档那一刻存在，运行时根本拿不到。
```

**正确替代**：需要运行时共享，就放在 Behavior 自身字段或 `Campaign.Current` / 各 `Manager` 上；只在 `SyncData` 内用 `IDataStore` 做持久化登记。

## 跨版本提示

- `IDataStore` 的接口（`IsSaving` / `IsLoading` / `SyncData<T>`）在 `1.3.0`、`1.3.15`、`1.4.5` 三版中**完全一致**，`SyncData` 的语义（存盘写入、读档回填并返回是否命中）也一致。
- 底层实现 `CampaignBehaviorDataStore` 与 `CampaignBehaviorManager`（持有 `[SaveableField(1)]` 的 data store、监听 `OnBeforeSaveEvent`）同样稳定，是战役存档的“按 Behavior 分桶”标准机制。
- 写跨版本 mod 时，注意 `SyncData` 的 `data` 类型要可序列化；版本升级改字段类型时给 key 加版本号，避免旧档反序列化失败。

## 导航

- ↑ 父级：[campaign-ext 索引](./)
- ↔ 同级：[Campaign](../../campaign/Campaign/) — 战役枢纽；[CampaignBehaviorBase](../CampaignBehaviorBase/) / [ICampaignBehavior](../ICampaignBehavior/) — 你的 Behavior 在这里收到 `IDataStore`
- 相关：[SaveManager](../../save-system/SaveManager/) — 存档系统如何触发写盘与回填
