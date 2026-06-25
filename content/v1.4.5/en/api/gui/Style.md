---
title: "Style"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Style`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Style

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Style : IDataSource`
**Base:** `IDataSource`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/Style.cs`

## Overview

`Style` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultStyle` | `public Style DefaultStyle { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Version` | `public long Version { get; }` |
| `AnimationToPlayOnBegin` | `public string AnimationToPlayOnBegin { get; set; }` |
| `AnimationMode` | `public StyleAnimationMode AnimationMode { get; set; }` |
| `FontColor` | `public Color FontColor { get; set; }` |
| `TextGlowColor` | `public Color TextGlowColor { get; set; }` |
| `TextOutlineColor` | `public Color TextOutlineColor { get; set; }` |
| `TextOutlineAmount` | `public float TextOutlineAmount { get; set; }` |
| `TextGlowRadius` | `public float TextGlowRadius { get; set; }` |
| `TextBlur` | `public float TextBlur { get; set; }` |
| `TextShadowOffset` | `public float TextShadowOffset { get; set; }` |
| `TextShadowAngle` | `public float TextShadowAngle { get; set; }` |
| `TextColorFactor` | `public float TextColorFactor { get; set; }` |
| `TextAlphaFactor` | `public float TextAlphaFactor { get; set; }` |
| `TextHueFactor` | `public float TextHueFactor { get; set; }` |
| `TextSaturationFactor` | `public float TextSaturationFactor { get; set; }` |
| `TextValueFactor` | `public float TextValueFactor { get; set; }` |
| `XOffset` | `public float XOffset { get; set; }` |
| `YOffset` | `public float YOffset { get; set; }` |
| `Font` | `public Font Font { get; set; }` |
| `FontStyle` | `public FontStyle FontStyle { get; set; }` |
| `FontSize` | `public int FontSize { get; set; }` |

## Key Methods

### FillFrom
`public void FillFrom(Style style)`

**Purpose:** Handles logic related to `fill from`.

### AddLayer
`public void AddLayer(StyleLayer layer)`

**Purpose:** Adds `layer` to the current collection or state.

### RemoveLayer
`public void RemoveLayer(string layerName)`

**Purpose:** Removes `layer` from the current collection or state.

### GetLayer
`public StyleLayer GetLayer(int index)`

**Purpose:** Gets the current value of `layer`.

### GetLayer
`public StyleLayer GetLayer(string name)`

**Purpose:** Gets the current value of `layer`.

### GetLayers
`public StyleLayer GetLayers()`

**Purpose:** Gets the current value of `layers`.

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**Purpose:** Creates a new `text material` instance or object.

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as float`.

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as color`.

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as sprite`.

### SetAsDefaultStyle
`public void SetAsDefaultStyle()`

**Purpose:** Sets the value or state of `as default style`.

## Usage Example

```csharp
var value = new Style();
value.FillFrom(style);
```

## See Also

- [Complete Class Catalog](../catalog)