<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionPreloadView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `pre mission tick` event is raised.

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Called when the `scene rendering started` event is raised.

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Called when the `mission state deactivated` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

## Usage Example

```csharp
var view = new MissionPreloadView();
```

## See Also

- [Complete Class Catalog](../catalog)