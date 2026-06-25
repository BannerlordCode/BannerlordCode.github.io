---
title: "MissionMultiplayerKillNotificationUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerKillNotificationUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerKillNotificationUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerKillNotificationUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionMultiplayerKillNotificationUIHandler.cs`

## Overview

`MissionMultiplayerKillNotificationUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionMultiplayerKillNotificationUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionMultiplayerKillNotificationUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)