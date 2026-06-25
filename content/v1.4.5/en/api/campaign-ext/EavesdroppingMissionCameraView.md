---
title: "EavesdroppingMissionCameraView"
description: "Auto-generated class reference for EavesdroppingMissionCameraView."
---
# EavesdroppingMissionCameraView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class EavesdroppingMissionCameraView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/EavesdroppingMissionCameraView.cs`

## Overview

`EavesdroppingMissionCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `EavesdroppingMissionCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of EavesdroppingMissionCameraView from the subsystem API first
EavesdroppingMissionCameraView eavesdroppingMissionCameraView = ...;
eavesdroppingMissionCameraView.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of EavesdroppingMissionCameraView from the subsystem API first
EavesdroppingMissionCameraView eavesdroppingMissionCameraView = ...;
eavesdroppingMissionCameraView.OnMissionTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
EavesdroppingMissionCameraView view = ...;
```

## See Also

- [Area Index](../)