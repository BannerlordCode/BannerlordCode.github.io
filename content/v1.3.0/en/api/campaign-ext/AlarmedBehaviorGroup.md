---
title: "AlarmedBehaviorGroup"
description: "Auto-generated class reference for AlarmedBehaviorGroup."
---
# AlarmedBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class AlarmedBehaviorGroup : AgentBehaviorGroup`
**Base:** `AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs`

## Overview

`AlarmedBehaviorGroup` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlarmFactor` | `public float AlarmFactor { get; }` |

## Key Methods

### SetCanMoveWhenCautious
`public void SetCanMoveWhenCautious(bool value)`

**Purpose:** **Purpose:** Assigns a new value to can move when cautious and updates the object's internal state.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.SetCanMoveWhenCautious(false);
```

### AddIgnoredAgentsForAlarm
`public void AddIgnoredAgentsForAlarm(Agent agent)`

**Purpose:** **Purpose:** Adds ignored agents for alarm to the current collection or state.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.AddIgnoredAgentsForAlarm(agent);
```

### GetVisualFactor
`public float GetVisualFactor(Vec3 usedGlobalLookDirection, Agent currentAgent, ref bool hasVisualOnCorpse, ref bool hasVisualOnEnemy)`

**Purpose:** **Purpose:** Reads and returns the visual factor value held by the this instance.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
var result = alarmedBehaviorGroup.GetVisualFactor(usedGlobalLookDirection, currentAgent, hasVisualOnCorpse, hasVisualOnEnemy);
```

### ResetAlarmFactor
`public void ResetAlarmFactor()`

**Purpose:** **Purpose:** Returns alarm factor to its default or initial condition.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.ResetAlarmFactor();
```

### AddAlarmFactor
`public void AddAlarmFactor(float addedAlarmFactor, in WorldPosition suspiciousPosition)`

**Purpose:** **Purpose:** Adds alarm factor to the current collection or state.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.AddAlarmFactor(0, suspiciousPosition);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.Tick(0, false);
```

### GetScore
`public override float GetScore(bool isSimulation)`

**Purpose:** **Purpose:** Reads and returns the score value held by the this instance.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
var result = alarmedBehaviorGroup.GetScore(false);
```

### GetClosestAlarmSource
`public Agent GetClosestAlarmSource(out float distanceSquared)`

**Purpose:** **Purpose:** Reads and returns the closest alarm source value held by the this instance.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
var result = alarmedBehaviorGroup.GetClosestAlarmSource(distanceSquared);
```

### AlarmAgent
`public static void AlarmAgent(Agent agent)`

**Purpose:** **Purpose:** Executes the AlarmAgent logic.

```csharp
// Static call; no instance required
AlarmedBehaviorGroup.AlarmAgent(agent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.OnAgentRemoved(agent);
```

### ForceThink
`public override void ForceThink(float inSeconds)`

**Purpose:** **Purpose:** Executes the ForceThink logic.

```csharp
// Obtain an instance of AlarmedBehaviorGroup from the subsystem API first
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.ForceThink(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AlarmedBehaviorGroup alarmedBehaviorGroup = ...;
alarmedBehaviorGroup.SetCanMoveWhenCautious(false);
```

## See Also

- [Area Index](../)