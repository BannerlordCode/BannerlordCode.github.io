---
title: "DeploymentMissionView"
description: "Auto-generated class reference for DeploymentMissionView."
---
# DeploymentMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentMissionView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/DeploymentMissionView.cs`

## Overview

`DeploymentMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `DeploymentMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of DeploymentMissionView from the subsystem API first
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.AfterStart();
```

### OnDeploymentPlanMade
`public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** Invoked when the deployment plan made event is raised.

```csharp
// Obtain an instance of DeploymentMissionView from the subsystem API first
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.OnDeploymentPlanMade(team, false);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of DeploymentMissionView from the subsystem API first
DeploymentMissionView deploymentMissionView = ...;
deploymentMissionView.OnDeploymentFinished();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
DeploymentMissionView view = ...;
```

## See Also

- [Area Index](../)