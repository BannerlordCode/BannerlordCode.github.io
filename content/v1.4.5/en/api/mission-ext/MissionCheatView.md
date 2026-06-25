---
title: "MissionCheatView"
description: "Auto-generated class reference for MissionCheatView."
---
# MissionCheatView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionCheatView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionCheatView.cs`

## Overview

`MissionCheatView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCheatView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIsCheatsAvailable
`public abstract bool GetIsCheatsAvailable()`

**Purpose:** Reads and returns the is cheats available value held by the this instance.

```csharp
// Obtain an instance of MissionCheatView from the subsystem API first
MissionCheatView missionCheatView = ...;
var result = missionCheatView.GetIsCheatsAvailable();
```

### InitializeScreen
`public abstract void InitializeScreen()`

**Purpose:** Prepares the resources, state, or bindings required by screen.

```csharp
// Obtain an instance of MissionCheatView from the subsystem API first
MissionCheatView missionCheatView = ...;
missionCheatView.InitializeScreen();
```

### FinalizeScreen
`public abstract void FinalizeScreen()`

**Purpose:** Executes the FinalizeScreen logic.

```csharp
// Obtain an instance of MissionCheatView from the subsystem API first
MissionCheatView missionCheatView = ...;
missionCheatView.FinalizeScreen();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionCheatView instance = ...;
```

## See Also

- [Area Index](../)