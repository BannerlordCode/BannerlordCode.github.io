---
title: "TownHorseRaceAgentController"
description: "Auto-generated class reference for TownHorseRaceAgentController."
---
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

**Purpose:** Invoked when the initialize event is raised.

```csharp
// Obtain an instance of TownHorseRaceAgentController from the subsystem API first
TownHorseRaceAgentController townHorseRaceAgentController = ...;
townHorseRaceAgentController.OnInitialize();
```

### DisableMovement
`public void DisableMovement()`

**Purpose:** Executes the DisableMovement logic.

```csharp
// Obtain an instance of TownHorseRaceAgentController from the subsystem API first
TownHorseRaceAgentController townHorseRaceAgentController = ...;
townHorseRaceAgentController.DisableMovement();
```

### Start
`public void Start()`

**Purpose:** Starts the this instance's flow or state machine.

```csharp
// Obtain an instance of TownHorseRaceAgentController from the subsystem API first
TownHorseRaceAgentController townHorseRaceAgentController = ...;
townHorseRaceAgentController.Start();
```

### OnEnterCheckPoint
`public void OnEnterCheckPoint(VolumeBox checkPoint)`

**Purpose:** Invoked when the enter check point event is raised.

```csharp
// Obtain an instance of TownHorseRaceAgentController from the subsystem API first
TownHorseRaceAgentController townHorseRaceAgentController = ...;
townHorseRaceAgentController.OnEnterCheckPoint(checkPoint);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TownHorseRaceAgentController>();
```

## See Also

- [Area Index](../)