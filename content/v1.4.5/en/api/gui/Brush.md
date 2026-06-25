---
title: "Brush"
description: "Auto-generated class reference for Brush."
---
# Brush

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Brush`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/Brush.cs`

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

## Key Methods

### GetStyle
`public Style GetStyle(string name)`

**Purpose:** Reads and returns the style value held by the this instance.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
var result = brush.GetStyle("example");
```

### GetStyleOrDefault
`public Style GetStyleOrDefault(string name)`

**Purpose:** Reads and returns the style or default value held by the this instance.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
var result = brush.GetStyleOrDefault("example");
```

### AddStyle
`public void AddStyle(Style style)`

**Purpose:** Adds style to the current collection or state.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
brush.AddStyle(style);
```

### RemoveStyle
`public void RemoveStyle(string styleName)`

**Purpose:** Removes style from the current collection or state.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
brush.RemoveStyle("example");
```

### AddLayer
`public void AddLayer(BrushLayer layer)`

**Purpose:** Adds layer to the current collection or state.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
brush.AddLayer(layer);
```

### RemoveLayer
`public void RemoveLayer(string layerName)`

**Purpose:** Removes layer from the current collection or state.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
brush.RemoveLayer("example");
```

### GetLayer
`public BrushLayer GetLayer(string name)`

**Purpose:** Reads and returns the layer value held by the this instance.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
var result = brush.GetLayer("example");
```

### FillFrom
`public void FillFrom(Brush brush)`

**Purpose:** Executes the FillFrom logic.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
brush.FillFrom(brush);
```

### Clone
`public Brush Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
var result = brush.Clone();
```

### AddAnimation
`public void AddAnimation(BrushAnimation animation)`

**Purpose:** Adds animation to the current collection or state.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
brush.AddAnimation(animation);
```

### GetAnimation
`public BrushAnimation GetAnimation(string name)`

**Purpose:** Reads and returns the animation value held by the this instance.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
var result = brush.GetAnimation("example");
```

### GetAnimations
`public IEnumerable<BrushAnimation> GetAnimations()`

**Purpose:** Reads and returns the animations value held by the this instance.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
var result = brush.GetAnimations();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
var result = brush.ToString();
```

### IsCloneRelated
`public bool IsCloneRelated(Brush brush)`

**Purpose:** Determines whether the this instance is in the clone related state or condition.

```csharp
// Obtain an instance of Brush from the subsystem API first
Brush brush = ...;
var result = brush.IsCloneRelated(brush);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Brush brush = ...;
brush.GetStyle("example");
```

## See Also

- [Area Index](../)