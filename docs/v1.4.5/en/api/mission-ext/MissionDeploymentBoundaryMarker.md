<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionDeploymentBoundaryMarker`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionDeploymentBoundaryMarker

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDeploymentBoundaryMarker : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionDeploymentBoundaryMarker.cs`

## Overview

`MissionDeploymentBoundaryMarker` lives in `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnDeploymentPlanMade
`public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** Called when the `deployment plan made` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
var value = new MissionDeploymentBoundaryMarker();
value.AfterStart();
```

## See Also

- [Complete Class Catalog](../catalog)