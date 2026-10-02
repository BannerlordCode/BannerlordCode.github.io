---
title: "WebSocketMessage"
description: "WebSocketMessage: a public class in TaleWorlds.Network; 13 exposed members (7 methods, 4 properties, 1 fields). Canonical bucket network. Source: TaleWorlds.Network/WebSocketMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WebSocketMessage

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class WebSocketMessage`
**File:** `TaleWorlds.Network/WebSocketMessage.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

WebSocketMessage lives in the TaleWorlds.Network module, source file TaleWorlds.Network/WebSocketMessage.cs. It is a public class; the inheritance chain is WebSocketMessage. It exposes 13 public/protected members: 7 methods, 4 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WebSocketMessage lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain WebSocketMessage. The surface is method-led (methods 7/13, properties 4/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/WebSocketMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `byte[]Payload` | `public byte[]Payload` | property |
| `WebSocketMessage` | `public WebSocketMessage()` | constructor |
| `SetTextPayload` | `public void SetTextPayload(string payload)` | method |
| `MessageInfo` | `public MessageInfo MessageInfo` | property |
| `Cursor` | `public int Cursor` | property |
| `MessageType` | `public MessageTypes MessageType` | property |
| `WriteTo` | `public void WriteTo(bool fromServer, Stream stream)` | method |
| `ReadFrom` | `public static WebSocketMessage ReadFrom(bool fromServer, byte[]payload)` | method |
| `ReadFrom` | `public static WebSocketMessage ReadFrom(bool fromServer, Stream stream)` | method |
| `CreateCursorMessage` | `public static WebSocketMessage CreateCursorMessage(int cursor)` | method |
| `CreateCloseMessage` | `public static WebSocketMessage CreateCloseMessage()` | method |
| `GetCursor` | `public int GetCursor()` | method |
| `Encoding` | `public static Encoding Encoding` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
