<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownMarketData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/TownMarketData.cs`

## Overview

`TownMarketData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### GetCategoryData
```csharp
public ItemData GetCategoryData(ItemCategory itemCategory)
```

### GetItemCountOfCategory
```csharp
public int GetItemCountOfCategory(ItemCategory itemCategory)
```

### OnTownInventoryUpdated
```csharp
public void OnTownInventoryUpdated(ItemRosterElement item, int count)
```

### AddDemand
```csharp
public void AddDemand(ItemCategory itemCategory, float demandAmount)
```

### AddSupply
```csharp
public void AddSupply(ItemCategory itemCategory, float supplyAmount)
```

### AddNumberInStore
```csharp
public void AddNumberInStore(ItemCategory itemCategory, int number, int value)
```

### SetSupplyDemand
```csharp
public void SetSupplyDemand(ItemCategory itemCategory, float supply, float demand)
```

### SetDemand
```csharp
public void SetDemand(ItemCategory itemCategory, float demand)
```

### GetDemand
```csharp
public float GetDemand(ItemCategory itemCategory)
```

### GetSupply
```csharp
public float GetSupply(ItemCategory itemCategory)
```

### GetPriceFactor
```csharp
public float GetPriceFactor(ItemCategory itemCategory)
```

### GetPrice
```csharp
public int GetPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)
```

### GetPrice
```csharp
public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)
```

### UpdateStores
```csharp
public void UpdateStores()
```

## Usage Example

```csharp
// Typical usage of TownMarketData (Data)
new TownMarketData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)