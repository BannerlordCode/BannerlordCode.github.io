---
title: "TradeItemPriceFactorModel"
description: "TradeItemPriceFactorModel 的自动生成类参考。"
---
# TradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeItemPriceFactorModel : MBGameModel<TradeItemPriceFactorModel>`
**Base:** `MBGameModel<TradeItemPriceFactorModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs`

## 概述

`TradeItemPriceFactorModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `TradeItemPriceFactorModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTradePenalty
`public abstract float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trade penalty 的结果。

```csharp
// 先通过子系统 API 拿到 TradeItemPriceFactorModel 实例
TradeItemPriceFactorModel tradeItemPriceFactorModel = ...;
var result = tradeItemPriceFactorModel.GetTradePenalty(item, clientParty, merchant, false, 0, 0, 0);
```

### GetBasePriceFactor
`public abstract float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 base price factor 的结果。

```csharp
// 先通过子系统 API 拿到 TradeItemPriceFactorModel 实例
TradeItemPriceFactorModel tradeItemPriceFactorModel = ...;
var result = tradeItemPriceFactorModel.GetBasePriceFactor(itemCategory, 0, 0, 0, false, 0);
```

### GetPrice
`public abstract int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 price 的结果。

```csharp
// 先通过子系统 API 拿到 TradeItemPriceFactorModel 实例
TradeItemPriceFactorModel tradeItemPriceFactorModel = ...;
var result = tradeItemPriceFactorModel.GetPrice(itemRosterElement, clientParty, merchant, false, 0, 0, 0);
```

### GetTheoreticalMaxItemMarketValue
`public abstract int GetTheoreticalMaxItemMarketValue(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 theoretical max item market value 的结果。

```csharp
// 先通过子系统 API 拿到 TradeItemPriceFactorModel 实例
TradeItemPriceFactorModel tradeItemPriceFactorModel = ...;
var result = tradeItemPriceFactorModel.GetTheoreticalMaxItemMarketValue(item);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TradeItemPriceFactorModel instance = ...;
```

## 参见

- [本区域目录](../)