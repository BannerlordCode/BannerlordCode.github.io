---
title: "SandboxBattleSpawnModel"
description: "SandboxBattleSpawnModel：SandBox.GameComponents 的 public 类，继承 BattleSpawnModel；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/GameComponents/SandboxBattleSpawnModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxBattleSpawnModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`
**File:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandboxBattleSpawnModel 位于 SandBox 模块，源文件 SandBox/GameComponents/SandboxBattleSpawnModel.cs。它是一个 public 类，实现/继承 BattleSpawnModel，继承链为 SandboxBattleSpawnModel → BattleSpawnModel → MBGameModel → GameModel。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxBattleSpawnModel 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GameComponents`，继承链 SandboxBattleSpawnModel → BattleSpawnModel → MBGameModel → GameModel。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/GameComponents/SandboxBattleSpawnModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionStart` | `public override void OnMissionStart()` | 方法 |
| `OnMissionEnd` | `public override void OnMissionEnd()` | 方法 |
| `int>>GetInitialSpawnAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | 方法 |
| `int>>GetReinforcementAssignments` | `public override List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BattleSpawnModel](../../mission-ext/BattleSpawnModel/)
- [同命名空间 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [同命名空间 SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [同命名空间 SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel/)
- [同命名空间 SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/)
