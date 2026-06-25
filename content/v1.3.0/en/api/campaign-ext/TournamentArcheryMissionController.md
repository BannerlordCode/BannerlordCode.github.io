---
title: "TournamentArcheryMissionController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentArcheryMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

### OnTargetDestroyed
`public void OnTargetDestroyed(DestructableComponent destroyedComponent, Agent destroyerAgent, in MissionWeapon attackerWeapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)`

**Purpose:** Called when the `target destroyed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Called when the `agent hit` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentArcheryMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)