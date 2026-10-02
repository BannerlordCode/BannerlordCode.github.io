---
title: "ApplicationVersionJsonConverter"
description: "ApplicationVersionJsonConverter: a public class in TaleWorlds.Library, inheriting JsonConverter; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/ApplicationVersionJsonConverter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ApplicationVersionJsonConverter

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ApplicationVersionJsonConverter : JsonConverter`
**File:** `TaleWorlds.Library/ApplicationVersionJsonConverter.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

ApplicationVersionJsonConverter lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ApplicationVersionJsonConverter.cs. It is a public class, implementing/inheriting JsonConverter; the inheritance chain is ApplicationVersionJsonConverter → JsonConverter. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ApplicationVersionJsonConverter lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain ApplicationVersionJsonConverter → JsonConverter. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. JsonConverter on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ApplicationVersionJsonConverter.cs or the deep page for this type.

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
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionType](../ApplicationVersionType/)
