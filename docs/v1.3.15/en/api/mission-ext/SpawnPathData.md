<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnPathData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SpawnPathData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SpawnPathData.cs`

## Overview

`SpawnPathData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### Invert
```csharp
public SpawnPathData Invert()
```

### ClampPathOffset
```csharp
public float ClampPathOffset(float pathOffsetRatio)
```

### GetOffsetOverflow
```csharp
public float GetOffsetOverflow(float pathOffset)
```

### GetSpawnPathFrameFacingTarget
```csharp
public void GetSpawnPathFrameFacingTarget(float baseOffset, float targetOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)
```

### GetSpawnPathFrameFacingPivot
```csharp
public void GetSpawnPathFrameFacingPivot(float pathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)
```

### GetSpawnPathFrameFacingTangentDirection
```csharp
public void GetSpawnPathFrameFacingTangentDirection(float baseOffset, int tangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)
```

### Create
```csharp
public static SpawnPathData Create(Scene scene, Path path, float pivotRatio = 0f, bool isInverted = false, SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)
```

## Usage Example

```csharp
// Typical usage of SpawnPathData (Data)
new SpawnPathData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)