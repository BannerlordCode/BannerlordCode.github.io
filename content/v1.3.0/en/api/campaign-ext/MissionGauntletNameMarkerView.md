---
title: "MissionGauntletNameMarkerView"
description: "Auto-generated class reference for MissionGauntletNameMarkerView."
---
# MissionGauntletNameMarkerView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletNameMarkerView : MissionNameMarkerUIHandler`
**Base:** `MissionNameMarkerUIHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletNameMarkerView.cs`

## Overview

`MissionGauntletNameMarkerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletNameMarkerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnMissionScreenTick(0);
```

### SetMarkersDirty
`public override void SetMarkersDirty()`

**Purpose:** Assigns a new value to markers dirty and updates the object's internal state.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.SetMarkersDirty();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent affectedAgent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnAgentBuild(affectedAgent, banner);
```

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** Invoked when the agent deleted event is raised.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnAgentDeleted(affectedAgent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletNameMarkerView from the subsystem API first
MissionGauntletNameMarkerView missionGauntletNameMarkerView = ...;
missionGauntletNameMarkerView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletNameMarkerView view = ...;
```

## See Also

- [Area Index](../)