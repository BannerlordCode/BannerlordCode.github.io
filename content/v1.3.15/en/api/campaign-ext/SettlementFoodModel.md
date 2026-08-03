---
title: "SettlementFoodModel"
description: "The replaceable settlement model contract for town food-stock deltas and storage limits."
---
# SettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`  
**Base:** `MBGameModel<SettlementFoodModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`

## One-line job

`SettlementFoodModel` defines how prosperity, garrison size, villages, buildings, sold market goods, and issues produce a town's daily food change and storage limits. It returns an explanation; it does not write `Town.FoodStocks`.

## Mental Model

Treat this as the town food ledger calculator. `Town.FoodChange`, `Town.FoodChangeWithoutMarketStocks`, and `Town.FoodChangeExplanation` read the registered model through `Campaign.Current.Models`; `Town.DailyTick` then applies the result to the stock and handles starvation state. The model belongs to the Campaign Model layer, not the inventory or transaction Action layer.

`includeMarketStocks` has a real meaning: when false, it excludes `Town.SoldItems` entries that add food to the stock, which is useful for comparing structural production with market contributions. `includeDescriptions` only controls `ExplainedNumber` descriptions. Neither option mutates world state.

## Dependencies and consumers

| Type or flow | Relationship |
| --- | --- |
| [`GameModels`](../GameModels) / [`Campaign`](../../campaign/Campaign) | Provides the registered model after campaign startup. |
| [`Town`](../../campaign/Town) | Supplies prosperity, garrison, siege state, bound villages, buildings, and sell logs; it also consumes the returned delta. |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | Prosperity changes feed the next food calculation. |
| `GarrisonTroopsCampaignBehavior` / `IssueModel` | Supply garrison and issue effects that the model combines; they own downstream state changes. |

## Public contract

| Member | Use and timing |
| --- | --- |
| `FoodStocksUpperLimit` | Base non-castle storage cap; `Town.FoodStocksUpperLimit()` adds castle and building effects. |
| `NumberOfProsperityToEatOneFood` | Denominator converting prosperity into daily food consumption. |
| `NumberOfMenOnGarrisonToEatOneFood` | Denominator converting garrison members into daily food consumption. |
| `CastleFoodStockUpperLimitBonus` | Extra storage capacity for castles. |
| `CalculateTownFoodStocksChange(Town, bool, bool)` | Returns the daily net food delta for ticks or explanatory UI. |

## Real access path

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Settlement.All
    .Where(settlement => settlement.IsTown)
    .Select(settlement => settlement.Town)
    .FirstOrDefault(candidate => candidate != null);

if (town != null && Campaign.Current != null)
{
    SettlementFoodModel model = Campaign.Current.Models.SettlementFoodModel;
    float netChange = model.CalculateTownFoodStocksChange(town).ResultNumber;
    float structuralChange = model
        .CalculateTownFoodStocksChange(town, includeMarketStocks: false)
        .ResultNumber;
    int upperLimit = town.FoodStocksUpperLimit();
}
```

Register a custom implementation through `CampaignGameStarter.AddModel` during campaign startup. A runtime Behavior should read or apply the result rather than instantiate a temporary model during a tick.

## Risks and version boundary

- `CalculateTownFoodStocksChange` returns a daily delta, not a new stock value; adding it twice amplifies food production.
- `Town.DailyTick` clamps an exhausted stock and updates the owner's remaining-food percentage. A replacement should preserve the meaning of negative results instead of hiding starvation.
- `FoodStocksUpperLimit` is not the final cap: castle bonuses and `FoodStock` building effects are combined by `Town`.
- Reading the model before Campaign or `GameModels` exists can produce a null reference; do not query towns from `OnSubModuleLoad`.
- The public contract is stable between the documented versions, but formulas and building/perk inputs are version-specific.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Default: DefaultSettlementFoodModel](../DefaultSettlementFoodModel)
- [Related: SettlementProsperityModel](../SettlementProsperityModel) · [SettlementGarrisonModel](../SettlementGarrisonModel)
- [Downstream: Town](../../campaign/Town)

