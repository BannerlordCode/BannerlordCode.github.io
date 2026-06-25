---
title: "MissionAlleyHandler"
description: "Auto-generated class reference for MissionAlleyHandler."
---
# MissionAlleyHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAlleyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAlleyHandler.cs`

## Overview

`MissionAlleyHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAlleyHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanThugConversationBeTriggered` | `public bool CanThugConversationBeTriggered { get; }` |

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionAlleyHandler from the subsystem API first
MissionAlleyHandler missionAlleyHandler = ...;
missionAlleyHandler.OnMissionTick(0);
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionAlleyHandler from the subsystem API first
MissionAlleyHandler missionAlleyHandler = ...;
missionAlleyHandler.AfterStart();
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the agent hit event is raised.

```csharp
// Obtain an instance of MissionAlleyHandler from the subsystem API first
MissionAlleyHandler missionAlleyHandler = ...;
missionAlleyHandler.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

### StartCommonAreaBattle
`public void StartCommonAreaBattle(Alley alley)`

**Purpose:** Starts the common area battle flow or state machine.

```csharp
// Obtain an instance of MissionAlleyHandler from the subsystem API first
MissionAlleyHandler missionAlleyHandler = ...;
missionAlleyHandler.StartCommonAreaBattle(alley);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAlleyHandler>();
```

## See Also

- [Area Index](../)