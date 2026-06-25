---
title: "MissionGauntletKillNotificationSingleplayerUIHandler"
description: "Auto-generated class reference for MissionGauntletKillNotificationSingleplayerUIHandler."
---
# MissionGauntletKillNotificationSingleplayerUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletKillNotificationSingleplayerUIHandler : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletKillNotificationSingleplayerUIHandler.cs`

## Overview

`MissionGauntletKillNotificationSingleplayerUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletKillNotificationSingleplayerUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the `photo mode activated` event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the `photo mode deactivated` event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationSingleplayerUIHandler from the subsystem API first
MissionGauntletKillNotificationSingleplayerUIHandler missionGauntletKillNotificationSingleplayerUIHandler = ...;
missionGauntletKillNotificationSingleplayerUIHandler.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletKillNotificationSingleplayerUIHandler>();
```

## See Also

- [Area Index](../)