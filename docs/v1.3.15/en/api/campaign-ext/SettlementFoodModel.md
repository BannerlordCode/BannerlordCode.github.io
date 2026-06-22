<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementFoodModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`
**Base:** `MBGameModel<SettlementFoodModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`

## Overview

`SettlementFoodModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementFoodModel>(new MySettlementFoodModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `FoodStocksUpperLimit` | `public abstract int FoodStocksUpperLimit { get; }` |
| `NumberOfProsperityToEatOneFood` | `public abstract int NumberOfProsperityToEatOneFood { get; }` |
| `NumberOfMenOnGarrisonToEatOneFood` | `public abstract int NumberOfMenOnGarrisonToEatOneFood { get; }` |
| `CastleFoodStockUpperLimitBonus` | `public abstract int CastleFoodStockUpperLimitBonus { get; }` |

## Key Methods

### CalculateTownFoodStocksChange
```csharp
public abstract ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
```

## Usage Example

```csharp
// Typical usage of SettlementFoodModel (Model)
Game.Current.ReplaceModel<SettlementFoodModel>(new MySettlementFoodModel());
```

## See Also

- [Complete Class Catalog](../catalog)