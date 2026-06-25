---
title: "SpawnPathData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnPathData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SpawnPathData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SpawnPathData.cs`

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
`public float ClampPathOffset(float pathOffsetRatio)`

**Purpose:** Handles logic related to `clamp path offset`.

### GetOffsetOverflow
`public float GetOffsetOverflow(float pathOffset)`

**Purpose:** Gets the current value of `offset overflow`.

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float baseOffset, float targetOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)`

**Purpose:** Gets the current value of `spawn path frame facing target`.

### GetSpawnPathFrameFacingPivot
`public void GetSpawnPathFrameFacingPivot(float pathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)`

**Purpose:** Gets the current value of `spawn path frame facing pivot`.

### GetSpawnPathFrameFacingTangentDirection
`public void GetSpawnPathFrameFacingTangentDirection(float baseOffset, int tangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)`

**Purpose:** Gets the current value of `spawn path frame facing tangent direction`.

### Create
`public static SpawnPathData Create(Scene scene, Path path, float pivotRatio = 0f, bool isInverted = false, SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)`

**Purpose:** Creates a new `create` instance or object.

## Usage Example

```csharp
var value = new SpawnPathData();
```

## See Also

- [Complete Class Catalog](../catalog)