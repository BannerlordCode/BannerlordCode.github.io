<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LeaveMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LeaveMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/LeaveMissionLogic.cs`

## Overview

`LeaveMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `LeaveMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Handles logic related to `mission ended`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new LeaveMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)