---
title: "MissionGauntletOrderOfBattleUIHandler"
description: "Auto-generated class reference for MissionGauntletOrderOfBattleUIHandler."
---
# MissionGauntletOrderOfBattleUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletOrderOfBattleUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs`

## Overview

`MissionGauntletOrderOfBattleUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletOrderOfBattleUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnMissionScreenInitialize();
```

### IsReady
`public override bool IsReady()`

**Purpose:** Determines whether the this instance is in the ready state or condition.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
var result = missionGauntletOrderOfBattleUIHandler.IsReady();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnMissionTick(0);
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnMissionScreenFinalize();
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
var result = missionGauntletOrderOfBattleUIHandler.OnEscape();
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnPhotoModeDeactivated();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed state or condition.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
var result = missionGauntletOrderOfBattleUIHandler.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of MissionGauntletOrderOfBattleUIHandler from the subsystem API first
MissionGauntletOrderOfBattleUIHandler missionGauntletOrderOfBattleUIHandler = ...;
missionGauntletOrderOfBattleUIHandler.OnDeploymentFinished();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletOrderOfBattleUIHandler>();
```

## See Also

- [Area Index](../)