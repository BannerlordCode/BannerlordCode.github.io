---
title: "LobbyGameState"
description: "LobbyGameState: a public class in TaleWorlds.MountAndBlade, inheriting GameState, IUdpNetworkHandler; 6 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyGameState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public abstract class LobbyGameState : GameState, IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameState.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LobbyGameState lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameState.cs. It is a public class (abstract), implementing/inheriting GameState, IUdpNetworkHandler; the inheritance chain is LobbyGameState → GameState → MBObjectBase. It exposes 6 public/protected members: 5 methods, 1 properties. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LobbyGameState lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain LobbyGameState → GameState → MBObjectBase. The surface is method-led (methods 5/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsMusicMenuState` | `public override bool IsMusicMenuState` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnDisconnectedFromServer` | `protected virtual void OnDisconnectedFromServer()` | method |
| `StartMultiplayer` | `protected abstract void StartMultiplayer();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [base / interface IUdpNetworkHandler](../IUdpNetworkHandler/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
