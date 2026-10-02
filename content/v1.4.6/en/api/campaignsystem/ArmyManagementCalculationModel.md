---
title: "ArmyManagementCalculationModel"
description: "ArmyManagementCalculationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<ArmyManagementCalculationModel>; 19 exposed members (11 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs."
---
# ArmyManagementCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs`

## Overview

ArmyManagementCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ArmyManagementCalculationModel>; the inheritance chain is ArmyManagementCalculationModel → MBGameModel. It exposes 19 public/protected members: 11 methods, 8 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyManagementCalculationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain ArmyManagementCalculationModel → MBGameModel. The surface is method-led (methods 11/19, properties 8/19), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AIMobilePartySizeRatioToCallToArmy` | `public abstract float AIMobilePartySizeRatioToCallToArmy` | property |
| `PlayerMobilePartySizeRatioToCallToArmy` | `public abstract float PlayerMobilePartySizeRatioToCallToArmy` | property |
| `MinimumNeededFoodInDaysToCallToArmy` | `public abstract float MinimumNeededFoodInDaysToCallToArmy` | property |
| `MaximumDistanceToCallToArmy` | `public abstract float MaximumDistanceToCallToArmy` | property |
| `InfluenceValuePerGold` | `public abstract int InfluenceValuePerGold` | property |
| `AverageCallToArmyCost` | `public abstract int AverageCallToArmyCost` | property |
| `CohesionThresholdForDispersion` | `public abstract int CohesionThresholdForDispersion` | property |
| `MaximumWaitTime` | `public abstract float MaximumWaitTime` | property |
| `CanPlayerCreateArmy` | `public abstract bool CanPlayerCreateArmy(out TextObject disabledReason);` | method |
| `CalculatePartyInfluenceCost` | `public abstract int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party);` | method |
| `DailyBeingAtArmyInfluenceAward` | `public abstract float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty);` | method |
| `CanLordCreateArmy` | `public abstract bool CanLordCreateArmy(MobileParty leaderParty, out MBList<MobileParty>possibleArmyMembers);` | method |
| `CalculateTotalInfluenceCost` | `public abstract int CalculateTotalInfluenceCost(Army army, float percentage);` | method |
| `GetPartySizeScore` | `public abstract float GetPartySizeScore(MobileParty party);` | method |
| `CheckPartyEligibility` | `public abstract bool CheckPartyEligibility(MobileParty party, out TextObject explanation);` | method |
| `GetPartyRelation` | `public abstract int GetPartyRelation(Hero hero);` | method |
| `CalculateDailyCohesionChange` | `public abstract ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false);` | method |
| `CalculateNewCohesion` | `public abstract int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign);` | method |
| `GetCohesionBoostInfluenceCost` | `public abstract int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace BanditDensityModel](../BanditDensityModel)
