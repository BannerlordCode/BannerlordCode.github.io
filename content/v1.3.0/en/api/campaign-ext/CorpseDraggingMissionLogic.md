---
title: "CorpseDraggingMissionLogic"
description: "Auto-generated class reference for CorpseDraggingMissionLogic."
---
# CorpseDraggingMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CorpseDraggingMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs`

## Overview

`CorpseDraggingMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `CorpseDraggingMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of CorpseDraggingMissionLogic from the subsystem API first
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
corpseDraggingMissionLogic.AfterStart();
```

### OnFixedMissionTick
`public override void OnFixedMissionTick(float fixedDt)`

**Purpose:** **Purpose:** Invoked when the fixed mission tick event is raised.

```csharp
// Obtain an instance of CorpseDraggingMissionLogic from the subsystem API first
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
corpseDraggingMissionLogic.OnFixedMissionTick(0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of CorpseDraggingMissionLogic from the subsystem API first
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
corpseDraggingMissionLogic.OnMissionTick(0);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of CorpseDraggingMissionLogic from the subsystem API first
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
var result = corpseDraggingMissionLogic.IsThereAgentAction(userAgent, otherAgent);
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** **Purpose:** Invoked when the agent interaction event is raised.

```csharp
// Obtain an instance of CorpseDraggingMissionLogic from the subsystem API first
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
corpseDraggingMissionLogic.OnAgentInteraction(userAgent, agent, 0);
```

### OnCollectPlayerEventControlFlags
`public Agent.EventControlFlag OnCollectPlayerEventControlFlags()`

**Purpose:** **Purpose:** Invoked when the collect player event control flags event is raised.

```csharp
// Obtain an instance of CorpseDraggingMissionLogic from the subsystem API first
CorpseDraggingMissionLogic corpseDraggingMissionLogic = ...;
var result = corpseDraggingMissionLogic.OnCollectPlayerEventControlFlags();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CorpseDraggingMissionLogic>();
```

## See Also

- [Area Index](../)