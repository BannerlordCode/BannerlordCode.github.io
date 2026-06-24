<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarkerRect`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MarkerRect

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MarkerRect`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/MarkerRect.cs`

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

**Purpose:** Resets `reset` to its initial state.

### UpdatePoints
`public void UpdatePoints(float left, float right, float top, float bottom)`

**Purpose:** Updates the state or data of `points`.

### IsOverlapping
`public bool IsOverlapping(MarkerRect other)`

**Purpose:** Handles logic related to `is overlapping`.

## Usage Example

```csharp
var value = new MarkerRect();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)