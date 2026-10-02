---
title: "MovementOrder"
description: "Auto-generated class reference for MovementOrder."
---
# MovementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MovementOrder `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MovementOrder.cs

## Overview

Auto-generated stub for `MovementOrder`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Equals
`public override bool Equals(object obj)`

### GetHashCode
`public override int GetHashCode()`

### MovementOrderChargeToTarget
`public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation)`

### MovementOrderFollow
`public static MovementOrder MovementOrderFollow(Agent targetAgent)`

### MovementOrderFollowEntity
`public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity)`

### MovementOrderMove
`public static MovementOrder MovementOrderMove(WorldPosition position)`

### MovementOrderAttackEntity
`public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity,bool surroundEntity)`

### GetMovementOrderDefensiveness
`public static int GetMovementOrderDefensiveness(MovementOrder.MovementOrderEnum orderEnum)`

### GetMovementOrderDefensivenessChange
`public static int GetMovementOrderDefensivenessChange(MovementOrder.MovementOrderEnum previousOrderEnum,MovementOrder.MovementOrderEnum nextOrderEnum)`

### GetPosition
`public Vec2 GetPosition(Formation f)`

### GetTargetVelocity
`public Vec2 GetTargetVelocity()`

### CreateNewOrderWorldPositionMT
`public WorldPosition CreateNewOrderWorldPositionMT(Formation f,WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

### ResetPositionCache
`public void ResetPositionCache()`

### AreOrdersPracticallySame
`public bool AreOrdersPracticallySame(MovementOrder m1,MovementOrder m2,bool isAIControlled)`

### OnApply
`public void OnApply(Formation formation)`

### OnCancel
`public void OnCancel(Formation formation)`

### OnUnitJoinOrLeave
`public void OnUnitJoinOrLeave(Formation formation,Agent unit,bool isJoining)`

### IsApplicable
`public bool IsApplicable(Formation formation)`

### Tick
`public bool Tick(Formation formation)`

### OnArrangementChanged
`public void OnArrangementChanged(Formation formation)`

### Advance
`public void Advance(Formation formation,float distance)`

### FallBack
`public void FallBack(Formation formation,float distance)`

### GetSubstituteOrder
`public MovementOrder GetSubstituteOrder(Formation formation)`

## See Also

- [Section index](../)
