---
title: "TraitLevelingHelper"
description: "TraitLevelingHelper: a public class in TaleWorlds.CampaignSystem; 19 exposed members (19 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs."
---
# TraitLevelingHelper

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class TraitLevelingHelper`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs`

## Overview

TraitLevelingHelper lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs. It is a public class; the inheritance chain is TraitLevelingHelper. It exposes 19 public/protected members: 19 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TraitLevelingHelper is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CharacterDevelopment) the module directory; inheritance chain TraitLevelingHelper. The surface is method-led (methods 19/19, properties 0/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CharacterDevelopment/TraitLevelingHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpdateTraitXPAccordingToTraitLevels` | `public static void UpdateTraitXPAccordingToTraitLevels()` | method |
| `OnBattleWon` | `public static void OnBattleWon(MapEvent mapEvent, float contribution)` | method |
| `OnTroopsSacrificed` | `public static void OnTroopsSacrificed()` | method |
| `OnLordExecuted` | `public static void OnLordExecuted()` | method |
| `OnTradeAgreementBroken` | `public static void OnTradeAgreementBroken()` | method |
| `OnVillageRaided` | `public static void OnVillageRaided()` | method |
| `OnHostileAction` | `public static void OnHostileAction(int amount)` | method |
| `OnPartyTreatedWell` | `public static void OnPartyTreatedWell()` | method |
| `OnPartyStarved` | `public static void OnPartyStarved()` | method |
| `OnIssueFailed` | `public static void OnIssueFailed(Hero targetHero, Tuple<TraitObject, int>[]effectedTraits)` | method |
| `OnIssueSolvedThroughQuest` | `public static void OnIssueSolvedThroughQuest(Hero targetHero, Tuple<TraitObject, int>[]effectedTraits)` | method |
| `OnIssueSolvedThroughQuest` | `public static void OnIssueSolvedThroughQuest(Hero targetHero, TraitObject trait, int xp)` | method |
| `OnIssueSolvedThroughAlternativeSolution` | `public static void OnIssueSolvedThroughAlternativeSolution(Hero targetHero, Tuple<TraitObject, int>[]effectedTraits)` | method |
| `OnIssueSolvedThroughBetrayal` | `public static void OnIssueSolvedThroughBetrayal(Hero targetHero, Tuple<TraitObject, int>[]effectedTraits)` | method |
| `OnLordFreed` | `public static void OnLordFreed(Hero targetHero)` | method |
| `OnPersuasionDefection` | `public static void OnPersuasionDefection(Hero targetHero)` | method |
| `OnSiegeAftermathApplied` | `public static void OnSiegeAftermathApplied(Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, TraitObject[]effectedTraits)` | method |
| `OnIncidentResolved` | `public static void OnIncidentResolved(TraitObject trait, int xpValue)` | method |
| `OnAllianceBrokenThroughHostility` | `public static void OnAllianceBrokenThroughHostility()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DefaultCulturalFeats](../DefaultCulturalFeats)
- [same namespace DefaultPerks](../DefaultPerks)
- [same namespace DefaultSkillLevelingManager](../DefaultSkillLevelingManager)
- [same namespace DefaultTraits](../DefaultTraits)
