---
title: "DefaultSettlementFoodModel"
description: "DefaultSettlementFoodModel: a public class in TaleWorlds.CampaignSystem, inheriting SettlementFoodModel; 5 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs."
---
# DefaultSettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`

## Overview

DefaultSettlementFoodModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs. It is a public class, implementing/inheriting SettlementFoodModel; the inheritance chain is DefaultSettlementFoodModel → SettlementFoodModel → MBGameModel. It exposes 5 public/protected members: 1 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementFoodModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultSettlementFoodModel → SettlementFoodModel → MBGameModel. The surface is property-led (properties 4/5, methods 1/5), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FoodStocksUpperLimit` | `public override int FoodStocksUpperLimit` | property |
| `NumberOfProsperityToEatOneFood` | `public override int NumberOfProsperityToEatOneFood` | property |
| `NumberOfMenOnGarrisonToEatOneFood` | `public override int NumberOfMenOnGarrisonToEatOneFood` | property |
| `CastleFoodStockUpperLimitBonus` | `public override int CastleFoodStockUpperLimitBonus` | property |
| `CalculateTownFoodStocksChange` | `public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementFoodModel](../SettlementFoodModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
