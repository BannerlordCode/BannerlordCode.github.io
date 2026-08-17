---
title: "Building"
description: "城镇中某个 BuildingType 的实例：承载等级、建造进度与耐久，并通过 BuildingEffectModel 派生忠诚/繁荣/民兵等加成；它本身不存储加成数值。"
---

# Building

**命名空间:** `TaleWorlds.CampaignSystem.Settlements.Buildings`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class Building`  
**基类:** 无（普通可存档类，由 `Town` 持有，不是 `MBObjectBase`）  
**源文件:** `TaleWorlds.CampaignSystem/Settlements.Buildings/Building.cs`

## 一句话职责

`Building` 是某座城镇里**一个 `BuildingType` 的实例**：记录它的当前等级（0–3）、建造进度与耐久，并把“它应提供什么加成”交给 `BuildingEffectModel` 在每日 / 事件结算时派生出来。它不持有加成结果，也不自己推进建造——那是 `BuildingsCampaignBehavior` 与 `BuildingEffectModel` 的职责。

## 心智模型

把 `BuildingType` 与 `Building` 分开：`BuildingType` 是经过 `MBObjectManager` 注册的定义（名字、起始等级、是否每日项目、效果类型），`Building` 是 `Town.Buildings` 列表里按类型挂着的**实例**。实例只有四个真正可变的状态：`CurrentLevel`（0 = 未建，最高 3，下限是 `BuildingType.StartLevel`）、`BuildingProgress`（累积的建造进度，升级时扣减）、`_hitpoints`（0–100 耐久，被袭击 / 围城削减，归零会触发自动降级）、`IsCurrentlyDefault`（是否为该城镇当前默认的每日项目）。

加成数值**不存**在 `Building` 上；当 `BuildingEffectModel` 计算城镇忠诚 / 繁荣 / 民兵 / 生产时，会遍历 `Town.Buildings` 并调用每个实例的 `AddEffectOfBuilding(buildingEffect, ref ExplainedNumber)`，把该建筑等级对应的增量写进 `ExplainedNumber`。要“读一个建筑的加成”，应当走 `Campaign.Current.Models.BuildingEffectModel.GetBuildingEffect(building, effect)`，而不是找某个字段。

`LevelUp` / `LevelDown` / `HitPointChanged` 是实例上真实存在的方法，但日常由 `BuildingsCampaignBehavior` 在建造 / 每日 / 战斗结算中调用；它们都会通过 `CampaignEventDispatcher.OnBuildingLevelChanged` 发出事件。`HitPointChanged` 更隐蔽：把耐久打到 0 会自动 `LevelDown`。

### 生命周期与注册

`Building` 由 `Town` 在城镇初始化时按 `BuildingType` 列表创建并持有，mod **不应**自己 `new Building()` 去替换一个正在被实体引用的实例。等级 / 进度 / 耐久都标了 `[SaveableField]` / `[SaveableProperty]`，随 `Town` 进入存档图；读档由 `OnLoad` 回调修正旧档的 `BuildingType` 引用。

## 依赖图

### 上游
- [Town](../Town) — 拥有并创建 `Building` 实例，提供 `Owner`、`Settlement` 与 `Buildings` 列表。
- [BuildingType](../BuildingType) — 定义名字、起始等级、是否每日项目、效果类型与生产成本；`Building` 只是它的实例。
- [Settlement](../Settlement) — 提供城堡 / 城镇判定（影响 `GetConstructionCost` 的政策系数）。
- [Campaign](../Campaign) — 持有 `Models` 与 `CampaignEventDispatcher`。

### 下游
- [BuildingEffectModel](../BuildingEffectModel) — 调用 `AddEffectOfBuilding` 把建筑等级换算成忠诚 / 繁荣 / 民兵等 `ExplainedNumber` 增量。
- [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) — 驱动每日建造进度、升级与耐久变化，是 `LevelUp` / `LevelDown` / `HitPointChanged` 的正常调用者。
- [SaveManager](../../save-system/SaveManager) — 等级 / 进度 / 耐久随 `Town` 进入存档图。

### Action、事件与存档边界
升级 / 降级会触发 `CampaignEventDispatcher.OnBuildingLevelChanged`；不要绕过行为直接改 `BuildingProgress` 或反复调用 `LevelUp`。加成是派生量，不存档；但等级 / 进度 / 耐久是存档字段，替换实例或改 `StartLevel` 语义会造成旧档映射错误。

## 成员契约

| 成员 | 含义与调用时机 |
| --- | --- |
| `BuildingType BuildingType` | 只读，返回该实例对应的定义对象（`MBObjectBase`）。 |
| `Town Town` | 只读，拥有该建筑的城镇；等级 setter 会顺带 `Town.Owner.SetLevelMaskIsDirty()`。 |
| `int CurrentLevel` | 0–3，下限为 `BuildingType.StartLevel`；设置时会标记城镇等级掩码脏。 |
| `float BuildingProgress` | 累积的建造进度；`LevelUp` 时按 `GetConstructionCost()` 扣减。 |
| `const float MaxHitpoints = 100f` | 耐久上限；`_hitpoints` 初始 100。 |
| `bool IsCurrentlyDefault` | 是否为城镇当前默认的每日建造项目。 |
| `int GetConstructionCost()` | 返回升下一级花费 = `BuildingType.GetProductionCost(CurrentLevel)` × 城堡宪章政策系数。 |
| `void LevelUp()` | 若 `CurrentLevel < 3`：等级 +1、进度扣成本、发 `OnBuildingLevelChanged(+1)`。 |
| `void LevelDown()` | 若 `CurrentLevel != StartLevel`：等级 −1、进度归零、耐久复位 100、发 `OnBuildingLevelChanged(−1)`。 |
| `void HitPointChanged(float change)` | 非起始等级时夹断耐久；耐久到 0 自动 `LevelDown()`。 |
| `void AddEffectOfBuilding(BuildingEffectEnum, ref ExplainedNumber)` | 被 `BuildingEffectModel` 调用，把本建筑对应效果增量写进结果；等级越界会断言失败。 |
| `TextObject GetBonusExplanation()` | 返回当前等级的加成说明文本（等级 0 返回空）。 |

## 真实读取路径

遍历一座城镇的全部建筑，汇总它们对“忠诚”这一效果的当前贡献（与 `BuildingEffectModel` 内部做法一致）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;
using TaleWorlds.Core;

public ExplainedNumber ReadLoyaltyFromBuildings(Town town)
{
    ExplainedNumber loyalty = new ExplainedNumber(0f);
    foreach (Building building in town.Buildings)
    {
        building.AddEffectOfBuilding(BuildingEffectEnum.Loyalty, ref loyalty);
    }
    return loyalty;
}
```

若只想读单个建筑在某效果上的最终数值，直接走模型而不是找字段：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Buildings;
using TaleWorlds.Core;

public float GetMarketBuildingEffect(Building market, BuildingEffectEnum effect)
{
    if (Campaign.Current == null || market == null)
        return 0f;
    return Campaign.Current.Models.BuildingEffectModel
        .GetBuildingEffect(market, effect).ResultNumber;
}
```

**何时不要用：** 不要自己 `new Building()` 替换城镇实例；不要用 `building.X = ...` 直接写进度或耐久来“假装建造完成”；不要用 `AddEffectOfBuilding` 去累加你自己的业务逻辑——那是 `BuildingEffectModel` 的派生入口，改等级请走 `LevelUp` / 行为。

## 风险与调试顺序

1. **耐久暗降级：** 一次袭击把 `_hitpoints` 打到 0，`HitPointChanged` 会静默 `LevelDown()`，表现像“建筑自己掉级”。
2. **直接写进度：** 手动改 `BuildingProgress` 而不走 `BuildingsCampaignBehavior` 会跳过升级事件与成本校验，导致等级与进度不一致。
3. **等级越界断言：** `AddEffectOfBuilding` 在 `CurrentLevel` 超出 `[StartLevel, 3]` 时会 `Debug.FailedAssert`，自定义模型调用前先确认等级合法。
4. **加成不存字段：** 在 `Building` 上找不到“忠诚 +5”这种字段，因为加成是 `BuildingEffectModel` 派生的；误读字段会得到 0。
5. **替换实例坏档：** `Building` 随 `Town` 存档；用 `new Building()` 替换正在被引用的实例会让旧档映射失败。
6. **StartLevel 语义：** 不同建筑起始等级不同（`StartLevel` 是下限），`LevelDown` 不会低于它；判断“未建 / 已建”要用 `CurrentLevel == 0` 而非 `== StartLevel`。

## 版本与导航

`Building` 的公开实例 API（`CurrentLevel` / `BuildingProgress` / `LevelUp` / `LevelDown` / `AddEffectOfBuilding`）在 v1.3.15 与 v1.4.5 保持一致；差异主要在 `BuildingEffectModel` 默认实现的加成细节。跨版本 mod 应依赖这些实例契约与 `BuildingEffectModel`，不要复制默认公式。

- [父级：Campaign API](../)
- [↔ BuildingType](../BuildingType)
- [↔ BuildingEffectModel](../BuildingEffectModel)
- [↔ BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
- [Town](../Town)
- [Settlement](../Settlement)
- [Campaign](../Campaign)
- [SaveManager](../../save-system/SaveManager)
