---
title: "DefaultCrimeModel"
description: "DefaultCrimeModel：TaleWorlds.CampaignSystem 的 public 类，继承 CrimeModel；公开成员 10 个（方法 9、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs。"
---
# DefaultCrimeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCrimeModel : CrimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs`

## 概述

DefaultCrimeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs。它是一个 public 类，实现/继承 CrimeModel，继承链为 DefaultCrimeModel → CrimeModel → MBGameModel。public/protected 成员共 10 个：9 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultCrimeModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultCrimeModel → CrimeModel → MBGameModel。成员构成以方法为主（方法 9/10，属性 1/10），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DoesPlayerHaveAnyCrimeRating` | `public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)` | 方法 |
| `IsPlayerCrimeRatingSevere` | `public override bool IsPlayerCrimeRatingSevere(IFaction faction)` | 方法 |
| `IsPlayerCrimeRatingModerate` | `public override bool IsPlayerCrimeRatingModerate(IFaction faction)` | 方法 |
| `IsPlayerCrimeRatingMild` | `public override bool IsPlayerCrimeRatingMild(IFaction faction)` | 方法 |
| `GetCost` | `public override float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)` | 方法 |
| `GetDailyCrimeRatingChange` | `public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)` | 方法 |
| `DeclareWarCrimeRatingThreshold` | `public override float DeclareWarCrimeRatingThreshold` | 属性 |
| `GetMaxCrimeRating` | `public override float GetMaxCrimeRating()` | 方法 |
| `GetMinAcceptableCrimeRating` | `public override float GetMinAcceptableCrimeRating(IFaction faction)` | 方法 |
| `GetCrimeRatingAfterPunishment` | `public override float GetCrimeRatingAfterPunishment()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 CrimeModel](../CrimeModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
