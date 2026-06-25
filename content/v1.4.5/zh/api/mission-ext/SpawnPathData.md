---
title: "SpawnPathData"
description: "SpawnPathData 的自动生成类参考。"
---
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnPathData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnPathData.cs`

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

**用途 / Purpose:** 处理与 「invert」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.Invert();
```

### ClampPathOffset
`public void ClampPathOffset(ref float relativePathOffset)`

**用途 / Purpose:** 处理与 「clamp path offset」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
spawnPathData.ClampPathOffset(relativePathOffset);
```

### ConvertPointToRelativePathOffset
`public float ConvertPointToRelativePathOffset(int pointIndex)`

**用途 / Purpose:** 把「point to relative path offset」转换为另一种表示或类型。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.ConvertPointToRelativePathOffset(0);
```

### ConvertRelativePathOffsetToPathDistance
`public float ConvertRelativePathOffsetToPathDistance(float relativePathOffset)`

**用途 / Purpose:** 把「relative path offset to path distance」转换为另一种表示或类型。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.ConvertRelativePathOffsetToPathDistance(0);
```

### GetNodeIndexAtPathDistance
`public int GetNodeIndexAtPathDistance(float pathDistance)`

**用途 / Purpose:** 读取并返回当前对象中 「node index at path distance」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetNodeIndexAtPathDistance(0);
```

### GetBaseOffset
`public float GetBaseOffset()`

**用途 / Purpose:** 读取并返回当前对象中 「base offset」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetBaseOffset();
```

### IsPathOffsetValid
`public bool IsPathOffsetValid(float relativePathOffset)`

**用途 / Purpose:** 判断当前对象是否处于 「path offset valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.IsPathOffsetValid(0);
```

### GetOffsetOverflow
`public float GetOffsetOverflow(float relativePathOffset)`

**用途 / Purpose:** 读取并返回当前对象中 「offset overflow」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetOffsetOverflow(0);
```

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(float relativePathOffset, bool searchNearestValidFrame = false, SearchDirection searchDirection = SearchDirection.Backward)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn frame」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetSpawnFrame(0, false, searchDirection.Backward);
```

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float basePathOffset, float targetPathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)`

**用途 / Purpose:** 读取并返回当前对象中 「spawn path frame facing target」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPathData 实例
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingTarget(0, 0, false, spawnPathPosition, spawnPathDirection, false, 0);
```

### Create
`public static SpawnPathData Create(Scene scene, Path path, float pivotOffset, bool isInverted = false, SnapMethod snapType = SnapMethod.DontSnap)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
SpawnPathData.Create(scene, path, 0, false, snapMethod.DontSnap);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
SpawnPathData entry = ...;
```

## 参见

- [本区域目录](../)