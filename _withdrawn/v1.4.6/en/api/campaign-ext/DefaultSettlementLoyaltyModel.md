---
title: "DefaultSettlementLoyaltyModel"
description: "DefaultSettlementLoyaltyModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SettlementLoyaltyModel; 26 exposed members (3 methods, 23 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSettlementLoyaltyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs. It is a public class, implementing/inheriting SettlementLoyaltyModel; the inheritance chain is DefaultSettlementLoyaltyModel → SettlementLoyaltyModel → MBGameModel → GameModel. It exposes 26 public/protected members: 3 methods, 23 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementLoyaltyModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSettlementLoyaltyModel → SettlementLoyaltyModel → MBGameModel → GameModel. The surface is property-led (properties 23/26, methods 3/26), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HighLoyaltyProsperityEffect` | `public override float HighLoyaltyProsperityEffect` | property |
| `LowLoyaltyProsperityEffect` | `public override int LowLoyaltyProsperityEffect` | property |
| `ThresholdForTaxBoost` | `public override int ThresholdForTaxBoost` | property |
| `ThresholdForTaxCorruption` | `public override int ThresholdForTaxCorruption` | property |
| `ThresholdForHigherTaxCorruption` | `public override int ThresholdForHigherTaxCorruption` | property |
| `ThresholdForProsperityBoost` | `public override int ThresholdForProsperityBoost` | property |
| `ThresholdForProsperityPenalty` | `public override int ThresholdForProsperityPenalty` | property |
| `AdditionalStarvationPenaltyStartDay` | `public override int AdditionalStarvationPenaltyStartDay` | property |
| `AdditionalStarvationLoyaltyEffect` | `public override int AdditionalStarvationLoyaltyEffect` | property |
| `RebellionStartLoyaltyThreshold` | `public override int RebellionStartLoyaltyThreshold` | property |
| `RebelliousStateStartLoyaltyThreshold` | `public override int RebelliousStateStartLoyaltyThreshold` | property |
| `LoyaltyBoostAfterRebellionStartValue` | `public override int LoyaltyBoostAfterRebellionStartValue` | property |
| `MilitiaBoostPercentage` | `public override int MilitiaBoostPercentage` | property |
| `ThresholdForNotableRelationBonus` | `public override float ThresholdForNotableRelationBonus` | property |
| `DailyNotableRelationBonus` | `public override int DailyNotableRelationBonus` | property |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `public override int SettlementLoyaltyChangeDueToSecurityThreshold` | property |
| `MaximumLoyaltyInSettlement` | `public override int MaximumLoyaltyInSettlement` | property |
| `LoyaltyDriftMedium` | `public override int LoyaltyDriftMedium` | property |
| `HighSecurityLoyaltyEffect` | `public override float HighSecurityLoyaltyEffect` | property |
| `LowSecurityLoyaltyEffect` | `public override float LowSecurityLoyaltyEffect` | property |
| `GovernorSameCultureLoyaltyEffect` | `public override float GovernorSameCultureLoyaltyEffect` | property |
| `GovernorDifferentCultureLoyaltyEffect` | `public override float GovernorDifferentCultureLoyaltyEffect` | property |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `public override float SettlementOwnerDifferentCultureLoyaltyEffect` | property |
| `CalculateLoyaltyChange` | `public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)` | method |
| `CalculateGoldGainDueToHighLoyalty` | `public override void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)` | method |
| `CalculateGoldCutDueToLowLoyalty` | `public override void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementLoyaltyModel](../SettlementLoyaltyModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
