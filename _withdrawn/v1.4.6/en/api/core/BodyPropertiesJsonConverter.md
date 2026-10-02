---
title: "BodyPropertiesJsonConverter"
description: "BodyPropertiesJsonConverter: a public class in TaleWorlds.Core, inheriting JsonConverter; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.Core/BodyPropertiesJsonConverter.cs."
---
# BodyPropertiesJsonConverter

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BodyPropertiesJsonConverter : JsonConverter`
**File:** `TaleWorlds.Core/BodyPropertiesJsonConverter.cs`

## Overview

BodyPropertiesJsonConverter lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BodyPropertiesJsonConverter.cs. It is a public class, implementing/inheriting JsonConverter; the inheritance chain is BodyPropertiesJsonConverter → JsonConverter. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BodyPropertiesJsonConverter is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain BodyPropertiesJsonConverter → JsonConverter. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. JsonConverter on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BodyPropertiesJsonConverter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanConvert` | `public override bool CanConvert(Type objectType)` | method |
| `ReadJson` | `public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)` | method |
| `CanWrite` | `public override bool CanWrite` | property |
| `WriteJson` | `public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
