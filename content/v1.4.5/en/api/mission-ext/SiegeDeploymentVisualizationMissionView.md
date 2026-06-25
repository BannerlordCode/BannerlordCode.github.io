---
title: "SiegeDeploymentVisualizationMissionView"
description: "Auto-generated class reference for SiegeDeploymentVisualizationMissionView."
---
# SiegeDeploymentVisualizationMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentVisualizationMissionView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/SiegeDeploymentVisualizationMissionView.cs`

## Overview

`SiegeDeploymentVisualizationMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `SiegeDeploymentVisualizationMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SiegeDeploymentVisualizationMissionView from the subsystem API first
SiegeDeploymentVisualizationMissionView siegeDeploymentVisualizationMissionView = ...;
siegeDeploymentVisualizationMissionView.AfterStart();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the `deployment finished` event is raised.

```csharp
// Obtain an instance of SiegeDeploymentVisualizationMissionView from the subsystem API first
SiegeDeploymentVisualizationMissionView siegeDeploymentVisualizationMissionView = ...;
siegeDeploymentVisualizationMissionView.OnDeploymentFinished();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of SiegeDeploymentVisualizationMissionView from the subsystem API first
SiegeDeploymentVisualizationMissionView siegeDeploymentVisualizationMissionView = ...;
siegeDeploymentVisualizationMissionView.OnRemoveBehavior();
```

### SetDeploymentVisualizationSelector
`public static string SetDeploymentVisualizationSelector(List<string> strings)`

**Purpose:** Assigns a new value to `deployment visualization selector` and updates the object's internal state.

```csharp
// Static call; no instance required
SiegeDeploymentVisualizationMissionView.SetDeploymentVisualizationSelector(strings);
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of SiegeDeploymentVisualizationMissionView from the subsystem API first
SiegeDeploymentVisualizationMissionView siegeDeploymentVisualizationMissionView = ...;
siegeDeploymentVisualizationMissionView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
SiegeDeploymentVisualizationMissionView view = ...;
```

## See Also

- [Area Index](../)