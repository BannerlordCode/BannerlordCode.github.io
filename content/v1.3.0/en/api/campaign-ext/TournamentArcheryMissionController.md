---
title: "TournamentArcheryMissionController"
description: "Auto-generated class reference for TournamentArcheryMissionController."
---
# TournamentArcheryMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentArcheryMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs`

## Overview

`TournamentArcheryMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TournamentArcheryMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentControllers` | `public IEnumerable<ArcheryTournamentAgentController> AgentControllers { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentArcheryMissionController from the subsystem API first
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.AfterStart();
```

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**Purpose:** Starts the `match` flow or state machine.

```csharp
// Obtain an instance of TournamentArcheryMissionController from the subsystem API first
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.StartMatch(match, false);
```

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentArcheryMissionController from the subsystem API first
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.SkipMatch(match);
```

### IsMatchEnded
`public bool IsMatchEnded()`

**Purpose:** Determines whether the current object is in the `match ended` state or condition.

```csharp
// Obtain an instance of TournamentArcheryMissionController from the subsystem API first
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
var result = tournamentArcheryMissionController.IsMatchEnded();
```

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Invoked when the `match ended` event is raised.

```csharp
// Obtain an instance of TournamentArcheryMissionController from the subsystem API first
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.OnMatchEnded();
```

### OnTargetDestroyed
`public void OnTargetDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon attackerWeapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**Purpose:** Invoked when the `target destroyed` event is raised.

```csharp
// Obtain an instance of TournamentArcheryMissionController from the subsystem API first
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.OnTargetDestroyed(destroyedComponent, destroyerAgent, attackerWeapon, attackerScriptComponentBehavior, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of TournamentArcheryMissionController from the subsystem API first
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.OnMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the `agent hit` event is raised.

```csharp
// Obtain an instance of TournamentArcheryMissionController from the subsystem API first
TournamentArcheryMissionController tournamentArcheryMissionController = ...;
tournamentArcheryMissionController.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentArcheryMissionController>();
```

## See Also

- [Area Index](../)