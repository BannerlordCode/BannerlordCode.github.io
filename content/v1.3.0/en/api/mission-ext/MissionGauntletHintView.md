---
title: "MissionGauntletHintView"
description: "Auto-generated class reference for MissionGauntletHintView."
---
# MissionGauntletHintView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletHintView : MissionHintView`
**Base:** `MissionHintView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletHintView.cs`

## Overview

`MissionGauntletHintView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletHintView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletHintView from the subsystem API first
MissionGauntletHintView missionGauntletHintView = ...;
missionGauntletHintView.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletHintView from the subsystem API first
MissionGauntletHintView missionGauntletHintView = ...;
missionGauntletHintView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletHintView view = ...;
```

## See Also

- [Area Index](../)