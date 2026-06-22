<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawningBehaviorBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawningBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SpawningBehaviorBase` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### Initialize

```csharp
public virtual void Initialize(SpawnComponent spawnComponent)
```

### Clear

```csharp
public virtual void Clear()
```

### OnTick

```csharp
public virtual void OnTick(float dt)
```

### AreAgentsSpawning

```csharp
public bool AreAgentsSpawning()
```

### RequestStartSpawnSession

```csharp
public virtual void RequestStartSpawnSession()
```

### RequestStopSpawnSession

```csharp
public void RequestStopSpawnSession()
```

### SetRemainingAgentsInvulnerable

```csharp
public void SetRemainingAgentsInvulnerable()
```

### CanUpdateSpawnEquipment

```csharp
public virtual bool CanUpdateSpawnEquipment(MissionPeer missionPeer)
```

### ToggleUpdatingSpawnEquipment

```csharp
public void ToggleUpdatingSpawnEquipment(bool canUpdate)
```

### AllowEarlyAgentVisualsDespawning

```csharp
public abstract bool AllowEarlyAgentVisualsDespawning(MissionPeer missionPeer)
```

### GetMaximumReSpawnPeriodForPeer

```csharp
public virtual int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)
```

### OnClearScene

```csharp
public virtual void OnClearScene()
```

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### OnSpawningEndedEventDelegate

```csharp
public delegate void OnSpawningEndedEventDelegate()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)