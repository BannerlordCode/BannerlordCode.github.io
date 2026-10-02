---
title: "AgentComponentExtensions"
description: "Auto-generated class reference for AgentComponentExtensions."
---
# AgentComponentExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class AgentComponentExtensions `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/AgentComponentExtensions.cs

## Overview

Auto-generated stub for `AgentComponentExtensions`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetMorale
`public static float GetMorale(this Agent agent)`

### SetMorale
`public static void SetMorale(this Agent agent,float morale)`

### ChangeMorale
`public static void ChangeMorale(this Agent agent,float delta)`

### IsRetreating
`public static bool IsRetreating(this Agent agent,bool isComponentAssured = true)`

### Retreat
`public static void Retreat(this Agent agent,bool useCachingSystem = false)`

### StopRetreatingMoraleComponent
`public static void StopRetreatingMoraleComponent(this Agent agent)`

### SetBehaviorValueSet
`public static void SetBehaviorValueSet(this Agent agent,HumanAIComponent.BehaviorValueSet behaviorValueSet)`

### RefreshBehaviorValues
`public static void RefreshBehaviorValues(this Agent agent,MovementOrder.MovementOrderEnum movementOrder,ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

### SetAIBehaviorValues
`public static void SetAIBehaviorValues(this Agent agent,HumanAIComponent.AISimpleBehaviorKind behavior,float y1,float x2,float y2,float x3,float y3)`

### AIMoveToGameObjectEnable
`public static void AIMoveToGameObjectEnable(this Agent agent,UsableMissionObject usedObject,IDetachment detachment,Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

### AIMoveToGameObjectDisable
`public static void AIMoveToGameObjectDisable(this Agent agent)`

### AIMoveToGameObjectIsEnabled
`public static bool AIMoveToGameObjectIsEnabled(this Agent agent)`

### AIDefendGameObjectEnable
`public static void AIDefendGameObjectEnable(this Agent agent,UsableMissionObject usedObject,IDetachment detachment)`

### AIDefendGameObjectDisable
`public static void AIDefendGameObjectDisable(this Agent agent)`

### AIDefendGameObjectIsEnabled
`public static bool AIDefendGameObjectIsEnabled(this Agent agent)`

### AIInterestedInAnyGameObject
`public static bool AIInterestedInAnyGameObject(this Agent agent)`

### AIInterestedInGameObject
`public static bool AIInterestedInGameObject(this Agent agent,UsableMissionObject usableMissionObject)`

### AIUseGameObjectEnable
`public static void AIUseGameObjectEnable(this Agent agent)`

### AIUseGameObjectDisable
`public static void AIUseGameObjectDisable(this Agent agent)`

### AIUseGameObjectIsEnabled
`public static bool AIUseGameObjectIsEnabled(this Agent agent)`

### GetFollowedUnit
`public static Agent GetFollowedUnit(this Agent agent)`

### SetFollowedUnit
`public static void SetFollowedUnit(this Agent agent,Agent followedUnit)`

## See Also

- [Section index](../)
