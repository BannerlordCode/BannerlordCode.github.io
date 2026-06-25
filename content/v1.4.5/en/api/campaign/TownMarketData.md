---
title: "TownMarketData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownMarketData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TownMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/TownMarketData.cs`

## Overview

`TownMarketData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TownMarketData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCategoryData
`public ItemData GetCategoryData(ItemCategory itemCategory)`

**Purpose:** Gets the current value of `category data`.

### GetItemCountOfCategory
`public int GetItemCountOfCategory(ItemCategory itemCategory)`

**Purpose:** Gets the current value of `item count of category`.

### OnTownInventoryUpdated
`public void OnTownInventoryUpdated(ItemRosterElement item, int count)`

**Purpose:** Called when the `town inventory updated` event is raised.

### AddDemand
`public void AddDemand(ItemCategory itemCategory, float demandAmount)`

**Purpose:** Adds `demand` to the current collection or state.

### AddSupply
`public void AddSupply(ItemCategory itemCategory, float supplyAmount)`

**Purpose:** Adds `supply` to the current collection or state.

### AddNumberInStore
`public void AddNumberInStore(ItemCategory itemCategory, int number, int value)`

**Purpose:** Adds `number in store` to the current collection or state.

### SetSupplyDemand
`public void SetSupplyDemand(ItemCategory itemCategory, float supply, float demand)`

**Purpose:** Sets the value or state of `supply demand`.

### SetDemand
`public void SetDemand(ItemCategory itemCategory, float demand)`

**Purpose:** Sets the value or state of `demand`.

### GetDemand
`public float GetDemand(ItemCategory itemCategory)`

**Purpose:** Gets the current value of `demand`.

### GetSupply
`public float GetSupply(ItemCategory itemCategory)`

**Purpose:** Gets the current value of `supply`.

### GetPriceFactor
`public float GetPriceFactor(ItemCategory itemCategory)`

**Purpose:** Gets the current value of `price factor`.

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)`

**Purpose:** Gets the current value of `price`.

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)`

**Purpose:** Gets the current value of `price`.

### UpdateStores
`public void UpdateStores()`

**Purpose:** Updates the state or data of `stores`.

## Usage Example

```csharp
var value = new TownMarketData();
```

## See Also

- [Complete Class Catalog](../catalog)