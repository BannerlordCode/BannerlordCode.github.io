---
title: "StoryModeTargetScoreCalculatingModel"
description: "StoryModeTargetScoreCalculatingModel: a public class in StoryMode, inheriting TargetScoreCalculatingModel; 11 exposed members (6 methods, 5 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs."
---
# StoryModeTargetScoreCalculatingModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**File:** `StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs`

## Overview

StoryModeTargetScoreCalculatingModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs. It is a public class, implementing/inheriting TargetScoreCalculatingModel; the inheritance chain is StoryModeTargetScoreCalculatingModel → TargetScoreCalculatingModel. It exposes 11 public/protected members: 6 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeTargetScoreCalculatingModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeTargetScoreCalculatingModel → TargetScoreCalculatingModel. The surface is method-led (methods 6/11, properties 5/11), so it mostly exposes operations. TargetScoreCalculatingModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TravelingToAssignmentFactor` | `public override float TravelingToAssignmentFactor` | property |
| `BesiegingFactor` | `public override float BesiegingFactor` | property |
| `AssaultingTownFactor` | `public override float AssaultingTownFactor` | property |
| `RaidingFactor` | `public override float RaidingFactor` | property |
| `DefendingFactor` | `public override float DefendingFactor` | property |
| `GetDefensivePatrollingFactor` | `public override float GetDefensivePatrollingFactor(bool isNavalPatrolling)` | method |
| `GetOffensivePatrollingFactor` | `public override float GetOffensivePatrollingFactor(bool isNavalPatrolling)` | method |
| `CalculateDefensivePatrollingScoreForSettlement` | `public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)` | method |
| `CalculateOffensivePatrollingScoreForSettlement` | `public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)` | method |
| `CurrentObjectiveValue` | `public override float CurrentObjectiveValue(MobileParty mobileParty)` | method |
| `GetTargetScoreForFaction` | `public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
