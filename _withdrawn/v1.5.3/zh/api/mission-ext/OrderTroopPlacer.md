---
title: "OrderTroopPlacer"
description: "OrderTroopPlacer 的自动生成类参考。"
---
# OrderTroopPlacer

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Order
**Module:** TaleWorlds.MountAndBlade.View
**Type:** `public class OrderTroopPlacer : MissionView `
**Base:** MissionView
**Source:** TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs

## 概述

`OrderTroopPlacer` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateOrderFlag
`protected virtual OrderFlag CreateOrderFlag() `

### CanUpdate
`protected virtual bool CanUpdate() `

### HasSelectedFormations
`protected virtual bool HasSelectedFormations() `

### GetCursorState
`protected virtual OrderTroopPlacer.CursorState GetCursorState() `

### GetGroundedVec3
`protected virtual Vec3 GetGroundedVec3(WorldPosition worldPosition) `

### TryGetScreenMiddleToWorldPosition
`protected virtual bool TryGetScreenMiddleToWorldPosition(out WorldPosition worldPosition,out float collisionDistance,out WeakGameEntity collidedEntity) `
`protected bool TryGetScreenMiddleToWorldPosition(out WorldPosition worldPosition,out float collisionDistance) `
`protected bool TryGetScreenMiddleToWorldPosition(out WorldPosition worldPosition,out WeakGameEntity collidedEntity) `
`protected bool TryGetScreenMiddleToWorldPosition(out WorldPosition worldPosition) `

### GetScreenPoint
`protected Vec2 GetScreenPoint() `

### GetGroundOrNormalCursor
`public OrderTroopPlacer.CursorState GetGroundOrNormalCursor() `

### AfterStart
`public override void AfterStart() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### RestrictOrdersToDeploymentBoundaries
`public void RestrictOrdersToDeploymentBoundaries(bool enabled) `

### UpdateFormationDrawing
`public void UpdateFormationDrawing(bool giveOrder) `

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
