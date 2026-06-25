---
title: "MarkerRect"
description: "Auto-generated class reference for MarkerRect."
---
# MarkerRect

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MarkerRect`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/MarkerRect.cs`

## Overview

`MarkerRect` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Left` | `public float Left { get; }` |
| `Right` | `public float Right { get; }` |
| `Top` | `public float Top { get; }` |
| `Bottom` | `public float Bottom { get; }` |

## Key Methods

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of MarkerRect from the subsystem API first
MarkerRect markerRect = ...;
markerRect.Reset();
```

### UpdatePoints
`public void UpdatePoints(float left, float right, float top, float bottom)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of points.

```csharp
// Obtain an instance of MarkerRect from the subsystem API first
MarkerRect markerRect = ...;
markerRect.UpdatePoints(0, 0, 0, 0);
```

### IsOverlapping
`public bool IsOverlapping(MarkerRect other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the overlapping state or condition.

```csharp
// Obtain an instance of MarkerRect from the subsystem API first
MarkerRect markerRect = ...;
var result = markerRect.IsOverlapping(other);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MarkerRect markerRect = ...;
markerRect.Reset();
```

## See Also

- [Area Index](../)