---
title: "TournamentJoustingMissionController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentJoustingMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentJoustingMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentJoustingMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs`

## Overview

`TournamentJoustingMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TournamentJoustingMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

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

### IsAgentInTheTrack
`public bool IsAgentInTheTrack(Agent agent, bool inCurrentTrack = true)`

**Purpose:** Handles logic related to `is agent in the track`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Called when the `agent hit` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnJoustingAgentStateChanged
`public void OnJoustingAgentStateChanged(Agent agent, JoustingAgentController.JoustingAgentState state)`

**Purpose:** Called when the `jousting agent state changed` event is raised.

### JoustingEventDelegate
`public delegate void JoustingEventDelegate(Agent affectedAgent, Agent affectorAgent)`

**Purpose:** Handles logic related to `jousting event delegate`.

### JoustingAgentStateChangedEventDelegate
`public delegate void JoustingAgentStateChangedEventDelegate(Agent agent, JoustingAgentController.JoustingAgentState state)`

**Purpose:** Handles logic related to `jousting agent state changed event delegate`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentJoustingMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)