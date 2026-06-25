---
title: "MissionHideoutAmbushCinematicView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionHideoutAmbushCinematicView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionHideoutAmbushCinematicView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionHideoutAmbushCinematicView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionHideoutAmbushCinematicView.cs`

## Overview

`MissionHideoutAmbushCinematicView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionHideoutAmbushCinematicView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

## Usage Example

```csharp
var view = new MissionHideoutAmbushCinematicView();
```

## See Also

- [Complete Class Catalog](../catalog)