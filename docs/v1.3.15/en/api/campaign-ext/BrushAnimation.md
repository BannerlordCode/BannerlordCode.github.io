<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushAnimation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BrushAnimation` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Duration` | `public float Duration { get; set; }` |
| `Loop` | `public bool Loop { get; set; }` |
| `InterpolationType` | `public AnimationInterpolation.Type InterpolationType { get; set; }` |
| `InterpolationFunction` | `public AnimationInterpolation.Function InterpolationFunction { get; set; }` |
| `StyleAnimation` | `public BrushLayerAnimation StyleAnimation { get; set; }` |


## Key Methods

### AddAnimationProperty

```csharp
public void AddAnimationProperty(BrushAnimationProperty property)
```

### RemoveAnimationProperty

```csharp
public void RemoveAnimationProperty(BrushAnimationProperty property)
```

### FillFrom

```csharp
public void FillFrom(BrushAnimation animation)
```

### GetLayerAnimation

```csharp
public BrushLayerAnimation GetLayerAnimation(string name)
```

### GetLayerAnimations

```csharp
public IEnumerable<BrushLayerAnimation> GetLayerAnimations()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)