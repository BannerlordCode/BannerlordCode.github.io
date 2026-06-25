---
title: "Transformation"
description: "Transformation 的自动生成类参考。"
---
# Transformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Transformation`
**Base:** 无
**File:** `TaleWorlds.Library/Transformation.cs`

## 概述

`Transformation` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Identity` | `public static Transformation Identity { get; }` |
| `AsMatrixFrame` | `public MatrixFrame AsMatrixFrame { get; }` |

## 主要方法

### CreateFromMatrixFrame
`public static Transformation CreateFromMatrixFrame(MatrixFrame matrixFrame)`

**用途 / Purpose:** 构建一个新的 「from matrix frame」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Transformation.CreateFromMatrixFrame(matrixFrame);
```

### CreateFromRotation
`public static Transformation CreateFromRotation(Mat3 rotation)`

**用途 / Purpose:** 构建一个新的 「from rotation」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Transformation.CreateFromRotation(rotation);
```

### TransformToParent
`public Vec3 TransformToParent(Vec3 v)`

**用途 / Purpose:** 处理与 「transform to parent」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
var result = transformation.TransformToParent(v);
```

### TransformToParent
`public Transformation TransformToParent(Transformation t)`

**用途 / Purpose:** 处理与 「transform to parent」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
var result = transformation.TransformToParent(t);
```

### TransformToLocal
`public Vec3 TransformToLocal(Vec3 v)`

**用途 / Purpose:** 处理与 「transform to local」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
var result = transformation.TransformToLocal(v);
```

### TransformToLocal
`public Transformation TransformToLocal(Transformation t)`

**用途 / Purpose:** 处理与 「transform to local」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
var result = transformation.TransformToLocal(t);
```

### Rotate
`public void Rotate(float radian, Vec3 axis)`

**用途 / Purpose:** 处理与 「rotate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
transformation.Rotate(0, axis);
```

### ApplyScale
`public void ApplyScale(Vec3 vec3)`

**用途 / Purpose:** 将 「scale」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
transformation.ApplyScale(vec3);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
var result = transformation.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
var result = transformation.GetHashCode();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Transformation 实例
Transformation transformation = ...;
var result = transformation.ToString();
```

## 使用示例

```csharp
Transformation.CreateFromMatrixFrame(matrixFrame);
```

## 参见

- [本区域目录](../)