---
title: "MissionSingleplayerKillNotificationUIHandler"
description: "Auto-generated class reference for MissionSingleplayerKillNotificationUIHandler."
---
# MissionSingleplayerKillNotificationUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSingleplayerKillNotificationUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionSingleplayerKillNotificationUIHandler.cs`

## Overview

`MissionSingleplayerKillNotificationUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionSingleplayerKillNotificationUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionSingleplayerKillNotificationUIHandler from the subsystem API first
MissionSingleplayerKillNotificationUIHandler missionSingleplayerKillNotificationUIHandler = ...;
missionSingleplayerKillNotificationUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionSingleplayerKillNotificationUIHandler>();
```

## See Also

- [Area Index](../)