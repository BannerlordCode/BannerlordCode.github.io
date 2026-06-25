---
title: "ClimbingMachineDetachment"
description: "Auto-generated class reference for ClimbingMachineDetachment."
---
# ClimbingMachineDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClimbingMachineDetachment : IDetachment`
**Base:** `IDetachment`
**File:** `TaleWorlds.MountAndBlade/ClimbingMachineDetachment.cs`

## Overview

`ClimbingMachineDetachment` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### Deactivate
`public void Deactivate()`

**Purpose:** Deactivates the resource, state, or feature represented by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
climbingMachineDetachment.Deactivate();
```

### AddAgent
`public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)`

**Purpose:** Adds agent to the current collection or state.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
climbingMachineDetachment.AddAgent(agent, 0, agent.AIScriptedFrameFlags.None);
```

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**Purpose:** Adds agent at slot index to the current collection or state.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
climbingMachineDetachment.AddAgentAtSlotIndex(agent, 0);
```

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**Purpose:** Determines whether the this instance is in the used by formation state or condition.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.IsUsedByFormation(formation);
```

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the standing point available for agent state or condition.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.IsStandingPointAvailableForAgent(agent);
```

### GetTemplateCostsOfAgent
`public List<float> GetTemplateCostsOfAgent(Agent candidate, List<float> oldValue)`

**Purpose:** Reads and returns the template costs of agent value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetTemplateCostsOfAgent(candidate, oldValue);
```

### GetTemplateWeightOfAgent
`public float GetTemplateWeightOfAgent(Agent candidate)`

**Purpose:** Reads and returns the template weight of agent value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetTemplateWeightOfAgent(candidate);
```

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents, out Agent match)`

**Purpose:** Reads and returns the weight of agent at next slot value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetWeightOfAgentAtNextSlot(newAgents, match);
```

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>> agentTemplateScores, out Agent match)`

**Purpose:** Reads and returns the weight of agent at next slot value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetWeightOfAgentAtNextSlot(list<ValueTuple<Agent, 0, match);
```

### GetWeightOfAgentAtOccupiedSlot
`public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent> newAgents, out Agent match)`

**Purpose:** Reads and returns the weight of agent at occupied slot value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetWeightOfAgentAtOccupiedSlot(detachedAgent, newAgents, match);
```

### RemoveAgent
`public void RemoveAgent(Agent agent)`

**Purpose:** Removes agent from the current collection or state.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
climbingMachineDetachment.RemoveAgent(agent);
```

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**Purpose:** Reads and returns the number of usable slots value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetNumberOfUsableSlots();
```

### GetAgentFrame
`public WorldFrame? GetAgentFrame(Agent agent)`

**Purpose:** Reads and returns the agent frame value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetAgentFrame(agent);
```

### GetWeightOfNextSlot
`public float? GetWeightOfNextSlot(BattleSideEnum side)`

**Purpose:** Reads and returns the weight of next slot value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetWeightOfNextSlot(side);
```

### GetWeightOfOccupiedSlot
`public float GetWeightOfOccupiedSlot(Agent agent)`

**Purpose:** Reads and returns the weight of occupied slot value held by the this instance.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
var result = climbingMachineDetachment.GetWeightOfOccupiedSlot(agent);
```

### TickClimbingMachines
`public void TickClimbingMachines()`

**Purpose:** Advances the climbing machines state each frame or update cycle.

```csharp
// Obtain an instance of ClimbingMachineDetachment from the subsystem API first
ClimbingMachineDetachment climbingMachineDetachment = ...;
climbingMachineDetachment.TickClimbingMachines();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClimbingMachineDetachment climbingMachineDetachment = ...;
climbingMachineDetachment.Deactivate();
```

## See Also

- [Area Index](../)