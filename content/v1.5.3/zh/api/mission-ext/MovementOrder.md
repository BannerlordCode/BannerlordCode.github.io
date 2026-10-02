---
title: "MovementOrder"
description: "MovementOrder 的自动生成类参考。"
---
# MovementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MovementOrder `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MovementOrder.cs

## 概述

`MovementOrder` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MovementOrder.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Equals
`public override bool Equals(object obj) `

### GetHashCode
`public override int GetHashCode() `

### MovementOrderChargeToTarget
`public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation) `

### MovementOrderFollow
`public static MovementOrder MovementOrderFollow(Agent targetAgent) `

### MovementOrderFollowEntity
`public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity) `

### MovementOrderMove
`public static MovementOrder MovementOrderMove(WorldPosition position) `

### MovementOrderAttackEntity
`public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity,bool surroundEntity) `

### GetMovementOrderDefensiveness
`public static int GetMovementOrderDefensiveness(MovementOrder.MovementOrderEnum orderEnum) `

### GetMovementOrderDefensivenessChange
`public static int GetMovementOrderDefensivenessChange(MovementOrder.MovementOrderEnum previousOrderEnum,MovementOrder.MovementOrderEnum nextOrderEnum) `

### GetPosition
`public Vec2 GetPosition(Formation f) `

### GetTargetVelocity
`public Vec2 GetTargetVelocity() `

### CreateNewOrderWorldPositionMT
`public WorldPosition CreateNewOrderWorldPositionMT(Formation f,WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache) `

### ResetPositionCache
`public void ResetPositionCache() `

### AreOrdersPracticallySame
`public bool AreOrdersPracticallySame(MovementOrder m1,MovementOrder m2,bool isAIControlled) `

### OnApply
`public void OnApply(Formation formation) `

### OnCancel
`public void OnCancel(Formation formation) `

### OnUnitJoinOrLeave
`public void OnUnitJoinOrLeave(Formation formation,Agent unit,bool isJoining) `

### IsApplicable
`public bool IsApplicable(Formation formation) `

### Tick
`public bool Tick(Formation formation) `

### OnArrangementChanged
`public void OnArrangementChanged(Formation formation) `

### Advance
`public void Advance(Formation formation,float distance) `

### FallBack
`public void FallBack(Formation formation,float distance) `

### GetSubstituteOrder
`public MovementOrder GetSubstituteOrder(Formation formation) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
