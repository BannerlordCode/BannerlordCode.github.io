---
title: "MissionGauntletSiegeEngineMarker"
description: "Auto-generated class reference for MissionGauntletSiegeEngineMarker."
---
# MissionGauntletSiegeEngineMarker

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSiegeEngineMarker : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletSiegeEngineMarker.cs`

## Overview

`MissionGauntletSiegeEngineMarker` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of MissionGauntletSiegeEngineMarker from the subsystem API first
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnDeploymentFinished();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletSiegeEngineMarker from the subsystem API first
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnMissionScreenTick(0);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** **Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletSiegeEngineMarker from the subsystem API first
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** **Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletSiegeEngineMarker from the subsystem API first
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletSiegeEngineMarker missionGauntletSiegeEngineMarker = ...;
missionGauntletSiegeEngineMarker.OnDeploymentFinished();
```

## See Also

- [Area Index](../)