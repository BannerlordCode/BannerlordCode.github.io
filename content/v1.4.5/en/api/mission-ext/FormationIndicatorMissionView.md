---
title: "FormationIndicatorMissionView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationIndicatorMissionView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FormationIndicatorMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationIndicatorMissionView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/FormationIndicatorMissionView.cs`

## Overview

`FormationIndicatorMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `FormationIndicatorMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DetermineIndicatorState
`public void DetermineIndicatorState(float dt, Vec3 position)`

**Purpose:** Handles logic related to `determine indicator state`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

## Usage Example

```csharp
var view = new FormationIndicatorMissionView();
```

## See Also

- [Complete Class Catalog](../catalog)