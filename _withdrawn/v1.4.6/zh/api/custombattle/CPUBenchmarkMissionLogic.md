---
title: "CPUBenchmarkMissionLogic"
description: "CPUBenchmarkMissionLogic：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 MissionLogic；公开成员 12 个（方法 11、属性 0、字段 0）。canonical 桶 custombattle。源文件 TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CPUBenchmarkMissionLogic

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CPUBenchmarkMissionLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## 概述

CPUBenchmarkMissionLogic 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 CPUBenchmarkMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 12 个：11 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CPUBenchmarkMissionLogic 落在 canonical 桶 `custombattle`（命中规则 `rule:TaleWorlds.MountAndBlade.CustomBattle`），命名空间 `TaleWorlds.MountAndBlade.CustomBattle`，继承链 CPUBenchmarkMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 11/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CPUBenchmarkMissionLogic` | `public CPUBenchmarkMissionLogic(int attackerInfCount, int attackerRangedCount, int attackerCavCount, int defenderInfCount, int defenderCavCount)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `OnEndMission` | `protected override void OnEndMission()` | 方法 |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 方法 |
| `CPUBenchmarkMission` | `public static string CPUBenchmarkMission(List<string>strings)` | 方法 |
| `CPUBenchmark` | `public static string CPUBenchmark(List<string>strings)` | 方法 |
| `BenchmarkStateStart` | `public static string BenchmarkStateStart(List<string>strings)` | 方法 |
| `BenchmarkStateEnd` | `public static string BenchmarkStateEnd(List<string>strings)` | 方法 |
| `OpenCPUBenchmarkMission` | `public static Mission OpenCPUBenchmarkMission(string scene)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM/)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM/)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
- [同命名空间 CustomBattleSceneData](../CustomBattleSceneData/)
