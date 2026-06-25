---
title: "MissionGauntletSingleplayerOrderUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletSingleplayerOrderUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletSingleplayerOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView`
**Base:** `GauntletOrderUIHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs`

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

**Purpose:** Called when the `conversation begin` event is raised.

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnAutoDeploy
`public void OnAutoDeploy()`

**Purpose:** Called when the `auto deploy` event is raised.

### OnBeginMission
`public void OnBeginMission()`

**Purpose:** Called when the `begin mission` event is raised.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnAfterDeploymentFinished
`public override void OnAfterDeploymentFinished()`

**Purpose:** Called when the `after deployment finished` event is raised.

### ClearFormationSelection
`public void ClearFormationSelection()`

**Purpose:** Handles logic related to `clear formation selection`.

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**Purpose:** Called when the `filters set` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletSingleplayerOrderUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)