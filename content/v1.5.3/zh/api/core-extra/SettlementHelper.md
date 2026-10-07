---
title: "SettlementHelper"
description: "聚落相关的静态工具箱：在聚落、部队与坐标之间做分类最近邻搜索（城镇、城堡、村庄、藏身处、要塞），随机选取聚落与携带物品，把敌方村民带出聚落，以及驻军饥饿检查、名人补生成与邻居评分等战役日常逻辑。"
---

# SettlementHelper

**命名空间：** `Helpers`
**Type:** `public static class SettlementHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## 概述

`SettlementHelper` 把「聚落」这件事里所有需要遍历 `Settlement.All` 做搜索或挑选的静态方法收进了一个类。它覆盖四类职责：一是**最近邻搜索**——从聚落、部队或任意坐标出发，按城镇、城堡、村庄、藏身处、要塞分别找最近的一个；二是**随机选取**——随机聚落、随机藏身处、随机城镇、按性别随机取村民携带的物品名；三是**聚落日常模拟**——把敌方村民带出聚落、按需生成名人、驻军饥饿检查；四是**驻军与外交读数**——驻军变化的可解释数值、聚落对某家族的邻居评分。

对 mod 开发者来说，它最常出现的场景是：写一个每 tick 或每日结算的 campaign behavior 时，需要「离这支部队最近的城镇是哪座」「这个聚落里有哪些英雄」「驻军是不是在挨饿」这类问题。这些问题的共同点是答案分散在 `Settlement`、`Town`、`MobileParty`、`Hero` 多个对象上，而这个 helper 把它们收敛成一行调用。

## 心智模型

理解这个类的关键是抓住「一个模式、两类入口、三个参数」：

- **一个模式：遍历 + 过滤 + 取极值。** 所有 `FindNearestXxx` 方法都是同一个形状：遍历 `Settlement.All`，先用 `Func<Settlement, bool> condition` 过滤（传 null 表示不过滤），再按 `Position.Distance` 取最小（`FindFurthestFortificationToSettlement` 取最大）。没有空间索引，聚落数量级下线性扫描就是全部成本。
- **两类入口：从聚落出发 vs 从部队出发。** `FindNearestTownToSettlement` 与 `FindNearestTownToMobileParty` 是成对出现的：前者以某个聚落为圆心，后者以部队当前位置为圆心。部队版内部先取部队坐标，再走同一套距离比较。写新搜索时照抄这个成对模式即可。
- **三个参数：圆心、导航能力、过滤谓词。** `MobileParty.NavigationType navCapabilities` 声明「按什么移动方式算可达」——步行、航海还是任意；`condition` 让调用方注入「只找敌对的」「只找有驻军的」这类业务过滤。helper 自己不做语义判断，判断权在调用方。
- **它是规则集合，不是数据容器。** 类是 static 的，不保存任何状态（唯一的静态字段 `_stuffToCarryIndex` 只是随机序列的游标）。真正的状态在 `Settlement`、`Town`、`MobileParty` 上，helper 只负责「按规则读、按规则写」。

一句话：把 `SettlementHelper` 想成「聚落查询的 LINQ 扩展方法集」——你给它圆心和过滤条件，它给你答案，仅此而已。

## 怎么用

### 怎么拿到它

静态类，没有实例、没有单例、没有初始化步骤，直接 `SettlementHelper.方法名(...)` 调用。不需要注册到 `CampaignGameStarter`，里面也没有可替换的策略——想换算法请改对应的 `GameModel`（如驻军、名人模型），而不是改这个类。

### 典型用法

- **战役行为里的每日/每 tick 结算**：`IsGarrisonStarving` 检查驻军断粮，`SpawnNotablesIfNeeded` 保证聚落里有足够的名人，`TakeEnemyVillagersOutsideSettlements` 在聚落易主后把敌方村民带出去。
- **寻路与目标选择**：`FindNearestTownToMobileParty` 找部队要去的下一个城镇，`FindNearestHideoutToSettlement` 找藏身处，`FindNextSettlementAroundMobileParty` 在聚落间循环推进。
- **生成与刷新**：`GetBestSettlementToSpawnAround` 决定英雄在哪个聚落附近登场，`GetAllHeroesOfSettlement` 枚举聚落内所有英雄，`GetRandomTown` / `FindRandomSettlement` 提供随机性。
- **UI 与文本**：`GetGarrisonChangeExplainedNumber` 把驻军增减翻译成可展示的数字，`GetNeighborScoreForConsideringClan` 为外交决策打分。

### 调用前要准备什么

- 确认圆心对象有效：部队版方法要求 `MobileParty` 已生成且位置有效；坐标版直接传 `CampaignVec2`。
- 想清楚 `NavigationType`：它决定「可达」的语义，传错了会得到逻辑上不可达的结果。
- 过滤谓词尽量收紧：`Settlement.All` 是全战役聚落列表，condition 越宽，扫描越慢。

### 调用之后会发生什么

- 搜索类方法只读，不改任何状态；找不到时返回 `null`，调用方必须自己处理 null。
- `TakeEnemyVillagersOutsideSettlements`、`SpawnNotablesIfNeeded`、`GetRandomStuff` 会改状态（村民位置、名人、随机游标），不要在只读上下文里调。
- `GetRandomStuff` 的随机序列由静态游标驱动，读档后游标不重置——这是设计而非 bug。

### 最容易踩的坑

1. **部队版与聚落版不要混用。** 部队在移动，聚落是静态的；用错版本会得到「按错误圆心算」的答案，而且不报错。
2. **`FindFurthestFortificationToSettlement` 的 out 参数是距离。** 调用前不要假设它一定被赋值，失败路径下 out 保持原值。
3. **`GetRandomStuff` 的游标是静态的。** 多线程或确定性回放场景下不要依赖它的序列。
4. **`condition` 传 null 与传「恒真谓词」等价**，但前者更省一次委托调用；不过为了可读性，业务过滤还是要显式写。

## 关键成员

- **GetRandomStuff**（`SettlementHelper.cs:20`）— 按性别从两张携带物品表里循环取一个物品名，静态游标自增，用于村民生成时给携带物一个确定性的"随机"序列。
- **FindNearestSettlementToSettlement**（`SettlementHelper.cs:36`）— 以指定聚落为圆心，在导航能力与过滤条件约束下找最近的聚落（不含自身语义由调用方保证）。
- **FindNearestSettlementToMobileParty**（`SettlementHelper.cs:57`）— 以部队当前位置为圆心找最近聚落，是部队寻路目标选择的主力入口。
- **FindNearestSettlementToPoint**（`SettlementHelper.cs:78`）— 以任意坐标为圆心找最近聚落，初值距离取 `Campaign.MapDiagonal * 2f` 保证任何真实聚落都能覆盖。
- **FindNearestHideoutToSettlement**（`SettlementHelper.cs:98`）— 从聚落出发找最近藏身处，返回 `Hideout` 而非 `Settlement`，用于匪徒/藏身处相关逻辑。
- **FindNearestHideoutToMobileParty**（`SettlementHelper.cs:123`）— 从部队出发找最近藏身处，部队版与聚落版成对。
- **FindNearestTownToSettlement**（`SettlementHelper.cs:148`）— 从聚落出发找最近城镇（`Town` 语义，即聚落中类型为城镇者）。
- **FindNearestTownToMobileParty**（`SettlementHelper.cs:173`）— 从部队出发找最近城镇，部队巡逻、征粮、贸易目标选择的常用入口。
- **FindNextSettlementAroundMobileParty**（`SettlementHelper.cs:198`）— 以距离与数量参数循环取部队周围的下一个聚落，用于多点巡逻或连续搜刮。
- **FindNearestCastleToSettlement**（`SettlementHelper.cs:213`）— 从聚落出发找最近城堡。
- **FindNearestCastleToMobileParty**（`SettlementHelper.cs:234`）— 从部队出发找最近城堡。
- **FindNearestFortificationToSettlement**（`SettlementHelper.cs:255`）— 从聚落出发找最近要塞（城堡与城镇的合集语义）。
- **FindNearestFortificationToMobileParty**（`SettlementHelper.cs:279`）— 从部队出发找最近要塞。
- **FindFurthestFortificationToSettlement**（`SettlementHelper.cs:303`）— 在一组城镇中找离指定聚落最远要塞，`out float` 返回该距离，用于"最危险方向"类判断。
- **FindNearestVillageToSettlement**（`SettlementHelper.cs:322`）— 从聚落出发找最近村庄。
- **FindNearestVillageToMobileParty**（`SettlementHelper.cs:347`）— 从部队出发找最近村庄，征粮、劫掠目标选择常用。
- **FindRandomSettlement**（`SettlementHelper.cs:390`）— 在过滤条件下随机取一个聚落，条件为 null 时全表随机。
- **FindRandomHideout**（`SettlementHelper.cs:396`）— 在过滤条件下随机取一个藏身处。
- **TakeEnemyVillagersOutsideSettlement**（`SettlementHelper.cs:402`）— 聚落易主后把属于敌方的村民带出聚落，是占领结算链的一环。
- **GetRandomTown**（`SettlementHelper.cs:477`）— 取指定家族的随机一个城镇，用于家族级随机事件的目标选择。
- **GetBestSettlementToSpawnAround**（`SettlementHelper.cs:503`）— 为英雄选择最佳生成聚落，综合距离与聚落状态打分。
- **GetAllHeroesOfSettlement**（`SettlementHelper.cs:575`）— 枚举聚落内所有英雄，布尔参数控制是否包含特定类别。
- **IsGarrisonStarving**（`SettlementHelper.cs:606`）— 判断驻军是否处于断粮状态，每日结算链的检查项。
- **SpawnNotablesIfNeeded**（`SettlementHelper.cs:617`）— 检查并按需生成名人，保证聚落名人数量满足模型要求。
- **GetGarrisonChangeExplainedNumber**（`SettlementHelper.cs:678`）— 把驻军增减翻译为可解释数值，供 UI 或日志展示。
- **GetNeighborScoreForConsideringClan**（`SettlementHelper.cs:699`）— 计算聚落对某家族的邻居评分，为外交与扩张决策提供量化依据。

## 真实示例

```csharp
// SettlementHelper.cs:20 —— 按性别取携带物品名，静态游标保证序列确定性
public static string GetRandomStuff(bool isFemale)
{
    string text;
    if (isFemale)
    {
        text = SettlementHelper.StuffToCarryForWoman[SettlementHelper._stuffToCarryIndex % SettlementHelper.StuffToCarryForWoman.Length];
    }
    else
    {
        text = SettlementHelper.StuffToCarryForMan[SettlementHelper._stuffToCarryIndex % SettlementHelper.StuffToCarryForMan.Length];
    }
    SettlementHelper._stuffToCarryIndex++;
    return text;
}
```

```csharp
// SettlementHelper.cs:78 —— 从任意坐标找最近聚落的标准形状：遍历 + 过滤 + 取最小距离
public static Settlement FindNearestSettlementToPoint(in CampaignVec2 point, Func<Settlement, bool> condition = null)
{
    Settlement settlement = null;
    float num = Campaign.MapDiagonal * 2f;
    foreach (Settlement settlement2 in Settlement.All)
    {
        if (condition == null || condition(settlement2))
        {
            float num2 = settlement2.Position.Distance(point);
            if (num2 < num)
            {
                settlement = settlement2;
                num = num2;
            }
        }
    }
    return settlement;
}
```

一个把搜索与日常结算串起来的调用片段：

```csharp
// 每日结算：先查驻军断粮，再按需补名人，最后把敌方村民带出去
public static void DailySettlementTick(Settlement settlement)
{
    if (SettlementHelper.IsGarrisonStarving(settlement))
    {
        // 断粮会触发驻军流失，具体规则在驻军模型里
    }
    SettlementHelper.SpawnNotablesIfNeeded(settlement);
    SettlementHelper.TakeEnemyVillagersOutsideSettlements(settlement);

    // 部队目标选择：找最近城镇作为下一个巡逻目标
    MobileParty party = settlement.OwnerClan.Leader?.PartyBelongedTo;
    if (party != null)
    {
        Town next = SettlementHelper.FindNearestTownToMobileParty(
            party, MobileParty.NavigationType.All, t => t.OwnerClan != settlement.OwnerClan);
        if (next != null)
        {
            party.SetMoveGoToSettlement(next.Settlement);
        }
    }
}
```

## 参见

- ↔ [BuildingHelper](../BuildingHelper) — 城镇建造队列与工程完工规则，与本类的城镇/城堡搜索互补
- ↔ [TownHelpers](../TownHelpers) — 城镇（`Town`）维度的另一组静态工具，本类负责「找城镇」，它负责「读城镇」
- ↔ [GameModels](../../campaign/GameModels) — 驻军、名人等规则的真源模型，本类的方法只是这些模型的调用入口
- ↔ [Campaign](../../campaign/Campaign) — `Campaign.Current.Models` 与 `Campaign.MapDiagonal` 等全局读数的来源

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
