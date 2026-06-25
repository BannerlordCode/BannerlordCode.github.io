---
title: "GeneralsAndCaptainsAssignmentLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GeneralsAndCaptainsAssignmentLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GeneralsAndCaptainsAssignmentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GeneralsAndCaptainsAssignmentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs`

## Overview

`GeneralsAndCaptainsAssignmentLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `GeneralsAndCaptainsAssignmentLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnTeamDeployed
`public override void OnTeamDeployed(Team team)`

**Purpose:** Called when the `team deployed` event is raised.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new GeneralsAndCaptainsAssignmentLogic());
```

## See Also

- [Complete Class Catalog](../catalog)