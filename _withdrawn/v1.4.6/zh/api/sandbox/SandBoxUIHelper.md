---
title: "SandBoxUIHelper"
description: "SandBoxUIHelper：SandBox.ViewModelCollection 的 public 类；公开成员 27 个（方法 22、属性 2、字段 1）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/SandBoxUIHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxUIHelper

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public static class SandBoxUIHelper`
**File:** `SandBox.ViewModelCollection/SandBoxUIHelper.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxUIHelper 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/SandBoxUIHelper.cs。它是一个 public 类，继承链为 SandBoxUIHelper。public/protected 成员共 27 个：22 方法、2 属性、1 字段、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxUIHelper 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection`，继承链 SandBoxUIHelper。成员构成以方法为主（方法 22/27，属性 2/27），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/SandBoxUIHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<TooltipProperty>GetExplainedNumberTooltip(ref ExplainedNumber explanation)` | 方法 |
| `List` | `public static List<TooltipProperty>GetBattleLootAwardTooltip(float lootPercentage)` | 方法 |
| `List` | `public static List<TooltipProperty>GetFigureheadTooltip(Figurehead figurehead)` | 方法 |
| `GetSkillEffectText` | `public static string GetSkillEffectText(SkillEffect effect, int skillLevel)` | 方法 |
| `GetRecruitNotificationText` | `public static string GetRecruitNotificationText(int recruitmentAmount)` | 方法 |
| `GetItemSoldNotificationText` | `public static string GetItemSoldNotificationText(ItemRosterElement item, int itemAmount, bool fromHeroToSettlement)` | 方法 |
| `GetShipSoldNotificationText` | `public static string GetShipSoldNotificationText(Ship ship, int itemAmount, bool fromHeroToSettlement)` | 方法 |
| `GetTroopGivenToSettlementNotificationText` | `public static string GetTroopGivenToSettlementNotificationText(int givenAmount)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSiegeEngineInProgressTooltip(SiegeEvent.SiegeEngineConstructionProgress engineInProgress)` | 方法 |
| `List` | `public static List<TooltipProperty>GetSiegeEngineTooltip(SiegeEngineType engine)` | 方法 |
| `List` | `public static List<TooltipProperty>GetWallSectionTooltip(Settlement settlement, int wallIndex)` | 方法 |
| `GetPrisonersSoldNotificationText` | `public static string GetPrisonersSoldNotificationText(int soldPrisonerAmount)` | 方法 |
| `GetPartyHealthyCount` | `public static int GetPartyHealthyCount(MobileParty party)` | 方法 |
| `GetPartyWoundedText` | `public static string GetPartyWoundedText(int woundedAmount)` | 方法 |
| `GetPartyPrisonerText` | `public static string GetPartyPrisonerText(int prisonerAmount)` | 方法 |
| `GetAllWoundedMembersAmount` | `public static int GetAllWoundedMembersAmount(MobileParty party)` | 方法 |
| `GetAllPrisonerMembersAmount` | `public static int GetAllPrisonerMembersAmount(MobileParty party)` | 方法 |
| `GetCharacterCode` | `public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)` | 方法 |
| `IsHeroInformationHidden` | `public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)` | 方法 |
| `GetMapEventVisualTypeFromMapEvent` | `public static SandBoxUIHelper.MapEventVisualTypes GetMapEventVisualTypeFromMapEvent(MapEvent mapEvent)` | 方法 |
| `IsAgentInVisibilityRangeApproximate` | `public static bool IsAgentInVisibilityRangeApproximate(Agent seerAgent, Agent seenAgent)` | 方法 |
| `CanAgentBeAlarmed` | `public static bool CanAgentBeAlarmed(Agent agent)` | 方法 |
| `AgentMarkerWorldHeightOffset` | `public const float AgentMarkerWorldHeightOffset` | 字段 |
| `SortState` | `public enum SortState` | 属性 |
| `MapEventVisualTypes` | `public enum MapEventVisualTypes` | 属性 |
| `SortState` | `public enum SortState` | 嵌套类型 |
| `MapEventVisualTypes` | `public enum MapEventVisualTypes` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 PerkObjectComparer](../PerkObjectComparer/)
- [同命名空间 SPOrderOfBattleVM](../SPOrderOfBattleVM/)
- [同命名空间 SPScoreboardVM](../SPScoreboardVM/)
- [同命名空间 TournamentRewardVM](../TournamentRewardVM/)
