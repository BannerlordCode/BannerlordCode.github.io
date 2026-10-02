---
title: "Oriented2DArea"
description: "Oriented2DArea: a public struct in TaleWorlds.Library; 11 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Oriented2DArea.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Oriented2DArea

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Oriented2DArea`
**File:** `TaleWorlds.Library/Oriented2DArea.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Oriented2DArea lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Oriented2DArea.cs. It is a public struct; the inheritance chain is Oriented2DArea. It exposes 11 public/protected members: 5 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Oriented2DArea lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Oriented2DArea. The surface is method-led (methods 5/11, properties 4/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Oriented2DArea.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GlobalCenter` | `public Vec2 GlobalCenter` | property |
| `GlobalForward` | `public Vec2 GlobalForward` | property |
| `LocalDimensions` | `public Vec2 LocalDimensions` | property |
| `Oriented2DArea` | `public Oriented2DArea(in Vec2 globalCenter, in Vec2 globalForward, in Vec2 localDimensions)` | constructor |
| `SetGlobalCenter` | `public void SetGlobalCenter(in Vec2 globalCenter)` | method |
| `SetLocalDimensions` | `public void SetLocalDimensions(in Vec2 localDimensions)` | method |
| `Overlaps` | `public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)` | method |
| `Intersects` | `public bool Intersects(in LineSegment2D line, float clearanceMargin)` | method |
| `GetCorners` | `public Oriented2DArea.Corners GetCorners()` | method |
| `Corners` | `public struct Corners` | property |
| `Corners` | `public struct Corners` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
