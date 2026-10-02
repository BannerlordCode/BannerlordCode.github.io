---
title: "DefaultPrisonBreakModel"
description: "DefaultPrisonBreakModel：TaleWorlds.CampaignSystem 的 public 类，继承 PrisonBreakModel；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs。"
---
# DefaultPrisonBreakModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPrisonBreakModel : PrisonBreakModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs`

## 概述

DefaultPrisonBreakModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs。它是一个 public 类，实现/继承 PrisonBreakModel，继承链为 DefaultPrisonBreakModel → PrisonBreakModel → MBGameModel。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultPrisonBreakModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultPrisonBreakModel → PrisonBreakModel → MBGameModel。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetNumberOfGuardsToSpawn` | `public override int GetNumberOfGuardsToSpawn(Settlement settlement)` | 方法 |
| `CanPlayerStagePrisonBreak` | `public override bool CanPlayerStagePrisonBreak(Settlement settlement)` | 方法 |
| `GetPrisonBreakStartCost` | `public override int GetPrisonBreakStartCost(Hero prisonerHero)` | 方法 |
| `GetRelationRewardOnPrisonBreak` | `public override int GetRelationRewardOnPrisonBreak(Hero prisonerHero)` | 方法 |
| `GetRogueryRewardOnPrisonBreak` | `public override float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 PrisonBreakModel](../PrisonBreakModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
