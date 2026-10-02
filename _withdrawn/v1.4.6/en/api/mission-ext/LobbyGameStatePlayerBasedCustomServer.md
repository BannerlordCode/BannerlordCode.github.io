---
title: "LobbyGameStatePlayerBasedCustomServer"
description: "LobbyGameStatePlayerBasedCustomServer: a public class in TaleWorlds.MountAndBlade, inheriting LobbyGameState; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyGameStatePlayerBasedCustomServer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public sealed class LobbyGameStatePlayerBasedCustomServer : LobbyGameState`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LobbyGameStatePlayerBasedCustomServer lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs. It is a public class (sealed), implementing/inheriting LobbyGameState; the inheritance chain is LobbyGameStatePlayerBasedCustomServer → LobbyGameState → GameState → MBObjectBase. It exposes 3 public/protected members: 3 methods. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LobbyGameStatePlayerBasedCustomServer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain LobbyGameStatePlayerBasedCustomServer → LobbyGameState → GameState → MBObjectBase. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetStartingParameters` | `public void SetStartingParameters(LobbyGameClientHandler lobbyGameClientHandler)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `StartMultiplayer` | `protected override void StartMultiplayer()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface LobbyGameState](../LobbyGameState/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
