---
title: "MissionHideoutCinematicView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionHideoutCinematicView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionHideoutCinematicView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionHideoutCinematicView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionHideoutCinematicView.cs`

## Overview

`MissionHideoutCinematicView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionHideoutCinematicView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

## Usage Example

```csharp
var view = new MissionHideoutCinematicView();
```

## See Also

- [Complete Class Catalog](../catalog)