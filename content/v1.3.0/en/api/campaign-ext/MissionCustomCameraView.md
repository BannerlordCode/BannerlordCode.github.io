---
title: "MissionCustomCameraView"
description: "Auto-generated class reference for MissionCustomCameraView."
---
# MissionCustomCameraView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionCustomCameraView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionCustomCameraView.cs`

## Overview

`MissionCustomCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCustomCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionCustomCameraView from the subsystem API first
MissionCustomCameraView missionCustomCameraView = ...;
missionCustomCameraView.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionCustomCameraView from the subsystem API first
MissionCustomCameraView missionCustomCameraView = ...;
missionCustomCameraView.OnMissionTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionCustomCameraView view = ...;
```

## See Also

- [Area Index](../)