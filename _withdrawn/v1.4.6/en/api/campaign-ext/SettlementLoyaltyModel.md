---
title: "SettlementLoyaltyModel"
description: "SettlementLoyaltyModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<SettlementLoyaltyModel>; 26 exposed members (3 methods, 23 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

SettlementLoyaltyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementLoyaltyModel>; the inheritance chain is SettlementLoyaltyModel → MBGameModel → GameModel. It exposes 26 public/protected members: 3 methods, 23 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementLoyaltyModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain SettlementLoyaltyModel → MBGameModel → GameModel. The surface is property-led (properties 23/26, methods 3/26), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `public abstract int SettlementLoyaltyChangeDueToSecurityThreshold` | property |
| `MaximumLoyaltyInSettlement` | `public abstract int MaximumLoyaltyInSettlement` | property |
| `LoyaltyDriftMedium` | `public abstract int LoyaltyDriftMedium` | property |
| `HighLoyaltyProsperityEffect` | `public abstract float HighLoyaltyProsperityEffect` | property |
| `LowLoyaltyProsperityEffect` | `public abstract int LowLoyaltyProsperityEffect` | property |
| `MilitiaBoostPercentage` | `public abstract int MilitiaBoostPercentage` | property |
| `HighSecurityLoyaltyEffect` | `public abstract float HighSecurityLoyaltyEffect` | property |
| `LowSecurityLoyaltyEffect` | `public abstract float LowSecurityLoyaltyEffect` | property |
| `GovernorSameCultureLoyaltyEffect` | `public abstract float GovernorSameCultureLoyaltyEffect` | property |
| `GovernorDifferentCultureLoyaltyEffect` | `public abstract float GovernorDifferentCultureLoyaltyEffect` | property |
| `SettlementOwnerDifferentCultureLoyaltyEffect` | `public abstract float SettlementOwnerDifferentCultureLoyaltyEffect` | property |
| `ThresholdForTaxBoost` | `public abstract int ThresholdForTaxBoost` | property |
| `RebellionStartLoyaltyThreshold` | `public abstract int RebellionStartLoyaltyThreshold` | property |
| `ThresholdForTaxCorruption` | `public abstract int ThresholdForTaxCorruption` | property |
| `ThresholdForHigherTaxCorruption` | `public abstract int ThresholdForHigherTaxCorruption` | property |
| `ThresholdForProsperityBoost` | `public abstract int ThresholdForProsperityBoost` | property |
| `ThresholdForProsperityPenalty` | `public abstract int ThresholdForProsperityPenalty` | property |
| `AdditionalStarvationPenaltyStartDay` | `public abstract int AdditionalStarvationPenaltyStartDay` | property |
| `AdditionalStarvationLoyaltyEffect` | `public abstract int AdditionalStarvationLoyaltyEffect` | property |
| `RebelliousStateStartLoyaltyThreshold` | `public abstract int RebelliousStateStartLoyaltyThreshold` | property |
| `LoyaltyBoostAfterRebellionStartValue` | `public abstract int LoyaltyBoostAfterRebellionStartValue` | property |
| `ThresholdForNotableRelationBonus` | `public abstract float ThresholdForNotableRelationBonus` | property |
| `DailyNotableRelationBonus` | `public abstract int DailyNotableRelationBonus` | property |
| `CalculateLoyaltyChange` | `public abstract ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false);` | method |
| `CalculateGoldGainDueToHighLoyalty` | `public abstract void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber);` | method |
| `CalculateGoldCutDueToLowLoyalty` | `public abstract void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
