---
title: "CPUBenchmarkMissionLogic"
description: "CPUBenchmarkMissionLogic: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting MissionLogic; 12 exposed members (11 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs."
---
# CPUBenchmarkMissionLogic

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CPUBenchmarkMissionLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs`

## Overview

CPUBenchmarkMissionLogic lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CPUBenchmarkMissionLogic → MissionLogic. It exposes 12 public/protected members: 11 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CPUBenchmarkMissionLogic is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CPUBenchmarkMissionLogic → MissionLogic. The surface is method-led (methods 11/12, properties 0/12), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CPUBenchmarkMissionLogic` | `public CPUBenchmarkMissionLogic(int attackerInfCount, int attackerRangedCount, int attackerCavCount, int defenderInfCount, int defenderCavCount)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnPreMissionTick` | `public override void OnPreMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `CPUBenchmarkMission` | `public static string CPUBenchmarkMission(List<string>strings)` | method |
| `CPUBenchmark` | `public static string CPUBenchmark(List<string>strings)` | method |
| `BenchmarkStateStart` | `public static string BenchmarkStateStart(List<string>strings)` | method |
| `BenchmarkStateEnd` | `public static string BenchmarkStateEnd(List<string>strings)` | method |
| `OpenCPUBenchmarkMission` | `public static Mission OpenCPUBenchmarkMission(string scene)` | method |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
- [same namespace CustomBattleSceneData](../CustomBattleSceneData)
