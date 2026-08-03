---
title: "DefaultPartyFoodBuyingModel"
description: "The Sandbox default PartyFoodBuyingModel: 30 town days, 12 village days, and weighted selection of affordable food or livestock."
---

# DefaultPartyFoodBuyingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`  
**Base:** `PartyFoodBuyingModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`  
**Contract:** [PartyFoodBuyingModel](../PartyFoodBuyingModel/)

## One-line responsibility

This is the vanilla AI food-buying policy: it targets `30` food days in towns, `12` in villages, uses `30` as the low-cost baseline, and weighted-selects food or live livestock from settlement stock.

## Mental model

This class implements the “choose a target and choose an item” contract of [PartyFoodBuyingModel](../PartyFoodBuyingModel/), not a transaction executor. Sandbox registers it during campaign setup. [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior/) reads the target days, calls `FindItemToBuy` after its settlement/party checks, and only then uses [SellItemsAction](../SellItemsAction/) to mutate gold and inventory.

`FindItemToBuy` can therefore be queried without buying anything. A subclass can usually change only a target-day property or replace the candidate-selection method while preserving the output contract. It must not write campaign state from the Model.

The actual purchase is triggered by [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior/), which listens to `CampaignEvents.SettlementEntered` and `CampaignEvents.HourlyTickPartyEvent`. The behavior checks campaign state, party leadership, settlement type, food consumption, army attachment, faction hostility, and stock before it reads this model. A model result therefore does not by itself mean that a purchase will happen.

## When to use and when not to

- Inherit and override the relevant property when AI town or village food reserves need a different target.
- Override `FindItemToBuy` when candidate thresholds or weighting need to change, while still returning a valid item copy and matching price.
- Read `Campaign.Current.Models.PartyFoodBuyingModel` to inspect the active policy; do not create a separate default instance and assume it is the selected one.
- Do not call `SellItemsAction` or mutate `Settlement.ItemRoster` inside `FindItemToBuy`, because the behavior loop applies the transaction afterward.

## Dependencies and consumers

- [PartyFoodBuyingModel](../PartyFoodBuyingModel/) defines the three threshold properties and `FindItemToBuy`.
- [GameModels](../GameModels/) retains the Sandbox default or a later mod override during campaign assembly.
- [PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior/) calculates shortages and loops over model results.
- [MobileParty](../../campaign/MobileParty/) supplies buyer gold, food consumption, and party state; [Settlement](../../campaign/Settlement/) supplies stock and prices.
- [SellItemsAction](../SellItemsAction/) performs the actual inventory/gold transfer.

## Member behavior

| Member | v1.3.15 vanilla behavior | Timing and side-effect boundary |
|---|---|---|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | Returns `30f`. | Read by the behavior when calculating a town shortage; adds no food. |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | Returns `12f`. | Read for village shortages; it does not guarantee village stock. |
| `LowCostFoodPriceAverage` | Returns `30f`. | Used as a low-cost baseline in AI settlement evaluation; it does not set transaction price. |
| `FindItemToBuy` | Scans stock, filters food/live livestock by price and buyer gold, then weighted-selects an item using price and item value. | Returns an `ItemRosterElement` copy and price; returns `Invalid`/`0` when no candidate exists and performs no transaction. |

## Vanilla selection details

The default implementation scans positive-amount elements in `settlement.ItemRoster`. Ordinary food must be priced below `120`; horses with a live-livestock component enter the livestock branch. The buyer must have enough `PartyTradeGold`. Ordinary-food weight combines the squared normalized differences from `120` price and `100` item value; livestock first divides by meat count before using the same style of weight. `MBRandom.RandomFloat` then performs weighted sampling, so this is not a fixed cheapest-item sorter.

When nothing qualifies, the outputs remain `ItemRosterElement.Invalid` and `0f`. A caller must check the item before reading its components or passing it to a trade Action.

## Real acquisition and replacement example

Read the active model first:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

MobileParty party = MobileParty.MainParty;
Settlement settlement = party.CurrentSettlement;
if (settlement != null)
{
    PartyFoodBuyingModel model = Campaign.Current.Models.PartyFoodBuyingModel;
    model.FindItemToBuy(party, settlement, out ItemRosterElement item, out float price);
    bool usable = item.EquipmentElement.Item != null && price <= party.PartyTradeGold;
}
```

To change only the town target while preserving vanilla candidate selection, subclass and register during campaign setup:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class MyPartyFoodBuyingModel : DefaultPartyFoodBuyingModel
{
    public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown => 45f;
}

public sealed class MySubModule : MBSubModuleBase
{
    protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        if (game.GameType is Campaign)
        {
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddModel(new MyPartyFoodBuyingModel());
        }
    }
}
```

This keeps the default candidate filtering and weighted selection. The food behavior still applies the real gold/inventory transaction through `SellItemsAction`.

## Risks and version boundaries

1. Negative or very large target days can make `PartiesBuyFoodCampaignBehavior` calculate unreasonable quantities, causing repeated purchases or stock depletion. Test against `FoodChange` and settlement stock.
2. A custom `FindItemToBuy` must return `ItemRosterElement.Invalid`/`0f` for no candidate and keep the price paired with the returned item; otherwise the behavior may read null components or use the wrong price.
3. The Model returns a recommendation. Calling a trade Action inside it makes the outer behavior loop buy again, duplicating gold and inventory changes.
4. `Settlement.ItemRoster` and `SettlementComponent` are valid only for a live settlement object. Do not cache a loading-stage or destroyed settlement in model state.
5. These thresholds are not global player-food constants. Main-party exclusion, war status, army attachment, food consumption, and settlement stock are checked separately by the behavior.
6. After `FindItemToBuy` returns, the behavior may calculate the transaction price again inside `SellItemsAction.Apply`. A price change can prevent the transfer, while live livestock can still advance the loop by `MeatCount`; do not treat one model query as a completed trade.
7. Army purchases distribute settlement food using each party's `FoodChange`; a custom food-consumption model must preserve the non-zero total-consumption boundary used for that division.
8. v1.4.5 keeps `30/12/30` and the candidate-selection semantics; the decompiled `GetItemPrice` argument shape changes internally and should not become a mod-level assumption.

## Navigation

- [Parent: campaign-ext](../)
- [Contract: PartyFoodBuyingModel](../PartyFoodBuyingModel/)
- [Models family guide](../models/)
- [Siblings: DefaultPartyTradeModel](../DefaultPartyTradeModel/) · [DefaultPartyImpairmentModel](../DefaultPartyImpairmentModel/)
- [Consumers: PartiesBuyFoodCampaignBehavior](../PartiesBuyFoodCampaignBehavior/) · [SellItemsAction](../SellItemsAction/)
- [Registration container: GameModels](../GameModels/) · [CampaignGameStarter](../CampaignGameStarter/)
