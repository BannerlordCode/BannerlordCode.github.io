---
title: "SettlementEconomyModel"
description: "SettlementEconomyModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<SettlementEconomyModel>；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs。"
---
# SettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`

## 概述

SettlementEconomyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SettlementEconomyModel>，继承链为 SettlementEconomyModel → MBGameModel。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementEconomyModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 SettlementEconomyModel → MBGameModel。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEstimatedDemandForCategory` | `public abstract float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category);` | 方法 |
| `GetDailyDemandForCategory` | `public abstract float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0);` | 方法 |
| `GetDemandChangeFromValue` | `public abstract float GetDemandChangeFromValue(float purchaseValue);` | 方法 |
| `float>GetSupplyDemandForCategory` | `public abstract ValueTuple<float, float>GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand);` | 方法 |
| `GetTownGoldChange` | `public abstract int GetTownGoldChange(Town town);` | 方法 |
| `CalculateDailySettlementBudgetForItemCategory` | `public abstract float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
