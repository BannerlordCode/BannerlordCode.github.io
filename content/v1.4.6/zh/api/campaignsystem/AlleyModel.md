---
title: "AlleyModel"
description: "AlleyModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<AlleyModel>；公开成员 15 个（方法 11、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs。"
---
# AlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs`

## 概述

AlleyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<AlleyModel>，继承链为 AlleyModel → MBGameModel。public/protected 成员共 15 个：11 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AlleyModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 AlleyModel → MBGameModel。成员构成以方法为主（方法 11/15，属性 4/15），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public abstract CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath` | 属性 |
| `MinimumTroopCountInPlayerOwnedAlley` | `public abstract int MinimumTroopCountInPlayerOwnedAlley` | 属性 |
| `MaximumTroopCountInPlayerOwnedAlley` | `public abstract int MaximumTroopCountInPlayerOwnedAlley` | 属性 |
| `GetDailyCrimeRatingOfAlley` | `public abstract float GetDailyCrimeRatingOfAlley` | 属性 |
| `GetDailyXpGainForAssignedClanMember` | `public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero);` | 方法 |
| `GetDailyXpGainForMainHero` | `public abstract float GetDailyXpGainForMainHero();` | 方法 |
| `GetInitialXpGainForMainHero` | `public abstract float GetInitialXpGainForMainHero();` | 方法 |
| `GetXpGainAfterSuccessfulAlleyDefenseForMainHero` | `public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero();` | 方法 |
| `GetTroopsOfAIOwnedAlley` | `public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley);` | 方法 |
| `GetTroopsOfAlleyForBattleMission` | `public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley);` | 方法 |
| `GetDailyIncomeOfAlley` | `public abstract int GetDailyIncomeOfAlley(Alley alley);` | 方法 |
| `DefaultAlleyModel.AlleyMemberAvailabilityDetail>>GetClanMembersAndAvailabilityDetailsForLeadingAnAlley` | `public abstract List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>>GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley);` | 方法 |
| `GetTroopsToRecruitFromAlleyDependingOnAlleyRandom` | `public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random);` | 方法 |
| `GetDisabledReasonTextForHero` | `public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail);` | 方法 |
| `GetAlleyAttackResponseTimeInDays` | `public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
- [同命名空间 BanditDensityModel](../BanditDensityModel)
