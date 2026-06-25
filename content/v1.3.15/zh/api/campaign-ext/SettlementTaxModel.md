---
title: "SettlementTaxModel"
description: "SettlementTaxModel 的自动生成类参考。"
---
# SettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**Base:** `MBGameModel<SettlementTaxModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## 概述

`SettlementTaxModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementTaxModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public abstract float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public abstract float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public abstract int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public abstract int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## 主要方法

### GetTownTaxRatio
`public abstract float GetTownTaxRatio(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 town tax ratio 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementTaxModel 实例
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.GetTownTaxRatio(town);
```

### GetVillageTaxRatio
`public abstract float GetVillageTaxRatio(Village village)`

**用途 / Purpose:** 读取并返回当前对象中 village tax ratio 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementTaxModel 实例
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.GetVillageTaxRatio(village);
```

### GetTownCommissionChangeBasedOnSecurity
`public abstract float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`

**用途 / Purpose:** 读取并返回当前对象中 town commission change based on security 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementTaxModel 实例
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.GetTownCommissionChangeBasedOnSecurity(town, 0);
```

### CalculateTownTax
`public abstract ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 计算town tax的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementTaxModel 实例
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.CalculateTownTax(town, false);
```

### CalculateVillageTaxFromIncome
`public abstract int CalculateVillageTaxFromIncome(Village village, int marketIncome)`

**用途 / Purpose:** 计算village tax from income的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SettlementTaxModel 实例
SettlementTaxModel settlementTaxModel = ...;
var result = settlementTaxModel.CalculateVillageTaxFromIncome(village, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementTaxModel instance = ...;
```

## 参见

- [本区域目录](../)