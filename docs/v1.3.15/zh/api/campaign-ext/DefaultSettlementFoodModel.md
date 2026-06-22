<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementFoodModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**Base:** `SettlementFoodModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`

## 概述

`DefaultSettlementFoodModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `FoodStocksUpperLimit` | `public override int FoodStocksUpperLimit { get; }` |
| `NumberOfProsperityToEatOneFood` | `public override int NumberOfProsperityToEatOneFood { get; }` |
| `NumberOfMenOnGarrisonToEatOneFood` | `public override int NumberOfMenOnGarrisonToEatOneFood { get; }` |
| `CastleFoodStockUpperLimitBonus` | `public override int CastleFoodStockUpperLimitBonus { get; }` |

## 主要方法

### CalculateTownFoodStocksChange
```csharp
public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
```

## 使用示例

```csharp
// DefaultSettlementFoodModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel());
```

## 参见

- [完整类目录](../catalog)