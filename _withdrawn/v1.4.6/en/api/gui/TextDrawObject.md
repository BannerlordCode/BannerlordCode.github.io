---
title: "TextDrawObject"
description: "TextDrawObject: a public struct in TaleWorlds.TwoDimension, inheriting IDrawObject; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/TextDrawObject.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextDrawObject

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct TextDrawObject : IDrawObject`
**File:** `TaleWorlds.TwoDimension/TextDrawObject.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

TextDrawObject lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/TextDrawObject.cs. It is a public struct, implementing/inheriting IDrawObject; the inheritance chain is TextDrawObject → IDrawObject. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextDrawObject lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain TextDrawObject → IDrawObject. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/TextDrawObject.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Invalid` | `public static TextDrawObject Invalid` | property |
| `Create` | `public static TextDrawObject Create(float[]vertices, float[]uvs, uint[]indices, float text_MeshWidth, float text_MeshHeight, in Rectangle2D rectangle)` | method |
| `ConvertToHashInPlace` | `public void ConvertToHashInPlace()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IDrawObject](../IDrawObject/)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
