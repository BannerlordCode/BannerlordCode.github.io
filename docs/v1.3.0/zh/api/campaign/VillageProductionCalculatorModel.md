<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageProductionCalculatorModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageProductionCalculatorModel : MBGameModel<VillageProductionCalculatorModel>`
**Base:** `MBGameModel<VillageProductionCalculatorModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VillageProductionCalculatorModel.cs`

## 概述

`VillageProductionCalculatorModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `VillageProductionCalculatorModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateProductionSpeedOfItemCategory
`public abstract float CalculateProductionSpeedOfItemCategory(ItemCategory item)`

**用途 / Purpose:** 处理 `calculate production speed of item category` 相关逻辑。

### CalculateDailyProductionAmount
`public abstract ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)`

**用途 / Purpose:** 处理 `calculate daily production amount` 相关逻辑。

### CalculateDailyFoodProductionAmount
`public abstract float CalculateDailyFoodProductionAmount(Village village)`

**用途 / Purpose:** 处理 `calculate daily food production amount` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomVillageProductionCalculatorModel();
```

## 参见

- [完整类目录](../catalog)