---
title: "MissionItemContourControllerView"
description: "Auto-generated class reference for MissionItemContourControllerView."
---
# MissionItemContourControllerView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionItemContourControllerView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionItemContourControllerView.cs`

## Overview

`MissionItemContourControllerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionItemContourControllerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionItemContourControllerView from the subsystem API first
MissionItemContourControllerView missionItemContourControllerView = ...;
missionItemContourControllerView.OnMissionScreenTick(0);
```

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Invoked when the focus gained event is raised.

```csharp
// Obtain an instance of MissionItemContourControllerView from the subsystem API first
MissionItemContourControllerView missionItemContourControllerView = ...;
missionItemContourControllerView.OnFocusGained(agent, focusableObject, false);
```

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Invoked when the focus lost event is raised.

```csharp
// Obtain an instance of MissionItemContourControllerView from the subsystem API first
MissionItemContourControllerView missionItemContourControllerView = ...;
missionItemContourControllerView.OnFocusLost(agent, focusableObject);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionItemContourControllerView view = ...;
```

## See Also

- [Area Index](../)