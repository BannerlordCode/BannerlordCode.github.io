---
title: "DefaultSettlementFoodModel"
description: "DefaultSettlementFoodModel：TaleWorlds.CampaignSystem 的 public 类，继承 SettlementFoodModel；公开成员 5 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs。"
---
# DefaultSettlementFoodModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`

## 概述

DefaultSettlementFoodModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs。它是一个 public 类，实现/继承 SettlementFoodModel，继承链为 DefaultSettlementFoodModel → SettlementFoodModel → MBGameModel。public/protected 成员共 5 个：1 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSettlementFoodModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultSettlementFoodModel → SettlementFoodModel → MBGameModel。成员构成以属性为主（属性 4/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FoodStocksUpperLimit` | `public override int FoodStocksUpperLimit` | 属性 |
| `NumberOfProsperityToEatOneFood` | `public override int NumberOfProsperityToEatOneFood` | 属性 |
| `NumberOfMenOnGarrisonToEatOneFood` | `public override int NumberOfMenOnGarrisonToEatOneFood` | 属性 |
| `CastleFoodStockUpperLimitBonus` | `public override int CastleFoodStockUpperLimitBonus` | 属性 |
| `CalculateTownFoodStocksChange` | `public override ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SettlementFoodModel](../SettlementFoodModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
