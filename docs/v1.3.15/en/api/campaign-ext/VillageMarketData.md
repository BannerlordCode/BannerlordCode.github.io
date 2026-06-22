<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageMarketData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/VillageMarketData.cs`

## Overview

`VillageMarketData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### GetPrice
```csharp
public int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)
```

### GetPrice
```csharp
public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)
```

## Usage Example

```csharp
// Typical usage of VillageMarketData (Data)
new VillageMarketData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)