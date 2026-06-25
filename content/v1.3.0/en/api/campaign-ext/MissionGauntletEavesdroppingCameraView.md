---
title: "MissionGauntletEavesdroppingCameraView"
description: "Auto-generated class reference for MissionGauntletEavesdroppingCameraView."
---
# MissionGauntletEavesdroppingCameraView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletEavesdroppingCameraView : EavesdroppingMissionCameraView`
**Base:** `EavesdroppingMissionCameraView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletEavesdroppingCameraView.cs`

## Overview

`MissionGauntletEavesdroppingCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletEavesdroppingCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletEavesdroppingCameraView from the subsystem API first
MissionGauntletEavesdroppingCameraView missionGauntletEavesdroppingCameraView = ...;
missionGauntletEavesdroppingCameraView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletEavesdroppingCameraView from the subsystem API first
MissionGauntletEavesdroppingCameraView missionGauntletEavesdroppingCameraView = ...;
missionGauntletEavesdroppingCameraView.OnMissionScreenFinalize();
```

### HitTest
`public override bool HitTest()`

**Purpose:** Executes the HitTest logic.

```csharp
// Obtain an instance of MissionGauntletEavesdroppingCameraView from the subsystem API first
MissionGauntletEavesdroppingCameraView missionGauntletEavesdroppingCameraView = ...;
var result = missionGauntletEavesdroppingCameraView.HitTest();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletEavesdroppingCameraView view = ...;
```

## See Also

- [Area Index](../)