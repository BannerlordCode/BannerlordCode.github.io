---
title: "MissionGauntletSingleplayerOrderUIHandler"
description: "Auto-generated class reference for MissionGauntletSingleplayerOrderUIHandler."
---
# MissionGauntletSingleplayerOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView`
**Base:** `GauntletOrderUIHandler`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs`

## Overview

`MissionGauntletSingleplayerOrderUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletSingleplayerOrderUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValidForTick` | `public override bool IsValidForTick { get; }` |
| `IsDeployment` | `public override bool IsDeployment { get; }` |
| `IsSiegeDeployment` | `public override bool IsSiegeDeployment { get; }` |

## Key Methods

### OnConversationBegin
`public override void OnConversationBegin()`

**Purpose:** Invoked when the `conversation begin` event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnConversationBegin();
```

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnMissionScreenFinalize();
```

### OnAutoDeploy
`public void OnAutoDeploy()`

**Purpose:** Invoked when the `auto deploy` event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnAutoDeploy();
```

### OnBeginMission
`public void OnBeginMission()`

**Purpose:** Invoked when the `begin mission` event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnBeginMission();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the `deployment finished` event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public override void OnAfterDeploymentFinished()`

**Purpose:** Invoked when the `after deployment finished` event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnAfterDeploymentFinished();
```

### ClearFormationSelection
`public void ClearFormationSelection()`

**Purpose:** Removes all `formation selection` from the current object.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.ClearFormationSelection();
```

### OnFiltersSet
`public void OnFiltersSet(List<FormationConfiguration> filterData)`

**Purpose:** Invoked when the `filters set` event is raised.

```csharp
// Obtain an instance of MissionGauntletSingleplayerOrderUIHandler from the subsystem API first
MissionGauntletSingleplayerOrderUIHandler missionGauntletSingleplayerOrderUIHandler = ...;
missionGauntletSingleplayerOrderUIHandler.OnFiltersSet(filterData);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletSingleplayerOrderUIHandler>();
```

## See Also

- [Area Index](../)