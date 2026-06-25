---
title: "SettlementTaxModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementTaxModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `town tax ratio` 的当前值。

### GetVillageTaxRatio
`public abstract float GetVillageTaxRatio(Village village)`

**用途 / Purpose:** 获取 `village tax ratio` 的当前值。

### GetTownCommissionChangeBasedOnSecurity
`public abstract float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`

**用途 / Purpose:** 获取 `town commission change based on security` 的当前值。

### CalculateTownTax
`public abstract ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate town tax` 相关逻辑。

### CalculateVillageTaxFromIncome
`public abstract int CalculateVillageTaxFromIncome(Village village, int marketIncome)`

**用途 / Purpose:** 处理 `calculate village tax from income` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSettlementTaxModel();
```

## 参见

- [完整类目录](../catalog)