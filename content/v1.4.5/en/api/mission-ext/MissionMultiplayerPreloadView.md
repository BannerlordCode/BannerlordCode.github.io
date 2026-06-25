---
title: "MissionMultiplayerPreloadView"
description: "Auto-generated class reference for MissionMultiplayerPreloadView."
---
# MissionMultiplayerPreloadView

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerPreloadView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionMultiplayerPreloadView.cs`

## Overview

`MissionMultiplayerPreloadView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionMultiplayerPreloadView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerPreloadView from the subsystem API first
MissionMultiplayerPreloadView missionMultiplayerPreloadView = ...;
missionMultiplayerPreloadView.OnPreMissionTick(0);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Invoked when the `scene rendering started` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerPreloadView from the subsystem API first
MissionMultiplayerPreloadView missionMultiplayerPreloadView = ...;
missionMultiplayerPreloadView.OnSceneRenderingStarted();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Invoked when the `mission state deactivated` event is raised.

```csharp
// Obtain an instance of MissionMultiplayerPreloadView from the subsystem API first
MissionMultiplayerPreloadView missionMultiplayerPreloadView = ...;
missionMultiplayerPreloadView.OnMissionStateDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionMultiplayerPreloadView view = ...;
```

## See Also

- [Area Index](../)