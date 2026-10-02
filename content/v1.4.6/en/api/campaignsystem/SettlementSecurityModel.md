---
title: "SettlementSecurityModel"
description: "SettlementSecurityModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SettlementSecurityModel>; 21 exposed members (5 methods, 16 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs."
---
# SettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`

## Overview

SettlementSecurityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementSecurityModel>; the inheritance chain is SettlementSecurityModel → MBGameModel. It exposes 21 public/protected members: 5 methods, 16 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementSecurityModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SettlementSecurityModel → MBGameModel. The surface is property-led (properties 16/21, methods 5/21), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumSecurityInSettlement` | `public abstract int MaximumSecurityInSettlement` | property |
| `SecurityDriftMedium` | `public abstract int SecurityDriftMedium` | property |
| `MapEventSecurityEffectRadius` | `public abstract float MapEventSecurityEffectRadius` | property |
| `HideoutClearedSecurityEffectRadius` | `public abstract float HideoutClearedSecurityEffectRadius` | property |
| `HideoutClearedSecurityGain` | `public abstract int HideoutClearedSecurityGain` | property |
| `ThresholdForTaxCorruption` | `public abstract int ThresholdForTaxCorruption` | property |
| `ThresholdForHigherTaxCorruption` | `public abstract int ThresholdForHigherTaxCorruption` | property |
| `ThresholdForTaxBoost` | `public abstract int ThresholdForTaxBoost` | property |
| `SettlementTaxBoostPercentage` | `public abstract int SettlementTaxBoostPercentage` | property |
| `SettlementTaxPenaltyPercentage` | `public abstract int SettlementTaxPenaltyPercentage` | property |
| `GetLootedNearbyPartySecurityEffect` | `public abstract float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths);` | method |
| `ThresholdForNotableRelationBonus` | `public abstract int ThresholdForNotableRelationBonus` | property |
| `ThresholdForNotableRelationPenalty` | `public abstract int ThresholdForNotableRelationPenalty` | property |
| `DailyNotableRelationBonus` | `public abstract int DailyNotableRelationBonus` | property |
| `DailyNotableRelationPenalty` | `public abstract int DailyNotableRelationPenalty` | property |
| `DailyNotablePowerBonus` | `public abstract int DailyNotablePowerBonus` | property |
| `DailyNotablePowerPenalty` | `public abstract int DailyNotablePowerPenalty` | property |
| `CalculateSecurityChange` | `public abstract ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false);` | method |
| `GetNearbyBanditPartyDefeatedSecurityEffect` | `public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths);` | method |
| `CalculateGoldGainDueToHighSecurity` | `public abstract void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber);` | method |
| `CalculateGoldCutDueToLowSecurity` | `public abstract void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
