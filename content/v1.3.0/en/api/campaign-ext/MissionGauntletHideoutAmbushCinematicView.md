---
title: "MissionGauntletHideoutAmbushCinematicView"
description: "Auto-generated class reference for MissionGauntletHideoutAmbushCinematicView."
---
# MissionGauntletHideoutAmbushCinematicView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletHideoutAmbushCinematicView : MissionHideoutAmbushCinematicView`
**Base:** `MissionHideoutAmbushCinematicView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletHideoutAmbushCinematicView.cs`

## Overview

`MissionGauntletHideoutAmbushCinematicView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletHideoutAmbushCinematicView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletHideoutAmbushCinematicView from the subsystem API first
MissionGauntletHideoutAmbushCinematicView missionGauntletHideoutAmbushCinematicView = ...;
missionGauntletHideoutAmbushCinematicView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletHideoutAmbushCinematicView from the subsystem API first
MissionGauntletHideoutAmbushCinematicView missionGauntletHideoutAmbushCinematicView = ...;
missionGauntletHideoutAmbushCinematicView.OnMissionScreenFinalize();
```

### HitTest
`public override bool HitTest()`

**Purpose:** Executes the HitTest logic.

```csharp
// Obtain an instance of MissionGauntletHideoutAmbushCinematicView from the subsystem API first
MissionGauntletHideoutAmbushCinematicView missionGauntletHideoutAmbushCinematicView = ...;
var result = missionGauntletHideoutAmbushCinematicView.HitTest();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletHideoutAmbushCinematicView view = ...;
```

## See Also

- [Area Index](../)