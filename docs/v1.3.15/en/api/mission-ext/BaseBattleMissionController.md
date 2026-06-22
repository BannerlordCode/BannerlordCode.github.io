<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BaseBattleMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BaseBattleMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs`

## Overview

`BaseBattleMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### EarlyStart
```csharp
public override void EarlyStart()
```

### AfterStart
```csharp
public override void AfterStart()
```

### GetTeamAI
```csharp
public virtual TeamAIComponent GetTeamAI(Team team, float thinkTimerTime = 5f, float applyTimerTime = 1f)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

### OnEndMissionRequest
```csharp
public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

## Usage Example

```csharp
// Typical usage of BaseBattleMissionController (Controller)
Mission.Current.GetMissionBehavior<BaseBattleMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)