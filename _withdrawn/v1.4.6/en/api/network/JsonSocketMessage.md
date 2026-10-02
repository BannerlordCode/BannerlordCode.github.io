---
title: "JsonSocketMessage"
description: "JsonSocketMessage: a public class in TaleWorlds.Network; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/JsonSocketMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# JsonSocketMessage

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class JsonSocketMessage`
**File:** `TaleWorlds.Network/JsonSocketMessage.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

JsonSocketMessage lives in the TaleWorlds.Network module, source file TaleWorlds.Network/JsonSocketMessage.cs. It is a public class; the inheritance chain is JsonSocketMessage. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: JsonSocketMessage lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain JsonSocketMessage. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/JsonSocketMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MessageInfo` | `public MessageInfo MessageInfo` | property |
| `JsonSocketMessage` | `public JsonSocketMessage()` | constructor |
| `SocketMessageTypeId` | `public string SocketMessageTypeId` | property |
| `GetTypeId` | `public static string GetTypeId(Type messageType)` | method |
| `Type>GetMessageDictionary` | `public static Dictionary<string, Type>GetMessageDictionary()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
