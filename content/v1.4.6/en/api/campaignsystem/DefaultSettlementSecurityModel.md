---
title: "DefaultSettlementSecurityModel"
description: "DefaultSettlementSecurityModel: a public class in TaleWorlds.CampaignSystem, inheriting SettlementSecurityModel; 21 exposed members (5 methods, 16 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs."
---
# DefaultSettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs`

## Overview

DefaultSettlementSecurityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs. It is a public class, implementing/inheriting SettlementSecurityModel; the inheritance chain is DefaultSettlementSecurityModel → SettlementSecurityModel → MBGameModel. It exposes 21 public/protected members: 5 methods, 16 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementSecurityModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultSettlementSecurityModel → SettlementSecurityModel → MBGameModel. The surface is property-led (properties 16/21, methods 5/21), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementSecurityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumSecurityInSettlement` | `public override int MaximumSecurityInSettlement` | property |
| `SecurityDriftMedium` | `public override int SecurityDriftMedium` | property |
| `MapEventSecurityEffectRadius` | `public override float MapEventSecurityEffectRadius` | property |
| `HideoutClearedSecurityEffectRadius` | `public override float HideoutClearedSecurityEffectRadius` | property |
| `HideoutClearedSecurityGain` | `public override int HideoutClearedSecurityGain` | property |
| `ThresholdForTaxCorruption` | `public override int ThresholdForTaxCorruption` | property |
| `ThresholdForHigherTaxCorruption` | `public override int ThresholdForHigherTaxCorruption` | property |
| `ThresholdForTaxBoost` | `public override int ThresholdForTaxBoost` | property |
| `SettlementTaxBoostPercentage` | `public override int SettlementTaxBoostPercentage` | property |
| `SettlementTaxPenaltyPercentage` | `public override int SettlementTaxPenaltyPercentage` | property |
| `ThresholdForNotableRelationBonus` | `public override int ThresholdForNotableRelationBonus` | property |
| `ThresholdForNotableRelationPenalty` | `public override int ThresholdForNotableRelationPenalty` | property |
| `DailyNotableRelationBonus` | `public override int DailyNotableRelationBonus` | property |
| `DailyNotableRelationPenalty` | `public override int DailyNotableRelationPenalty` | property |
| `DailyNotablePowerBonus` | `public override int DailyNotablePowerBonus` | property |
| `DailyNotablePowerPenalty` | `public override int DailyNotablePowerPenalty` | property |
| `CalculateSecurityChange` | `public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)` | method |
| `GetLootedNearbyPartySecurityEffect` | `public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | method |
| `GetNearbyBanditPartyDefeatedSecurityEffect` | `public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)` | method |
| `CalculateGoldGainDueToHighSecurity` | `public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)` | method |
| `CalculateGoldCutDueToLowSecurity` | `public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementSecurityModel](../SettlementSecurityModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
