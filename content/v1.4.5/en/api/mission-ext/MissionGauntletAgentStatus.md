---
title: "MissionGauntletAgentStatus"
description: "Auto-generated class reference for MissionGauntletAgentStatus."
---
# MissionGauntletAgentStatus

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAgentStatus : MissionAgentStatusUIHandler`
**Base:** `MissionAgentStatusUIHandler`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletAgentStatus.cs`

## Overview

`MissionGauntletAgentStatus` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddInteractionMessage
`public override void AddInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Adds interaction message to the current collection or state.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.AddInteractionMessage(message);
```

### RemoveInteractionMessage
`public override void RemoveInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Removes interaction message from the current collection or state.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.RemoveInteractionMessage(message);
```

### HasInteractionMessage
`public override bool HasInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Determines whether the this instance already holds interaction message.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
var result = missionGauntletAgentStatus.HasInteractionMessage(message);
```

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**Purpose:** **Purpose:** Invoked when the mission state activated event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnMissionStateActivated();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.AfterStart();
```

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnMissionScreenInitialize();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnDeploymentFinished();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnMissionScreenTick(0);
```

### OnFocusGained
`public override void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** **Purpose:** Invoked when the focus gained event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnFocusGained(mainAgent, focusableObject, false);
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** **Purpose:** Invoked when the agent interaction event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnAgentInteraction(userAgent, agent, 0);
```

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** **Purpose:** Invoked when the focus lost event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnFocusLost(agent, focusableObject);
```

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** **Purpose:** Invoked when the agent deleted event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnAgentDeleted(affectedAgent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** **Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** **Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentStatus from the subsystem API first
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletAgentStatus missionGauntletAgentStatus = ...;
missionGauntletAgentStatus.AddInteractionMessage(message);
```

## See Also

- [Area Index](../)