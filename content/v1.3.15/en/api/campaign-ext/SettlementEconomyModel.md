---
title: "SettlementEconomyModel"
description: "Provides market demand, supply, budget, and town-gold policy for settlement economy behaviors."
---
# SettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`  
**Base:** `MBGameModel<SettlementEconomyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementEconomyModel.cs`

## One-line job

`SettlementEconomyModel` predicts demand, supply, daily market budget, and town-gold change for an item category. It is consulted by economy behaviors and trade UI; it does not add items or gold itself.

## Mental Model

The model is a policy boundary around market simulation. `TownMarketData` and `ItemConsumptionBehavior` ask it for demand and budget, then mutate inventories and town gold through their own behavior. Prosperity, production, and item values are inputs, not outputs owned by this model. A replacement must keep supply/demand units consistent and should return explanations or bounded values for missing categories.

```text
Town + ItemCategory + inventory + prosperity
          -> SettlementEconomyModel
          -> demand / supply / budget / gold delta
          -> ItemConsumptionBehavior / TownMarketData apply changes
```

## Dependencies

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the registered economy model. |
| [`Town`](../../campaign/Town) / `TownMarketData` | Supply market state and prices. |
| [`ItemObject`](../../core-extra/ItemObject) / `ItemCategory` | Identify goods and values. |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | Prosperity changes feed daily demand. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `GetEstimatedDemandForCategory` | Estimate demand from item data and category. | Market preview |
| `GetDailyDemandForCategory` | Return daily category demand. | Consumption tick |
| `GetSupplyDemandForCategory` | Reconcile old supply/demand with daily changes. | Market update |
| `GetTownGoldChange` | Calculate town treasury drift. | Consumption behavior |
| `CalculateDailySettlementBudgetForItemCategory` | Cap a town's spending for a category. | Caravan and item consumption |

## Real access path

```csharp
public float DailyFoodDemand(Town town, ItemCategory category)
{
    return Campaign.Current.Models.SettlementEconomyModel
        .GetDailyDemandForCategory(town, category);
}

public int TownGoldDelta(Town town)
{
    return Campaign.Current.Models.SettlementEconomyModel.GetTownGoldChange(town);
}
```

`ItemConsumptionBehavior` uses these values before it removes consumed goods or changes the town balance. Do not perform those mutations from the model.

## Risks and debugging order

1. Keep category units and sign conventions consistent: demand is not a gold amount.
2. Do not return an unbounded budget; it can drain or create town gold every tick.
3. Preserve missing-market and zero-supply branches for newly created settlements.
4. Prosperity changes feed demand later; avoid calling the prosperity model recursively from a budget query.
5. Economy state is saved by market/settlement behaviors, not by the model.

## Navigation

- [Campaign-ext models family](../models/)
- [Town](../../campaign/Town)
- [ItemObject](../../core-extra/ItemObject)
- [SettlementProsperityModel](../SettlementProsperityModel)
- [PartyWageModel](../PartyWageModel)
