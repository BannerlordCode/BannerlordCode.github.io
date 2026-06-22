<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionDrawContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionDrawContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TwoDimensionDrawContext` is a class in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ScissorTestEnabled` | `public bool ScissorTestEnabled { get; }` |
| `CircularMaskEnabled` | `public bool CircularMaskEnabled { get; }` |
| `CircularMaskCenter` | `public Vector2 CircularMaskCenter { get; }` |
| `CircularMaskRadius` | `public float CircularMaskRadius { get; }` |
| `CircularMaskSmoothingRadius` | `public float CircularMaskSmoothingRadius { get; }` |
| `CurrentScissor` | `public ScissorTestInfo CurrentScissor { get; }` |


## Key Methods

### Reset

```csharp
public void Reset()
```

### CreateSimpleMaterial

```csharp
public SimpleMaterial CreateSimpleMaterial()
```

### CreateTextMaterial

```csharp
public TextMaterial CreateTextMaterial()
```

### PushScissor

```csharp
public void PushScissor(in Rectangle2D newScissorRectangle)
```

### PopScissor

```csharp
public void PopScissor()
```

### IsDiscardedByAnyScissor

```csharp
public bool IsDiscardedByAnyScissor(in Rectangle2D rect)
```

### SetCircualMask

```csharp
public void SetCircualMask(Vector2 position, float radius, float smoothingRadius)
```

### ClearCircualMask

```csharp
public void ClearCircualMask()
```

### DrawTo

```csharp
public void DrawTo(TwoDimensionContext twoDimensionContext)
```

### DrawSprite

```csharp
public void DrawSprite(Sprite sprite, SimpleMaterial material, in Rectangle2D rectangle, float scale)
```

### Draw

```csharp
public void Draw(SimpleMaterial material, in ImageDrawObject drawObject)
```

### Draw

```csharp
public void Draw(TextMaterial material, in TextDrawObject drawObject)
```

### Draw

```csharp
public void Draw(Text text, TextMaterial materialOriginal, in Rectangle2D parentRectangle, in Rectangle2D rectangle)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)