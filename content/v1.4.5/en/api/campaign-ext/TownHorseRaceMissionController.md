---
title: "TownHorseRaceMissionController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownHorseRaceMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TownHorseRaceMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TownHorseRaceMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TownHorseRaceMissionController.cs`

## Overview

`TownHorseRaceMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TownHorseRaceMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `CheckPoints` | `public List<CheckPoint> CheckPoints { get; }` |

## Key Methods

### GetBestTargetPosition
`public Vec3 GetBestTargetPosition()`

**Purpose:** Gets the current value of `best target position`.

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**Purpose:** Adds `to check list` to the current collection or state.

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**Purpose:** Removes `from check list` from the current collection or state.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**Purpose:** Handles logic related to `start match`.

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**Purpose:** Handles logic related to `skip match`.

### IsMatchEnded
`public bool IsMatchEnded()`

**Purpose:** Handles logic related to `is match ended`.

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Called when the `match ended` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TownHorseRaceMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)