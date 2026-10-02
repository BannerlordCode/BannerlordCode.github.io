---
title: "SandboxBattleSpawnModel"
description: "SandboxBattleSpawnModel：SandBox 的 public 类，继承 BattleSpawnModel；公开成员 4 个（方法 4、属性 0、字段 0）。源文件 SandBox/GameComponents/SandboxBattleSpawnModel.cs。"
---
# SandboxBattleSpawnModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`
**File:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`

## 概述

SandboxBattleSpawnModel 位于 SandBox 模块，源文件 SandBox/GameComponents/SandboxBattleSpawnModel.cs。它是一个 public 类，实现/继承 BattleSpawnModel，继承链为 SandboxBattleSpawnModel → BattleSpawnModel。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxBattleSpawnModel 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.GameComponents），继承链 SandboxBattleSpawnModel → BattleSpawnModel。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。继承链上的 BattleSpawnModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/GameComponents/SandboxBattleSpawnModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionStart` | `public override void OnMissionStart()` | 方法 |
| `OnMissionEnd` | `public override void OnMissionEnd()` | 方法 |
| `int>>GetInitialSpawnAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | 方法 |
| `int>>GetReinforcementAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [同命名空间 SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel)
- [同命名空间 SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel)
- [同命名空间 SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
