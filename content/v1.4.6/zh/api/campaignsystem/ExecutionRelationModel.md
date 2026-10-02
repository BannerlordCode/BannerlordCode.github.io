---
title: "ExecutionRelationModel"
description: "ExecutionRelationModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<ExecutionRelationModel>；公开成员 11 个（方法 1、属性 10、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs。"
---
# ExecutionRelationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ExecutionRelationModel : MBGameModel<ExecutionRelationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs`

## 概述

ExecutionRelationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<ExecutionRelationModel>，继承链为 ExecutionRelationModel → MBGameModel。public/protected 成员共 11 个：1 方法、10 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ExecutionRelationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 ExecutionRelationModel → MBGameModel。成员构成以属性为主（属性 10/11，方法 1/11），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/ExecutionRelationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroKillingHeroClanRelationPenalty` | `public abstract int HeroKillingHeroClanRelationPenalty` | 属性 |
| `HeroKillingHeroFriendRelationPenalty` | `public abstract int HeroKillingHeroFriendRelationPenalty` | 属性 |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFactionRelationPenaltyDishonorable` | 属性 |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroClanRelationPenaltyDishonorable` | 属性 |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFriendRelationPenaltyDishonorable` | 属性 |
| `PlayerExecutingHeroHonorPenalty` | `public abstract int PlayerExecutingHeroHonorPenalty` | 属性 |
| `PlayerExecutingHeroFactionRelationPenalty` | `public abstract int PlayerExecutingHeroFactionRelationPenalty` | 属性 |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public abstract int PlayerExecutingHeroHonorableNobleRelationPenalty` | 属性 |
| `PlayerExecutingHeroClanRelationPenalty` | `public abstract int PlayerExecutingHeroClanRelationPenalty` | 属性 |
| `PlayerExecutingHeroFriendRelationPenalty` | `public abstract int PlayerExecutingHeroFriendRelationPenalty` | 属性 |
| `GetRelationChangeForExecutingHero` | `public abstract int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
