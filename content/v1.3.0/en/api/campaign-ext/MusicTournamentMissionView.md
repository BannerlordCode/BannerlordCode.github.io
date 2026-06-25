---
title: "MusicTournamentMissionView"
description: "Auto-generated class reference for MusicTournamentMissionView."
---
# MusicTournamentMissionView

**Namespace:** SandBox.View.Missions.Sound.Components
**Module:** SandBox.View
**Type:** `public class MusicTournamentMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/Sound/Components/MusicTournamentMissionView.cs`

## Overview

`MusicTournamentMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MusicTournamentMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.EarlyStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnMissionTick(0);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** **Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnMissileHit
`public override void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Invoked when the missile hit event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnMissileHit(attacker, victim, false, collisionData);
```

### OnMeleeHit
`public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Invoked when the melee hit event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnMeleeHit(attacker, victim, false, collisionData);
```

### OnTournamentRoundBegin
`public void OnTournamentRoundBegin(bool isFinalRound)`

**Purpose:** **Purpose:** Invoked when the tournament round begin event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnTournamentRoundBegin(false);
```

### OnTournamentRoundEnd
`public void OnTournamentRoundEnd()`

**Purpose:** **Purpose:** Invoked when the tournament round end event is raised.

```csharp
// Obtain an instance of MusicTournamentMissionView from the subsystem API first
MusicTournamentMissionView musicTournamentMissionView = ...;
musicTournamentMissionView.OnTournamentRoundEnd();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MusicTournamentMissionView view = ...;
```

## See Also

- [Area Index](../)