---
title: "Transformation"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Transformation`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Transformation

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public struct Transformation`
**领域:** core-extra

## 概述

`Transformation` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

**用途 / Purpose:** 创建一个 `from matrix frame` 实例或对象。

### CreateFromRotation
`public static Transformation CreateFromRotation(Mat3 rotation)`

**用途 / Purpose:** 创建一个 `from rotation` 实例或对象。

### TransformToParent
`public Vec3 TransformToParent(Vec3 v)`

**用途 / Purpose:** 处理 `transform to parent` 相关逻辑。

### TransformToParent
`public Transformation TransformToParent(Transformation t)`

**用途 / Purpose:** 处理 `transform to parent` 相关逻辑。

### TransformToLocal
`public Vec3 TransformToLocal(Vec3 v)`

**用途 / Purpose:** 处理 `transform to local` 相关逻辑。

### TransformToLocal
`public Transformation TransformToLocal(Transformation t)`

**用途 / Purpose:** 处理 `transform to local` 相关逻辑。

### Rotate
`public void Rotate(float radian, Vec3 axis)`

**用途 / Purpose:** 处理 `rotate` 相关逻辑。

### ApplyScale
`public void ApplyScale(Vec3 vec3)`

**用途 / Purpose:** 将 `scale` 应用到当前对象。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Transformation.CreateFromMatrixFrame(matrixFrame);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
