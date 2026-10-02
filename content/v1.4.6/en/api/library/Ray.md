---
title: "Ray"
description: "Ray: a public struct in TaleWorlds.Library; 7 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.Library/Ray.cs."
---
# Ray

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Ray`
**File:** `TaleWorlds.Library/Ray.cs`

## Overview

Ray lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Ray.cs. It is a public struct; the inheritance chain is Ray. It exposes 7 public/protected members: 1 methods, 4 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Ray is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain Ray. The surface is property-led (properties 4/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Ray.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Origin` | `public Vec3 Origin` | property |
| `Direction` | `public Vec3 Direction` | property |
| `MaxDistance` | `public float MaxDistance` | property |
| `EndPoint` | `public Vec3 EndPoint` | property |
| `Ray` | `public Ray(Vec3 origin, Vec3 direction, float maxDistance = 3.4028235E+38f)` | constructor |
| `Ray` | `public Ray(Vec3 origin, Vec3 direction, bool useDirectionLenForMaxDistance)` | constructor |
| `Reset` | `public void Reset(Vec3 origin, Vec3 direction, float maxDistance = 3.4028235E+38f)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
