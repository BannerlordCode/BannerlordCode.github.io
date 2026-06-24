<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FlagCapturePoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FlagCapturePoint

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagCapturePoint : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/FlagCapturePoint.cs`

## Overview

`FlagCapturePoint` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ResetPointAsServer
`public void ResetPointAsServer(uint defaultColor, uint defaultColor2)`

**Purpose:** Resets `point as server` to its initial state.

### RemovePointAsServer
`public void RemovePointAsServer()`

**Purpose:** Removes `point as server` from the current collection or state.

### OnAfterTick
`public void OnAfterTick(bool canOwnershipChange, out bool ownerTeamChanged)`

**Purpose:** Called when the `after tick` event is raised.

### SetMoveFlag
`public void SetMoveFlag(CaptureTheFlagFlagDirection directionTo, float speedMultiplier = 1f)`

**Purpose:** Sets the value or state of `move flag`.

### ChangeMovementSpeed
`public void ChangeMovementSpeed(float speedMultiplier)`

**Purpose:** Handles logic related to `change movement speed`.

### SetMoveNone
`public void SetMoveNone()`

**Purpose:** Sets the value or state of `move none`.

### SetVisibleWithAllSynched
`public void SetVisibleWithAllSynched(bool value, bool forceChildrenVisible = false)`

**Purpose:** Sets the value or state of `visible with all synched`.

### SetTeamColorsWithAllSynched
`public void SetTeamColorsWithAllSynched(uint color, uint color2)`

**Purpose:** Sets the value or state of `team colors with all synched`.

### GetFlagColor
`public uint GetFlagColor()`

**Purpose:** Gets the current value of `flag color`.

### GetFlagColor2
`public uint GetFlagColor2()`

**Purpose:** Gets the current value of `flag color2`.

### GetFlagProgress
`public float GetFlagProgress()`

**Purpose:** Gets the current value of `flag progress`.

## Usage Example

```csharp
var value = new FlagCapturePoint();
value.ResetPointAsServer(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)