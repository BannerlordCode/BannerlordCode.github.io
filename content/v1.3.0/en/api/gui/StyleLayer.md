---
title: "StyleLayer"
description: "Auto-generated class reference for StyleLayer."
---
# StyleLayer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StyleLayer : IBrushLayerData, IDataSource`
**Base:** `IBrushLayerData`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/StyleLayer.cs`

## Overview

`StyleLayer` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SourceLayer` | `public BrushLayer SourceLayer { get; }` |
| `Version` | `public uint Version { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `HueFactor` | `public float HueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |
| `UseOverlayAlphaAsMask` | `public bool UseOverlayAlphaAsMask { get; set; }` |
| `XOffset` | `public float XOffset { get; set; }` |
| `YOffset` | `public float YOffset { get; set; }` |
| `Rotation` | `public float Rotation { get; set; }` |
| `ExtendLeft` | `public float ExtendLeft { get; set; }` |
| `ExtendRight` | `public float ExtendRight { get; set; }` |
| `ExtendTop` | `public float ExtendTop { get; set; }` |
| `ExtendBottom` | `public float ExtendBottom { get; set; }` |
| `OverridenWidth` | `public float OverridenWidth { get; set; }` |
| `OverridenHeight` | `public float OverridenHeight { get; set; }` |
| `WidthPolicy` | `public BrushLayerSizePolicy WidthPolicy { get; set; }` |
| `HeightPolicy` | `public BrushLayerSizePolicy HeightPolicy { get; set; }` |
| `HorizontalFlip` | `public bool HorizontalFlip { get; set; }` |
| `VerticalFlip` | `public bool VerticalFlip { get; set; }` |
| `OverlayMethod` | `public BrushOverlayMethod OverlayMethod { get; set; }` |
| `OverlaySprite` | `public Sprite OverlaySprite { get; set; }` |
| `OverlayXOffset` | `public float OverlayXOffset { get; set; }` |
| `OverlayYOffset` | `public float OverlayYOffset { get; set; }` |
| `UseRandomBaseOverlayXOffset` | `public bool UseRandomBaseOverlayXOffset { get; set; }` |
| `UseRandomBaseOverlayYOffset` | `public bool UseRandomBaseOverlayYOffset { get; set; }` |

## Key Methods

### CreateFrom
`public static StyleLayer CreateFrom(StyleLayer source)`

**Purpose:** Constructs a new `from` entity and returns it to the caller.

```csharp
// Static call; no instance required
StyleLayer.CreateFrom(source);
```

### FillFrom
`public void FillFrom(StyleLayer source)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of StyleLayer from the subsystem API first
StyleLayer styleLayer = ...;
styleLayer.FillFrom(source);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Reads and returns the `value as float` value held by the current object.

```csharp
// Obtain an instance of StyleLayer from the subsystem API first
StyleLayer styleLayer = ...;
var result = styleLayer.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Reads and returns the `value as color` value held by the current object.

```csharp
// Obtain an instance of StyleLayer from the subsystem API first
StyleLayer styleLayer = ...;
var result = styleLayer.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Reads and returns the `value as sprite` value held by the current object.

```csharp
// Obtain an instance of StyleLayer from the subsystem API first
StyleLayer styleLayer = ...;
var result = styleLayer.GetValueAsSprite(propertyType);
```

### GetIsValueChanged
`public bool GetIsValueChanged(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Reads and returns the `is value changed` value held by the current object.

```csharp
// Obtain an instance of StyleLayer from the subsystem API first
StyleLayer styleLayer = ...;
var result = styleLayer.GetIsValueChanged(propertyType);
```

## Usage Example

```csharp
StyleLayer.CreateFrom(source);
```

## See Also

- [Area Index](../)