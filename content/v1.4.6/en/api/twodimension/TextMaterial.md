---
title: "TextMaterial"
description: "TextMaterial: a public class in TaleWorlds.TwoDimension, inheriting Material; 22 exposed members (1 methods, 17 properties, 0 fields). Source: TaleWorlds.TwoDimension/TextMaterial.cs."
---
# TextMaterial

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class TextMaterial : Material`
**File:** `TaleWorlds.TwoDimension/TextMaterial.cs`

## Overview

TextMaterial lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/TextMaterial.cs. It is a public class, implementing/inheriting Material; the inheritance chain is TextMaterial → Material. It exposes 22 public/protected members: 1 methods, 17 properties, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextMaterial is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain TextMaterial → Material. The surface is property-led (properties 17/22, methods 1/22), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/TextMaterial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | property |
| `Color` | `public Color Color` | property |
| `SmoothingConstant` | `public float SmoothingConstant` | property |
| `Smooth` | `public bool Smooth` | property |
| `ScaleFactor` | `public float ScaleFactor` | property |
| `GlowColor` | `public Color GlowColor` | property |
| `OutlineColor` | `public Color OutlineColor` | property |
| `OutlineAmount` | `public float OutlineAmount` | property |
| `GlowRadius` | `public float GlowRadius` | property |
| `Blur` | `public float Blur` | property |
| `ShadowOffset` | `public float ShadowOffset` | property |
| `ShadowAngle` | `public float ShadowAngle` | property |
| `ColorFactor` | `public float ColorFactor` | property |
| `AlphaFactor` | `public float AlphaFactor` | property |
| `HueFactor` | `public float HueFactor` | property |
| `SaturationFactor` | `public float SaturationFactor` | property |
| `ValueFactor` | `public float ValueFactor` | property |
| `TextMaterial` | `public TextMaterial() : this(null, 0)` | constructor |
| `TextMaterial` | `public TextMaterial(Texture texture) : this(texture, 0)` | constructor |
| `TextMaterial` | `public TextMaterial(Texture texture, int renderOrder) : this(texture, renderOrder, true)` | constructor |
| `TextMaterial` | `public TextMaterial(Texture texture, int renderOrder, bool blending) : base(blending, renderOrder)` | constructor |
| `CopyFrom` | `public void CopyFrom(TextMaterial sourceMaterial)` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface Material](../Material)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
