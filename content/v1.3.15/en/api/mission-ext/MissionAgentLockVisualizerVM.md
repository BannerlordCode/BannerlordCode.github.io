---
title: "MissionAgentLockVisualizerVM"
description: "Auto-generated class reference for MissionAgentLockVisualizerVM."
---
# MissionAgentLockVisualizerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentLockVisualizerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentLockVisualizerVM.cs`

## Overview

`MissionAgentLockVisualizerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllTrackedAgents` | `public MBBindingList<MissionAgentLockItemVM> AllTrackedAgents { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### OnActiveLockAgentChange
`public void OnActiveLockAgentChange(Agent oldAgent, Agent newAgent)`

**Purpose:** Invoked when the `active lock agent change` event is raised.

```csharp
// Obtain an instance of MissionAgentLockVisualizerVM from the subsystem API first
MissionAgentLockVisualizerVM missionAgentLockVisualizerVM = ...;
missionAgentLockVisualizerVM.OnActiveLockAgentChange(oldAgent, newAgent);
```

### OnPossibleLockAgentChange
`public void OnPossibleLockAgentChange(Agent oldPossibleAgent, Agent newPossibleAgent)`

**Purpose:** Invoked when the `possible lock agent change` event is raised.

```csharp
// Obtain an instance of MissionAgentLockVisualizerVM from the subsystem API first
MissionAgentLockVisualizerVM missionAgentLockVisualizerVM = ...;
missionAgentLockVisualizerVM.OnPossibleLockAgentChange(oldPossibleAgent, newPossibleAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAgentLockVisualizerVM missionAgentLockVisualizerVM = ...;
missionAgentLockVisualizerVM.OnActiveLockAgentChange(oldAgent, newAgent);
```

## See Also

- [Area Index](../)