---
title: "MobilePartyFoodConsumptionModel"
description: "MobilePartyFoodConsumptionModel 的自动生成类参考。"
---
# MobilePartyFoodConsumptionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyFoodConsumptionModel : MBGameModel<MobilePartyFoodConsumptionModel>`
**Base:** `MBGameModel<MobilePartyFoodConsumptionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyFoodConsumptionModel.cs`

## 概述

`MobilePartyFoodConsumptionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MobilePartyFoodConsumptionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfMenOnMapToEatOneFood` | `public abstract int NumberOfMenOnMapToEatOneFood { get; }` |

## 主要方法

### CalculateDailyBaseFoodConsumptionf
`public abstract ExplainedNumber CalculateDailyBaseFoodConsumptionf(MobileParty party, bool includeDescription = false)`

**用途 / Purpose:** 计算「daily base food consumptionf」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyFoodConsumptionModel 实例
MobilePartyFoodConsumptionModel mobilePartyFoodConsumptionModel = ...;
var result = mobilePartyFoodConsumptionModel.CalculateDailyBaseFoodConsumptionf(party, false);
```

### CalculateDailyFoodConsumptionf
`public abstract ExplainedNumber CalculateDailyFoodConsumptionf(MobileParty party, ExplainedNumber baseConsumption)`

**用途 / Purpose:** 计算「daily food consumptionf」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyFoodConsumptionModel 实例
MobilePartyFoodConsumptionModel mobilePartyFoodConsumptionModel = ...;
var result = mobilePartyFoodConsumptionModel.CalculateDailyFoodConsumptionf(party, baseConsumption);
```

### DoesPartyConsumeFood
`public abstract bool DoesPartyConsumeFood(MobileParty mobileParty)`

**用途 / Purpose:** 返回「party consume food」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyFoodConsumptionModel 实例
MobilePartyFoodConsumptionModel mobilePartyFoodConsumptionModel = ...;
var result = mobilePartyFoodConsumptionModel.DoesPartyConsumeFood(mobileParty);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MobilePartyFoodConsumptionModel instance = ...;
```

## 参见

- [本区域目录](../)