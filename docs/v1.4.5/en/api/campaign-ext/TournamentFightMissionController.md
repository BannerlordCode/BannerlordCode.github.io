<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentFightMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentFightMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentFightMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TournamentFightMissionController.cs`

## Overview

`TournamentFightMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TournamentFightMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### PrepareForMatch
`public void PrepareForMatch()`

**Purpose:** Handles logic related to `prepare for match`.

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**Purpose:** Handles logic related to `start match`.

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**Purpose:** Handles logic related to `skip match`.

### IsMatchEnded
`public bool IsMatchEnded()`

**Purpose:** Handles logic related to `is match ended`.

### OnMatchResultsReady
`public void OnMatchResultsReady()`

**Purpose:** Called when the `match results ready` event is raised.

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Called when the `match ended` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### CanAgentRout
`public bool CanAgentRout(Agent agent)`

**Purpose:** Checks whether the current object can `agent rout`.

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Called when the `score hit` event is raised.

### CheckIfIsThereAnyEnemies
`public bool CheckIfIsThereAnyEnemies()`

**Purpose:** Handles logic related to `check if is there any enemies`.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Called when the `end mission request` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TournamentFightMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)