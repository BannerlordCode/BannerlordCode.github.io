---
title: "BattleEndLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleEndLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleEndLogic : MissionLogic, IBattleEndLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleEndLogic.cs`

## Overview

`BattleEndLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleEndLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `EnemyVictory` | `public bool EnemyVictory { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Handles logic related to `mission ended`.

### ChangeCanCheckForEndCondition
`public void ChangeCanCheckForEndCondition(bool canCheckForEndCondition)`

**Purpose:** Handles logic related to `change can check for end condition`.

### TryExit
`public ExitResult TryExit()`

**Purpose:** Attempts to get `exit`, usually returning the result in an out parameter.

### EnableEnemyDefenderPullBack
`public void EnableEnemyDefenderPullBack(int neededTroopNumber)`

**Purpose:** Handles logic related to `enable enemy defender pull back`.

### SetNotificationDisabled
`public void SetNotificationDisabled(bool value)`

**Purpose:** Sets the value or state of `notification disabled`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BattleEndLogic());
```

## See Also

- [Complete Class Catalog](../catalog)