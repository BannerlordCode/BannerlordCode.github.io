<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushRenderer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushRenderer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BrushRenderer` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `LastUpdatedFrameNumber` | `public ulong LastUpdatedFrameNumber { get; }` |
| `ForcePixelPerfectPlacement` | `public bool ForcePixelPerfectPlacement { get; set; }` |
| `CurrentStyle` | `public Style CurrentStyle { get; set; }` |
| `Brush` | `public Brush Brush { get; set; }` |
| `CurrentState` | `public string CurrentState { get; set; }` |


## Key Methods

### Update

```csharp
public void Update(ulong frameNumber, float globalAnimTime, float dt)
```

### IsUpdateNeeded

```csharp
public bool IsUpdateNeeded()
```

### Render

```csharp
public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2), Vector2 overlaySize = default(Vector2))
```

### CreateTextMaterial

```csharp
public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)
```

### RestartAnimation

```csharp
public void RestartAnimation()
```

### SetSeed

```csharp
public void SetSeed(int seed)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)