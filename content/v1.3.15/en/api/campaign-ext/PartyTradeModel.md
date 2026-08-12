---
title: "PartyTradeModel"
description: "A replaceable campaign model that provides rules for the caravan candidate count and party trade-price penalties."
---

# PartyTradeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`  
**Base:** `MBGameModel<PartyTradeModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTradeModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTradeModel.cs`

## One-line responsibility

It provides two trade-strategy inputs: the upper limit on the number of high-value caravan transaction candidates, and a trade-price penalty factor computed from party skills. It does not move items, subtract gold, or represent a completed transaction. Price models, the caravan flow, and the trade UI may read these values repeatedly, so implementations must stay pure-computation in semantics.

## Mental model

Place `PartyTradeModel` in the price-calculation layer of `GameModels`, not as a transaction service. Sandbox registers `DefaultPartyTradeModel` during campaign startup, after which consumers read the current instance through `Campaign.Current.Models.PartyTradeModel`. `GetTradePenaltyFactor` is pulled into the full price chain by `DefaultTradeItemPriceFactorModel`: it first multiplies the party trade penalty into the base penalty, then converts the price according to the buy or sell direction.

```text
MobileParty / Trade skill / caravan policy
                 |
                 v
Campaign.Current.Models.PartyTradeModel
          +------+------------------+
          v                         v
CaravanTransactionHighestValueItemCount   GetTradePenaltyFactor
          |                         |
          v                         v
caravan candidate count limit   DefaultTradeItemPriceFactorModel
                                    |
                                    v
Settlement / ItemObject / buy-sell price
```

The penalty factor changes a price-calculation input, not inventory or gold state. On buy, the price chain uses the base price factor multiplied by `1 + tradePenalty`; on sell, it divides the base price factor by `1 + tradePenalty`. Settlement, item-category, culture, and other Perk rules are layered on afterward. The caravan count property is a contract value, not the capacity of all parties, nor a command that auto-executes a trade.

## When to use and when not to

- Replace this Model when you want to change a category of party's trade-price penalty, the effect of party skills on price, or the upper limit of high-value caravan candidates.
- When you want to inspect the current party's penalty in the UI or for diagnostics, query `Campaign.Current.Models.PartyTradeModel`; do not copy the vanilla skill formula into every caller.
- Do not subtract gold, move inventory, refresh the market, or invoke a trade Action inside the Model; the real state changes belong to the transaction flow and entry points such as `SellItemsAction`.
- Do not read `Campaign.Current.Models` from `OnSubModuleLoad` or before the campaign is assembled; model registration should complete during the initialization phase of `CampaignGameStarter`.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the runtime `Current.Models` container. |
| [`GameModels`](../GameModels) | Holds the Models registered during campaign construction, keyed by type. |
| [`MobileParty`](../../campaign/MobileParty) | Is the input to `GetTradePenaltyFactor`; the default implementation reads party skill effects from it. |
| `DefaultSkillEffects.TradePenaltyReduction` | The default model adds the skill effect to the `ExplainedNumber`. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`DefaultTradeItemPriceFactorModel`](../DefaultTradeItemPriceFactorModel) | Multiplies the party penalty factor into the full buy/sell price penalty chain. |
| [`SellItemsAction`](../SellItemsAction) | Performs the actual item and gold changes; it is not called by this Model. |
| `Caravan` transaction flow | Reads `CaravanTransactionHighestValueItemCount` as the high-value candidate limit; the property itself does not execute a trade. |
| [`Settlement`](../../campaign/Settlement) | Provides merchant, village/town, and market-price context. |

### Action, events and save boundary

The model has no save fields of its own and dispatches no trade events. `DefaultTradeItemPriceFactorModel` may compute prices multiple times before a single UI preview or actual trade, so `GetTradePenaltyFactor` must be pure-functional; gold, inventory, and taxes should be handled by the transaction flow and its Actions.

## Members contract

| Member | Purpose and when called | Side-effect boundary |
| --- | --- | --- |
| `CaravanTransactionHighestValueItemCount` | Provides the high-value item candidate-count cap for caravan trade selection logic. | The default returns `3`; it only returns an integer, adds no items, subtracts no gold. |
| `GetTradePenaltyFactor(MobileParty party)` | Returns the party's trade penalty factor while a price model computes the buy/sell price for some client party. | The default starts an `ExplainedNumber` at `1`, adds `TradePenaltyReduction`, then takes the reciprocal; it only returns a `float`, and mutates neither the party nor the market. |

The default 1.3.15/1.4.5 implementations both initialize `ExplainedNumber` to `1f`, call `SkillHelper.AddSkillBonusForParty(DefaultSkillEffects.TradePenaltyReduction, party, ref explainedNumber)`, then return `1f / explainedNumber.ResultNumber`. The skill modifier normally lowers the penalty factor, but the final price is still decided by the full price model; this return value must not be treated directly as a gold amount or final item price.

## Real acquisition path

The code below reads both actual public entry points from the current campaign; it suits price diagnostics or display:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public bool TryReadTradePolicy(out int caravanLimit, out float penaltyFactor)
{
    caravanLimit = 0;
    penaltyFactor = 1f;
    if (Campaign.Current == null || MobileParty.MainParty == null)
    {
        return false;
    }

    PartyTradeModel model = Campaign.Current.Models.PartyTradeModel;
    caravanLimit = model.CaravanTransactionHighestValueItemCount;
    penaltyFactor = model.GetTradePenaltyFactor(MobileParty.MainParty);
    return true;
}
```

Real price consumers also go through `Campaign.Current.Models.TradeItemPriceFactorModel` and the settlement/item context; if you need to display the final price, call the full price model rather than multiplying `penaltyFactor` directly onto `ItemObject.Value`.

## Safe replacement boundary

Custom models should register in `InitializeGameStarter`, keep a clean vanilla delegate, and avoid calling `AddModel` inside a running `CampaignBehaviorBase` expecting it to rebuild the existing `GameModels`. If you only adjust the party skill modifier, delegate vanilla `GetTradePenaltyFactor` and then add a limited factor; if you change the caravan candidate cap, do not reuse that value as a normal party capacity.

## Risks and troubleshooting order

1. **Campaign not yet built:** Reading `Campaign.Current` too early, or a strongly-typed Model property, may be null; cross-mode code should use `GetGameModel<PartyTradeModel>()` and null-check.
2. **Treating the factor as the final price:** `GetTradePenaltyFactor` is only an input in the price chain; direction, settlement, item category, and other Perks still keep changing the result.
3. **Side effects during computation:** Price evaluation may run repeatedly, so mutating gold, inventory, or settlement here causes duplicate trades or corrupted state.
4. **Runtime replacement failure:** `AddModel` inside a `CampaignBehaviorBase` does not rebuild the already-assembled `Campaign.Current.Models`; the replacement timing and module registration order decide the final instance.
5. **Misusing the caravan cap:** `CaravanTransactionHighestValueItemCount` defaults to `3` and only expresses the caravan trade contract, not party size, inventory capacity, or a general UI limit.
6. **Zero or negative factor:** Returning an unbounded, negative, or semantically inverted factor pushes the price chain into an abnormal range; validate the boundary on the full buy/sell price path.

## Version and navigation

The two abstract members are identical between v1.3.15 and v1.4.5; the default caravan cap is still `3`, and the penalty factor is still the reciprocal of the `ExplainedNumber` adjusted by `TradePenaltyReduction`. Actual callers and other price factors may change across module versions, so cross-version implementations should delegate to the default model of the target version.

- [↑ Parent: Campaign Ext API](../)
- [Party Models index](../models/)
- [↔ PartyImpairmentModel](../PartyImpairmentModel)
- [↔ PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [GameModels](../GameModels)
- [CampaignGameStarter](../CampaignGameStarter)
- [DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel)
- [MobileParty](../../campaign/MobileParty)
- [SellItemsAction](../SellItemsAction)
