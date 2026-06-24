<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletOrderOfBattleUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletOrderOfBattleUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletOrderOfBattleUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletOrderOfBattleUIHandler.cs`

## Overview

`MissionGauntletOrderOfBattleUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletOrderOfBattleUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### IsReady
`public override bool IsReady()`

**Purpose:** Handles logic related to `is ready`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnEscape
`public override bool OnEscape()`

**Purpose:** Called when the `escape` event is raised.

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Called when the `photo mode activated` event is raised.

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Called when the `photo mode deactivated` event is raised.

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** Handles logic related to `is opening escape menu on focus change allowed`.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletOrderOfBattleUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)