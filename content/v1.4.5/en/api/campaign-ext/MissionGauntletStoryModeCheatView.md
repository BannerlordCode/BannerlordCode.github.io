---
title: "MissionGauntletStoryModeCheatView"
description: "Auto-generated class reference for MissionGauntletStoryModeCheatView."
---
# MissionGauntletStoryModeCheatView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletStoryModeCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `Modules.StoryMode/StoryMode.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletStoryModeCheatView.cs`

## Overview

`MissionGauntletStoryModeCheatView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletStoryModeCheatView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletStoryModeCheatView from the subsystem API first
MissionGauntletStoryModeCheatView missionGauntletStoryModeCheatView = ...;
missionGauntletStoryModeCheatView.OnMissionScreenFinalize();
```

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**Purpose:** Reads and returns the is cheats available value held by the this instance.

```csharp
// Obtain an instance of MissionGauntletStoryModeCheatView from the subsystem API first
MissionGauntletStoryModeCheatView missionGauntletStoryModeCheatView = ...;
var result = missionGauntletStoryModeCheatView.GetIsCheatsAvailable();
```

### InitializeScreen
`public override void InitializeScreen()`

**Purpose:** Prepares the resources, state, or bindings required by screen.

```csharp
// Obtain an instance of MissionGauntletStoryModeCheatView from the subsystem API first
MissionGauntletStoryModeCheatView missionGauntletStoryModeCheatView = ...;
missionGauntletStoryModeCheatView.InitializeScreen();
```

### FinalizeScreen
`public override void FinalizeScreen()`

**Purpose:** Executes the FinalizeScreen logic.

```csharp
// Obtain an instance of MissionGauntletStoryModeCheatView from the subsystem API first
MissionGauntletStoryModeCheatView missionGauntletStoryModeCheatView = ...;
missionGauntletStoryModeCheatView.FinalizeScreen();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletStoryModeCheatView from the subsystem API first
MissionGauntletStoryModeCheatView missionGauntletStoryModeCheatView = ...;
missionGauntletStoryModeCheatView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletStoryModeCheatView view = ...;
```

## See Also

- [Area Index](../)