---
title: "MultiplayerGameLogger"
description: "MultiplayerGameLogger: a public class in TaleWorlds.MountAndBlade, inheriting GameHandler; 8 exposed members (5 methods, 1 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGameLogger.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerGameLogger

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class MultiplayerGameLogger : GameHandler`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGameLogger.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerGameLogger lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGameLogger.cs. It is a public class, implementing/inheriting GameHandler; the inheritance chain is MultiplayerGameLogger → GameHandler → IEntityComponent. It exposes 8 public/protected members: 5 methods, 1 properties, 1 fields, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerGameLogger lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerGameLogger → GameHandler → IEntityComponent. The surface is method-led (methods 5/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGameLogger.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IReadOnlyList` | `public IReadOnlyList<GameLog>GameLogs` | property |
| `MultiplayerGameLogger` | `public MultiplayerGameLogger()` | constructor |
| `Log` | `public void Log(GameLog log)` | method |
| `OnGameStart` | `protected override void OnGameStart()` | method |
| `OnBeforeSave` | `public override void OnBeforeSave()` | method |
| `OnAfterSave` | `public override void OnAfterSave()` | method |
| `OnGameNetworkBegin` | `protected override void OnGameNetworkBegin()` | method |
| `PreInitialLogId` | `public const int PreInitialLogId` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameHandler](../../core-extra/GameHandler/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
