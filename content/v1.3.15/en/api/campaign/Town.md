---
title: "Town"
description: "The runtime object for a built settlement (town or castle): holds buildings, workshops, market and daily Prosperity/Loyalty/Security/Food settlement, plus governance state such as its Governor and owning Clan."
---
# Town

**Namespace:** TaleWorlds.CampaignSystem.Settlements  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Town : Fief`  
**Base:** `Fief` → `SettlementComponent` → `MBObjectBase`  
**Source:** `TaleWorlds.CampaignSystem.Settlements/Town.cs`

## Overview

`Town` is the runtime container for all campaign-world state of a built settlement (a town or a castle). Every day it automatically settles Prosperity, Loyalty, Security, Food and Militia, and it exposes readable/writable entry points for buildings, workshops and the market, as well as governance relations such as its Governor and owning Clan.

## Mental Model

Treat `Town` as **"the ledger + asset list that gets replayed for a settlement once per day"**, not as a plain object you can just construct and poke:

- **You never `new Town()`.** Instances are produced when the settlement XML is deserialized by `MBObjectManager`, after which the `Town` lives long-term as the public field `Settlement.Town` hanging off a `Settlement`. A manually `new`'d `Town` is never registered with the save system and has no parent `Settlement`; referencing it gets you a broken save or a null reference.
- **It is a daily-tick settlement unit.** `Campaign.DailyTickSettlement` calls `settlement.Town.DailyTick()` during the daily settlement (see `Town.cs:596`). Inside, each `SettlementXxxModel` computes a delta that is accumulated in place: `Loyalty += LoyaltyChange`, `Security += SecurityChange`, `Prosperity += ProsperityChange`, `base.Owner.Settlement.Militia += MilitiaChange`, while food stocks and wall repair are also advanced. After the accumulation it raises `DailyTickTownEvent`.
- **It lives in the Campaign (strategic) layer, not the Mission (battle) layer.** There is no `Town` during a scene fight; when battle starts the settlement spawns `Party`/`Agent` objects, but `Town` state only evolves on the map.
- **Who holds / who is held:** the parent is `Settlement` (`Settlement.Town`). Upstream it depends on `Settlement.Owner` (the owning `Clan`), and `Hero Governor`; downstream it drives `Building`, `Workshop`, `TownMarketData`, and `Village`.
- `Town` represents **both towns and castles**: `IsTown` / `IsCastle` are decided by the `is_castle` flag at deserialize time and are mutually exclusive.

## When to Use / When NOT to Use

**Use `Town` when:**

- Reading state: `Prosperity`, `Loyalty`, `Security`, `FoodStocks`, Militia (via `Settlement.Militia`), `TradeTaxAccumulated`, `InRebelliousState`.
- Iterating assets: `Buildings` / `BuildingsInProgress`, `Workshops`, `MarketData`, `Villages` / `TradeBoundVillages`.
- Subscribing to `DailyTickTownEvent` for daily logic; checking settlement kind (`IsTown` / `IsCastle`) and ownership (`OwnerClan`).
- Reading the daily deltas (`LoyaltyChange`, `ProsperityChange`, etc.) instead of hard-writing fields.

**Do NOT use `Town` when:**

- **Do not `new Town()`.** Creation goes through settlement XML + `MBObjectManager` (see above).
- **Do not treat `Prosperity` / `Loyalty` / `Security` as persistent targets you assign directly.** The daily `DailyTick` recomputes the delta via `SettlementXxxModel` and **accumulates over** your value, and writing the field directly **broadcasts no change event** (the source has nothing like `OnSettlementProsperityChanged`). To raise a value long-term, change the "inputs" — building levels, governor perks, policies, or **override the relevant `SettlementXxxModel`**.
- **Do not change ownership by only writing `town.OwnerClan = clan`.** The setter updates clan relations (`ChangeClanInternal` → `OnFortificationAdded/Removed`), but a full ownership transfer should go through `ChangeOwnerOfSettlementAction.ApplyBy*` — it also raises `OnSettlementOwnerChangedEvent` and handles collateral state.
- **Do not cache `[CachedData]` collections across saves.** `Villages` / `TradeBoundVillages` / `BesiegerCampPositions1/2` are session-cached and rebuilt in `OnLoad()` / `OnSessionStart()` (see `Town.cs:508`, `Town.cs:488`). After a load your reference points at a stale collection.
- Do not confuse `Settlement.Town` (a field on the settlement) with `Town` itself — `Town` has no property named `Town`.

## Dependencies

- **Upstream (holds / creates / owns)**
  - [Settlement](../Settlement/) — parent; `Town` exists as the `Settlement.Town` field; much state (e.g. `Militia`, the `FoodStocks` cap) is exposed through `Settlement` / `SettlementComponent`.
  - [Clan](../Clan/) — `OwnerClan` (current owning clan), `LastCapturedBy` (who captured it last).
  - [Hero](../Hero/) — `Governor` (the governor, bidirectional via `Hero.GovernorOf`).
  - [MBObjectManager](../../campaign-ext/MBObjectManager/) — creates the `Town` instance when the settlement XML is deserialized and wires it into the save system.
- **Downstream (held / driven by `Town`)**
  - [Workshop](../Workshop/) — `Workshops` (`Workshop[]`, the workshop array).
  - [Village](../Village/) — `Villages` (bound villages), `TradeBoundVillages` (trade-bound villages).
  - `Building` — `Buildings` / `BuildingsInProgress`; see [SettlementComponent](../../campaign-ext/SettlementComponent/) for the building system. This page only describes how `Town` holds it.
  - `TownMarketData` — `MarketData` (market pricing and price factors); see [TownMarketData](../../campaign-ext/TownMarketData/).
- **Related events / Actions (in `CampaignEvents` / `TaleWorlds.CampaignSystem.Actions`)**
  - `DailyTickTownEvent` — raised after each settlement's `DailyTick` ends (see the example below).
  - `OnSettlementOwnerChangedEvent` — raised when `OwnerClan` changes via an Action.
  - [ChangeOwnerOfSettlementAction](../../campaign-ext/ChangeOwnerOfSettlementAction/), `ChangeOwnerOfWorkshopAction`, `ChangeProductionTypeOfWorkshopAction`, `InitializeWorkshopAction` — the legal ownership/workshop change entry points.
- **Related Models (`Campaign.Current.Models.*`, entry point see [Campaign](../Campaign/))**
  - [SettlementProsperityModel](../../campaign-ext/SettlementProsperityModel/), [SettlementLoyaltyModel](../../campaign-ext/SettlementLoyaltyModel/), [SettlementSecurityModel](../../campaign-ext/SettlementSecurityModel/), [SettlementFoodModel](../../campaign-ext/SettlementFoodModel/), `SettlementMilitiaModel`（入口见 [Models family guide](../../campaign-ext/models/)）, [BuildingConstructionModel](../../campaign-ext/BuildingConstructionModel/), [SettlementGarrisonModel](../../campaign-ext/SettlementGarrisonModel/), [WorkshopModel](../../campaign-ext/WorkshopModel/).
- **Economy helpers**
  - [GiveGoldAction](../../campaign-ext/GiveGoldAction/) — used by `BuildingHelper.BoostBuildingProcessWithGold` to move gold between player and town.

## Risks

1. **Writing fields in the wrong phase gets overwritten by the daily tick.** `DailyTick` is called by `Campaign.DailyTickSettlement` during daily settlement. If you write `town.Loyalty = 100` in `OnSessionStart`, a load callback, or any non-daily moment, the next `DailyTick` still does `Loyalty += LoyaltyChange`, and your write **went through no change event**. To "pin" a value, change the inputs that affect it (buildings/governor/policies) or override the corresponding Model — do not hard-write fields outside the tick.
2. **Caching `[CachedData]` collections across a load → dangling reference / broken save.** `Villages`, `TradeBoundVillages`, `BesiegerCampPositions1/2` are re-`new`'d in `OnLoad()` (`Town.cs:508`) and `OnSessionStart()` (`Town.cs:488`). If you store `town.TradeBoundVillages` (an `MBReadOnlyList<Village>`) into your own field, after one save/load your list is detached from the live world — iterating it yields stale or already-released objects. Always re-fetch from `town.Villages` / `town.TradeBoundVillages`; do not hold them long-term.
3. **Directly assigning `Prosperity`/`Loyalty`/`Security` instead of going through a Model/Event.** In the source these setters only clamp the number (Loyalty/Security clamped to 0–100, Prosperity floored at 0); they raise no event and do not participate in the Model's "explained" accumulation. Other systems (UI, AI, quest checks) read the Model result and the post-tick real value, so direct writes make everyone see inconsistent state.
4. **Setting `Governor` wrong can leave a half-broken bidirectional link.** The `Governor` setter also maintains `hero.GovernorOf = this` (clearing the old governor's `GovernorOf` on swap). If you set only `Hero.GovernorOf` but not `Town.Governor` (or vice versa), you get "the town thinks X is governor, but X's `GovernorOf` points elsewhere". `AfterLoad()` clears a governor whose `GovernorOf == null` (`Town.cs:554`), but during normal runtime you should maintain both sides.
5. **`BesiegerCampPositions1/2` are only valid during the session.** These `[CachedData]` arrays are filled from the map scene in `OnSessionStart`; before load completes or while the map scene is not ready, they return `MatrixFrame.Identity` placeholders — do not make logic decisions on them.
6. **`new Town()` never enters the save.** Any manually constructed `Town` is outside `MBObjectManager` and `Campaign.Current.AllTowns`; it is neither advanced by `DailyTick` nor serialized, so referencing it is referencing a detached object.

## Members (grouped by theme)

> Most fields are "readable/writable state", but their correct write timing is almost entirely confined to the daily tick or to going through an Action/Model. Side effects and call timing are noted per member below.

### Governance and ownership

#### `public Clan OwnerClan { get; set; }`
The clan that currently owns the settlement. **Side effect:** the setter calls `ChangeClanInternal` on value change, which does `RemoveOwnerClan()` / `SetNewOwnerClan()`, raising `Clan.OnFortificationAdded/Removed` and refreshing bound-village visuals. **Call timing:** almost never assign directly; use `ChangeOwnerOfSettlementAction.ApplyByDefault(Hero, Settlement)` etc., which also raises `OnSettlementOwnerChangedEvent`.

#### `public Hero Governor { get; set; }`
The governor. **Side effect:** the setter **bidirectionally** maintains `hero.GovernorOf = this` (it nulls the old governor's `GovernorOf` on swap). **Call timing:** maintain both sides when setting/clearing a governor; the daily tick reads the governor's perks (`DefaultPerks.Roguery.WhiteLies` / `Scarface`) to occasionally add relations.

#### `public Clan LastCapturedBy { get; set; }`
The clan that last captured the settlement; written by the siege/ownership-change flow and used for loot and renown settlement ownership checks.

#### `public CultureObject Culture`
Read-only, equals `Settlement.Culture`. Used for troop, name and building-style decisions.

#### `public bool InRebelliousState`
Whether the settlement is in revolt; affects whether the defender militia joins the daily defense (`GetDefenderParties` logic inside `DailyTick`). Written by the rebellion behavior.

### Prosperity / Loyalty / Security / Food

#### `public float Prosperity { get; set; }`
Prosperity; setter clamps to `>= 0`. **Note:** writing directly only changes the field, raises no event, and the daily tick recomputes and overwrites it via `SettlementProsperityModel`. Read it for the current value; change it via Model inputs.

#### `public float Loyalty { get; set; }`
Loyalty; setter clamps to 0–100. Same mechanism as `Prosperity`.

#### `public float Security { get; set; }`
Security; setter clamps to 0–100. Same mechanism as `Prosperity`.

#### `public float FoodStocks` (inherited from `Fief`)
Food stock; accumulated by `FoodChange` in `DailyTick`. When below 0 it is set to 0 and flagged `RemainingFoodPercentage = -100`; when above `FoodStocksUpperLimit()` it is clamped. Do not hard-write food as a persistent value — it is recomputed daily by `SettlementFoodModel`.

#### `public int TradeTaxAccumulated { get; set; }`
Accumulated trade tax; initialized at `1000 + RandomInt(1000)` for towns and `0` for castles on `OnInit`. Accumulated by trade behavior, read/reset by taxation behavior.

#### `public IReadOnlyCollection<SellLog> SoldItems`
Recent sell records of this town (`SellLog`: category + amount). Written by market sell logic (`SetSoldItems`); read-only for display.

### Daily deltas (read-only, from Models)

These properties are **not state — they are "what would happen if we settled now"** predictions, computed live by the corresponding Model, read-only:

- `ProsperityChange` / `ProsperityChangeExplanation` — `SettlementProsperityModel.CalculateProsperityChange`.
- `LoyaltyChange` / `LoyaltyChangeExplanation` — `SettlementLoyaltyModel.CalculateLoyaltyChange`.
- `SecurityChange` / `SecurityChangeExplanation` — `SettlementSecurityModel.CalculateSecurityChange`.
- `FoodChange` / `FoodChangeWithoutMarketStocks` / `FoodChangeExplanation` — `SettlementFoodModel.CalculateTownFoodStocksChange`.
- `MilitiaChange` / `MilitiaChangeExplanation` — `SettlementMilitiaModel.CalculateMilitiaChange` (applied to `Settlement.Militia`).
- `Construction` / `ConstructionExplanation` — `BuildingConstructionModel.CalculateDailyConstructionPower` (daily building progress points).

The `*Explanation` variants return an `ExplainedNumber` that can expand each contribution source in UI/debug — the correct entry point when diagnosing "why is prosperity dropping".

### Buildings

#### `public MBList<Building> Buildings`
All buildings of the settlement (level + progress). **Call timing:** iterating/reading is safe; changing a building level should go through `Building` itself and `BuildingConstructionModel`, not by poking internal fields. `AfterLoad` drops entries whose `BuildingType == null` or `!IsReady` (`Town.cs:526`).

#### `public Queue<Building> BuildingsInProgress`
The queue of buildings under construction (head = current construction item).

#### `public Building CurrentBuilding`
The building under construction: `Peek()` of the queue if non-empty, else `CurrentDefaultBuilding`.

#### `public Building CurrentDefaultBuilding`
The "default construction building" when nothing is under construction (the first `IsCurrentlyDefault` building); returns `null` when something is under construction.

#### `public int BoostBuildingProcess`
Extra construction-acceleration points the player injects with gold (added into the daily `Construction`). The real write entry is `TaleWorlds.CampaignSystem.Helpers.BuildingHelper.BoostBuildingProcessWithGold(int gold, Town town)`, which moves gold between player and town via `GiveGoldAction` before writing this field — do not assign directly or the gold bookkeeping breaks.

#### `public float Construction` (see "Daily deltas" above)

#### `public int GetWallLevel()`
Returns the current wall-building level (towns use `SettlementFortifications`, castles use `CastleFortifications`); used for siege damage and appearance. Inside `DailyTick`, `RepairWallsOfSettlementDaily` repairs wall segments via `SettlementGarrisonModel`.

### Workshops

#### `[SaveableProperty] public Workshop[] Workshops { get; protected set; }`
The settlement's workshop array (length decided by `InitializeWorkshops`). **Call timing:** read-only iteration is safe; adding/removing workshops goes through `InitializeWorkshopAction` / `ChangeOwnerOfWorkshopAction` / `ChangeProductionTypeOfWorkshopAction`. `AfterLoad` calls `Workshop.AfterLoad()` on each workshop.

#### `public void InitializeWorkshops(int count)`
Creates an empty workshop array of size `count` with ids `"workshop_i"`; called by the new-game init flow. Mods generally should not call it at runtime.

### Market and prices

#### `public TownMarketData MarketData`
Market data (prices, price factors, stock-update callbacks). `GetItemPrice(ItemObject, ...)` / `GetItemPrice(EquipmentElement, ...)` and `GetItemCategoryPriceIndex(ItemCategory)` all delegate to it; buy/sell goes through here, not your own pricing.

#### `public int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`
Delegates to `MarketData.GetPrice`; the only reliable entry for settlement trade pricing. The `item` argument is an [ItemObject](../../core/ItemObject/).

#### `public float GetItemCategoryPriceIndex(ItemCategory itemCategory)`
Price index of an item category (for supply/demand fluctuation display).

### Villages / supply / fleet

#### `[CachedData] public MBReadOnlyList<Village> Villages`
Villages bound to this settlement (a cached view of `Settlement.BoundVillages`). **[Risk]** see the "caching across loads" section above — re-fetch on every access, do not hold long-term.

#### `public MBReadOnlyList<Village> TradeBoundVillages`
Trade-bound villages (`_tradeBoundVillagesCache`, rebuilt on `OnLoad`). Same mechanism and risk as above.

#### `public MBReadOnlyList<Ship> AvailableShips`
Ships available at this settlement's dock (`Settlement.Party.Ships`).

#### `public bool HasTournament`
`true` only for towns when `TournamentManager.GetTournamentGame(this) != null`.

### Queries and static entry points

#### `public static MBReadOnlyList<Town> AllTowns` / `AllCastles`
Convenience forwards to `Campaign.Current.AllTowns` / `AllCastles`; iterate all towns/castles with these rather than filtering yourself.

#### `public static IEnumerable<Town> AllFiefs`
The merged enumeration of `AllTowns` and `AllCastles` (towns + castles).

#### `public override bool IsTown` / `public override bool IsCastle`
Whether town / castle (mutually exclusive); prefer `Settlement.IsTown` / `IsCastle` when checking settlement kind — they forward to `Town` internally.

#### `public bool IsUnderSiege`
Forwards to `Settlement.IsUnderSiege`.

#### `public MBReadOnlyList<Settlement> GetNeighborFortifications(MobileParty.NavigationType navigationType)`
Gets neighboring settlements via `MapDistanceModel.GetNeighborsOfFortification`; used for reinforcement/march checks.

#### `public int FoodStocksUpperLimit()`
Food cap: `SettlementFoodModel` base + castle bonus + building (`BuildingEffectEnum.FoodStock`) contribution. `DailyTick` clamps food with it.

## Examples

### Example 1: Iterate a player's workshops across all towns (read-only, any time)

```csharp
// Real acquisition path: Settlement.All -> Settlement.Town -> Town.Workshops
foreach (Settlement settlement in Settlement.All)
{
    if (!settlement.IsTown)
    {
        continue;
    }

    Town town = settlement.Town;
    foreach (Workshop workshop in town.Workshops)
    {
        if (workshop.Owner == Hero.MainHero)
        {
            // A workshop owned by the player; read workshop.Capital / workshop.ProfitOfTheLastDay etc.
            int capital = workshop.Capital;
        }
    }
}
```

> This pattern comes directly from `WorkshopsCampaignBehavior.RemoveDeadOwnersFromWorkshops` (around `WorkshopsCampaignBehavior.cs:170`): `Workshop[] workshops = item.Town.Workshops;` then iterate.

### Example 2: Subscribe to daily town settlement in a CampaignBehavior (the correct "when")

```csharp
public class MyTownWatcherBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Real event: raised after each settlement's DailyTick
        CampaignEvents.DailyTickTownEvent.AddNonSerializedListener(this, OnDailyTickTown);
    }

    private void OnDailyTickTown(Town town)
    {
        if (town.OwnerClan != Clan.PlayerClan)
        {
            return;
        }

        // Read the daily deltas instead of hard-writing fields:
        float loyaltyChange = town.LoyaltyChange;
        float prosperityChange = town.ProsperityChange;

        // To raise loyalty long-term, change the inputs (buildings/governor perks/policies),
        // or override SettlementLoyaltyModel, not town.Loyalty += x.
        if (town.Loyalty < 25f)
        {
            // trigger your alert/event logic
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        // no fields to persist
    }
}
```

### Example 3: Inject construction acceleration via the legal entry point (correct way to mutate state)

```csharp
// Do NOT write town.BoostBuildingProcess directly; use BuildingHelper which handles the gold transfer:
Town town = Settlement.CurrentSettlement.Town;
if (town != null)
{
    TaleWorlds.CampaignSystem.Helpers.BuildingHelper.BoostBuildingProcessWithGold(1000, town);
}

// Iterate buildings (read-only):
foreach (Building building in town.Buildings)
{
    if (building.BuildingType == DefaultBuildingTypes.SettlementMilitiaBarracks)
    {
        int level = building.CurrentLevel;
    }
}
```

### Example 4: Legally transfer settlement ownership (instead of writing OwnerClan)

```csharp
Settlement target = Settlement.Find("town_ESWE_1");
if (target != null && target.Town != null)
{
    // Correctly updates Town.OwnerClan and raises OnSettlementOwnerChangedEvent:
    ChangeOwnerOfSettlementAction.ApplyByDefault(Hero.MainHero, target);
}
```

## Cross-version notes

- The API semantics on this page are authoritative against the **1.4.5** source. Compared with `bannerlord-1.3.15`'s `Town.cs`, the **public interface is essentially the same** (both `Town : Fief`, with `Prosperity`/`Loyalty`/`Security`/`Buildings`/`Workshops`/`Governor`/`OwnerClan` members, plus `DailyTick` and `InitializeWorkshops`). This page lives under the `v1.3.15` doc bucket and shares the same API description.
- `DailyTickTownEvent`, `ChangeOwnerOfSettlementAction`, and `BuildingHelper.BoostBuildingProcessWithGold` already exist in 1.3.x, so the examples are reusable directly.
- For cross-version mods, note that `Town.FoodStocks` is inherited from `Fief` (the same in 1.3.x); the food cap / wall-repair logic goes through the corresponding `SettlementXxxModel`, and overriding the Model is safer than hard-writing fields.

## See Also

- ↑ Parent: [Settlement](../Settlement/) — `Town` hangs under `Settlement.Town`, its parent component
- ↔ Siblings / related: [Clan](../Clan/) (OwnerClan), [Hero](../Hero/) (Governor), [Workshop](../Workshop/) (workshops), [Village](../Village/) (bound villages)
- Related behaviors & model entry: [Campaign](../Campaign/) — `Campaign.Current.Models` and the `SettlementXxxModel`s, plus `CampaignEvents`
- Creation & deserialization: [MBObjectManager](../../campaign-ext/MBObjectManager/) — `Town` instances are produced from settlement XML by it
