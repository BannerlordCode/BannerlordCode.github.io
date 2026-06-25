---
title: "MissionGauntletKillNotificationUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletKillNotificationUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletKillNotificationUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletKillNotificationUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletKillNotificationUIHandler.cs`

## Overview

`MissionGauntletKillNotificationUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletKillNotificationUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletKillNotificationUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)