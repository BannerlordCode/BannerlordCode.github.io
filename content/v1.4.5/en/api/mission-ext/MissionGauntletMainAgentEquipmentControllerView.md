---
title: "MissionGauntletMainAgentEquipmentControllerView"
description: "Auto-generated class reference for MissionGauntletMainAgentEquipmentControllerView."
---
# MissionGauntletMainAgentEquipmentControllerView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMainAgentEquipmentControllerView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletMainAgentEquipmentControllerView.cs`

## Overview

`MissionGauntletMainAgentEquipmentControllerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletMainAgentEquipmentControllerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipmentControllerView from the subsystem API first
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipmentControllerView from the subsystem API first
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipmentControllerView from the subsystem API first
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnMissionScreenTick(0);
```

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Invoked when the focus gained event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipmentControllerView from the subsystem API first
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnFocusGained(agent, focusableObject, false);
```

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Invoked when the focus lost event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipmentControllerView from the subsystem API first
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnFocusLost(agent, focusableObject);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipmentControllerView from the subsystem API first
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentEquipmentControllerView from the subsystem API first
MissionGauntletMainAgentEquipmentControllerView missionGauntletMainAgentEquipmentControllerView = ...;
missionGauntletMainAgentEquipmentControllerView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletMainAgentEquipmentControllerView view = ...;
```

## See Also

- [Area Index](../)