<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BehaviorData` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveBehavior` | `public BehaviorComponent ActiveBehavior { get; }` |
| `Side` | `public FormationAI.BehaviorSide Side { get; set; }` |
| `IsMainFormation` | `public bool IsMainFormation { get; set; }` |
| `BehaviorCount` | `public int BehaviorCount { get; }` |


## Key Methods

### AddAiBehavior

```csharp
public void AddAiBehavior(BehaviorComponent behaviorComponent)
```

### AddSpecialBehavior

```csharp
public void AddSpecialBehavior(BehaviorComponent behavior, bool purgePreviousSpecialBehaviors = false)
```

### Tick

```csharp
public void Tick()
```

### OnDeploymentFinished

```csharp
public void OnDeploymentFinished()
```

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent agent)
```

### GetBehaviorAtIndex

```csharp
public BehaviorComponent GetBehaviorAtIndex(int index)
```

### DebugMore

```csharp
public void DebugMore()
```

### DebugScores

```csharp
public void DebugScores()
```

### ResetBehaviorWeights

```csharp
public void ResetBehaviorWeights()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)