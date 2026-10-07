---
title: "MapEventHelper"
description: "地图事件判定的静态工具集：解析村庄劫掠的海陆上下文、判断海路可及性、为藏身处任务挑兵，以及遭遇战中的脱离与对话收尾。"
---

# MapEventHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MapEventHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/MapEventHelper.cs`

## 概述

本类是地图事件（`MapEvent`）相关判定的集散地，覆盖四类问题：村庄劫掠的海陆上下文怎么解析、一场劫掠算不算海路可及、藏身处任务的两阶段兵力怎么挑、以及遭遇战里什么时候能脱离和对话结束后是否直接收尾。它的方法要么返回布尔判定，要么通过 `out` 参数交出一组上下文数据，是其它系统（如藏身处任务、围城战）的数据源。

## 心智模型

把 MapEventHelper 想成地图事件背后的「情报分析员」。`GetRaidContext` 是它的核心侦察报告——把一场劫掠的六个维度（劫掠方、双方海陆存在、是否进过劫掠阶段）全部摸清楚，其它判定（`IsNavalRaid`、`CanMainPartyLeaveBattleCommonCondition`）都建立在这份报告之上。`GetPriorityListForHideoutMission` 则是「征兵官」：按模型层给的比例和上限把总人数切成两阶段，再从名册里挑出该上的兵。本类不持有状态，所有数据都从 `Campaign.Current` 和传入的 `MapEvent` 现取。

## 怎么用

### 怎么拿到它

静态类，直接 `MapEventHelper.方法名(...)` 调用。

### 典型用法

- 要判断「这场劫掠能不能走海路」时，用 `IsNavalRaid(mapEvent)`，它内部先调 `GetRaidContext` 再套判定式。
- 藏身处任务要挑兵时，用 `GetPriorityListForHideoutMission(partyList, out firstPhaseTroopCount)`，拿到两阶段兵力分配。
- 围城战里要判断「玩家能不能脱离战斗」时，用 `CanMainPartyLeaveBattleCommonCondition()`。
- 对话结束后要判断是否直接结束遭遇时，用 `OnConversationEnd()`。

### 最容易踩的坑

- `GetRaidContext` 返回 `false` 时 6 个 `out` 全是初值（`None` / 全 `false`），调用方**必须先看返回值**再读 `out`。
- `IsNavalRaid` 的判定式压缩成一行且用位置参数（`flag`…`flag5`），读的时候必须回到 `GetRaidContext` 的参数顺序才能对上。
- `GetSallyOutDefenderLeader` **假定主队当前在聚落里**，不在聚落时第一行就 NRE；且最后一级回退取的是**围城营地的主将**（即攻方），语义与名字不一致。
- `OnConversationEnd` 是**写操作**，会直接改变遭遇走向，不要在只读的 UI 刷新路径里调它。
- `GetPriorityListForHideoutMission` 里的 `RemoveIf` 被当作「读出并删除」使用，返回的 `FlattenedTroopRoster` 是被反复就地删减过的。

## 关键成员

- `public static bool GetRaidContext(MapEvent mapEvent, out BattleSideEnum raiderSide, out bool raiderHasSeaPresence, out bool raiderHasLandPresence, out bool villageFactionSideHasSeaPresence, out bool villageFactionSideHasLandPresence, out bool wasEverInLootingPhase)` —— 解析村庄劫掠的六个维度上下文，是本类其它判定的数据源。`MapEventHelper.cs:19`
- `public static bool IsNavalRaid(MapEvent mapEvent)` —— 一行封装的海路可及性判定，内部先调 `GetRaidContext` 再套压缩判定式。`MapEventHelper.cs:79`
- `public static PartyBase GetSallyOutDefenderLeader()` —— 取被围城方出击时的防守方主将，三级回退，假定主队当前在聚落里。`MapEventHelper.cs:91`
- `public static bool CanMainPartyLeaveBattleCommonCondition()` —— 判断玩家在进攻方、或虽在防守但正被围且不在聚落里时能否脱离战斗。`MapEventHelper.cs:114`
- `public static PartyBase GetEncounteredPartyBase(PartyBase attackerParty, PartyBase defenderParty)` —— 返回遭遇里对面那一方：主队是其中一方时返回另一方，否则按 `MapEvent` 有无决定。`MapEventHelper.cs:120`
- `public static void OnConversationEnd()` —— 对话结束时判断是否该直接结束遭遇，是写操作，会改变遭遇走向。`MapEventHelper.cs:141`
- `public static FlattenedTroopRoster GetPriorityListForHideoutMission(List<MobileParty> partyList, out int firstPhaseTroopCount)` —— 为藏身处任务挑兵，按模型层比例与上限分两阶段，去掉伤兵与英雄头目后按等级降序取普通兵。`MapEventHelper.cs:150`

## 真实示例

```csharp
// 藏身处任务：先问「这是不是海路劫掠」，再取两阶段兵力
if (MapEventHelper.IsNavalRaid(mapEvent))
{
    int firstPhase;
    FlattenedTroopRoster roster = MapEventHelper.GetPriorityListForHideoutMission(partyList, out firstPhase);
    Debug.Print($"first phase = {firstPhase}, remaining = {roster.Count}");
}
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models.BanditDensityModel` 决定藏身处两阶段的兵力分配
- ↔ [GameModels](../../campaign/GameModels) —— 强类型属性容器，模型的实际读取入口
- ↔ [Mission](../../mission/Mission) —— 藏身处任务把这里挑出的 `FlattenedTroopRoster` 交给战斗场景

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
