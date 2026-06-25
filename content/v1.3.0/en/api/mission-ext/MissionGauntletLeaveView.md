---
title: "MissionGauntletLeaveView"
description: "Auto-generated class reference for MissionGauntletLeaveView."
---
# MissionGauntletLeaveView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletLeaveView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletLeaveView.cs`

## Overview

`MissionGauntletLeaveView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletLeaveView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletLeaveView from the subsystem API first
MissionGauntletLeaveView missionGauntletLeaveView = ...;
missionGauntletLeaveView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletLeaveView from the subsystem API first
MissionGauntletLeaveView missionGauntletLeaveView = ...;
missionGauntletLeaveView.OnMissionScreenFinalize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionGauntletLeaveView from the subsystem API first
MissionGauntletLeaveView missionGauntletLeaveView = ...;
missionGauntletLeaveView.OnMissionTick(0);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletLeaveView from the subsystem API first
MissionGauntletLeaveView missionGauntletLeaveView = ...;
missionGauntletLeaveView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletLeaveView from the subsystem API first
MissionGauntletLeaveView missionGauntletLeaveView = ...;
missionGauntletLeaveView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletLeaveView view = ...;
```

## See Also

- [Area Index](../)