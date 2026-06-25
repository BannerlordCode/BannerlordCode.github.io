---
title: "MissionGauntletStealthFailCounterView"
description: "Auto-generated class reference for MissionGauntletStealthFailCounterView."
---
# MissionGauntletStealthFailCounterView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletStealthFailCounterView : MissionStealthFailCounterView`
**Base:** `MissionStealthFailCounterView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletStealthFailCounterView.cs`

## Overview

`MissionGauntletStealthFailCounterView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletStealthFailCounterView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletStealthFailCounterView from the subsystem API first
MissionGauntletStealthFailCounterView missionGauntletStealthFailCounterView = ...;
missionGauntletStealthFailCounterView.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletStealthFailCounterView from the subsystem API first
MissionGauntletStealthFailCounterView missionGauntletStealthFailCounterView = ...;
missionGauntletStealthFailCounterView.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletStealthFailCounterView from the subsystem API first
MissionGauntletStealthFailCounterView missionGauntletStealthFailCounterView = ...;
missionGauntletStealthFailCounterView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletStealthFailCounterView from the subsystem API first
MissionGauntletStealthFailCounterView missionGauntletStealthFailCounterView = ...;
missionGauntletStealthFailCounterView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletStealthFailCounterView view = ...;
```

## See Also

- [Area Index](../)