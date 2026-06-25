---
title: "AgentComponentExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentComponentExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentComponentExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class AgentComponentExtensions`
**Area:** mission-ext

## Overview

`AgentComponentExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetMorale
`public static float GetMorale(this Agent agent)`

**Purpose:** Gets the current value of `morale`.

### SetMorale
`public static void SetMorale(this Agent agent, float morale)`

**Purpose:** Sets the value or state of `morale`.

### ChangeMorale
`public static void ChangeMorale(this Agent agent, float delta)`

**Purpose:** Handles logic related to `change morale`.

### IsRetreating
`public static bool IsRetreating(this Agent agent, bool isComponentAssured = true)`

**Purpose:** Handles logic related to `is retreating`.

### Retreat
`public static void Retreat(this Agent agent, bool useCachingSystem = false)`

**Purpose:** Handles logic related to `retreat`.

### StopRetreatingMoraleComponent
`public static void StopRetreatingMoraleComponent(this Agent agent)`

**Purpose:** Handles logic related to `stop retreating morale component`.

### SetBehaviorValueSet
`public static void SetBehaviorValueSet(this Agent agent, HumanAIComponent.BehaviorValueSet behaviorValueSet)`

**Purpose:** Sets the value or state of `behavior value set`.

### RefreshBehaviorValues
`public static void RefreshBehaviorValues(this Agent agent, MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**Purpose:** Refreshes the display or cache of `behavior values`.

### SetAIBehaviorValues
`public static void SetAIBehaviorValues(this Agent agent, HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**Purpose:** Sets the value or state of `a i behavior values`.

### AIMoveToGameObjectEnable
`public static void AIMoveToGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**Purpose:** Handles logic related to `a i move to game object enable`.

### AIMoveToGameObjectDisable
`public static void AIMoveToGameObjectDisable(this Agent agent)`

**Purpose:** Handles logic related to `a i move to game object disable`.

### AIMoveToGameObjectIsEnabled
`public static bool AIMoveToGameObjectIsEnabled(this Agent agent)`

**Purpose:** Handles logic related to `a i move to game object is enabled`.

### AIDefendGameObjectEnable
`public static void AIDefendGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment)`

**Purpose:** Handles logic related to `a i defend game object enable`.

### AIDefendGameObjectDisable
`public static void AIDefendGameObjectDisable(this Agent agent)`

**Purpose:** Handles logic related to `a i defend game object disable`.

### AIDefendGameObjectIsEnabled
`public static bool AIDefendGameObjectIsEnabled(this Agent agent)`

**Purpose:** Handles logic related to `a i defend game object is enabled`.

### AIInterestedInAnyGameObject
`public static bool AIInterestedInAnyGameObject(this Agent agent)`

**Purpose:** Handles logic related to `a i interested in any game object`.

### AIInterestedInGameObject
`public static bool AIInterestedInGameObject(this Agent agent, UsableMissionObject usableMissionObject)`

**Purpose:** Handles logic related to `a i interested in game object`.

### AIUseGameObjectEnable
`public static void AIUseGameObjectEnable(this Agent agent)`

**Purpose:** Handles logic related to `a i use game object enable`.

### AIUseGameObjectDisable
`public static void AIUseGameObjectDisable(this Agent agent)`

**Purpose:** Handles logic related to `a i use game object disable`.

### AIUseGameObjectIsEnabled
`public static bool AIUseGameObjectIsEnabled(this Agent agent)`

**Purpose:** Handles logic related to `a i use game object is enabled`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
AgentComponentExtensions.GetMorale(agent);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
