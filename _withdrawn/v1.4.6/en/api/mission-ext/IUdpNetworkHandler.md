---
title: "IUdpNetworkHandler"
description: "IUdpNetworkHandler: a public interface in TaleWorlds.MountAndBlade; 13 exposed members (13 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IUdpNetworkHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IUdpNetworkHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs. It is a public interface; the inheritance chain is IUdpNetworkHandler. It exposes 13 public/protected members: 13 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IUdpNetworkHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IUdpNetworkHandler. The surface is method-led (methods 13/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IUdpNetworkHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnUdpNetworkHandlerClose` | `void OnUdpNetworkHandlerClose();` | method |
| `OnUdpNetworkHandlerTick` | `void OnUdpNetworkHandlerTick(float dt);` | method |
| `HandleNewClientConnect` | `void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo);` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer);` | method |
| `HandleNewClientAfterLoadingFinished` | `void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer);` | method |
| `HandleLateNewClientAfterLoadingFinished` | `void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer);` | method |
| `HandleNewClientAfterSynchronized` | `void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer);` | method |
| `HandleLateNewClientAfterSynchronized` | `void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer);` | method |
| `HandleEarlyPlayerDisconnect` | `void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer);` | method |
| `HandlePlayerDisconnect` | `void HandlePlayerDisconnect(NetworkCommunicator networkPeer);` | method |
| `OnPlayerDisconnectedFromServer` | `void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer);` | method |
| `OnDisconnectedFromServer` | `void OnDisconnectedFromServer();` | method |
| `OnEveryoneUnSynchronized` | `void OnEveryoneUnSynchronized();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
