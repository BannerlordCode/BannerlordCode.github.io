---
title: "DefaultAlleyModel"
description: "DefaultAlleyModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 AlleyModel；公开成员 19 个（方法 11、属性 5、字段 2）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultAlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAlleyModel : AlleyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultAlleyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs。它是一个 public 类，实现/继承 AlleyModel，继承链为 DefaultAlleyModel → AlleyModel → MBGameModel → GameModel。public/protected 成员共 19 个：11 方法、5 属性、2 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultAlleyModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultAlleyModel → AlleyModel → MBGameModel → GameModel。成员构成以方法为主（方法 11/19，属性 5/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public override CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath` | 属性 |
| `MinimumTroopCountInPlayerOwnedAlley` | `public override int MinimumTroopCountInPlayerOwnedAlley` | 属性 |
| `MaximumTroopCountInPlayerOwnedAlley` | `public override int MaximumTroopCountInPlayerOwnedAlley` | 属性 |
| `GetDailyCrimeRatingOfAlley` | `public override float GetDailyCrimeRatingOfAlley` | 属性 |
| `GetDailyXpGainForAssignedClanMember` | `public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)` | 方法 |
| `GetDailyXpGainForMainHero` | `public override float GetDailyXpGainForMainHero()` | 方法 |
| `GetInitialXpGainForMainHero` | `public override float GetInitialXpGainForMainHero()` | 方法 |
| `GetXpGainAfterSuccessfulAlleyDefenseForMainHero` | `public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()` | 方法 |
| `GetTroopsOfAIOwnedAlley` | `public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)` | 方法 |
| `GetTroopsOfAlleyForBattleMission` | `public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)` | 方法 |
| `DefaultAlleyModel.AlleyMemberAvailabilityDetail>>GetClanMembersAndAvailabilityDetailsForLeadingAnAlley` | `public override List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>>GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)` | 方法 |
| `GetTroopsToRecruitFromAlleyDependingOnAlleyRandom` | `public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)` | 方法 |
| `GetDisabledReasonTextForHero` | `public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)` | 方法 |
| `GetAlleyAttackResponseTimeInDays` | `public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)` | 方法 |
| `GetDailyIncomeOfAlley` | `public override int GetDailyIncomeOfAlley(Alley alley)` | 方法 |
| `MinimumRoguerySkillNeededForLeadingAnAlley` | `public const int MinimumRoguerySkillNeededForLeadingAnAlley` | 字段 |
| `MaximumMercyTraitNeededForLeadingAnAlley` | `public const int MaximumMercyTraitNeededForLeadingAnAlley` | 字段 |
| `AlleyMemberAvailabilityDetail` | `public enum AlleyMemberAvailabilityDetail` | 属性 |
| `AlleyMemberAvailabilityDetail` | `public enum AlleyMemberAvailabilityDetail` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AlleyModel](../AlleyModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
- [同命名空间 DefaultBanditDensityModel](../DefaultBanditDensityModel/)
