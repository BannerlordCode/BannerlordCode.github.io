<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementFoodModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementFoodModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**Base:** `SettlementFoodModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`

## 概述

`DefaultSettlementFoodModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementFoodModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FoodStocksUpperLimit` | `public override int FoodStocksUpperLimit { get; }` |
| `NumberOfProsperityToEatOneFood` | `public override int NumberOfProsperityToEatOneFood { get; }` |
| `NumberOfMenOnGarrisonToEatOneFood` | `public override int NumberOfMenOnGarrisonToEatOneFood { get; }` |
| `CastleFoodStockUpperLimitBonus` | `public override int CastleFoodStockUpperLimitBonus { get; }` |

## 主要方法

### CalculateTownFoodStocksChange
`public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate town food stocks change` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementFoodModel>(new MyDefaultSettlementFoodModel());
```

## 参见

- [完整类目录](../catalog)