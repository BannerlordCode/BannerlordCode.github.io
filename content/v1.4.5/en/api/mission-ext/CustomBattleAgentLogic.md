---
title: "CustomBattleAgentLogic"
description: "Auto-generated class reference for CustomBattleAgentLogic."
---
# CustomBattleAgentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleAgentLogic.cs`

## Overview

`CustomBattleAgentLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `CustomBattleAgentLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the agent hit event is raised.

```csharp
// Obtain an instance of CustomBattleAgentLogic from the subsystem API first
CustomBattleAgentLogic customBattleAgentLogic = ...;
customBattleAgentLogic.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of CustomBattleAgentLogic from the subsystem API first
CustomBattleAgentLogic customBattleAgentLogic = ...;
customBattleAgentLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomBattleAgentLogic>();
```

## See Also

- [Area Index](../)