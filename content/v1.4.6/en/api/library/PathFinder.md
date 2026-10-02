---
title: "PathFinder"
description: "PathFinder: a public class in TaleWorlds.Library; 7 exposed members (3 methods, 0 properties, 3 fields). Source: TaleWorlds.Library/PathFinder.cs."
---
# PathFinder

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class PathFinder`
**File:** `TaleWorlds.Library/PathFinder.cs`

## Overview

PathFinder lives in the TaleWorlds.Library module, source file TaleWorlds.Library/PathFinder.cs. It is a public class (abstract); the inheritance chain is PathFinder. It exposes 7 public/protected members: 3 methods, 3 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PathFinder is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain PathFinder. The surface is method-led (methods 3/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/PathFinder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PathFinder` | `public PathFinder()` | constructor |
| `Destroy` | `public virtual void Destroy()` | method |
| `Initialize` | `public abstract void Initialize(Vec3 bbSize);` | method |
| `FindPath` | `public abstract bool FindPath(Vec3 wSource, Vec3 wDestination, List<Vec3>path, float craftWidth = 5f);` | method |
| `BuildingCost` | `public static float BuildingCost` | field |
| `WaterCost` | `public static float WaterCost` | field |
| `ShallowWaterCost` | `public static float ShallowWaterCost` | field |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
