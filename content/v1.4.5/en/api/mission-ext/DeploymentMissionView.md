---
title: "DeploymentMissionView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeploymentMissionView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeploymentMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DeploymentMissionView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/DeploymentMissionView.cs`

## Overview

`DeploymentMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `DeploymentMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnDeploymentPlanMade
`public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)`

**Purpose:** Called when the `deployment plan made` event is raised.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

## Usage Example

```csharp
var view = new DeploymentMissionView();
```

## See Also

- [Complete Class Catalog](../catalog)