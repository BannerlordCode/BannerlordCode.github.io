---
title: "MultiplayerPermissionHandler"
description: "MultiplayerPermissionHandler: a public class in TaleWorlds.MountAndBlade, inheriting UdpNetworkComponent; 5 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerPermissionHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerPermissionHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class MultiplayerPermissionHandler : UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerPermissionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerPermissionHandler lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerPermissionHandler.cs. It is a public class, implementing/inheriting UdpNetworkComponent; the inheritance chain is MultiplayerPermissionHandler → UdpNetworkComponent → IUdpNetworkHandler. It exposes 5 public/protected members: 3 methods, 1 events, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerPermissionHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerPermissionHandler → UdpNetworkComponent → IUdpNetworkHandler. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerPermissionHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `bool>OnPlayerPlatformMuteChanged;` | `public event Action<PlayerId, bool>OnPlayerPlatformMuteChanged;` | event |
| `MultiplayerPermissionHandler` | `public MultiplayerPermissionHandler()` | constructor |
| `OnUdpNetworkHandlerClose` | `public override void OnUdpNetworkHandlerClose()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnPlayerDisconnectedFromServer` | `public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UdpNetworkComponent](../UdpNetworkComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
