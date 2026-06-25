---
title: "DefaultTradeItemPriceFactorModel"
description: "DefaultTradeItemPriceFactorModel 的自动生成类参考。"
---
# DefaultTradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeItemPriceFactorModel : TradeItemPriceFactorModel`
**Base:** `TradeItemPriceFactorModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTradeItemPriceFactorModel.cs`

## 概述

`DefaultTradeItemPriceFactorModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTradeItemPriceFactorModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTradePenalty
`public override float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)`

**用途 / Purpose:** 读取并返回当前对象中 trade penalty 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTradeItemPriceFactorModel 实例
DefaultTradeItemPriceFactorModel defaultTradeItemPriceFactorModel = ...;
var result = defaultTradeItemPriceFactorModel.GetTradePenalty(item, clientParty, merchant, false, 0, 0, 0);
```

### GetBasePriceFactor
`public override float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)`

**用途 / Purpose:** 读取并返回当前对象中 base price factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTradeItemPriceFactorModel 实例
DefaultTradeItemPriceFactorModel defaultTradeItemPriceFactorModel = ...;
var result = defaultTradeItemPriceFactorModel.GetBasePriceFactor(itemCategory, 0, 0, 0, false, 0);
```

### GetPrice
`public override int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)`

**用途 / Purpose:** 读取并返回当前对象中 price 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTradeItemPriceFactorModel 实例
DefaultTradeItemPriceFactorModel defaultTradeItemPriceFactorModel = ...;
var result = defaultTradeItemPriceFactorModel.GetPrice(itemRosterElement, clientParty, merchant, false, 0, 0, 0);
```

### GetTheoreticalMaxItemMarketValue
`public override int GetTheoreticalMaxItemMarketValue(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 theoretical max item market value 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTradeItemPriceFactorModel 实例
DefaultTradeItemPriceFactorModel defaultTradeItemPriceFactorModel = ...;
var result = defaultTradeItemPriceFactorModel.GetTheoreticalMaxItemMarketValue(item);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTradeItemPriceFactorModel>(new MyDefaultTradeItemPriceFactorModel());
```

## 参见

- [本区域目录](../)