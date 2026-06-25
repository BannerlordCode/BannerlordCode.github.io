---
title: "AgentNavigator"
description: "Auto-generated class reference for AgentNavigator."
---
# AgentNavigator

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public sealed class AgentNavigator`
**Base:** none
**File:** `Modules.SandBox/SandBox/Sandbox/AgentNavigator.cs`

## Overview

`AgentNavigator` lives in `SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetUsableMachine` | `public UsableMachine TargetUsableMachine { get; }` |
| `TargetPosition` | `public WorldPosition TargetPosition { get; }` |
| `TargetDirection` | `public Vec2 TargetDirection { get; }` |
| `TargetEntity` | `public GameEntity TargetEntity { get; }` |
| `MemberOfAlley` | `public Alley MemberOfAlley { get; }` |
| `SpecialTargetTag` | `public string SpecialTargetTag { get; set; }` |
| `_agentState` | `public NavigationState _agentState { get; }` |
| `CharacterHasVisiblePrefabs` | `public bool CharacterHasVisiblePrefabs { get; }` |

## Key Methods

### OnStopUsingGameObject
`public void OnStopUsingGameObject()`

**Purpose:** Invoked when the `stop using game object` event is raised.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.OnStopUsingGameObject();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.OnAgentRemoved(agent);
```

### SetTarget
`public void SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, AIScriptedFrameFlags customFlags = (AIScriptedFrameFlags)0)`

**Purpose:** Assigns a new value to `target` and updates the object's internal state.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.SetTarget(usableMachine, false, (AIScriptedFrameFlags)0);
```

### SetTargetFrame
`public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, AIScriptedFrameFlags flags = (AIScriptedFrameFlags)0, bool disableClearTargetWhenTargetIsReached = false)`

**Purpose:** Assigns a new value to `target frame` and updates the object's internal state.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.SetTargetFrame(position, 0, 0, 0, (AIScriptedFrameFlags)0, false);
```

### ClearTarget
`public void ClearTarget()`

**Purpose:** Removes all `target` from the current object.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.ClearTarget();
```

### Tick
`public void Tick(float dt, bool isSimulation = false)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.Tick(0, false);
```

### GetDistanceToTarget
`public float GetDistanceToTarget(UsableMachine target)`

**Purpose:** Reads and returns the `distance to target` value held by the current object.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
var result = agentNavigator.GetDistanceToTarget(target);
```

### IsTargetReached
`public bool IsTargetReached()`

**Purpose:** Determines whether the current object is in the `target reached` state or condition.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
var result = agentNavigator.IsTargetReached();
```

### HoldAndHideRecentlyUsedMeshes
`public void HoldAndHideRecentlyUsedMeshes()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.HoldAndHideRecentlyUsedMeshes();
```

### RecoverRecentlyUsedMeshes
`public void RecoverRecentlyUsedMeshes()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.RecoverRecentlyUsedMeshes();
```

### CanSeeAgent
`public bool CanSeeAgent(Agent otherAgent)`

**Purpose:** Checks whether the current object meets the preconditions for `see agent`.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
var result = agentNavigator.CanSeeAgent(otherAgent);
```

### IsCarryingSomething
`public bool IsCarryingSomething()`

**Purpose:** Determines whether the current object is in the `carrying something` state or condition.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
var result = agentNavigator.IsCarryingSomething();
```

### SetPrefabVisibility
`public void SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)`

**Purpose:** Assigns a new value to `prefab visibility` and updates the object's internal state.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.SetPrefabVisibility(0, "example", false);
```

### GetPrefabVisibility
`public bool GetPrefabVisibility(sbyte realBoneIndex, string prefabName)`

**Purpose:** Reads and returns the `prefab visibility` value held by the current object.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
var result = agentNavigator.GetPrefabVisibility(0, "example");
```

### SetSpecialItem
`public void SetSpecialItem()`

**Purpose:** Assigns a new value to `special item` and updates the object's internal state.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.SetSpecialItem();
```

### SetItemsVisibility
`public void SetItemsVisibility(bool isVisible)`

**Purpose:** Assigns a new value to `items visibility` and updates the object's internal state.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.SetItemsVisibility(false);
```

### SetCommonArea
`public void SetCommonArea(Alley alley)`

**Purpose:** Assigns a new value to `common area` and updates the object's internal state.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.SetCommonArea(alley);
```

### ForceThink
`public void ForceThink(float inSeconds)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.ForceThink(0);
```

### RefreshBehaviorGroups
`public void RefreshBehaviorGroups(bool isSimulation)`

**Purpose:** Keeps the display or cache of `behavior groups` in sync with the underlying state.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
agentNavigator.RefreshBehaviorGroups(false);
```

### GetActiveBehavior
`public AgentBehavior GetActiveBehavior()`

**Purpose:** Reads and returns the `active behavior` value held by the current object.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
var result = agentNavigator.GetActiveBehavior();
```

### GetActiveBehaviorGroup
`public AgentBehaviorGroup GetActiveBehaviorGroup()`

**Purpose:** Reads and returns the `active behavior group` value held by the current object.

```csharp
// Obtain an instance of AgentNavigator from the subsystem API first
AgentNavigator agentNavigator = ...;
var result = agentNavigator.GetActiveBehaviorGroup();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AgentNavigator agentNavigator = ...;
agentNavigator.OnStopUsingGameObject();
```

## See Also

- [Area Index](../)