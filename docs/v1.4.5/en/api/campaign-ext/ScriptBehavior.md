<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScriptBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScriptBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class ScriptBehavior`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/ScriptBehavior.cs`

## Overview

`ScriptBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ScriptBehavior
`public class ScriptBehavior(AgentBehaviorGroup behaviorGroup)`

**Purpose:** Handles logic related to `script behavior`.

### SelectTargetDelegate
`public delegate bool SelectTargetDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame, ref float customTargetReachedRangeThreshold, ref float customTargetReachedRotationThreshold)`

**Purpose:** Handles logic related to `select target delegate`.

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent targetAgent, ref UsableMachine targetUsableMachine, ref WorldFrame targetFrame)`

**Purpose:** Called when the `target reached delegate` event is raised.

### OnTargetReachedWaitDelegate
`public delegate void OnTargetReachedWaitDelegate(Agent agent, ref float waitTimeInSeconds)`

**Purpose:** Called when the `target reached wait delegate` event is raised.

### AddUsableMachineTarget
`public static void AddUsableMachineTarget(Agent ownerAgent, UsableMachine targetUsableMachine)`

**Purpose:** Adds `usable machine target` to the current collection or state.

### AddAgentTarget
`public static void AddAgentTarget(Agent ownerAgent, Agent targetAgent)`

**Purpose:** Adds `agent target` to the current collection or state.

### AddWorldFrameTarget
`public static void AddWorldFrameTarget(Agent ownerAgent, WorldFrame targetWorldFrame)`

**Purpose:** Adds `world frame target` to the current collection or state.

### AddTargetWithDelegate
`public static void AddTargetWithDelegate(Agent ownerAgent, SelectTargetDelegate selectTargetDelegate, OnTargetReachedWaitDelegate onTargetReachWaitDelegate, OnTargetReachedDelegate onTargetReachedDelegate, float initialWaitInSeconds = 0f)`

**Purpose:** Adds `target with delegate` to the current collection or state.

### IsNearTarget
`public bool IsNearTarget(Agent targetAgent)`

**Purpose:** Handles logic related to `is near target`.

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Handles logic related to `tick`.

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Gets the current value of `availability`.

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Gets the current value of `debug info`.

## Usage Example

```csharp
var value = new ScriptBehavior();
value.ScriptBehavior(behaviorGroup);
```

## See Also

- [Complete Class Catalog](../catalog)