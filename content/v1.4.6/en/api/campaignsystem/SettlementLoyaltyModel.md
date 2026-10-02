---
title: "SettlementLoyaltyModel"
description: "SettlementLoyaltyModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SettlementLoyaltyModel>; 26 exposed members (3 methods, 23 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs."
---
# SettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`

## Overview

SettlementLoyaltyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementLoyaltyModel>; the inheritance chain is SettlementLoyaltyModel → MBGameModel. It exposes 26 public/protected members: 3 methods, 23 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementLoyaltyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SettlementLoyaltyModel → MBGameModel. The surface is property-led (properties 23/26, methods 3/26), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
