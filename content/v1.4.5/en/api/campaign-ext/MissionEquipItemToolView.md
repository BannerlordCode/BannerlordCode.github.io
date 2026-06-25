---
title: "MissionEquipItemToolView"
description: "Auto-generated class reference for MissionEquipItemToolView."
---
# MissionEquipItemToolView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionEquipItemToolView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionEquipItemToolView.cs`

## Overview

`MissionEquipItemToolView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionEquipItemToolView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionEquipItemToolView from the subsystem API first
MissionEquipItemToolView missionEquipItemToolView = ...;
missionEquipItemToolView.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionEquipItemToolView from the subsystem API first
MissionEquipItemToolView missionEquipItemToolView = ...;
missionEquipItemToolView.OnMissionTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionEquipItemToolView view = ...;
```

## See Also

- [Area Index](../)