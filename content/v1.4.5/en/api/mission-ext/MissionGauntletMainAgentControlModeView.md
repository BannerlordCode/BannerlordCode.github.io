---
title: "MissionGauntletMainAgentControlModeView"
description: "Auto-generated class reference for MissionGauntletMainAgentControlModeView."
---
# MissionGauntletMainAgentControlModeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMainAgentControlModeView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletMainAgentControlModeView.cs`

## Overview

`MissionGauntletMainAgentControlModeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletMainAgentControlModeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnMissionScreenTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentControlModeView from the subsystem API first
MissionGauntletMainAgentControlModeView missionGauntletMainAgentControlModeView = ...;
missionGauntletMainAgentControlModeView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletMainAgentControlModeView view = ...;
```

## See Also

- [Area Index](../)