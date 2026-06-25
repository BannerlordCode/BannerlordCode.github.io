---
title: "MatrixExtensions"
description: "MatrixExtensions 的自动生成类参考。"
---
# MatrixExtensions

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class MatrixExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs`

## 概述

`MatrixExtensions` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToMatrix4x4
`public static Matrix4x4 ToMatrix4x4(this MatrixFrame matrixFrame)`

**用途 / Purpose:** 处理与 「to matrix4x4」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MatrixExtensions.ToMatrix4x4(matrixFrame);
```

### ToMatrixFrame
`public static MatrixFrame ToMatrixFrame(this Matrix4x4 matrix)`

**用途 / Purpose:** 处理与 「to matrix frame」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MatrixExtensions.ToMatrixFrame(matrix);
```

### AreAllComponentsValid
`public static bool AreAllComponentsValid(this Matrix4x4 matrix)`

**用途 / Purpose:** 处理与 「are all components valid」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MatrixExtensions.AreAllComponentsValid(matrix);
```

### AreAllComponentsValid
`public static bool AreAllComponentsValid(this MatrixFrame matrix)`

**用途 / Purpose:** 处理与 「are all components valid」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MatrixExtensions.AreAllComponentsValid(matrix);
```

### CreateOrthographicOffCenter
`public static MatrixFrame CreateOrthographicOffCenter(float left, float right, float bottom, float top, float zNearPlane, float zFarPlane)`

**用途 / Purpose:** 构建一个新的 「orthographic off center」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MatrixExtensions.CreateOrthographicOffCenter(0, 0, 0, 0, 0, 0);
```

## 使用示例

```csharp
MatrixExtensions.ToMatrix4x4(matrixFrame);
```

## 参见

- [本区域目录](../)