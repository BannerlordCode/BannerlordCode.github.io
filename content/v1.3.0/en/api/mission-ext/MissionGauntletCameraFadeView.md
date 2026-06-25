---
title: "MissionGauntletCameraFadeView"
description: "Auto-generated class reference for MissionGauntletCameraFadeView."
---
# MissionGauntletCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletCameraFadeView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCameraFadeView.cs`

## Overview

`MissionGauntletCameraFadeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletCameraFadeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletCameraFadeView from the subsystem API first
MissionGauntletCameraFadeView missionGauntletCameraFadeView = ...;
missionGauntletCameraFadeView.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletCameraFadeView from the subsystem API first
MissionGauntletCameraFadeView missionGauntletCameraFadeView = ...;
missionGauntletCameraFadeView.AfterStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletCameraFadeView from the subsystem API first
MissionGauntletCameraFadeView missionGauntletCameraFadeView = ...;
missionGauntletCameraFadeView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletCameraFadeView from the subsystem API first
MissionGauntletCameraFadeView missionGauntletCameraFadeView = ...;
missionGauntletCameraFadeView.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletCameraFadeView view = ...;
```

## See Also

- [Area Index](../)