<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementFoodModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`
**Base:** `MBGameModel<SettlementFoodModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementFoodModel.cs`

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

**Purpose:** Handles logic related to `calculate town food stocks change`.

## Usage Example

```csharp
var implementation = new CustomSettlementFoodModel();
```

## See Also

- [Complete Class Catalog](../catalog)