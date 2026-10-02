---
title: "CustomBattleState"
description: "CustomBattleState: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting GameState; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs."
---
# CustomBattleState

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleState : GameState`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs`

## Overview

CustomBattleState lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is CustomBattleState → GameState. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleState is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CustomBattleState → GameState. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattleState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `EnableRecordMission` | `public static string EnableRecordMission(List<string>strings)` | method |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
