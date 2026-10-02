---
title: "TwoDimensionDrawContext"
description: "TwoDimensionDrawContext: a public class in TaleWorlds.TwoDimension; 20 exposed members (13 methods, 6 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TwoDimensionDrawContext

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class TwoDimensionDrawContext`
**File:** `TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

TwoDimensionDrawContext lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs. It is a public class; the inheritance chain is TwoDimensionDrawContext. It exposes 20 public/protected members: 13 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TwoDimensionDrawContext lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain TwoDimensionDrawContext. The surface is method-led (methods 13/20, properties 6/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ScissorTestEnabled` | `public bool ScissorTestEnabled` | property |
| `CircularMaskEnabled` | `public bool CircularMaskEnabled` | property |
| `CircularMaskCenter` | `public Vector2 CircularMaskCenter` | property |
| `CircularMaskRadius` | `public float CircularMaskRadius` | property |
| `CircularMaskSmoothingRadius` | `public float CircularMaskSmoothingRadius` | property |
| `CurrentScissor` | `public ScissorTestInfo CurrentScissor` | property |
| `TwoDimensionDrawContext` | `public TwoDimensionDrawContext()` | constructor |
| `Reset` | `public void Reset()` | method |
| `CreateSimpleMaterial` | `public SimpleMaterial CreateSimpleMaterial()` | method |
| `CreateTextMaterial` | `public TextMaterial CreateTextMaterial()` | method |
| `PushScissor` | `public void PushScissor(in Rectangle2D newScissorRectangle)` | method |
| `PopScissor` | `public void PopScissor()` | method |
| `IsDiscardedByAnyScissor` | `public bool IsDiscardedByAnyScissor(in Rectangle2D rect)` | method |
| `SetCircualMask` | `public void SetCircualMask(Vector2 position, float radius, float smoothingRadius)` | method |
| `ClearCircualMask` | `public void ClearCircualMask()` | method |
| `DrawTo` | `public void DrawTo(TwoDimensionContext twoDimensionContext)` | method |
| `DrawSprite` | `public void DrawSprite(Sprite sprite, SimpleMaterial material, in Rectangle2D rectangle, float scale)` | method |
| `Draw` | `public void Draw(SimpleMaterial material, in ImageDrawObject drawObject)` | method |
| `Draw` | `public void Draw(TextMaterial material, in TextDrawObject drawObject)` | method |
| `Draw` | `public void Draw(Text text, TextMaterial materialOriginal, in Rectangle2D parentRectangle, in Rectangle2D rectangle)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
