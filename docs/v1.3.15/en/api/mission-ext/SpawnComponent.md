<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SpawnComponent.cs`

## Overview

`SpawnComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<SpawnComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AreAgentsSpawning
```csharp
public bool AreAgentsSpawning()
```

### SetNewSpawnFrameBehavior
```csharp
public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)
```

### SetNewSpawningBehavior
```csharp
public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)
```

### SetSiegeSpawningBehavior
```csharp
public static void SetSiegeSpawningBehavior()
```

### SetFlagDominationSpawningBehavior
```csharp
public static void SetFlagDominationSpawningBehavior()
```

### SetWarmupSpawningBehavior
```csharp
public static void SetWarmupSpawningBehavior()
```

### SetSpawningBehaviorForCurrentGameType
```csharp
public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### GetSpawnFrame
```csharp
public MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn = false)
```

### SetEarlyAgentVisualsDespawning
```csharp
public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer, bool canDespawnEarly = true)
```

### ToggleUpdatingSpawnEquipment
```csharp
public void ToggleUpdatingSpawnEquipment(bool canUpdate)
```

### AllowEarlyAgentVisualsDespawning
```csharp
public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)
```

### GetMaximumReSpawnPeriodForPeer
```csharp
public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)
```

### OnClearScene
```csharp
public override void OnClearScene()
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

## Usage Example

```csharp
// Typical usage of SpawnComponent (Component)
agent.GetComponent<SpawnComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)