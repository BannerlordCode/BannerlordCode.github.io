<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCustomCameraView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var view = new MissionCustomCameraView();
```

## See Also

- [Complete Class Catalog](../catalog)