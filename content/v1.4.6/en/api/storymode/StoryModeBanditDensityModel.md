---
title: "StoryModeBanditDensityModel"
description: "StoryModeBanditDensityModel: a public class in StoryMode, inheriting BanditDensityModel; 13 exposed members (4 methods, 9 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeBanditDensityModel.cs."
---
# StoryModeBanditDensityModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeBanditDensityModel : BanditDensityModel`
**File:** `StoryMode/GameComponents/StoryModeBanditDensityModel.cs`

## Overview

StoryModeBanditDensityModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeBanditDensityModel.cs. It is a public class, implementing/inheriting BanditDensityModel; the inheritance chain is StoryModeBanditDensityModel → BanditDensityModel. It exposes 13 public/protected members: 4 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeBanditDensityModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeBanditDensityModel → BanditDensityModel. The surface is property-led (properties 9/13, methods 4/13), so it mostly exposes state for reading. BanditDensityModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeBanditDensityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout` | property |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout` | property |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction` | property |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction` | property |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | property |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission` | property |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout` | property |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout` | property |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission` | property |
| `GetMaximumTroopCountForHideoutMission` | `public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | method |
| `IsPositionInsideNavalSafeZone` | `public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)` | method |
| `GetMaxSupportedNumberOfLootersForClan` | `public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)` | method |
| `GetMinimumTroopCountForHideoutMission` | `public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
- [same namespace StoryModeCombatXpModel](../StoryModeCombatXpModel)
