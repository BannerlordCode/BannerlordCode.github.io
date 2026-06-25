---
title: "DefaultMobilePartyFoodConsumptionModel"
description: "DefaultMobilePartyFoodConsumptionModel 的自动生成类参考。"
---
# DefaultMobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyFoodConsumptionModel : MobilePartyFoodConsumptionModel`
**Base:** `MobilePartyFoodConsumptionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMobilePartyFoodConsumptionModel.cs`

## 概述

`DefaultMobilePartyFoodConsumptionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMobilePartyFoodConsumptionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDailyBaseFoodConsumptionf
`public override ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)`

**用途 / Purpose:** 计算daily base food consumptionf的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyFoodConsumptionModel 实例
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.CalculateDailyBaseFoodConsumptionf(party, false);
```

### CalculateDailyFoodConsumptionf
`public override ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)`

**用途 / Purpose:** 计算daily food consumptionf的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyFoodConsumptionModel 实例
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.CalculateDailyFoodConsumptionf(party, baseConsumption);
```

### DoesPartyConsumeFood
`public override bool DoesPartyConsumeFood(MobileParty mobileParty)`

**用途 / Purpose:** 判断party consume food这一条件在当前对象上是否成立。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyFoodConsumptionModel 实例
DefaultMobilePartyFoodConsumptionModel defaultMobilePartyFoodConsumptionModel = ...;
var result = defaultMobilePartyFoodConsumptionModel.DoesPartyConsumeFood(mobileParty);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMobilePartyFoodConsumptionModel>(new MyDefaultMobilePartyFoodConsumptionModel());
```

## 参见

- [本区域目录](../)