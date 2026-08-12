---
title: "SettlementFoodModel"
description: "The settlement model contract that converts prosperity, garrison, bound villages, buildings, market sell-offs, and issue effects into a town's net daily food change."
---
# SettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`  
**Base:** `MBGameModel<SettlementFoodModel>`  
**Source file path:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementFoodModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementFoodModel.cs`

## One-line responsibility

It answers "how much food does this town net-produce / net-consume today," returning an `ExplainedNumber` with optional breakdown figures. It only does the accounting — it does not write the stock, judge famine, or move any world state. Both the town's daily tick and the UI food panel consume the same model result, so a custom implementation affects every reader, not just one UI number.

## Mental model

Think of it as a "read-only calculator for the town's food ledger." The three properties `Town.FoodChange`, `Town.FoodChangeWithoutMarketStocks`, and `Town.FoodChangeExplanation` all pull the same model result via `Campaign.Current.Models.SettlementFoodModel`; only then does `Town.DailyTick` add `FoodChange` to `FoodStocks`, zero it out when the stock drops below 0 and flag the owner with `RemainingFoodPercentage = -100`, and clamp it when it exceeds `FoodStocksUpperLimit()`. The model sits in the Campaign Model layer — above the stock/trade Action layer and below the UI.

The calculation chain is: prosperity (`Prosperity / NumberOfProsperityToEatOneFood`) and garrison (`GarrisonParty.NumberOfAllMembers / NumberOfMenOnGarrisonToEatOneFood`) make up the consumption side; territory output (town +15, castle +10), bound-village output, building `FoodProduction` effects, and kingdom policies (such as `HuntingRights` +2) make up the production side; when `includeMarketStocks` is true, the sell-offs marked `BonusToFoodStores` among `Town.SoldItems` are also folded in; finally `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementFood)` layers in issue effects. The result is "production − consumption + issues," not a new stock value.

Use this model to change the "food change calculation" every consumer sees. If the goal is to directly modify stock, trigger a famine event, or transfer food, use `Town`'s stock API, the corresponding `*Action`, or `FoodConsumptionBehavior`/`GarrisonTroopsCampaignBehavior`; do not write `FoodStocks`, raise events, or deduct gold inside a calculation callback. That would turn a read-only query into a side effect that repeats every tick. `includeDescriptions` only controls whether `ExplainedNumber` keeps its factor-description text and should not change the numeric value; `includeMarketStocks` is a semantically meaningful switch: when off, it excludes the food contribution of market sell-offs, which suits comparing "the land's and buildings' own production."

### Lifecycle and registration

`Campaign.Current.Models` holds the current instance; the default instance is `DefaultSettlementFoodModel`, registered by the game launcher during campaign initialization via `IGameStarter.AddModel` (i.e. `CampaignGameStarter.AddModel`); a custom model must also be registered before the campaign system begins querying. On the title screen, during early module loading, or when no active campaign exists, `Campaign.Current` may be `null`, so you must not read it unconditionally in static-field initialization or `OnSubModuleLoad`. Constants such as `FoodStocksUpperLimit` and `CastleFoodStockUpperLimitBonus` are held by the model, but the true "final cap" is recomputed inside `Town.FoodStocksUpperLimit()` with the castle bonus and building `FoodStock` effects added on top — so do not treat the model constant as the town's cap.

## Dependencies
### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry; every read entry point sits on top of `Campaign.Current`. |
| [`Town`](../../campaign/Town) | Provides prosperity, garrison, whether it is a castle, whether it is under siege, bound villages, building effects, and market sell records; and consumes the returned food-change amount. |
| [`Settlement`](../../campaign/Settlement) | Supplies ownership and village input to the model via `Settlement.OwnerClan`, `BoundVillages`, `IsTown`, etc. |
| [`IssueModel`](../IssueModel) | The default implementation folds the global/settlement issue effects of `DefaultIssueEffects.SettlementFood` into the final change. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`Town`](../../campaign/Town) | `FoodChange`/`FoodChangeWithoutMarketStocks`/`FoodChangeExplanation` are taken directly from this model; `DailyTick` writes `FoodChange` into the stock and handles starvation. |
| [`FoodConsumptionBehavior`](../FoodConsumptionBehavior) | Drives the stock consumption/replenishment cycle in the settlement's daily logic; it is an upstream applier of the model result. |
| [`GarrisonTroopsCampaignBehavior`](../GarrisonTroopsCampaignBehavior) | Manages garrison size, thereby indirectly affecting the "garrison headcount → food consumption" input. |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | Prosperity changes feed back into the next food-consumption calculation (the more prosperous, the more it eats). |
| [`DefaultPartyFoodBuyingModel`](../DefaultPartyFoodBuyingModel) | An adjacent food-economy model; it handles party food buying and should not be implicitly triggered by the settlement food calculation. |

### Action, events & save boundary

The model result itself has no save field and dispatches no events. Legitimate stock changes go through the `Town` stock API or the relevant Behavior/Action; a custom model must stay deterministic under identical inputs, to avoid the daily-tick replay diverging between the food cache and the save. When replacing the model, do not change the sign semantics of "negative means starvation, positive means surplus," or `DailyTick`'s zeroing and clamping logic will be distorted.

## Member contract

### Configuration (read-only constants)

| Member | Default implementation value | Purpose & when called | Side effects |
| --- | --- | --- | --- |
| `FoodStocksUpperLimit` | `300` | The base stock cap for a town (non-castle); `Town.FoodStocksUpperLimit()` adds the castle bonus and building effects on top. | None. Read-only constant; do not treat it as the final cap. |
| `NumberOfProsperityToEatOneFood` | `40` | Denominator converting prosperity into daily food consumption: each time prosperity reaches this value, daily consumption grows by 1. | None. |
| `NumberOfMenOnGarrisonToEatOneFood` | `20` | Denominator converting garrison headcount into daily food consumption: each time the garrison reaches this value, daily consumption grows by 1. | None. |
| `CastleFoodStockUpperLimitBonus` | `150` | The extra stock-cap bonus for a castle (vs. a town), folded in by `Town.FoodStocksUpperLimit()` only when `Town.IsCastle`. | None. |

### Calculation

| Member | Purpose & when called | Side effects |
| --- | --- | --- |
| `CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)` | Returns the settlement's net daily food change (`ExplainedNumber`). Called by the getters of `Town.FoodChange`/`FoodChangeWithoutMarketStocks`/`FoodChangeExplanation`; also read by the UI panel and the daily tick. | None. Pure computation; only reads `town`'s state and returns a new number — no stock modification, no event dispatch. `includeDescriptions` affects only the explanation text. |

Observable factors in the default implementation: prosperity and garrison are the consumption side (more means more food eaten); territory output, bound-village output, building `FoodProduction`, and policies like `HuntingRights` are the production side; when `includeMarketStocks` is true, the `BonusToFoodStores` sell-offs among `SoldItems` are folded in; `DefaultIssueEffects.SettlementFood` layers issue effects via `IssueModel`; under siege, territory output is 0 and siege-related Perks/effects are used instead. When replacing the model, do not just copy the old formula — new versions may add merge paths for new Perks, policies, or building effects.

## Real read path

The following code only queries the already-registered model in the current campaign; it is equivalent to the internal fetch used by `Town.FoodChange` and `Town.FoodChangeExplanation`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainTownFood(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    // Two equivalent ways to obtain it: direct property or generic lookup
    SettlementFoodModel byProperty = Campaign.Current.Models.SettlementFoodModel;
    SettlementFoodModel byGeneric = Campaign.Current.Models.GetModel<SettlementFoodModel>();

    // Change amount with explanation text (production - consumption + issues), for the UI food panel
    ExplainedNumber change = byProperty.CalculateTownFoodStocksChange(
        town, includeMarketStocks: true, includeDescriptions: true);
    return change;
}
```

If you only want to compare "land and building production with market sell-offs removed," set `includeMarketStocks` to `false`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

public float StructuralDailyChange(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return 0f;
    }

    SettlementFoodModel model = Campaign.Current.Models.SettlementFoodModel;
    float net = model.CalculateTownFoodStocksChange(town, includeMarketStocks: false).ResultNumber;
    int limit = town.FoodStocksUpperLimit();
    return net;
}
```

This result represents only "today's net change"; to project tomorrow's stock use `town.FoodStocks + net` while accounting for the `FoodStocksUpperLimit()` cap; do not write it back into `FoodStocks`, or the daily tick will double-count it.

## Safe practices when replacing the model

If you only want to add a bounded correction, keep the original model as a delegate and let `CalculateTownFoodStocksChange` still return the full "production − consumption + issues" result:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModSettlementFoodModel : SettlementFoodModel
{
    private readonly SettlementFoodModel _vanilla;

    public ModSettlementFoodModel(SettlementFoodModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int FoodStocksUpperLimit => _vanilla.FoodStocksUpperLimit;
    public override int NumberOfProsperityToEatOneFood => _vanilla.NumberOfProsperityToEatOneFood;
    public override int NumberOfMenOnGarrisonToEatOneFood => _vanilla.NumberOfMenOnGarrisonToEatOneFood;
    public override int CastleFoodStockUpperLimitBonus => _vanilla.CastleFoodStockUpperLimitBonus;

    public override ExplainedNumber CalculateTownFoodStocksChange(
        Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateTownFoodStocksChange(
            town, includeMarketStocks, includeDescriptions);
        // Bounded correction: layer a well-defined factor onto the result, without changing the negative (starvation) semantics
        result.AddFactor(0.05f, new TextObject("Mod: granary efficiency"));
        return result;
    }
}
```

At registration time, save the vanilla delegate during the `CampaignGameStarter` model-registration phase; do not look yourself up again via `Campaign.Current.Models.SettlementFoodModel` after the model has already been replaced, or you will recurse. To make the replacement cover new Perks, policies, and building effects, prefer delegating to the current version's default model and then layering your own bounded factors.

## Risks & debugging order

1. **Campaign does not yet exist:** `Campaign.Current` is null on the title screen and during early module loading; defer obtaining the model until the campaign-startup hook, and do not query it inside `OnSubModuleLoad`.
2. **Treating change as stock:** `CalculateTownFoodStocksChange` returns the daily delta, not a new stock value; writing it back into `FoodStocks` or accumulating it once more amplifies food output.
3. **Breaking starvation semantics:** `Town.DailyTick` zeroes the stock and flags the owner `RemainingFoodPercentage = -100` when the result is below 0; a replacement model must preserve the negative meaning and must not silently turn starvation into a positive value.
4. **Misusing the cap constant:** `FoodStocksUpperLimit` is not the final cap; the castle bonus and building `FoodStock` effects are merged separately inside `Town.FoodStocksUpperLimit()`; UI cap comparisons should call `Town.FoodStocksUpperLimit()`.
5. **Modifying the world in a query:** recruiting, raising events, deducting gold, or writing stock must be done inside a Behavior, the Roster API, or an Action — never inside a calculation callback.
6. **Stale explanation panel:** after legitimately changing prosperity/garrison/buildings, the explanation panel should re-read `FoodChangeExplanation`, not cache the old `ExplainedNumber`.

## Version & navigation

The contract is identical across v1.3.0, v1.3.15, and v1.4.5 (the four `int` read-only properties and the `CalculateTownFoodStocksChange` signature), so the default implementation can be safely replaced across versions. Differences lie mainly in the set of Perks, policies, and building effects inside the default formula — refer to the `DefaultSettlementFoodModel` source for the target game version. Cross-version implementations should delegate to that version's vanilla model rather than copying the old formula into the new version.

- [↑ Parent: Campaign Ext API](../)
- [↔ Sibling: DefaultSettlementFoodModel](../DefaultSettlementFoodModel)
- [↔ Sibling: SettlementProsperityModel](../SettlementProsperityModel)
- [↔ Sibling: SettlementGarrisonModel](../SettlementGarrisonModel)
- [↔ Sibling: PartyWageModel](../PartyWageModel)
- [↔ Sibling: PartySpeedModel](../PartySpeedModel)
- [Related: Town](../../campaign/Town)
- [Related: Settlement](../../campaign/Settlement)
- [Related: Campaign](../../campaign/Campaign)
- [Downstream: FoodConsumptionBehavior](../FoodConsumptionBehavior) · [GarrisonTroopsCampaignBehavior](../GarrisonTroopsCampaignBehavior)
- [Adjacent model: DefaultPartyFoodBuyingModel](../DefaultPartyFoodBuyingModel)
- [Party & settlement model index](../models/)
- [Campaign system guide](../../../guide/campaign-system)
