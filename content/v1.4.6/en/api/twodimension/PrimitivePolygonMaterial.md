---
title: "PrimitivePolygonMaterial"
description: "PrimitivePolygonMaterial: a public class in TaleWorlds.TwoDimension, inheriting Material; 4 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.TwoDimension/PrimitivePolygonMaterial.cs."
---
# PrimitivePolygonMaterial

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class PrimitivePolygonMaterial : Material`
**File:** `TaleWorlds.TwoDimension/PrimitivePolygonMaterial.cs`

## Overview

PrimitivePolygonMaterial lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/PrimitivePolygonMaterial.cs. It is a public class, implementing/inheriting Material; the inheritance chain is PrimitivePolygonMaterial → Material. It exposes 4 public/protected members: 1 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrimitivePolygonMaterial is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain PrimitivePolygonMaterial → Material. The surface is property-led (properties 1/4, methods 0/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/PrimitivePolygonMaterial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Color` | `public Color Color` | property |
| `PrimitivePolygonMaterial` | `public PrimitivePolygonMaterial(Color color) : this(color, 0)` | constructor |
| `PrimitivePolygonMaterial` | `public PrimitivePolygonMaterial(Color color, int renderOrder) : this(color, renderOrder, true)` | constructor |
| `PrimitivePolygonMaterial` | `public PrimitivePolygonMaterial(Color color, int renderOrder, bool blending) : base(blending, renderOrder)` | constructor |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface Material](../Material)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
