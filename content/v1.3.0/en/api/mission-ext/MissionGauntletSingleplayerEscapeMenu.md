---
title: "MissionGauntletSingleplayerEscapeMenu"
description: "Auto-generated class reference for MissionGauntletSingleplayerEscapeMenu."
---
# MissionGauntletSingleplayerEscapeMenu

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSingleplayerEscapeMenu : MissionGauntletEscapeMenuBase`
**Base:** `MissionGauntletEscapeMenuBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs`

## Overview

`MissionGauntletSingleplayerEscapeMenu` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerEscapeMenu from the subsystem API first
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerEscapeMenu from the subsystem API first
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnMissionScreenFinalize();
```

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Invoked when the focus change on game window event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerEscapeMenu from the subsystem API first
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnFocusChangeOnGameWindow(false);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Invoked when the scene rendering started event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerEscapeMenu from the subsystem API first
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnSceneRenderingStarted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletSingleplayerEscapeMenu missionGauntletSingleplayerEscapeMenu = ...;
missionGauntletSingleplayerEscapeMenu.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)