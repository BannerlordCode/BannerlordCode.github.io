---
title: "MissionGauntletMainAgentEquipDropView"
description: "Auto-generated class reference for MissionGauntletMainAgentEquipDropView."
---
# MissionGauntletMainAgentEquipDropView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMainAgentEquipDropView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletMainAgentEquipDropView.cs`

## Overview

`MissionGauntletMainAgentEquipDropView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletMainAgentEquipDropView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipDropView from the subsystem API first
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipDropView from the subsystem API first
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipDropView from the subsystem API first
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipDropView from the subsystem API first
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnMissionScreenTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipDropView from the subsystem API first
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** **Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipDropView from the subsystem API first
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** **Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipDropView from the subsystem API first
MissionGauntletMainAgentEquipDropView missionGauntletMainAgentEquipDropView = ...;
missionGauntletMainAgentEquipDropView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletMainAgentEquipDropView view = ...;
```

## See Also

- [Area Index](../)