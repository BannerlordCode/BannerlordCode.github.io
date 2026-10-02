---
title: "CrimeModel"
description: "CrimeModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<CrimeModel>；公开成员 12 个（方法 9、属性 2、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CrimeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

CrimeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<CrimeModel>，继承链为 CrimeModel → MBGameModel → GameModel。public/protected 成员共 12 个：9 方法、2 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CrimeModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 CrimeModel → MBGameModel → GameModel。成员构成以方法为主（方法 9/12，属性 2/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
