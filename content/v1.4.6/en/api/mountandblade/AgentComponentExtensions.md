---
title: "AgentComponentExtensions"
description: "AgentComponentExtensions: a public class in TaleWorlds.MountAndBlade; 22 exposed members (22 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/AgentComponentExtensions.cs."
---
# AgentComponentExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class AgentComponentExtensions`
**File:** `TaleWorlds.MountAndBlade/AgentComponentExtensions.cs`

## Overview

AgentComponentExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentComponentExtensions.cs. It is a public class; the inheritance chain is AgentComponentExtensions. It exposes 22 public/protected members: 22 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentComponentExtensions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain AgentComponentExtensions. The surface is method-led (methods 22/22, properties 0/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentComponentExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMorale` | `public static float GetMorale(this Agent agent)` | method |
| `SetMorale` | `public static void SetMorale(this Agent agent, float morale)` | method |
| `ChangeMorale` | `public static void ChangeMorale(this Agent agent, float delta)` | method |
| `IsRetreating` | `public static bool IsRetreating(this Agent agent, bool isComponentAssured = true)` | method |
| `Retreat` | `public static void Retreat(this Agent agent, bool useCachingSystem = false)` | method |
| `StopRetreatingMoraleComponent` | `public static void StopRetreatingMoraleComponent(this Agent agent)` | method |
| `SetBehaviorValueSet` | `public static void SetBehaviorValueSet(this Agent agent, HumanAIComponent.BehaviorValueSet behaviorValueSet)` | method |
| `RefreshBehaviorValues` | `public static void RefreshBehaviorValues(this Agent agent, MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)` | method |
| `SetAIBehaviorValues` | `public static void SetAIBehaviorValues(this Agent agent, HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)` | method |
| `AIMoveToGameObjectEnable` | `public static void AIMoveToGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)` | method |
| `AIMoveToGameObjectDisable` | `public static void AIMoveToGameObjectDisable(this Agent agent)` | method |
| `AIMoveToGameObjectIsEnabled` | `public static bool AIMoveToGameObjectIsEnabled(this Agent agent)` | method |
| `AIDefendGameObjectEnable` | `public static void AIDefendGameObjectEnable(this Agent agent, UsableMissionObject usedObject, IDetachment detachment)` | method |
| `AIDefendGameObjectDisable` | `public static void AIDefendGameObjectDisable(this Agent agent)` | method |
| `AIDefendGameObjectIsEnabled` | `public static bool AIDefendGameObjectIsEnabled(this Agent agent)` | method |
| `AIInterestedInAnyGameObject` | `public static bool AIInterestedInAnyGameObject(this Agent agent)` | method |
| `AIInterestedInGameObject` | `public static bool AIInterestedInGameObject(this Agent agent, UsableMissionObject usableMissionObject)` | method |
| `AIUseGameObjectEnable` | `public static void AIUseGameObjectEnable(this Agent agent)` | method |
| `AIUseGameObjectDisable` | `public static void AIUseGameObjectDisable(this Agent agent)` | method |
| `AIUseGameObjectIsEnabled` | `public static bool AIUseGameObjectIsEnabled(this Agent agent)` | method |
| `GetFollowedUnit` | `public static Agent GetFollowedUnit(this Agent agent)` | method |
| `SetFollowedUnit` | `public static void SetFollowedUnit(this Agent agent, Agent followedUnit)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
