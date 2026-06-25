---
title: "SiegeWeaponMovementComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeWeaponMovementComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeaponMovementComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponMovementComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs`

## 概述

`SiegeWeaponMovementComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `SiegeWeaponMovementComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasApproachedTarget` | `public bool HasApproachedTarget { get; }` |
| `Velocity` | `public Vec3 Velocity { get; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get; }` |
| `CurrentSpeed` | `public float CurrentSpeed { get; }` |
| `MovementSoundCodeID` | `public int MovementSoundCodeID { get; set; }` |
| `MinSpeed` | `public float MinSpeed { get; set; }` |
| `MaxSpeed` | `public float MaxSpeed { get; set; }` |
| `PathEntityName` | `public string PathEntityName { get; set; }` |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier { get; set; }` |
| `WheelDiameter` | `public float WheelDiameter { get; set; }` |
| `MainObject` | `public SynchedMissionObject MainObject { get; set; }` |

## 主要方法

### HighlightPath
`public void HighlightPath()`

**用途 / Purpose:** 处理 `highlight path` 相关逻辑。

### SetupGhostEntity
`public void SetupGhostEntity()`

**用途 / Purpose:** 设置 `up ghost entity` 的值或状态。

### SetGhostVisibility
`public void SetGhostVisibility(bool isVisible)`

**用途 / Purpose:** 设置 `ghost visibility` 的值或状态。

### OnEditorInit
`public void OnEditorInit()`

**用途 / Purpose:** 当 `editor init` 事件触发时调用此方法。

### SetDistanceTraveledAsClient
`public void SetDistanceTraveledAsClient(float distance)`

**用途 / Purpose:** 设置 `distance traveled as client` 的值或状态。

### IsOnTickRequired
`public override bool IsOnTickRequired()`

**用途 / Purpose:** 处理 `is on tick required` 相关逻辑。

### TickParallelManually
`public void TickParallelManually(float dt)`

**用途 / Purpose:** 处理 `tick parallel manually` 相关逻辑。

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**用途 / Purpose:** 获取 `initial frame` 的当前值。

### GetTargetFrame
`public MatrixFrame GetTargetFrame()`

**用途 / Purpose:** 获取 `target frame` 的当前值。

### SetDestinationNavMeshIdState
`public void SetDestinationNavMeshIdState(bool enabled)`

**用途 / Purpose:** 设置 `destination nav mesh id state` 的值或状态。

### MoveToTargetAsClient
`public void MoveToTargetAsClient()`

**用途 / Purpose:** 处理 `move to target as client` 相关逻辑。

### GetTotalDistanceTraveledForPathTracker
`public float GetTotalDistanceTraveledForPathTracker()`

**用途 / Purpose:** 获取 `total distance traveled for path tracker` 的当前值。

### SetTotalDistanceTraveledForPathTracker
`public void SetTotalDistanceTraveledForPathTracker(float distanceTraveled)`

**用途 / Purpose:** 设置 `total distance traveled for path tracker` 的值或状态。

### SetTargetFrameForPathTracker
`public void SetTargetFrameForPathTracker()`

**用途 / Purpose:** 设置 `target frame for path tracker` 的值或状态。

### FindGroundFrameForWheelsStatic
`public static MatrixFrame FindGroundFrameForWheelsStatic(ref MatrixFrame frame, float axleLength, float wheelDiameter, WeakGameEntity gameEntity, List<GameEntity> wheels, Scene scene)`

**用途 / Purpose:** 处理 `find ground frame for wheels static` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<SiegeWeaponMovementComponent>();
```

## 参见

- [完整类目录](../catalog)