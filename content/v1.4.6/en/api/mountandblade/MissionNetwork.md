---
title: "MissionNetwork"
description: "MissionNetwork: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic, IUdpNetworkHandler; 16 exposed members (16 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionNetwork.cs."
---
# MissionNetwork

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionNetwork : MissionLogic, IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/MissionNetwork.cs`

## Overview

MissionNetwork lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionNetwork.cs. It is a public class (abstract), implementing/inheriting MissionLogic, IUdpNetworkHandler; the inheritance chain is MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 16 public/protected members: 16 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionNetwork is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 16/16, properties 0/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionNetwork.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAfterMissionCreated` | `public override void OnAfterMissionCreated()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `AddRemoveMessageHandlers` | `protected virtual void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnPlayerConnectedToServer` | `public virtual void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)` | method |
| `OnPlayerDisconnectedFromServer` | `public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` | method |
| `OnUdpNetworkHandlerTick` | `protected virtual void OnUdpNetworkHandlerTick()` | method |
| `OnUdpNetworkHandlerClose` | `protected virtual void OnUdpNetworkHandlerClose()` | method |
| `HandleNewClientConnect` | `protected virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterLoadingFinished` | `protected virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleLateNewClientAfterLoadingFinished` | `protected virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterSynchronized` | `protected virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `HandleLateNewClientAfterSynchronized` | `protected virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `HandleEarlyPlayerDisconnect` | `protected virtual void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `HandlePlayerDisconnect` | `protected virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [base / interface IUdpNetworkHandler](../IUdpNetworkHandler)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
