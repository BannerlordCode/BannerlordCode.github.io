---
title: "ServersideSession"
description: "ServersideSession: a public class in TaleWorlds.Network, inheriting NetworkSession; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/ServersideSession.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ServersideSession

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class ServersideSession : NetworkSession`
**File:** `TaleWorlds.Network/ServersideSession.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

ServersideSession lives in the TaleWorlds.Network module, source file TaleWorlds.Network/ServersideSession.cs. It is a public class (abstract), implementing/inheriting NetworkSession; the inheritance chain is ServersideSession → NetworkSession. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ServersideSession lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain ServersideSession → NetworkSession. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/ServersideSession.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Index` | `public int Index` | property |
| `ServersideSession` | `protected ServersideSession(ServersideSessionManager server)` | constructor |
| `OnDisconnected` | `protected internal override void OnDisconnected()` | method |
| `OnConnected` | `protected internal override void OnConnected()` | method |
| `OnSocketSet` | `protected internal override void OnSocketSet()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NetworkSession](../NetworkSession/)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
