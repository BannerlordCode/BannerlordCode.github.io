---
title: "DefaultSettlementLoyaltyModel"
description: "DefaultSettlementLoyaltyModel: a public class in TaleWorlds.CampaignSystem, inheriting SettlementLoyaltyModel; 26 exposed members (3 methods, 23 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs."
---
# DefaultSettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`

## Overview

DefaultSettlementLoyaltyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs. It is a public class, implementing/inheriting SettlementLoyaltyModel; the inheritance chain is DefaultSettlementLoyaltyModel → SettlementLoyaltyModel → MBGameModel. It exposes 26 public/protected members: 3 methods, 23 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementLoyaltyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultSettlementLoyaltyModel → SettlementLoyaltyModel → MBGameModel. The surface is property-led (properties 23/26, methods 3/26), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
