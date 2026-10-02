---
title: "Town"
description: "Fief settlement component: prosperity, loyalty, security, militia, food, workshops, buildings, governor and item prices."
---

# Town

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Town : Fief`
**Base:** `Fief`
**File:** `TaleWorlds.CampaignSystem/Settlements/Town.cs`

## Overview

`Town` is the [Settlement](../Settlement) component for every fief — both walled towns and castles. It derives from `Fief`, which in turn derives from `SettlementComponent`, so a `Town` is always reachable as `settlement.Town` and is never a standalone map object.

Everything that makes a fief feel alive lives here, as four coupled scores plus the buildings that move them:

| Score | Driven by | Meaning |
|-------|-----------|---------|
| `Prosperity` | `SettlementProsperityModel` | Village production flowing into the town |
| `Loyalty` | `SettlementLoyaltyModel` | How willing the populace is to accept rule |
| `Security` | `SettlementSecurityModel` | Militia, walls and garrison effectiveness |
| `Militia` | `SettlementMilitiaModel` | The pool of untrained defenders |
| `Food` | `SettlementFoodModel` | Grain reserve and consumption |

Each score has a matching `ExplainedNumber` pair (`ProsperityChange` / `ProsperityChangeExplanation`, and so on) so the town screen can show *why* a value moved. Reading the bare `float` without reading the explanation is how you end up with a mod that changes prosperity for reasons the player cannot see.

Alongside the scores: `Workshops` (production), `Buildings` / `BuildingsInProgress` (construction), `MarketData` (prices), `Governor` (local owner), and `AvailableShips` (port inventory).

## Mental Model

```
Settlement (IsFortification)
  └─ SettlementComponent
       └─ Fief
            └─ Town
                 ├─ Prosperity / Loyalty / Security / Militia  (+ ExplainedNumber changes)
                 ├─ Buildings[] / BuildingsInProgress / CurrentBuilding
                 ├─ Workshops[]          ──► production
                 ├─ MarketData           ──► prices
                 ├─ Governor ──► Hero ──► Clan (OwnerClan)
                 ├─ Villages / TradeBoundVillages
                 └─ AvailableShips       (port towns only)
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    Town.OnInit() has run; Town.AllTowns / AllCastles populated
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.DailyTickTownEvent / HourlyTickEvent
DailyTick (town subject supplied)
    town.Prosperity, town.Loyalty, town.Security read
    model recomputes (SettlementProsperityModel.GetProsperityChange etc.)
    town.ProsperityChange carries the delta for the town screen
```

Traps that bite in practice:

- **`Town` is not a `Settlement`.** Use `town.Settlement` to get back to the map object. Passing a `Town` where a `Settlement` is expected is the single most common compile error in town code.
- **Read the explanation, not just the delta.** `ProsperityChange` is the net number; `ProsperityChangeExplanation` is a list of contributions. A mod that reports `ProsperityChange` alone will say "prosperity -3" without saying why.
- **`Workshops` is a protected-set array.** `InitializeWorkshops(int count)` allocates it. Calling it twice leaks the old array and its `Workshop` objects, which are still referenced by production logic.
- **`GetItemPrice` has two overloads and both matter.** The `ItemObject` overload handles stackable goods; the `EquipmentElement` overload handles equipment and horses. Passing the wrong one silently returns a wrong price.
- **`BuildingsInProgress` is a live queue.** Removing a building from it directly does not refund or cancel the construction; go through the building action.
- **Castles and towns share the class.** Branch on `settlement.IsCastle` / `settlement.IsTown`, not on the type, when behaviour differs (no tournaments in castles, no siege walls in towns).

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Base | `Fief` → `SettlementComponent` → [Settlement](../Settlement) | `town.Settlement` walks back up |
| People | [Hero](../Hero) | `Governor`, `LastCapturedBy` |
| Politics | [Clan](../Clan), [Kingdom](../Kingdom) | `OwnerClan`, `MapFaction` |
| Villages | [Village](../Village) | `Villages` (bound), `TradeBoundVillages` |
| Models | `SettlementProsperityModel`, `SettlementLoyaltyModel`, `SettlementSecurityModel`, `SettlementMilitiaModel`, `SettlementFoodModel` | Score computation |
| Economy | `TownMarketData`, `Workshop`, `Building` | Prices, production, construction |
| Events | [CampaignEvents](../CampaignEvents) | `DailyTickTownEvent`, `RulingClanChanged` |

## Key members

### Scores

#### `public float Prosperity`

Village-to-town production health. Computed from bound villages; the model owns the formula.

#### `public float ProsperityChange` / `public ExplainedNumber ProsperityChangeExplanation`

Today's net delta and its per-source breakdown. Fire the town screen from these, not from a recomputed difference.

#### `public float Loyalty` / `public float LoyaltyChange` / `public ExplainedNumber LoyaltyChangeExplanation`

Populace goodwill. Driven by taxes, culture match, militia presence and recent battles.

#### `public float Security` / `public float SecurityChange` / `public ExplainedNumber SecurityChangeExplanation`

Defence effectiveness, derived from militia, walls and garrison.

#### `public float Militia` / `public float MilitiaChange` / `public ExplainedNumber MilitiaChangeExplanation`

The town's own defence force. `Settlement.Militia` forwards here.

#### `public float Food` / `public float FoodChange` / `public float FoodChangeWithoutMarketStocks` / `public ExplainedNumber FoodChangeExplanation`

Grain reserve and its daily delta. `FoodChangeWithoutMarketStocks` isolates production/consumption from market purchases — the number to use when you want to know if the town is starving on its own.

#### `public SettlementComponent.ProsperityLevel GetProsperityLevel()`

The bucketed level (`VeryLow` … `VeryHigh`) shown in UI. Derived; do not cache across days.

### People and politics

#### `public Hero Governor`

The local administrator. Null in rebel-controlled towns.

#### `public Clan OwnerClan` (override)

The political owner. Changes through the settlement owner-change action.

#### `public Clan LastCapturedBy { get; set; }`

Who took the town last. Saves are keyed off this for conquest chains, so do not reset it casually.

#### `public override IFaction MapFaction`

Resolves the controlling faction through the settlement, honouring the rebellion state.

### Production and buildings

#### `public Workshop[] Workshops { get; protected set; }`

The town's production sites. Allocated once by `InitializeWorkshops`.

#### `public void InitializeWorkshops(int count)`

Allocates the workshop array and fills it with defaults. Call once per town, at settlement creation.

#### `public MBList<Building> Buildings` / `public Queue<Building> BuildingsInProgress` / `public Building CurrentBuilding` / `public Building CurrentDefaultBuilding`

Construction state. `BuildingsInProgress` is a queue; `BoostBuildingProcess` speeds up the head.

#### `public void AddEffectOfBuildings(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

Adds every building's contribution for one effect category into an `ExplainedNumber`. This is the entry point to ask "what is this town getting from its buildings".

### Economy

#### `public TownMarketData MarketData`

Price data. Assign through the market-data model, not by writing it directly.

#### `public int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

Price for a stackable good. `tradingParty` applies that party's trade bonus; `isSelling` flips the margin.

#### `public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

Price for equipment and horses. Distinct from the `ItemObject` overload.

#### `public float GetItemCategoryPriceIndex(ItemCategory itemCategory)`

Normalised index for a whole category, used by price trend UI.

#### `public IReadOnlyCollection<Town.SellLog> SoldItems` / `public void SetSoldItems(IEnumerable<Town.SellLog> logList)`

The settlement's trade log. Serializable; `SetSoldItems` replaces the whole collection.

### Geography and inventory

#### `public MBReadOnlyList<Village> Villages` / `public MBReadOnlyList<Village> TradeBoundVillages`

Bound villages (which feed prosperity) and trade-bound villages (which supply the market). They are different sets and both matter.

#### `public MBReadOnlyList<Ship> AvailableShips`

Ships the port can currently offer. Only populated for port towns.

#### `public bool HasTournament` / `public int GetWallLevel()`

Convenience queries over buildings and walls.

#### `public MatrixFrame[] BesiegerCampPositions1` / `BesiegerCampPositions2`

Pre-placed siege camp anchors used by the siege scene.

## Real examples

### Example 1: a town economy report driven by the daily tick

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class TownReportBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // IMbEvent<Town> — the town is handed to you, no scan needed.
        CampaignEvents.DailyTickTownEvent.AddNonSerializedListener(this, OnDailyTickTown);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnDailyTickTown(Town town)
    {
        if (town == null || !town.IsUnderSiege)
        {
            return;
        }

        InformationManager.DisplayMessage(new InformationMessage(
            $"{town.Settlement.Name}: prosperity {town.Prosperity:0} ({town.ProsperityChange:0.00}), " +
            $"loyalty {town.Loyalty:0} ({town.LoyaltyChange:0.00}), food {town.Food:0}"));
    }
}
```

### Example 2: value the buildings you own

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Buildings;

public static string BuildingEffectSummary(Town town)
{
    ExplainedNumber result = new ExplainedNumber(0f, false);
    foreach (BuildingEffectEnum effect in Enum.GetValues(typeof(BuildingEffectEnum)))
    {
        town.AddEffectOfBuildings(effect, ref result);
    }

    return $"{town.Settlement.Name} buildings total: {result.ResultNumber:0.00}";
}
```

### Example 3: price with and without the trading party's margin

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static void QuoteWheat(Town town, MobileParty trader)
{
    CharacterObject wheat = MBObjectManager.Instance.GetObject<CharacterObject>("wheat");
    if (town == null || wheat == null)
    {
        return;
    }

    int buyPrice = town.GetItemPrice(wheat, trader, false);
    int sellPrice = town.GetItemPrice(wheat, trader, true);
    InformationManager.DisplayMessage(
        new InformationMessage($"{town.Settlement.Name}: buy {buyPrice}, sell {sellPrice}"));
}
```

### Example 4: check whether a town is fed by its own villages

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public static bool IsSelfSustaining(Town town)
{
    if (town == null)
    {
        return false;
    }

    // Excludes market purchases: a negative value here means starvation regardless of trade.
    return town.FoodChangeWithoutMarketStocks >= 0f;
}
```

## Risks and crash boundaries

1. **`Town` is never a `Settlement`.** `town.Settlement` is the only way back. Every API that takes a `Settlement` will not accept a `Town`.
2. **Type discrimination.** `settlement.Town` is null on a village. `AllTowns` and `AllCastles` are the same underlying objects filtered differently; use them instead of `Type`-based tests.
3. **`InitializeWorkshops` is not idempotent.** Calling it a second time replaces the workshop array while old `Workshop` references remain live in production and save code.
4. **Price overload mismatch.** `GetItemPrice(ItemObject, ...)` and `GetItemPrice(EquipmentElement, ...)` return different things for the same concept; passing an `EquipmentElement` where an `ItemObject` is meant compiles only after a conversion and gives a wrong number.
5. **Building queue manipulation.** Removing from `BuildingsInProgress` or editing `Buildings` directly skips the construction action, so progress, cost and the town screen disagree.
6. **Save coupling.** Prosperity, loyalty, security, militia, food, `LastCapturedBy`, workshops and buildings are all serialized. Changing the save layout breaks existing saves — see [save-system](../../../architecture/save-system).
7. **Model dependency.** All five score deltas are produced by registered `Settlement*Model` implementations. A mod that replaces a model must keep the `ExplainedNumber` contract, or the town screen breaks.
8. **Cross-domain dependency.** `MarketData` is only meaningful inside the trade system; computing prices from a map callback bypasses the trade margin rules.

## Cross-version notes

- The five scores, their `ExplainedNumber` pair pattern, and the two `GetItemPrice` overloads are identical in 1.3.x and 1.4.x.
- Later builds add workshop-tier fields and more `BuildingEffectEnum` members. Because the effect loop is enum-driven, mod code that iterates `Enum.GetValues` keeps working without changes.

## See Also

- [Settlement](../Settlement) — the map object this component belongs to
- [Village](../Village) — the production source feeding town prosperity
- [Clan](../Clan) — `OwnerClan`
- [Hero](../Hero) — `Governor`, `LastCapturedBy`
- [MobileParty](../MobileParty) — the `tradingParty` argument
- [Campaign](../Campaign) — town registries and the campaign clock
- [Save system](../../../architecture/save-system) — saveable property discipline
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough