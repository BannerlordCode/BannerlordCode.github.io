---
title: "MissionAgentAlarmStateVM"
description: "Auto-generated class reference for MissionAgentAlarmStateVM."
---
# MissionAgentAlarmStateVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentAlarmStateVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionAgentAlarmStateVM.cs`

## Overview

`MissionAgentAlarmStateVM` lives in `SandBox.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Targets` | `public MBBindingList<MissionAgentAlarmTargetVM> Targets { get; set; }` |
| `IsMainAgentInSafeArea` | `public bool IsMainAgentInSafeArea { get; set; }` |

## Key Methods

### Initialize
`public void Initialize(Mission mission, Camera camera)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MissionAgentAlarmStateVM from the subsystem API first
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.Initialize(mission, camera);
```

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of MissionAgentAlarmStateVM from the subsystem API first
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.Update();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionAgentAlarmStateVM from the subsystem API first
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.OnAgentRemoved(agent);
```

### OnAgentBuild
`public void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionAgentAlarmStateVM from the subsystem API first
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.OnAgentBuild(agent, banner);
```

### OnAgentTeamChanged
`public void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Invoked when the agent team changed event is raised.

```csharp
// Obtain an instance of MissionAgentAlarmStateVM from the subsystem API first
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAgentAlarmStateVM missionAgentAlarmStateVM = ...;
missionAgentAlarmStateVM.Initialize(mission, camera);
```

## See Also

- [Area Index](../)