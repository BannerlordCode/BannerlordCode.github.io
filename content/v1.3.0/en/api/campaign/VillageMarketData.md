---
title: "VillageMarketData"
description: "Auto-generated class reference for VillageMarketData."
---
# VillageMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/VillageMarketData.cs`

## Overview

`VillageMarketData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `VillageMarketData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**Purpose:** Reads and returns the price value held by the this instance.

```csharp
// Obtain an instance of VillageMarketData from the subsystem API first
VillageMarketData villageMarketData = ...;
var result = villageMarketData.GetPrice(item, tradingParty, false, merchantParty);
```

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**Purpose:** Reads and returns the price value held by the this instance.

```csharp
// Obtain an instance of VillageMarketData from the subsystem API first
VillageMarketData villageMarketData = ...;
var result = villageMarketData.GetPrice(itemRosterElement, tradingParty, false, merchantParty);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
VillageMarketData entry = ...;
```

## See Also

- [Area Index](../)