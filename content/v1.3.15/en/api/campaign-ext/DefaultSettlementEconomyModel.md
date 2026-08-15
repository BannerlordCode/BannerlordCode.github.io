---
title: "DefaultSettlementEconomyModel"
description: "The source-backed default rules for market supply and demand smoothing, daily budgets, and town-gold drift."
---
# DefaultSettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`  
**Base:** [`SettlementEconomyModel`](../SettlementEconomyModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs` (1.4.5 authority; same named implementation in 1.3.15)

## One-line job

`DefaultSettlementEconomyModel` converts town prosperity, item-category properties, market inventory, and price indexes into demand, smoothed supply/demand, consumption budgets, and town-gold deltas. It computes policy results; it does not remove items from an `ItemRoster` or change `Town.Gold` itself.

## Mental Model

`ItemConsumptionBehavior` calls this Model each day: it estimates category demand, uses the budget to consume inventory, updates sell logs, and changes town gold. `TownMarketData` also calls it to convert purchase value into demand and to merge old and current supply/demand. The Model is therefore a stateless policy layer; market data and gold mutation belong to downstream Behaviors.

The key parameters create a stable feedback loop: supply is `85%` old value plus `15%` daily supply, demand is smoothed the same way, demand is based on prosperity and category coefficients, luxury demand starts only above `3000` prosperity, and the daily budget multiplies demand by the price index to the `0.3` power.

## Dependencies

| Type or flow | Relationship |
| --- | --- |
| [`SettlementEconomyModel`](../SettlementEconomyModel) / [`GameModels`](../GameModels) | Supplies the abstract contract and registered access path. |
| [`Town`](../../campaign/Town) / `TownMarketData` | Supply prosperity, gold, supply/demand, inventory, and price indexes. |
| `ItemCategory` / [`ItemObject`](../../core-extra/ItemObject) | Supply demand coefficients, category value, and item prices. |
| `ItemConsumptionBehavior` | Applies the Model's results as inventory consumption, sell logs, and town-gold changes. |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | Daily prosperity changes feed the next demand calculation. |

## Default formulas

| Member | 1.4.5 behavior |
| --- | --- |
| `GetSupplyDemandForCategory` | `supply = oldSupply * 0.85 + dailySupply * 0.15`; demand is smoothed the same way; supply is clamped to `0.1f` minimum. |
| `GetDailyDemandForCategory` | `max(0, prosperity) * BaseDemand + max(0, prosperity - 3000) * LuxuryDemand`; a category without base demand falls back to `prosperity * 0.01`. |
| `GetTownGoldChange` | Target gold is `10000 + prosperity * 12`; returns `25%` of target minus current gold. |
| `CalculateDailySettlementBudgetForItemCategory` | `demand * pow(priceIndex, 0.3)`. |
| `GetDemandChangeFromValue` | Returns `15%` of the purchase value. |
| `GetEstimatedDemandForCategory` | Delegates to the registered Model's `GetDailyDemandForCategory(town, category, 1000)`. |

The last method intentionally calls through `Campaign.Current.Models.SettlementEconomyModel` so an installed replacement influences estimated demand. A derived Model that calls the same entry point recursively will overflow; call `base` or reuse an explicit formula instead.

## Real access and replacement

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

if (Campaign.Current != null)
{
    SettlementEconomyModel model = Campaign.Current.Models.SettlementEconomyModel;
    Town town = Town.AllTowns.FirstOrDefault();
    ItemCategory category = ItemCategories.All.FirstOrDefault();
    if (town != null && category != null)
    {
        float demand = model.GetDailyDemandForCategory(town, category);
        float budget = model.CalculateDailySettlementBudgetForItemCategory(town, demand, category);
        int goldDelta = model.GetTownGoldChange(town);
    }
}
```

Customize by inheriting the default class and registering `gameStarter.AddModel(new ModSettlementEconomyModel())` during `InitializeGameStarter`. Do not treat `GetTownGoldChange` as an executed transaction, and do not call `ChangeGold` or remove roster items from the Model.

## Risks and version boundary

- Demand, budget, and gold are different units; using demand as gold breaks both consumption quantity and market price feedback.
- `GetEstimatedDemandForCategory` calls through `Campaign.Current.Models.SettlementEconomyModel`; replacements must avoid recursion.
- The smoothing factors and the `3000` luxury threshold affect every town, so local tuning changes the long-term caravan and consumption feedback loop.
- The gold target runs every daily tick; an unbounded result rapidly creates or destroys money.
- Market and treasury state are saved by settlement and Behavior code, not by this stateless Model. This page uses the 1.4.5 source as authority.

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Models family](../models/)
- [Contract: SettlementEconomyModel](../SettlementEconomyModel)
- [Related: SettlementProsperityModel](../SettlementProsperityModel) · [SettlementFoodModel](../SettlementFoodModel)
- [Downstream: Town](../../campaign/Town)
