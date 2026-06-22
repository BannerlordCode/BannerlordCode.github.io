<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Color`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Color

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `Color` is a struct in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Black` | `public static Color Black { get; }` |
| `White` | `public static Color White { get; }` |


## Key Methods

### ToVector3

```csharp
public Vector3 ToVector3()
```

### ToVec3

```csharp
public Vec3 ToVec3()
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### FromVector3

```csharp
public static Color FromVector3(Vector3 vector3)
```

### FromVector3

```csharp
public static Color FromVector3(Vec3 vector3)
```

### Length

```csharp
public float Length()
```

### ToUnsignedInteger

```csharp
public uint ToUnsignedInteger()
```

### FromUint

```csharp
public static Color FromUint(uint color)
```

### FromHSV

```csharp
public static Color FromHSV(float h, float s, float v)
```

### ConvertStringToColor

```csharp
public static Color ConvertStringToColor(string color)
```

### Lerp

```csharp
public static Color Lerp(Color start, Color end, float ratio)
```

### ToString

```csharp
public override string ToString()
```

### UIntToColorString

```csharp
public static string UIntToColorString(uint color)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)