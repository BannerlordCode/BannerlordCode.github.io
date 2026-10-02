---
title: "BrushLayer"
description: "BrushLayer: a public class in TaleWorlds.GauntletUI, inheriting IBrushLayerData; 39 exposed members (5 methods, 33 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrushLayer

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushLayer : IBrushLayerData`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

BrushLayer lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs. It is a public class, implementing/inheriting IBrushLayerData; the inheritance chain is BrushLayer → IBrushLayerData. It exposes 39 public/protected members: 5 methods, 33 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrushLayer lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain BrushLayer → IBrushLayerData. The surface is property-led (properties 33/39, methods 5/39), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Version` | `public uint Version` | property |
| `Name` | `public string Name` | property |
| `Sprite` | `public Sprite Sprite` | property |
| `ImageFitType` | `public ImageFit.ImageFitTypes ImageFitType` | property |
| `ImageFitHorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments ImageFitHorizontalAlignment` | property |
| `ImageFitVerticalAlignment` | `public ImageFit.ImageVerticalAlignments ImageFitVerticalAlignment` | property |
| `Color` | `public Color Color` | property |
| `ColorFactor` | `public float ColorFactor` | property |
| `AlphaFactor` | `public float AlphaFactor` | property |
| `HueFactor` | `public float HueFactor` | property |
| `SaturationFactor` | `public float SaturationFactor` | property |
| `ValueFactor` | `public float ValueFactor` | property |
| `IsHidden` | `public bool IsHidden` | property |
| `UseOverlayAlphaAsMask` | `public bool UseOverlayAlphaAsMask` | property |
| `XOffset` | `public float XOffset` | property |
| `YOffset` | `public float YOffset` | property |
| `Rotation` | `public float Rotation` | property |
| `ExtendLeft` | `public float ExtendLeft` | property |
| `ExtendRight` | `public float ExtendRight` | property |
| `ExtendTop` | `public float ExtendTop` | property |
| `ExtendBottom` | `public float ExtendBottom` | property |
| `OverridenWidth` | `public float OverridenWidth` | property |
| `OverridenHeight` | `public float OverridenHeight` | property |
| `WidthPolicy` | `public BrushLayerSizePolicy WidthPolicy` | property |
| `HeightPolicy` | `public BrushLayerSizePolicy HeightPolicy` | property |
| `HorizontalFlip` | `public bool HorizontalFlip` | property |
| `VerticalFlip` | `public bool VerticalFlip` | property |
| `OverlayMethod` | `public BrushOverlayMethod OverlayMethod` | property |
| `OverlaySprite` | `public Sprite OverlaySprite` | property |
| `OverlayXOffset` | `public float OverlayXOffset` | property |
| `OverlayYOffset` | `public float OverlayYOffset` | property |
| `UseRandomBaseOverlayXOffset` | `public bool UseRandomBaseOverlayXOffset` | property |
| `UseRandomBaseOverlayYOffset` | `public bool UseRandomBaseOverlayYOffset` | property |
| `BrushLayer` | `public BrushLayer()` | constructor |
| `FillFrom` | `public void FillFrom(BrushLayer brushLayer)` | method |
| `GetValueAsFloat` | `public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `GetValueAsColor` | `public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IBrushLayerData](../IBrushLayerData/)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
