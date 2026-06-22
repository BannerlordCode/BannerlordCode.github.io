<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnFrameBehaviorBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnFrameBehaviorBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SpawnFrameBehaviorBase` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### Initialize

```csharp
public virtual void Initialize()
```

### GetSpawnFrame

```csharp
public abstract MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)
```

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### CreateDecreasingCache

```csharp
public static SpawnFrameBehaviorBase.WeightCache CreateDecreasingCache()
```

### CheckAndInsertNewValueIfLower

```csharp
public bool CheckAndInsertNewValueIfLower(float value, out float valueDifference)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)