---
title: "Style"
description: "Style: a public class in TaleWorlds.GauntletUI, inheriting IDataSource; 37 exposed members (11 methods, 25 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs."
---
# Style

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class Style : IDataSource`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs`

## Overview

Style lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs. It is a public class, implementing/inheriting IDataSource; the inheritance chain is Style → IDataSource. It exposes 37 public/protected members: 11 methods, 25 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Style is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain Style → IDataSource. The surface is property-led (properties 25/37, methods 11/37), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultStyle` | `public Style DefaultStyle` | property |
| `Name` | `public string Name` | property |
| `Version` | `public long Version` | property |
| `AnimationToPlayOnBegin` | `public string AnimationToPlayOnBegin` | property |
| `LayerCount` | `public int LayerCount` | property |
| `DefaultLayer` | `public StyleLayer DefaultLayer` | property |
| `AnimationMode` | `public StyleAnimationMode AnimationMode` | property |
| `FontColor` | `public Color FontColor` | property |
| `TextGlowColor` | `public Color TextGlowColor` | property |
| `TextOutlineColor` | `public Color TextOutlineColor` | property |
| `TextOutlineAmount` | `public float TextOutlineAmount` | property |
| `TextGlowRadius` | `public float TextGlowRadius` | property |
| `TextBlur` | `public float TextBlur` | property |
| `TextShadowOffset` | `public float TextShadowOffset` | property |
| `TextShadowAngle` | `public float TextShadowAngle` | property |
| `TextColorFactor` | `public float TextColorFactor` | property |
| `TextAlphaFactor` | `public float TextAlphaFactor` | property |
| `TextHueFactor` | `public float TextHueFactor` | property |
| `TextSaturationFactor` | `public float TextSaturationFactor` | property |
| `TextValueFactor` | `public float TextValueFactor` | property |
| `XOffset` | `public float XOffset` | property |
| `YOffset` | `public float YOffset` | property |
| `Font` | `public Font Font` | property |
| `FontStyle` | `public FontStyle FontStyle` | property |
| `FontSize` | `public int FontSize` | property |
| `Style` | `public Style(IEnumerable<BrushLayer>layers)` | constructor |
| `FillFrom` | `public void FillFrom(Style style)` | method |
| `AddLayer` | `public void AddLayer(StyleLayer layer)` | method |
| `RemoveLayer` | `public void RemoveLayer(string layerName)` | method |
| `GetLayer` | `public StyleLayer GetLayer(int index)` | method |
| `GetLayer` | `public StyleLayer GetLayer(string name)` | method |
| `StyleLayer[]GetLayers` | `public StyleLayer[]GetLayers()` | method |
| `CreateTextMaterial` | `public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)` | method |
| `GetValueAsFloat` | `public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `GetValueAsColor` | `public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `SetAsDefaultStyle` | `public void SetAsDefaultStyle()` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IDataSource](../IDataSource)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
