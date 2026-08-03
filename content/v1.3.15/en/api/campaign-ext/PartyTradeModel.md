---
title: "PartyTradeModel"
description: "The campaign trade-policy contract for caravan item-count limits and party-specific trade price penalties."
---

# PartyTradeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`  
**Base:** `MBGameModel<PartyTradeModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTradeModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTradeModel.cs`

## One-line responsibility

This model supplies replaceable campaign trade calculations: a caravan high-value transaction limit and a party-specific trade-price penalty factor. It does not move items, subtract gold, or complete a transaction.

## Mental model

Treat `PartyTradeModel` as the trade formula stored in `GameModels`, not as a transaction service. During campaign initialization Sandbox registers [DefaultPartyTradeModel](../DefaultPartyTradeModel/); a module can register another model during `InitializeGameStarter` and win by registration order. Once the campaign is running, consumers read the selected instance through `Campaign.Current.Models.PartyTradeModel`.

`GetTradePenaltyFactor` sits inside the price pipeline. [DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/) calls it for a non-null client party and multiplies the result into the price factor. The return value therefore changes an input to price calculation, not a transaction that has already happened. `CaravanTransactionHighestValueItemCount` gives caravan-related callers a count limit; it is not a universal trading capacity.

## When to use and when not to

- Replace this model when a mod needs different party-based trade penalties or a different caravan transaction count limit.
- Read `Campaign.Current.Models.PartyTradeModel` when displaying or diagnosing the current trade penalty; do not copy the vanilla skill formula into every caller.
- Do not subtract gold, move inventory, or invoke a trade Action from a Model. Actual buy/sell state changes belong to the transaction flow and actions such as [SellItemsAction](../SellItemsAction/).
- Do not read `Campaign.Current.Models` from `OnSubModuleLoad`. The campaign model container is available only after campaign assembly; registration belongs in [CampaignGameStarter](../CampaignGameStarter/) / `InitializeGameStarter`.

## Dependencies and consumers

#### Upstream

- [GameModels](../GameModels/) stores and exposes the registered model by type when the campaign is constructed.
- [Campaign](../../campaign/Campaign/) exposes the runtime `Current.Models` container.
- [MobileParty](../../campaign/MobileParty/) is the input to `GetTradePenaltyFactor`; the default implementation reads party skill effects from it.

#### Downstream

- [DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/) multiplies the factor into the base buy/sell price calculation.
- Caravan transaction code reads `CaravanTransactionHighestValueItemCount` as a candidate-count limit; the property itself performs no transaction.
- Gold and inventory mutations remain the responsibility of the transaction flow and trade Actions, not this Model.

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `CaravanTransactionHighestValueItemCount` | Supplies the high-value item-count limit read by caravan transaction logic. The vanilla implementation returns `3`. | Returns an integer only; it does not add items, subtract gold, or trigger a trade. |
| `GetTradePenaltyFactor(MobileParty party)` | Computes the party-specific trade penalty while a price model evaluates a client party. | Returns a `float` only; it must not mutate the party, market, or skills. |

The vanilla 1.3.15 implementation starts an `ExplainedNumber` at `1`, adds the `TradePenaltyReduction` skill effect, and returns its reciprocal. A higher skill reduction normally lowers the penalty factor; the final price still includes settlement, item-category, and other perk rules.

## Real acquisition and query example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

Campaign campaign = Campaign.Current;
MobileParty party = MobileParty.MainParty;
PartyTradeModel tradeModel = campaign.Models.PartyTradeModel;

int caravanLimit = tradeModel.CaravanTransactionHighestValueItemCount;
float penaltyFactor = tradeModel.GetTradePenaltyFactor(party);
```

This only reads the policy selected for the current campaign. To change it, register a `PartyTradeModel` subclass during `InitializeGameStarter`; do not mutate the `MobileParty` or settlement inventory based on this query.

## Risks and debugging boundaries

1. Reading `Campaign.Current` before the campaign exists, or calling an unfilled strong-typed property in a non-campaign mode, can produce a `NullReferenceException`. Cross-version or cross-mode code can use `GetGameModel<PartyTradeModel>()` and check for `null`.
2. Negative, unbounded, or semantically inverted factors can push the downstream price calculation outside its intended range. Test the factor at the full price pipeline boundary, not only in isolation.
3. Mutating gold, inventory, or a `Settlement` inside `GetTradePenaltyFactor` turns a calculation into a repeated world mutation because price evaluation can occur more than once.
4. Calling `AddModel` from a running `CampaignBehaviorBase` does not rebuild `Campaign.Current.Models`. Replacement must happen in `InitializeGameStarter`, and multiple modules are subject to last-registration-wins ordering.
5. `CaravanTransactionHighestValueItemCount` is a caravan contract value, not a general party-size limit or a universal UI trading limit.

## Version note

- The abstract members are unchanged between v1.3.15 and v1.4.5.
- The v1.4.5 default implementation still returns `3` and computes the reciprocal of the `TradePenaltyReduction`-adjusted `ExplainedNumber`; callers still obtain it through `Campaign.Current.Models.PartyTradeModel`.

## Navigation

- [Parent: campaign-ext](../)
- [Models family guide](../models/)
- [Siblings: PartyFoodBuyingModel](../PartyFoodBuyingModel/) · [PartyImpairmentModel](../PartyImpairmentModel/) · [PartyDesertionModel](../PartyDesertionModel/)
- [Container and registration: GameModels](../GameModels/) · [CampaignGameStarter](../CampaignGameStarter/)
- [Consumer: DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/)
- [Related: MobileParty](../../campaign/MobileParty/) · [SellItemsAction](../SellItemsAction/)
