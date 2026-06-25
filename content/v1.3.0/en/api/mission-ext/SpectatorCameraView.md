---
title: "SpectatorCameraView"
description: "Auto-generated class reference for SpectatorCameraView."
---
# SpectatorCameraView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpectatorCameraView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SpectatorCameraView.cs`

## Overview

`SpectatorCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `SpectatorCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of SpectatorCameraView from the subsystem API first
SpectatorCameraView spectatorCameraView = ...;
spectatorCameraView.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of SpectatorCameraView from the subsystem API first
SpectatorCameraView spectatorCameraView = ...;
spectatorCameraView.AfterStart();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
SpectatorCameraView view = ...;
```

## See Also

- [Area Index](../)