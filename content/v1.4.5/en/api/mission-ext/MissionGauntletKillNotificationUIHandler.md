---
title: "MissionGauntletKillNotificationUIHandler"
description: "Auto-generated class reference for MissionGauntletKillNotificationUIHandler."
---
# MissionGauntletKillNotificationUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletKillNotificationUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletKillNotificationUIHandler.cs`

## Overview

`MissionGauntletKillNotificationUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletKillNotificationUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationUIHandler from the subsystem API first
MissionGauntletKillNotificationUIHandler missionGauntletKillNotificationUIHandler = ...;
missionGauntletKillNotificationUIHandler.OnMissionScreenInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionGauntletKillNotificationUIHandler from the subsystem API first
MissionGauntletKillNotificationUIHandler missionGauntletKillNotificationUIHandler = ...;
missionGauntletKillNotificationUIHandler.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationUIHandler from the subsystem API first
MissionGauntletKillNotificationUIHandler missionGauntletKillNotificationUIHandler = ...;
missionGauntletKillNotificationUIHandler.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionGauntletKillNotificationUIHandler from the subsystem API first
MissionGauntletKillNotificationUIHandler missionGauntletKillNotificationUIHandler = ...;
missionGauntletKillNotificationUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletKillNotificationUIHandler>();
```

## See Also

- [Area Index](../)