---
title: "ClanTierModel"
description: "ClanTierModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<ClanTierModel>；公开成员 14 个（方法 7、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs。"
---
# ClanTierModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs`

## 概述

ClanTierModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<ClanTierModel>，继承链为 ClanTierModel → MBGameModel。public/protected 成员共 14 个：7 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanTierModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 ClanTierModel → MBGameModel。成员构成以方法为主（方法 7/14，属性 7/14），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinClanTier` | `public abstract int MinClanTier` | 属性 |
| `MaxClanTier` | `public abstract int MaxClanTier` | 属性 |
| `MercenaryEligibleTier` | `public abstract int MercenaryEligibleTier` | 属性 |
| `VassalEligibleTier` | `public abstract int VassalEligibleTier` | 属性 |
| `BannerEligibleTier` | `public abstract int BannerEligibleTier` | 属性 |
| `RebelClanStartingTier` | `public abstract int RebelClanStartingTier` | 属性 |
| `CompanionToLordClanStartingTier` | `public abstract int CompanionToLordClanStartingTier` | 属性 |
| `CalculateInitialRenown` | `public abstract int CalculateInitialRenown(Clan clan);` | 方法 |
| `CalculateInitialInfluence` | `public abstract int CalculateInitialInfluence(Clan clan);` | 方法 |
| `CalculateTier` | `public abstract int CalculateTier(Clan clan);` | 方法 |
| `bool>HasUpcomingTier` | `public abstract ValueTuple<ExplainedNumber, bool>HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false);` | 方法 |
| `GetRequiredRenownForTier` | `public abstract int GetRequiredRenownForTier(int tier);` | 方法 |
| `GetPartyLimitForTier` | `public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck);` | 方法 |
| `GetCompanionLimit` | `public abstract int GetCompanionLimit(Clan clan);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
