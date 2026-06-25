---
title: "ArenaPreloadView"
description: "Auto-generated class reference for ArenaPreloadView."
---
# ArenaPreloadView

**Namespace:** SandBox.View.Missions.Tournaments
**Module:** SandBox.View
**Type:** `internal class ArenaPreloadView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/Tournaments/ArenaPreloadView.cs`

## Overview

`ArenaPreloadView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ArenaPreloadView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of ArenaPreloadView from the subsystem API first
ArenaPreloadView arenaPreloadView = ...;
arenaPreloadView.OnPreMissionTick(0);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Invoked when the `scene rendering started` event is raised.

```csharp
// Obtain an instance of ArenaPreloadView from the subsystem API first
ArenaPreloadView arenaPreloadView = ...;
arenaPreloadView.OnSceneRenderingStarted();
```

### OnMissionStateDeactivated
`public override void OnMissionStateDeactivated()`

**Purpose:** Invoked when the `mission state deactivated` event is raised.

```csharp
// Obtain an instance of ArenaPreloadView from the subsystem API first
ArenaPreloadView arenaPreloadView = ...;
arenaPreloadView.OnMissionStateDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
ArenaPreloadView view = ...;
```

## See Also

- [Area Index](../)