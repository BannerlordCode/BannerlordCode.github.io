---
title: "PathTracker"
description: "Auto-generated class reference for PathTracker."
---
# PathTracker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PathTracker`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/PathTracker.cs`

## Overview

`PathTracker` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void UpdateVersion()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of version.

```csharp
// Obtain an instance of PathTracker from the subsystem API first
PathTracker pathTracker = ...;
pathTracker.UpdateVersion();
```

### PathExists
`public bool PathExists()`

**Purpose:** **Purpose:** Executes the PathExists logic.

```csharp
// Obtain an instance of PathTracker from the subsystem API first
PathTracker pathTracker = ...;
var result = pathTracker.PathExists();
```

### Advance
`public void Advance(float deltaDistance)`

**Purpose:** **Purpose:** Executes the Advance logic.

```csharp
// Obtain an instance of PathTracker from the subsystem API first
PathTracker pathTracker = ...;
pathTracker.Advance(0);
```

### GetPathLength
`public float GetPathLength()`

**Purpose:** **Purpose:** Reads and returns the path length value held by the this instance.

```csharp
// Obtain an instance of PathTracker from the subsystem API first
PathTracker pathTracker = ...;
var result = pathTracker.GetPathLength();
```

### CurrentFrameAndColor
`public void CurrentFrameAndColor(out MatrixFrame frame, out Vec3 color)`

**Purpose:** **Purpose:** Executes the CurrentFrameAndColor logic.

```csharp
// Obtain an instance of PathTracker from the subsystem API first
PathTracker pathTracker = ...;
pathTracker.CurrentFrameAndColor(frame, color);
```

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of PathTracker from the subsystem API first
PathTracker pathTracker = ...;
pathTracker.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PathTracker pathTracker = ...;
pathTracker.UpdateVersion();
```

## See Also

- [Area Index](../)