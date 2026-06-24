<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerPreloadView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerPreloadView

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerPreloadView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionMultiplayerPreloadView.cs`

## Overview

`MissionMultiplayerPreloadView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionMultiplayerPreloadView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var view = new MissionMultiplayerPreloadView();
```

## See Also

- [Complete Class Catalog](../catalog)