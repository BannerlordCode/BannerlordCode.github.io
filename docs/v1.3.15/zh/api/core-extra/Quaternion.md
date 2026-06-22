<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Quaternion`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Quaternion

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Quaternion` 是 `TaleWorlds.Library` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public float this { get; }` |
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `IsUnit` | `public bool IsUnit { get; }` |
| `Identity` | `public static Quaternion Identity { get; }` |


## 主要方法

### GetHashCode

```csharp
public override int GetHashCode()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### Normalize

```csharp
public float Normalize()
```

### SafeNormalize

```csharp
public float SafeNormalize()
```

### NormalizeWeighted

```csharp
public float NormalizeWeighted()
```

### SetToRotationX

```csharp
public void SetToRotationX(float angle)
```

### SetToRotationY

```csharp
public void SetToRotationY(float angle)
```

### SetToRotationZ

```csharp
public void SetToRotationZ(float angle)
```

### Flip

```csharp
public void Flip()
```

### TransformToParent

```csharp
public Quaternion TransformToParent(Quaternion q)
```

### TransformToLocal

```csharp
public Quaternion TransformToLocal(Quaternion q)
```

### TransformToLocalWithoutNormalize

```csharp
public Quaternion TransformToLocalWithoutNormalize(Quaternion q)
```

### Slerp

```csharp
public static Quaternion Slerp(Quaternion from, Quaternion to, float t)
```

### Lerp

```csharp
public static Quaternion Lerp(Quaternion from, Quaternion to, float t)
```

### Mat3FromQuaternion

```csharp
public static Mat3 Mat3FromQuaternion(Quaternion quat)
```

### QuaternionFromEulerAngles

```csharp
public static Quaternion QuaternionFromEulerAngles(float yaw, float pitch, float roll)
```

### QuaternionFromMat3

```csharp
public static Quaternion QuaternionFromMat3(Mat3 m)
```

### AxisAngleFromQuaternion

```csharp
public static void AxisAngleFromQuaternion(out Vec3 axis, out float angle, Quaternion quat)
```

### QuaternionFromAxisAngle

```csharp
public static Quaternion QuaternionFromAxisAngle(Vec3 axis, float angle)
```

### EulerAngleFromQuaternion

```csharp
public static Vec3 EulerAngleFromQuaternion(Quaternion quat)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)