---
title: "MusicArenaPracticeMissionView"
description: "Auto-generated class reference for MusicArenaPracticeMissionView."
---
# MusicArenaPracticeMissionView

**Namespace:** SandBox.View.Missions.Sound.Components
**Module:** SandBox.View
**Type:** `public class MusicArenaPracticeMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/Sound/Components/MusicArenaPracticeMissionView.cs`

## Overview

`MusicArenaPracticeMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MusicArenaPracticeMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.EarlyStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.OnMissionTick(0);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** **Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnMissileHit
`public override void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Invoked when the missile hit event is raised.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.OnMissileHit(attacker, victim, false, collisionData);
```

### OnMeleeHit
`public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** **Purpose:** Invoked when the melee hit event is raised.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.OnMeleeHit(attacker, victim, false, collisionData);
```

### OnUpdated
`public void OnUpdated(float dt)`

**Purpose:** **Purpose:** Invoked when the updated event is raised.

```csharp
// Obtain an instance of MusicArenaPracticeMissionView from the subsystem API first
MusicArenaPracticeMissionView musicArenaPracticeMissionView = ...;
musicArenaPracticeMissionView.OnUpdated(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MusicArenaPracticeMissionView view = ...;
```

## See Also

- [Area Index](../)