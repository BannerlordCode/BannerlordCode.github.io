---
title: "SpawnPathData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnPathData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnPathData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnPathData.cs`

## Overview

`SpawnPathData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SpawnPathData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### Invert
`public SpawnPathData Invert()`

**Purpose:** Handles logic related to `invert`.

### ClampPathOffset
`public void ClampPathOffset(ref float relativePathOffset)`

**Purpose:** Handles logic related to `clamp path offset`.

### ConvertPointToRelativePathOffset
`public float ConvertPointToRelativePathOffset(int pointIndex)`

**Purpose:** Handles logic related to `convert point to relative path offset`.

### ConvertRelativePathOffsetToPathDistance
`public float ConvertRelativePathOffsetToPathDistance(float relativePathOffset)`

**Purpose:** Handles logic related to `convert relative path offset to path distance`.

### GetNodeIndexAtPathDistance
`public int GetNodeIndexAtPathDistance(float pathDistance)`

**Purpose:** Gets the current value of `node index at path distance`.

### GetBaseOffset
`public float GetBaseOffset()`

**Purpose:** Gets the current value of `base offset`.

### IsPathOffsetValid
`public bool IsPathOffsetValid(float relativePathOffset)`

**Purpose:** Handles logic related to `is path offset valid`.

### GetOffsetOverflow
`public float GetOffsetOverflow(float relativePathOffset)`

**Purpose:** Gets the current value of `offset overflow`.

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(float relativePathOffset, bool searchNearestValidFrame = false, SearchDirection searchDirection = SearchDirection.Backward)`

**Purpose:** Gets the current value of `spawn frame`.

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float basePathOffset, float targetPathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)`

**Purpose:** Gets the current value of `spawn path frame facing target`.

### Create
`public static SpawnPathData Create(Scene scene, Path path, float pivotOffset, bool isInverted = false, SnapMethod snapType = SnapMethod.DontSnap)`

**Purpose:** Creates a new `create` instance or object.

## Usage Example

```csharp
var value = new SpawnPathData();
```

## See Also

- [Complete Class Catalog](../catalog)