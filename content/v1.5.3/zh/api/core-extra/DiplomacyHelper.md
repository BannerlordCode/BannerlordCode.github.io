---
title: "DiplomacyHelper"
description: "外交判定的静态工具集：宣战责任归属、战争日志检索、俘虏与结盟查询，全部围绕 IFaction 与 StanceLink 展开。"
---

# DiplomacyHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class DiplomacyHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs`

## 概述

本类把「两个派系之间现在是什么关系」这类问题收敛成一组无状态判定：某场宣战算不算玩家的责任、一场战争产生了哪些日志条目、谁手里攥着谁的俘虏、玩家是否发过誓暂不攻击某派系、两个王国是否结盟。它不持有任何字段，所有输入都通过参数传入，结果要么是布尔判定，要么是从 `Campaign.Current.LogEntryHistory` 里筛出来的日志列表。

## 心智模型

把 DiplomacyHelper 想成外交面板背后的「问答机」：UI 层只负责问「这次宣战是不是我的错」「我能不能打他」，本类负责给出答案。它的所有判定都建立在两个前提之上——`Hero.MainHero` 代表玩家，`Campaign.Current` 是当前战役的唯一入口。日志类查询（`GetLogsForWar`）不自己存数据，而是每次现去 `Campaign.Current.LogEntryHistory.GameActionLogs` 里倒序捞，所以它反映的是「截至调用那一刻」的日志快照。

## 怎么用

### 怎么拿到它

静态类，直接 `DiplomacyHelper.方法名(...)` 调用，不需要实例，也不需要从 `Campaign.Current` 取。

### 典型用法

- 外交界面要置灰「攻击」按钮时，先问 `DidMainHeroSwornNotToAttackFaction`，它返回 `true` 的同时把理由文本通过 `out` 参数交出来，直接喂给 `InformationManager.DisplayMessage`。
- 战争详情页要列出战事时间线时，用 `GetLogsForWar(stance)` 拿到从新到旧的日志列表，再逐条渲染。
- 判断「这两个派系其实是一伙的」时用 `IsSameFactionAndNotEliminated`，它同时排除了已灭亡的派系。

### 最容易踩的坑

- `IsWarCausedByPlayer` 的四个分支里 `faction1` / `faction2` 的位置不一致：前两个原因看 `faction1`，`CausedByCrimeRatingChange` 看 `faction2`。传反了不会报错，只会得到静默的错答案。
- `GetPrisonersOfWarTakenByFaction` 只遍历 `AliveLords`，普通士兵和已死领主都不在结果里。
- `HasAllianceWithFaction` 只对王国（`IsKingdomFaction`）生效，对匪帮等其他 `IFaction` 恒返回 `false`。
- `GetLogsForWar` 的结果是**从新到旧**的（倒序遍历），做时间线展示时通常需要再反转一次。

## 关键成员

- `public static bool IsWarCausedByPlayer(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)` —— 按宣战原因判断这次宣战是否算玩家的责任，四种原因分别对应不同的归属判据。`DiplomacyHelper.cs:16`
- `public static bool IsSameFactionAndNotEliminated(IFaction faction1, IFaction faction2)` —— 判断两个派系是否同一方且都还活着，是「能不能做某些 UI/规则判断」的前置闸门。`DiplomacyHelper.cs:33`
- `private static bool IsLogInTimeRange(LogEntry entry, CampaignTime time)` —— 私有，不对外。只保留给定时间之后的日志条目，是 `GetLogsForWar` 的时间过滤器。`DiplomacyHelper.cs:39`
- `public static List<ValueTuple<LogEntry, IFaction, IFaction>> GetLogsForWar(StanceLink stance)` —— 取一场战争的全部相关日志，结果从新到旧，每条日志附带它涉及的两个派系。`DiplomacyHelper.cs:45`
- `public static List<Hero> GetPrisonersOfWarTakenByFaction(IFaction capturerFaction, IFaction prisonerFaction)` —— 列出被某派系俘虏的另一派系领主，只看 `AliveLords` 且 `IsPrisoner` 为真者。`DiplomacyHelper.cs:64`
- `public static bool DidMainHeroSwornNotToAttackFaction(IFaction faction, out TextObject explanation)` —— 判断玩家是否发过誓暂不攻击该派系，为真时把本地化理由文本写进 `explanation`。`DiplomacyHelper.cs:82`
- `public static bool HasAllianceWithFaction(IFaction faction1, IFaction faction2)` —— 判断两个王国是否结盟，非王国派系恒为 `false`。`DiplomacyHelper.cs:94`

## 真实示例

```csharp
// 战争日志：结果是从新到旧，且只含该战争开始之后的条目
foreach ((LogEntry log, IFaction f1, IFaction f2) in DiplomacyHelper.GetLogsForWar(stance))
{
    Debug.Print($"{log.GameTime} {f1?.Name} {f2?.Name}");
}

// 外交面板上置灰「攻击」按钮并给出理由
TextObject reason;
if (DiplomacyHelper.DidMainHeroSwornNotToAttackFaction(faction, out reason))
    InformationManager.DisplayMessage(new InformationMessage(reason.ToString()));
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.LogEntryHistory` 是战事日志的唯一来源
- ↔ [GameModels](../../campaign/GameModels) —— `CrimeModel` 这类外交/犯罪规则都从模型层读

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
