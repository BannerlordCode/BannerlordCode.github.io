---
title: "DefaultPartyFoodBuyingModel"
description: "DefaultPartyFoodBuyingModel：TaleWorlds.CampaignSystem 的 public 类，继承 PartyFoodBuyingModel；公开成员 4 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs。"
---
# DefaultPartyFoodBuyingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyFoodBuyingModel : PartyFoodBuyingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs`

## 概述

DefaultPartyFoodBuyingModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs。它是一个 public 类，实现/继承 PartyFoodBuyingModel，继承链为 DefaultPartyFoodBuyingModel → PartyFoodBuyingModel → MBGameModel。public/protected 成员共 4 个：1 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultPartyFoodBuyingModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultPartyFoodBuyingModel → PartyFoodBuyingModel → MBGameModel。成员构成以属性为主（属性 3/4，方法 1/4），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultPartyFoodBuyingModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumDaysFoodToLastWhileBuyingFoodFromTown` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromTown` | 属性 |
| `MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | `public override float MinimumDaysFoodToLastWhileBuyingFoodFromVillage` | 属性 |
| `LowCostFoodPriceAverage` | `public override float LowCostFoodPriceAverage` | 属性 |
| `FindItemToBuy` | `public override void FindItemToBuy(MobileParty mobileParty, Settlement settlement, out ItemRosterElement itemElement, out float itemElementsPrice)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 PartyFoodBuyingModel](../PartyFoodBuyingModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
