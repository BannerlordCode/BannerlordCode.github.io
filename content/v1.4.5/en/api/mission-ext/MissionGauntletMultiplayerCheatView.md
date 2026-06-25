---
title: "MissionGauntletMultiplayerCheatView"
description: "Auto-generated class reference for MissionGauntletMultiplayerCheatView."
---
# MissionGauntletMultiplayerCheatView

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerCheatView.cs`

## Overview

`MissionGauntletMultiplayerCheatView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletMultiplayerCheatView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**Purpose:** Reads and returns the `is cheats available` value held by the current object.

```csharp
// Obtain an instance of MissionGauntletMultiplayerCheatView from the subsystem API first
MissionGauntletMultiplayerCheatView missionGauntletMultiplayerCheatView = ...;
var result = missionGauntletMultiplayerCheatView.GetIsCheatsAvailable();
```

### InitializeScreen
`public override void InitializeScreen()`

**Purpose:** Prepares the resources, state, or bindings required by `screen`.

```csharp
// Obtain an instance of MissionGauntletMultiplayerCheatView from the subsystem API first
MissionGauntletMultiplayerCheatView missionGauntletMultiplayerCheatView = ...;
missionGauntletMultiplayerCheatView.InitializeScreen();
```

### FinalizeScreen
`public override void FinalizeScreen()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionGauntletMultiplayerCheatView from the subsystem API first
MissionGauntletMultiplayerCheatView missionGauntletMultiplayerCheatView = ...;
missionGauntletMultiplayerCheatView.FinalizeScreen();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletMultiplayerCheatView view = ...;
```

## See Also

- [Area Index](../)