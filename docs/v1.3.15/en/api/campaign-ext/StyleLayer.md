<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StyleLayer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StyleLayer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `StyleLayer` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static StyleLayer CreateFrom(StyleLayer source)
```

### FillFrom

```csharp
public void FillFrom(StyleLayer source)
```

### GetValueAsFloat

```csharp
public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
```

### GetValueAsColor

```csharp
public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
```

### GetValueAsSprite

```csharp
public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
```

### GetIsValueChanged

```csharp
public bool GetIsValueChanged(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)