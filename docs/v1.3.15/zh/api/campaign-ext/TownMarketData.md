<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownMarketData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/TownMarketData.cs`

## 概述

`TownMarketData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

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

## 使用示例

```csharp
// TownMarketData (Data) 的典型用法
new TownMarketData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)