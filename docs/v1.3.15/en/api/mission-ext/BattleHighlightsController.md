<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleHighlightsController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleHighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleHighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleHighlightsController.cs`

## Overview

`BattleHighlightsController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

## Usage Example

```csharp
// Typical usage of BattleHighlightsController (Controller)
Mission.Current.GetMissionBehavior<BattleHighlightsController>();
```

## See Also

- [Complete Class Catalog](../catalog)