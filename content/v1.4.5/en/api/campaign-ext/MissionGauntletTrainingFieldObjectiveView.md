---
title: "MissionGauntletTrainingFieldObjectiveView"
description: "Auto-generated class reference for MissionGauntletTrainingFieldObjectiveView."
---
# MissionGauntletTrainingFieldObjectiveView

**Namespace:** StoryMode.GauntletUI.Missions
**Module:** StoryMode.GauntletUI
**Type:** `public class MissionGauntletTrainingFieldObjectiveView : MissionView`
**Base:** `MissionView`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Missions/MissionGauntletTrainingFieldObjectiveView.cs`

## Overview

`MissionGauntletTrainingFieldObjectiveView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletTrainingFieldObjectiveView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletTrainingFieldObjectiveView from the subsystem API first
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletTrainingFieldObjectiveView from the subsystem API first
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletTrainingFieldObjectiveView from the subsystem API first
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnMissionScreenFinalize();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletTrainingFieldObjectiveView from the subsystem API first
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletTrainingFieldObjectiveView from the subsystem API first
MissionGauntletTrainingFieldObjectiveView missionGauntletTrainingFieldObjectiveView = ...;
missionGauntletTrainingFieldObjectiveView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletTrainingFieldObjectiveView view = ...;
```

## See Also

- [Area Index](../)