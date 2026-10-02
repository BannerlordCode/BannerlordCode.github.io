---
title: "SimpleMaterial"
description: "SimpleMaterial: a public class in TaleWorlds.TwoDimension, inheriting Material; 30 exposed members (4 methods, 22 properties, 0 fields). Source: TaleWorlds.TwoDimension/SimpleMaterial.cs."
---
# SimpleMaterial

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class SimpleMaterial : Material`
**File:** `TaleWorlds.TwoDimension/SimpleMaterial.cs`

## Overview

SimpleMaterial lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/SimpleMaterial.cs. It is a public class, implementing/inheriting Material; the inheritance chain is SimpleMaterial → Material. It exposes 30 public/protected members: 4 methods, 22 properties, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SimpleMaterial is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain SimpleMaterial → Material. The surface is property-led (properties 22/30, methods 4/30), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/SimpleMaterial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | property |
| `Color` | `public Color Color` | property |
| `ColorFactor` | `public float ColorFactor` | property |
| `AlphaFactor` | `public float AlphaFactor` | property |
| `HueFactor` | `public float HueFactor` | property |
| `SaturationFactor` | `public float SaturationFactor` | property |
| `ValueFactor` | `public float ValueFactor` | property |
| `CircularMaskingEnabled` | `public bool CircularMaskingEnabled` | property |
| `CircularMaskingCenter` | `public Vector2 CircularMaskingCenter` | property |
| `CircularMaskingRadius` | `public float CircularMaskingRadius` | property |
| `CircularMaskingSmoothingRadius` | `public float CircularMaskingSmoothingRadius` | property |
| `NinePatchParameters` | `public SpriteNinePatchParameters NinePatchParameters` | property |
| `OverlayEnabled` | `public bool OverlayEnabled` | property |
| `StartCoordinate` | `public Vector2 StartCoordinate` | property |
| `Size` | `public Vector2 Size` | property |
| `OverlayTexture` | `public Texture OverlayTexture` | property |
| `UseOverlayAlphaAsMask` | `public bool UseOverlayAlphaAsMask` | property |
| `Scale` | `public float Scale` | property |
| `OverlayTextureWidth` | `public float OverlayTextureWidth` | property |
| `OverlayTextureHeight` | `public float OverlayTextureHeight` | property |
| `OverlayXOffset` | `public float OverlayXOffset` | property |
| `OverlayYOffset` | `public float OverlayYOffset` | property |
| `SimpleMaterial` | `public SimpleMaterial() : this(null, 0)` | constructor |
| `SimpleMaterial` | `public SimpleMaterial(Texture texture) : this(texture, 0)` | constructor |
| `SimpleMaterial` | `public SimpleMaterial(Texture texture, int renderOrder) : this(texture, renderOrder, true)` | constructor |
| `SimpleMaterial` | `public SimpleMaterial(Texture texture, int renderOrder, bool blending) : base(blending, renderOrder)` | constructor |
| `Reset` | `public void Reset(Texture texture = null)` | method |
| `GetCircularMaskingCenter` | `public Vec2 GetCircularMaskingCenter()` | method |
| `GetOverlayStartCoordinate` | `public Vec2 GetOverlayStartCoordinate()` | method |
| `GetOverlaySize` | `public Vec2 GetOverlaySize()` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface Material](../Material)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
