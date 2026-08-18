---
title: "BehaviorSaveData"
description: "CampaignBehavior 跨存档持久化内部状态的容器与契约类型：由 CampaignBehaviorDataStore 在存/读档时构造，承载每个 Behavior 经 SyncData 写入的键值记录，是防坏档（类型错配、StringId 错位、字段丢失）的核心边界。"
---
# BehaviorSaveData

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `internal class BehaviorSaveData : IDataStore`（嵌套定义于 `CampaignBehaviorDataStore` 内）  
**基类：** `IDataStore`  
**源文件：** `TaleWorlds.CampaignSystem/CampaignBehaviorDataStore.cs`（嵌套类型，定义于此文件内部）

## 概述

`BehaviorSaveData` 是 `CampaignBehaviorDataStore` 内部的一个嵌套容器类型，也是一个 `IDataStore` 实现：它为每个 `CampaignBehavior` 承载一组以字符串键索引、装箱 `object` 为值的存档记录（`_records`），在存档阶段由引擎收集该 Behavior 经 `SyncData` 写入的状态，在读档阶段按相同键把值强制类型转换回填给 Behavior，是 Behavior 跨存档持久化内部状态的核心契约与防坏档边界。

## 心智模型

把 `BehaviorSaveData` 想成「每个 `CampaignBehavior` 专属的存档抽屉」：它不是你平时直接操作的 API，而是引擎在存/读档那一刻，为每个 Behavior 临时造出来、用来收集与发还它内部状态的键值容器。

- **它处在哪一层**：纯存档基础设施层。外层 `CampaignBehaviorDataStore` 用 `_behaviorDict: Dictionary<string, BehaviorSaveData>` 以每个 Behavior 的 `StringId` 为键，存着对应的 `BehaviorSaveData`；而 `CampaignBehaviorManager` 又把这个 store 作为自己的 `[SaveableField(1)]` 字段，于是整棵抽屉树随战役存档一起被 SaveSystem 序列化。你写的任何 `SyncData` 调用最终都落进这里。
- **生命周期**：存档时，`CampaignEvents.OnBeforeSaveEvent` 触发 `CampaignBehaviorManager.OnBeforeSave` → 先 `ClearBehaviorData()` 清空上一轮，再为每个 Behavior `new BehaviorSaveData(isSaving: true)` 并调用其 `SyncData(this)`，于是你的 `dataStore.SyncData(key, ref field)` 把字段 `Add` 进 `_records`。读档时，`Campaign.OnGameLoaded` 在初始化完所有 Behavior 之后调用 `_campaignBehaviorManager.LoadBehaviorData()`，对每个 Behavior 取出它对应的 `BehaviorSaveData`，再以 `isSaving:false` 调其 `SyncData`——此时 `TryGetValue(key)` 命中就把 `(T)value` 强制转换回填给你的 `ref field`，未命中则字段保留默认值。
- **谁读写**：写由你的 Behavior 在 `SyncData` 里发起；读由引擎在读档回调里完成；容器与 store 的增删由 `CampaignBehaviorDataStore` / `CampaignBehaviorManager` 独占，你不该碰。
- **何时不要直接改**：永远不要自己 `new BehaviorSaveData` 或去动 `_records`——它是引擎托管的契约对象。也不要把 `Settlement` / `MobileParty` / `Hero` 这类运行时对象引用直接当值存进去（读档时它们还没重建，引用会是 null/陈旧）；应存它们的 `StringId`，在 `RegisterEvents` / tick 中重新 `Find` 解析。

## 何时使用 / 何时不要使用

**用（这是你与本类型的唯一交互面）：** 当你写一个自定义 `CampaignBehavior` 需要跨存档保存内部状态时，在实现 `SyncData(IDataStore)` 中通过 `dataStore.SyncData("key", ref myField)` 声明每个要持久化的字段。键名在存/读两端必须一致；存入的值必须是 SaveSystem 能序列化的类型。

**不要用（优先替代）：**
- 不要 `new BehaviorSaveData(...)`，也不要直接读写 `_records`——它只由 `CampaignBehaviorDataStore` 构造并管理，自己造的实例不会进入 `_behaviorDict`，也就不会进存档。
- 不要把 `Settlement` / `MobileParty` / `Hero` 等运行时对象引用直接当值存；存 `StringId`，用到时再 `Settlement.Find` / `Campaign.Current.MobileParties` 重新取。
- 不要依赖未标 `[SaveableField]` 的自定义值类型，也不要假设存在 `SaveableTypeDefiner` 未注册的自定义类型能被序列化；否则存为 `object` 装箱后丢失字段或整段丢档。
- 不要在 `SyncData` 之外（构造函数、`RegisterEvents` 早期）假设字段已回填；读档回填发生在 `InitializeCampaignBehaviors` 之后。
- 不要改动 Behavior 的 `StringId` 使之与旧存档不匹配——见下方风险。

## 依赖图

```text
CampaignBehaviorBase (实现 SyncData)
   │  每 Behavior 调用 dataStore.SyncData(key, ref field)
   ▼
BehaviorSaveData  (_records: Dictionary<string,object>, [SaveableField(0)])
   │  被 CampaignBehaviorDataStore._behaviorDict 以 StringId 索引持有
   ▼
CampaignBehaviorDataStore  (_behaviorDict: Dictionary<string,BehaviorSaveData>, [SaveableField(1)])
   │  是 CampaignBehaviorManager 的 [SaveableField(1)] 字段
   ▼
CampaignBehaviorManager  ← OnBeforeSaveEvent / LoadBehaviorData 驱动
   │  随战役存档由 SaveSystem 序列化
   ▼
SaveableCampaignTypeDefiner (AddClassDefinition BehaviorSaveData = 184 + Dictionary 容器)
```

### 上游 / 持有者（谁构造与管理它）
- [CampaignBehaviorDataStore](../CampaignBehaviorDataStore)：外层容器，持有 `_behaviorDict`，在 `SaveBehaviorData` / `LoadBehaviorData` 中构造与复用本类型、并以 `StringId` 索引。
- [CampaignBehaviorManager](../CampaignBehaviorManager)：持有 store 作为 `[SaveableField(1)]` 字段，在 `OnBeforeSave`（先 `ClearBehaviorData` 再逐个 `SaveBehaviorData`）与 `LoadBehaviorData` 中驱动整个存/读流程。
- [Campaign](../Campaign)：在 `OnGameLoaded` 中于 `InitializeCampaignBehaviors` 之后调用 `_campaignBehaviorManager.LoadBehaviorData()`，是读档回填的触发点。
- [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner)：用 `AddClassDefinition(typeof(CampaignBehaviorDataStore.BehaviorSaveData), 184)` 与 `ConstructContainerDefinition(typeof(Dictionary<string, CampaignBehaviorDataStore.BehaviorSaveData>))` 把它登记进 SaveSystem。

### 下游 / 读写者（谁往里写）
- [CampaignBehaviorBase](../CampaignBehaviorBase)：所有 Behavior 实现 `SyncData(IDataStore)`，把自身状态按键写入本类型。
- [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior)：真实范例——`dataStore.SyncData("_warehouseRosterPerSettlement", ref _warehouseRosterPerSettlement)` 与 `dataStore.SyncData("_workshopData", ref _workshopData)`（后者为 `List<WorkshopData>`，其字段标 `[SaveableField]`）。
- 任意需要跨存档保存内部状态的 Behavior（如 `AgingCampaignBehavior`、`TradeCampaignBehavior` 等）。

### 相关类型
- [IDataStore](../IDataStore)：本类型实现的接口；`SyncData<T>` 即接口契约。
- [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute)：使 `_records` 与存入的自定义字段进存档的注解。
- 被持久化的实体：[MobileParty](../MobileParty) / [Settlement](../Settlement) / [Hero](../Hero) / [ItemRoster](../ItemRoster)——Behavior 通常经 `SyncData` 缓存它们的 `StringId` 或标量状态，而非对象引用。

## 风险

- **类型错配导致 `(T)value` 抛 `InvalidCastException`（读档崩溃/坏档）**：`SyncData` 在加载分支对取出的值做强制转换 `data = (T)value`。若你重构 Behavior 后复用了同一个键名却把字段类型换了（如 `List<int>` 改为 `List<MyStruct>`，或 mod 升级后字段类型变化），读档时强制转换失败，直接中断读档。字段类型变更务必换新键名或处理版本兼容。
- **键名不一致导致状态悄悄丢失**：若 `SyncData` 的键名在存/读两端拼写不同（重构改名、复制粘贴笔误），加载端 `TryGetValue` 未命中返回 `false`，字段保持初始化默认值——表现为「我的进度/计数不见了」而没有任何报错。
- **存入未注册/未标 `[SaveableField]` 的自定义类型导致丢字段或丢档**：`_records` 是 `Dictionary<string, object>`，值是装箱 `object`。存入的自定义对象必须自身可被 SaveSystem 序列化（字段标 `[SaveableField]` 且类型在 `SaveableTypeDefiner` 注册），否则序列化时被忽略或整段失败，回填得到 null/默认值。
- **`StringId` 不一致导致数据错位（最离奇的一类坏档）**：`_behaviorDict` 以 `behavior.StringId` 为键（默认 `StringId = GetType().Name`）。若某 Behavior 的 `StringId` 在不同版本/不同 mod 组合下改变，`LoadBehaviorData` 精确查找失败后触发兜底逻辑 `item.Key.Contains(GetType().Name)`——把键名「包含类型名」的任意旧记录强行重键为当前 `StringId` 并回填。这可能导致 A 的存档记录被错误回填进 B、或记录被错误消费；行为表现为「别的 Behavior 的状态串到了我这里」。
- **重复 `StringId` 导致互相覆盖 + `FailedAssert`**：`SaveBehaviorData` 对已存在的 `StringId` 触发 `Debug.FailedAssert("trying to save multiple behaviors with the same stringid")`，且仍执行 `_behaviorDict[stringId] = behaviorSaveData`（覆盖）。若两个不同 Behavior 共享同一 `StringId`（都依赖默认 `GetType().Name` 而类型重名，或显式传了相同 id），后存者覆盖前者，前者的存档数据丢失。
- **加载顺序 / 引用未重建导致空引用**：`LoadBehaviorData` 在所有 Behavior 初始化之后统一调用。若你在 `RegisterEvents` / `DailyTick` 中假设 `SyncData` 已把某些 `Settlement` / `MobileParty` 对象引用回填好，而实际你存的是对象引用（读档时还没重建），则会拿到 null/陈旧引用而崩溃。应只存 `StringId`，加载后重新解析。
- **值类型装箱与 null**：`object` 字典对值类型装箱；若存了 null（引用类型字段未初始化），加载时 `(T)value` 对值类型 `T` 会抛转换异常。为可选字段提供非 null 默认值。

## 成员说明

### 序列化容器与模式标志

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `_records`（`[SaveableField(0)]` `Dictionary<string, object>`） | 本类型唯一真正进存档的数据。存档阶段由 `SyncData` 逐个 `Add(key, value)` 写入；读档阶段被 `TryGetValue` 读出并强制转换回填。值是装箱 `object`，因此存入的自定义类型必须自身可被 SaveSystem 序列化（字段标 `[SaveableField]` 且注册到 `SaveableTypeDefiner`）。 |
| `IsSaving`（`=> _isSaving`） | 是否处于存档模式。引擎在 `new BehaviorSaveData(isSaving: true)` 时置 true；它决定 `SyncData` 走「写入 `_records`」还是「从 `_records` 读出」分支。 |
| `IsLoading`（`=> !_isSaving`） | 是否处于读档模式。与 `IsSaving` 互补；读档回填时此值为 true，Behavior 不应在此时做需要世界已就绪的副作用。 |
| `BehaviorSaveData(bool isSaving)`（构造函数） | 由 `CampaignBehaviorDataStore.SaveBehaviorData` 在存档时以 `isSaving:true` 调用；读档时**不新建**，而是复用 `_behaviorDict` 中已反序列化的那个实例。mod 不应自行构造。 |

### 序列化契约（核心方法）

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `SyncData<T>(string key, ref T data)` | 实现 `IDataStore` 的唯一契约。存档时 `_records.Add(key, data)` 并返回 `true`；读档时 `TryGetValue(key, out value)`，命中则 `data = (T)value` 强制转换后返回 `true`，未命中返回 `false` 且 `data` 保持调用前（字段初始化）的默认值。这是每个 Behavior 持久化状态的唯一入口，键名在存/读两端必须一致。 |
| `AutoGeneratedStaticCollectObjectsBehaviorSaveData` / `AutoGeneratedInstanceCollectObjects` | SaveSystem 在收集可序列化对象图时调用，把 `_records` 加入待序列化集合。自动生成代码，mod 不需调用。 |
| `AutoGeneratedGetMemberValue_records` | SaveSystem 读取 `_records` 字段值的访问钩子。自动生成代码。 |

## 示例

### 示例 1：自定义 Behavior 通过 SyncData 落档（mod 作者真实写法）

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

// 自定义 Behavior：把内部状态通过 IDataStore.SyncData 写进对应的 BehaviorSaveData
public class BanditRaidTrackerBehavior : CampaignBehaviorBase
{
    // 这些字段会在存档阶段被 BehaviorSaveData._records 收集，读档阶段被回填
    private Dictionary<string, int> _raidCountBySettlement;
    private CampaignTime _lastRaidCheck;

    public override void RegisterEvents() { /* 订阅 DailyTick 等 */ }

    public override void SyncData(IDataStore dataStore)
    {
        // 引擎传入的 dataStore 实际就是 CampaignBehaviorDataStore 为本次存档/读档
        // 构造的 BehaviorSaveData：IsSaving 时写，IsLoading 时按 key 读出并 (T) 回填
        dataStore.SyncData("_raidCountBySettlement", ref _raidCountBySettlement);
        dataStore.SyncData("_lastRaidCheck", ref _lastRaidCheck);
    }
}
```

`_raidCountBySettlement` 的 `Dictionary<string, int>` 与 `CampaignTime` 都是 SaveSystem 已知可序列化类型，无需额外标注；存/读两端键名必须一致。若 `_lastRaidCheck` 这类字段引用的是 `Settlement` 等运行时对象，应改为存 `StringId`，在 tick 中 `Settlement.Find` 重新解析。

### 示例 2：引擎驱动存/读流程（方法名来自源码）

```csharp
// CampaignBehaviorManager 内部在 OnBeforeSaveEvent 时调用（真实流程）：
_campaignBehaviorDataStore.ClearBehaviorData();      // 清空上一轮 _behaviorDict
foreach (CampaignBehaviorBase behavior in _campaignBehaviors)
{
    // SaveBehaviorData 内部等价于：
    //   var data = new BehaviorSaveData(isSaving: true);
    //   behavior.SyncData(data);                       // 你写的 SyncData 把字段 Add 进 _records
    //   _behaviorDict[behavior.StringId] = data;       // 以 StringId 为键存入
    _campaignBehaviorDataStore.SaveBehaviorData(behavior);
}

// Campaign.OnGameLoaded 中调用（真实流程）：
_campaignBehaviorManager.LoadBehaviorData();         // 对每个 behavior 取回其 BehaviorSaveData
                                                     // 并以 IsLoading 调其 SyncData 回填字段
```

读档回填发生在 `InitializeCampaignBehaviors` 之后；在 `SyncData` 之外（如 `RegisterEvents` 早期、构造函数）不要假设字段已填。`StringId` 来自 `CampaignBehaviorBase`：`StringId = stringId`（显式）或默认 `GetType().Name`，它直接决定 `_behaviorDict` 的索引键，必须与旧存档一致。

## 参见

- ↑ 父级：[Campaign API 索引](../)
- ↔ 容器与驱动：[CampaignBehaviorDataStore](../CampaignBehaviorDataStore) · [CampaignBehaviorManager](../CampaignBehaviorManager) · [Campaign](../Campaign) · [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner)
- ↔ 契约与注解：[CampaignBehaviorBase](../CampaignBehaviorBase) · [IDataStore](../IDataStore) · [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute)
- ↔ 真实范例 Behavior：[WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior)
- ↔ 被持久化的实体：[MobileParty](../MobileParty) · [Settlement](../Settlement) · [Hero](../Hero) · [ItemRoster](../ItemRoster)
