---
title: "ServersideSessionManager"
description: "ServersideSessionManager: a public class in TaleWorlds.Network; 9 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/ServersideSessionManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ServersideSessionManager

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class ServersideSessionManager`
**File:** `TaleWorlds.Network/ServersideSessionManager.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

ServersideSessionManager lives in the TaleWorlds.Network module, source file TaleWorlds.Network/ServersideSessionManager.cs. It is a public class (abstract); the inheritance chain is ServersideSessionManager. It exposes 9 public/protected members: 5 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ServersideSessionManager lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain ServersideSessionManager. The surface is method-led (methods 5/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/ServersideSessionManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PeerAliveCoeff` | `public float PeerAliveCoeff` | property |
| `ServersideSessionManager` | `protected ServersideSessionManager()` | constructor |
| `Activate` | `public void Activate(ushort port, ServersideSessionManager.ThreadType threadType = ServersideSessionManager.ThreadType.Single, int readWriteThreadCount = 1)` | method |
| `GetPeer` | `public ServersideSession GetPeer(int peerIndex)` | method |
| `Tick` | `public virtual void Tick()` | method |
| `OnNewConnection` | `protected abstract ServersideSession OnNewConnection();` | method |
| `OnRemoveConnection` | `protected abstract void OnRemoveConnection(ServersideSession peer);` | method |
| `ThreadType` | `public enum ThreadType` | property |
| `ThreadType` | `public enum ThreadType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
