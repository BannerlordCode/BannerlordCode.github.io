---
title: "AccessObjectJsonConverter"
description: "AccessObjectJsonConverter: a public class in TaleWorlds.Diamond, inheriting JsonConverter; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/AccessObjectJsonConverter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AccessObjectJsonConverter

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class AccessObjectJsonConverter : JsonConverter`
**File:** `TaleWorlds.Diamond/AccessObjectJsonConverter.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

AccessObjectJsonConverter lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/AccessObjectJsonConverter.cs. It is a public class, implementing/inheriting JsonConverter; the inheritance chain is AccessObjectJsonConverter → JsonConverter. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AccessObjectJsonConverter lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain AccessObjectJsonConverter → JsonConverter. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. JsonConverter on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/AccessObjectJsonConverter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | method |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | method |
| `CanWrite` | `public override bool CanWrite` | property |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
- [same namespace Client](../Client__1/)
