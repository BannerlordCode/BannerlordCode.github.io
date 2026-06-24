<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyFoodBuyingModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyFoodBuyingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyFoodBuyingModel : MBGameModel<PartyFoodBuyingModel>`
**Base:** `MBGameModel<PartyFoodBuyingModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyFoodBuyingModel.cs`

## 概述

`PartyFoodBuyingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyFoodBuyingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromTown { get; }` |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public abstract float MinimumDaysFoodToLastWhileBuyingFoodFromVillage { get; }` |
| `LowCostFoodPriceAverage` | `public abstract float LowCostFoodPriceAverage { get; }` |

## 主要方法

### FindItemToBuy
`public abstract void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemRosterElement, out float itemElementsPrice)`

**用途 / Purpose:** 处理 `find item to buy` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomPartyFoodBuyingModel();
```

## 参见

- [完整类目录](../catalog)