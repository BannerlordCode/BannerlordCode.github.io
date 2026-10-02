---
title: "UdpNetworkComponent"
description: "UdpNetworkComponent: a public class in TaleWorlds.MountAndBlade, inheriting IUdpNetworkHandler; 15 exposed members (14 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/UdpNetworkComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UdpNetworkComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

UdpNetworkComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/UdpNetworkComponent.cs. It is a public class (abstract), implementing/inheriting IUdpNetworkHandler; the inheritance chain is UdpNetworkComponent → IUdpNetworkHandler. It exposes 15 public/protected members: 14 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UdpNetworkComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain UdpNetworkComponent → IUdpNetworkHandler. The surface is method-led (methods 14/15, properties 0/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/UdpNetworkComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UdpNetworkComponent` | `protected UdpNetworkComponent()` | constructor |
| `AddRemoveMessageHandlers` | `protected virtual void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnUdpNetworkHandlerClose` | `public virtual void OnUdpNetworkHandlerClose()` | method |
| `OnUdpNetworkHandlerTick` | `public virtual void OnUdpNetworkHandlerTick(float dt)` | method |
| `HandleNewClientConnect` | `public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterLoadingFinished` | `public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleLateNewClientAfterLoadingFinished` | `public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterSynchronized` | `public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `HandleLateNewClientAfterSynchronized` | `public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `OnEveryoneUnSynchronized` | `public virtual void OnEveryoneUnSynchronized()` | method |
| `HandleEarlyPlayerDisconnect` | `public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `HandlePlayerDisconnect` | `public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `OnPlayerDisconnectedFromServer` | `public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` | method |
| `OnDisconnectedFromServer` | `public virtual void OnDisconnectedFromServer()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IUdpNetworkHandler](../IUdpNetworkHandler/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
