<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementFoodModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**Base:** `SettlementFoodModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`

## Overview

`DefaultSettlementFoodModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `FoodStocksUpperLimit` | `public override int FoodStocksUpperLimit { get; }` |
| `NumberOfProsperityToEatOneFood` | `public override int NumberOfProsperityToEatOneFood { get; }` |
| `NumberOfMenOnGarrisonToEatOneFood` | `public override int NumberOfMenOnGarrisonToEatOneFood { get; }` |
| `CastleFoodStockUpperLimitBonus` | `public override int CastleFoodStockUpperLimitBonus { get; }` |

## Key Methods

### CalculateTownFoodStocksChange
```csharp
public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementFoodModel (Model)
Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel());
```

## See Also

- [Complete Class Catalog](../catalog)