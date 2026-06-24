<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SearchBodyMissionHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SearchBodyMissionHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SearchBodyMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs`

## Overview

`SearchBodyMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SearchBodyMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SearchBodyMissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)