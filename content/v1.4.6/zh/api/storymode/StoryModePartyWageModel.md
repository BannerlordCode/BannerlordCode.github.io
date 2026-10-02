---
title: "StoryModePartyWageModel"
description: "StoryModePartyWageModel：StoryMode 的 public 类，继承 PartyWageModel；公开成员 4 个（方法 3、属性 1、字段 0）。源文件 StoryMode/GameComponents/StoryModePartyWageModel.cs。"
---
# StoryModePartyWageModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModePartyWageModel : PartyWageModel`
**File:** `StoryMode/GameComponents/StoryModePartyWageModel.cs`

## 概述

StoryModePartyWageModel 位于 StoryMode 模块，源文件 StoryMode/GameComponents/StoryModePartyWageModel.cs。它是一个 public 类，实现/继承 PartyWageModel，继承链为 StoryModePartyWageModel → PartyWageModel。public/protected 成员共 4 个：3 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModePartyWageModel 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.GameComponents），继承链 StoryModePartyWageModel → PartyWageModel。成员构成以方法为主（方法 3/4，属性 1/4），对外主要以操作入口暴露。继承链上的 PartyWageModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/StoryModePartyWageModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit` | 属性 |
| `GetCharacterWage` | `public override int GetCharacterWage(CharacterObject character)` | 方法 |
| `GetTotalWage` | `public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)` | 方法 |
| `GetTroopRecruitmentCost` | `public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)` | 方法 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [同命名空间 StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [同命名空间 StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [同命名空间 StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
