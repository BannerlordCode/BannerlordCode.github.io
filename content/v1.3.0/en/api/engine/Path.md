---
title: "Path"
description: "Auto-generated class reference for Path."
---
# Path

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Path : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/Path.cs`

## Overview

`Path` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfPoints` | `public int NumberOfPoints { get; }` |
| `TotalDistance` | `public float TotalDistance { get; }` |

## Key Methods

### GetHermiteFrameForDt
`public MatrixFrame GetHermiteFrameForDt(float phase, int first_point)`

**Purpose:** Reads and returns the `hermite frame for dt` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.GetHermiteFrameForDt(0, 0);
```

### GetFrameForDistance
`public MatrixFrame GetFrameForDistance(float distance)`

**Purpose:** Reads and returns the `frame for distance` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.GetFrameForDistance(0);
```

### GetNearestFrameWithValidAlphaForDistance
`public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance, bool searchForward = true, float alphaThreshold = 0.5f)`

**Purpose:** Reads and returns the `nearest frame with valid alpha for distance` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.GetNearestFrameWithValidAlphaForDistance(0, false, 0);
```

### GetFrameAndColorForDistance
`public void GetFrameAndColorForDistance(float distance, out MatrixFrame frame, out Vec3 color)`

**Purpose:** Reads and returns the `frame and color for distance` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
path.GetFrameAndColorForDistance(0, frame, color);
```

### GetArcLength
`public float GetArcLength(int first_point)`

**Purpose:** Reads and returns the `arc length` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.GetArcLength(0);
```

### GetPoints
`public void GetPoints(MatrixFrame points)`

**Purpose:** Reads and returns the `points` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
path.GetPoints(points);
```

### GetTotalLength
`public float GetTotalLength()`

**Purpose:** Reads and returns the `total length` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.GetTotalLength();
```

### GetVersion
`public int GetVersion()`

**Purpose:** Reads and returns the `version` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.GetVersion();
```

### SetFrameOfPoint
`public void SetFrameOfPoint(int pointIndex, ref MatrixFrame frame)`

**Purpose:** Assigns a new value to `frame of point` and updates the object's internal state.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
path.SetFrameOfPoint(0, frame);
```

### SetTangentPositionOfPoint
`public void SetTangentPositionOfPoint(int pointIndex, int tangentIndex, ref Vec3 position)`

**Purpose:** Assigns a new value to `tangent position of point` and updates the object's internal state.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
path.SetTangentPositionOfPoint(0, 0, position);
```

### AddPathPoint
`public int AddPathPoint(int newNodeIndex)`

**Purpose:** Adds `path point` to the current collection or state.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.AddPathPoint(0);
```

### DeletePathPoint
`public void DeletePathPoint(int nodeIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
path.DeletePathPoint(0);
```

### HasValidAlphaAtPathPoint
`public bool HasValidAlphaAtPathPoint(int nodeIndex, float alphaThreshold = 0.5f)`

**Purpose:** Determines whether the current object already holds `valid alpha at path point`.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.HasValidAlphaAtPathPoint(0, 0);
```

### GetName
`public string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of Path from the subsystem API first
Path path = ...;
var result = path.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Path path = ...;
path.GetHermiteFrameForDt(0, 0);
```

## See Also

- [Area Index](../)