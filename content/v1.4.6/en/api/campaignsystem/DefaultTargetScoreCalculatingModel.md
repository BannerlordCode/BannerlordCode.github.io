---
title: "DefaultTargetScoreCalculatingModel"
description: "DefaultTargetScoreCalculatingModel: a public class in TaleWorlds.CampaignSystem, inheriting TargetScoreCalculatingModel; 11 exposed members (6 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs."
---
# DefaultTargetScoreCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs`

## Overview

DefaultTargetScoreCalculatingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs. It is a public class, implementing/inheriting TargetScoreCalculatingModel; the inheritance chain is DefaultTargetScoreCalculatingModel → TargetScoreCalculatingModel → MBGameModel. It exposes 11 public/protected members: 6 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultTargetScoreCalculatingModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultTargetScoreCalculatingModel → TargetScoreCalculatingModel → MBGameModel. The surface is method-led (methods 6/11, properties 5/11), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultTargetScoreCalculatingModel.cs or the deep page for this type.

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
| `CalculateOffensivePatrollingScoreForSettlement` | `public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)` | method |
| `CurrentObjectiveValue` | `public override float CurrentObjectiveValue(MobileParty mobileParty)` | method |
| `CalculateDefensivePatrollingScoreForSettlement` | `public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)` | method |
| `GetTargetScoreForFaction` | `public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TargetScoreCalculatingModel](../TargetScoreCalculatingModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
