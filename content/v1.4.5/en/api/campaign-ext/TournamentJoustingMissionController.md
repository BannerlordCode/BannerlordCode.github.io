---
title: "TournamentJoustingMissionController"
description: "Auto-generated class reference for TournamentJoustingMissionController."
---
# TournamentJoustingMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentJoustingMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TournamentJoustingMissionController.cs`

## Overview

`TournamentJoustingMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TournamentJoustingMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### JoustingEventDelegate
`public delegate void JoustingEventDelegate(Agent affectedAgent, Agent affectorAgent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.JoustingEventDelegate(affectedAgent, affectorAgent);
```

### JoustingAgentStateChangedEventDelegate
`public delegate void JoustingAgentStateChangedEventDelegate(Agent agent, JoustingAgentController.JoustingAgentState state)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.JoustingAgentStateChangedEventDelegate(agent, state);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.AfterStart();
```

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**Purpose:** Starts the `match` flow or state machine.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.StartMatch(match, false);
```

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.SkipMatch(match);
```

### IsMatchEnded
`public bool IsMatchEnded()`

**Purpose:** Determines whether the current object is in the `match ended` state or condition.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
var result = tournamentJoustingMissionController.IsMatchEnded();
```

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Invoked when the `match ended` event is raised.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnMatchEnded();
```

### IsAgentInTheTrack
`public bool IsAgentInTheTrack(Agent agent, bool inCurrentTrack = true)`

**Purpose:** Determines whether the current object is in the `agent in the track` state or condition.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
var result = tournamentJoustingMissionController.IsAgentInTheTrack(agent, false);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnMissionTick(0);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the `agent hit` event is raised.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnJoustingAgentStateChanged
`public void OnJoustingAgentStateChanged(Agent agent, JoustingAgentController.JoustingAgentState state)`

**Purpose:** Invoked when the `jousting agent state changed` event is raised.

```csharp
// Obtain an instance of TournamentJoustingMissionController from the subsystem API first
TournamentJoustingMissionController tournamentJoustingMissionController = ...;
tournamentJoustingMissionController.OnJoustingAgentStateChanged(agent, state);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentJoustingMissionController>();
```

## See Also

- [Area Index](../)