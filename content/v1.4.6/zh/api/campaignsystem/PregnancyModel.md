---
title: "PregnancyModel"
description: "PregnancyModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<PregnancyModel>；公开成员 6 个（方法 1、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs。"
---
# PregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs`

## 概述

PregnancyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<PregnancyModel>，继承链为 PregnancyModel → MBGameModel。public/protected 成员共 6 个：1 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PregnancyModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 PregnancyModel → MBGameModel。成员构成以属性为主（属性 5/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDailyChanceOfPregnancyForHero` | `public abstract float GetDailyChanceOfPregnancyForHero(Hero hero);` | 方法 |
| `PregnancyDurationInDays` | `public abstract float PregnancyDurationInDays` | 属性 |
| `MaternalMortalityProbabilityInLabor` | `public abstract float MaternalMortalityProbabilityInLabor` | 属性 |
| `StillbirthProbability` | `public abstract float StillbirthProbability` | 属性 |
| `DeliveringFemaleOffspringProbability` | `public abstract float DeliveringFemaleOffspringProbability` | 属性 |
| `DeliveringTwinsProbability` | `public abstract float DeliveringTwinsProbability` | 属性 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
