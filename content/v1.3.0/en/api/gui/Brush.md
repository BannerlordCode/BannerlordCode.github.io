---
title: "Brush"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Brush`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Brush

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Brush`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs`

## Overview

`Brush` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClonedFrom` | `public Brush ClonedFrom { get; }` |
| `OverriddenBrush` | `public Brush OverriddenBrush { get; }` |
| `Name` | `public string Name { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `DefaultStyle` | `public Style DefaultStyle { get; }` |
| `Font` | `public Font Font { get; set; }` |
| `FontStyle` | `public FontStyle FontStyle { get; set; }` |
| `FontSize` | `public int FontSize { get; set; }` |
| `TextHorizontalAlignment` | `public TextHorizontalAlignment TextHorizontalAlignment { get; set; }` |
| `TextVerticalAlignment` | `public TextVerticalAlignment TextVerticalAlignment { get; set; }` |
| `GlobalColorFactor` | `public float GlobalColorFactor { get; set; }` |
| `GlobalAlphaFactor` | `public float GlobalAlphaFactor { get; set; }` |
| `GlobalColor` | `public Color GlobalColor { get; set; }` |
| `SoundProperties` | `public SoundProperties SoundProperties { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
| `VerticalFlip` | `public bool VerticalFlip { get; set; }` |
| `HorizontalFlip` | `public bool HorizontalFlip { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `HueFactor` | `public float HueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `FontColor` | `public Color FontColor { get; set; }` |
| `TextColorFactor` | `public float TextColorFactor { get; set; }` |
| `TextAlphaFactor` | `public float TextAlphaFactor { get; set; }` |
| `TextHueFactor` | `public float TextHueFactor { get; set; }` |
| `TextSaturationFactor` | `public float TextSaturationFactor { get; set; }` |
| `TextValueFactor` | `public float TextValueFactor { get; set; }` |
| `Layers` | `public Dictionary<string, BrushLayer>.ValueCollection Layers { get; }` |
| `DefaultStyleLayer` | `public StyleLayer DefaultStyleLayer { get; }` |
| `DefaultLayer` | `public BrushLayer DefaultLayer { get; }` |
| `Styles` | `public Dictionary<string, Style>.ValueCollection Styles { get; }` |

## Key Methods

### GetStyle
`public Style GetStyle(string name)`

**Purpose:** Gets the current value of `style`.

### GetStyleOrDefault
`public Style GetStyleOrDefault(string name)`

**Purpose:** Gets the current value of `style or default`.

### AddStyle
`public void AddStyle(Style style)`

**Purpose:** Adds `style` to the current collection or state.

### RemoveStyle
`public void RemoveStyle(string styleName)`

**Purpose:** Removes `style` from the current collection or state.

### AddLayer
`public void AddLayer(BrushLayer layer)`

**Purpose:** Adds `layer` to the current collection or state.

### RemoveLayer
`public void RemoveLayer(string layerName)`

**Purpose:** Removes `layer` from the current collection or state.

### GetLayer
`public BrushLayer GetLayer(string name)`

**Purpose:** Gets the current value of `layer`.

### FillFrom
`public void FillFrom(Brush brush)`

**Purpose:** Handles logic related to `fill from`.

### Clone
`public Brush Clone()`

**Purpose:** Handles logic related to `clone`.

### AddAnimation
`public void AddAnimation(BrushAnimation animation)`

**Purpose:** Adds `animation` to the current collection or state.

### GetAnimation
`public BrushAnimation GetAnimation(string name)`

**Purpose:** Gets the current value of `animation`.

### GetAnimations
`public IEnumerable<BrushAnimation> GetAnimations()`

**Purpose:** Gets the current value of `animations`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### IsCloneRelated
`public bool IsCloneRelated(Brush brush)`

**Purpose:** Handles logic related to `is clone related`.

## Usage Example

```csharp
var value = new Brush();
value.GetStyle("example");
```

## See Also

- [Complete Class Catalog](../catalog)