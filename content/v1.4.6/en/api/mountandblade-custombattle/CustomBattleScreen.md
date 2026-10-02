---
title: "CustomBattleScreen"
description: "CustomBattleScreen: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ScreenBase, IGameStateListener; 7 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs."
---
# CustomBattleScreen

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleScreen : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs`

## Overview

CustomBattleScreen lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is CustomBattleScreen → ScreenBase. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleScreen is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CustomBattleScreen → ScreenBase. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleScreen` | `public CustomBattleScreen(CustomBattleState customBattleState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `UpdateLayout` | `public override void UpdateLayout()` | method |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
