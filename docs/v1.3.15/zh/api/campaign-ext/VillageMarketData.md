<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageMarketData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/VillageMarketData.cs`

## 概述

`VillageMarketData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### GetPrice
```csharp
public int GetPrice(ItemObject item, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)
```

### GetPrice
```csharp
public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty, bool isSelling, PartyBase merchantParty)
```

## 使用示例

```csharp
// VillageMarketData (Data) 的典型用法
new VillageMarketData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)