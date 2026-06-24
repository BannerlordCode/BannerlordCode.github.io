<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSingleplayerKillNotificationUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSingleplayerKillNotificationUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSingleplayerKillNotificationUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionSingleplayerKillNotificationUIHandler.cs`

## Overview

`MissionSingleplayerKillNotificationUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionSingleplayerKillNotificationUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionSingleplayerKillNotificationUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)