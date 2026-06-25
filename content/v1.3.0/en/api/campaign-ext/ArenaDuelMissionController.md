---
title: "ArenaDuelMissionController"
description: "Auto-generated class reference for ArenaDuelMissionController."
---
# ArenaDuelMissionController

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaDuelMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaDuelMissionController.cs`

## Overview

`ArenaDuelMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `ArenaDuelMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArenaDuelMissionController from the subsystem API first
ArenaDuelMissionController arenaDuelMissionController = ...;
arenaDuelMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of ArenaDuelMissionController from the subsystem API first
ArenaDuelMissionController arenaDuelMissionController = ...;
arenaDuelMissionController.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of ArenaDuelMissionController from the subsystem API first
ArenaDuelMissionController arenaDuelMissionController = ...;
arenaDuelMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Invoked when the `end mission request` event is raised.

```csharp
// Obtain an instance of ArenaDuelMissionController from the subsystem API first
ArenaDuelMissionController arenaDuelMissionController = ...;
var result = arenaDuelMissionController.OnEndMissionRequest(canPlayerLeave);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ArenaDuelMissionController>();
```

## See Also

- [Area Index](../)