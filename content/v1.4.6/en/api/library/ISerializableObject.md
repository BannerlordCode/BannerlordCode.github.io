---
title: "ISerializableObject"
description: "ISerializableObject: a public interface in TaleWorlds.Library; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/ISerializableObject.cs."
---
# ISerializableObject

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface ISerializableObject`
**File:** `TaleWorlds.Library/ISerializableObject.cs`

## Overview

ISerializableObject lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ISerializableObject.cs. It is a public interface; the inheritance chain is ISerializableObject. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ISerializableObject is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ISerializableObject. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ISerializableObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeserializeFrom` | `void DeserializeFrom(IReader reader);` | method |
| `SerializeTo` | `void SerializeTo(IWriter writer);` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
