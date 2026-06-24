<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCustomBattlePreloadView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCustomBattlePreloadView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCustomBattlePreloadView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionCustomBattlePreloadView.cs`

## Overview

`MissionCustomBattlePreloadView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCustomBattlePreloadView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

## Usage Example

```csharp
var view = new MissionCustomBattlePreloadView();
```

## See Also

- [Complete Class Catalog](../catalog)