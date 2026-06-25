---
title: "MissionGauntletClassLoadout"
description: "Auto-generated class reference for MissionGauntletClassLoadout."
---
# MissionGauntletClassLoadout

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletClassLoadout : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletClassLoadout.cs`

## Overview

`MissionGauntletClassLoadout` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `IsForceClosed` | `public bool IsForceClosed { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletClassLoadout from the subsystem API first
MissionGauntletClassLoadout missionGauntletClassLoadout = ...;
missionGauntletClassLoadout.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletClassLoadout from the subsystem API first
MissionGauntletClassLoadout missionGauntletClassLoadout = ...;
missionGauntletClassLoadout.OnMissionScreenFinalize();
```

### OnTryToggle
`public void OnTryToggle(bool isActive)`

**Purpose:** Invoked when the try toggle event is raised.

```csharp
// Obtain an instance of MissionGauntletClassLoadout from the subsystem API first
MissionGauntletClassLoadout missionGauntletClassLoadout = ...;
missionGauntletClassLoadout.OnTryToggle(false);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionGauntletClassLoadout from the subsystem API first
MissionGauntletClassLoadout missionGauntletClassLoadout = ...;
missionGauntletClassLoadout.OnMissionTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletClassLoadout missionGauntletClassLoadout = ...;
missionGauntletClassLoadout.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)