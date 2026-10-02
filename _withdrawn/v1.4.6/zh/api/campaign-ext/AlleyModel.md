---
title: "AlleyModel"
description: "AlleyModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<AlleyModel>；公开成员 15 个（方法 11、属性 4、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

AlleyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<AlleyModel>，继承链为 AlleyModel → MBGameModel → GameModel。public/protected 成员共 15 个：11 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AlleyModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 AlleyModel → MBGameModel → GameModel。成员构成以方法为主（方法 11/15，属性 4/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
- [同命名空间 BanditDensityModel](../BanditDensityModel/)
