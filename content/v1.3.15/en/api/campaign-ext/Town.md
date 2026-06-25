---
title: "Town"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Town`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Town](/versions/Town)
<!-- END BREADCRUMB -->
# Town

**Namespace:** TaleWorlds.CampaignSystem.Settlements  
**Module:** TaleWorlds.CampaignSystem  
**Type:** class (inherits `Fief`)  
**File:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Settlements/Town.cs`

`Town` represents the market, garrison, and administrative core attached to a `Settlement` (town or castle). Every town/castle settlement exposes a `Town` instance via `Settlement.Town`, holding prosperity, loyalty, security, food, buildings, workshops, market data, and owner clan, with daily changes settled by campaign models.

## Overview

`Town` covers both towns (`IsTown`) and castles (`IsCastle`). Get an instance via `Settlement.Town`, or enumerate all with the static `AllTowns` / `AllCastles` / `AllFiefs`. Prosperity, loyalty, security, etc. have daily deltas computed by campaign models (`SettlementProsperityModel`, etc.) and applied by the engine in `DailyTick`. Direct assignment triggers built-in clamping: prosperity ≥ 0; loyalty/security clamped to 0–100. Gold (`Gold`) is read-only and must be changed via `ChangeGold`.

## Mental Model

Treat `Town` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Constants

| Name | Type | Value | Description |
|------|------|-------|-------------|
| `InitialTownGold` | int | 20000 | Initial town gold (set via `ChangeGold` in `OnInit`) |
| `HighProsperityThreshold` | int | 5000 | "High" prosperity threshold |
| `MidProsperityThreshold` | int | 2000 | "Mid" prosperity threshold |

> Note: these constants are `private`, for engine use only; listed so modders understand default initial values and prosperity tiers.

## Static properties

| Name | Type | Description |
|------|------|-------------|
| `AllTowns` | `MBReadOnlyList<Town>` | All current towns |
| `AllCastles` | `MBReadOnlyList<Town>` | All current castles |
| `AllFiefs` | `IEnumerable<Town>` | Union enumeration of all towns and castles |

## Properties

### Economy & state

| Name | Type | Description |
|------|------|-------------|
| `Prosperity` | `float` | Prosperity (get/set, setter clamps ≥ 0) |
| `ProsperityChange` | `float` | Daily prosperity delta (from `SettlementProsperityModel`) |
| `ProsperityChangeExplanation` | `ExplainedNumber` | Prosperity delta breakdown |
| `Gold` | `int` | Town gold (inherited from `SettlementComponent`, get-only; change via `ChangeGold`) |
| `TradeTaxAccumulated` | `int` | Accumulated trade tax (get/set) |
| `Loyalty` | `float` | Loyalty (get/set, clamped 0–100) |
| `LoyaltyChange` | `float` | Daily loyalty delta |
| `LoyaltyChangeExplanation` | `ExplainedNumber` | Loyalty delta breakdown |
| `Security` | `float` | Security (get/set, clamped 0–100) |
| `SecurityChange` | `float` | Daily security delta |
| `SecurityChangeExplanation` | `ExplainedNumber` | Security delta breakdown |
| `FoodStocks` | `float` | Food stocks (inherited from `Fief`, get/set) |
| `FoodChange` | `float` | Daily food delta (incl. market stocks) |
| `FoodChangeWithoutMarketStocks` | `float` | Daily food delta (excl. market stocks) |
| `FoodChangeExplanation` | `ExplainedNumber` | Food delta breakdown |
| `Militia` | `float` | Militia strength (inherited from `Fief`, get-only, from `Owner.Settlement.Militia`; write via `Settlement.Militia`) |
| `MilitiaChange` | `float` | Daily militia delta |
| `MilitiaChangeExplanation` | `ExplainedNumber` | Militia delta breakdown |
| `Construction` | `float` | Daily construction power (from `BuildingConstructionModel`) |
| `ConstructionExplanation` | `ExplainedNumber` | Daily construction power breakdown |

### Ownership & faction

| Name | Type | Description |
|------|------|-------------|
| `OwnerClan` | `Clan` | Clan owning the town/castle (get/set; changes notify the clan) |
| `Owner` | `PartyBase` | Owner party of the settlement (inherited from `SettlementComponent`) |
| `MapFaction` | `IFaction` | Map faction of the owner clan (override; null if no owner clan) |
| `Governor` | `Hero` | Governor (get/set; setter maintains the `Hero.GovernorOf` back-reference) |
| `LastCapturedBy` | `Clan` | Clan that last captured this place (get/set) |
| `Culture` | `CultureObject` | Culture (from `Owner.Settlement.Culture`) |

### Market, buildings & workshops

| Name | Type | Description |
|------|------|-------------|
| `MarketData` | `TownMarketData` | Market data (get-only) |
| `Workshops` | `Workshop[]` | Workshop array (`[SaveableProperty(1005)]`) |
| `Buildings` | `MBList<Building>` | Completed buildings (field, `[SaveableField(1006)]`) |
| `BuildingsInProgress` | `Queue<Building>` | In-progress building queue (field, `[SaveableField(1007)]`) |
| `CurrentBuilding` | `Building` | Current in-progress building (returns current default building if none in progress) |
| `CurrentDefaultBuilding` | `Building` | Current default building (null if something is in progress) |
| `BoostBuildingProcess` | `int` | Construction progress bonus (field, `[SaveableField(1008)]`) |
| `TradeBoundVillages` | `MBReadOnlyList<Village>` | Trade-bound villages |
| `Villages` | `MBReadOnlyList<Village>` | Bound villages (from `Settlement.BoundVillages`, `[CachedData]`) |
| `SoldItems` | `IReadOnlyCollection<SellLog>` | Sold-item log |

### Fortification & siege

| Name | Type | Description |
|------|------|-------------|
| `IsTown` | `bool` | override; true if not a castle |
| `IsCastle` | `bool` | override; whether a castle |
| `IsUnderSiege` | `bool` | Whether under siege (from `Settlement.IsUnderSiege`) |
| `HasTournament` | `bool` | Whether a tournament is running (towns only) |
| `InRebelliousState` | `bool` | Whether in rebellion (field, `[SaveableField(1011)]`) |
| `GarrisonParty` | `MobileParty` | Garrison party (inherited from `Fief`, get-only; null if no garrison component) |
| `AvailableShips` | `MBReadOnlyList<Ship>` | Available ships (from `Settlement.Party.Ships`) |
| `BesiegerCampPositions1` / `BesiegerCampPositions2` | `MatrixFrame[]` | Besieger camp positions (field, `[CachedData]`, filled at session start) |
| `GarrisonAutoRecruitmentIsEnabled` | `bool` | Garrison auto-recruitment toggle (field, default true, `[SaveableField(1016)]`) |

## Methods

### ChangeGold

```csharp
public void ChangeGold(int changeAmount)
```

Adjusts town gold (inherited from `SettlementComponent`). Adds `changeAmount` to `Gold`, clamped to ≥ 0. This is the correct way to modify `Gold` (which is get-only publicly).

**Parameters:**
- `changeAmount` - Gold delta (may be negative)

### GetItemPrice

```csharp
public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)
public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)
```

Computes the item's price in this town's market via `MarketData.GetPrice`.

**Parameters:**
- `item` / `itemRosterElement` - Item to price
- `tradingParty` - Trading party (nullable)
- `isSelling` - Whether selling

**Returns:** Item price (int).

### GetItemCategoryPriceIndex

```csharp
public float GetItemCategoryPriceIndex(ItemCategory itemCategory)
```

Returns the price factor for the given item category in this town's market (from `MarketData.GetPriceFactor`).

### GetWallLevel

```csharp
public int GetWallLevel()
```

Returns the wall level: towns read `SettlementFortifications`, castles read `CastleFortifications` building's `CurrentLevel`; 0 if not found.

### GetProsperityLevel

```csharp
public override SettlementComponent.ProsperityLevel GetProsperityLevel()
```

Returns the tier by prosperity: ≥ 5000 `High`, ≥ 2000 `Mid`, else `Low`.

### FoodStocksUpperLimit

```csharp
public int FoodStocksUpperLimit()
```

Returns the food stocks upper limit. Base from `SettlementFoodModel.FoodStocksUpperLimit`, castles add `CastleFoodStockUpperLimitBonus`, plus building food-stock effects.

**Returns:** The limit (int).

### GetNeighborFortifications

```csharp
public MBReadOnlyList<Settlement> GetNeighborFortifications(MobileParty.NavigationType navigationType)
```

Returns neighboring fortified settlements reachable by the given navigation type (from `MapDistanceModel.GetNeighborsOfFortification`).

**Parameters:**
- `navigationType` - Navigation type (foot/sea, etc.)

**Returns:** List of neighboring fortified settlements.

### InitializeWorkshops

```csharp
public void InitializeWorkshops(int count)
```

Initializes the workshop array with the given count (each identified by `"workshop_" + i`). No-op if `count ≤ 0`.

### AddEffectOfBuildings

```csharp
public void AddEffectOfBuildings(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)
```

Accumulates the contribution of all completed buildings for the given effect type into `result`.

### GetDefenderParties / GetNextDefenderParty

```csharp
public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)
public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)
```

Enumerates / iterates defender parties (settlement party + garrison/militia at war with the attacker and active, filtered by battle type).

### SetSoldItems

```csharp
public void SetSoldItems(IEnumerable<Town.SellLog> logList)
```

Replaces the sold-item log.

### Other

| Method | Description |
|------|------|
| `ToString()` | override; returns `Name` text |
| `OnInit()` | override; initializes loyalty/security/trade tax/initial gold (20000) |
| `OnSessionStart()` | override; reads besieger camp positions from the map scene |
| `Deserialize(MBObjectManager, XmlNode)` | override; reads `is_castle`, prosperity, buildings, etc. from XML |
| `DailyTick()` | internal; daily settlement of loyalty/security/food/prosperity/militia and wall repair (engine-called) |

## Nested types

### Town.SellLog

```csharp
public struct SellLog
{
    [SaveableProperty(200)] public ItemCategory Category { get; }
    [SaveableProperty(201)] public int Number { get; }
    public SellLog(ItemCategory category, int count);
}
```

Sold-item log entry: item category and quantity.

## Usage example

```csharp
// Get a Town via its settlement
Settlement settlement = Settlement.Find("town_Epiphany");
Town town = settlement?.Town;
if (town == null) return;

// Read & modify prosperity (setter auto-clamps ≥ 0)
float prosperity = town.Prosperity;
town.Prosperity += 100f;

// Read/modify gold (Gold is get-only; must use ChangeGold)
int gold = town.Gold;
town.ChangeGold(5000);   // add 5000 gold
town.ChangeGold(-1000);  // subtract, result stays ≥ 0

// Loyalty/security clamped to 0–100
town.Loyalty = 80f;
town.Security = 75f;

// Read daily deltas and breakdowns
float prosperityChange = town.ProsperityChange;
ExplainedNumber detail = town.ProsperityChangeExplanation;

// Market price and price factor
int price = town.GetItemPrice(itemObject, tradingParty: null, isSelling: false);
float factor = town.GetItemCategoryPriceIndex(itemCategory);

// Owner clan and governor
Clan owner = town.OwnerClan;
Hero governor = town.Governor;
town.Governor = newGovernor;  // maintains Hero.GovernorOf automatically

// Garrison and militia (write militia via Settlement.Militia)
MobileParty garrison = town.GarrisonParty;
town.Settlement.Militia += 5f;

// Enumerate all towns
foreach (Town t in Town.AllTowns)
{
    Debug.Print($"{t.Name}: prosperity {t.Prosperity:F0}, gold {t.Gold}");
}
```

## See also

- [Settlement](./Settlement)
- [Workshop](./Workshop)
- [Campaign](./Campaign)
- [PartyTemplate](./PartyTemplate)

## Usage Example

```csharp
var example = new Town();
```
