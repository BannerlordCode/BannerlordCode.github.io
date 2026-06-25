---
title: "DefaultVillageProductionCalculatorModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVillageProductionCalculatorModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultVillageProductionCalculatorModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageProductionCalculatorModel : VillageProductionCalculatorModel`
**Base:** `VillageProductionCalculatorModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVillageProductionCalculatorModel.cs`

## 概述

`DefaultVillageProductionCalculatorModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultVillageProductionCalculatorModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDailyProductionAmount
`public override ExplainedNumber CalculateDailyProductionAmount(Village village, ItemObject item)`

**用途 / Purpose:** 处理 `calculate daily production amount` 相关逻辑。

### CalculateDailyFoodProductionAmount
`public override float CalculateDailyFoodProductionAmount(Village village)`

**用途 / Purpose:** 处理 `calculate daily food production amount` 相关逻辑。

### CalculateProductionSpeedOfItemCategory
`public override float CalculateProductionSpeedOfItemCategory(ItemCategory item)`

**用途 / Purpose:** 处理 `calculate production speed of item category` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultVillageProductionCalculatorModel>(new MyDefaultVillageProductionCalculatorModel());
```

## 参见

- [完整类目录](../catalog)