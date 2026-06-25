---
title: "AgentComponentExtensions"
description: "Auto-generated class reference for AgentComponentExtensions."
---
# AgentComponentExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class AgentComponentExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentComponentExtensions.cs`

## Overview

`AgentComponentExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMorale
`public static float GetMorale(this Agent agent)`

**Purpose:** Reads and returns the `morale` value held by the current object.

```csharp
// Static call; no instance required
AgentComponentExtensions.GetMorale(agent);
```

### SetMorale
`public static void SetMorale(this Agent agent, float morale)`

**Purpose:** Assigns a new value to `morale` and updates the object's internal state.

```csharp
// Static call; no instance required
AgentComponentExtensions.SetMorale(agent, 0);
```

### ChangeMorale
`public static void ChangeMorale(this Agent agent, float delta)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.ChangeMorale(agent, 0);
```

### IsRetreating
`public static bool IsRetreating(this Agent agent, bool isComponentAssured = true)`

**Purpose:** Determines whether the current object is in the `retreating` state or condition.

```csharp
// Static call; no instance required
AgentComponentExtensions.IsRetreating(agent, false);
```

### Retreat
`public static void Retreat(this Agent agent, bool useCachingSystem = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.Retreat(agent, false);
```

### StopRetreatingMoraleComponent
`public static void StopRetreatingMoraleComponent(this Agent agent)`

**Purpose:** Stops the `retreating morale component` flow or state machine.

```csharp
// Static call; no instance required
AgentComponentExtensions.StopRetreatingMoraleComponent(agent);
```

### SetBehaviorValueSet
`public static void SetBehaviorValueSet(this Agent agent, HumanAIComponent.BehaviorValueSet behaviorValueSet)`

**Purpose:** Assigns a new value to `behavior value set` and updates the object's internal state.

```csharp
// Static call; no instance required
AgentComponentExtensions.SetBehaviorValueSet(agent, behaviorValueSet);
```

### RefreshBehaviorValues
`public static void RefreshBehaviorValues(this Agent agent, MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**Purpose:** Keeps the display or cache of `behavior values` in sync with the underlying state.

```csharp
// Static call; no instance required
AgentComponentExtensions.RefreshBehaviorValues(agent, movementOrder, arrangementOrder);
```

### SetAIBehaviorValues
`public static void SetAIBehaviorValues(this Agent agent, HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**Purpose:** Assigns a new value to `a i behavior values` and updates the object's internal state.

```csharp
// Static call; no instance required
AgentComponentExtensions.SetAIBehaviorValues(agent, behavior, 0, 0, 0, 0, 0);
```

### AIMoveToGameObjectEnable
`public static void AIMoveToGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIMoveToGameObjectEnable(agent, usedObject, detachment, agent.AIScriptedFrameFlags.NoAttack);
```

### AIMoveToGameObjectDisable
`public static void AIMoveToGameObjectDisable(this Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIMoveToGameObjectDisable(agent);
```

### AIMoveToGameObjectIsEnabled
`public static bool AIMoveToGameObjectIsEnabled(this Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIMoveToGameObjectIsEnabled(agent);
```

### AIDefendGameObjectEnable
`public static void AIDefendGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIDefendGameObjectEnable(agent, usedObject, detachment);
```

### AIDefendGameObjectDisable
`public static void AIDefendGameObjectDisable(this Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIDefendGameObjectDisable(agent);
```

### AIDefendGameObjectIsEnabled
`public static bool AIDefendGameObjectIsEnabled(this Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIDefendGameObjectIsEnabled(agent);
```

### AIInterestedInAnyGameObject
`public static bool AIInterestedInAnyGameObject(this Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIInterestedInAnyGameObject(agent);
```

### AIInterestedInGameObject
`public static bool AIInterestedInGameObject(this Agent agent, UsableMissionObject usableMissionObject)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIInterestedInGameObject(agent, usableMissionObject);
```

### AIUseGameObjectEnable
`public static void AIUseGameObjectEnable(this Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIUseGameObjectEnable(agent);
```

### AIUseGameObjectDisable
`public static void AIUseGameObjectDisable(this Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIUseGameObjectDisable(agent);
```

### AIUseGameObjectIsEnabled
`public static bool AIUseGameObjectIsEnabled(this Agent agent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentComponentExtensions.AIUseGameObjectIsEnabled(agent);
```

### GetFollowedUnit
`public static Agent GetFollowedUnit(this Agent agent)`

**Purpose:** Reads and returns the `followed unit` value held by the current object.

```csharp
// Static call; no instance required
AgentComponentExtensions.GetFollowedUnit(agent);
```

### SetFollowedUnit
`public static void SetFollowedUnit(this Agent agent, Agent followedUnit)`

**Purpose:** Assigns a new value to `followed unit` and updates the object's internal state.

```csharp
// Static call; no instance required
AgentComponentExtensions.SetFollowedUnit(agent, followedUnit);
```

## Usage Example

```csharp
AgentComponentExtensions.GetMorale(agent);
```

## See Also

- [Area Index](../)