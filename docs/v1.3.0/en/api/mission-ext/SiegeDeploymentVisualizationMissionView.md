<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeDeploymentVisualizationMissionView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeDeploymentVisualizationMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentVisualizationMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/SiegeDeploymentVisualizationMissionView.cs`

## Overview

`SiegeDeploymentVisualizationMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `SiegeDeploymentVisualizationMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### SetDeploymentVisualizationSelector
`public static string SetDeploymentVisualizationSelector(List<string> strings)`

**Purpose:** Sets the value or state of `deployment visualization selector`.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

## Usage Example

```csharp
var view = new SiegeDeploymentVisualizationMissionView();
```

## See Also

- [Complete Class Catalog](../catalog)