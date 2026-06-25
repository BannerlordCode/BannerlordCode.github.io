---
title: "DefaultMobilePartyFoodConsumptionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMobilePartyFoodConsumptionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel`
**Base:** `MobilePartyFoodConsumptionModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## 概述

`DefaultMobilePartyFoodConsumptionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMobilePartyFoodConsumptionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDailyBaseFoodConsumptionf
`public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)`

**用途 / Purpose:** 处理 `calculate daily base food consumptionf` 相关逻辑。

### CalculateDailyFoodConsumptionf
`public override ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)`

**用途 / Purpose:** 处理 `calculate daily food consumptionf` 相关逻辑。

### DoesPartyConsumeFood
`public override bool DoesPartyConsumeFood(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `does party consume food` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMobilePartyFoodConsumptionModel>(new MyDefaultMobilePartyFoodConsumptionModel());
```

## 参见

- [完整类目录](../catalog)