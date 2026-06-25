---
title: "TournamentFightMissionController"
description: "Auto-generated class reference for TournamentFightMissionController."
---
# TournamentFightMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentFightMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TournamentFightMissionController.cs`

## Overview

`TournamentFightMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TournamentFightMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.AfterStart();
```

### PrepareForMatch
`public void PrepareForMatch()`

**Purpose:** Finishes prerequisite setup for the upcoming `for match` operation.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.PrepareForMatch();
```

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**Purpose:** Starts the `match` flow or state machine.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.StartMatch(match, false);
```

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.SkipMatch(match);
```

### IsMatchEnded
`public bool IsMatchEnded()`

**Purpose:** Determines whether the current object is in the `match ended` state or condition.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
var result = tournamentFightMissionController.IsMatchEnded();
```

### OnMatchResultsReady
`public void OnMatchResultsReady()`

**Purpose:** Invoked when the `match results ready` event is raised.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnMatchResultsReady();
```

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Invoked when the `match ended` event is raised.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnMatchEnded();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

**Purpose:** Checks whether the current object meets the preconditions for `agent rout`.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
var result = tournamentFightMissionController.CanAgentRout(agent);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Invoked when the `score hit` event is raised.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
tournamentFightMissionController.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### CheckIfIsThereAnyEnemies
`public bool CheckIfIsThereAnyEnemies()`

**Purpose:** Verifies whether `if is there any enemies` holds true for the current object.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
var result = tournamentFightMissionController.CheckIfIsThereAnyEnemies();
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Invoked when the `end mission request` event is raised.

```csharp
// Obtain an instance of TournamentFightMissionController from the subsystem API first
TournamentFightMissionController tournamentFightMissionController = ...;
var result = tournamentFightMissionController.OnEndMissionRequest(canPlayerLeave);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentFightMissionController>();
```

## See Also

- [Area Index](../)