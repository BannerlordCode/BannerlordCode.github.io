<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SimpleRectangle`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SimpleRectangle

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SimpleRectangle` is a struct in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |


## Key Methods

### IsCollide

```csharp
public bool IsCollide(SimpleRectangle other)
```

### GetCenter

```csharp
public Vector2 GetCenter()
```

### IsSubRectOf

```csharp
public bool IsSubRectOf(SimpleRectangle other)
```

### IsValid

```csharp
public bool IsValid()
```

### IsPointInside

```csharp
public bool IsPointInside(Vector2 point)
```

### ReduceToIntersection

```csharp
public void ReduceToIntersection(SimpleRectangle other)
```

### Lerp

```csharp
public static SimpleRectangle Lerp(SimpleRectangle from, SimpleRectangle to, float ratio)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)