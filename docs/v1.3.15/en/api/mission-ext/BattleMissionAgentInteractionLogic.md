<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleMissionAgentInteractionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleMissionAgentInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionAgentInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/BattleMissionAgentInteractionLogic.cs`

## Overview

`BattleMissionAgentInteractionLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new BattleMissionAgentInteractionLogic())`; subclass it to customize.

## Key Methods

### IsThereAgentAction
```csharp
public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)
```

## Usage Example

```csharp
// Typical usage of BattleMissionAgentInteractionLogic (Logic)
Mission.Current.AddMissionBehavior(new BattleMissionAgentInteractionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)