---
title: "TargetScoreCalculatingModel"
description: "TargetScoreCalculatingModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<TargetScoreCalculatingModel>; 11 exposed members (6 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs."
---
# TargetScoreCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs`

## Overview

TargetScoreCalculatingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<TargetScoreCalculatingModel>; the inheritance chain is TargetScoreCalculatingModel → MBGameModel. It exposes 11 public/protected members: 6 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TargetScoreCalculatingModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain TargetScoreCalculatingModel → MBGameModel. The surface is method-led (methods 6/11, properties 5/11), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TravelingToAssignmentFactor` | `public abstract float TravelingToAssignmentFactor` | property |
| `BesiegingFactor` | `public abstract float BesiegingFactor` | property |
| `AssaultingTownFactor` | `public abstract float AssaultingTownFactor` | property |
| `RaidingFactor` | `public abstract float RaidingFactor` | property |
| `DefendingFactor` | `public abstract float DefendingFactor` | property |
| `GetDefensivePatrollingFactor` | `public abstract float GetDefensivePatrollingFactor(bool isNavalPatrolling);` | method |
| `GetOffensivePatrollingFactor` | `public abstract float GetOffensivePatrollingFactor(bool isNavalPatrolling);` | method |
| `GetTargetScoreForFaction` | `public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength);` | method |
| `CalculateDefensivePatrollingScoreForSettlement` | `public abstract float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty);` | method |
| `CalculateOffensivePatrollingScoreForSettlement` | `public abstract float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty);` | method |
| `CurrentObjectiveValue` | `public abstract float CurrentObjectiveValue(MobileParty mobileParty);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
