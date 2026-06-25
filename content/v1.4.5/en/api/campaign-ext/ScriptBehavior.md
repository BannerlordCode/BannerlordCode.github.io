---
title: "ScriptBehavior"
description: "Auto-generated class reference for ScriptBehavior."
---
# ScriptBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class ScriptBehavior`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/ScriptBehavior.cs`

## Overview

`ScriptBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ScriptBehavior
`public class ScriptBehavior(AgentBehaviorGroup behaviorGroup)`

**Purpose:** Executes the ScriptBehavior logic.

```csharp
// Obtain an instance of ScriptBehavior from the subsystem API first
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.ScriptBehavior(behaviorGroup);
```

### SelectTargetDelegate
`public delegate bool SelectTargetDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame, ref float customTargetReachedRangeThreshold, ref float customTargetReachedRotationThreshold)`

**Purpose:** Executes the SelectTargetDelegate logic.

```csharp
// Obtain an instance of ScriptBehavior from the subsystem API first
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.SelectTargetDelegate(agent, targetAgent, targetUsableMachine, targetFrame, customTargetReachedRangeThreshold, customTargetReachedRotationThreshold);
```

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame)`

**Purpose:** Invoked when the target reached delegate event is raised.

```csharp
// Obtain an instance of ScriptBehavior from the subsystem API first
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.OnTargetReachedDelegate(agent, targetAgent, targetUsableMachine, targetFrame);
```

### OnTargetReachedWaitDelegate
`public delegate void OnTargetReachedWaitDelegate(Agent agent, ref float waitTimeInSeconds)`

**Purpose:** Invoked when the target reached wait delegate event is raised.

```csharp
// Obtain an instance of ScriptBehavior from the subsystem API first
ScriptBehavior scriptBehavior = ...;
scriptBehavior.OnTargetReachedWaitDelegate(agent, waitTimeInSeconds);
```

### AddUsableMachineTarget
`public static void AddUsableMachineTarget(Agent ownerAgent, UsableMachine targetUsableMachine)`

**Purpose:** Adds usable machine target to the current collection or state.

```csharp
// Static call; no instance required
ScriptBehavior.AddUsableMachineTarget(ownerAgent, targetUsableMachine);
```

### AddAgentTarget
`public static void AddAgentTarget(Agent ownerAgent, Agent targetAgent)`

**Purpose:** Adds agent target to the current collection or state.

```csharp
// Static call; no instance required
ScriptBehavior.AddAgentTarget(ownerAgent, targetAgent);
```

### AddWorldFrameTarget
`public static void AddWorldFrameTarget(Agent ownerAgent, WorldFrame targetWorldFrame)`

**Purpose:** Adds world frame target to the current collection or state.

```csharp
// Static call; no instance required
ScriptBehavior.AddWorldFrameTarget(ownerAgent, targetWorldFrame);
```

### AddTargetWithDelegate
`public static void AddTargetWithDelegate(Agent ownerAgent, SelectTargetDelegate selectTargetDelegate, OnTargetReachedWaitDelegate onTargetReachWaitDelegate, OnTargetReachedDelegate onTargetReachedDelegate, float initialWaitInSeconds = 0f)`

**Purpose:** Adds target with delegate to the current collection or state.

```csharp
// Static call; no instance required
ScriptBehavior.AddTargetWithDelegate(ownerAgent, selectTargetDelegate, onTargetReachWaitDelegate, onTargetReachedDelegate, 0);
```

### IsNearTarget
`public bool IsNearTarget(Agent targetAgent)`

**Purpose:** Determines whether the this instance is in the near target state or condition.

```csharp
// Obtain an instance of ScriptBehavior from the subsystem API first
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.IsNearTarget(targetAgent);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ScriptBehavior from the subsystem API first
ScriptBehavior scriptBehavior = ...;
scriptBehavior.Tick(0, false);
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of ScriptBehavior from the subsystem API first
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of ScriptBehavior from the subsystem API first
ScriptBehavior scriptBehavior = ...;
var result = scriptBehavior.GetDebugInfo();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ScriptBehavior scriptBehavior = ...;
scriptBehavior.ScriptBehavior(behaviorGroup);
```

## See Also

- [Area Index](../)