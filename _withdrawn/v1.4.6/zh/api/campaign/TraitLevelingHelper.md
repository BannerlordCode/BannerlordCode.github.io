---
title: "TraitLevelingHelper"
description: "TraitLevelingHelper：TaleWorlds.CampaignSystem.CharacterDevelopment 的 public 类；公开成员 19 个（方法 19、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TraitLevelingHelper

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class TraitLevelingHelper`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

TraitLevelingHelper 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs。它是一个 public 类，继承链为 TraitLevelingHelper。public/protected 成员共 19 个：19 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TraitLevelingHelper 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment`，继承链 TraitLevelingHelper。成员构成以方法为主（方法 19/19，属性 0/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpdateTraitXPAccordingToTraitLevels` | `public static void UpdateTraitXPAccordingToTraitLevels()` | 方法 |
| `OnBattleWon` | `public static void OnBattleWon(MapEvent mapEvent, float contribution)` | 方法 |
| `OnTroopsSacrificed` | `public static void OnTroopsSacrificed()` | 方法 |
| `OnLordExecuted` | `public static void OnLordExecuted()` | 方法 |
| `OnTradeAgreementBroken` | `public static void OnTradeAgreementBroken()` | 方法 |
| `OnVillageRaided` | `public static void OnVillageRaided()` | 方法 |
| `OnHostileAction` | `public static void OnHostileAction(int amount)` | 方法 |
| `OnPartyTreatedWell` | `public static void OnPartyTreatedWell()` | 方法 |
| `OnPartyStarved` | `public static void OnPartyStarved()` | 方法 |
| `OnIssueFailed` | `public static void OnIssueFailed(Hero targetHero, Tuple<TraitObject, int>[]effectedTraits)` | 方法 |
| `OnIssueSolvedThroughQuest` | `public static void OnIssueSolvedThroughQuest(Hero targetHero, Tuple<TraitObject, int>[]effectedTraits)` | 方法 |
| `OnIssueSolvedThroughQuest` | `public static void OnIssueSolvedThroughQuest(Hero targetHero, TraitObject trait, int xp)` | 方法 |
| `OnIssueSolvedThroughAlternativeSolution` | `public static void OnIssueSolvedThroughAlternativeSolution(Hero targetHero, Tuple<TraitObject, int>[]effectedTraits)` | 方法 |
| `OnIssueSolvedThroughBetrayal` | `public static void OnIssueSolvedThroughBetrayal(Hero targetHero, Tuple<TraitObject, int>[]effectedTraits)` | 方法 |
| `OnLordFreed` | `public static void OnLordFreed(Hero targetHero)` | 方法 |
| `OnPersuasionDefection` | `public static void OnPersuasionDefection(Hero targetHero)` | 方法 |
| `OnSiegeAftermathApplied` | `public static void OnSiegeAftermathApplied(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, TraitObject[]effectedTraits)` | 方法 |
| `OnIncidentResolved` | `public static void OnIncidentResolved(TraitObject trait, int xpValue)` | 方法 |
| `OnAllianceBrokenThroughHostility` | `public static void OnAllianceBrokenThroughHostility()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 DefaultCulturalFeats](../DefaultCulturalFeats/)
- [同命名空间 DefaultPerks](../DefaultPerks/)
- [同命名空间 DefaultSkillLevelingManager](../DefaultSkillLevelingManager/)
- [同命名空间 DefaultTraits](../DefaultTraits/)
