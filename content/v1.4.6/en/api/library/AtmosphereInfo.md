---
title: "AtmosphereInfo"
description: "AtmosphereInfo: a public struct in TaleWorlds.Library; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/AtmosphereInfo.cs."
---
# AtmosphereInfo

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct AtmosphereInfo`
**File:** `TaleWorlds.Library/AtmosphereInfo.cs`

## Overview

AtmosphereInfo lives in the TaleWorlds.Library module, source file TaleWorlds.Library/AtmosphereInfo.cs. It is a public struct; the inheritance chain is AtmosphereInfo. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AtmosphereInfo is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain AtmosphereInfo. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/AtmosphereInfo.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `GetInvalidAtmosphereInfo` | `public static AtmosphereInfo GetInvalidAtmosphereInfo()` | method |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | method |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
