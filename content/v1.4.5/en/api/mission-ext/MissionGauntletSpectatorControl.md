---
title: "MissionGauntletSpectatorControl"
description: "Auto-generated class reference for MissionGauntletSpectatorControl."
---
# MissionGauntletSpectatorControl

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSpectatorControl : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletSpectatorControl.cs`

## Overview

`MissionGauntletSpectatorControl` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionGauntletSpectatorControl from the subsystem API first
MissionGauntletSpectatorControl missionGauntletSpectatorControl = ...;
missionGauntletSpectatorControl.EarlyStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletSpectatorControl from the subsystem API first
MissionGauntletSpectatorControl missionGauntletSpectatorControl = ...;
missionGauntletSpectatorControl.OnMissionTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletSpectatorControl from the subsystem API first
MissionGauntletSpectatorControl missionGauntletSpectatorControl = ...;
missionGauntletSpectatorControl.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletSpectatorControl missionGauntletSpectatorControl = ...;
missionGauntletSpectatorControl.EarlyStart();
```

## See Also

- [Area Index](../)