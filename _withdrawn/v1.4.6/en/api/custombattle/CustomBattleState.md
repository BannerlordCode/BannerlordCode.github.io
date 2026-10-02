---
title: "CustomBattleState"
description: "CustomBattleState: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting GameState; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleState

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleState : GameState`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

CustomBattleState lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is CustomBattleState → GameState → MBObjectBase. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleState lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle`, inheritance chain CustomBattleState → GameState → MBObjectBase. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `EnableRecordMission` | `public static string EnableRecordMission(List<string>strings)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM/)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM/)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic/)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
