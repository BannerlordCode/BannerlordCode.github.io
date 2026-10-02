---
title: "CPUBenchmarkMissionSpawnHandler"
description: "CPUBenchmarkMissionSpawnHandler: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting MissionLogic; 4 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs."
---
# CPUBenchmarkMissionSpawnHandler

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CPUBenchmarkMissionSpawnHandler : MissionLogic`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs`

## Overview

CPUBenchmarkMissionSpawnHandler lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CPUBenchmarkMissionSpawnHandler → MissionLogic. It exposes 4 public/protected members: 2 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CPUBenchmarkMissionSpawnHandler is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CPUBenchmarkMissionSpawnHandler → MissionLogic. The surface is method-led (methods 2/4, properties 0/4), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CPUBenchmarkMissionSpawnHandler` | `public CPUBenchmarkMissionSpawnHandler()` | constructor |
| `CPUBenchmarkMissionSpawnHandler` | `public CPUBenchmarkMissionSpawnHandler(CustomBattleCombatant defenderParty, CustomBattleCombatant attackerParty)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CustomBattleSceneData](../CustomBattleSceneData)
