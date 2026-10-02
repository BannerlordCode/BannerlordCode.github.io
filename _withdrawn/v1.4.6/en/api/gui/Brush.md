---
title: "Brush"
description: "Brush: a public class in TaleWorlds.GauntletUI; 48 exposed members (14 methods, 33 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Brush

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class Brush`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

Brush lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs. It is a public class; the inheritance chain is Brush. It exposes 48 public/protected members: 14 methods, 33 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Brush lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain Brush. The surface is property-led (properties 33/48, methods 14/48), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClonedFrom` | `public Brush ClonedFrom` | property |
| `OverriddenBrush` | `public Brush OverriddenBrush` | property |
| `Name` | `public string Name` | property |
| `TransitionDuration` | `public float TransitionDuration` | property |
| `DefaultStyle` | `public Style DefaultStyle` | property |
| `Font` | `public Font Font` | property |
| `FontStyle` | `public FontStyle FontStyle` | property |
| `FontSize` | `public int FontSize` | property |
| `TextHorizontalAlignment` | `public TextHorizontalAlignment TextHorizontalAlignment` | property |
| `TextVerticalAlignment` | `public TextVerticalAlignment TextVerticalAlignment` | property |
| `GlobalColorFactor` | `public float GlobalColorFactor` | property |
| `GlobalAlphaFactor` | `public float GlobalAlphaFactor` | property |
| `GlobalColor` | `public Color GlobalColor` | property |
| `SoundProperties` | `public SoundProperties SoundProperties` | property |
| `Sprite` | `public Sprite Sprite` | property |
| `VerticalFlip` | `public bool VerticalFlip` | property |
| `HorizontalFlip` | `public bool HorizontalFlip` | property |
| `Color` | `public Color Color` | property |
| `ColorFactor` | `public float ColorFactor` | property |
| `AlphaFactor` | `public float AlphaFactor` | property |
| `HueFactor` | `public float HueFactor` | property |
| `SaturationFactor` | `public float SaturationFactor` | property |
| `ValueFactor` | `public float ValueFactor` | property |
| `FontColor` | `public Color FontColor` | property |
| `TextColorFactor` | `public float TextColorFactor` | property |
| `TextAlphaFactor` | `public float TextAlphaFactor` | property |
| `TextHueFactor` | `public float TextHueFactor` | property |
| `TextSaturationFactor` | `public float TextSaturationFactor` | property |
| `TextValueFactor` | `public float TextValueFactor` | property |
| `Layers` | `public Dictionary<string, BrushLayer>.ValueCollection Layers` | property |
| `DefaultStyleLayer` | `public StyleLayer DefaultStyleLayer` | property |
| `DefaultLayer` | `public BrushLayer DefaultLayer` | property |
| `Brush` | `public Brush()` | constructor |
| `GetStyle` | `public Style GetStyle(string name)` | method |
| `Styles` | `public Dictionary<string, Style>.ValueCollection Styles` | property |
| `GetStyleOrDefault` | `public Style GetStyleOrDefault(string name)` | method |
| `AddStyle` | `public void AddStyle(Style style)` | method |
| `RemoveStyle` | `public void RemoveStyle(string styleName)` | method |
| `AddLayer` | `public void AddLayer(BrushLayer layer)` | method |
| `RemoveLayer` | `public void RemoveLayer(string layerName)` | method |
| `GetLayer` | `public BrushLayer GetLayer(string name)` | method |
| `FillFrom` | `public void FillFrom(Brush brush)` | method |
| `Clone` | `public Brush Clone()` | method |
| `AddAnimation` | `public void AddAnimation(BrushAnimation animation)` | method |
| `GetAnimation` | `public BrushAnimation GetAnimation(string name)` | method |
| `IEnumerable` | `public IEnumerable<BrushAnimation>GetAnimations()` | method |
| `ToString` | `public override string ToString()` | method |
| `IsCloneRelated` | `public bool IsCloneRelated(Brush brush)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
