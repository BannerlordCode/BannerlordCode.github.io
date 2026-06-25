---
title: "TownHorseRaceMissionController"
description: "Auto-generated class reference for TownHorseRaceMissionController."
---
# TownHorseRaceMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TownHorseRaceMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs`

## Overview

`TownHorseRaceMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TownHorseRaceMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CheckPoints` | `public List<TownHorseRaceMissionController.CheckPoint> CheckPoints { get; }` |
| `Name` | `public string Name { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.OnMissionTick(0);
```

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**Purpose:** Starts the `match` flow or state machine.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.StartMatch(match, false);
```

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.SkipMatch(match);
```

### IsMatchEnded
`public bool IsMatchEnded()`

**Purpose:** Determines whether the current object is in the `match ended` state or condition.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
var result = townHorseRaceMissionController.IsMatchEnded();
```

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Invoked when the `match ended` event is raised.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.OnMatchEnded();
```

### GetBestTargetPosition
`public Vec3 GetBestTargetPosition()`

**Purpose:** Reads and returns the `best target position` value held by the current object.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
var result = townHorseRaceMissionController.GetBestTargetPosition();
```

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**Purpose:** Adds `to check list` to the current collection or state.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.AddToCheckList(agent);
```

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**Purpose:** Removes `from check list` from the current collection or state.

```csharp
// Obtain an instance of TownHorseRaceMissionController from the subsystem API first
TownHorseRaceMissionController townHorseRaceMissionController = ...;
townHorseRaceMissionController.RemoveFromCheckList(agent);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TownHorseRaceMissionController>();
```

## See Also

- [Area Index](../)