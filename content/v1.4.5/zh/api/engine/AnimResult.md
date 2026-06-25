---
title: "AnimResult"
description: "AnimResult 的自动生成类参考。"
---
# AnimResult

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct AnimResult`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/AnimResult.cs`

## 概述

`AnimResult` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetEntitialOutTransform
`public Transformation GetEntitialOutTransform(sbyte boneIndex, Skeleton skeleton)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 entitial out transform 的结果。

```csharp
// 先通过子系统 API 拿到 AnimResult 实例
AnimResult animResult = ...;
var result = animResult.GetEntitialOutTransform(0, skeleton);
```

### SetOutBoneDisplacement
`public void SetOutBoneDisplacement(sbyte boneIndex, Vec3 position, Skeleton skeleton)`

**用途 / Purpose:** **用途 / Purpose:** 为 out bone displacement 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AnimResult 实例
AnimResult animResult = ...;
animResult.SetOutBoneDisplacement(0, position, skeleton);
```

### SetOutQuat
`public void SetOutQuat(sbyte boneIndex, Mat3 rotation, Skeleton skeleton)`

**用途 / Purpose:** **用途 / Purpose:** 为 out quat 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AnimResult 实例
AnimResult animResult = ...;
animResult.SetOutQuat(0, rotation, skeleton);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AnimResult animResult = ...;
animResult.GetEntitialOutTransform(0, skeleton);
```

## 参见

- [本区域目录](../)