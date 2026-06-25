---
title: "WorldFrame"
description: "WorldFrame 的自动生成类参考。"
---
# WorldFrame

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct WorldFrame`
**Base:** 无
**File:** `TaleWorlds.Engine/WorldFrame.cs`

## 概述

`WorldFrame` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## 主要方法

### ToGroundMatrixFrame
`public MatrixFrame ToGroundMatrixFrame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 WorldFrame 实例
WorldFrame worldFrame = ...;
var result = worldFrame.ToGroundMatrixFrame();
```

### ToNavMeshMatrixFrame
`public MatrixFrame ToNavMeshMatrixFrame()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 WorldFrame 实例
WorldFrame worldFrame = ...;
var result = worldFrame.ToNavMeshMatrixFrame();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WorldFrame worldFrame = ...;
worldFrame.ToGroundMatrixFrame();
```

## 参见

- [本区域目录](../)