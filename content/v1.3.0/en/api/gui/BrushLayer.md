---
title: "BrushLayer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushLayer`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrushLayer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushLayer : IBrushLayerData`
**Base:** `IBrushLayerData`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs`

## Overview

`BrushLayer` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Version` | `public uint Version { get; }` |
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

### FillFrom
`public void FillFrom(BrushLayer brushLayer)`

**Purpose:** Handles logic related to `fill from`.

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as float`.

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as color`.

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as sprite`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var value = new BrushLayer();
value.FillFrom(brushLayer);
```

## See Also

- [Complete Class Catalog](../catalog)