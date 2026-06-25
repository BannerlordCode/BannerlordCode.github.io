---
title: "MusicTournamentMissionView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MusicTournamentMissionView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MusicTournamentMissionView

**Namespace:** SandBox.View.Missions.Sound.Components
**Module:** SandBox.View
**Type:** `public class MusicTournamentMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions.Sound.Components/MusicTournamentMissionView.cs`

## Overview

`MusicTournamentMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MusicTournamentMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Called when the `score hit` event is raised.

### OnMissileHit
`public override void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** Called when the `missile hit` event is raised.

### OnMeleeHit
`public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** Called when the `melee hit` event is raised.

### OnTournamentRoundBegin
`public void OnTournamentRoundBegin(bool isFinalRound)`

**Purpose:** Called when the `tournament round begin` event is raised.

### OnTournamentRoundEnd
`public void OnTournamentRoundEnd()`

**Purpose:** Called when the `tournament round end` event is raised.

## Usage Example

```csharp
var view = new MusicTournamentMissionView();
```

## See Also

- [Complete Class Catalog](../catalog)