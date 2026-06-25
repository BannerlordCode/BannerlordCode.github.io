---
title: "GauntletCustomBattleMissionCheatView"
description: "Auto-generated class reference for GauntletCustomBattleMissionCheatView."
---
# GauntletCustomBattleMissionCheatView

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.Views
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class GauntletCustomBattleMissionCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.Views/GauntletCustomBattleMissionCheatView.cs`

## Overview

`GauntletCustomBattleMissionCheatView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletCustomBattleMissionCheatView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InitializeScreen
`public override void InitializeScreen()`

**Purpose:** Prepares the resources, state, or bindings required by screen.

```csharp
// Obtain an instance of GauntletCustomBattleMissionCheatView from the subsystem API first
GauntletCustomBattleMissionCheatView gauntletCustomBattleMissionCheatView = ...;
gauntletCustomBattleMissionCheatView.InitializeScreen();
```

### FinalizeScreen
`public override void FinalizeScreen()`

**Purpose:** Executes the FinalizeScreen logic.

```csharp
// Obtain an instance of GauntletCustomBattleMissionCheatView from the subsystem API first
GauntletCustomBattleMissionCheatView gauntletCustomBattleMissionCheatView = ...;
gauntletCustomBattleMissionCheatView.FinalizeScreen();
```

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**Purpose:** Reads and returns the is cheats available value held by the this instance.

```csharp
// Obtain an instance of GauntletCustomBattleMissionCheatView from the subsystem API first
GauntletCustomBattleMissionCheatView gauntletCustomBattleMissionCheatView = ...;
var result = gauntletCustomBattleMissionCheatView.GetIsCheatsAvailable();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletCustomBattleMissionCheatView view = ...;
```

## See Also

- [Area Index](../)