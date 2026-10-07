---
title: "BuildingHelper"
description: "城镇建造系统的静态工具箱：推进工程完工、切换默认工程、重排建造队列、估算剩余天数，以及用金币加速。"
---

# BuildingHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class BuildingHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/BuildingHelper.cs`

## 概述

`BuildingHelper` 把「城镇建造」这件事里所有需要跨对象协调的读写动作收进了一个静态类。它自己不保存任何状态：真正的状态分散在 `Building`（`BuildingProgress`、`CurrentLevel`、`GetConstructionCost()`）和 `Town`（`BuildingsInProgress` 队列、`Construction` 建造力、`BoostBuildingProcess` 加速投入）上。这个 helper 的职责就是让调用方不必记住「进度该跟谁比」「队列该谁来摘」「加速该动谁的钱包」这些规则。

对 mod 开发者来说，它最常出现的场景有三个：每日结算时把已完成的工程从队列里推走、打开城镇建造面板时算出要展示的数字、以及玩家点「加速」时把钱和加速值对上。

## 心智模型

理解这个类的关键是把「工程本身」和「工程的排队顺序」分开看：

- **工程状态在 `Building` 上。** 一个建筑是否完工，判据是 `(float)building.GetConstructionCost() <= building.BuildingProgress`。等级上限是 3，`CurrentLevel < 3` 才会 `LevelUp()`，到了 3 就把 `BuildingProgress` 直接顶到造价，表示「这个建筑没有下一级了」。
- **排队顺序在 `Town.BuildingsInProgress` 上。** 这是一个队列（`Dequeue` 摘队首），helper 从不检查你传进来的 `building` 是不是队首，它只负责「条件满足就摘」。因此「谁在什么时候调用 `CheckIfBuildingIsComplete`」直接决定队列会不会错位。
- **默认工程不属于建造队列。** 日常工程（`BuildingType.IsDailyProject`）是城镇的常驻项目，用 `IsCurrentlyDefault` 这个布尔标记表示，和 `BuildingsInProgress` 是两套东西。把日常工程塞进建造队列会被断言并静默丢弃。
- **陆/海、日常/建造这些语义没有独立字段。** 例如「是不是默认工程」只看 `IsCurrentlyDefault`，「这个建筑在这个镇里吗」只能靠遍历 `town.Buildings` 比较引用。helper 里多处断言（`Debug.FailedAssert`）正是这种「没有强类型约束」的补偿。

一句话：`BuildingHelper` 是规则集合，不是数据容器；它假设调用方已经拿到了正确的 `Building` + `Town` 配对。

## 怎么用

### 怎么拿到它

静态类，没有实例、没有单例、没有初始化步骤，直接用 `BuildingHelper.方法名(...)` 调用即可。它也不需要注册到 `CampaignGameStarter`，因为里面没有任何可替换的策略——想换算法请改 `BuildingConstructionModel`，而不是改这个类。

调用前你必须自己保证两件事：`building` 确实属于 `town`（即出现在 `town.Buildings` 里），以及当你要推进完工时，`building` 就是 `town.BuildingsInProgress` 的队首。

### 典型用法

- **每日结算**：城镇侧推进当前工程时调用 `CheckIfBuildingIsComplete`，由它负责升级与出队。
- **面板刷新**：`GetProgressOfBuilding` + `GetDaysToComplete` + `GetTierOfBuilding` 三个只读方法凑出一屏要展示的数字。
- **玩家操作**：`BoostBuildingProcessWithGold` 处理加速投入，`ChangeDefaultBuilding` 与 `ChangeCurrentBuildingQueue` 处理玩家的队列编辑。

### 最容易踩的坑

1. **`CheckIfBuildingIsComplete` 是无条件出队的。** 只要进度够，它一定执行 `building.Town.BuildingsInProgress.Dequeue()`，而 `Dequeue` 摘的是队首——传进来的不是队首，就会把别人的工程摘掉。
2. **`ChangeDefaultBuilding` 不校验归属。** 如果你传的建筑不属于这个 `town`，结果是该镇所有建筑的 `IsCurrentlyDefault` 全被置 false，一个默认工程都不剩。
3. **`ChangeCurrentBuildingQueue` 会静默丢弃日常工程。** 遇到 `building.BuildingType.IsDailyProject` 为真的项，它会 `Debug.FailedAssert` 然后跳过不入队。
4. **`GetProgressOfBuilding` 返回 0 有歧义。** 「刚开工」和「传错城镇」都是 0，只能靠日志里的断言去区分。
5. **`GetDaysToComplete` 返回 -1 不是「明天完成」。** -1 表示该镇 `Construction` 为 0，也就是完全没有建造力。
6. **`GetTierOfBuilding` 收的是 `BuildingType` 而不是 `Building`**，别把实例直接传进去。
7. **只有 `BoostBuildingProcessWithGold` 会动钱，而且动的是 `Hero.MainHero`。** 它不看 `town.OwnerClan.Leader`，所以对非玩家城镇调用时语义要自己拿捏。

## 关键成员

- `CheckIfBuildingIsComplete(Building building)` —— 每日结算的推进入口：进度达到造价就升一级，已满 3 级则把进度顶到造价，随后把这个工程从建造队列队首摘掉。
- `ChangeDefaultBuilding(Building newDefault, Town town)` —— 重设城镇的默认工程标记：先清空该镇所有建筑的 `IsCurrentlyDefault`，再把与 `newDefault` 相同的那一个点亮。
- `ChangeCurrentBuildingQueue(List<Building> buildings, Town town)` —— 用一份新列表整体覆盖建造队列，先 `Clear()` 再按传入顺序逐个入队，日常工程会被断言并跳过。
- `GetProgressOfBuilding(Building building, Town town)` —— 算出 0~1 的完工比例，只有在该建筑确实属于这个城镇时才返回真实值。
- `GetDaysToComplete(Building building, Town town)` —— 结合当前战役的 `BuildingConstructionModel` 与城镇建造力估算剩余天数，考虑 `BoostBuildingProcess` 是否够触发加速；该镇没有建造力时返回 -1。
- `GetTierOfBuilding(BuildingType buildingType, Town town)` —— 按建筑类型在该镇建筑列表里找第一个匹配项，返回它当前的等级。
- `BoostBuildingProcessWithGold(int gold, Town town)` —— 把城镇的加速投入设为指定金币数，差额通过 `GiveGoldAction.ApplyBetweenCharacters` 在玩家金库上补收或退还，相等时不动钱。

## 真实示例

```csharp
// 一次「城镇建造」面板刷新要读的全部数字，外加两个写操作
public static void RefreshBuildingPanel(Building building, Town town)
{
    // 天数估算需要当前战役的建造模型；想换算法就换这个模型，而不是改 helper
    BuildingConstructionModel model = Campaign.Current.Models.BuildingConstructionModel;
    int boostCost = model.GetBoostCost(town);                              // 触发加速所需的投入门槛

    float progress = BuildingHelper.GetProgressOfBuilding(building, town); // 0..1；传错城镇会断言并返回 0
    int days = BuildingHelper.GetDaysToComplete(building, town);           // -1 = 该镇没有建造力
    int tier = BuildingHelper.GetTierOfBuilding(building.BuildingType, town);

    if (town.BoostBuildingProcess < boostCost)
    {
        // 差额由 GiveGoldAction 在 Hero.MainHero 上补/退
        BuildingHelper.BoostBuildingProcessWithGold(town.BoostBuildingProcess + 5000, town);
    }

    BuildingHelper.ChangeDefaultBuilding(building, town);
    BuildingHelper.ChangeCurrentBuildingQueue(new List<Building> { building }, town);
}
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models` 是建造/商队这些规则的真源
- ↔ [GameModels](../../campaign/GameModels) —— 强类型属性容器，`BuildingConstructionModel` 从这里读
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter) —— 想换掉默认建造模型时在注册期挂钩

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
