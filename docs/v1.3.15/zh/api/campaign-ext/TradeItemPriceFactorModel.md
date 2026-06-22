<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeItemPriceFactorModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeItemPriceFactorModel : MBGameModel<TradeItemPriceFactorModel>`
**Base:** `MBGameModel<TradeItemPriceFactorModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs`

## 概述

`TradeItemPriceFactorModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<TradeItemPriceFactorModel>(new MyTradeItemPriceFactorModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTradePenalty
```csharp
public abstract float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand)
```

### GetBasePriceFactor
```csharp
public abstract float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue)
```

### GetPrice
```csharp
public abstract int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand)
```

### GetTheoreticalMaxItemMarketValue
```csharp
public abstract int GetTheoreticalMaxItemMarketValue(ItemObject item)
```

## 使用示例

```csharp
// TradeItemPriceFactorModel (Model) 的典型用法
Game.Current.ReplaceModel<TradeItemPriceFactorModel>(new MyTradeItemPriceFactorModel());
```

## 参见

- [完整类目录](../catalog)