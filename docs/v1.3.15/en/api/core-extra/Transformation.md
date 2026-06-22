<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Transformation`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Transformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `Transformation` is a struct in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Identity` | `public static Transformation Identity { get; }` |
| `AsMatrixFrame` | `public MatrixFrame AsMatrixFrame { get; }` |


## Key Methods

### CreateFromMatrixFrame

```csharp
public static Transformation CreateFromMatrixFrame(MatrixFrame matrixFrame)
```

### CreateFromRotation

```csharp
public static Transformation CreateFromRotation(Mat3 rotation)
```

### TransformToParent

```csharp
public Vec3 TransformToParent(Vec3 v)
```

### TransformToParent

```csharp
public Transformation TransformToParent(Transformation t)
```

### TransformToLocal

```csharp
public Vec3 TransformToLocal(Vec3 v)
```

### TransformToLocal

```csharp
public Transformation TransformToLocal(Transformation t)
```

### Rotate

```csharp
public void Rotate(float radian, Vec3 axis)
```

### ApplyScale

```csharp
public void ApplyScale(Vec3 vec3)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)