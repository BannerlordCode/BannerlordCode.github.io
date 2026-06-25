---
title: "Matrix4x4"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Matrix4x4`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Matrix4x4

**命名空间:** System.Numerics
**模块:** System.Numerics
**类型:** `public struct Matrix4x4 : IEquatable<Matrix4x4>`
**Base:** `IEquatable<Matrix4x4>`
**领域:** campaign-ext

## 概述

`Matrix4x4` 位于 `System.Numerics`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `System.Numerics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `Translation` | `public Vector3 Translation { get; set; }` |

## 主要方法

### CreateBillboard
`public static Matrix4x4 CreateBillboard(Vector3 objectPosition, Vector3 cameraPosition, Vector3 cameraUpVector, Vector3 cameraForwardVector)`

**用途 / Purpose:** 创建一个 `billboard` 实例或对象。

### CreateConstrainedBillboard
`public static Matrix4x4 CreateConstrainedBillboard(Vector3 objectPosition, Vector3 cameraPosition, Vector3 rotateAxis, Vector3 cameraForwardVector, Vector3 objectForwardVector)`

**用途 / Purpose:** 创建一个 `constrained billboard` 实例或对象。

### CreateTranslation
`public static Matrix4x4 CreateTranslation(Vector3 position)`

**用途 / Purpose:** 创建一个 `translation` 实例或对象。

### CreateTranslation
`public static Matrix4x4 CreateTranslation(float xPosition, float yPosition, float zPosition)`

**用途 / Purpose:** 创建一个 `translation` 实例或对象。

### CreateScale
`public static Matrix4x4 CreateScale(float xScale, float yScale, float zScale)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix4x4 CreateScale(float xScale, float yScale, float zScale, Vector3 centerPoint)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix4x4 CreateScale(Vector3 scales)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix4x4 CreateScale(Vector3 scales, Vector3 centerPoint)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix4x4 CreateScale(float scale)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateScale
`public static Matrix4x4 CreateScale(float scale, Vector3 centerPoint)`

**用途 / Purpose:** 创建一个 `scale` 实例或对象。

### CreateRotationX
`public static Matrix4x4 CreateRotationX(float radians)`

**用途 / Purpose:** 创建一个 `rotation x` 实例或对象。

### CreateRotationX
`public static Matrix4x4 CreateRotationX(float radians, Vector3 centerPoint)`

**用途 / Purpose:** 创建一个 `rotation x` 实例或对象。

### CreateRotationY
`public static Matrix4x4 CreateRotationY(float radians)`

**用途 / Purpose:** 创建一个 `rotation y` 实例或对象。

### CreateRotationY
`public static Matrix4x4 CreateRotationY(float radians, Vector3 centerPoint)`

**用途 / Purpose:** 创建一个 `rotation y` 实例或对象。

### CreateRotationZ
`public static Matrix4x4 CreateRotationZ(float radians)`

**用途 / Purpose:** 创建一个 `rotation z` 实例或对象。

### CreateRotationZ
`public static Matrix4x4 CreateRotationZ(float radians, Vector3 centerPoint)`

**用途 / Purpose:** 创建一个 `rotation z` 实例或对象。

### CreateFromAxisAngle
`public static Matrix4x4 CreateFromAxisAngle(Vector3 axis, float angle)`

**用途 / Purpose:** 创建一个 `from axis angle` 实例或对象。

### CreatePerspectiveFieldOfView
`public static Matrix4x4 CreatePerspectiveFieldOfView(float fieldOfView, float aspectRatio, float nearPlaneDistance, float farPlaneDistance)`

**用途 / Purpose:** 创建一个 `perspective field of view` 实例或对象。

### CreatePerspective
`public static Matrix4x4 CreatePerspective(float width, float height, float nearPlaneDistance, float farPlaneDistance)`

**用途 / Purpose:** 创建一个 `perspective` 实例或对象。

### CreatePerspectiveOffCenter
`public static Matrix4x4 CreatePerspectiveOffCenter(float left, float right, float bottom, float top, float nearPlaneDistance, float farPlaneDistance)`

**用途 / Purpose:** 创建一个 `perspective off center` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Matrix4x4.CreateBillboard(objectPosition, cameraPosition, cameraUpVector, cameraForwardVector);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
