---
title: "Material"
description: "Material: a public class in TaleWorlds.TwoDimension; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.TwoDimension/Material.cs."
---
# Material

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public abstract class Material`
**File:** `TaleWorlds.TwoDimension/Material.cs`

## Overview

Material lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/Material.cs. It is a public class (abstract); the inheritance chain is Material. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Material is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain Material. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/Material.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Blending` | `public bool Blending` | property |
| `RenderOrder` | `public int RenderOrder` | property |
| `Material` | `protected Material(bool blending, int renderOrder)` | constructor |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
