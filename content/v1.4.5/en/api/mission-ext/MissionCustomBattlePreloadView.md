---
title: "MissionCustomBattlePreloadView"
description: "Auto-generated class reference for MissionCustomBattlePreloadView."
---
# MissionCustomBattlePreloadView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCustomBattlePreloadView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionCustomBattlePreloadView.cs`

## Overview

`MissionCustomBattlePreloadView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCustomBattlePreloadView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of MissionCustomBattlePreloadView from the subsystem API first
MissionCustomBattlePreloadView missionCustomBattlePreloadView = ...;
missionCustomBattlePreloadView.OnPreMissionTick(0);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Invoked when the `scene rendering started` event is raised.

```csharp
// Obtain an instance of MissionCustomBattlePreloadView from the subsystem API first
MissionCustomBattlePreloadView missionCustomBattlePreloadView = ...;
missionCustomBattlePreloadView.OnSceneRenderingStarted();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Invoked when the `mission state deactivated` event is raised.

```csharp
// Obtain an instance of MissionCustomBattlePreloadView from the subsystem API first
MissionCustomBattlePreloadView missionCustomBattlePreloadView = ...;
missionCustomBattlePreloadView.OnMissionStateDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionCustomBattlePreloadView view = ...;
```

## See Also

- [Area Index](../)