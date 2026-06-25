---
title: "BattleEndLogic"
description: "Auto-generated class reference for BattleEndLogic."
---
# BattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleEndLogic : MissionLogic, IBattleEndLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleEndLogic.cs`

## Overview

`BattleEndLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleEndLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `EnemyVictory` | `public bool EnemyVictory { get; }` |
| `IsEnemySideRetreating` | `public bool IsEnemySideRetreating { get; set; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
var result = battleEndLogic.MissionEnded(missionResult);
```

### ChangeCanCheckForEndCondition
`public void ChangeCanCheckForEndCondition(bool canCheckForEndCondition)`

**Purpose:** Executes the ChangeCanCheckForEndCondition logic.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.ChangeCanCheckForEndCondition(false);
```

### TryExit
`public BattleEndLogic.ExitResult TryExit()`

**Purpose:** Attempts to retrieve exit, usually returning success through an out parameter.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
var result = battleEndLogic.TryExit();
```

### EnableEnemyDefenderPullBack
`public void EnableEnemyDefenderPullBack(int neededTroopNumber)`

**Purpose:** Executes the EnableEnemyDefenderPullBack logic.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.EnableEnemyDefenderPullBack(0);
```

### SetNotificationDisabled
`public void SetNotificationDisabled(bool value)`

**Purpose:** Assigns a new value to notification disabled and updates the object's internal state.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.SetNotificationDisabled(false);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleEndLogic>();
```

## See Also

- [Area Index](../)