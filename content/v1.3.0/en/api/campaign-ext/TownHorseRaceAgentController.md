---
title: "TownHorseRaceAgentController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownHorseRaceAgentController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TownHorseRaceAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class TownHorseRaceAgentController : AgentController`
**Base:** `AgentController`
**File:** `SandBox/Tournaments/AgentControllers/TownHorseRaceAgentController.cs`

## Overview

`TownHorseRaceAgentController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TownHorseRaceAgentController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnInitialize
`public override void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### DisableMovement
`public void DisableMovement()`

**Purpose:** Handles logic related to `disable movement`.

### Start
`public void Start()`

**Purpose:** Handles logic related to `start`.

### OnEnterCheckPoint
`public void OnEnterCheckPoint(VolumeBox checkPoint)`

**Purpose:** Called when the `enter check point` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TownHorseRaceAgentController>();
```

## See Also

- [Complete Class Catalog](../catalog)