---
title: "SandboxAgentDecideKilledOrUnconsciousModel"
description: "SandboxAgentDecideKilledOrUnconsciousModel：SandBox.GameComponents 的 public 类，继承 AgentDecideKilledOrUnconsciousModel；公开成员 1 个（方法 1、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxAgentDecideKilledOrUnconsciousModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**File:** `SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandboxAgentDecideKilledOrUnconsciousModel 位于 SandBox 模块，源文件 SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs。它是一个 public 类，实现/继承 AgentDecideKilledOrUnconsciousModel，继承链为 SandboxAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel → MBGameModel → GameModel。public/protected 成员共 1 个：1 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxAgentDecideKilledOrUnconsciousModel 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GameComponents`，继承链 SandboxAgentDecideKilledOrUnconsciousModel → AgentDecideKilledOrUnconsciousModel → MBGameModel → GameModel。成员构成以方法为主（方法 1/1，属性 0/1），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAgentStateProbability` | `public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentDecideKilledOrUnconsciousModel](../../mission-ext/AgentDecideKilledOrUnconsciousModel/)
- [同命名空间 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [同命名空间 SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [同命名空间 SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/)
- [同命名空间 SandboxApplyWeatherEffectsModel](../SandboxApplyWeatherEffectsModel/)
