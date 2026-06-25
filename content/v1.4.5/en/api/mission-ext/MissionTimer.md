---
title: "MissionTimer"
description: "Auto-generated class reference for MissionTimer."
---
# MissionTimer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionTimer`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTimer.cs`

## Overview

`MissionTimer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetStartTime
`public MissionTime GetStartTime()`

**Purpose:** **Purpose:** Reads and returns the start time value held by the this instance.

```csharp
// Obtain an instance of MissionTimer from the subsystem API first
MissionTimer missionTimer = ...;
var result = missionTimer.GetStartTime();
```

### GetTimerDuration
`public float GetTimerDuration()`

**Purpose:** **Purpose:** Reads and returns the timer duration value held by the this instance.

```csharp
// Obtain an instance of MissionTimer from the subsystem API first
MissionTimer missionTimer = ...;
var result = missionTimer.GetTimerDuration();
```

### GetRemainingTimeInSeconds
`public float GetRemainingTimeInSeconds(bool synched = false)`

**Purpose:** **Purpose:** Reads and returns the remaining time in seconds value held by the this instance.

```csharp
// Obtain an instance of MissionTimer from the subsystem API first
MissionTimer missionTimer = ...;
var result = missionTimer.GetRemainingTimeInSeconds(false);
```

### Check
`public bool Check(bool reset = false)`

**Purpose:** **Purpose:** Verifies whether the this instance meets the specified condition.

```csharp
// Obtain an instance of MissionTimer from the subsystem API first
MissionTimer missionTimer = ...;
var result = missionTimer.Check(false);
```

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of MissionTimer from the subsystem API first
MissionTimer missionTimer = ...;
missionTimer.Reset();
```

### Set
`public void Set(float timeInSeconds)`

**Purpose:** **Purpose:** Assigns a new value to the this instance's property or state.

```csharp
// Obtain an instance of MissionTimer from the subsystem API first
MissionTimer missionTimer = ...;
missionTimer.Set(0);
```

### SetDuration
`public void SetDuration(float duration)`

**Purpose:** **Purpose:** Assigns a new value to duration and updates the object's internal state.

```csharp
// Obtain an instance of MissionTimer from the subsystem API first
MissionTimer missionTimer = ...;
missionTimer.SetDuration(0);
```

### CreateSynchedTimerClient
`public static MissionTimer CreateSynchedTimerClient(float startTimeInSeconds, float duration)`

**Purpose:** **Purpose:** Constructs a new synched timer client entity and returns it to the caller.

```csharp
// Static call; no instance required
MissionTimer.CreateSynchedTimerClient(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionTimer missionTimer = ...;
missionTimer.GetStartTime();
```

## See Also

- [Area Index](../)