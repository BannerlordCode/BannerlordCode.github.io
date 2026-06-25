---
title: "MissionGauntletObjectiveView"
description: "Auto-generated class reference for MissionGauntletObjectiveView."
---
# MissionGauntletObjectiveView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletObjectiveView : MissionObjectiveView`
**Base:** `MissionObjectiveView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletObjectiveView.cs`

## Overview

`MissionGauntletObjectiveView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletObjectiveView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletObjectiveView from the subsystem API first
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletObjectiveView from the subsystem API first
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletObjectiveView from the subsystem API first
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnMissionScreenTick(0);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** **Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletObjectiveView from the subsystem API first
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** **Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletObjectiveView from the subsystem API first
MissionGauntletObjectiveView missionGauntletObjectiveView = ...;
missionGauntletObjectiveView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletObjectiveView view = ...;
```

## See Also

- [Area Index](../)