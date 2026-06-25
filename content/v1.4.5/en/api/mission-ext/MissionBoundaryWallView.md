---
title: "MissionBoundaryWallView"
description: "Auto-generated class reference for MissionBoundaryWallView."
---
# MissionBoundaryWallView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBoundaryWallView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionBoundaryWallView.cs`

## Overview

`MissionBoundaryWallView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionBoundaryWallView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionBoundaryWallView from the subsystem API first
MissionBoundaryWallView missionBoundaryWallView = ...;
missionBoundaryWallView.OnMissionScreenInitialize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionBoundaryWallView view = ...;
```

## See Also

- [Area Index](../)