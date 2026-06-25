---
title: "MissionHideoutAmbushCinematicView"
description: "Auto-generated class reference for MissionHideoutAmbushCinematicView."
---
# MissionHideoutAmbushCinematicView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionHideoutAmbushCinematicView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionHideoutAmbushCinematicView.cs`

## Overview

`MissionHideoutAmbushCinematicView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionHideoutAmbushCinematicView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionHideoutAmbushCinematicView from the subsystem API first
MissionHideoutAmbushCinematicView missionHideoutAmbushCinematicView = ...;
missionHideoutAmbushCinematicView.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionHideoutAmbushCinematicView from the subsystem API first
MissionHideoutAmbushCinematicView missionHideoutAmbushCinematicView = ...;
missionHideoutAmbushCinematicView.OnMissionTick(0);
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** **Purpose:** Invoked when the object used event is raised.

```csharp
// Obtain an instance of MissionHideoutAmbushCinematicView from the subsystem API first
MissionHideoutAmbushCinematicView missionHideoutAmbushCinematicView = ...;
missionHideoutAmbushCinematicView.OnObjectUsed(userAgent, usedObject);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionHideoutAmbushCinematicView view = ...;
```

## See Also

- [Area Index](../)