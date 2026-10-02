---
title: "DefaultDelayedTeleportationModel"
description: "DefaultDelayedTeleportationModel：TaleWorlds.CampaignSystem 的 public 类，继承 DelayedTeleportationModel；公开成员 3 个（方法 2、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs。"
---
# DefaultDelayedTeleportationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs`

## 概述

DefaultDelayedTeleportationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs。它是一个 public 类，实现/继承 DelayedTeleportationModel，继承链为 DefaultDelayedTeleportationModel → DelayedTeleportationModel → MBGameModel。public/protected 成员共 3 个：2 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultDelayedTeleportationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultDelayedTeleportationModel → DelayedTeleportationModel → MBGameModel。成员构成以方法为主（方法 2/3，属性 1/3），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultTeleportationSpeed` | `public override float DefaultTeleportationSpeed` | 属性 |
| `GetTeleportationDelayAsHours` | `public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)` | 方法 |
| `CanPerformImmediateTeleport` | `public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 DelayedTeleportationModel](../DelayedTeleportationModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
