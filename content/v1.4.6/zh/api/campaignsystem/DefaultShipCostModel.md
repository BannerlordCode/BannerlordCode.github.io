---
title: "DefaultShipCostModel"
description: "DefaultShipCostModel：TaleWorlds.CampaignSystem 的 public 类，继承 ShipCostModel；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs。"
---
# DefaultShipCostModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultShipCostModel : ShipCostModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs`

## 概述

DefaultShipCostModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs。它是一个 public 类，实现/继承 ShipCostModel，继承链为 DefaultShipCostModel → ShipCostModel → MBGameModel。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultShipCostModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultShipCostModel → ShipCostModel → MBGameModel。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetShipTradeValue` | `public override float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)` | 方法 |
| `GetShipRepairCost` | `public override float GetShipRepairCost(Ship ship, PartyBase owner)` | 方法 |
| `GetShipUpgradePieceCost` | `public override int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)` | 方法 |
| `GetShipSellingPenalty` | `public override float GetShipSellingPenalty()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ShipCostModel](../ShipCostModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
