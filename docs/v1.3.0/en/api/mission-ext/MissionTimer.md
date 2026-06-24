<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTimer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionTimer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionTimer.cs`

## Overview

`MissionTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetStartTime
`public MissionTime GetStartTime()`

**Purpose:** Gets the current value of `start time`.

### GetTimerDuration
`public float GetTimerDuration()`

**Purpose:** Gets the current value of `timer duration`.

### GetRemainingTimeInSeconds
`public float GetRemainingTimeInSeconds(bool synched = false)`

**Purpose:** Gets the current value of `remaining time in seconds`.

### Check
`public bool Check(bool reset = false)`

**Purpose:** Handles logic related to `check`.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Set
`public void Set(float timeInSeconds)`

**Purpose:** Sets the value or state of `set`.

### SetDuration
`public void SetDuration(float duration)`

**Purpose:** Sets the value or state of `duration`.

### CreateSynchedTimerClient
`public static MissionTimer CreateSynchedTimerClient(float startTimeInSeconds, float duration)`

**Purpose:** Creates a new `synched timer client` instance or object.

## Usage Example

```csharp
var value = new MissionTimer();
value.GetStartTime();
```

## See Also

- [Complete Class Catalog](../catalog)