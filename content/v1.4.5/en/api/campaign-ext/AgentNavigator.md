---
title: "AgentNavigator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentNavigator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentNavigator

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public sealed class AgentNavigator`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/AgentNavigator.cs`

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

**Purpose:** Called when the `stop using game object` event is raised.

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### SetTarget
`public void SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, AIScriptedFrameFlags customFlags = (AIScriptedFrameFlags)0)`

**Purpose:** Sets the value or state of `target`.

### SetTargetFrame
`public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, AIScriptedFrameFlags flags = (AIScriptedFrameFlags)0, bool disableClearTargetWhenTargetIsReached = false)`

**Purpose:** Sets the value or state of `target frame`.

### ClearTarget
`public void ClearTarget()`

**Purpose:** Handles logic related to `clear target`.

### Tick
`public void Tick(float dt, bool isSimulation = false)`

**Purpose:** Handles logic related to `tick`.

### GetDistanceToTarget
`public float GetDistanceToTarget(UsableMachine target)`

**Purpose:** Gets the current value of `distance to target`.

### IsTargetReached
`public bool IsTargetReached()`

**Purpose:** Handles logic related to `is target reached`.

### HoldAndHideRecentlyUsedMeshes
`public void HoldAndHideRecentlyUsedMeshes()`

**Purpose:** Handles logic related to `hold and hide recently used meshes`.

### RecoverRecentlyUsedMeshes
`public void RecoverRecentlyUsedMeshes()`

**Purpose:** Handles logic related to `recover recently used meshes`.

### CanSeeAgent
`public bool CanSeeAgent(Agent otherAgent)`

**Purpose:** Checks whether the current object can `see agent`.

### IsCarryingSomething
`public bool IsCarryingSomething()`

**Purpose:** Handles logic related to `is carrying something`.

### SetPrefabVisibility
`public void SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)`

**Purpose:** Sets the value or state of `prefab visibility`.

### GetPrefabVisibility
`public bool GetPrefabVisibility(sbyte realBoneIndex, string prefabName)`

**Purpose:** Gets the current value of `prefab visibility`.

### SetSpecialItem
`public void SetSpecialItem()`

**Purpose:** Sets the value or state of `special item`.

### SetItemsVisibility
`public void SetItemsVisibility(bool isVisible)`

**Purpose:** Sets the value or state of `items visibility`.

### SetCommonArea
`public void SetCommonArea(Alley alley)`

**Purpose:** Sets the value or state of `common area`.

### ForceThink
`public void ForceThink(float inSeconds)`

**Purpose:** Handles logic related to `force think`.

### RefreshBehaviorGroups
`public void RefreshBehaviorGroups(bool isSimulation)`

**Purpose:** Refreshes the display or cache of `behavior groups`.

### GetActiveBehavior
`public AgentBehavior GetActiveBehavior()`

**Purpose:** Gets the current value of `active behavior`.

### GetActiveBehaviorGroup
`public AgentBehaviorGroup GetActiveBehaviorGroup()`

**Purpose:** Gets the current value of `active behavior group`.

## Usage Example

```csharp
var value = new AgentNavigator();
value.OnStopUsingGameObject();
```

## See Also

- [Complete Class Catalog](../catalog)