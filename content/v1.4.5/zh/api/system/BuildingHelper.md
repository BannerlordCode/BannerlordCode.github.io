---
title: "BuildingHelper"
description: "读取并修改 Town 的建筑进度、默认项目、队列、层级和 reserve boost。"
---
# BuildingHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class BuildingHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/BuildingHelper.cs`

## 一句话职责

`BuildingHelper` 是 town development 使用的直接桥接层，用于检查 [Building](../../campaign/Building)，并修改 [Town](../../campaign/Town) 的默认项目、队列、完成状态和 reserve。

## 心智模型

这个类混合了两种必须分开理解的职责：

- **查询：** `GetProgressOfBuilding`、`GetDaysToComplete` 和 `GetTierOfBuilding` 检查属于给定 town 的建筑。
- **mutation：** `CheckIfBuildingIsComplete`、`ChangeDefaultBuilding`、`ChangeCurrentBuildingQueue` 和 `BoostBuildingProcessWithGold` 直接改变建筑或 town 状态。

源码契约以 town 为所有者。来自其他 town 的 `Building` 不能作为查询方法的合法输入；实现会 assert 并返回 `0`。队列和完成方法也假设调用方正在操作 town 的真实 development 流程。因此原版 `BuildingsCampaignBehavior` 和 town-management view model 都是先决定项目，再调用 helper。

## 什么时候使用，什么时候不要使用

- **适合：** 调用方已经持有相关 `Town` 和其 `Building` 对象，并正在执行 town development 流程时使用。
- **适合：** 使用与原版 town-management UI 相同的计算显示当前项目百分比或预计天数。
- **适合：** UI 已过滤 daily project 后，应用用户选择的默认项目或队列。
- **不要：** 把它当作建筑工厂；它不会创建建筑，也不会替 town 选择合法项目。
- **不要把 daily project 传给 `ChangeCurrentBuildingQueue`：** 该方法会 assert，而不是把它加入队列。
- **不要对任意建筑调用 `CheckIfBuildingIsComplete`：** 完成后它会从 town 队列出队，并假设调用方传入的是当前 development 项目。

## 公开入口

### `CheckIfBuildingIsComplete`

```csharp
public static void CheckIfBuildingIsComplete(Building building)
```

当 `BuildingProgress` 达到 `GetConstructionCost()` 时，如果等级低于 3 就升级；等级到达 3 时把进度钳制到 construction cost，并从 `building.Town.BuildingsInProgress` 出队。

### `ChangeDefaultBuilding`

```csharp
public static void ChangeDefaultBuilding(Building newDefault, Town town)
```

先清除 town 内所有建筑的 `IsCurrentlyDefault`，再给 `newDefault` 设置该标记。方法不会验证 `newDefault` 属于该 town；传入外部对象可能导致 town 没有默认项目。

### `ChangeCurrentBuildingQueue`

```csharp
public static void ChangeCurrentBuildingQueue(List<Building> buildings, Town town)
```

清空现有 `BuildingsInProgress` 队列，再按 list 顺序加入每个非 daily building。遇到 daily project 会 failed assert，不会入队。

### `GetProgressOfBuilding`

```csharp
public static float GetProgressOfBuilding(Building building, Town town)
```

当建筑存在于 `town.Buildings` 时返回 `BuildingProgress / GetConstructionCost()`。如果不存在，实现会 assert 并返回 `0f`；返回值是比例，不是百分数。

### `GetDaysToComplete`

```csharp
public static int GetDaysToComplete(Building building, Town town)
```

它使用 town 的整数 construction power、当前 reserve boost、castle/town boost cost 和 `CalculateDailyConstructionPowerWithoutBoost`。活动计算至少返回 `1`；整数 `town.Construction` 为零时返回 `-1`；建筑归属 assert 失败后返回 `0`。

### `GetTierOfBuilding`

```csharp
public static int GetTierOfBuilding(BuildingType buildingType, Town town)
```

在 town 建筑中寻找匹配的 [BuildingType](../../campaign/BuildingType)，并返回其 `CurrentLevel`。找不到类型会 assert 并返回 `0`。

### `BoostBuildingProcessWithGold`

```csharp
public static void BoostBuildingProcessWithGold(int gold, Town town)
```

通过 `GiveGoldAction` 调整玩家金币差额，然后把 `town.BoostBuildingProcess` 精确设置为 `gold`。参数是 reserve 的目标值，不是要额外增加的数量。

## 真实当前 Campaign 流程

原版 town-management UI 从真实 town 读取当前项目，并使用 helper 做展示。Campaign 侧调用方可以使用同样的保护结构：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

Town town = MobileParty.MainParty.CurrentSettlement?.Town;
if (town?.CurrentBuilding != null)
{
    Building current = town.CurrentBuilding;
    float progress = BuildingHelper.GetProgressOfBuilding(current, town);
    int days = BuildingHelper.GetDaysToComplete(current, town);
    Debug.Print($"{current.Name}: {progress:P0}, days={days}");
}
```

如果确实需要修改 reserve，可以用原版 model 的真实 boost cost 计算下一个目标，而不是硬编码 castle/town 假设：

```csharp
int nextReserve = town.BoostBuildingProcess
    + Campaign.Current.Models.BuildingConstructionModel.GetBoostCost(town);
BuildingHelper.BoostBuildingProcessWithGold(nextReserve, town);
```

两次调用都操作当前 Campaign 状态。队列、默认项目和完成 mutation 应保留在所属 town-management 或 Campaign behavior 的转换阶段。

## 依赖与所有权

- [Town](../../campaign/Town) 持有 `Buildings`、`BuildingsInProgress`、`Construction`、`BoostBuildingProcess` 以及默认/当前项目关系。
- [Building](../../campaign/Building) 持有进度、等级、construction cost 和所属 town。
- [BuildingType](../../campaign/BuildingType) 提供 daily-project 分类和类型身份。
- [DefaultBuildingConstructionModel](../../campaign/DefaultBuildingConstructionModel) 提供预计天数使用的 boost cost 与 daily construction power。
- `BuildingsCampaignBehavior` 负责 daily project 选择、construction tick 和完成时机；[Town](../../campaign/Town) 管理 UI 负责用户驱动的队列、默认项目和 reserve 选择。
- `BoostBuildingProcessWithGold` 使用 `GiveGoldAction` 和 `Hero.MainHero`；因此该 helper 绑定当前玩家 Campaign，而不是任意 Hero 经济。

## 风险与存档边界

- `CheckIfBuildingIsComplete` 不检查传入建筑是否是队列头就会出队；只应在当前 construction transition 中调用。
- 查询方法在建筑或类型不属于 town 时会 assert。assert 后返回的 `0` 是错误回退，不是合法进度或层级。
- `GetProgressOfBuilding` 可能除以建筑 construction cost；应使用已注册且 cost 有效的真实建筑。
- `GetDaysToComplete` 使用整数截断和 reserve threshold，是匹配原版 UI 的估计值，不是通用 scheduler。
- `ChangeCurrentBuildingQueue` 在逐项处理前就清空现有队列；调用前先过滤 daily project。
- `ChangeDefaultBuilding` 在 `newDefault` 不属于 `town.Buildings` 时可能清除当前全部默认标记。
- 方法会修改已存档的 town/building 状态，但 `BuildingHelper` 没有独立存档字段；持久化由被修改的 Campaign 对象与 behavior 负责。

## 版本注记

本页按 v1.4.5 `BuildingHelper.cs` 编写。七个公开方法有意混合查询和 mutation 边界；所属 construction behavior 仍负责时机与验证。

## 导航

- [↑ API 系统索引](../)
- [相关：Building](../../campaign/Building)
- [相关：BuildingType](../../campaign/BuildingType)
- [相关：Town](../../campaign/Town)
- [相关：DefaultBuildingConstructionModel](../../campaign/DefaultBuildingConstructionModel)
