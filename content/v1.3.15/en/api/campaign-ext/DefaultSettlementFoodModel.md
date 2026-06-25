---
title: "DefaultSettlementFoodModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementFoodModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate town food stocks change`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel());
```

## See Also

- [Complete Class Catalog](../catalog)