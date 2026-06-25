---
title: "VillageMarketData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageMarketData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VillageMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/VillageMarketData.cs`

## Overview

`VillageMarketData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `VillageMarketData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**Purpose:** Gets the current value of `price`.

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)`

**Purpose:** Gets the current value of `price`.

## Usage Example

```csharp
var value = new VillageMarketData();
```

## See Also

- [Complete Class Catalog](../catalog)