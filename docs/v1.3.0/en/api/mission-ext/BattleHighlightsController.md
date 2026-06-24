<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleHighlightsController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleHighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleHighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleHighlightsController.cs`

## Overview

`BattleHighlightsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `BattleHighlightsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleHighlightsController>();
```

## See Also

- [Complete Class Catalog](../catalog)