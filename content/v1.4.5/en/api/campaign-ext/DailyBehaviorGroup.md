---
title: "DailyBehaviorGroup"
description: "Auto-generated class reference for DailyBehaviorGroup."
---
# DailyBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class DailyBehaviorGroup : AgentBehaviorGroup`
**Base:** `AgentBehaviorGroup`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/DailyBehaviorGroup.cs`

## Overview

`DailyBehaviorGroup` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of DailyBehaviorGroup from the subsystem API first
DailyBehaviorGroup dailyBehaviorGroup = ...;
dailyBehaviorGroup.Tick(0, false);
```

### ConversationTick
`public override void ConversationTick()`

**Purpose:** **Purpose:** Executes the ConversationTick logic.

```csharp
// Obtain an instance of DailyBehaviorGroup from the subsystem API first
DailyBehaviorGroup dailyBehaviorGroup = ...;
dailyBehaviorGroup.ConversationTick();
```

### GetScore
`public override float GetScore(bool isSimulation)`

**Purpose:** **Purpose:** Reads and returns the score value held by the this instance.

```csharp
// Obtain an instance of DailyBehaviorGroup from the subsystem API first
DailyBehaviorGroup dailyBehaviorGroup = ...;
var result = dailyBehaviorGroup.GetScore(false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of DailyBehaviorGroup from the subsystem API first
DailyBehaviorGroup dailyBehaviorGroup = ...;
dailyBehaviorGroup.OnAgentRemoved(agent);
```

### ForceThink
`public override void ForceThink(float inSeconds)`

**Purpose:** **Purpose:** Executes the ForceThink logic.

```csharp
// Obtain an instance of DailyBehaviorGroup from the subsystem API first
DailyBehaviorGroup dailyBehaviorGroup = ...;
dailyBehaviorGroup.ForceThink(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DailyBehaviorGroup dailyBehaviorGroup = ...;
dailyBehaviorGroup.Tick(0, false);
```

## See Also

- [Area Index](../)