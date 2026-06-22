<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BrushState` is a struct in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### FillFrom

```csharp
public void FillFrom(Style style)
```

### LerpFrom

```csharp
public void LerpFrom(BrushState start, Style end, float ratio)
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

### SetValueAsFloat

```csharp
public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)
```

### SetValueAsColor

```csharp
public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)
```

### SetValueAsSprite

```csharp
public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)
```

### CreateTextMaterial

```csharp
public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)