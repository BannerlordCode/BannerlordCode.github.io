---
title: "MissionGauntletCheatView"
description: "Auto-generated class reference for MissionGauntletCheatView."
---
# MissionGauntletCheatView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs`

## Overview

`MissionGauntletCheatView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletCheatView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletCheatView from the subsystem API first
MissionGauntletCheatView missionGauntletCheatView = ...;
missionGauntletCheatView.OnMissionScreenFinalize();
```

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**Purpose:** Reads and returns the is cheats available value held by the this instance.

```csharp
// Obtain an instance of MissionGauntletCheatView from the subsystem API first
MissionGauntletCheatView missionGauntletCheatView = ...;
var result = missionGauntletCheatView.GetIsCheatsAvailable();
```

### InitializeScreen
`public override void InitializeScreen()`

**Purpose:** Prepares the resources, state, or bindings required by screen.

```csharp
// Obtain an instance of MissionGauntletCheatView from the subsystem API first
MissionGauntletCheatView missionGauntletCheatView = ...;
missionGauntletCheatView.InitializeScreen();
```

### FinalizeScreen
`public override void FinalizeScreen()`

**Purpose:** Executes the FinalizeScreen logic.

```csharp
// Obtain an instance of MissionGauntletCheatView from the subsystem API first
MissionGauntletCheatView missionGauntletCheatView = ...;
missionGauntletCheatView.FinalizeScreen();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletCheatView from the subsystem API first
MissionGauntletCheatView missionGauntletCheatView = ...;
missionGauntletCheatView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletCheatView view = ...;
```

## See Also

- [Area Index](../)