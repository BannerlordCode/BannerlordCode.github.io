---
title: "CustomGame"
description: "CustomGame: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting GameType; 11 exposed members (6 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs."
---
# CustomGame

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomGame : GameType`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs`

## Overview

CustomGame lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs. It is a public class, implementing/inheriting GameType; the inheritance chain is CustomGame → GameType. It exposes 11 public/protected members: 6 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomGame is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CustomGame → GameType. The surface is method-led (methods 6/11, properties 4/11), so it mostly exposes operations. GameType on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<CustomBattleSceneData>CustomBattleScenes` | property |
| `IsCoreOnlyGameMode` | `public override bool IsCoreOnlyGameMode` | property |
| `CustomBattleBannerEffects` | `public CustomBattleBannerEffects CustomBattleBannerEffects` | property |
| `Current` | `public static CustomGame Current` | property |
| `CustomGame` | `public CustomGame()` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `BeforeRegisterTypes` | `protected override void BeforeRegisterTypes(MBObjectManager objectManager)` | method |
| `OnRegisterTypes` | `protected override void OnRegisterTypes(MBObjectManager objectManager)` | method |
| `DoLoadingForGameType` | `protected override void DoLoadingForGameType(GameTypeLoadingStates gameTypeLoadingState, out GameTypeLoadingStates nextState)` | method |
| `OnDestroy` | `public override void OnDestroy()` | method |
| `OnStateChanged` | `public override void OnStateChanged(GameState oldState)` | method |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
