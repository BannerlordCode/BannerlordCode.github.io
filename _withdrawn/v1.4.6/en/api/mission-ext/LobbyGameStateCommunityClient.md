---
title: "LobbyGameStateCommunityClient"
description: "LobbyGameStateCommunityClient: a public class in TaleWorlds.MountAndBlade, inheriting LobbyGameState; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStateCommunityClient.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LobbyGameStateCommunityClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public sealed class LobbyGameStateCommunityClient : LobbyGameState`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStateCommunityClient.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LobbyGameStateCommunityClient lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStateCommunityClient.cs. It is a public class (sealed), implementing/inheriting LobbyGameState; the inheritance chain is LobbyGameStateCommunityClient → LobbyGameState → GameState → MBObjectBase. It exposes 4 public/protected members: 4 methods. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LobbyGameStateCommunityClient lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain LobbyGameStateCommunityClient → LobbyGameState → GameState → MBObjectBase. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/LobbyGameStateCommunityClient.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetStartingParameters` | `public void SetStartingParameters(CommunityClient communityClient, string address, int port, int peerIndex, int sessionKey)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `StartMultiplayer` | `protected override void StartMultiplayer()` | method |
| `OnDisconnectedFromServer` | `protected override void OnDisconnectedFromServer()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface LobbyGameState](../LobbyGameState/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
