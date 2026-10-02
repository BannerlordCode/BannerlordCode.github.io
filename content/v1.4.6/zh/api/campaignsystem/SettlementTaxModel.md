---
title: "SettlementTaxModel"
description: "SettlementTaxModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<SettlementTaxModel>；公开成员 9 个（方法 5、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs。"
---
# SettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## 概述

SettlementTaxModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SettlementTaxModel>，继承链为 SettlementTaxModel → MBGameModel。public/protected 成员共 9 个：5 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementTaxModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 SettlementTaxModel → MBGameModel。成员构成以方法为主（方法 5/9，属性 4/9），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs 的方法体或该类型的深写页确认。

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

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
