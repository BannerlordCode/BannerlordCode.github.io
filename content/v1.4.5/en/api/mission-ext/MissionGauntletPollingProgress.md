---
title: "MissionGauntletPollingProgress"
description: "Auto-generated class reference for MissionGauntletPollingProgress."
---
# MissionGauntletPollingProgress

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletPollingProgress : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletPollingProgress.cs`

## Overview

`MissionGauntletPollingProgress` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletPollingProgress from the subsystem API first
MissionGauntletPollingProgress missionGauntletPollingProgress = ...;
missionGauntletPollingProgress.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletPollingProgress from the subsystem API first
MissionGauntletPollingProgress missionGauntletPollingProgress = ...;
missionGauntletPollingProgress.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletPollingProgress from the subsystem API first
MissionGauntletPollingProgress missionGauntletPollingProgress = ...;
missionGauntletPollingProgress.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletPollingProgress missionGauntletPollingProgress = ...;
missionGauntletPollingProgress.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)