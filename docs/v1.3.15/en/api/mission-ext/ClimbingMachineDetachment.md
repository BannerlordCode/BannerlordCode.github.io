<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClimbingMachineDetachment`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClimbingMachineDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ClimbingMachineDetachment` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `IsActive` | `public bool IsActive { get; }` |


## Key Methods

### Deactivate

```csharp
public void Deactivate()
```

### AddAgent

```csharp
public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)
```

### AddAgentAtSlotIndex

```csharp
public void AddAgentAtSlotIndex(Agent agent, int slotIndex)
```

### IsUsedByFormation

```csharp
public bool IsUsedByFormation(Formation formation)
```

### IsStandingPointAvailableForAgent

```csharp
public bool IsStandingPointAvailableForAgent(Agent agent)
```

### GetTemplateCostsOfAgent

```csharp
public List<float> GetTemplateCostsOfAgent(Agent candidate, List<float> oldValue)
```

### GetTemplateWeightOfAgent

```csharp
public float GetTemplateWeightOfAgent(Agent candidate)
```

### GetWeightOfAgentAtNextSlot

```csharp
public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents, out Agent match)
```

### GetWeightOfAgentAtNextSlot

```csharp
public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>> agentTemplateScores, out Agent match)
```

### GetWeightOfAgentAtOccupiedSlot

```csharp
public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent> newAgents, out Agent match)
```

### RemoveAgent

```csharp
public void RemoveAgent(Agent agent)
```

### GetNumberOfUsableSlots

```csharp
public int GetNumberOfUsableSlots()
```

### GetAgentFrame

```csharp
public WorldFrame? GetAgentFrame(Agent agent)
```

### GetWeightOfNextSlot

```csharp
public float? GetWeightOfNextSlot(BattleSideEnum side)
```

### GetWeightOfOccupiedSlot

```csharp
public float GetWeightOfOccupiedSlot(Agent agent)
```

### TickClimbingMachines

```csharp
public void TickClimbingMachines()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)