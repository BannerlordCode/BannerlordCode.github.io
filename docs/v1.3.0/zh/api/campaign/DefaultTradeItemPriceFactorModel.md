<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTradeItemPriceFactorModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultTradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeItemPriceFactorModel : TradeItemPriceFactorModel`
**Base:** `TradeItemPriceFactorModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeItemPriceFactorModel.cs`

## 概述

`DefaultTradeItemPriceFactorModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTradeItemPriceFactorModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTradePenalty
`public override float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)`

**用途 / Purpose:** 获取 `trade penalty` 的当前值。

### GetBasePriceFactor
`public override float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)`

**用途 / Purpose:** 获取 `base price factor` 的当前值。

### GetPrice
`public override int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)`

**用途 / Purpose:** 获取 `price` 的当前值。

### GetTheoreticalMaxItemMarketValue
`public override int GetTheoreticalMaxItemMarketValue(ItemObject item)`

**用途 / Purpose:** 获取 `theoretical max item market value` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTradeItemPriceFactorModel>(new MyDefaultTradeItemPriceFactorModel());
```

## 参见

- [完整类目录](../catalog)