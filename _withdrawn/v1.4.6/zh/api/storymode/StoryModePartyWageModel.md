---
title: "StoryModePartyWageModel"
description: "StoryModePartyWageModel：StoryMode.GameComponents 的 public 类，继承 PartyWageModel；公开成员 4 个（方法 3、属性 1、字段 0）。canonical 桶 storymode。源文件 StoryMode/GameComponents/StoryModePartyWageModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModePartyWageModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModePartyWageModel : PartyWageModel`
**File:** `StoryMode/GameComponents/StoryModePartyWageModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

StoryModePartyWageModel 位于 StoryMode 模块，源文件 StoryMode/GameComponents/StoryModePartyWageModel.cs。它是一个 public 类，实现/继承 PartyWageModel，继承链为 StoryModePartyWageModel → PartyWageModel → MBGameModel → GameModel。public/protected 成员共 4 个：3 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModePartyWageModel 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode.GameComponents`，继承链 StoryModePartyWageModel → PartyWageModel → MBGameModel → GameModel。成员构成以方法为主（方法 3/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/StoryModePartyWageModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit` | 属性 |
| `GetCharacterWage` | `public override int GetCharacterWage(CharacterObject character)` | 方法 |
| `GetTotalWage` | `public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)` | 方法 |
| `GetTroopRecruitmentCost` | `public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PartyWageModel](../../campaign-ext/PartyWageModel/)
- [同命名空间 StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [同命名空间 StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [同命名空间 StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [同命名空间 StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
