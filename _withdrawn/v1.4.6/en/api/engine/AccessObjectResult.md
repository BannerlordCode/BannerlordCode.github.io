---
title: "AccessObjectResult"
description: "AccessObjectResult: a public class in TaleWorlds.Diamond; 5 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/AccessObjectResult.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AccessObjectResult

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class AccessObjectResult`
**File:** `TaleWorlds.Diamond/AccessObjectResult.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

AccessObjectResult lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/AccessObjectResult.cs. It is a public class; the inheritance chain is AccessObjectResult. It exposes 5 public/protected members: 2 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AccessObjectResult lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain AccessObjectResult. The surface is property-led (properties 3/5, methods 2/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/AccessObjectResult.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AccessObject` | `public AccessObject AccessObject` | property |
| `Success` | `public bool Success` | property |
| `FailReason` | `public TextObject FailReason` | property |
| `CreateSuccess` | `public static AccessObjectResult CreateSuccess(AccessObject accessObject)` | method |
| `CreateFailed` | `public static AccessObjectResult CreateFailed(TextObject failReason)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AesHelper](../AesHelper/)
- [same namespace Client](../Client__1/)
