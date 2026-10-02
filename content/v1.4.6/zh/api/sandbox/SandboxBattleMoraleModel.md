---
title: "SandboxBattleMoraleModel"
description: "SandboxBattleMoraleModel：SandBox 的 public 类，继承 BattleMoraleModel；公开成员 10 个（方法 10、属性 0、字段 0）。源文件 SandBox/GameComponents/SandboxBattleMoraleModel.cs。"
---
# SandboxBattleMoraleModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleMoraleModel : BattleMoraleModel`
**File:** `SandBox/GameComponents/SandboxBattleMoraleModel.cs`

## 概述

SandboxBattleMoraleModel 位于 SandBox 模块，源文件 SandBox/GameComponents/SandboxBattleMoraleModel.cs。它是一个 public 类，实现/继承 BattleMoraleModel，继承链为 SandboxBattleMoraleModel → BattleMoraleModel。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxBattleMoraleModel 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.GameComponents），继承链 SandboxBattleMoraleModel → BattleMoraleModel。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。继承链上的 BattleMoraleModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/GameComponents/SandboxBattleMoraleModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `float>CalculateMaxMoraleChangeDueToAgentIncapacitated` | `public override ValueTuple<float, float>CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)` | 方法 |
| `float>CalculateMaxMoraleChangeDueToAgentPanicked` | `public override ValueTuple<float, float>CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)` | 方法 |
| `CalculateMoraleChangeToCharacter` | `public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)` | 方法 |
| `GetEffectiveInitialMorale` | `public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)` | 方法 |
| `CanPanicDueToMorale` | `public override bool CanPanicDueToMorale(Agent agent)` | 方法 |
| `CalculateCasualtiesFactor` | `public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)` | 方法 |
| `GetAverageMorale` | `public override float GetAverageMorale(Formation formation)` | 方法 |
| `CalculateMoraleChangeOnShipSunk` | `public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)` | 方法 |
| `CalculateMoraleOnRamming` | `public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)` | 方法 |
| `CalculateMoraleOnShipsConnected` | `public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [同命名空间 SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel)
- [同命名空间 SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel)
- [同命名空间 SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
