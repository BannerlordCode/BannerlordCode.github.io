<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Plane`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Plane

**命名空间:** System.Numerics
**模块:** System.Numerics
**类型:** `public struct Plane : IEquatable<Plane>`
**Base:** `IEquatable<Plane>`
**领域:** campaign-ext

## 概述

`Plane` 位于 `System.Numerics`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `System.Numerics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateFromVertices
`public static Plane CreateFromVertices(Vector3 point1, Vector3 point2, Vector3 point3)`

**用途 / Purpose:** 创建一个 `from vertices` 实例或对象。

### Normalize
`public static Plane Normalize(Plane value)`

**用途 / Purpose:** 处理 `normalize` 相关逻辑。

### Transform
`public static Plane Transform(Plane plane, Matrix4x4 matrix)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Transform
`public static Plane Transform(Plane plane, Quaternion rotation)`

**用途 / Purpose:** 处理 `transform` 相关逻辑。

### Dot
`public static float Dot(Plane plane, Vector4 value)`

**用途 / Purpose:** 处理 `dot` 相关逻辑。

### DotCoordinate
`public static float DotCoordinate(Plane plane, Vector3 value)`

**用途 / Purpose:** 处理 `dot coordinate` 相关逻辑。

### DotNormal
`public static float DotNormal(Plane plane, Vector3 value)`

**用途 / Purpose:** 处理 `dot normal` 相关逻辑。

### Equals
`public bool Equals(Plane other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Plane.CreateFromVertices(point1, point2, point3);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
