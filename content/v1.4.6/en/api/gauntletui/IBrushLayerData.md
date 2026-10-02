---
title: "IBrushLayerData"
description: "IBrushLayerData: a public interface in TaleWorlds.GauntletUI; 35 exposed members (3 methods, 32 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs."
---
# IBrushLayerData

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public interface IBrushLayerData`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs`

## Overview

IBrushLayerData lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs. It is a public interface; the inheritance chain is IBrushLayerData. It exposes 35 public/protected members: 3 methods, 32 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBrushLayerData is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain IBrushLayerData. The surface is property-led (properties 32/35, methods 3/35), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `string Name` | property |
| `Sprite` | `Sprite Sprite` | property |
| `Color` | `Color Color` | property |
| `ColorFactor` | `float ColorFactor` | property |
| `AlphaFactor` | `float AlphaFactor` | property |
| `HueFactor` | `float HueFactor` | property |
| `SaturationFactor` | `float SaturationFactor` | property |
| `ValueFactor` | `float ValueFactor` | property |
| `IsHidden` | `bool IsHidden` | property |
| `XOffset` | `float XOffset` | property |
| `YOffset` | `float YOffset` | property |
| `Rotation` | `float Rotation` | property |
| `ExtendLeft` | `float ExtendLeft` | property |
| `ExtendRight` | `float ExtendRight` | property |
| `ExtendTop` | `float ExtendTop` | property |
| `ExtendBottom` | `float ExtendBottom` | property |
| `OverridenWidth` | `float OverridenWidth` | property |
| `OverridenHeight` | `float OverridenHeight` | property |
| `WidthPolicy` | `BrushLayerSizePolicy WidthPolicy` | property |
| `HeightPolicy` | `BrushLayerSizePolicy HeightPolicy` | property |
| `HorizontalFlip` | `bool HorizontalFlip` | property |
| `VerticalFlip` | `bool VerticalFlip` | property |
| `UseOverlayAlphaAsMask` | `bool UseOverlayAlphaAsMask` | property |
| `OverlayMethod` | `BrushOverlayMethod OverlayMethod` | property |
| `OverlaySprite` | `Sprite OverlaySprite` | property |
| `OverlayXOffset` | `float OverlayXOffset` | property |
| `OverlayYOffset` | `float OverlayYOffset` | property |
| `UseRandomBaseOverlayXOffset` | `bool UseRandomBaseOverlayXOffset` | property |
| `UseRandomBaseOverlayYOffset` | `bool UseRandomBaseOverlayYOffset` | property |
| `ImageFitType` | `ImageFit.ImageFitTypes ImageFitType` | property |
| `ImageFitHorizontalAlignment` | `ImageFit.ImageHorizontalAlignments ImageFitHorizontalAlignment` | property |
| `ImageFitVerticalAlignment` | `ImageFit.ImageVerticalAlignments ImageFitVerticalAlignment` | property |
| `GetValueAsFloat` | `float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | method |
| `GetValueAsColor` | `Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | method |
| `GetValueAsSprite` | `Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
