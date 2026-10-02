---
title: "LobbyNetworkComponent"
description: "LobbyNetworkComponent: a public class in TaleWorlds.MountAndBlade, inheriting UdpNetworkComponent; 7 exposed members (6 methods, 0 properties, 1 fields). Source: TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs."
---
# LobbyNetworkComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class LobbyNetworkComponent : UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs`

## Overview

LobbyNetworkComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs. It is a public class, implementing/inheriting UdpNetworkComponent; the inheritance chain is LobbyNetworkComponent → UdpNetworkComponent → IUdpNetworkHandler. It exposes 7 public/protected members: 6 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LobbyNetworkComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain LobbyNetworkComponent → UdpNetworkComponent → IUdpNetworkHandler. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `public override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterLoadingFinished` | `public override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleLateNewClientAfterLoadingFinished` | `public override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandlePlayerDisconnect` | `public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `OnUdpNetworkHandlerTick` | `public override void OnUdpNetworkHandlerTick(float dt)` | method |
| `MaxForcedAvatarIndex` | `public const int MaxForcedAvatarIndex` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UdpNetworkComponent](../UdpNetworkComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
