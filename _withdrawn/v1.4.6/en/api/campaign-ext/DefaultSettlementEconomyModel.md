---
title: "DefaultSettlementEconomyModel"
description: "DefaultSettlementEconomyModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SettlementEconomyModel; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSettlementEconomyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs. It is a public class, implementing/inheriting SettlementEconomyModel; the inheritance chain is DefaultSettlementEconomyModel → SettlementEconomyModel → MBGameModel → GameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementEconomyModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSettlementEconomyModel → SettlementEconomyModel → MBGameModel → GameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `float>GetSupplyDemandForCategory` | `public override ValueTuple<float, float>GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)` | method |
| `GetDailyDemandForCategory` | `public override float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity)` | method |
| `GetTownGoldChange` | `public override int GetTownGoldChange(Town town)` | method |
| `CalculateDailySettlementBudgetForItemCategory` | `public override float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)` | method |
| `GetDemandChangeFromValue` | `public override float GetDemandChangeFromValue(float purchaseValue)` | method |
| `GetEstimatedDemandForCategory` | `public override float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementEconomyModel](../SettlementEconomyModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
