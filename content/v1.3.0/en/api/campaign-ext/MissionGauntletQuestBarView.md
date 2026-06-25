---
title: "MissionGauntletQuestBarView"
description: "Auto-generated class reference for MissionGauntletQuestBarView."
---
# MissionGauntletQuestBarView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletQuestBarView : MissionQuestBarView`
**Base:** `MissionQuestBarView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletQuestBarView.cs`

## Overview

`MissionGauntletQuestBarView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletQuestBarView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletQuestBarView from the subsystem API first
MissionGauntletQuestBarView missionGauntletQuestBarView = ...;
missionGauntletQuestBarView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletQuestBarView from the subsystem API first
MissionGauntletQuestBarView missionGauntletQuestBarView = ...;
missionGauntletQuestBarView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletQuestBarView from the subsystem API first
MissionGauntletQuestBarView missionGauntletQuestBarView = ...;
missionGauntletQuestBarView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletQuestBarView view = ...;
```

## See Also

- [Area Index](../)