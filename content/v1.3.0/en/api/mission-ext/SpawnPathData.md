---
title: "SpawnPathData"
description: "Auto-generated class reference for SpawnPathData."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.Invert();
```

### ClampPathOffset
`public float ClampPathOffset(float pathOffsetRatio)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.ClampPathOffset(0);
```

### GetOffsetOverflow
`public float GetOffsetOverflow(float pathOffset)`

**Purpose:** Reads and returns the `offset overflow` value held by the current object.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetOffsetOverflow(0);
```

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float baseOffset, float targetOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)`

**Purpose:** Reads and returns the `spawn path frame facing target` value held by the current object.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingTarget(0, 0, false, spawnPathPosition, spawnPathDirection, false, 0);
```

### GetSpawnPathFrameFacingPivot
`public void GetSpawnPathFrameFacingPivot(float pathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)`

**Purpose:** Reads and returns the `spawn path frame facing pivot` value held by the current object.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingPivot(0, false, spawnPathPosition, spawnPathDirection);
```

### GetSpawnPathFrameFacingTangentDirection
`public void GetSpawnPathFrameFacingTangentDirection(float baseOffset, int tangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)`

**Purpose:** Reads and returns the `spawn path frame facing tangent direction` value held by the current object.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingTangentDirection(0, 0, spawnPathPosition, spawnPathDirection);
```

### Create
`public static SpawnPathData Create(Scene scene, Path path, float pivotRatio = 0f, bool isInverted = false, SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)`

**Purpose:** Creates a new instance or related entity for the current object.

```csharp
// Static call; no instance required
SpawnPathData.Create(scene, path, 0, false, spawnPathData.SnapMethod.DontSnap);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SpawnPathData entry = ...;
```

## See Also

- [Area Index](../)