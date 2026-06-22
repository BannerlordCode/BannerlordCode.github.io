<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementFoodModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`
**Base:** `MBGameModel<SettlementFoodModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`

## 概述

`SettlementFoodModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementFoodModel>(new MySettlementFoodModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `FoodStocksUpperLimit` | `public abstract int FoodStocksUpperLimit { get; }` |
| `NumberOfProsperityToEatOneFood` | `public abstract int NumberOfProsperityToEatOneFood { get; }` |
| `NumberOfMenOnGarrisonToEatOneFood` | `public abstract int NumberOfMenOnGarrisonToEatOneFood { get; }` |
| `CastleFoodStockUpperLimitBonus` | `public abstract int CastleFoodStockUpperLimitBonus { get; }` |

## 主要方法

### CalculateTownFoodStocksChange
```csharp
public abstract ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
```

## 使用示例

```csharp
// SettlementFoodModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementFoodModel>(new MySettlementFoodModel());
```

## 参见

- [完整类目录](../catalog)