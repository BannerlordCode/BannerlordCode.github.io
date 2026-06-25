---
title: "HideoutAmbushMissionController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutAmbushMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutAmbushMissionController

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class HideoutAmbushMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Hideout/HideoutAmbushMissionController.cs`

## Overview

`HideoutAmbushMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutAmbushMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**Purpose:** Called when the `agent alarmed state changed` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnMissionStateFinalized
`public override void OnMissionStateFinalized()`

**Purpose:** Called when the `mission state finalized` event is raised.

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**Purpose:** Called when the `stealth mission counter failed` event is raised.

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side depleted`.

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**Purpose:** Sets the value or state of `overridden hideout boss character object`.

### OnAgentsShouldBeEnabled
`public void OnAgentsShouldBeEnabled()`

**Purpose:** Called when the `agents should be enabled` event is raised.

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**Purpose:** Handles logic related to `start boss fight duel mode`.

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**Purpose:** Handles logic related to `start boss fight battle mode`.

### KillAllSentries
`public static string KillAllSentries(List<string> strings)`

**Purpose:** Handles logic related to `kill all sentries`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutAmbushMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)