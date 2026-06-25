---
title: "MissionGauntletMultiplayerEscapeMenu"
description: "Auto-generated class reference for MissionGauntletMultiplayerEscapeMenu."
---
# MissionGauntletMultiplayerEscapeMenu

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerEscapeMenu : MissionGauntletEscapeMenuBase`
**Base:** `MissionGauntletEscapeMenuBase`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerEscapeMenu.cs`

## Overview

`MissionGauntletMultiplayerEscapeMenu` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerEscapeMenu from the subsystem API first
MissionGauntletMultiplayerEscapeMenu missionGauntletMultiplayerEscapeMenu = ...;
missionGauntletMultiplayerEscapeMenu.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerEscapeMenu from the subsystem API first
MissionGauntletMultiplayerEscapeMenu missionGauntletMultiplayerEscapeMenu = ...;
missionGauntletMultiplayerEscapeMenu.OnMissionScreenTick(0);
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerEscapeMenu from the subsystem API first
MissionGauntletMultiplayerEscapeMenu missionGauntletMultiplayerEscapeMenu = ...;
var result = missionGauntletMultiplayerEscapeMenu.OnEscape();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletMultiplayerEscapeMenu missionGauntletMultiplayerEscapeMenu = ...;
missionGauntletMultiplayerEscapeMenu.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)