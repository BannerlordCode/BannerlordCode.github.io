---
title: "AliveMessage"
description: "AliveMessage: a public class in TaleWorlds.Diamond.Rest, inheriting RestRequestMessage; 3 exposed members (0 methods, 1 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/Rest/AliveMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AliveMessage

**Namespace:** `TaleWorlds.Diamond.Rest`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class AliveMessage : RestRequestMessage`
**File:** `TaleWorlds.Diamond/Rest/AliveMessage.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

AliveMessage lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/Rest/AliveMessage.cs. It is a public class, implementing/inheriting RestRequestMessage; the inheritance chain is AliveMessage → RestRequestMessage → RestData. It exposes 3 public/protected members: 1 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AliveMessage lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.Rest`, inheritance chain AliveMessage → RestRequestMessage → RestData. The surface is property-led (properties 1/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/Rest/AliveMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SessionCredentials` | `public SessionCredentials SessionCredentials` | property |
| `AliveMessage` | `public AliveMessage()` | constructor |
| `AliveMessage` | `public AliveMessage(SessionCredentials sessionCredentials)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface RestRequestMessage](../RestRequestMessage/)
- [same namespace ClientRestSession](../ClientRestSession/)
- [same namespace ConnectMessage](../ConnectMessage/)
- [same namespace DisconnectMessage](../DisconnectMessage/)
- [same namespace MessageType](../MessageType/)
