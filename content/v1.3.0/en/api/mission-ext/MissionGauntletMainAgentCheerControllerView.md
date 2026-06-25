---
title: "MissionGauntletMainAgentCheerControllerView"
description: "Auto-generated class reference for MissionGauntletMainAgentCheerControllerView."
---
# MissionGauntletMainAgentCheerControllerView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMainAgentCheerControllerView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletMainAgentCheerControllerView.cs`

## Overview

`MissionGauntletMainAgentCheerControllerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletMainAgentCheerControllerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentCheerControllerView from the subsystem API first
MissionGauntletMainAgentCheerControllerView missionGauntletMainAgentCheerControllerView = ...;
missionGauntletMainAgentCheerControllerView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentCheerControllerView from the subsystem API first
MissionGauntletMainAgentCheerControllerView missionGauntletMainAgentCheerControllerView = ...;
missionGauntletMainAgentCheerControllerView.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentCheerControllerView from the subsystem API first
MissionGauntletMainAgentCheerControllerView missionGauntletMainAgentCheerControllerView = ...;
missionGauntletMainAgentCheerControllerView.OnMissionScreenTick(0);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the `photo mode activated` event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentCheerControllerView from the subsystem API first
MissionGauntletMainAgentCheerControllerView missionGauntletMainAgentCheerControllerView = ...;
missionGauntletMainAgentCheerControllerView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the `photo mode deactivated` event is raised.

```csharp
// Obtain an instance of MissionGauntletMainAgentCheerControllerView from the subsystem API first
MissionGauntletMainAgentCheerControllerView missionGauntletMainAgentCheerControllerView = ...;
missionGauntletMainAgentCheerControllerView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletMainAgentCheerControllerView view = ...;
```

## See Also

- [Area Index](../)