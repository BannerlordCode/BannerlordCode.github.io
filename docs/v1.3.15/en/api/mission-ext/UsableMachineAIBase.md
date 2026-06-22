<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMachineAIBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMachineAIBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `UsableMachineAIBase` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `HasActionCompleted` | `public virtual bool HasActionCompleted { get; }` |


## Key Methods

### Tick

```csharp
public void Tick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)
```

### GetSuitableAgentForStandingPoint

```csharp
public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, IEnumerable<Agent> agents, List<Agent> usedAgents)
```

### GetSuitableAgentForStandingPoint

```csharp
public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, List<ValueTuple<Agent, float>> agents, List<Agent> usedAgents, float weight)
```

### TeleportUserAgentsToMachine

```csharp
public virtual void TeleportUserAgentsToMachine(List<Agent> agentList)
```

### StopUsingStandingPoint

```csharp
public void StopUsingStandingPoint(StandingPoint standingPoint)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)