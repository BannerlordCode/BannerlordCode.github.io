---
title: "MessageInfo"
description: "MessageInfo: a public class in TaleWorlds.Network; 10 exposed members (2 methods, 7 properties, 1 fields). Canonical bucket network. Source: TaleWorlds.Network/MessageInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MessageInfo

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class MessageInfo`
**File:** `TaleWorlds.Network/MessageInfo.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

MessageInfo lives in the TaleWorlds.Network module, source file TaleWorlds.Network/MessageInfo.cs. It is a public class; the inheritance chain is MessageInfo. It exposes 10 public/protected members: 2 methods, 7 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MessageInfo lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain MessageInfo. The surface is property-led (properties 7/10, methods 2/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/MessageInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SourceIPAddress` | `public string SourceIPAddress` | property |
| `SourceClientId` | `public Guid SourceClientId` | property |
| `SourceUserName` | `public string SourceUserName` | property |
| `SourcePlatform` | `public string SourcePlatform` | property |
| `SourcePlatformId` | `public string SourcePlatformId` | property |
| `DestinationPostBox` | `public string DestinationPostBox` | property |
| `DestinationClientId` | `public Guid DestinationClientId` | property |
| `WriteTo` | `public void WriteTo(Stream stream, bool fromServer)` | method |
| `ReadFrom` | `public static MessageInfo ReadFrom(Stream stream, bool fromServer)` | method |
| `DestinationIsPostBox` | `public bool DestinationIsPostBox` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
