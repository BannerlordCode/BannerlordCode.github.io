---
title: "BehaviorComponent"
description: "BehaviorComponent: a public class in TaleWorlds.MountAndBlade; 26 exposed members (16 methods, 6 properties, 2 fields). Source: TaleWorlds.MountAndBlade/BehaviorComponent.cs."
---
# BehaviorComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorComponent.cs`

## Overview

BehaviorComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorComponent.cs. It is a public class (abstract); the inheritance chain is BehaviorComponent. It exposes 26 public/protected members: 16 methods, 6 properties, 2 fields, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BehaviorComponent. The surface is method-led (methods 16/26, properties 6/26), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Formation` | `public Formation Formation` | property |
| `BehaviorCoherence` | `public float BehaviorCoherence` | property |
| `BehaviorComponent` | `protected BehaviorComponent(Formation formation)` | constructor |
| `BehaviorComponent` | `protected BehaviorComponent()` | constructor |
| `OnBehaviorActivatedAux` | `protected virtual void OnBehaviorActivatedAux()` | method |
| `OnBehaviorCanceled` | `public virtual void OnBehaviorCanceled()` | method |
| `OnLostAIControl` | `public virtual void OnLostAIControl()` | method |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved(Agent agent)` | method |
| `RemindSergeantPlayer` | `public void RemindSergeantPlayer()` | method |
| `TickOccasionally` | `public virtual void TickOccasionally()` | method |
| `NavmeshlessTargetPositionPenalty` | `public virtual float NavmeshlessTargetPositionPenalty` | property |
| `GetAIWeight` | `public float GetAIWeight()` | method |
| `GetAiWeight` | `protected abstract float GetAiWeight();` | method |
| `CurrentOrder` | `public MovementOrder CurrentOrder` | property |
| `PreserveExpireTime` | `public float PreserveExpireTime` | property |
| `WeightFactor` | `public float WeightFactor` | property |
| `ResetBehavior` | `public virtual void ResetBehavior()` | method |
| `GetBehaviorString` | `public virtual TextObject GetBehaviorString()` | method |
| `OnValidBehaviorSideChanged` | `public virtual void OnValidBehaviorSideChanged()` | method |
| `CalculateCurrentOrder` | `protected virtual void CalculateCurrentOrder()` | method |
| `PrecalculateMovementOrder` | `public void PrecalculateMovementOrder()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | method |
| `FormArrangementDistanceToOrderPosition` | `protected const float FormArrangementDistanceToOrderPosition` | field |
| `CurrentFacingOrder` | `protected FacingOrder CurrentFacingOrder` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
