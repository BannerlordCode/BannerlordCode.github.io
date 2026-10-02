---
title: "CustomGame"
description: "CustomGame: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting GameType; 11 exposed members (6 methods, 4 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomGame

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomGame : GameType`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

CustomGame lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs. It is a public class, implementing/inheriting GameType; the inheritance chain is CustomGame → GameType. It exposes 11 public/protected members: 6 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomGame lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle`, inheritance chain CustomGame → GameType. The surface is method-led (methods 6/11, properties 4/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomGame.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameType](../../core-extra/GameType/)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM/)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM/)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic/)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/)
