---
title: "TownMarketData"
description: "Auto-generated class reference for TownMarketData."
---
# TownMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/TownMarketData.cs`

## Overview

`TownMarketData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TownMarketData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCategoryData
`public ItemData GetCategoryData(ItemCategory itemCategory)`

**Purpose:** Reads and returns the category data value held by the this instance.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
var result = townMarketData.GetCategoryData(itemCategory);
```

### GetItemCountOfCategory
`public int GetItemCountOfCategory(ItemCategory itemCategory)`

**Purpose:** Reads and returns the item count of category value held by the this instance.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
var result = townMarketData.GetItemCountOfCategory(itemCategory);
```

### OnTownInventoryUpdated
`public void OnTownInventoryUpdated(ItemRosterElement item, int count)`

**Purpose:** Invoked when the town inventory updated event is raised.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
townMarketData.OnTownInventoryUpdated(item, 0);
```

### AddDemand
`public void AddDemand(ItemCategory itemCategory, float demandAmount)`

**Purpose:** Adds demand to the current collection or state.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
townMarketData.AddDemand(itemCategory, 0);
```

### AddSupply
`public void AddSupply(ItemCategory itemCategory, float supplyAmount)`

**Purpose:** Adds supply to the current collection or state.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
townMarketData.AddSupply(itemCategory, 0);
```

### AddNumberInStore
`public void AddNumberInStore(ItemCategory itemCategory, int number, int value)`

**Purpose:** Adds number in store to the current collection or state.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
townMarketData.AddNumberInStore(itemCategory, 0, 0);
```

### SetSupplyDemand
`public void SetSupplyDemand(ItemCategory itemCategory, float supply, float demand)`

**Purpose:** Assigns a new value to supply demand and updates the object's internal state.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
townMarketData.SetSupplyDemand(itemCategory, 0, 0);
```

### SetDemand
`public void SetDemand(ItemCategory itemCategory, float demand)`

**Purpose:** Assigns a new value to demand and updates the object's internal state.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
townMarketData.SetDemand(itemCategory, 0);
```

### GetDemand
`public float GetDemand(ItemCategory itemCategory)`

**Purpose:** Reads and returns the demand value held by the this instance.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
var result = townMarketData.GetDemand(itemCategory);
```

### GetSupply
`public float GetSupply(ItemCategory itemCategory)`

**Purpose:** Reads and returns the supply value held by the this instance.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
var result = townMarketData.GetSupply(itemCategory);
```

### GetPriceFactor
`public float GetPriceFactor(ItemCategory itemCategory)`

**Purpose:** Reads and returns the price factor value held by the this instance.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
var result = townMarketData.GetPriceFactor(itemCategory);
```

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)`

**Purpose:** Reads and returns the price value held by the this instance.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
var result = townMarketData.GetPrice(item, null, false, null);
```

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)`

**Purpose:** Reads and returns the price value held by the this instance.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
var result = townMarketData.GetPrice(itemRosterElement, null, false, null);
```

### UpdateStores
`public void UpdateStores()`

**Purpose:** Recalculates and stores the latest representation of stores.

```csharp
// Obtain an instance of TownMarketData from the subsystem API first
TownMarketData townMarketData = ...;
townMarketData.UpdateStores();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TownMarketData entry = ...;
```

## See Also

- [Area Index](../)