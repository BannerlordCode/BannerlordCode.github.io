<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Quaternion`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Quaternion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `Quaternion` is a struct in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public float this { get; }` |
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `IsUnit` | `public bool IsUnit { get; }` |
| `Identity` | `public static Quaternion Identity { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)