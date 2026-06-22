<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Corners`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Corners

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `Corners` is a struct in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GlobalCenter` | `public Vec2 GlobalCenter { get; }` |
| `GlobalForward` | `public Vec2 GlobalForward { get; }` |
| `LocalDimensions` | `public Vec2 LocalDimensions { get; }` |
| `TopLeft` | `public Vec2 TopLeft { get; }` |
| `TopRight` | `public Vec2 TopRight { get; }` |
| `BottomLeft` | `public Vec2 BottomLeft { get; }` |
| `BottomRight` | `public Vec2 BottomRight { get; }` |
| `this` | `public Vec2 this { get; }` |


## Key Methods

### SetGlobalCenter

```csharp
public void SetGlobalCenter(in Vec2 globalCenter)
```

### SetLocalDimensions

```csharp
public void SetLocalDimensions(in Vec2 localDimensions)
```

### Overlaps

```csharp
public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)
```

### Intersects

```csharp
public bool Intersects(in LineSegment2D line, float clearanceMargin)
```

### GetCorners

```csharp
public Oriented2DArea.Corners GetCorners()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)