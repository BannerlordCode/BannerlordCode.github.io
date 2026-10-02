---
title: "CrimeModel"
description: "CrimeModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<CrimeModel>；公开成员 12 个（方法 9、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs。"
---
# CrimeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`

## 概述

CrimeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<CrimeModel>，继承链为 CrimeModel → MBGameModel。public/protected 成员共 12 个：9 方法、2 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CrimeModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 CrimeModel → MBGameModel。成员构成以方法为主（方法 9/12，属性 2/12），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeclareWarCrimeRatingThreshold` | `public abstract float DeclareWarCrimeRatingThreshold` | 属性 |
| `GetMaxCrimeRating` | `public abstract float GetMaxCrimeRating();` | 方法 |
| `GetMinAcceptableCrimeRating` | `public abstract float GetMinAcceptableCrimeRating(IFaction faction);` | 方法 |
| `GetCrimeRatingAfterPunishment` | `public abstract float GetCrimeRatingAfterPunishment();` | 方法 |
| `DoesPlayerHaveAnyCrimeRating` | `public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction);` | 方法 |
| `IsPlayerCrimeRatingSevere` | `public abstract bool IsPlayerCrimeRatingSevere(IFaction faction);` | 方法 |
| `IsPlayerCrimeRatingModerate` | `public abstract bool IsPlayerCrimeRatingModerate(IFaction faction);` | 方法 |
| `IsPlayerCrimeRatingMild` | `public abstract bool IsPlayerCrimeRatingMild(IFaction faction);` | 方法 |
| `GetCost` | `public abstract float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating);` | 方法 |
| `GetDailyCrimeRatingChange` | `public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false);` | 方法 |
| `uint` | `public enum PaymentMethod : uint` | 属性 |
| `uint` | `public enum PaymentMethod : uint` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
