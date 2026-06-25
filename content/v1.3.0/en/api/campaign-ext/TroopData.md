---
title: "TroopData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopData

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `public class TroopData`
**Area:** campaign-ext

## Overview

`TroopData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TroopData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsReadyForCallTroopsCinematic` | `public bool IsReadyForCallTroopsCinematic { get; }` |

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**Purpose:** Sets the value or state of `overridden hideout boss character object`.

### SpawnRemainingTroopsForBossFight
`public void SpawnRemainingTroopsForBossFight(List<MatrixFrame> spawnFrames)`

**Purpose:** Handles logic related to `spawn remaining troops for boss fight`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**Purpose:** Called when the `stealth mission counter failed` event is raised.

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**Purpose:** Handles logic related to `is side depleted`.

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
var value = new TroopData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
