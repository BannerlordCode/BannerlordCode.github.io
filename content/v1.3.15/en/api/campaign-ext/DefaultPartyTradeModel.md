---
title: "DefaultPartyTradeModel"
description: "The Sandbox default PartyTradeModel: a caravan count limit of 3 and a TradePenaltyReduction-based party trade penalty factor."
---

# DefaultPartyTradeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyTradeModel : PartyTradeModel`  
**Base:** `PartyTradeModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTradeModel.cs`  
**Contract:** [PartyTradeModel](../PartyTradeModel/)

## One-line responsibility

This is the Sandbox vanilla trade policy: it limits caravan high-value transactions to `3` items and converts the party's `TradePenaltyReduction` skill effect into a trade-price penalty factor.

## Mental model

`DefaultPartyTradeModel` is not a runtime transaction service that a mod should instantiate and call in isolation. It implements the [PartyTradeModel](../PartyTradeModel/) contract. Sandbox registers it with `AddModel(new DefaultPartyTradeModel())` during campaign setup, and `GameModels` exposes the last registered model through `Campaign.Current.Models.PartyTradeModel`.

When the price model calls it, it receives only a factor. The default implementation does not touch party gold, settlement inventory, or trade Actions. If a mod wants to change one rule while retaining the rest, subclass it, override the smallest member, and register the subclass in `InitializeGameStarter` so the vanilla behavior remains the fallback.

## When to use and when not to

- Inherit from this class when vanilla behavior is the baseline and only the caravan limit or trade penalty formula needs to change.
- Read `Campaign.Current.Models.PartyTradeModel` when inspecting the current rule; do not create a second default instance because it may not represent the final registration order.
- Do not mutate a party or market from `GetTradePenaltyFactor`; price calculation may invoke it more than once.
- Do not call `AddModel` during a running campaign and expect a hot replacement. Registration must happen in `InitializeGameStarter`, with module ordering taken into account.

## Dependencies

- [PartyTradeModel](../PartyTradeModel/) defines the two required members.
- [GameModels](../GameModels/) collects models by type and exposes the selected instance.
- [DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/) calls `GetTradePenaltyFactor` and multiplies it into buy/sell price factors.
- [MobileParty](../../campaign/MobileParty/) supplies the party skill effects used by the default formula.

## Member behavior

| Member | Vanilla behavior | Timing and side-effect boundary |
|---|---|---|
| `CaravanTransactionHighestValueItemCount` | Always returns `3`. | Read by caravan transaction selection; performs no transaction. |
| `GetTradePenaltyFactor(MobileParty party)` | Starts an `ExplainedNumber` at `1`, adds `DefaultSkillEffects.TradePenaltyReduction` for the party, then returns `1 / ResultNumber`. | Called during price-factor evaluation; reads party skills only. |

This result is one multiplier in the price pipeline. Settlement, item category, buy/sell direction, and other perk adjustments remain in [DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/).

## Real acquisition and replacement example

Runtime reads should use the instance assembled into `GameModels`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

PartyTradeModel tradeModel = Campaign.Current.Models.PartyTradeModel;
float penalty = tradeModel.GetTradePenaltyFactor(MobileParty.MainParty);
```

To keep the vanilla formula while changing only the caravan limit, register a derived implementation from a SubModule's `InitializeGameStarter`:

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;

public sealed class MyPartyTradeModel : DefaultPartyTradeModel
{
    public override int CaravanTransactionHighestValueItemCount => 5;
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyTradeModel());
}
```

After model assembly, the strong-typed campaign property points to `MyPartyTradeModel`. `Game.Current.ReplaceModel` is not an entry point in this contract.

## Risks and version boundaries

1. If an override returns an invalid or non-positive factor, the downstream price model receives an abnormal multiplier that can produce negative or unbalanced prices.
2. Replacing the whole default implementation can accidentally remove the `TradePenaltyReduction` skill adjustment. Inherit the default and call `base` when changing only one part.
3. If two modules register the same model type, the last registration wins; methods are not merged. Use an explicit `MBGameModel<T>` wrapper/delegation pattern when behavior must be composed.
4. `Campaign.Current.Models.PartyTradeModel` is reliable only after campaign initialization. Custom battles or early SubModule loading should use a null check or `GetGameModel<T>()`.
5. The public members and vanilla constants are unchanged between v1.3.15 and v1.4.5. The v1.4.5 decompilation shortens the `ExplainedNumber` constructor call, but the mod-visible behavior is the same.

## Navigation

- [Parent: campaign-ext](../)
- [Contract: PartyTradeModel](../PartyTradeModel/)
- [Models family guide](../models/)
- [Siblings: DefaultPartyFoodBuyingModel](../DefaultPartyFoodBuyingModel/) · [DefaultPartyImpairmentModel](../DefaultPartyImpairmentModel/)
- [Registration container: GameModels](../GameModels/) · [CampaignGameStarter](../CampaignGameStarter/)
- [Consumer: DefaultTradeItemPriceFactorModel](../DefaultTradeItemPriceFactorModel/)
