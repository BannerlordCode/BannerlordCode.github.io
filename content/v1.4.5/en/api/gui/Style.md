---
title: "Style"
description: "Auto-generated class reference for Style."
---
# Style

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Style : IDataSource`
**Base:** `IDataSource`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/Style.cs`

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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
style.FillFrom(style);
```

### AddLayer
`public void AddLayer(StyleLayer layer)`

**Purpose:** Adds `layer` to the current collection or state.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
style.AddLayer(layer);
```

### RemoveLayer
`public void RemoveLayer(string layerName)`

**Purpose:** Removes `layer` from the current collection or state.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
style.RemoveLayer("example");
```

### GetLayer
`public StyleLayer GetLayer(int index)`

**Purpose:** Reads and returns the `layer` value held by the current object.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
var result = style.GetLayer(0);
```

### GetLayer
`public StyleLayer GetLayer(string name)`

**Purpose:** Reads and returns the `layer` value held by the current object.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
var result = style.GetLayer("example");
```

### GetLayers
`public StyleLayer GetLayers()`

**Purpose:** Reads and returns the `layers` value held by the current object.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
var result = style.GetLayers();
```

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**Purpose:** Constructs a new `text material` entity and returns it to the caller.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
var result = style.CreateTextMaterial(drawContext);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Reads and returns the `value as float` value held by the current object.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
var result = style.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Reads and returns the `value as color` value held by the current object.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
var result = style.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Reads and returns the `value as sprite` value held by the current object.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
var result = style.GetValueAsSprite(propertyType);
```

### SetAsDefaultStyle
`public void SetAsDefaultStyle()`

**Purpose:** Assigns a new value to `as default style` and updates the object's internal state.

```csharp
// Obtain an instance of Style from the subsystem API first
Style style = ...;
style.SetAsDefaultStyle();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Style style = ...;
style.FillFrom(style);
```

## See Also

- [Area Index](../)