---
title: "PrisonBreakMissionController"
description: "Auto-generated class reference for PrisonBreakMissionController."
---
# PrisonBreakMissionController

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class PrisonBreakMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs`

## Overview

`PrisonBreakMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `PrisonBreakMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.AfterStart();
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the `agent interaction` event is raised.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnAgentInteraction(userAgent, agent, 0);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Determines whether the current object is in the `there agent action` state or condition.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
var result = prisonBreakMissionController.IsThereAgentAction(userAgent, otherAgent);
```

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**Purpose:** Invoked when the `agent alarmed state changed` event is raised.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnAgentAlarmedStateChanged(agent, flag);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Invoked when the `end mission request` event is raised.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
var result = prisonBreakMissionController.OnEndMissionRequest(canLeave);
```

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**Purpose:** Invoked when the `stealth mission counter failed` event is raised.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnStealthMissionCounterFailed(obj);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of PrisonBreakMissionController from the subsystem API first
PrisonBreakMissionController prisonBreakMissionController = ...;
prisonBreakMissionController.OnMissionTick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<PrisonBreakMissionController>();
```

## See Also

- [Area Index](../)