---
title: "SpawnPathData"
description: "Auto-generated class reference for SpawnPathData."
---
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnPathData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnPathData.cs`

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

**Purpose:** Executes the Invert logic.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.Invert();
```

### ClampPathOffset
`public void ClampPathOffset(ref float relativePathOffset)`

**Purpose:** Executes the ClampPathOffset logic.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
spawnPathData.ClampPathOffset(relativePathOffset);
```

### ConvertPointToRelativePathOffset
`public float ConvertPointToRelativePathOffset(int pointIndex)`

**Purpose:** Converts point to relative path offset into another representation or type.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.ConvertPointToRelativePathOffset(0);
```

### ConvertRelativePathOffsetToPathDistance
`public float ConvertRelativePathOffsetToPathDistance(float relativePathOffset)`

**Purpose:** Converts relative path offset to path distance into another representation or type.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.ConvertRelativePathOffsetToPathDistance(0);
```

### GetNodeIndexAtPathDistance
`public int GetNodeIndexAtPathDistance(float pathDistance)`

**Purpose:** Reads and returns the node index at path distance value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetNodeIndexAtPathDistance(0);
```

### GetBaseOffset
`public float GetBaseOffset()`

**Purpose:** Reads and returns the base offset value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetBaseOffset();
```

### IsPathOffsetValid
`public bool IsPathOffsetValid(float relativePathOffset)`

**Purpose:** Determines whether the this instance is in the path offset valid state or condition.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.IsPathOffsetValid(0);
```

### GetOffsetOverflow
`public float GetOffsetOverflow(float relativePathOffset)`

**Purpose:** Reads and returns the offset overflow value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetOffsetOverflow(0);
```

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(float relativePathOffset, bool searchNearestValidFrame = false, SearchDirection searchDirection = SearchDirection.Backward)`

**Purpose:** Reads and returns the spawn frame value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetSpawnFrame(0, false, searchDirection.Backward);
```

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float basePathOffset, float targetPathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)`

**Purpose:** Reads and returns the spawn path frame facing target value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingTarget(0, 0, false, spawnPathPosition, spawnPathDirection, false, 0);
```

### Create
`public static SpawnPathData Create(Scene scene, Path path, float pivotOffset, bool isInverted = false, SnapMethod snapType = SnapMethod.DontSnap)`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
SpawnPathData.Create(scene, path, 0, false, snapMethod.DontSnap);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SpawnPathData entry = ...;
```

## See Also

- [Area Index](../)