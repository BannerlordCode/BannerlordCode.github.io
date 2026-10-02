---
title: "ICommunicator"
description: "ICommunicator: a public interface in TaleWorlds.Core; 8 exposed members (3 methods, 5 properties, 0 fields). Source: TaleWorlds.Core/ICommunicator.cs."
---
# ICommunicator

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface ICommunicator`
**File:** `TaleWorlds.Core/ICommunicator.cs`

## Overview

ICommunicator lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ICommunicator.cs. It is a public interface; the inheritance chain is ICommunicator. It exposes 8 public/protected members: 3 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICommunicator is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain ICommunicator. The surface is property-led (properties 5/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ICommunicator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
