<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushLayerState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushLayerState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BrushLayerState` is a struct in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### FillFrom

```csharp
public void FillFrom(IBrushLayerData styleLayer)
```

### LerpFrom

```csharp
public void LerpFrom(BrushLayerState start, IBrushLayerData end, float ratio)
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

### SetValueAsLerpOfValues

```csharp
public static void SetValueAsLerpOfValues(ref BrushLayerState currentState, in BrushAnimationKeyFrame startValue, in BrushAnimationKeyFrame endValue, BrushAnimationProperty.BrushAnimationPropertyType propertyType, float ratio)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)