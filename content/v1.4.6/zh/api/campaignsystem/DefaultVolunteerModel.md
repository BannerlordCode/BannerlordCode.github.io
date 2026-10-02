---
title: "DefaultVolunteerModel"
description: "DefaultVolunteerModel：TaleWorlds.CampaignSystem 的 public 类，继承 VolunteerModel；公开成员 6 个（方法 5、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs。"
---
# DefaultVolunteerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultVolunteerModel : VolunteerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`

## 概述

DefaultVolunteerModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs。它是一个 public 类，实现/继承 VolunteerModel，继承链为 DefaultVolunteerModel → VolunteerModel → MBGameModel。public/protected 成员共 6 个：5 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultVolunteerModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultVolunteerModel → VolunteerModel → MBGameModel。成员构成以方法为主（方法 5/6，属性 1/6），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumIndexHeroCanRecruitFromHero` | `public override int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)` | 方法 |
| `MaximumIndexGarrisonCanRecruitFromHero` | `public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)` | 方法 |
| `GetDailyVolunteerProductionProbability` | `public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)` | 方法 |
| `GetBasicVolunteer` | `public override CharacterObject GetBasicVolunteer(Hero sellerHero)` | 方法 |
| `CanHaveRecruits` | `public override bool CanHaveRecruits(Hero hero)` | 方法 |
| `MaxVolunteerTier` | `public override int MaxVolunteerTier` | 属性 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 VolunteerModel](../VolunteerModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
