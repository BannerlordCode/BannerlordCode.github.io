---
title: "VirtualPlayer"
description: "VirtualPlayer: a public class in TaleWorlds.Core; 24 exposed members (13 methods, 10 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/VirtualPlayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VirtualPlayer

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class VirtualPlayer`
**File:** `TaleWorlds.Core/VirtualPlayer.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

VirtualPlayer lives in the TaleWorlds.Core module, source file TaleWorlds.Core/VirtualPlayer.cs. It is a public class; the inheritance chain is VirtualPlayer. It exposes 24 public/protected members: 13 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VirtualPlayer lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain VirtualPlayer. The surface is method-led (methods 13/24, properties 10/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/VirtualPlayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `object>PeerComponents` | `public static Dictionary<Type, object>PeerComponents` | property |
| `List` | `public static List<T>Peers<T>() where T : PeerComponent` | method |
| `Reset` | `public static void Reset()` | method |
| `BannerCode` | `public string BannerCode` | property |
| `BodyProperties` | `public BodyProperties BodyProperties` | property |
| `Race` | `public int Race` | property |
| `IsFemale` | `public bool IsFemale` | property |
| `Id` | `public PlayerId Id` | property |
| `Index` | `public int Index` | property |
| `IsMine` | `public bool IsMine` | property |
| `UserName` | `public string UserName` | property |
| `ChosenBadgeIndex` | `public int ChosenBadgeIndex` | property |
| `VirtualPlayer` | `public VirtualPlayer(int index, string name, PlayerId playerID, ICommunicator communicator)` | constructor |
| `AddComponent` | `public T AddComponent<T>() where T : PeerComponent, new()` | method |
| `AddComponent` | `public PeerComponent AddComponent(Type peerComponentType)` | method |
| `AddComponent` | `public PeerComponent AddComponent(uint componentId)` | method |
| `GetComponent` | `public PeerComponent GetComponent(uint componentId)` | method |
| `GetComponent` | `public T GetComponent<T>() where T : PeerComponent` | method |
| `GetComponent` | `public PeerComponent GetComponent(Type peerComponentType)` | method |
| `RemoveComponent` | `public void RemoveComponent<T>(bool synched = true) where T : PeerComponent` | method |
| `RemoveComponent` | `public void RemoveComponent(PeerComponent component)` | method |
| `OnDisconnect` | `public void OnDisconnect()` | method |
| `SynchronizeComponentsTo` | `public void SynchronizeComponentsTo(VirtualPlayer peer)` | method |
| `UpdateIndexForReconnectingPlayer` | `public void UpdateIndexForReconnectingPlayer(int playerIndex)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
