---
title: "MissionGauntletDeathCard"
description: "Auto-generated class reference for MissionGauntletDeathCard."
---
# MissionGauntletDeathCard

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletDeathCard : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletDeathCard.cs`

## Overview

`MissionGauntletDeathCard` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletDeathCard from the subsystem API first
MissionGauntletDeathCard missionGauntletDeathCard = ...;
missionGauntletDeathCard.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletDeathCard from the subsystem API first
MissionGauntletDeathCard missionGauntletDeathCard = ...;
missionGauntletDeathCard.OnMissionScreenTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGauntletDeathCard from the subsystem API first
MissionGauntletDeathCard missionGauntletDeathCard = ...;
missionGauntletDeathCard.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletDeathCard from the subsystem API first
MissionGauntletDeathCard missionGauntletDeathCard = ...;
missionGauntletDeathCard.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletDeathCard missionGauntletDeathCard = ...;
missionGauntletDeathCard.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)