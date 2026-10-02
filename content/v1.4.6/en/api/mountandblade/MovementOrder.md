---
title: "MovementOrder"
description: "MovementOrder: a public struct in TaleWorlds.MountAndBlade; 41 exposed members (25 methods, 7 properties, 6 fields). Source: TaleWorlds.MountAndBlade/MovementOrder.cs."
---
# MovementOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MovementOrder`
**File:** `TaleWorlds.MountAndBlade/MovementOrder.cs`

## Overview

MovementOrder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MovementOrder.cs. It is a public struct; the inheritance chain is MovementOrder. It exposes 41 public/protected members: 25 methods, 7 properties, 6 fields, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MovementOrder is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MovementOrder. The surface is method-led (methods 25/41, properties 7/41), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MovementOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TargetFormation` | `public Formation TargetFormation` | property |
| `_targetAgent` | `public Agent _targetAgent` | property |
| `OrderType` | `public OrderType OrderType` | property |
| `MovementState` | `public MovementOrder.MovementStateEnum MovementState` | property |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `!` | `public static bool operator !` | operator |
| `operator` | `public static bool operator` | operator |
| `MovementOrderChargeToTarget` | `public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation)` | method |
| `MovementOrderFollow` | `public static MovementOrder MovementOrderFollow(Agent targetAgent)` | method |
| `MovementOrderFollowEntity` | `public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity)` | method |
| `MovementOrderMove` | `public static MovementOrder MovementOrderMove(WorldPosition position)` | method |
| `MovementOrderAttackEntity` | `public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity, bool surroundEntity)` | method |
| `GetMovementOrderDefensiveness` | `public static int GetMovementOrderDefensiveness(MovementOrder.MovementOrderEnum orderEnum)` | method |
| `GetMovementOrderDefensivenessChange` | `public static int GetMovementOrderDefensivenessChange(MovementOrder.MovementOrderEnum previousOrderEnum, MovementOrder.MovementOrderEnum nextOrderEnum)` | method |
| `GetPosition` | `public Vec2 GetPosition(Formation f)` | method |
| `GetTargetVelocity` | `public Vec2 GetTargetVelocity()` | method |
| `CreateNewOrderWorldPositionMT` | `public WorldPosition CreateNewOrderWorldPositionMT(Formation f, WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)` | method |
| `ResetPositionCache` | `public void ResetPositionCache()` | method |
| `AreOrdersPracticallySame` | `public bool AreOrdersPracticallySame(MovementOrder m1, MovementOrder m2, bool isAIControlled)` | method |
| `OnApply` | `public void OnApply(Formation formation)` | method |
| `OnCancel` | `public void OnCancel(Formation formation)` | method |
| `OnUnitJoinOrLeave` | `public void OnUnitJoinOrLeave(Formation formation, Agent unit, bool isJoining)` | method |
| `IsApplicable` | `public bool IsApplicable(Formation formation)` | method |
| `Tick` | `public bool Tick(Formation formation)` | method |
| `OnArrangementChanged` | `public void OnArrangementChanged(Formation formation)` | method |
| `Advance` | `public void Advance(Formation formation, float distance)` | method |
| `FallBack` | `public void FallBack(Formation formation, float distance)` | method |
| `GetSubstituteOrder` | `public MovementOrder GetSubstituteOrder(Formation formation)` | method |
| `MovementOrderNull` | `public static readonly MovementOrder MovementOrderNull` | field |
| `MovementOrderCharge` | `public static readonly MovementOrder MovementOrderCharge` | field |
| `MovementOrderRetreat` | `public static readonly MovementOrder MovementOrderRetreat` | field |
| `MovementOrderStop` | `public static readonly MovementOrder MovementOrderStop` | field |
| `MovementOrderAdvance` | `public static readonly MovementOrder MovementOrderAdvance` | field |
| `MovementOrderFallBack` | `public static readonly MovementOrder MovementOrderFallBack` | field |
| `MovementOrderEnum` | `public enum MovementOrderEnum` | property |
| `MovementStateEnum` | `public enum MovementStateEnum` | property |
| `Side` | `public enum Side` | property |
| `MovementOrderEnum` | `public enum MovementOrderEnum` | nested type |
| `MovementStateEnum` | `public enum MovementStateEnum` | nested type |
| `Side` | `public enum Side` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
