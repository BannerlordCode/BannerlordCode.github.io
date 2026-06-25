---
title: "MissionPreloadView"
description: "Auto-generated class reference for MissionPreloadView."
---
# MissionPreloadView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionPreloadView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionPreloadView.cs`

## Overview

`MissionPreloadView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionPreloadView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of MissionPreloadView from the subsystem API first
MissionPreloadView missionPreloadView = ...;
missionPreloadView.OnPreMissionTick(0);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Invoked when the `scene rendering started` event is raised.

```csharp
// Obtain an instance of MissionPreloadView from the subsystem API first
MissionPreloadView missionPreloadView = ...;
missionPreloadView.OnSceneRenderingStarted();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Invoked when the `mission state deactivated` event is raised.

```csharp
// Obtain an instance of MissionPreloadView from the subsystem API first
MissionPreloadView missionPreloadView = ...;
missionPreloadView.OnMissionStateDeactivated();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionPreloadView from the subsystem API first
MissionPreloadView missionPreloadView = ...;
missionPreloadView.OnRemoveBehavior();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionPreloadView view = ...;
```

## See Also

- [Area Index](../)