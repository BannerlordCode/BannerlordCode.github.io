<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeItemPriceFactorModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `trade penalty` 的当前值。

### GetBasePriceFactor
`public abstract float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)`

**用途 / Purpose:** 获取 `base price factor` 的当前值。

### GetPrice
`public abstract int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)`

**用途 / Purpose:** 获取 `price` 的当前值。

### GetTheoreticalMaxItemMarketValue
`public abstract int GetTheoreticalMaxItemMarketValue(ItemObject item)`

**用途 / Purpose:** 获取 `theoretical max item market value` 的当前值。

## 使用示例

```csharp
var implementation = new CustomTradeItemPriceFactorModel();
```

## 参见

- [完整类目录](../catalog)