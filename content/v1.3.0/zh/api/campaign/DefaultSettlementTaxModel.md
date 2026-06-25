---
title: "DefaultSettlementTaxModel"
description: "DefaultSettlementTaxModel 的自动生成类参考。"
---
# DefaultSettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**Base:** `SettlementTaxModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`

## 概述

`DefaultSettlementTaxModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementTaxModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public override float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public override float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public override int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public override int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## 主要方法

### GetTownTaxRatio
`public override float GetTownTaxRatio(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 town tax ratio 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementTaxModel 实例
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.GetTownTaxRatio(town);
```

### GetVillageTaxRatio
`public override float GetVillageTaxRatio(Village village)`

**用途 / Purpose:** 读取并返回当前对象中 village tax ratio 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementTaxModel 实例
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.GetVillageTaxRatio(village);
```

### GetTownCommissionChangeBasedOnSecurity
`public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`

**用途 / Purpose:** 读取并返回当前对象中 town commission change based on security 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementTaxModel 实例
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.GetTownCommissionChangeBasedOnSecurity(town, 0);
```

### CalculateTownTax
`public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 计算town tax的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementTaxModel 实例
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.CalculateTownTax(town, false);
```

### CalculateVillageTaxFromIncome
`public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)`

**用途 / Purpose:** 计算village tax from income的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementTaxModel 实例
DefaultSettlementTaxModel defaultSettlementTaxModel = ...;
var result = defaultSettlementTaxModel.CalculateVillageTaxFromIncome(village, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementTaxModel>(new MyDefaultSettlementTaxModel());
```

## 参见

- [本区域目录](../)