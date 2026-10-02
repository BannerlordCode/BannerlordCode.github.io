---
title: "DefaultSettlementTaxModel"
description: "DefaultSettlementTaxModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 SettlementTaxModel；公开成员 9 个（方法 5、属性 4、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultSettlementTaxModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs。它是一个 public 类，实现/继承 SettlementTaxModel，继承链为 DefaultSettlementTaxModel → SettlementTaxModel → MBGameModel → GameModel。public/protected 成员共 9 个：5 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSettlementTaxModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultSettlementTaxModel → SettlementTaxModel → MBGameModel → GameModel。成员构成以方法为主（方法 5/9，属性 4/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementCommissionRateTown` | `public override float SettlementCommissionRateTown` | 属性 |
| `SettlementCommissionRateVillage` | `public override float SettlementCommissionRateVillage` | 属性 |
| `SettlementCommissionDecreaseSecurityThreshold` | `public override int SettlementCommissionDecreaseSecurityThreshold` | 属性 |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public override int MaximumDecreaseBasedOnSecuritySecurity` | 属性 |
| `GetTownTaxRatio` | `public override float GetTownTaxRatio(Town town)` | 方法 |
| `GetVillageTaxRatio` | `public override float GetVillageTaxRatio(Village village)` | 方法 |
| `GetTownCommissionChangeBasedOnSecurity` | `public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)` | 方法 |
| `CalculateTownTax` | `public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)` | 方法 |
| `CalculateVillageTaxFromIncome` | `public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SettlementTaxModel](../SettlementTaxModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
