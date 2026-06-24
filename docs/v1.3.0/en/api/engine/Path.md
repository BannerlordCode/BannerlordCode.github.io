<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Path`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `hermite frame for dt`.

### GetFrameForDistance
`public MatrixFrame GetFrameForDistance(float distance)`

**Purpose:** Gets the current value of `frame for distance`.

### GetNearestFrameWithValidAlphaForDistance
`public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance, bool searchForward = true, float alphaThreshold = 0.5f)`

**Purpose:** Gets the current value of `nearest frame with valid alpha for distance`.

### GetFrameAndColorForDistance
`public void GetFrameAndColorForDistance(float distance, out MatrixFrame frame, out Vec3 color)`

**Purpose:** Gets the current value of `frame and color for distance`.

### GetArcLength
`public float GetArcLength(int first_point)`

**Purpose:** Gets the current value of `arc length`.

### GetPoints
`public void GetPoints(MatrixFrame points)`

**Purpose:** Gets the current value of `points`.

### GetTotalLength
`public float GetTotalLength()`

**Purpose:** Gets the current value of `total length`.

### GetVersion
`public int GetVersion()`

**Purpose:** Gets the current value of `version`.

### SetFrameOfPoint
`public void SetFrameOfPoint(int pointIndex, ref MatrixFrame frame)`

**Purpose:** Sets the value or state of `frame of point`.

### SetTangentPositionOfPoint
`public void SetTangentPositionOfPoint(int pointIndex, int tangentIndex, ref Vec3 position)`

**Purpose:** Sets the value or state of `tangent position of point`.

### AddPathPoint
`public int AddPathPoint(int newNodeIndex)`

**Purpose:** Adds `path point` to the current collection or state.

### DeletePathPoint
`public void DeletePathPoint(int nodeIndex)`

**Purpose:** Handles logic related to `delete path point`.

### HasValidAlphaAtPathPoint
`public bool HasValidAlphaAtPathPoint(int nodeIndex, float alphaThreshold = 0.5f)`

**Purpose:** Checks whether the current object has/contains `valid alpha at path point`.

### GetName
`public string GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new Path();
value.GetHermiteFrameForDt(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)