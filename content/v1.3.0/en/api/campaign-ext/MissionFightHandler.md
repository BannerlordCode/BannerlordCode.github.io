---
title: "MissionFightHandler"
description: "Auto-generated class reference for MissionFightHandler."
---
# MissionFightHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionFightHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionFightHandler.cs`

## Overview

`MissionFightHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionFightHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinMissionEndTime` | `public float MinMissionEndTime { get; }` |
| `PlayerSideAgents` | `public ReadOnlyCollection<Agent> PlayerSideAgents { get; }` |
| `OpponentSideAgents` | `public ReadOnlyCollection<Agent> OpponentSideAgents { get; }` |
| `IsPlayerSideWon` | `public bool IsPlayerSideWon { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### StartCustomFight
`public void StartCustomFight(List<Agent> playerSideAgents, List<Agent> opponentSideAgents, bool dropWeapons, bool isItemUseDisabled, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)`

**Purpose:** **Purpose:** Starts the custom fight flow or state machine.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.StartCustomFight(playerSideAgents, opponentSideAgents, false, false, onFightEndDelegate, 0);
```

### StartFistFight
`public void StartFistFight(Agent opponent, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)`

**Purpose:** **Purpose:** Starts the fist fight flow or state machine.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.StartFistFight(opponent, onFightEndDelegate, 0);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** **Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
var result = missionFightHandler.OnEndMissionRequest(canPlayerLeave);
```

### GetAgentToSpectate
`public static Agent GetAgentToSpectate()`

**Purpose:** **Purpose:** Reads and returns the agent to spectate value held by the this instance.

```csharp
// Static call; no instance required
MissionFightHandler.GetAgentToSpectate();
```

### BeginEndFight
`public void BeginEndFight()`

**Purpose:** **Purpose:** Executes the BeginEndFight logic.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.BeginEndFight();
```

### EndFight
`public void EndFight(bool overrideDuelWonByPlayer = false)`

**Purpose:** **Purpose:** Executes the EndFight logic.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.EndFight(false);
```

### IsThereActiveFight
`public bool IsThereActiveFight()`

**Purpose:** **Purpose:** Determines whether the this instance is in the there active fight state or condition.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
var result = missionFightHandler.IsThereActiveFight();
```

### AddAgentToSide
`public void AddAgentToSide(Agent agent, bool isPlayerSide)`

**Purpose:** **Purpose:** Adds agent to side to the current collection or state.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.AddAgentToSide(agent, false);
```

### GetDangerSources
`public IEnumerable<Agent> GetDangerSources(Agent ownerAgent)`

**Purpose:** **Purpose:** Reads and returns the danger sources value held by the this instance.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
var result = missionFightHandler.GetDangerSources(ownerAgent);
```

### IsAgentAggressive
`public static bool IsAgentAggressive(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent aggressive state or condition.

```csharp
// Static call; no instance required
MissionFightHandler.IsAgentAggressive(agent);
```

### IsAgentJusticeWarrior
`public static bool IsAgentJusticeWarrior(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent justice warrior state or condition.

```csharp
// Static call; no instance required
MissionFightHandler.IsAgentJusticeWarrior(character);
```

### IsAgentVillian
`public static bool IsAgentVillian(CharacterObject character)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent villian state or condition.

```csharp
// Static call; no instance required
MissionFightHandler.IsAgentVillian(character);
```

### OnFightEndDelegate
`public delegate void OnFightEndDelegate(bool isPlayerSideWon)`

**Purpose:** **Purpose:** Invoked when the fight end delegate event is raised.

```csharp
// Obtain an instance of MissionFightHandler from the subsystem API first
MissionFightHandler missionFightHandler = ...;
missionFightHandler.OnFightEndDelegate(false);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionFightHandler>();
```

## See Also

- [Area Index](../)