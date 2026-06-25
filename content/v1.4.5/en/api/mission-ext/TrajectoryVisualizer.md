---
title: "TrajectoryVisualizer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrajectoryVisualizer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TrajectoryVisualizer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TrajectoryVisualizer : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TrajectoryVisualizer.cs`

## Overview

`TrajectoryVisualizer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetTrajectoryParams
`public void SetTrajectoryParams(Vec3 missileShootingPositionOffset, float missileSpeed, float verticalAngleMinInDegrees, float verticalAngleMaxInDegrees, float horizontalAngleRangeInDegrees, float airFrictionConstant)`

**Purpose:** Sets the value or state of `trajectory params`.

## Usage Example

```csharp
var value = new TrajectoryVisualizer();
value.SetTrajectoryParams(missileShootingPositionOffset, 0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)