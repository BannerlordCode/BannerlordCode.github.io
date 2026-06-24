<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StyleLayer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StyleLayer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StyleLayer : IBrushLayerData, IDataSource`
**Base:** `IBrushLayerData`
**Area:** campaign-ext

## Overview

`StyleLayer` lives in `TaleWorlds.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SourceLayer` | `public BrushLayer SourceLayer { get; }` |
| `Version` | `public uint Version { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
| `ImageFitType` | `public ImageFit.ImageFitTypes ImageFitType { get; set; }` |
| `ImageFitHorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments ImageFitHorizontalAlignment { get; }` |
| `ImageFitVerticalAlignment` | `public ImageFit.ImageVerticalAlignments ImageFitVerticalAlignment { get; }` |
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

## Key Methods

### CreateFrom
`public static StyleLayer CreateFrom(StyleLayer source)`

**Purpose:** Creates a new `from` instance or object.

### FillFrom
`public void FillFrom(StyleLayer source)`

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

### GetIsValueChanged
`public bool GetIsValueChanged(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `is value changed`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
StyleLayer.CreateFrom(source);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
