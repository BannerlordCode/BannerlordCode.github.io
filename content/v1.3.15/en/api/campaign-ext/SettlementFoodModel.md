---
title: "SettlementFoodModel"
description: "Auto-generated class reference for SettlementFoodModel."
---
# SettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`
**Base:** `MBGameModel<SettlementFoodModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`

## Overview

`SettlementFoodModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementFoodModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FoodStocksUpperLimit` | `public abstract int FoodStocksUpperLimit { get; }` |
| `NumberOfProsperityToEatOneFood` | `public abstract int NumberOfProsperityToEatOneFood { get; }` |
| `NumberOfMenOnGarrisonToEatOneFood` | `public abstract int NumberOfMenOnGarrisonToEatOneFood { get; }` |
| `CastleFoodStockUpperLimitBonus` | `public abstract int CastleFoodStockUpperLimitBonus { get; }` |

## Key Methods

### CalculateTownFoodStocksChange
`public abstract ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of town food stocks change.

```csharp
// Obtain an instance of SettlementFoodModel from the subsystem API first
SettlementFoodModel settlementFoodModel = ...;
var result = settlementFoodModel.CalculateTownFoodStocksChange(town, false, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementFoodModel instance = ...;
```

## See Also

- [Area Index](../)