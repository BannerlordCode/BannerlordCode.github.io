---
title: "DefaultArmyManagementCalculationModel"
description: "DefaultArmyManagementCalculationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting ArmyManagementCalculationModel; 19 exposed members (11 methods, 8 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultArmyManagementCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultArmyManagementCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs. It is a public class, implementing/inheriting ArmyManagementCalculationModel; the inheritance chain is DefaultArmyManagementCalculationModel → ArmyManagementCalculationModel → MBGameModel → GameModel. It exposes 19 public/protected members: 11 methods, 8 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultArmyManagementCalculationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultArmyManagementCalculationModel → ArmyManagementCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 11/19, properties 8/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AIMobilePartySizeRatioToCallToArmy` | `public override float AIMobilePartySizeRatioToCallToArmy` | property |
| `PlayerMobilePartySizeRatioToCallToArmy` | `public override float PlayerMobilePartySizeRatioToCallToArmy` | property |
| `MinimumNeededFoodInDaysToCallToArmy` | `public override float MinimumNeededFoodInDaysToCallToArmy` | property |
| `MaximumDistanceToCallToArmy` | `public override float MaximumDistanceToCallToArmy` | property |
| `InfluenceValuePerGold` | `public override int InfluenceValuePerGold` | property |
| `AverageCallToArmyCost` | `public override int AverageCallToArmyCost` | property |
| `CohesionThresholdForDispersion` | `public override int CohesionThresholdForDispersion` | property |
| `MaximumWaitTime` | `public override float MaximumWaitTime` | property |
| `DailyBeingAtArmyInfluenceAward` | `public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)` | method |
| `CalculatePartyInfluenceCost` | `public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)` | method |
| `CanLordCreateArmy` | `public override bool CanLordCreateArmy(MobileParty mobileParty, out MBList<MobileParty>possibleArmyMembers)` | method |
| `CalculateTotalInfluenceCost` | `public override int CalculateTotalInfluenceCost(Army army, float percentage)` | method |
| `GetPartySizeScore` | `public override float GetPartySizeScore(MobileParty party)` | method |
| `CalculateDailyCohesionChange` | `public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)` | method |
| `CalculateNewCohesion` | `public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)` | method |
| `GetCohesionBoostInfluenceCost` | `public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)` | method |
| `GetPartyRelation` | `public override int GetPartyRelation(Hero hero)` | method |
| `CanPlayerCreateArmy` | `public override bool CanPlayerCreateArmy(out TextObject disabledReason)` | method |
| `CheckPartyEligibility` | `public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultBanditDensityModel](../DefaultBanditDensityModel/)
