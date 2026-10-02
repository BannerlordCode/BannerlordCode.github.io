---
title: "DefaultDailyTroopXpBonusModel"
description: "DefaultDailyTroopXpBonusModel：TaleWorlds.CampaignSystem 的 public 类，继承 DailyTroopXpBonusModel；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs。"
---
# DefaultDailyTroopXpBonusModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultDailyTroopXpBonusModel : DailyTroopXpBonusModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs`

## 概述

DefaultDailyTroopXpBonusModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs。它是一个 public 类，实现/继承 DailyTroopXpBonusModel，继承链为 DefaultDailyTroopXpBonusModel → DailyTroopXpBonusModel → MBGameModel。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultDailyTroopXpBonusModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultDailyTroopXpBonusModel → DailyTroopXpBonusModel → MBGameModel。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateDailyTroopXpBonus` | `public override int CalculateDailyTroopXpBonus(Town town)` | 方法 |
| `CalculateGarrisonXpBonusMultiplier` | `public override float CalculateGarrisonXpBonusMultiplier(Town town)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 DailyTroopXpBonusModel](../DailyTroopXpBonusModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
