---
title: "RestObjectRequestMessage"
description: "RestObjectRequestMessage: a public class in TaleWorlds.Diamond.Rest, inheriting RestRequestMessage; 5 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/Rest/RestObjectRequestMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RestObjectRequestMessage

**Namespace:** `TaleWorlds.Diamond.Rest`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class RestObjectRequestMessage : RestRequestMessage`
**File:** `TaleWorlds.Diamond/Rest/RestObjectRequestMessage.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

RestObjectRequestMessage lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/Rest/RestObjectRequestMessage.cs. It is a public class, implementing/inheriting RestRequestMessage; the inheritance chain is RestObjectRequestMessage → RestRequestMessage → RestData. It exposes 5 public/protected members: 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RestObjectRequestMessage lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.Rest`, inheritance chain RestObjectRequestMessage → RestRequestMessage → RestData. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/Rest/RestObjectRequestMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MessageType` | `public MessageType MessageType` | property |
| `SessionCredentials` | `public SessionCredentials SessionCredentials` | property |
| `Message` | `public Message Message` | property |
| `RestObjectRequestMessage` | `public RestObjectRequestMessage()` | constructor |
| `RestObjectRequestMessage` | `public RestObjectRequestMessage(SessionCredentials sessionCredentials, Message message, MessageType messageType)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface RestRequestMessage](../RestRequestMessage/)
- [same namespace AliveMessage](../AliveMessage/)
- [same namespace ClientRestSession](../ClientRestSession/)
- [same namespace ConnectMessage](../ConnectMessage/)
- [same namespace DisconnectMessage](../DisconnectMessage/)
