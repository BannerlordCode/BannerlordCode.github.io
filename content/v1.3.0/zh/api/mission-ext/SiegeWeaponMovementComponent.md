---
title: "SiegeWeaponMovementComponent"
description: "SiegeWeaponMovementComponent 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 调用 HighlightPath 对应的操作。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.HighlightPath();
```

### SetupGhostEntity
`public void SetupGhostEntity()`

**用途 / Purpose:** **用途 / Purpose:** 为 up ghost entity 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetupGhostEntity();
```

### SetGhostVisibility
`public void SetGhostVisibility(bool isVisible)`

**用途 / Purpose:** **用途 / Purpose:** 为 ghost visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetGhostVisibility(false);
```

### OnEditorInit
`public void OnEditorInit()`

**用途 / Purpose:** **用途 / Purpose:** 在 editor init 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.OnEditorInit();
```

### SetDistanceTraveledAsClient
`public void SetDistanceTraveledAsClient(float distance)`

**用途 / Purpose:** **用途 / Purpose:** 为 distance traveled as client 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetDistanceTraveledAsClient(0);
```

### IsOnTickRequired
`public override bool IsOnTickRequired()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 on tick required 状态或条件。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
var result = siegeWeaponMovementComponent.IsOnTickRequired();
```

### TickParallelManually
`public void TickParallelManually(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在每一帧或每个更新周期内推进parallel manually的状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.TickParallelManually(0);
```

### GetInitialFrame
`public MatrixFrame GetInitialFrame()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 initial frame 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
var result = siegeWeaponMovementComponent.GetInitialFrame();
```

### GetTargetFrame
`public MatrixFrame GetTargetFrame()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target frame 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
var result = siegeWeaponMovementComponent.GetTargetFrame();
```

### SetDestinationNavMeshIdState
`public void SetDestinationNavMeshIdState(bool enabled)`

**用途 / Purpose:** **用途 / Purpose:** 为 destination nav mesh id state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetDestinationNavMeshIdState(false);
```

### MoveToTargetAsClient
`public void MoveToTargetAsClient()`

**用途 / Purpose:** **用途 / Purpose:** 移动to target as client到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.MoveToTargetAsClient();
```

### GetTotalDistanceTraveledForPathTracker
`public float GetTotalDistanceTraveledForPathTracker()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 total distance traveled for path tracker 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
var result = siegeWeaponMovementComponent.GetTotalDistanceTraveledForPathTracker();
```

### SetTotalDistanceTraveledForPathTracker
`public void SetTotalDistanceTraveledForPathTracker(float distanceTraveled)`

**用途 / Purpose:** **用途 / Purpose:** 为 total distance traveled for path tracker 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetTotalDistanceTraveledForPathTracker(0);
```

### SetTargetFrameForPathTracker
`public void SetTargetFrameForPathTracker()`

**用途 / Purpose:** **用途 / Purpose:** 为 target frame for path tracker 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponMovementComponent 实例
SiegeWeaponMovementComponent siegeWeaponMovementComponent = ...;
siegeWeaponMovementComponent.SetTargetFrameForPathTracker();
```

### FindGroundFrameForWheelsStatic
`public static MatrixFrame FindGroundFrameForWheelsStatic(ref MatrixFrame frame, float axleLength, float wheelDiameter, WeakGameEntity gameEntity, List<GameEntity> wheels, Scene scene)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的ground frame for wheels static。

```csharp
// 静态调用，不需要实例
SiegeWeaponMovementComponent.FindGroundFrameForWheelsStatic(frame, 0, 0, gameEntity, wheels, scene);
```

## 使用示例

```csharp
var component = agent.GetComponent<SiegeWeaponMovementComponent>();
```

## 参见

- [本区域目录](../)