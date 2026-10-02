---
title: "HandlerResult"
description: "HandlerResult: a public class in TaleWorlds.Diamond; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/HandlerResult.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HandlerResult

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class HandlerResult`
**File:** `TaleWorlds.Diamond/HandlerResult.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

HandlerResult lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/HandlerResult.cs. It is a public class; the inheritance chain is HandlerResult. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HandlerResult lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain HandlerResult. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/HandlerResult.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsSuccessful` | `public bool IsSuccessful` | property |
| `Error` | `public string Error` | property |
| `NextMessage` | `public Message NextMessage` | property |
| `HandlerResult` | `protected HandlerResult(bool isSuccessful, string error = null, Message followUp = null)` | constructor |
| `CreateSuccessful` | `public static HandlerResult CreateSuccessful()` | method |
| `CreateSuccessful` | `public static HandlerResult CreateSuccessful(Message nextMessage)` | method |
| `CreateFailed` | `public static HandlerResult CreateFailed(string error)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
