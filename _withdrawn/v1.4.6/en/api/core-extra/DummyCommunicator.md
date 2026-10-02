---
title: "DummyCommunicator"
description: "DummyCommunicator: a public class in TaleWorlds.Core, inheriting ICommunicator; 10 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/DummyCommunicator.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DummyCommunicator

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class DummyCommunicator : ICommunicator`
**File:** `TaleWorlds.Core/DummyCommunicator.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

DummyCommunicator lives in the TaleWorlds.Core module, source file TaleWorlds.Core/DummyCommunicator.cs. It is a public class, implementing/inheriting ICommunicator; the inheritance chain is DummyCommunicator → ICommunicator. It exposes 10 public/protected members: 5 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DummyCommunicator lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain DummyCommunicator → ICommunicator. The surface is method-led (methods 5/10, properties 5/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/DummyCommunicator.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer` | property |
| `OnSynchronizeComponentTo` | `public void OnSynchronizeComponentTo(VirtualPlayer peer, PeerComponent component)` | method |
| `OnAddComponent` | `public void OnAddComponent(PeerComponent component)` | method |
| `OnRemoveComponent` | `public void OnRemoveComponent(PeerComponent component)` | method |
| `IsNetworkActive` | `public bool IsNetworkActive` | property |
| `IsConnectionActive` | `public bool IsConnectionActive` | property |
| `IsServerPeer` | `public bool IsServerPeer` | property |
| `IsSynchronized` | `public bool IsSynchronized` | property |
| `CreateAsServer` | `public static DummyCommunicator CreateAsServer(int index, string name)` | method |
| `CreateAsClient` | `public static DummyCommunicator CreateAsClient(string name, int index)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICommunicator](../ICommunicator/)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
