---
title: "HideoutAmbushMissionController"
description: "Auto-generated class reference for HideoutAmbushMissionController."
---
# HideoutAmbushMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs`

## Overview

`HideoutAmbushMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutAmbushMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsReadyForCallTroopsCinematic` | `public bool IsReadyForCallTroopsCinematic { get; }` |

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** **Purpose:** Invoked when the created event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.AfterStart();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnBehaviorInitialize();
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** **Purpose:** Invoked when the object used event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnObjectUsed(userAgent, usedObject);
```

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**Purpose:** **Purpose:** Assigns a new value to overridden hideout boss character object and updates the object's internal state.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.SetOverriddenHideoutBossCharacterObject(characterObject);
```

### SpawnRemainingTroopsForBossFight
`public void SpawnRemainingTroopsForBossFight(List<MatrixFrame> spawnFrames)`

**Purpose:** **Purpose:** Executes the SpawnRemainingTroopsForBossFight logic.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.SpawnRemainingTroopsForBossFight(spawnFrames);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnMissionTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**Purpose:** **Purpose:** Invoked when the stealth mission counter failed event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnStealthMissionCounterFailed(obj);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** **Purpose:** Determines whether the this instance is in the side depleted state or condition.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
var result = hideoutAmbushMissionController.IsSideDepleted(side);
```

### OnAgentsShouldBeEnabled
`public void OnAgentsShouldBeEnabled()`

**Purpose:** **Purpose:** Invoked when the agents should be enabled event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentsShouldBeEnabled();
```

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**Purpose:** **Purpose:** Starts the boss fight duel mode flow or state machine.

```csharp
// Static call; no instance required
HideoutAmbushMissionController.StartBossFightDuelMode();
```

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**Purpose:** **Purpose:** Starts the boss fight battle mode flow or state machine.

```csharp
// Static call; no instance required
HideoutAmbushMissionController.StartBossFightBattleMode();
```

### KillAllSentries
`public static string KillAllSentries(List<string> strings)`

**Purpose:** **Purpose:** Executes the KillAllSentries logic.

```csharp
// Static call; no instance required
HideoutAmbushMissionController.KillAllSentries(strings);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutAmbushMissionController>();
```

## See Also

- [Area Index](../)