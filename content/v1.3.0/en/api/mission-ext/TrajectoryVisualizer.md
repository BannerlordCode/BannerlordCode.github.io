---
title: "TrajectoryVisualizer"
description: "Auto-generated class reference for TrajectoryVisualizer."
---
# TrajectoryVisualizer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TrajectoryVisualizer : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs`

## Overview

`TrajectoryVisualizer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetTrajectoryParams
`public void SetTrajectoryParams(Vec3 missileShootingPositionOffset, float missileSpeed, float verticalAngleMinInDegrees, float verticalAngleMaxInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)`

**Purpose:** Assigns a new value to trajectory params and updates the object's internal state.

```csharp
// Obtain an instance of TrajectoryVisualizer from the subsystem API first
TrajectoryVisualizer trajectoryVisualizer = ...;
trajectoryVisualizer.SetTrajectoryParams(missileShootingPositionOffset, 0, 0, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrajectoryVisualizer trajectoryVisualizer = ...;
trajectoryVisualizer.SetTrajectoryParams(missileShootingPositionOffset, 0, 0, 0, 0, 0);
```

## See Also

- [Area Index](../)