---
title: "DefaultSettlementFoodModel"
description: "Auto-generated class reference for DefaultSettlementFoodModel."
---
# DefaultSettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**Base:** `SettlementFoodModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`

## Overview

`DefaultSettlementFoodModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementFoodModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FoodStocksUpperLimit` | `public override int FoodStocksUpperLimit { get; }` |
| `NumberOfProsperityToEatOneFood` | `public override int NumberOfProsperityToEatOneFood { get; }` |
| `NumberOfMenOnGarrisonToEatOneFood` | `public override int NumberOfMenOnGarrisonToEatOneFood { get; }` |
| `CastleFoodStockUpperLimitBonus` | `public override int CastleFoodStockUpperLimitBonus { get; }` |

## Key Methods

### CalculateTownFoodStocksChange
`public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `town food stocks change`.

```csharp
// Obtain an instance of DefaultSettlementFoodModel from the subsystem API first
DefaultSettlementFoodModel defaultSettlementFoodModel = ...;
var result = defaultSettlementFoodModel.CalculateTownFoodStocksChange(town, false, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel());
```

## See Also

- [Area Index](../)