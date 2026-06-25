---
title: "SpawnComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SpawnComponent.cs`

## Overview

`SpawnComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `SpawnComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnFrameBehavior` | `public SpawnFrameBehaviorBase SpawnFrameBehavior { get; }` |
| `SpawningBehavior` | `public SpawningBehaviorBase SpawningBehavior { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

**Purpose:** Handles logic related to `are agents spawning`.

### SetNewSpawnFrameBehavior
`public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)`

**Purpose:** Sets the value or state of `new spawn frame behavior`.

### SetNewSpawningBehavior
`public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)`

**Purpose:** Sets the value or state of `new spawning behavior`.

### SetSiegeSpawningBehavior
`public static void SetSiegeSpawningBehavior()`

**Purpose:** Sets the value or state of `siege spawning behavior`.

### SetFlagDominationSpawningBehavior
`public static void SetFlagDominationSpawningBehavior()`

**Purpose:** Sets the value or state of `flag domination spawning behavior`.

### SetWarmupSpawningBehavior
`public static void SetWarmupSpawningBehavior()`

**Purpose:** Sets the value or state of `warmup spawning behavior`.

### SetSpawningBehaviorForCurrentGameType
`public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)`

**Purpose:** Sets the value or state of `spawning behavior for current game type`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn = false)`

**Purpose:** Gets the current value of `spawn frame`.

### SetEarlyAgentVisualsDespawning
`public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer, bool canDespawnEarly = true)`

**Purpose:** Sets the value or state of `early agent visuals despawning`.

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

**Purpose:** Handles logic related to `toggle updating spawn equipment`.

### AllowEarlyAgentVisualsDespawning
`public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**Purpose:** Handles logic related to `allow early agent visuals despawning`.

### GetMaximumReSpawnPeriodForPeer
`public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)`

**Purpose:** Gets the current value of `maximum re spawn period for peer`.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<SpawnComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)