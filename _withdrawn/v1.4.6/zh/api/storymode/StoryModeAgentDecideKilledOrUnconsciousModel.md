---
title: "StoryModeAgentDecideKilledOrUnconsciousModel"
description: "StoryModeAgentDecideKilledOrUnconsciousModel：StoryMode.GameComponents 的 public 类，继承 AgentDecideKilledOrUnconsciousModel；公开成员 1 个（方法 1、属性 0、字段 0）。canonical 桶 storymode。源文件 StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeAgentDecideKilledOrUnconsciousModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**File:** `StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

StoryModeAgentDecideKilledOrUnconsciousModel 位于 StoryMode 模块，源文件 StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs。它是一个 public 类，实现/继承 AgentDecideKilledOrUnconsciousModel，继承链为 StoryModeAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel → MBGameModel → GameModel。public/protected 成员共 1 个：1 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeAgentDecideKilledOrUnconsciousModel 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode.GameComponents`，继承链 StoryModeAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel → MBGameModel → GameModel。成员构成以方法为主（方法 1/1，属性 0/1），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAgentStateProbability` | `public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentDecideKilledOrUnconsciousModel](../../mission-ext/AgentDecideKilledOrUnconsciousModel/)
- [同命名空间 StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [同命名空间 StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [同命名空间 StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
- [同命名空间 StoryModeCombatXpModel](../StoryModeCombatXpModel/)
