---
title: "PeerExtensions"
description: "PeerExtensions: a public class in TaleWorlds.MountAndBlade; 11 exposed members (11 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/PeerExtensions.cs."
---
# PeerExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class PeerExtensions`
**File:** `TaleWorlds.MountAndBlade/PeerExtensions.cs`

## Overview

PeerExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/PeerExtensions.cs. It is a public class; the inheritance chain is PeerExtensions. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PeerExtensions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain PeerExtensions. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/PeerExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SendExistingObjects` | `public static void SendExistingObjects(this NetworkCommunicator peer, Mission mission)` | method |
| `GetPeer` | `public static VirtualPlayer GetPeer(this PeerComponent peerComponent)` | method |
| `GetNetworkPeer` | `public static NetworkCommunicator GetNetworkPeer(this PeerComponent peerComponent)` | method |
| `GetComponent` | `public static T GetComponent<T>(this NetworkCommunicator networkPeer) where T : PeerComponent` | method |
| `RemoveComponent` | `public static void RemoveComponent<T>(this NetworkCommunicator networkPeer, bool synched = true) where T : PeerComponent` | method |
| `RemoveComponent` | `public static void RemoveComponent(this NetworkCommunicator networkPeer, PeerComponent component)` | method |
| `GetComponent` | `public static PeerComponent GetComponent(this NetworkCommunicator networkPeer, uint componentId)` | method |
| `AddComponent` | `public static void AddComponent(this NetworkCommunicator networkPeer, Type peerComponentType)` | method |
| `AddComponent` | `public static void AddComponent(this NetworkCommunicator networkPeer, uint componentId)` | method |
| `AddComponent` | `public static T AddComponent<T>(this NetworkCommunicator networkPeer) where T : PeerComponent, new()` | method |
| `TellClientToAddComponent` | `public static T TellClientToAddComponent<T>(this NetworkCommunicator networkPeer) where T : PeerComponent, new()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
