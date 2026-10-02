---
title: "ICommunicator"
description: "ICommunicator: a public interface in TaleWorlds.Core; 8 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/ICommunicator.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICommunicator

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface ICommunicator`
**File:** `TaleWorlds.Core/ICommunicator.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

ICommunicator lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ICommunicator.cs. It is a public interface; the inheritance chain is ICommunicator. It exposes 8 public/protected members: 3 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICommunicator lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain ICommunicator. The surface is property-led (properties 5/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ICommunicator.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `VirtualPlayer` | `VirtualPlayer VirtualPlayer` | property |
| `OnSynchronizeComponentTo` | `void OnSynchronizeComponentTo(VirtualPlayer peer, PeerComponent component);` | method |
| `OnAddComponent` | `void OnAddComponent(PeerComponent component);` | method |
| `OnRemoveComponent` | `void OnRemoveComponent(PeerComponent component);` | method |
| `IsNetworkActive` | `bool IsNetworkActive` | property |
| `IsConnectionActive` | `bool IsConnectionActive` | property |
| `IsServerPeer` | `bool IsServerPeer` | property |
| `IsSynchronized` | `bool IsSynchronized` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
