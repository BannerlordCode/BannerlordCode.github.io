<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleMissionAgentInteractionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleMissionAgentInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionAgentInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic/BattleMissionAgentInteractionLogic.cs`

## Overview

`BattleMissionAgentInteractionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleMissionAgentInteractionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BattleMissionAgentInteractionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)