---
title: "SettlementTaxModel"
description: "SettlementTaxModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<SettlementTaxModel>；公开成员 9 个（方法 5、属性 4、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

SettlementTaxModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SettlementTaxModel>，继承链为 SettlementTaxModel → MBGameModel → GameModel。public/protected 成员共 9 个：5 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementTaxModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 SettlementTaxModel → MBGameModel → GameModel。成员构成以方法为主（方法 5/9，属性 4/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementCommissionRateTown` | `public abstract float SettlementCommissionRateTown` | 属性 |
| `SettlementCommissionRateVillage` | `public abstract float SettlementCommissionRateVillage` | 属性 |
| `SettlementCommissionDecreaseSecurityThreshold` | `public abstract int SettlementCommissionDecreaseSecurityThreshold` | 属性 |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public abstract int MaximumDecreaseBasedOnSecuritySecurity` | 属性 |
| `GetTownTaxRatio` | `public abstract float GetTownTaxRatio(Town town);` | 方法 |
| `GetVillageTaxRatio` | `public abstract float GetVillageTaxRatio(Village village);` | 方法 |
| `GetTownCommissionChangeBasedOnSecurity` | `public abstract float GetTownCommissionChangeBasedOnSecurity(Town town, float commission);` | 方法 |
| `CalculateTownTax` | `public abstract ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false);` | 方法 |
| `CalculateVillageTaxFromIncome` | `public abstract int CalculateVillageTaxFromIncome(Village village, int marketIncome);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
