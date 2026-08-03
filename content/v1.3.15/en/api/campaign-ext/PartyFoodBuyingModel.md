---
title: "PartyFoodBuyingModel"
description: "The campaign policy for food reserves, low-cost food estimates, and purchasable food or livestock candidates."
---
# PartyFoodBuyingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyFoodBuyingModel : MBGameModel<PartyFoodBuyingModel>`  
**Base:** `MBGameModel<PartyFoodBuyingModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyFoodBuyingModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyFoodBuyingModel.cs`

## One-line job

It supplies the reserve targets, low-cost reference price, and one purchasable food/livestock candidate for campaign AI; it does not mutate inventories, transfer gold, or change `FoodChange` itself.

## Mental Model

This is the pure policy layer for replenishment. `PartiesBuyFoodCampaignBehavior` runs when a party enters a settlement and during hourly party ticks. It reads the target days, computes the shortage, calls `FindItemToBuy` for non-player purchases, and then delegates the actual transaction to `SellItemsAction.Apply`. `AiVisitSettlementBehavior` also uses the low-cost reference price when scoring towns and villages as food targets.

```text
MobileParty food change / settlement inventory / party trade gold
                              |
                              v
Campaign.Current.Models.PartyFoodBuyingModel
             +----------------+----------------+
             v                                 v
reserve and price constants              FindItemToBuy
             |                                 |
             +--> PartiesBuyFoodCampaignBehavior -> SellItemsAction.Apply
```

The default reserve targets are `30` days for a town and `12` days for a village; the low-cost food average is `30`. A candidate must be in stock and be food or livestock that can be consumed as meat. Ordinary food must be below price `120` and affordable to the party; livestock has a relaxed price condition. The default implementation uses weighted randomness, so repeated calls are not guaranteed to select the same item.

### Registration and ownership

`Campaign.Current.Models` owns the registered instance, normally `DefaultPartyFoodBuyingModel`. `PartiesBuyFoodCampaignBehavior` supplies the event and tick lifetime; the model does not own inventory or subscribe to those events. Do not read it from static initialization before a campaign, party, and settlement exist.

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active model registry and campaign lifetime. |
| [`MobileParty`](../../campaign/MobileParty) | Supplies `FoodChange`, inventory food, party trade gold, and army context. |
| [`Settlement`](../../campaign/Settlement) | Supplies item inventory, settlement pricing, and town/village identity. |
| `ItemRosterElement` / `ItemObject` | Describe candidate quantity, food flag, value, and livestock meat count. |

### Downstream

| Type | Relation |
| --- | --- |
| [`PartiesBuyFoodCampaignBehavior`](../PartiesBuyFoodCampaignBehavior) | Computes shortage, requests candidates, and executes purchases on settlement-entry/hourly ticks. |
| [`AiVisitSettlementBehavior`](../AiVisitSettlementBehavior) | Uses reserve values and `LowCostFoodPriceAverage` in settlement scoring. |
| [`SellItemsAction`](../SellItemsAction) | Moves the item and delegates the gold transfer to the appropriate finance Action. |
| [`MobilePartyFoodConsumptionModel`](../MobilePartyFoodConsumptionModel) | Produces `FoodChange`, which determines whether the reserve target is short. |

### Actions, events, and save boundaries

The model has no save payload and dispatches no settlement-entry event. Item and gold changes belong to `SellItemsAction.Apply` and its downstream Actions. A custom `FindItemToBuy` must not edit `Settlement.ItemRoster`, `MobileParty.ItemRoster`, or gold, or the behavior will apply the transaction twice.

## Member contract

| Member | Purpose | Default behavior and timing |
| --- | --- | --- |
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | Minimum reserve target after buying in a town. | `30f`; read by the buying behavior and AI settlement scoring. |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | Minimum reserve target after buying in a village. | `12f`; used for village buying and scoring. |
| `LowCostFoodPriceAverage` | Reference average used to turn available gold into an estimated amount of cheap food. | `30f`; mainly affects `AiVisitSettlementBehavior`, not a fixed transaction price. |
| `FindItemToBuy(MobileParty, Settlement, out ItemRosterElement, out float)` | Selects one food or livestock candidate and reports its current price. | Returns `ItemRosterElement.Invalid` and `0f` when nothing qualifies; the caller decides whether to execute the trade. |

The default selector scans the settlement roster, accepts only positive quantities of food or `HorseComponent.IsLiveStock`, requires ordinary food to be priced below `120` and affordable, and weights candidates by price and item value. Livestock is evaluated per meat count. `MBRandom.RandomFloat` then performs the weighted choice.

## Real consumption path

The following shows the actual boundary after the model chooses a candidate. The model owns only the first half:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public bool BuyOneFood(MobileParty party, Settlement settlement)
{
    if (Campaign.Current == null || party == null || settlement == null)
    {
        return false;
    }

    PartyFoodBuyingModel model = Campaign.Current.Models.PartyFoodBuyingModel;
    model.FindItemToBuy(party, settlement,
        out ItemRosterElement item, out float price);
    if (item.EquipmentElement.Item == null || price > party.PartyTradeGold)
    {
        return false;
    }

    SellItemsAction.Apply(settlement.Party, party.Party, item, 1, null);
    return true;
}
```

The full behavior also checks that the campaign has started, the party has a leader, the settlement is a town or village, the party consumes food, army ownership and diplomacy permit the purchase, and the settlement has food. Army buying distributes the shortage across the leader and attached parties. The example demonstrates the real access and transaction boundary; it is not a replacement for those behavior preconditions.

## Customization boundary

To change how much food AI reserves, replace the three properties while preserving the selector's output contract. To change candidate ranking, preserve `ItemRosterElement.Invalid` and `price == 0f` as the no-candidate signal and ensure the returned element still exists in the current settlement roster. Inventory refresh, player trade UI, and caravan sales belong to their own behavior and Action paths.

## Risks and debugging order

1. **Trading inside the model:** `FindItemToBuy` may run repeatedly in one buying loop; direct roster or gold changes are duplicated by `SellItemsAction.Apply`.
2. **Returning stale inventory:** the returned element must come from the settlement's current roster; a removed item can make the transaction fail or desynchronize counts.
3. **Ignoring the no-candidate signal:** `ItemRosterElement.Invalid` or a null item means the caller must stop buying.
4. **Treating the reference price as a fixed price:** `LowCostFoodPriceAverage` affects AI scoring; the transaction price comes from settlement pricing and the Action path.
5. **Miscounting livestock:** one livestock candidate can provide multiple meat units; the buying loop adjusts its count using `MeatCount`.
6. **Wrong lifecycle:** do not call the default model before the campaign or settlement component is ready.

## Version and navigation

v1.3.15 and v1.4.5 retain the four public members and the default `30/12/30` values. The weighted price/value/livestock selection remains a default-model detail. When changing transactions, inspect the target version's `PartiesBuyFoodCampaignBehavior` and `SellItemsAction` together with this interface.

- [Party model family](../models/)
- [Parent: Campaign extension API](../)
- [↔ PartyNavigationModel](../PartyNavigationModel)
- [↔ PartyWageModel](../PartyWageModel)
- [MobileParty](../../campaign/MobileParty)
- [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior)
- [SellItemsAction](../SellItemsAction)
- [Settlement](../../campaign/Settlement)
