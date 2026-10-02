---
title: "ClientSocketSession"
description: "ClientSocketSession: a public class in TaleWorlds.Diamond.Socket, inheriting ClientsideSession, IClientSession; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/Socket/ClientSocketSession.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClientSocketSession

**Namespace:** `TaleWorlds.Diamond.Socket`
**Module:** `TaleWorlds.Diamond`
**Type:** `public abstract class ClientSocketSession : ClientsideSession, IClientSession`
**File:** `TaleWorlds.Diamond/Socket/ClientSocketSession.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

ClientSocketSession lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/Socket/ClientSocketSession.cs. It is a public class (abstract), implementing/inheriting ClientsideSession, IClientSession; the inheritance chain is ClientSocketSession → ClientsideSession → NetworkSession. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClientSocketSession lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.Socket`, inheritance chain ClientSocketSession → ClientsideSession → NetworkSession. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/Socket/ClientSocketSession.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClientSocketSession` | `protected ClientSocketSession(IClient client, string address, int port)` | constructor |
| `OnConnected` | `protected override void OnConnected()` | method |
| `OnCantConnect` | `protected override void OnCantConnect()` | method |
| `OnDisconnected` | `protected override void OnDisconnected()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClientsideSession](../../network/ClientsideSession/)
- [base / interface IClientSession](../IClientSession/)
- [same namespace SocketMessage](../SocketMessage/)
