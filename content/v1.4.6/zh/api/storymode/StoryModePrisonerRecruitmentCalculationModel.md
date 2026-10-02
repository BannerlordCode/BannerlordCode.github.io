---
title: "StoryModePrisonerRecruitmentCalculationModel"
description: "StoryModePrisonerRecruitmentCalculationModel：StoryMode 的 public 类，继承 PrisonerRecruitmentCalculationModel；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs。"
---
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**File:** `StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`

## 概述

StoryModePrisonerRecruitmentCalculationModel 位于 StoryMode 模块，源文件 StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs。它是一个 public 类，实现/继承 PrisonerRecruitmentCalculationModel，继承链为 StoryModePrisonerRecruitmentCalculationModel → PrisonerRecruitmentCalculationModel。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModePrisonerRecruitmentCalculationModel 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.GameComponents），继承链 StoryModePrisonerRecruitmentCalculationModel → PrisonerRecruitmentCalculationModel。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。继承链上的 PrisonerRecruitmentCalculationModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateRecruitableNumber` | `public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)` | 方法 |
| `GetConformityChangePerHour` | `public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)` | 方法 |
| `GetConformityNeededToRecruitPrisoner` | `public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)` | 方法 |
| `GetPrisonerRecruitmentMoraleEffect` | `public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)` | 方法 |
| `IsPrisonerRecruitable` | `public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)` | 方法 |
| `ShouldPartyRecruitPrisoners` | `public override bool ShouldPartyRecruitPrisoners(PartyBase party)` | 方法 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [同命名空间 StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [同命名空间 StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [同命名空间 StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
