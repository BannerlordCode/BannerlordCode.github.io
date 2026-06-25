---
title: "FlagCapturePoint"
description: "Auto-generated class reference for FlagCapturePoint."
---
# FlagCapturePoint

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagCapturePoint : SynchedMissionObject`
**Base:** `SynchedMissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/FlagCapturePoint.cs`

## Overview

`FlagCapturePoint` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ResetPointAsServer
`public void ResetPointAsServer(uint defaultColor, uint defaultColor2)`

**Purpose:** **Purpose:** Returns point as server to its default or initial condition.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.ResetPointAsServer(0, 0);
```

### RemovePointAsServer
`public void RemovePointAsServer()`

**Purpose:** **Purpose:** Removes point as server from the current collection or state.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.RemovePointAsServer();
```

### OnAfterTick
`public void OnAfterTick(bool canOwnershipChange, out bool ownerTeamChanged)`

**Purpose:** **Purpose:** Invoked when the after tick event is raised.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.OnAfterTick(false, ownerTeamChanged);
```

### SetMoveFlag
`public void SetMoveFlag(CaptureTheFlagFlagDirection directionTo, float speedMultiplier = 1f)`

**Purpose:** **Purpose:** Assigns a new value to move flag and updates the object's internal state.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.SetMoveFlag(directionTo, 0);
```

### ChangeMovementSpeed
`public void ChangeMovementSpeed(float speedMultiplier)`

**Purpose:** **Purpose:** Executes the ChangeMovementSpeed logic.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.ChangeMovementSpeed(0);
```

### SetMoveNone
`public void SetMoveNone()`

**Purpose:** **Purpose:** Assigns a new value to move none and updates the object's internal state.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.SetMoveNone();
```

### SetVisibleWithAllSynched
`public void SetVisibleWithAllSynched(bool value, bool forceChildrenVisible = false)`

**Purpose:** **Purpose:** Assigns a new value to visible with all synched and updates the object's internal state.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.SetVisibleWithAllSynched(false, false);
```

### SetTeamColorsWithAllSynched
`public void SetTeamColorsWithAllSynched(uint color, uint color2)`

**Purpose:** **Purpose:** Assigns a new value to team colors with all synched and updates the object's internal state.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.SetTeamColorsWithAllSynched(0, 0);
```

### GetFlagColor
`public uint GetFlagColor()`

**Purpose:** **Purpose:** Reads and returns the flag color value held by the this instance.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
var result = flagCapturePoint.GetFlagColor();
```

### GetFlagColor2
`public uint GetFlagColor2()`

**Purpose:** **Purpose:** Reads and returns the flag color2 value held by the this instance.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
var result = flagCapturePoint.GetFlagColor2();
```

### GetFlagProgress
`public float GetFlagProgress()`

**Purpose:** **Purpose:** Reads and returns the flag progress value held by the this instance.

```csharp
// Obtain an instance of FlagCapturePoint from the subsystem API first
FlagCapturePoint flagCapturePoint = ...;
var result = flagCapturePoint.GetFlagProgress();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FlagCapturePoint flagCapturePoint = ...;
flagCapturePoint.ResetPointAsServer(0, 0);
```

## See Also

- [Area Index](../)