---
title: "MissionGauntletCrosshair"
description: "Auto-generated class reference for MissionGauntletCrosshair."
---
# MissionGauntletCrosshair

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletCrosshair : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletCrosshair.cs`

## Overview

`MissionGauntletCrosshair` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletCrosshair from the subsystem API first
MissionGauntletCrosshair missionGauntletCrosshair = ...;
missionGauntletCrosshair.OnMissionScreenTick(0);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** **Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletCrosshair from the subsystem API first
MissionGauntletCrosshair missionGauntletCrosshair = ...;
missionGauntletCrosshair.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** **Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletCrosshair from the subsystem API first
MissionGauntletCrosshair missionGauntletCrosshair = ...;
missionGauntletCrosshair.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletCrosshair missionGauntletCrosshair = ...;
missionGauntletCrosshair.OnMissionScreenTick(0);
```

## See Also

- [Area Index](../)