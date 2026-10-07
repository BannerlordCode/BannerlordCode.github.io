---
title: "BuildingHelper"
description: "城镇建造系统的静态工具：进度查询、剩余天数预估、默认建筑切换、建造队列管理与金币加速。"
---

# BuildingHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class BuildingHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/BuildingHelper.cs`（声明见第 13 行）

## 概述

本类是城镇建造系统的静态工具，覆盖建造进度查询、剩余天数预估、默认建筑切换、建造队列管理与金币加速。它自己不持有状态，全部是「读状态后做判断」或「把一串既有 Action 串起来」。`GetDaysToComplete` 的 boost 成本在 1.4.7 是「按 `IsCastle` 取两个字段」，不是调方法。

## 心智模型

把 BuildingHelper 想成城镇建造面板的「后台计算」：`Building` 持有建造进度与等级，`Town` 持有建造力与加速值，本类负责把「还要几天」「当前进度多少」「默认建筑是哪个」这些问题整理成固定几个问法。关键设计决策是**1.4.7 特有的 boost 成本写法**——`int num4 = (town.IsCastle ? buildingConstructionModel.CastleBoostCost : buildingConstructionModel.TownBoostCost);`（第 97 行），是「按 `IsCastle` 取两个字段」，不是调方法。`BoostBuildingProcessWithGold` 是本类唯一动玩家金库的方法，用的是 `Hero.MainHero`。

## 何时使用 / 何时不要使用

**何时使用：**
- 要查询建造进度时，用 `GetProgressOfBuilding(building, town)`。
- 要预估剩余天数时，用 `GetDaysToComplete(building, town)`。
- 要切换默认建筑时，用 `ChangeDefaultBuilding(newDefault, town)`。
- 要管理建造队列时，用 `ChangeCurrentBuildingQueue(buildings, town)`。
- 要用金币加速建造时，用 `BoostBuildingProcessWithGold(gold, town)`。
- 要检查建造是否完成时，用 `CheckIfBuildingIsComplete(building)`。

**何时不要使用：**
- 不要传错城镇——`GetProgressOfBuilding` 和 `GetDaysToComplete` 都会断言并返回 0 或 -1。
- 不要把 `GetProgressOfBuilding` 返回的 0 当作「刚开工」——它也可能是「传错城镇」。
- 不要期望 `ChangeDefaultBuilding` 校验 `newDefault` 属于该 town——它不校验。

## 成员说明

| 成员 | 用途、副作用与时机 |
|------|-------------------|
| `public static void CheckIfBuildingIsComplete(Building building)` | 进度够时升级或封顶，然后 `Dequeue()` 摘队首。调用方必须保证这个 building 就是队首。`BuildingHelper.cs:16` |
| `public static void ChangeDefaultBuilding(Building newDefault, Town town)` | 先把该镇所有建筑的 `IsCurrentlyDefault` 置 false，再把 `== newDefault` 的置 true。**不校验** `newDefault` 属于该 town。`BuildingHelper.cs:33` |
| `public static void ChangeCurrentBuildingQueue(List<Building> buildings, Town town)` | `Clear()` 后按传入顺序 `Enqueue`；遇到 `IsDailyProject` 的项会断言并跳过。`BuildingHelper.cs:49` |
| `public static float GetProgressOfBuilding(Building building, Town town)` | 只读：返回 `BuildingProgress / GetConstructionCost()`。传错城镇会断言并返回 `0f`。`BuildingHelper.cs:66` |
| `public static int GetDaysToComplete(Building building, Town town)` | 预估剩余天数。`town.Construction` 为 0 时返回 `-1`。boost 成本按 `IsCastle` 取两个字段（1.4.7 特有写法）。`BuildingHelper.cs:83` |
| `public static int GetTierOfBuilding(BuildingType buildingType, Town town)` | 在 `town.Buildings` 里按 `BuildingType` 找第一个匹配，返回 `CurrentLevel`。参数是 `BuildingType` 不是 `Building`。`BuildingHelper.cs:119` |
| `public static void BoostBuildingProcessWithGold(int gold, Town town)` | 把 `town.BoostBuildingProcess` 设为 `gold`，按差额走 `GiveGoldAction` 补/退。本类唯一动玩家金库的方法，用的是 `Hero.MainHero`。`BuildingHelper.cs:133` |

## 示例

```csharp
// 一次「城镇建造」面板刷新要读的全部数字，外加两个写操作
public static void RefreshBuildingPanel(Building building, Town town)
{
    float progress = BuildingHelper.GetProgressOfBuilding(building, town);   // 0..1；传错城镇会断言并返回 0
    int days = BuildingHelper.GetDaysToComplete(building, town);             // -1 = 该镇没有建造力
    int tier = BuildingHelper.GetTierOfBuilding(building.BuildingType, town);

    BuildingHelper.BoostBuildingProcessWithGold(town.BoostBuildingProcess + 5000, town); // 差额由 GiveGoldAction 补/退
    BuildingHelper.ChangeDefaultBuilding(building, town);
    BuildingHelper.ChangeCurrentBuildingQueue(new List<Building> { building }, town);
    Debug.Print($"progress={progress} days={days} tier={tier} campaign={Campaign.Current != null}");
}
```

## 风险与边界

- `CheckIfBuildingIsComplete` 只要进度够就**一定** `Dequeue()`（摘队首），调用方必须保证这个 building 就是队首。
- `ChangeDefaultBuilding` **不校验** `newDefault` 属于该 town ⇒ 传别的镇的建筑进来会「全 false」。
- `GetProgressOfBuilding` 返回 0 既可能是「刚开工」也可能是「传错城镇」。
- `GetDaysToComplete` 的 boost 成本在 1.4.7 是「按 `IsCastle` 取两个字段」，不是调方法——与 1.5.3 不同。
- `BoostBuildingProcessWithGold` 是本类唯一动玩家金库的方法，用的是 `Hero.MainHero`（**不是** `town.OwnerClan.Leader`）。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models` 是这些规则的真源。
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) —— 想替换默认规则时在注册期挂钩。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[BarterHelper](../BarterHelper)
