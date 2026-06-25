---
title: "MissionMultiplayerKillNotificationUIHandler"
description: "Auto-generated class reference for MissionMultiplayerKillNotificationUIHandler."
---
# MissionMultiplayerKillNotificationUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerKillNotificationUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionMultiplayerKillNotificationUIHandler.cs`

## Overview

`MissionMultiplayerKillNotificationUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionMultiplayerKillNotificationUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionMultiplayerKillNotificationUIHandler from the subsystem API first
MissionMultiplayerKillNotificationUIHandler missionMultiplayerKillNotificationUIHandler = ...;
missionMultiplayerKillNotificationUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionMultiplayerKillNotificationUIHandler>();
```

## See Also

- [Area Index](../)