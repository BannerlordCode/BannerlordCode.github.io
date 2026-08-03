---
title: "Village"
description: "Settlement component for a village: records which town it belongs to (Bound), which town it sells to (TradeBound), its hearth prosperity (Hearth) and daily production. Never construct it yourself and never mutate Hearth/Bound references directly."
---
# Village

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Village : SettlementComponent`
**Base:** `SettlementComponent`
**Source:** `TaleWorlds.CampaignSystem/Settlements/Village.cs` (1.3.15; API cross-checked against 1.4.5)

## Overview

`Village` is the economic component attached to a village-type [`Settlement`](../Settlement/): it tells you which town or castle the village belongs to, which town it ships its goods to, how many hearths (population prosperity) remain, what it produces each day, and whether it is currently Normal, being raided, being forcibly recruited/supplied, or looted. It is the modder-facing surface for reading village economy and reacting to village state changes — not a standalone entity you instantiate.

## Mental Model

Think of `Village` as the **"village economy card" bolted onto a `Settlement`**, not as an independent object:

- **It is not a standalone object; it hangs off a Settlement.** The only entry point to a village is `someSettlement.Village` — every village-type `Settlement` has exactly one `Village` component. You never write `new Village()` yourself; the engine builds it alongside the `Settlement` during load/`Deserialize` (reading `hearth`, `bound`, and `village_type` from XML).
- **Pure Campaign-layer data, never enters a battle scene.** `Village` lives only on the campaign map, representing the village settlement on the map. A `PartyBase`/`Agent` only appears once a fight starts over it — that is a separate concern.
- **Lifecycle:** `OnInit()` (sets the state to `Normal` and grants 1000 gold) → every campaign day the `Campaign` daily-tick loop calls `DailyTick()` (accumulates `Hearth` and `Militia`, caps gold at 1000) → when raided/forced/looted, `ChangeVillageStateAction.Apply*` flips the `VillageState` and raises `CampaignEventDispatcher` events.
- **Who holds / enumerates it:** held by its owning `Settlement`; enumerate all villages on the map via `Village.All` (`= Campaign.Current.AllVillages`).

## When to Use / When NOT to Use

**Use it when:**
- Reading village economy / production / state: `Hearth`, `GetHearthLevel()`, `VillageType.Productions`, `IsProducing(...)`, `GetWarehouseCapacity()`.
- Associating a village with its towns in dialogue or quests: `Bound` (owning town) and `TradeBound` (selling town).
- Reacting to village state changes: subscribe to `OnVillageBecomeNormal` / `OnVillageBeingRaided` / `OnVillageLooted` events.

**Do NOT use it directly — use the correct replacement:**
- ❌ `new Village()` or swapping the `VillageType` / `Bound` / `TradeBound` references at runtime. These are serialized fields rebuilt by `MBObjectManager` on load; tampering corrupts the save and breaks the town↔village two-way registry.
- ❌ Setting `Hearth` or `Gold` to an arbitrary value. The per-day hearth delta comes from `SettlementProsperityModel`; add/take gold only through `ChangeGold(int)` (floor 0). To influence hearths, replace/extend the model or raise the matching event instead of hard-writing the field.
- ❌ Calling `DailyTick()` yourself. It is driven centrally by the `Campaign` daily tick (`Campaign.cs` walks `settlement.Village.DailyTick()`); calling it manually double-counts the settlement.
- ❌ Assigning `VillageState` directly to switch state. Use `ChangeVillageStateAction.ApplyBySettingToNormal` / `ApplyBySettingToBeingRaided` / `ApplyBySettingToLooted` etc., so the registry is maintained and events are broadcast.

## Dependencies

```
              Settlement (holds the component, .Village)
                   │  upstream
   ┌───────────────┼───────────────────────────────┐
   ▼               ▼                                ▼
 Town            VillageType                   MBObjectManager
(Bound is       (drives Productions)          (rebuilds refs on
 usually a        )                             Deserialize via
 Town component)                                  ReadObjectReferenceFromXml)
   │
   └───────────────┬───────────────────────────────┘
                   ▼  this object: Village
   ┌────────── economy / production / state ──────────┐
   │ Hearth   ← SettlementProsperityModel             │
   │ Output   ← VillageProductionCalculatorModel      │
   │ Militia  ← SettlementMilitiaModel                │
   │ MarketData (stock) ← VillageMarketData           │
   │ VillagerPartyComponent (villager caravan)        │
   └──────────────────────────────────────────────────┘
                   │  downstream / side effects
   ┌───────────────┼───────────────────────────────┐
   ▼               ▼                               ▼
 VillageGoodProduction  VillageHeal           VillageHostileAction
  CampaignBehavior       CampaignBehavior       CampaignBehavior
 (food/output)          (hearth recovery)     (raid/force)
        │             VillageTradeBound             │
        │             CampaignBehavior              │
        ▼                                           ▼
 CampaignEventDispatcher.OnVillage*          ChangeVillageStateAction /
  (BecomeNormal/BeingRaided/Looted)          IncreaseSettlementHealthAction
```

- **Upstream (what it depends on):** [`Settlement`](../Settlement/) (holds the component, `settlement.Village`), [`Town`](../Town/) (`Bound` is usually a `Town`, whose component registers the trade-bound), [`VillageType`](../../campaign-ext/VillageType/) (drives the production list), [`MBObjectManager`](../../campaign-ext/MBObjectManager/) (rebuilds references on `Deserialize` via `ReadObjectReferenceFromXml`).
- **Downstream (who consumes it):** [`SettlementProsperityModel`](../../campaign-ext/SettlementProsperityModel/) (`HearthChange`), [`VillageProductionCalculatorModel`](../../campaign-ext/VillageProductionCalculatorModel/) (`GetWarehouseCapacity`, output), `SettlementMilitiaModel` (`MilitiaChange`), `VillageMarketData` (stock/market), `VillagerPartyComponent` (villager caravan).
- **Related events / Actions / Behaviors:** `CampaignEventDispatcher.OnVillageBecomeNormal / OnVillageBeingRaided / OnVillageLooted`; [`ChangeVillageStateAction`](../../campaign-ext/ChangeVillageStateAction/) and `IncreaseSettlementHealthAction`; `VillageGoodProductionCampaignBehavior`, `VillageHealCampaignBehavior`, `VillageHostileActionCampaignBehavior`, `VillageTradeBoundCampaignBehavior`, `VillagerCampaignBehavior`.
- **Save points:** `[SaveableField]`/`[SaveableProperty]` (`Hearth`, `TradeTaxAccumulated`, `_villageState`, `_bound`, `_marketData`), `[CachedData]` (`VillagerPartyComponent`).

## Risks

1. **Writing `Hearth` / `Gold` in the wrong phase.** `DailyTick()` only runs on the campaign daily tick, where it does `Hearth += HearthChange` and, when the hearth level crosses a threshold, calls `Settlement.Party.SetLevelMaskIsDirty()`. If you write `Hearth` directly from an hourly tick, event callback, or elsewhere, it races with / gets overwritten by `DailyTick` and may skip the level-mask update (the village's troop level display goes stale). To change hearths, change `SettlementProsperityModel` or wait for `DailyTick`.
2. **Dangling / corrupt refs from cross-save cached references.** `Bound` / `TradeBound` / `VillageType` are rebuilt by `MBObjectManager` from `stringId` via `ReadObjectReferenceFromXml` on load. Do not hold `Village` / `Settlement` instances long-term in your own module state (static fields, non-`[Saveable]` containers); after a load, re-fetch through `Campaign.Current` or re-query by `stringId`, otherwise your reference points at a discarded old object.
3. **Hard-writing `Hearth` instead of going through the model/event.** `Hearth` is a `[SaveableProperty]`, but *why* it changes is decided by `SettlementProsperityModel.CalculateHearthChange`. Writing the field bypasses the explanation chain, and `DailyTick` will `+= HearthChange` again next day, producing unexpected compounding; also `Hearth < 10` is clamped back to 10.
4. **`Bound` / `TradeBound` reference desync.** The `Bound` setter calls `Settlement.AddBoundVillageInternal` / `RemoveBoundVillageInternal`; the `TradeBound` setter (only effective when `Bound` is not a `Town`) maintains `Town.SetTradeBoundVillageInternal` / `RemoveTradeBoundVillageInternal`. Bypassing the property (reflection, or setting `Bound` without firing the setter) desyncs the town↔village binding, tax, production, and villager caravan. Note: **when `Bound` itself is a `Town`, `TradeBound` simply returns `Bound`** — setting a separate trade-bound has no effect.

## Members (grouped by theme)

### Ownership & Economy

- **`Settlement Bound { get; }`** — the town or castle this village belongs to. `MapFaction` is read directly from it. The reference is private and set only from the XML `bound` reference at load; setting it maintains the two-way registry. Do not change it externally.
- **`Settlement TradeBound { get; set; }`** — the town it sells/trades with. If `Bound` is itself a `Town`, this returns `Bound`; otherwise it returns the separate `_tradeBound`. The setter only takes effect when `Bound` is not a `Town` and maintains the `Town` trade-bound registry. `GetItemPrice` uses it to fetch the town's market price.
- **`IFaction MapFaction { get; }`** — equals `Bound.MapFaction`; the village's diplomatic owner (used to decide friend or foe).
- **`int Gold`** (inherited from `SettlementComponent`, only mutable via `ChangeGold`) — the village treasury. `OnInit` grants 1000; `DailyTick` pulls it back to 1000 if it exceeds that. Add/take via `ChangeGold(int)` (floor 0).
- **`VillageMarketData MarketData { get; }`** — the village market / stock data, used by `GetWarehouseCapacity` and trade pricing.
- **`int TradeTaxAccumulated`** (`[SaveableProperty]`) — accumulated trade tax collected from this village.
- **`float LastDemandSatisfiedTime`** (`[SaveableProperty]`, private set) — timestamp of the last satisfied lord demand; read by lord-demand / quest events.

### State & Combat

- **`VillageStates VillageState { get; set; }`** — `Normal` / `BeingRaided` / `ForcedForVolunteers` / `ForcedForSupplies` / `Looted`. On change it broadcasts `CampaignEventDispatcher` events (`OnVillageBecomeNormal` / `OnVillageBeingRaided` / `OnVillageLooted`). Switch state via `ChangeVillageStateAction.Apply*`.
- **`bool IsDeserted { get; }`** — `_villageState == Looted`. A deserted village (hearths at zero) cannot recover on its own.
- **`IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes)`** / **`PartyBase GetNextDefenderParty(ref int, MapEvent.BattleTypes)`** — return the defender parties (the village's own `Party` plus same-faction non-caravan parties; `Raid`/`Force` battles additionally include militia and villagers) when the village is raided/forced. Called from the `MapEvent` side; ordinary mods usually only read the state, not call these.

### Production & Prosperity

- **`VillageType VillageType`** — the village type (public field) that decides the `Productions` list. Set from the XML `village_type` reference at load; do not swap at runtime (it breaks production and deserialization consistency).
- **`bool IsProducing(ItemObject item)`** — true if `VillageType.Productions` contains the item.
- **`int GetWarehouseCapacity()`** — warehouse capacity = (daily food output + each product's daily output) × 5, rounded up, minimum 1. Used as the stock cap.
- **`float Hearth`** (`[SaveableProperty]`) — hearths / prosperity. `DailyTick` accumulates `HearthChange`; clamped to a minimum of 10 (`Hearth < 10` → 10). The derived `HearthLevel` / `ProsperityLevel` come from it.
- **`float HearthChange { get; }`** — today's hearth delta = `SettlementProsperityModel.CalculateHearthChange(this).ResultNumber`. Read-only query.
- **`float Militia`** / **`float MilitiaChange`** / **`ExplainedNumber MilitiaChangeExplanation`** — militia count and its daily change (from `SettlementMilitiaModel`). `MilitiaChange` is added into `Settlement.Militia` inside `DailyTick`.
- **`ExplainedNumber HearthChangeExplanation`** — the hearth delta with text explanations; for debugging / UI.
- **`int GetHearthLevel()`** — `Hearth ≥ 600` → 2, `≥ 200` → 1, else 0 (matching the constants `MidHearthThreshold = 600`, `LowHearthThreshold = 200`).
- **`ProsperityLevel GetProsperityLevel()`** — maps the hearth level to `High` / `Mid` / `Low`.
- **`VillagerPartyComponent VillagerPartyComponent`** (`[CachedData]`) — the villager caravan component for this village, driven by `VillagerCampaignBehavior`.
- **`static MBReadOnlyList<Village> All`** — `= Campaign.Current.AllVillages`, the entry point to enumerate every village on the map.

## Example

### Example 1: Get the Village from the current settlement and read its ownership and production

```csharp
// e.g. inside a dialogue / quest script, the current settlement is a village
Settlement settlement = Settlement.CurrentSettlement;
if (settlement != null && settlement.Village != null)
{
    Village village = settlement.Village;

    Settlement boundTown = village.Bound;       // owning town (may be a Town or Castle)
    Settlement tradeTown = village.TradeBound;   // selling town; equals Bound when Bound is a Town

    // iterate what this village actually produces (from VillageType.Productions)
    foreach (var production in village.VillageType.Productions)
    {
        ItemObject producedItem = production.Item1;
        float weight = production.Item2;
        InformationManager.DisplayMessage(
            new InformationMessage($"{village.Name} produces: {producedItem.Name} x{weight}"));
    }

    bool producesFirst = village.IsProducing(village.VillageType.Productions[0].Item1);
    int warehouseCap = village.GetWarehouseCapacity();
    int level = village.GetHearthLevel();        // 0 / 1 / 2

    InformationManager.DisplayMessage(
        new InformationMessage(
            $"{village.Name}: bound={boundTown.Name}, hearth={village.Hearth}, level={level}, warehouse={warehouseCap}"));
}
```

### Example 2: Enumerate all villages and count looted ones; restore one via the proper Action

```csharp
int lootedCount = 0;
foreach (Village v in Village.All)
{
    if (v.VillageState == Village.VillageStates.Looted || v.IsDeserted)
    {
        lootedCount++;
    }
}

// To return a village to normal, use ChangeVillageStateAction — it maintains the
// registry and broadcasts events (do NOT write village.VillageState = Normal directly)
Settlement target = Settlement.CurrentSettlement; // in practice, fetch the target village's Settlement
if (target != null && target.Village != null)
{
    ChangeVillageStateAction.ApplyBySettingToNormal(target);
    // afterwards target.Village.VillageState == Village.VillageStates.Normal
}
```

## See Also

- [`Settlement`](../Settlement/) — the parent settlement that holds the Village component (↑ Parent)
- [`Town`](../Town/) — the town component `Bound` usually points at (↔ Sibling component)
- [`VillageType`](../../campaign-ext/VillageType/) — the upstream type that drives the village production list
- [`Clan`](../Clan/) — the clan behind the village's owning town
- [`Campaign`](../Campaign/) — `Campaign.Current.AllVillages` and the global state entry point
- [`MBObjectManager`](../../campaign-ext/MBObjectManager/) — rebuilds the `Bound`/`VillageType` references on deserialize
- [`ChangeVillageStateAction`](../../campaign-ext/ChangeVillageStateAction/) — the proper Action to switch village state
- [`SettlementProsperityModel`](../../campaign-ext/SettlementProsperityModel/) — the model behind the hearth delta
- [`VillageProductionCalculatorModel`](../../campaign-ext/VillageProductionCalculatorModel/) — the model behind production and warehouse capacity
