---
title: "AgentComponentExtensions"
description: "AgentComponentExtensions 的自动生成类参考。"
---
# AgentComponentExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class AgentComponentExtensions `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/AgentComponentExtensions.cs

## 概述

`AgentComponentExtensions` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/AgentComponentExtensions.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetMorale
`public static float GetMorale(this Agent agent) `

### SetMorale
`public static void SetMorale(this Agent agent,float morale) `

### ChangeMorale
`public static void ChangeMorale(this Agent agent,float delta) `

### IsRetreating
`public static bool IsRetreating(this Agent agent,bool isComponentAssured = true) `

### Retreat
`public static void Retreat(this Agent agent,bool useCachingSystem = false) `

### StopRetreatingMoraleComponent
`public static void StopRetreatingMoraleComponent(this Agent agent) `

### SetBehaviorValueSet
`public static void SetBehaviorValueSet(this Agent agent,HumanAIComponent.BehaviorValueSet behaviorValueSet) `

### RefreshBehaviorValues
`public static void RefreshBehaviorValues(this Agent agent,MovementOrder.MovementOrderEnum movementOrder,ArrangementOrder.ArrangementOrderEnum arrangementOrder) `

### SetAIBehaviorValues
`public static void SetAIBehaviorValues(this Agent agent,HumanAIComponent.AISimpleBehaviorKind behavior,float y1,float x2,float y2,float x3,float y3) `

### AIMoveToGameObjectEnable
`public static void AIMoveToGameObjectEnable(this Agent agent,UsableMissionObject usedObject,IDetachment detachment,Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack) `

### AIMoveToGameObjectDisable
`public static void AIMoveToGameObjectDisable(this Agent agent) `

### AIMoveToGameObjectIsEnabled
`public static bool AIMoveToGameObjectIsEnabled(this Agent agent) `

### AIDefendGameObjectEnable
`public static void AIDefendGameObjectEnable(this Agent agent,UsableMissionObject usedObject,IDetachment detachment) `

### AIDefendGameObjectDisable
`public static void AIDefendGameObjectDisable(this Agent agent) `

### AIDefendGameObjectIsEnabled
`public static bool AIDefendGameObjectIsEnabled(this Agent agent) `

### AIInterestedInAnyGameObject
`public static bool AIInterestedInAnyGameObject(this Agent agent) `

### AIInterestedInGameObject
`public static bool AIInterestedInGameObject(this Agent agent,UsableMissionObject usableMissionObject) `

### AIUseGameObjectEnable
`public static void AIUseGameObjectEnable(this Agent agent) `

### AIUseGameObjectDisable
`public static void AIUseGameObjectDisable(this Agent agent) `

### AIUseGameObjectIsEnabled
`public static bool AIUseGameObjectIsEnabled(this Agent agent) `

### GetFollowedUnit
`public static Agent GetFollowedUnit(this Agent agent) `

### SetFollowedUnit
`public static void SetFollowedUnit(this Agent agent,Agent followedUnit) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
