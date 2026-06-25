---
title: "SpawnPathData"
description: "SpawnPathData 的自动生成类参考。"
---
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SpawnPathData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SpawnPathData.cs`

## 概述

`SpawnPathData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SpawnPathData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### Invert
`public SpawnPathData Invert()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.Invert();
```

### ClampPathOffset
`public float ClampPathOffset(float pathOffsetRatio)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.ClampPathOffset(0);
```

### GetOffsetOverflow
`public float GetOffsetOverflow(float pathOffset)`

**用途 / Purpose:** 读取并返回当前对象中 「offset overflow」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetOffsetOverflow(0);
```

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float baseOffset, float targetOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn path frame facing target」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingTarget(0, 0, false, spawnPathPosition, spawnPathDirection, false, 0);
```

### GetSpawnPathFrameFacingPivot
`public void GetSpawnPathFrameFacingPivot(float pathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn path frame facing pivot」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingPivot(0, false, spawnPathPosition, spawnPathDirection);
```

### GetSpawnPathFrameFacingTangentDirection
`public void GetSpawnPathFrameFacingTangentDirection(float baseOffset, int tangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn path frame facing tangent direction」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingTangentDirection(0, 0, spawnPathPosition, spawnPathDirection);
```

### Create
`public static SpawnPathData Create(Scene scene, Path path, float pivotRatio = 0f, bool isInverted = false, SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
SpawnPathData.Create(scene, path, 0, false, spawnPathData.SnapMethod.DontSnap);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
SpawnPathData entry = ...;
```

## 参见

- [本区域目录](../)