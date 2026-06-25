---
title: "TownMarketData"
description: "TownMarketData 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 category data 的结果。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
var result = townMarketData.GetCategoryData(itemCategory);
```

### GetItemCountOfCategory
`public int GetItemCountOfCategory(ItemCategory itemCategory)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 item count of category 的结果。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
var result = townMarketData.GetItemCountOfCategory(itemCategory);
```

### OnTownInventoryUpdated
`public void OnTownInventoryUpdated(ItemRosterElement item, int count)`

**用途 / Purpose:** **用途 / Purpose:** 在 town inventory updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
townMarketData.OnTownInventoryUpdated(item, 0);
```

### AddDemand
`public void AddDemand(ItemCategory itemCategory, float demandAmount)`

**用途 / Purpose:** **用途 / Purpose:** 将 demand 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
townMarketData.AddDemand(itemCategory, 0);
```

### AddSupply
`public void AddSupply(ItemCategory itemCategory, float supplyAmount)`

**用途 / Purpose:** **用途 / Purpose:** 将 supply 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
townMarketData.AddSupply(itemCategory, 0);
```

### AddNumberInStore
`public void AddNumberInStore(ItemCategory itemCategory, int number, int value)`

**用途 / Purpose:** **用途 / Purpose:** 将 number in store 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
townMarketData.AddNumberInStore(itemCategory, 0, 0);
```

### SetSupplyDemand
`public void SetSupplyDemand(ItemCategory itemCategory, float supply, float demand)`

**用途 / Purpose:** **用途 / Purpose:** 为 supply demand 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
townMarketData.SetSupplyDemand(itemCategory, 0, 0);
```

### SetDemand
`public void SetDemand(ItemCategory itemCategory, float demand)`

**用途 / Purpose:** **用途 / Purpose:** 为 demand 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
townMarketData.SetDemand(itemCategory, 0);
```

### GetDemand
`public float GetDemand(ItemCategory itemCategory)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 demand 的结果。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
var result = townMarketData.GetDemand(itemCategory);
```

### GetSupply
`public float GetSupply(ItemCategory itemCategory)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 supply 的结果。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
var result = townMarketData.GetSupply(itemCategory);
```

### GetPriceFactor
`public float GetPriceFactor(ItemCategory itemCategory)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 price factor 的结果。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
var result = townMarketData.GetPriceFactor(itemCategory);
```

### GetPrice
`public int GetPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 price 的结果。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
var result = townMarketData.GetPrice(item, null, false, null);
```

### GetPrice
`public int GetPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false, PartyBase merchantParty = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 price 的结果。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
var result = townMarketData.GetPrice(itemRosterElement, null, false, null);
```

### UpdateStores
`public void UpdateStores()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 stores 的最新表示。

```csharp
// 先通过子系统 API 拿到 TownMarketData 实例
TownMarketData townMarketData = ...;
townMarketData.UpdateStores();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
TownMarketData entry = ...;
```

## 参见

- [本区域目录](../)