---
title: "Path"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Path`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Path

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Path : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/Path.cs`

## 概述

`Path` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfPoints` | `public int NumberOfPoints { get; }` |
| `TotalDistance` | `public float TotalDistance { get; }` |

## 主要方法

### GetHermiteFrameForDt
`public MatrixFrame GetHermiteFrameForDt(float phase, int first_point)`

**用途 / Purpose:** 获取 `hermite frame for dt` 的当前值。

### GetFrameForDistance
`public MatrixFrame GetFrameForDistance(float distance)`

**用途 / Purpose:** 获取 `frame for distance` 的当前值。

### GetNearestFrameWithValidAlphaForDistance
`public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance, bool searchForward = true, float alphaThreshold = 0.5f)`

**用途 / Purpose:** 获取 `nearest frame with valid alpha for distance` 的当前值。

### GetFrameAndColorForDistance
`public void GetFrameAndColorForDistance(float distance, out MatrixFrame frame, out Vec3 color)`

**用途 / Purpose:** 获取 `frame and color for distance` 的当前值。

### GetArcLength
`public float GetArcLength(int first_point)`

**用途 / Purpose:** 获取 `arc length` 的当前值。

### GetPoints
`public void GetPoints(MatrixFrame points)`

**用途 / Purpose:** 获取 `points` 的当前值。

### GetTotalLength
`public float GetTotalLength()`

**用途 / Purpose:** 获取 `total length` 的当前值。

### GetVersion
`public int GetVersion()`

**用途 / Purpose:** 获取 `version` 的当前值。

### SetFrameOfPoint
`public void SetFrameOfPoint(int pointIndex, ref MatrixFrame frame)`

**用途 / Purpose:** 设置 `frame of point` 的值或状态。

### SetTangentPositionOfPoint
`public void SetTangentPositionOfPoint(int pointIndex, int tangentIndex, ref Vec3 position)`

**用途 / Purpose:** 设置 `tangent position of point` 的值或状态。

### AddPathPoint
`public int AddPathPoint(int newNodeIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `path point`。

### DeletePathPoint
`public void DeletePathPoint(int nodeIndex)`

**用途 / Purpose:** 处理 `delete path point` 相关逻辑。

### HasValidAlphaAtPathPoint
`public bool HasValidAlphaAtPathPoint(int nodeIndex, float alphaThreshold = 0.5f)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `valid alpha at path point`。

### GetName
`public string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

## 使用示例

```csharp
var value = new Path();
value.GetHermiteFrameForDt(0, 0);
```

## 参见

- [完整类目录](../catalog)