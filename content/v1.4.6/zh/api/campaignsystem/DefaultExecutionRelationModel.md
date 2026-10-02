---
title: "DefaultExecutionRelationModel"
description: "DefaultExecutionRelationModel：TaleWorlds.CampaignSystem 的 public 类，继承 ExecutionRelationModel；公开成员 11 个（方法 1、属性 10、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs。"
---
# DefaultExecutionRelationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultExecutionRelationModel : ExecutionRelationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs`

## 概述

DefaultExecutionRelationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs。它是一个 public 类，实现/继承 ExecutionRelationModel，继承链为 DefaultExecutionRelationModel → ExecutionRelationModel → MBGameModel。public/protected 成员共 11 个：1 方法、10 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultExecutionRelationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultExecutionRelationModel → ExecutionRelationModel → MBGameModel。成员构成以属性为主（属性 10/11，方法 1/11），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultExecutionRelationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroKillingHeroClanRelationPenalty` | `public override int HeroKillingHeroClanRelationPenalty` | 属性 |
| `HeroKillingHeroFriendRelationPenalty` | `public override int HeroKillingHeroFriendRelationPenalty` | 属性 |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroFactionRelationPenaltyDishonorable` | 属性 |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroClanRelationPenaltyDishonorable` | 属性 |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public override int PlayerExecutingHeroFriendRelationPenaltyDishonorable` | 属性 |
| `PlayerExecutingHeroHonorPenalty` | `public override int PlayerExecutingHeroHonorPenalty` | 属性 |
| `PlayerExecutingHeroFactionRelationPenalty` | `public override int PlayerExecutingHeroFactionRelationPenalty` | 属性 |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public override int PlayerExecutingHeroHonorableNobleRelationPenalty` | 属性 |
| `PlayerExecutingHeroClanRelationPenalty` | `public override int PlayerExecutingHeroClanRelationPenalty` | 属性 |
| `PlayerExecutingHeroFriendRelationPenalty` | `public override int PlayerExecutingHeroFriendRelationPenalty` | 属性 |
| `GetRelationChangeForExecutingHero` | `public override int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ExecutionRelationModel](../ExecutionRelationModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
