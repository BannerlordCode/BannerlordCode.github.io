---
title: "Town"
description: "Auto-generated class reference for Town."
---
# Town

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Town : Fief`
**Base:** `Fief`
**File:** `TaleWorlds.CampaignSystem/Settlements/Town.cs`

## Overview

`Town` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Prosperity` | `public float Prosperity { get; set; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `ProsperityChange` | `public float ProsperityChange { get; }` |
| `ProsperityChangeExplanation` | `public ExplainedNumber ProsperityChangeExplanation { get; }` |
| `FoodChange` | `public float FoodChange { get; }` |
| `FoodChangeWithoutMarketStocks` | `public float FoodChangeWithoutMarketStocks { get; }` |
| `FoodChangeExplanation` | `public ExplainedNumber FoodChangeExplanation { get; }` |
| `LoyaltyChange` | `public float LoyaltyChange { get; }` |
| `LoyaltyChangeExplanation` | `public ExplainedNumber LoyaltyChangeExplanation { get; }` |
| `SecurityChange` | `public float SecurityChange { get; }` |
| `SecurityChangeExplanation` | `public ExplainedNumber SecurityChangeExplanation { get; }` |
| `MilitiaChange` | `public float MilitiaChange { get; }` |
| `MilitiaChangeExplanation` | `public ExplainedNumber MilitiaChangeExplanation { get; }` |
| `Construction` | `public float Construction { get; }` |
| `ConstructionExplanation` | `public ExplainedNumber ConstructionExplanation { get; }` |
| `OwnerClan` | `public Clan OwnerClan { get; set; }` |
| `Security` | `public float Security { get; set; }` |
| `Loyalty` | `public float Loyalty { get; set; }` |
| `TradeBoundVillages` | `public MBReadOnlyList<Village> TradeBoundVillages { get; }` |
| `Workshops` | `public Workshop Workshops { get; set; }` |
| `CurrentBuilding` | `public Building CurrentBuilding { get; }` |
| `CurrentDefaultBuilding` | `public Building CurrentDefaultBuilding { get; }` |
| `MarketData` | `public TownMarketData MarketData { get; set; }` |
| `TradeTaxAccumulated` | `public int TradeTaxAccumulated { get; set; }` |
| `Governor` | `public Hero Governor { get; set; }` |
| `AvailableShips` | `public MBReadOnlyList<Ship> AvailableShips { get; }` |
| `AllFiefs` | `public static IEnumerable<Town> AllFiefs { get; }` |
| `AllTowns` | `public static MBReadOnlyList<Town> AllTowns { get; }` |
| `AllCastles` | `public static MBReadOnlyList<Town> AllCastles { get; }` |
| `IsTown` | `public override bool IsTown { get; }` |
| `IsCastle` | `public override bool IsCastle { get; }` |
| `SoldItems` | `public IReadOnlyCollection<Town.SellLog> SoldItems { get; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |
| `IsUnderSiege` | `public bool IsUnderSiege { get; }` |
| `Villages` | `public MBReadOnlyList<Village> Villages { get; set; }` |
| `LastCapturedBy` | `public Clan LastCapturedBy { get; set; }` |
| `HasTournament` | `public bool HasTournament { get; }` |
| `Category` | `public ItemCategory Category { get; }` |
| `Number` | `public int Number { get; }` |

## Key Methods

### GetDefenderParties
`public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)`

**Purpose:** **Purpose:** Reads and returns the defender parties value held by the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.GetDefenderParties(battleType);
```

### GetNextDefenderParty
`public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

**Purpose:** **Purpose:** Reads and returns the next defender party value held by the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.GetNextDefenderParty(partyIndex, battleType);
```

### FoodStocksUpperLimit
`public int FoodStocksUpperLimit()`

**Purpose:** **Purpose:** Executes the FoodStocksUpperLimit logic.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.FoodStocksUpperLimit();
```

### OnInit
`public override void OnInit()`

**Purpose:** **Purpose:** Invoked when the init event is raised.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
town.OnInit();
```

### OnSessionStart
`public override void OnSessionStart()`

**Purpose:** **Purpose:** Invoked when the session start event is raised.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
town.OnSessionStart();
```

### InitializeWorkshops
`public void InitializeWorkshops(int count)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by workshops.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
town.InitializeWorkshops(0);
```

### AddEffectOfBuildings
`public void AddEffectOfBuildings(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

**Purpose:** **Purpose:** Adds effect of buildings to the current collection or state.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
town.AddEffectOfBuildings(buildingEffect, result);
```

### GetWallLevel
`public int GetWallLevel()`

**Purpose:** **Purpose:** Reads and returns the wall level value held by the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.GetWallLevel();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.ToString();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
town.Deserialize(objectManager, node);
```

### SetSoldItems
`public void SetSoldItems(IEnumerable<Town.SellLog> logList)`

**Purpose:** **Purpose:** Assigns a new value to sold items and updates the object's internal state.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
town.SetSoldItems(logList);
```

### GetItemPrice
`public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** **Purpose:** Reads and returns the item price value held by the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.GetItemPrice(item, null, false);
```

### GetItemPrice
`public override int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`

**Purpose:** **Purpose:** Reads and returns the item price value held by the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.GetItemPrice(itemRosterElement, null, false);
```

### GetProsperityLevel
`public override SettlementComponent.ProsperityLevel GetProsperityLevel()`

**Purpose:** **Purpose:** Reads and returns the prosperity level value held by the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.GetProsperityLevel();
```

### GetItemCategoryPriceIndex
`public float GetItemCategoryPriceIndex(ItemCategory itemCategory)`

**Purpose:** **Purpose:** Reads and returns the item category price index value held by the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.GetItemCategoryPriceIndex(itemCategory);
```

### GetNeighborFortifications
`public MBReadOnlyList<Settlement> GetNeighborFortifications(MobileParty.NavigationType navigationType)`

**Purpose:** **Purpose:** Reads and returns the neighbor fortifications value held by the this instance.

```csharp
// Obtain an instance of Town from the subsystem API first
Town town = ...;
var result = town.GetNeighborFortifications(navigationType);
```

### AutoGeneratedStaticCollectObjectsSellLog
`public static void AutoGeneratedStaticCollectObjectsSellLog(object o, List<object> collectedObjects)`

**Purpose:** **Purpose:** Executes the AutoGeneratedStaticCollectObjectsSellLog logic.

```csharp
// Static call; no instance required
Town.AutoGeneratedStaticCollectObjectsSellLog(o, collectedObjects);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Town town = ...;
town.GetDefenderParties(battleType);
```

## See Also

- [Area Index](../)