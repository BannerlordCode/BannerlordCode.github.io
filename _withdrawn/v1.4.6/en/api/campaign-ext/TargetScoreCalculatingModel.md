---
title: "TargetScoreCalculatingModel"
description: "TargetScoreCalculatingModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<TargetScoreCalculatingModel>; 11 exposed members (6 methods, 5 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TargetScoreCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

TargetScoreCalculatingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<TargetScoreCalculatingModel>; the inheritance chain is TargetScoreCalculatingModel → MBGameModel → GameModel. It exposes 11 public/protected members: 6 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TargetScoreCalculatingModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain TargetScoreCalculatingModel → MBGameModel → GameModel. The surface is method-led (methods 6/11, properties 5/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
