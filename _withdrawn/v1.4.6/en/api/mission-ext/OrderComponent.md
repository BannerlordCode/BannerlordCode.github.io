---
title: "OrderComponent"
description: "OrderComponent: a public class in TaleWorlds.MountAndBlade; 15 exposed members (10 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/OrderComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class OrderComponent`
**File:** `TaleWorlds.MountAndBlade/OrderComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OrderComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/OrderComponent.cs. It is a public class (abstract); the inheritance chain is OrderComponent. It exposes 15 public/protected members: 10 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OrderComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain OrderComponent. The surface is method-led (methods 10/15, properties 4/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/OrderComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetDirection` | `public Vec2 GetDirection(Formation f)` | method |
| `CopyPositionAndDirectionFrom` | `protected void CopyPositionAndDirectionFrom(OrderComponent order)` | method |
| `OrderComponent` | `protected OrderComponent(float tickTimerDuration = 0.5f)` | constructor |
| `OrderType` | `public abstract OrderType OrderType` | property |
| `TickDebug` | `protected virtual void TickDebug(Formation formation)` | method |
| `TickOccasionally` | `protected internal virtual void TickOccasionally(Formation formation, float dt)` | method |
| `OnApply` | `protected internal virtual void OnApply(Formation formation)` | method |
| `OnCancel` | `protected internal virtual void OnCancel(Formation formation)` | method |
| `OnUnitJoinOrLeave` | `protected internal virtual void OnUnitJoinOrLeave(Agent unit, bool isJoining)` | method |
| `IsApplicable` | `protected internal virtual bool IsApplicable(Formation formation)` | method |
| `CanStack` | `protected internal virtual bool CanStack` | property |
| `CancelsPreviousDirectionOrder` | `protected internal virtual bool CancelsPreviousDirectionOrder` | property |
| `CancelsPreviousArrangementOrder` | `protected internal virtual bool CancelsPreviousArrangementOrder` | property |
| `GetSubstituteOrder` | `protected internal virtual MovementOrder GetSubstituteOrder(Formation formation)` | method |
| `OnArrangementChanged` | `protected internal virtual void OnArrangementChanged(Formation formation)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
