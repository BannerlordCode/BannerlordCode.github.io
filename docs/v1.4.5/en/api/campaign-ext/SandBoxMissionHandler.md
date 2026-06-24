<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxMissionHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissionHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandBoxMissionHandler.cs`

## Overview

`SandBoxMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SandBoxMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SandBoxMissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)