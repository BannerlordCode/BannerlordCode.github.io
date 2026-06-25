---
title: "MissionHideoutCinematicView"
description: "Auto-generated class reference for MissionHideoutCinematicView."
---
# MissionHideoutCinematicView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionHideoutCinematicView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionHideoutCinematicView.cs`

## Overview

`MissionHideoutCinematicView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionHideoutCinematicView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionHideoutCinematicView from the subsystem API first
MissionHideoutCinematicView missionHideoutCinematicView = ...;
missionHideoutCinematicView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionHideoutCinematicView view = ...;
```

## See Also

- [Area Index](../)