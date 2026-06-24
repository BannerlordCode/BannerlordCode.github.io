<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAudienceHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAudienceHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionAudienceHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionAudienceHandler.cs`

## Overview

`MissionAudienceHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAudienceHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnInit
`public void OnInit()`

**Purpose:** Called when the `init` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Called when the `mission mode change` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionAudienceHandler());
```

## See Also

- [Complete Class Catalog](../catalog)