---
title: "ClientsideSession"
description: "ClientsideSession: a public class in TaleWorlds.Network, inheriting NetworkSession; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/ClientsideSession.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClientsideSession

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class ClientsideSession : NetworkSession`
**File:** `TaleWorlds.Network/ClientsideSession.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

ClientsideSession lives in the TaleWorlds.Network module, source file TaleWorlds.Network/ClientsideSession.cs. It is a public class (abstract), implementing/inheriting NetworkSession; the inheritance chain is ClientsideSession → NetworkSession. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClientsideSession lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain ClientsideSession → NetworkSession. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/ClientsideSession.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SendMessagePeerAlive` | `protected void SendMessagePeerAlive()` | method |
| `OnDisconnected` | `protected internal override void OnDisconnected()` | method |
| `Port` | `public int Port` | property |
| `ClientsideSession` | `protected ClientsideSession()` | constructor |
| `Connect` | `public virtual void Connect(string ip, int port, bool useSessionThread = true)` | method |
| `Process` | `public void Process()` | method |
| `Tick` | `public override void Tick()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NetworkSession](../NetworkSession/)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
- [same namespace Coroutine](../Coroutine/)
