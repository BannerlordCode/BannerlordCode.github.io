<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrisonBreakMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrisonBreakMissionController

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class PrisonBreakMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Towns/PrisonBreakMissionController.cs`

## Overview

`PrisonBreakMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `PrisonBreakMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**Purpose:** Called when the `agent alarmed state changed` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Called when the `end mission request` event is raised.

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**Purpose:** Called when the `stealth mission counter failed` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<PrisonBreakMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)