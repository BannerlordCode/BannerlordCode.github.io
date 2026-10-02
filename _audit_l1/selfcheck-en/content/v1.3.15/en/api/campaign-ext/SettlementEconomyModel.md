---
title: "SettlementEconomyModel"
description: "A swappable economy policy model that converts town prosperity, item categories, and market prices into daily demand, supply, consumption budget, and treasury drift."
---
# SettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`  
**Base:** `MBGameModel<SettlementEconomyModel>`  
**Source Path:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementEconomyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents.DefaultSettlementEconomyModel`

## One-line responsibility

It predicts the daily demand, smoothed supply, daily consumption budget, and daily treasury drift for each "item category" in every settlement market. It performs only read-only calculations — it does not add or remove items, does not mutate inventory, and does not directly add or subtract settlement gold. Economy behaviors and market data treat its results as shared rules, so a custom implementation affects every reader, not just a single UI number.

## Mental Model

This is the policy boundary around town-market simulation. `TownMarketData` holds the supply, demand, and inventory snapshot for each category. `ItemConsumptionBehavior` reads this model's demand, budget, and treasury-drift results, and only then mutates inventory, updates sales records, and lands gold changes via `town.ChangeGold`. Prosperity, item value, and inventory are inputs, not state owned by the model.

The computation chain: town prosperity, the demand attributes of `ItemCategory`, market data, and the price index flow in as upstream inputs, enter `Campaign.Current.Models.SettlementEconomyModel`, and produce demand / supply / budget / treasury increment, which are finally turned into real world changes by `ItemConsumptionBehavior`, `TownMarketData`, and `CaravansCampaignBehavior`.

```text
Town(prosperity/Gold/MarketData) + ItemCategory + market price
        -> SettlementEconomyModel
        -> demand / supply / consumption budget / treasury increment
        -> ItemConsumptionBehavior / TownMarketData / CaravansCampaignBehavior land the changes
```

You use this model to change the "computed result" seen by all consumers. If the real goal is to add or remove inventory, change settlement gold, or write market data, use `TownMarketData`, `town.ChangeGold`, or the relevant Behavior/Action instead; do not call them inside a computation callback, because that turns a read-only query into a side effect repeated on every market tick. The model must stay stateless and deterministic: the exponential smoothing factors for supply/demand determine market lag — if a replacement changes them, the reaction speed of the entire market changes.

#### Lifecycle and registration

`Campaign.Current.Models` holds the current instance; the property name is `SettlementEconomyModel`. The default instance is `DefaultSettlementEconomyModel`, registered by the game launcher during campaign initialization via `IGameStarter.AddModel`; a custom model must also be registered before economy behaviors start querying it. On the title screen, during early module loading, or when no active campaign exists, `Campaign.Current` may be `null`, so it must not be read unconditionally in a static field initializer or a menu constructor.

## Dependencies
### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry. |
| [`Town`](../../campaign/Town) | Provides prosperity, gold, and the `MarketData` context. |
| [`Settlement`](../../campaign/Settlement) | Provides the settlement hierarchy and the owning-town context. |
| [`ItemData`](../ItemData) | Carries the per-category supply/demand/inventory snapshot; input to `GetEstimatedDemandForCategory`. |
| [`ItemCategory`](../../core-extra/ItemCategory) | Provides category attributes such as `BaseDemand`, `LuxuryDemand`, and value. |
| [`ItemObject`](../../core-extra/ItemObject) | Provides item value, indirectly affecting budget and supply. |

### Downstream

| Type | Relation |
| --- | --- |
| [`TownMarketData`](../TownMarketData) | Stores supply/demand and inventory, and calls `GetDemandChangeFromValue` inside `AddDemand`. |
| [`ItemConsumptionBehavior`](../ItemConsumptionBehavior) | Daily calls the demand, budget, treasury, and supply/demand update methods and lands the changes. |
| [`CaravansCampaignBehavior`](../CaravansCampaignBehavior) | Calls `CalculateDailySettlementBudgetForItemCategory` when pricing caravans. |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | Prosperity is computed by that model, and prosperity is a direct input to daily demand. |

### Action, events, and save boundary

The model itself has no save fields and dispatches no events. Legitimate supply/demand changes are landed via `TownMarketData` and the market behaviors; gold changes are landed via `town.ChangeGold` (inside `ItemConsumptionBehavior`). A custom implementation must return deterministic results for identical inputs, otherwise supply/demand will disagree with the recorded values on save reload and campaign replay.

## Member Contract

#### Demand and supply computation

| Member | Purpose | Call timing and side effects |
| --- | --- | --- |
| `GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)` | Estimate the "current" demand snapshot of a category in a given town; the default implementation delegates directly to `GetDailyDemandForCategory(town, category, extraProsperity: 1000)`, i.e. previews by adding 1000 prosperity on top of current prosperity. | `ItemConsumptionBehavior.UpdateSupplyAndDemand` uses it on every market tick to estimate the supply/demand equilibrium point (passing `town.MarketData.GetCategoryData(category)` as `itemData`). Read-only computation; does not modify supply/demand. |
| `GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)` | Compute daily demand from the category's `BaseDemand`/`LuxuryDemand` and town prosperity; default `BaseDemand * max(0, prosperity+extra) + LuxuryDemand * max(0, prosperity-3000)`, falling back to `prosperity * 0.01` when `BaseDemand` is near 0. | Called by `ItemConsumptionBehavior` in the budget/consumption phase and by `CaravansCampaignBehavior` during caravan pricing. Read-only query; `extraProsperity` is only for "what-if more prosperous" previews, not an already-applied change. |
| `GetDemandChangeFromValue(float purchaseValue)` | Convert a purchase amount into a demand increment; default returns `purchaseValue * 0.15`. | Called by `TownMarketData.AddDemand` when recording a purchase, using the return value to update that category's demand. Read-only query, but the result is persisted into market data by `TownMarketData`. |
| `GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)` | Exponentially smooth "yesterday's supply/demand" with "today's supply/demand" and return the new `(supply, demand)`; default `newSupply = max(0.1, oldSupply*0.85 + dailySupply*0.15)`, `newDemand = oldDemand*0.85 + dailyDemand*0.15`. | Called by `ItemConsumptionBehavior.UpdateSupplyAndDemand` on every daily market update; result written back to `marketData.SetSupplyDemand`. Supply floor clamped to `0.1`; smoothing factor `0.85/0.15` determines market lag. |

#### Budget and treasury

| Member | Purpose | Call timing and side effects |
| --- | --- | --- |
| `CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)` | Convert "demand" and "category price index" into the day's consumption budget (amount); default `demand * pow(town.GetItemCategoryPriceIndex(category), 0.3)`. | Called by `ItemConsumptionBehavior` and `CaravansCampaignBehavior` when deciding how much amount the town/caravan can consume. This is an amount, not a quantity, and cannot be interchanged with demand. Read-only. |
| `GetTownGoldChange(Town town)` | Compute the gold increment by which the town treasury drifts toward its target; default `(10000 + prosperity*12 - gold) * 0.25`, floored to an integer. | Called daily by `ItemConsumptionBehavior.UpdateTownGold`; result landed via `town.ChangeGold`. The model itself does not modify `gold`; a custom implementation returning an unbounded value creates or swallows large amounts of gold every daily settlement. |

Observable rules of the default implementation include: demand grows linearly with prosperity and only adds `LuxuryDemand` for the portion of prosperity above `3000`; supply/demand use `0.85/0.15` exponential smoothing with a supply floor of `0.1`; budget varies with demand and the `0.3` power of the category price index; treasury target is `10000 + prosperity*12`, taking one quarter of the gap each day. When replacing the implementation, you must keep the units of supply/demand/budget consistent and return bounded results for new towns, missing categories, and zero supply.

## Real Access Path

The following code only queries the model already registered in the current campaign; the access path is identical to `ItemConsumptionBehavior`. Equivalently, `Campaign.Current.Models.GetModel<SettlementEconomyModel>()` also retrieves the same instance:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public (float demand, float budget, int goldDelta) ReadTownEconomy(Town town, ItemCategory category)
{
    if (Campaign.Current == null || town == null || category == null)
    {
        return (0f, 0f, 0);
    }

    SettlementEconomyModel model = Campaign.Current.Models.SettlementEconomyModel;
    float demand = model.GetDailyDemandForCategory(town, category);
    float budget = model.CalculateDailySettlementBudgetForItemCategory(town, demand, category);
    int goldDelta = model.GetTownGoldChange(town);
    return (demand, budget, goldDelta);
}
```

These results are suitable for UI preview or debugging; ordinary economy logic should read `TownMarketData` and `town.Gold` directly, not re-multiply demand itself. Note that `GetTownGoldChange` returns the "gold increment that should change today", not the total treasury.

If you only want to add a bounded correction to the budget, keep the original model as the delegate and let all six methods still execute as pairs:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public sealed class ModSettlementEconomyModel : SettlementEconomyModel
{
    private readonly SettlementEconomyModel _vanilla;

    public ModSettlementEconomyModel(SettlementEconomyModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)
        => _vanilla.GetEstimatedDemandForCategory(town, itemData, category);

    public override float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)
        => _vanilla.GetDailyDemandForCategory(town, category, extraProsperity);

    public override float GetDemandChangeFromValue(float purchaseValue)
        => _vanilla.GetDemandChangeFromValue(purchaseValue);

    public override (float, float) GetSupplyDemandForCategory(
        Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)
        => _vanilla.GetSupplyDemandForCategory(town, category, dailySupply, dailyDemand, oldSupply, oldDemand);

    public override int GetTownGoldChange(Town town)
        => _vanilla.GetTownGoldChange(town);

    public override float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)
    {
        float vanilla = _vanilla.CalculateDailySettlementBudgetForItemCategory(town, demand, category);
        return vanilla * 1.1f;
    }
}
```

At registration time you should save the vanilla delegate during the `CampaignGameStarter` model-registration phase; do not look yourself up again via `Campaign.Current.Models.SettlementEconomyModel` after the model has been replaced, or it will recurse. If you want the replacement to cover the whole economy chain, prefer delegating to the current version's default model and then adding your own bounded factors.

## Risks and Debugging Order

1. **Campaign not yet present:** `Campaign.Current` is null on the title screen and during early module loading; defer obtaining the model until a campaign-start hook.
2. **Unit confusion:** demand and supply are "quantity/category" units, budget is "amount", and treasury increment is an `int` gold difference; the four cannot be interchanged, nor can treasury increment be treated as total treasury.
3. **Unbounded results:** negative values, NaN, or skipping the `0.1` supply floor break the market and caravan pricing; an unbounded treasury increment creates or swallows large amounts of gold every daily settlement, breaking economic balance.
4. **Modifying the world inside a query:** recruitment, inventory add/remove, teleport, and gold transfer must be executed in `TownMarketData`, a Behavior, or an Action — not inside a computation callback.
5. **Smoothing factors:** `0.85/0.15` determine market lag; changing them changes the reaction speed of the entire market and is incompatible with the old supply/demand stored in saves.
6. **Determinism / saves:** supply/demand are stored in `TownMarketData` and persisted with the save; a custom implementation must be deterministic, otherwise supply/demand will drift from the record on reload or replay.

## Version and Navigation

The contract (the six abstract methods and their signatures) is identical across `1.3.0`, `1.3.15`, and `1.4.5` (verified against source). The default implementation `DefaultSettlementEconomyModel` lives in `TaleWorlds.CampaignSystem.GameComponents`; its smoothing constants (`0.85/0.15`, prosperity threshold `3000`, treasury target `10000 + prosperity*12`, budget exponent `0.3`) are default-implementation details. When replacing the model across versions, delegate to the current version's vanilla implementation rather than copying the old formula into the new version.

- ↑ [Parent: Campaign-ext API](../)
- ↔ [PartySpeedModel](../PartySpeedModel) · [PartyWageModel](../PartyWageModel) · [TradeAgreementModel](../TradeAgreementModel) · [VillageTradeModel](../VillageTradeModel)
- Related: [Town](../../campaign/Town) · [TownMarketData](../TownMarketData) · [ItemConsumptionBehavior](../ItemConsumptionBehavior) · [SettlementProsperityModel](../SettlementProsperityModel) · [DefaultSettlementEconomyModel](../DefaultSettlementEconomyModel)
- [Campaign system guide](../../../guide/campaign-system)
