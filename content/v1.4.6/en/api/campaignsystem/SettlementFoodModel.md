---
title: "SettlementFoodModel"
description: "SettlementFoodModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SettlementFoodModel>; 5 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs."
---
# SettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`

## Overview

SettlementFoodModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementFoodModel>; the inheritance chain is SettlementFoodModel → MBGameModel. It exposes 5 public/protected members: 1 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementFoodModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SettlementFoodModel → MBGameModel. The surface is property-led (properties 4/5, methods 1/5), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FoodStocksUpperLimit` | `public abstract int FoodStocksUpperLimit` | property |
| `NumberOfProsperityToEatOneFood` | `public abstract int NumberOfProsperityToEatOneFood` | property |
| `NumberOfMenOnGarrisonToEatOneFood` | `public abstract int NumberOfMenOnGarrisonToEatOneFood` | property |
| `CastleFoodStockUpperLimitBonus` | `public abstract int CastleFoodStockUpperLimitBonus` | property |
| `CalculateTownFoodStocksChange` | `public abstract ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
