---
title: "Path"
description: "Path 的自动生成类参考。"
---
# Path

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Path : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Path.cs`

## 概述

`Path` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetHermiteFrameForDt
`public MatrixFrame GetHermiteFrameForDt(float phase, int first_point)`

**用途 / Purpose:** 读取并返回当前对象中 hermite frame for dt 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.GetHermiteFrameForDt(0, 0);
```

### GetFrameForDistance
`public MatrixFrame GetFrameForDistance(float distance)`

**用途 / Purpose:** 读取并返回当前对象中 frame for distance 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.GetFrameForDistance(0);
```

### GetNearestFrameWithValidAlphaForDistance
`public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance, bool searchForward = true, float alphaThreshold = 0.5f)`

**用途 / Purpose:** 读取并返回当前对象中 nearest frame with valid alpha for distance 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.GetNearestFrameWithValidAlphaForDistance(0, false, 0);
```

### GetFrameAndColorForDistance
`public void GetFrameAndColorForDistance(float distance, out MatrixFrame frame, out Vec3 color)`

**用途 / Purpose:** 读取并返回当前对象中 frame and color for distance 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
path.GetFrameAndColorForDistance(0, frame, color);
```

### GetArcLength
`public float GetArcLength(int first_point)`

**用途 / Purpose:** 读取并返回当前对象中 arc length 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.GetArcLength(0);
```

### GetPoints
`public void GetPoints(MatrixFrame points)`

**用途 / Purpose:** 读取并返回当前对象中 points 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
path.GetPoints(points);
```

### GetTotalLength
`public float GetTotalLength()`

**用途 / Purpose:** 读取并返回当前对象中 total length 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.GetTotalLength();
```

### GetVersion
`public int GetVersion()`

**用途 / Purpose:** 读取并返回当前对象中 version 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.GetVersion();
```

### SetFrameOfPoint
`public void SetFrameOfPoint(int pointIndex, ref MatrixFrame frame)`

**用途 / Purpose:** 为 frame of point 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
path.SetFrameOfPoint(0, frame);
```

### SetTangentPositionOfPoint
`public void SetTangentPositionOfPoint(int pointIndex, int tangentIndex, ref Vec3 position)`

**用途 / Purpose:** 为 tangent position of point 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
path.SetTangentPositionOfPoint(0, 0, position);
```

### AddPathPoint
`public int AddPathPoint(int newNodeIndex)`

**用途 / Purpose:** 将 path point 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.AddPathPoint(0);
```

### DeletePathPoint
`public void DeletePathPoint(int nodeIndex)`

**用途 / Purpose:** 调用 DeletePathPoint 对应的操作。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
path.DeletePathPoint(0);
```

### HasValidAlphaAtPathPoint
`public bool HasValidAlphaAtPathPoint(int nodeIndex, float alphaThreshold = 0.5f)`

**用途 / Purpose:** 判断当前对象是否已经持有 valid alpha at path point。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.HasValidAlphaAtPathPoint(0, 0);
```

### GetName
`public string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 Path 实例
Path path = ...;
var result = path.GetName();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Path path = ...;
path.GetHermiteFrameForDt(0, 0);
```

## 参见

- [本区域目录](../)