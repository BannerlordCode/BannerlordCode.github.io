<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTradeItemPriceFactorModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeItemPriceFactorModel : TradeItemPriceFactorModel`
**Base:** `TradeItemPriceFactorModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeItemPriceFactorModel.cs`

## 概述

`DefaultTradeItemPriceFactorModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultTradeItemPriceFactorModel>(new MyDefaultTradeItemPriceFactorModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTradePenalty
```csharp
public override float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)
```

### GetBasePriceFactor
```csharp
public override float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)
```

### GetPrice
```csharp
public override int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)
```

### GetTheoreticalMaxItemMarketValue
```csharp
public override int GetTheoreticalMaxItemMarketValue(ItemObject item)
```

## 使用示例

```csharp
// DefaultTradeItemPriceFactorModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultTradeItemPriceFactorModel>(new MyDefaultTradeItemPriceFactorModel());
```

## 参见

- [完整类目录](../catalog)