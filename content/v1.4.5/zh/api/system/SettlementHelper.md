---
title: "SettlementHelper：按距离查询聚落与战役转换"
description: "SettlementHelper 在 v1.4.5 中搜索聚落、Town、Village、Castle 和 Hideout，并提供少量会改变队伍、Notable、驻军或出生支持状态的方法。"
---
# SettlementHelper

**命名空间：** `Helpers`
<br>**模块：** `TaleWorlds.CampaignSystem`
<br>**类型：** `public static class SettlementHelper`
<br>**基类：** `System.Object`
<br>**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/SettlementHelper.cs`

## 一句话职责

`SettlementHelper` 为战役系统提供按距离和条件过滤的聚落搜索，同时暴露少量明确涉及队伍、Notable、驻军和出生支持的世界状态操作；它不拥有聚落集合，也不替代战役 Model 的路线或所有权决策。

## 心智模型

查询族会遍历当前战役集合，并把移动距离交给带有 `MobileParty.NavigationType` 的 `DistanceHelper`。返回值取决于调用方要的领域组件：可以是 `Town`、`Village`、`Hideout` 或 `Settlement`；没有候选超过初始距离边界时返回 null。随机查询先收集符合条件的聚落，再随机选择。类中还包含离开队伍、创建 Notable 和计算驻军变化的方法，它们不能和只读搜索混用。

## 何时使用，何时不要使用

- 任务、AI、UI 或旅行流程需要按导航能力和可选聚落谓词获取当前候选时，使用最近查询。
- 明确需要随机当前候选并能处理 null 时，使用 `FindRandomSettlement` 或 `FindRandomHideout`。
- 需要聚落中的队伍首领、无队伍 Hero 以及可选囚犯 Hero 时，使用 `GetAllHeroesOfSettlement`。
- UI 或 Model 需要解释驻军变化时，使用 `GetGarrisonChangeExplainedNumber`；它组合招募行为与逃兵结果，但不会自己招募士兵。
- 不要把最近聚落当成所有权决定或必定可达的路线。Helper 只比较当前距离并应用过滤。
- 不要从重复的展示刷新调用 `TakeEnemyVillagersOutsideSettlements` 或 `SpawnNotablesIfNeeded`；它们可能调用 Action、移动队伍或创建 Hero。

## 依赖关系与调用链

```text
Quest / Model / ViewModel
          |
          v
SettlementHelper -> Settlement.All / Town.AllTowns / Village.All / Hideout.All
          |
          +-> DistanceHelper + NavigationType
          +-> LeaveSettlementAction / EnterSettlementAction（明确变更）
```

- [`Settlement`](../../campaign/Settlement)、[`MobileParty`](../../campaign/MobileParty)、[`Town`](../../campaign/Town)、[`Village`](../../campaign/Village) 和 [`Hero`](../../campaign/Hero) 持有返回或检查的对象。
- [`DistanceHelper`](../DistanceHelper) 与战役 `MapDistanceModel` 决定可达距离；`NavigationType` 是真实输入，不是装饰性参数。
- [`LeaveSettlementAction`](../../campaign-ext/LeaveSettlementAction) 和 [`EnterSettlementAction`](../../campaign-ext/EnterSettlementAction) 是生命周期 Helper 使用的变更边界。

## 公开成员按契约分组

| 分组 | 成员 | 源码确认的行为 |
|---|---|---|
| 最近查询 | `FindNearestSettlementToSettlement`、`FindNearestSettlementToMobileParty`、`FindNearestSettlementToPoint`、`FindNearestHideoutToSettlement`、`FindNearestHideoutToMobileParty`、`FindNearestTownToSettlement`、`FindNearestTownToMobileParty`、`FindNearestCastleToSettlement`、`FindNearestCastleToMobileParty`、`FindNearestVillageToSettlement`、`FindNearestVillageToMobileParty` | 遍历当前集合，应用可选谓词并比较距离，返回匹配组件或 null。聚落到点使用位置距离；队伍/聚落搜索使用 `DistanceHelper`。 |
| 要塞与迭代 | `FindNearestFortificationToSettlement`、`FindNearestFortificationToMobileParty`、`FindFurthestFortificationToSettlement`、`FindNextSettlementAroundMobileParty` | 比较 Town 与 Castle，返回更近或最远结果，或返回 `Settlement.All` 中下一个符合条件的索引。继续扫描方法找不到距离内候选时返回 `-1`。 |
| 随机与派系选择 | `FindRandomSettlement`、`FindRandomHideout`、`GetRandomTown` | 从过滤后的当前集合选择对象。`GetRandomTown` 包含 Town 或 Village，并可按 `Clan` 过滤；它假定战役集合和候选随机范围已经有效。 |
| 出生与检查 | `GetBestSettlementToSpawnAround`、`GetAllHeroesOfSettlement`、`GetRandomStuff` | 为 Hero 评分安全聚落，枚举队伍首领/聚落 Hero/可选囚犯 Hero，或从按性别区分的轮换列表返回携带物品 ID。`GetRandomStuff` 每次调用都会推进进程内静态索引；它们不会自己生成 Hero 或移动队伍。 |
| 驻军与邻接 | `IsGarrisonStarving`、`GetGarrisonChangeExplainedNumber`、`GetNeighborScoreForConsideringClan` | 读取食物和 Model/邻接状态，或把招募和逃兵组合为带解释的驻军变化。 |
| 明确变更 | `TakeEnemyVillagersOutsideSettlements`、`SpawnNotablesIfNeeded` | 设置队伍停留，调用 `LeaveSettlementAction.ApplyForParty`，并可能在 Model 驱动的 Notable 选择后调用 `EnterSettlementAction.ApplyForCharacterOnly`。 |

## 真实示例：查找可达 Town，不改变地图

下面遵循 Campaign UI 和 StoryMode 的获取方式。谓词接收的正是 Helper 遍历的实时聚落对象：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public static Town FindSafeTownForParty()
{
    MobileParty party = MobileParty.MainParty;
    return SettlementHelper.FindNearestTownToMobileParty(
        party,
        party.NavigationCapability,
        settlement => settlement.IsTown && !settlement.IsUnderSiege);
}
```

结果可能是 null，设置移动目标前必须检查。它只是距离结果，不保证在下一次 tick 或 Action 后队伍仍能进入该 Town。

## 搜索、哨兵与变更边界

大多数最近搜索把最佳距离初始化为 `Campaign.MapDiagonal * 2f`；没有候选能超过这个边界时结果保持 null。`FindNextSettlementAroundMobileParty` 从 `lastIndex` 之后开始扫描，找不到距离内候选时返回 `-1`。`FindFurthestFortificationToSettlement` 在候选列表为空时通过 `furthestDistance` 报告 `float.MinValue`。

`FindNearestFortificationToSettlement` 及移动队伍版本比较最近 Town 与最近 Castle，但返回类型是 `Settlement`。在解引用前必须同时处理选中的聚落和一侧为空的情况。Hideout 与 Village 方法通过选中的 Settlement 返回组件，也可能返回 null。

`TakeEnemyVillagersOutsideSettlements` 可能反复对敌对 Caravan 或 Villager 调用 `LeaveSettlementAction.ApplyForParty`，并把目标队伍设置为停留。`SpawnNotablesIfNeeded` 使用 `NotableSpawnModel`、随机机会、Occupation 数量和 `HeroCreator.CreateNotable`，最后调用 `EnterSettlementAction`。这些方法属于战役生命周期代码，不是 UI 查询。

## 风险与存档边界

- 很多方法要求实时 Campaign 地图以及已初始化的 `Settlement.All`、`Town.AllTowns` 或 `Village.All`；不要在模块构造或战役读档完成前调用。
- 距离结果依赖 `NavigationType` 和当前 `DistanceHelper`/MapDistanceModel。地图状态、港口、海上旅行或战役时间改变后必须重新检查。
- `GetRandomTown` 按 Town/Village 候选数量计算随机索引。空候选集合不属于它预期的生命周期边界。
- `GetBestSettlementToSpawnAround` 是加权启发式，使用派系关系、聚落类型、驻军强度、袭击/攻城、所有权、带种子的随机值和两项距离；它不是通用出生保证。
- `GetAllHeroesOfSettlement` 可能枚举囚犯 roster。应在聚落和 roster 有效期间枚举，不要保存迭代器本身。
- Helper 不定义存档 schema。应由战役拥有者保存稳定 ID 或 Behavior 状态，读档后重新获取聚落和 Hero。

## 版本注记

本页依据 v1.4.5 `SettlementHelper.cs`，包括 `Campaign.MapDiagonal * 2f` 最近搜索边界、`-1` 迭代哨兵、驻军/逃兵组合，以及由 Action 支持的队伍和 Notable 变更。

## 导航

- [↑ API 系统索引](../)
- [↔ MenuHelper](../MenuHelper)
- [↔ PerkHelper](../PerkHelper)
- [相关：Settlement](../../campaign/Settlement)
- [相关：MobileParty](../../campaign/MobileParty)
- [相关：Town](../../campaign/Town)
- [相关：Village](../../campaign/Village)
- [相关：DistanceHelper](../DistanceHelper)
- [English page](../../../../en/api/system/SettlementHelper)
