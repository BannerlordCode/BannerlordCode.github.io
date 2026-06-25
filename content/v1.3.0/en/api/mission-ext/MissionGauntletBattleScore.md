---
title: "MissionGauntletBattleScore"
description: "Auto-generated class reference for MissionGauntletBattleScore."
---
# MissionGauntletBattleScore

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletBattleScore : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletBattleScore.cs`

## Overview

`MissionGauntletBattleScore` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DataSource` | `public ScoreboardBaseVM DataSource { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletBattleScore from the subsystem API first
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletBattleScore from the subsystem API first
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnMissionScreenFinalize();
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** Invoked when the `escape` event is raised.

```csharp
// Obtain an instance of MissionGauntletBattleScore from the subsystem API first
MissionGauntletBattleScore missionGauntletBattleScore = ...;
var result = missionGauntletBattleScore.OnEscape();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionGauntletBattleScore from the subsystem API first
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.EarlyStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletBattleScore from the subsystem API first
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnMissionScreenTick(0);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the `deployment finished` event is raised.

```csharp
// Obtain an instance of MissionGauntletBattleScore from the subsystem API first
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnDeploymentFinished();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the `photo mode activated` event is raised.

```csharp
// Obtain an instance of MissionGauntletBattleScore from the subsystem API first
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the `photo mode deactivated` event is raised.

```csharp
// Obtain an instance of MissionGauntletBattleScore from the subsystem API first
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnPhotoModeDeactivated();
```

### ForceScoreboardToggle
`public static string ForceScoreboardToggle(List<string> args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionGauntletBattleScore.ForceScoreboardToggle(args);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletBattleScore missionGauntletBattleScore = ...;
missionGauntletBattleScore.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)