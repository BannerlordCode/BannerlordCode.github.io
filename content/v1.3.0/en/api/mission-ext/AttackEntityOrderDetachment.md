---
title: "AttackEntityOrderDetachment"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AttackEntityOrderDetachment`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `position`.

### AddAgent
`public void AddAgent(Agent agent, int slotIndex, Agent.AIScriptedFrameFlags customFlags = Agent.AIScriptedFrameFlags.None)`

**Purpose:** Adds `agent` to the current collection or state.

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**Purpose:** Adds `agent at slot index` to the current collection or state.

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**Purpose:** Handles logic related to `is used by formation`.

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**Purpose:** Handles logic related to `is standing point available for agent`.

### GetTemplateCostsOfAgent
`public List<float> GetTemplateCostsOfAgent(Agent candidate, List<float> oldValue)`

**Purpose:** Gets the current value of `template costs of agent`.

### GetTemplateWeightOfAgent
`public float GetTemplateWeightOfAgent(Agent candidate)`

**Purpose:** Gets the current value of `template weight of agent`.

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<Agent> newAgents, out Agent match)`

**Purpose:** Gets the current value of `weight of agent at next slot`.

### GetWeightOfAgentAtNextSlot
`public float? GetWeightOfAgentAtNextSlot(List<ValueTuple<Agent, float>> agentTemplateScores, out Agent match)`

**Purpose:** Gets the current value of `weight of agent at next slot`.

### GetWeightOfAgentAtOccupiedSlot
`public float? GetWeightOfAgentAtOccupiedSlot(Agent detachedAgent, List<Agent> newAgents, out Agent match)`

**Purpose:** Gets the current value of `weight of agent at occupied slot`.

### RemoveAgent
`public void RemoveAgent(Agent agent)`

**Purpose:** Removes `agent` from the current collection or state.

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**Purpose:** Gets the current value of `number of usable slots`.

### GetAgentFrame
`public WorldFrame? GetAgentFrame(Agent agent)`

**Purpose:** Gets the current value of `agent frame`.

### GetWeightOfNextSlot
`public float? GetWeightOfNextSlot(BattleSideEnum side)`

**Purpose:** Gets the current value of `weight of next slot`.

### GetWeightOfOccupiedSlot
`public float GetWeightOfOccupiedSlot(Agent agent)`

**Purpose:** Gets the current value of `weight of occupied slot`.

## Usage Example

```csharp
var value = new AttackEntityOrderDetachment();
value.GetPosition();
```

## See Also

- [Complete Class Catalog](../catalog)