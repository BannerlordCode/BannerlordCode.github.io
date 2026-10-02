---
title: "RestResponse"
description: "RestResponse: a public class in TaleWorlds.Diamond.Rest, inheriting RestData; 11 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/Rest/RestResponse.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RestResponse

**Namespace:** `TaleWorlds.Diamond.Rest`
**Module:** `TaleWorlds.Diamond`
**Type:** `public sealed class RestResponse : RestData`
**File:** `TaleWorlds.Diamond/Rest/RestResponse.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

RestResponse lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/Rest/RestResponse.cs. It is a public class (sealed), implementing/inheriting RestData; the inheritance chain is RestResponse → RestData. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RestResponse lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.Rest`, inheritance chain RestResponse → RestData. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/Rest/RestResponse.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Successful` | `public bool Successful` | property |
| `SuccessfulReason` | `public string SuccessfulReason` | property |
| `FunctionResult` | `public RestFunctionResult FunctionResult` | property |
| `byte[]UserCertificate` | `public byte[]UserCertificate` | property |
| `RemainingMessageCount` | `public int RemainingMessageCount` | property |
| `RestResponse` | `public RestResponse()` | constructor |
| `SetSuccessful` | `public void SetSuccessful(bool successful, string successfulReason)` | method |
| `Create` | `public static RestResponse Create(bool successful, string successfulReason)` | method |
| `TryDequeueMessage` | `public RestResponseMessage TryDequeueMessage()` | method |
| `ClearMessageQueue` | `public void ClearMessageQueue()` | method |
| `EnqueueMessage` | `public void EnqueueMessage(RestResponseMessage message)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface RestData](../RestData/)
- [same namespace AliveMessage](../AliveMessage/)
- [same namespace ClientRestSession](../ClientRestSession/)
- [same namespace ConnectMessage](../ConnectMessage/)
- [same namespace DisconnectMessage](../DisconnectMessage/)
