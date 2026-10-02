---
title: "SandBoxUIHelper"
description: "SandBoxUIHelper: a public class in SandBox.ViewModelCollection; 27 exposed members (22 methods, 2 properties, 1 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/SandBoxUIHelper.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxUIHelper

**Namespace:** `SandBox.ViewModelCollection`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public static class SandBoxUIHelper`
**File:** `SandBox.ViewModelCollection/SandBoxUIHelper.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandBoxUIHelper lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/SandBoxUIHelper.cs. It is a public class; the inheritance chain is SandBoxUIHelper. It exposes 27 public/protected members: 22 methods, 2 properties, 1 fields, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxUIHelper lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection`, inheritance chain SandBoxUIHelper. The surface is method-led (methods 22/27, properties 2/27), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/SandBoxUIHelper.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public static List<TooltipProperty>GetExplainedNumberTooltip(ref ExplainedNumber explanation)` | method |
| `List` | `public static List<TooltipProperty>GetBattleLootAwardTooltip(float lootPercentage)` | method |
| `List` | `public static List<TooltipProperty>GetFigureheadTooltip(Figurehead figurehead)` | method |
| `GetSkillEffectText` | `public static string GetSkillEffectText(SkillEffect effect, int skillLevel)` | method |
| `GetRecruitNotificationText` | `public static string GetRecruitNotificationText(int recruitmentAmount)` | method |
| `GetItemSoldNotificationText` | `public static string GetItemSoldNotificationText(ItemRosterElement item, int itemAmount, bool fromHeroToSettlement)` | method |
| `GetShipSoldNotificationText` | `public static string GetShipSoldNotificationText(Ship ship, int itemAmount, bool fromHeroToSettlement)` | method |
| `GetTroopGivenToSettlementNotificationText` | `public static string GetTroopGivenToSettlementNotificationText(int givenAmount)` | method |
| `List` | `public static List<TooltipProperty>GetSiegeEngineInProgressTooltip(SiegeEvent.SiegeEngineConstructionProgress engineInProgress)` | method |
| `List` | `public static List<TooltipProperty>GetSiegeEngineTooltip(SiegeEngineType engine)` | method |
| `List` | `public static List<TooltipProperty>GetWallSectionTooltip(Settlement settlement, int wallIndex)` | method |
| `GetPrisonersSoldNotificationText` | `public static string GetPrisonersSoldNotificationText(int soldPrisonerAmount)` | method |
| `GetPartyHealthyCount` | `public static int GetPartyHealthyCount(MobileParty party)` | method |
| `GetPartyWoundedText` | `public static string GetPartyWoundedText(int woundedAmount)` | method |
| `GetPartyPrisonerText` | `public static string GetPartyPrisonerText(int prisonerAmount)` | method |
| `GetAllWoundedMembersAmount` | `public static int GetAllWoundedMembersAmount(MobileParty party)` | method |
| `GetAllPrisonerMembersAmount` | `public static int GetAllPrisonerMembersAmount(MobileParty party)` | method |
| `GetCharacterCode` | `public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)` | method |
| `IsHeroInformationHidden` | `public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)` | method |
| `GetMapEventVisualTypeFromMapEvent` | `public static SandBoxUIHelper.MapEventVisualTypes GetMapEventVisualTypeFromMapEvent(MapEvent mapEvent)` | method |
| `IsAgentInVisibilityRangeApproximate` | `public static bool IsAgentInVisibilityRangeApproximate(Agent seerAgent, Agent seenAgent)` | method |
| `CanAgentBeAlarmed` | `public static bool CanAgentBeAlarmed(Agent agent)` | method |
| `AgentMarkerWorldHeightOffset` | `public const float AgentMarkerWorldHeightOffset` | field |
| `SortState` | `public enum SortState` | property |
| `MapEventVisualTypes` | `public enum MapEventVisualTypes` | property |
| `SortState` | `public enum SortState` | nested type |
| `MapEventVisualTypes` | `public enum MapEventVisualTypes` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PerkObjectComparer](../PerkObjectComparer/)
- [same namespace SPOrderOfBattleVM](../SPOrderOfBattleVM/)
- [same namespace SPScoreboardVM](../SPScoreboardVM/)
- [same namespace TournamentRewardVM](../TournamentRewardVM/)
