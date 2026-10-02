---
title: "MultiplayerGame"
description: "MultiplayerGame: a public class in TaleWorlds.MountAndBlade, inheriting GameType; 10 exposed members (7 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGame.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerGame

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class MultiplayerGame : GameType`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGame.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerGame lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGame.cs. It is a public class, implementing/inheriting GameType; the inheritance chain is MultiplayerGame → GameType. It exposes 10 public/protected members: 7 methods, 3 properties. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerGame lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerGame → GameType. The surface is method-led (methods 7/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGame.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsCoreOnlyGameMode` | `public override bool IsCoreOnlyGameMode` | property |
| `Current` | `public static MultiplayerGame Current` | property |
| `RequiresTutorial` | `public override bool RequiresTutorial` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `Equipment>ReadDefaultEquipments` | `public static Dictionary<string, Equipment>ReadDefaultEquipments(string defaultEquipmentsPath)` | method |
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
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
