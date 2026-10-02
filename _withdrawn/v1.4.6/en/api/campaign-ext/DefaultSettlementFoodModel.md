---
title: "DefaultSettlementFoodModel"
description: "DefaultSettlementFoodModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SettlementFoodModel; 5 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSettlementFoodModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs. It is a public class, implementing/inheriting SettlementFoodModel; the inheritance chain is DefaultSettlementFoodModel → SettlementFoodModel → MBGameModel → GameModel. It exposes 5 public/protected members: 1 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementFoodModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSettlementFoodModel → SettlementFoodModel → MBGameModel → GameModel. The surface is property-led (properties 4/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FoodStocksUpperLimit` | `public override int FoodStocksUpperLimit` | property |
| `NumberOfProsperityToEatOneFood` | `public override int NumberOfProsperityToEatOneFood` | property |
| `NumberOfMenOnGarrisonToEatOneFood` | `public override int NumberOfMenOnGarrisonToEatOneFood` | property |
| `CastleFoodStockUpperLimitBonus` | `public override int CastleFoodStockUpperLimitBonus` | property |
| `CalculateTownFoodStocksChange` | `public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementFoodModel](../SettlementFoodModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
