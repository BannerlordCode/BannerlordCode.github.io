---
title: "TownMarketData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownMarketData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownMarketData

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownMarketData : IMarketData`
**Base:** `IMarketData`
**File:** `TaleWorlds.CampaignSystem/Settlements/TownMarketData.cs`

## 概述

`TownMarketData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TownMarketData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCategoryData
`public ItemData GetCategoryData(ItemCategory itemCategory)`

**用途 / Purpose:** 获取 `category data` 的当前值。

### GetItemCountOfCategory
`public int GetItemCountOfCategory(ItemCategory itemCategory)`

**用途 / Purpose:** 获取 `item count of category` 的当前值。

### OnTownInventoryUpdated
`public void OnTownInventoryUpdated(ItemRosterElement item, int count)`

**用途 / Purpose:** 当 `town inventory updated` 事件触发时调用此方法。

### AddDemand
`public void AddDemand(ItemCategory itemCategory, float demandAmount)`

**用途 / Purpose:** 向当前集合/状态中添加 `demand`。

### AddSupply
`public void AddSupply(ItemCategory itemCategory, float supplyAmount)`

**用途 / Purpose:** 向当前集合/状态中添加 `supply`。

### AddNumberInStore
`public void AddNumberInStore(ItemCategory itemCategory, int number, int value)`

**用途 / Purpose:** 向当前集合/状态中添加 `number in store`。

### SetSupplyDemand
`public void SetSupplyDemand(ItemCategory itemCategory, float supply, float demand)`

**用途 / Purpose:** 设置 `supply demand` 的值或状态。

### SetDemand
`public void SetDemand(ItemCategory itemCategory, float demand)`

**用途 / Purpose:** 设置 `demand` 的值或状态。

### GetDemand
`public float GetDemand(ItemCategory itemCategory)`

**用途 / Purpose:** 获取 `demand` 的当前值。

### GetSupply
`public float GetSupply(ItemCategory itemCategory)`

**用途 / Purpose:** 获取 `supply` 的当前值。

### GetPriceFactor
`public float GetPriceFactor(ItemCategory itemCategory)`

**用途 / Purpose:** 获取 `price factor` 的当前值。

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)`

**用途 / Purpose:** 获取 `price` 的当前值。

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)`

**用途 / Purpose:** 获取 `price` 的当前值。

### UpdateStores
`public void UpdateStores()`

**用途 / Purpose:** 更新 `stores` 的状态或数据。

## 使用示例

```csharp
var value = new TownMarketData();
```

## 参见

- [完整类目录](../catalog)