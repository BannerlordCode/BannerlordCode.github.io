<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PathTracker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PathTracker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PathTracker`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/PathTracker.cs`

## Overview

`PathTracker` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled { get; set; }` |
| `HasChanged` | `public bool HasChanged { get; }` |
| `CurrentFrame` | `public MatrixFrame CurrentFrame { get; }` |

## Key Methods

### UpdateVersion
`public void UpdateVersion()`

**Purpose:** Updates the state or data of `version`.

### PathExists
`public bool PathExists()`

**Purpose:** Handles logic related to `path exists`.

### Advance
`public void Advance(float deltaDistance)`

**Purpose:** Handles logic related to `advance`.

### GetPathLength
`public float GetPathLength()`

**Purpose:** Gets the current value of `path length`.

### CurrentFrameAndColor
`public void CurrentFrameAndColor(out MatrixFrame frame, out Vec3 color)`

**Purpose:** Handles logic related to `current frame and color`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new PathTracker();
value.UpdateVersion();
```

## See Also

- [Complete Class Catalog](../catalog)