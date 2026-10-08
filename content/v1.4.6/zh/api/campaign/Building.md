---
title: "Building"
description: "聚落（Town）中一栋具体建筑的运行时实例，把全局共享的 BuildingType 定义与某座城镇的等级、在建进度、耐久状态绑定在一起。"
---
# Building

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Buildings`
**Type:** `public class Building`
**Source:** `TaleWorlds.CampaignSystem/Settlements/Buildings/Building.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`Building` 就是「某座城镇里的某一栋建筑」本身。它不描述建筑长什么样、造价多少、能加什么效果 —— 那些在全局共享的 `BuildingType`（定义侧）里；`Building` 站在**实例侧**，只负责回答「这栋建筑在这座城里现在是什么状态」。

一个 `Building` 由三块东西拼成：

- **定义引用**：`_buildingType`（由 `BuildingType` 属性暴露），指向全局唯一的建筑类型对象；
- **归属**：`Town`（`Building.cs:97`），说明它属于哪座城；
- **可变状态**：`CurrentLevel`（`Building.cs:102`）、`BuildingProgress`（`Building.cs:308`）、`_hitpoints`，以及 `IsCurrentlyDefault`（`Building.cs:315`）。

因此同一个 `BuildingType` 会在每座城里各有一个 `Building` 实例：类型是共享的，状态是每城独立的。`Town.Buildings` 保存该城全部实例，`Town.BuildingsInProgress` 保存排队等待升级的实例，`Town.CurrentBuilding` 是队列头（队列为空时回退到 `Town.CurrentDefaultBuilding`）。

## 心智模型

把 `Building` 想成一张「城镇 × 建筑类型」的状态卡，而不是一份配置：

1. **等级是离散的，进度是连续的。** `CurrentLevel` 的取值范围是 `BuildingType.StartLevel` 到 `3`。`BuildingProgress` 不是 0–1 的百分比，而是**已投入的建造点数**；`BuildingHelper.GetProgressOfBuilding` 用 `BuildingProgress / GetConstructionCost()` 才把它换算成进度比例，而 `GetConstructionCost()`（`Building.cs:145`）返回当前等级升级所需点数。
2. **等级 0 意味着「未建成」。** 此时 `AddEffectOfBuilding`（`Building.cs:194`）直接返回、`GetBonusExplanation`（`Building.cs:228`）返回空文本 —— 建筑存在，但不产生任何效果。
3. **升级是「消费进度」，不是「清零进度」。** `LevelUp()`（`Building.cs:156`）在 `CurrentLevel < 3` 时自增等级，然后从 `BuildingProgress` 里**减去** `GetConstructionCost()`。所以进度是跨等级的滚动余额：累积点数不够就调用它，进度会变成负数，之后 `GetProgressOfBuilding` 给出的比例也是负的。
4. **降级会重置两样东西。** `LevelDown()`（`Building.cs:168`）在等级不等于 `StartLevel` 时自减等级，并把 `BuildingProgress` 归零、`_hitpoints` 拉回 100。耐久归零是它唯一的触发入口：`HitPointChanged`（`Building.cs:180`）把耐久夹在 `[0, MaxHitpoints]`，一旦落到 0 就调用 `LevelDown()`。
5. **唯一的状态变化事件是等级变化。** `LevelUp` / `LevelDown` 内部会派发 `CampaignEventDispatcher.Instance.OnBuildingLevelChanged(Town, Building, int)`，对外表现为 `CampaignEvents.OnBuildingLevelChangedEvent`（`int` 参数为 `+1` 升级、`-1` 降级）。**改进度、改耐久都不派发事件**；耐久只有在把建筑打到降级时才会间接产生一次等级事件。
6. **等级 setter 只做视觉同步。** `CurrentLevel` 的 setter 只调用 `Town.Owner.SetLevelMaskIsDirty()` 让城镇模型刷新等级蒙版，它**不派发**等级变化事件，也不动进度和耐久。
7. **日常项目靠 `IsCurrentlyDefault` 参与判定。** `AddEffectOfBuilding` 对 `BuildingType.IsDailyProject` 的建筑有一道额外门禁：只有 `Town.CurrentDefaultBuilding == this` 时才注入效果。所以同一时刻一座城里应当只有一个 `IsCurrentlyDefault == true` 的实例，切换要走 `BuildingHelper.ChangeDefaultBuilding`。

一句话概括 mod 的接入点：**想响应建筑变化就订阅 `OnBuildingLevelChangedEvent`；想让建筑变化发生就走 `LevelUp` / `LevelDown` + `BuildingHelper.CheckIfBuildingIsComplete`，不要自己改字段。**

## 怎么用

### 怎么拿到

`Building` 没有全局索引，它是从 `Town` 出发拿到的。`Town.Buildings` 是该城全部实例，`Town.BuildingsInProgress` 是升级队列，`Town.CurrentBuilding` 是队列头。

```csharp
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;
using TaleWorlds.Localization;

// 遍历所有要塞城镇，取出它们的建筑实例
foreach (Settlement settlement in Settlement.All)
{
    if (!settlement.IsFortification)
        continue;

    Town town = settlement.Town;

    // 定义是共享的 BuildingType，状态是这里的每个 Building
    foreach (Building building in town.Buildings)
    {
        TextObject name = building.Name;            // Building.cs:65
        TextObject desc = building.Explanation;     // Building.cs:75
        BuildingType type = building.BuildingType;  // Building.cs:85
    }

    // 正在升级的那一栋：队列头，队列为空则回退到默认建筑
    Building current = town.CurrentBuilding;
}
```

### 典型用法

最常见的是两件事：读「到几级了 / 还要多久」，以及订阅等级变化。

```csharp
// —— 读状态 ——
int level = building.CurrentLevel;                                        // Building.cs:102
float ratio = building.BuildingProgress / building.GetConstructionCost(); // Building.cs:308 / Building.cs:145
// ratio 才是 0~1 的进度；building.BuildingProgress 本身是建造点数
TextObject bonus = building.GetBonusExplanation();                        // Building.cs:228

// —— 让效果生效：由模型在 Explain 流程里调用，把结果写进 ref ExplainedNumber ——
ExplainedNumber result = new ExplainedNumber(0f);
building.AddEffectOfBuilding(BuildingEffectEnum.FoodStock, ref result);   // Building.cs:194
// 注意：AddEffectOfBuilding 不“施加”效果，它只是往 result 里记账

// —— 订阅等级变化：这是 Building 唯一的对外事件 ——
CampaignEvents.OnBuildingLevelChangedEvent.AddNonSerializedListener(this, OnBuildingLevelChanged);

private void OnBuildingLevelChanged(Town town, Building building, int levelChange)
{
    // levelChange > 0 表示 LevelUp，< 0 表示 LevelDown
}
```

### 坑

**坑 1：直接写 `CurrentLevel` 会静默跳过事件与联动。** setter 只标脏城镇等级蒙版，不派发 `OnBuildingLevelChangedEvent`，也不同步进度/耐久。依赖该事件的下游（驻军与囚犯名单版本刷新、`MoralLeader` / `Foreman` 总督加成、`SkillLevelingManager.OnSettlementProjectFinished`）全都不会执行。

```csharp
building.CurrentLevel = 3;                            // ❌ Building.cs:102 —— 无事件、无联动
if (building.CurrentLevel < 3) building.LevelUp();    // ✅ Building.cs:156 —— 派发 +1 事件
```

**坑 2：只加进度、不触发完成判定。** 加 `BuildingProgress` 不会自动升级；原版由每日结算调用 `BuildingHelper.CheckIfBuildingIsComplete`，它比较 `GetConstructionCost() <= BuildingProgress`，达标才 `LevelUp()`，并把该建筑从 `Town.BuildingsInProgress` 出队。

```csharp
building.BuildingProgress += 500f;                    // ❌ Building.cs:308 —— 等级永远不会变
building.BuildingProgress += 500f;
BuildingHelper.CheckIfBuildingIsComplete(building);   // ✅ 由 helper 决定是否 LevelUp
```

**坑 3：把 `LevelUp()` 当免费升级用。** 它会从进度里扣掉当前等级的造价，进度不够就变负数，`GetProgressOfBuilding` 随后返回负比例，UI 进度条与 `GetDaysToComplete` 都会失真。另外 `LevelUp` 对 `CurrentLevel >= 3` 直接什么都不做。

**坑 4：手改 `IsCurrentlyDefault`。** 若留下两个 `true`，`Town.CurrentDefaultBuilding`（取第一个匹配项）和日常项目效果会落到不确定的一栋上，另一栋的 `AddEffectOfBuilding` 会因门禁直接返回。切换默认建筑请走 `BuildingHelper.ChangeDefaultBuilding`。

**坑 5：对未建成的建筑调 `HitPointChanged`。** 当 `CurrentLevel == BuildingType.StartLevel` 时它立刻返回（`Building.cs:180`），既不能造成伤害也不能修复；`LevelDown` 同样受 `StartLevel` 下限保护（`Building.cs:168`）。

**坑 6：不要试图换掉 `BuildingType`。** `_buildingType` 是私有可存档字段，`BuildingType` 只读，并且 `OnLoad`（`Building.cs:131`）里还有一套旧存档 StringId 迁移（`UpdateBuildingTypeForOldSaves`，`Building.cs:258`）。要让某城拥有另一种建筑，构造一个新的 `Building` 并加进 `Town.Buildings` 才是正路。

## 关键成员

| 成员 | 行号 | 类型 / 签名 | 作用 |
| --- | --- | --- | --- |
| `Name` | `Building.cs:65` | `TextObject`（只读） | 转发 `_buildingType.Name`，本地化后的建筑名。 |
| `Explanation` | `Building.cs:75` | `TextObject`（只读） | 转发 `_buildingType.Explanation`，建筑的说明文本。 |
| `BuildingType` | `Building.cs:85` | `BuildingType`（只读） | 定义侧引用：这栋实例属于哪种建筑。 |
| `Town` | `Building.cs:97` | `Town { get; private set; }` | 归属城镇；带 `[SaveableProperty(6)]`，存档按此恢复归属。 |
| `CurrentLevel` | `Building.cs:102` | `int`（可读写） | 当前等级；setter 只调 `Town.Owner.SetLevelMaskIsDirty()`，不派发事件。 |
| `OnLoad` | `Building.cs:131` | `private void`（`[LateLoadInitializationCallback]`） | 读档后调用 `UpdateBuildingTypeForOldSaves()` 做旧存档迁移。 |
| `GetHashCode` | `Building.cs:137` | `override int` | 由 `BuildingType` 与 `Town` 组合出哈希，等价于「类型 × 城镇」这个键。 |
| `GetConstructionCost` | `Building.cs:145` | `int` | 当前等级升级所需建造点数；城堡且生效 `CastleCharters` 政策时打八折。 |
| `LevelUp` | `Building.cs:156` | `void` | `CurrentLevel < 3` 时升一级、扣减进度，并派发 `OnBuildingLevelChanged(+1)`。 |
| `LevelDown` | `Building.cs:168` | `void` | 未到 `StartLevel` 时降一级，进度清零、耐久回 100，派发 `OnBuildingLevelChanged(-1)`。 |
| `HitPointChanged` | `Building.cs:180` | `void HitPointChanged(float change)` | 增减耐久并夹到 `[0, 100]`；归零则触发 `LevelDown()`；在 `StartLevel` 直接返回。 |
| `AddEffectOfBuilding` | `Building.cs:194` | `void (..., ref ExplainedNumber result)` | 按 `BuildingEffectEnum` 把 `BuildingEffectModel` 算出的数值以 `Add` 或 `AddFactor` 记进 `result`。 |
| `GetBonusExplanation` | `Building.cs:228` | `TextObject` | 返回当前等级对应的加成说明；等级 0 返回空文本。 |
| `GetBonusExplanations` | `Building.cs:238` | `private TextObject[]` | 逐级收集 `BuildingType.GetExplanationAtLevel(i)` 供上一方法取用。 |
| `UpdateBuildingTypeForOldSaves` | `Building.cs:258` | `private void` | v1.3.0.0 之前的存档按 StringId 映射表把旧建筑类型重绑到新类型。 |
| `BuildingProgress` | `Building.cs:308` | `public float`（`[SaveableField(1)]`） | 已投入的建造点数余额，不是百分比；升级时被扣减。 |
| `MaxHitpoints` | `Building.cs:311` | `public const float = 100f` | 耐久上限常量。 |
| `IsCurrentlyDefault` | `Building.cs:315` | `public bool`（`[SaveableField(2)]`） | 是否为该城当前生效的日常项目，影响 `AddEffectOfBuilding` 的门禁。 |

## 真实示例

一个只读 + 订阅的 mod 行为：每日为当前在建建筑注入建造点数，并在等级变化时提示玩家。

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;
using TaleWorlds.Library;

public class BuildingWatcherBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 唯一能观察到等级变化的入口
        CampaignEvents.OnBuildingLevelChangedEvent.AddNonSerializedListener(this, OnLevelChanged);
        CampaignEvents.DailyTickSettlementEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnLevelChanged(Town town, Building building, int levelChange)
    {
        string verb = levelChange > 0 ? "升级" : "降级";
        InformationManager.DisplayMessage(new InformationMessage(
            $"{town.Name}：{building.Name} {verb} → Lv{building.CurrentLevel}"));
    }

    private void OnDailyTick(Settlement settlement)
    {
        if (!settlement.IsFortification)
            return;

        Town town = settlement.Town;
        Building target = town.CurrentBuilding;
        if (target == null || target.CurrentLevel >= 3)
            return;

        // 只注入点数，是否升级交给原版判定逻辑，保证事件与出队行为一致
        target.BuildingProgress += town.Construction;      // Building.cs:308
        BuildingHelper.CheckIfBuildingIsComplete(target);  // 内部可能触发 LevelUp
    }
}
```

要「拔高」某栋建筑时，同样的原则适用：先确认 `CurrentLevel < 3`，再调 `building.LevelUp()`（`Building.cs:156`）而不是写 `CurrentLevel`，这样 `OnBuildingLevelChangedEvent` 会照常派发，驻军/囚犯名单与总督加成也会同步。

## 参见

- [Town](../Town) —— 建筑实例的归属城镇，持有 `Buildings`、`BuildingsInProgress` 与 `CurrentDefaultBuilding`。
- [Settlement](../Settlement) —— 城镇所在的聚落，事件与每日结算都以它为单位触发。
- [ExplainedNumber](../ExplainedNumber) —— `AddEffectOfBuilding` 记账用的目标类型，理解效果叠加必看。
- [Campaign](../Campaign) —— 通过 `Campaign.Current.Models.BuildingEffectModel` / `BuildingConstructionModel` 取得效果数值与建造力的来源。
- [MBObjectBase](../../campaign-ext/MBObjectBase) —— `BuildingType` 一类的定义对象的基类，理解「定义 / 实例」分野的起点。
- [MBObjectManager](../../campaign-ext/MBObjectManager) —— `UpdateBuildingTypeForOldSaves` 用它按 StringId 注册/取出建筑类型。

## 导航

- 上级索引：[campaign API 索引](../_index)
- 同类实体：[Town](../Town) · [Settlement](../Settlement) · [Campaign](../Campaign)
- 底层类型：[MBObjectBase](../../campaign-ext/MBObjectBase) · [Game](../../core-extra/Game)
