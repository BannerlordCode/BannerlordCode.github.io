<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PathTracker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PathTracker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `PathTracker` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; set; }` |
| `HasChanged` | `public bool HasChanged { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `HasReachedEnd` | `public bool HasReachedEnd { get; }` |
| `PathTraveledPercentage` | `public float PathTraveledPercentage { get; }` |
| `CurrentFrame` | `public MatrixFrame CurrentFrame { get; }` |


## Key Methods

### UpdateVersion

```csharp
public void UpdateVersion()
```

### PathExists

```csharp
public bool PathExists()
```

### Advance

```csharp
public void Advance(float deltaDistance)
```

### GetPathLength

```csharp
public float GetPathLength()
```

### CurrentFrameAndColor

```csharp
public void CurrentFrameAndColor(out MatrixFrame frame, out Vec3 color)
```

### Reset

```csharp
public void Reset()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)