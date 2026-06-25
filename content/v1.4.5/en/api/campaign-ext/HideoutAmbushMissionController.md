---
title: "HideoutAmbushMissionController"
description: "Auto-generated class reference for HideoutAmbushMissionController."
---
# HideoutAmbushMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushMissionController.cs`

## Overview

`HideoutAmbushMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutAmbushMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnBehaviorInitialize();
```

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnRemoveBehavior();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnMissionTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the `agent build` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentBuild(agent, banner);
```

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**Purpose:** Invoked when the `agent alarmed state changed` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentAlarmedStateChanged(agent, flag);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**Purpose:** Invoked when the `mission state finalized` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnMissionStateFinalized();
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the `object used` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnObjectUsed(userAgent, usedObject);
```

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**Purpose:** Invoked when the `stealth mission counter failed` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnStealthMissionCounterFailed(obj);
```

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Determines whether the current object is in the `side depleted` state or condition.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
var result = hideoutAmbushMissionController.IsSideDepleted(side);
```

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**Purpose:** Assigns a new value to `overridden hideout boss character object` and updates the object's internal state.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.SetOverriddenHideoutBossCharacterObject(characterObject);
```

### OnAgentsShouldBeEnabled
`public void OnAgentsShouldBeEnabled()`

**Purpose:** Invoked when the `agents should be enabled` event is raised.

```csharp
// Obtain an instance of HideoutAmbushMissionController from the subsystem API first
HideoutAmbushMissionController hideoutAmbushMissionController = ...;
hideoutAmbushMissionController.OnAgentsShouldBeEnabled();
```

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**Purpose:** Starts the `boss fight duel mode` flow or state machine.

```csharp
// Static call; no instance required
HideoutAmbushMissionController.StartBossFightDuelMode();
```

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**Purpose:** Starts the `boss fight battle mode` flow or state machine.

```csharp
// Static call; no instance required
HideoutAmbushMissionController.StartBossFightBattleMode();
```

### KillAllSentries
`public static string KillAllSentries(List<string> strings)`

**Purpose:** Performs the operation described by this method.

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