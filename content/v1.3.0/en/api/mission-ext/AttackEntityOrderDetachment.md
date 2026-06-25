---
title: "AttackEntityOrderDetachment"
description: "Auto-generated class reference for AttackEntityOrderDetachment."
---
# AttackEntityOrderDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AttackEntityOrderDetachment : IDetachment`
**Base:** `IDetachment`
**File:** `TaleWorlds.MountAndBlade/AttackEntityOrderDetachment.cs`

## Overview

`AttackEntityOrderDetachment` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Reads and returns the position value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetPosition();
```

### AddAgent
`public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)`

**Purpose:** Adds agent to the current collection or state.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
attackEntityOrderDetachment.AddAgent(agent, 0, agent.AIScriptedFrameFlags.None);
```

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**Purpose:** Adds agent at slot index to the current collection or state.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
attackEntityOrderDetachment.AddAgentAtSlotIndex(agent, 0);
```

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**Purpose:** Determines whether the this instance is in the used by formation state or condition.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.IsUsedByFormation(formation);
```

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the standing point available for agent state or condition.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.IsStandingPointAvailableForAgent(agent);
```

### GetTemplateCostsOfAgent
`public List<float> GetTemplateCostsOfAgent(Agent candidate, List<float> oldValue)`

**Purpose:** Reads and returns the template costs of agent value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetTemplateCostsOfAgent(candidate, oldValue);
```

### GetTemplateWeightOfAgent
`public float GetTemplateWeightOfAgent(Agent candidate)`

**Purpose:** Reads and returns the template weight of agent value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetTemplateWeightOfAgent(candidate);
```

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents, out Agent match)`

**Purpose:** Reads and returns the weight of agent at next slot value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfAgentAtNextSlot(newAgents, match);
```

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>> agentTemplateScores, out Agent match)`

**Purpose:** Reads and returns the weight of agent at next slot value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfAgentAtNextSlot(list<ValueTuple<Agent, 0, match);
```

### GetWeightOfAgentAtOccupiedSlot
`public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent> newAgents, out Agent match)`

**Purpose:** Reads and returns the weight of agent at occupied slot value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfAgentAtOccupiedSlot(detachedAgent, newAgents, match);
```

### RemoveAgent
`public void RemoveAgent(Agent agent)`

**Purpose:** Removes agent from the current collection or state.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
attackEntityOrderDetachment.RemoveAgent(agent);
```

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**Purpose:** Reads and returns the number of usable slots value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetNumberOfUsableSlots();
```

### GetAgentFrame
`public WorldFrame? GetAgentFrame(Agent agent)`

**Purpose:** Reads and returns the agent frame value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetAgentFrame(agent);
```

### GetWeightOfNextSlot
`public float? GetWeightOfNextSlot(BattleSideEnum side)`

**Purpose:** Reads and returns the weight of next slot value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfNextSlot(side);
```

### GetWeightOfOccupiedSlot
`public float GetWeightOfOccupiedSlot(Agent agent)`

**Purpose:** Reads and returns the weight of occupied slot value held by the this instance.

```csharp
// Obtain an instance of AttackEntityOrderDetachment from the subsystem API first
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
var result = attackEntityOrderDetachment.GetWeightOfOccupiedSlot(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AttackEntityOrderDetachment attackEntityOrderDetachment = ...;
attackEntityOrderDetachment.GetPosition();
```

## See Also

- [Area Index](../)