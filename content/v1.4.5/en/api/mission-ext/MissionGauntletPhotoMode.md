---
title: "MissionGauntletPhotoMode"
description: "Auto-generated class reference for MissionGauntletPhotoMode."
---
# MissionGauntletPhotoMode

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletPhotoMode : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletPhotoMode.cs`

## Overview

`MissionGauntletPhotoMode` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletPhotoMode from the subsystem API first
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
missionGauntletPhotoMode.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletPhotoMode from the subsystem API first
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
missionGauntletPhotoMode.OnMissionScreenTick(0);
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** **Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionGauntletPhotoMode from the subsystem API first
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
var result = missionGauntletPhotoMode.OnEscape();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** **Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed state or condition.

```csharp
// Obtain an instance of MissionGauntletPhotoMode from the subsystem API first
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
var result = missionGauntletPhotoMode.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletPhotoMode from the subsystem API first
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
missionGauntletPhotoMode.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletPhotoMode missionGauntletPhotoMode = ...;
missionGauntletPhotoMode.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)