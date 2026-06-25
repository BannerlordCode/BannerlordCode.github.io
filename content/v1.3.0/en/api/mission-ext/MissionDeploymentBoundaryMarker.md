---
title: "MissionDeploymentBoundaryMarker"
description: "Auto-generated class reference for MissionDeploymentBoundaryMarker."
---
# MissionDeploymentBoundaryMarker

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDeploymentBoundaryMarker : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs`

## Overview

`MissionDeploymentBoundaryMarker` lives in `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionDeploymentBoundaryMarker from the subsystem API first
MissionDeploymentBoundaryMarker missionDeploymentBoundaryMarker = ...;
missionDeploymentBoundaryMarker.AfterStart();
```

### OnDeploymentPlanMade
`public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** **Purpose:** Invoked when the deployment plan made event is raised.

```csharp
// Obtain an instance of MissionDeploymentBoundaryMarker from the subsystem API first
MissionDeploymentBoundaryMarker missionDeploymentBoundaryMarker = ...;
missionDeploymentBoundaryMarker.OnDeploymentPlanMade(team, false);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionDeploymentBoundaryMarker from the subsystem API first
MissionDeploymentBoundaryMarker missionDeploymentBoundaryMarker = ...;
missionDeploymentBoundaryMarker.OnRemoveBehavior();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionDeploymentBoundaryMarker missionDeploymentBoundaryMarker = ...;
missionDeploymentBoundaryMarker.AfterStart();
```

## See Also

- [Area Index](../)