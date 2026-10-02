---
title: "LoginResultObjectJsonConverter"
description: "LoginResultObjectJsonConverter: a public class in TaleWorlds.Diamond, inheriting JsonConverter; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/LoginResultObjectJsonConverter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LoginResultObjectJsonConverter

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class LoginResultObjectJsonConverter : JsonConverter`
**File:** `TaleWorlds.Diamond/LoginResultObjectJsonConverter.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

LoginResultObjectJsonConverter lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/LoginResultObjectJsonConverter.cs. It is a public class, implementing/inheriting JsonConverter; the inheritance chain is LoginResultObjectJsonConverter → JsonConverter. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LoginResultObjectJsonConverter lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain LoginResultObjectJsonConverter → JsonConverter. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. JsonConverter on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/LoginResultObjectJsonConverter.cs or the deep page for this type.

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
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
