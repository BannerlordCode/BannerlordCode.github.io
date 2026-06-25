---
title: "MissionGauntletMultiplayerScoreboard"
description: "Auto-generated class reference for MissionGauntletMultiplayerScoreboard."
---
# MissionGauntletMultiplayerScoreboard

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerScoreboard : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerScoreboard.cs`

## Overview

`MissionGauntletMultiplayerScoreboard` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerScoreboard from the subsystem API first
MissionGauntletMultiplayerScoreboard missionGauntletMultiplayerScoreboard = ...;
missionGauntletMultiplayerScoreboard.OnMissionScreenInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerScoreboard from the subsystem API first
MissionGauntletMultiplayerScoreboard missionGauntletMultiplayerScoreboard = ...;
missionGauntletMultiplayerScoreboard.OnRemoveBehavior();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerScoreboard from the subsystem API first
MissionGauntletMultiplayerScoreboard missionGauntletMultiplayerScoreboard = ...;
missionGauntletMultiplayerScoreboard.OnMissionScreenFinalize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerScoreboard from the subsystem API first
MissionGauntletMultiplayerScoreboard missionGauntletMultiplayerScoreboard = ...;
missionGauntletMultiplayerScoreboard.OnMissionTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletMultiplayerScoreboard missionGauntletMultiplayerScoreboard = ...;
missionGauntletMultiplayerScoreboard.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)