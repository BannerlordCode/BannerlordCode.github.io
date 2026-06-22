<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray8Vec3`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StackArray8Vec3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `StackArray8Vec3` is a struct in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)