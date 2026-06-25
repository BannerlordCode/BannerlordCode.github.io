---
title: "BattleAgentLogic"
description: "Auto-generated class reference for BattleAgentLogic."
---
# BattleAgentLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class BattleAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/BattleAgentLogic.cs`

## Overview

`BattleAgentLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleAgentLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleAgentLogic from the subsystem API first
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.AfterStart();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of BattleAgentLogic from the subsystem API first
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentBuild(agent, banner);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** **Purpose:** Invoked when the agent hit event is raised.

```csharp
// Obtain an instance of BattleAgentLogic from the subsystem API first
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent team changed event is raised.

```csharp
// Obtain an instance of BattleAgentLogic from the subsystem API first
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** **Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of BattleAgentLogic from the subsystem API first
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BattleAgentLogic from the subsystem API first
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** **Purpose:** Invoked when the agent fleeing event is raised.

```csharp
// Obtain an instance of BattleAgentLogic from the subsystem API first
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnAgentFleeing(affectedAgent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of BattleAgentLogic from the subsystem API first
BattleAgentLogic battleAgentLogic = ...;
battleAgentLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleAgentLogic>();
```

## See Also

- [Area Index](../)