---
title: "MissionGauntletKillNotificationSingleplayerUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletKillNotificationSingleplayerUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletKillNotificationSingleplayerUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletKillNotificationSingleplayerUIHandler : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs`

## Overview

`MissionGauntletKillNotificationSingleplayerUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletKillNotificationSingleplayerUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Called when the `photo mode activated` event is raised.

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Called when the `photo mode deactivated` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletKillNotificationSingleplayerUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)