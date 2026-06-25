---
title: "MissionAgentAlarmStateVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentAlarmStateVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentAlarmStateVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentAlarmStateVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions/MissionAgentAlarmStateVM.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentBuild
`public void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentTeamChanged
`public void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Called when the `agent team changed` event is raised.

## Usage Example

```csharp
var value = new MissionAgentAlarmStateVM();
value.Initialize(mission, camera);
```

## See Also

- [Complete Class Catalog](../catalog)