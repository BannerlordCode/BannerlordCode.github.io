<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StackArray8Vec3`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8Vec3

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`StackArray8Vec3` 是 `TaleWorlds.Library` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `Z` | `public float Z { get; }` |
| `this` | `public float this { get; }` |
| `Length` | `public float Length { get; }` |
| `LengthSquared` | `public float LengthSquared { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `IsValidXYZW` | `public bool IsValidXYZW { get; }` |
| `IsUnit` | `public bool IsUnit { get; }` |
| `IsNonZero` | `public bool IsNonZero { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; set; }` |
| `ToARGB` | `public uint ToARGB { get; }` |
| `RotationZ` | `public float RotationZ { get; }` |
| `RotationX` | `public float RotationX { get; }` |
| `this` | `public Vec3 this { get; }` |


## 主要方法

### Abs

```csharp
public static Vec3 Abs(Vec3 vec)
```

### Vector3

```csharp
public static explicit operator Vector3(Vec3 vec3)
```

### DotProduct

```csharp
public static float DotProduct(Vec3 v1, Vec3 v2)
```

### Lerp

```csharp
public static Vec3 Lerp(Vec3 v1, Vec3 v2, float alpha)
```

### Slerp

```csharp
public static Vec3 Slerp(Vec3 start, Vec3 end, float percent)
```

### Vec3Max

```csharp
public static Vec3 Vec3Max(Vec3 v1, Vec3 v2)
```

### Vec3Min

```csharp
public static Vec3 Vec3Min(Vec3 v1, Vec3 v2)
```

### CrossProduct

```csharp
public static Vec3 CrossProduct(Vec3 va, Vec3 vb)
```

### ElementWiseProduct

```csharp
public static Vec3 ElementWiseProduct(Vec3 va, Vec3 vb)
```

### ElementWiseDivision

```csharp
public static Vec3 ElementWiseDivision(Vec3 va, Vec3 vb)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### NormalizedCopy

```csharp
public Vec3 NormalizedCopy()
```

### Normalize

```csharp
public float Normalize()
```

### ClampMagnitude

```csharp
public void ClampMagnitude(float min, float max)
```

### ClampedCopy

```csharp
public Vec3 ClampedCopy(float min, float max)
```

### ClampedCopy

```csharp
public Vec3 ClampedCopy(float min, float max, out bool valueClamped)
```

### NormalizeWithoutChangingZ

```csharp
public void NormalizeWithoutChangingZ()
```

### CrossProductWithUp

```csharp
public Vec3 CrossProductWithUp()
```

### CrossProductWithUpAsLeftParameter

```csharp
public Vec3 CrossProductWithUpAsLeftParameter()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)