---
title: "FakeMarketData"
description: "Auto-generated class reference for FakeMarketData."
---
# FakeMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class FakeMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/FakeMarketData.cs`

## Overview

`FakeMarketData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FakeMarketData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**Purpose:** Reads and returns the price value held by the this instance.

```csharp
// Obtain an instance of FakeMarketData from the subsystem API first
FakeMarketData fakeMarketData = ...;
var result = fakeMarketData.GetPrice(item, tradingParty, false, merchantParty);
```

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**Purpose:** Reads and returns the price value held by the this instance.

```csharp
// Obtain an instance of FakeMarketData from the subsystem API first
FakeMarketData fakeMarketData = ...;
var result = fakeMarketData.GetPrice(itemRosterElement, tradingParty, false, merchantParty);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FakeMarketData entry = ...;
```

## See Also

- [Area Index](../)