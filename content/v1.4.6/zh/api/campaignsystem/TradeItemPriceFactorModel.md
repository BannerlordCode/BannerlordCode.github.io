---
title: "TradeItemPriceFactorModel"
description: "TradeItemPriceFactorModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<TradeItemPriceFactorModel>；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs。"
---
# TradeItemPriceFactorModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TradeItemPriceFactorModel : MBGameModel<TradeItemPriceFactorModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs`

## 概述

TradeItemPriceFactorModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<TradeItemPriceFactorModel>，继承链为 TradeItemPriceFactorModel → MBGameModel。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TradeItemPriceFactorModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 TradeItemPriceFactorModel → MBGameModel。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTradePenalty` | `public abstract float GetTradePenalty(ItemObject item, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStore, float supply, float demand);` | 方法 |
| `GetBasePriceFactor` | `public abstract float GetBasePriceFactor(ItemCategory itemCategory, float inStoreValue, float supply, float demand, bool isSelling, int transferValue);` | 方法 |
| `GetPrice` | `public abstract int GetPrice(EquipmentElement itemRosterElement, MobileParty clientParty, PartyBase merchant, bool isSelling, float inStoreValue, float supply, float demand);` | 方法 |
| `GetTheoreticalMaxItemMarketValue` | `public abstract int GetTheoreticalMaxItemMarketValue(ItemObject item);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
