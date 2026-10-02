---
title: "ClientRestSession"
description: "ClientRestSession: a public class in TaleWorlds.Diamond.Rest, inheriting IClientSession; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/Rest/ClientRestSession.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClientRestSession

**Namespace:** `TaleWorlds.Diamond.Rest`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class ClientRestSession : IClientSession`
**File:** `TaleWorlds.Diamond/Rest/ClientRestSession.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

ClientRestSession lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/Rest/ClientRestSession.cs. It is a public class, implementing/inheriting IClientSession; the inheritance chain is ClientRestSession → IClientSession. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClientRestSession lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.Rest`, inheritance chain ClientRestSession → IClientSession. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/Rest/ClientRestSession.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsConnected` | `public bool IsConnected` | property |
| `Client` | `public IClient Client` | property |
| `ClientRestSession` | `public ClientRestSession(IClient client, string address, IHttpDriver platformNetworkClient)` | constructor |
| `Connect` | `public void Connect()` | method |
| `Disconnect` | `public void Disconnect()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IClientSession](../IClientSession/)
- [same namespace AliveMessage](../AliveMessage/)
- [same namespace ConnectMessage](../ConnectMessage/)
- [same namespace DisconnectMessage](../DisconnectMessage/)
- [same namespace MessageType](../MessageType/)
