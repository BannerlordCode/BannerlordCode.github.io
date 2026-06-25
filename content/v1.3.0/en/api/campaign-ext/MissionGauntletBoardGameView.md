---
title: "MissionGauntletBoardGameView"
description: "Auto-generated class reference for MissionGauntletBoardGameView."
---
# MissionGauntletBoardGameView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletBoardGameView : MissionView, IBoardGameHandler`
**Base:** `MissionView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletBoardGameView.cs`

## Overview

`MissionGauntletBoardGameView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletBoardGameView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `_missionBoardGameHandler` | `public MissionBoardGameLogic _missionBoardGameHandler { get; }` |
| `Camera` | `public Camera Camera { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletBoardGameView from the subsystem API first
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnMissionScreenInitialize();
```

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**Purpose:** Invoked when the `mission screen activate` event is raised.

```csharp
// Obtain an instance of MissionGauntletBoardGameView from the subsystem API first
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnMissionScreenActivate();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletBoardGameView from the subsystem API first
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletBoardGameView from the subsystem API first
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnMissionScreenFinalize();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the `photo mode activated` event is raised.

```csharp
// Obtain an instance of MissionGauntletBoardGameView from the subsystem API first
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the `photo mode deactivated` event is raised.

```csharp
// Obtain an instance of MissionGauntletBoardGameView from the subsystem API first
MissionGauntletBoardGameView missionGauntletBoardGameView = ...;
missionGauntletBoardGameView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletBoardGameView view = ...;
```

## See Also

- [Area Index](../)