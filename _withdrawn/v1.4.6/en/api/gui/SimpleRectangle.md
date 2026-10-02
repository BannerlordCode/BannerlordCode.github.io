---
title: "SimpleRectangle"
description: "SimpleRectangle: a public struct in TaleWorlds.TwoDimension; 10 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/SimpleRectangle.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SimpleRectangle

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct SimpleRectangle`
**File:** `TaleWorlds.TwoDimension/SimpleRectangle.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

SimpleRectangle lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/SimpleRectangle.cs. It is a public struct; the inheritance chain is SimpleRectangle. It exposes 10 public/protected members: 7 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SimpleRectangle lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain SimpleRectangle. The surface is method-led (methods 7/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/SimpleRectangle.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Width` | `public float Width` | property |
| `Height` | `public float Height` | property |
| `SimpleRectangle` | `public SimpleRectangle(float x, float y, float width, float height)` | constructor |
| `IsCollide` | `public bool IsCollide(SimpleRectangle other)` | method |
| `GetCenter` | `public Vector2 GetCenter()` | method |
| `IsSubRectOf` | `public bool IsSubRectOf(SimpleRectangle other)` | method |
| `IsValid` | `public bool IsValid()` | method |
| `IsPointInside` | `public bool IsPointInside(Vector2 point)` | method |
| `ReduceToIntersection` | `public void ReduceToIntersection(SimpleRectangle other)` | method |
| `Lerp` | `public static SimpleRectangle Lerp(SimpleRectangle from, SimpleRectangle to, float ratio)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
