<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Decal`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Decal

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `Decal` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |


## Key Methods

### CreateDecal

```csharp
public static Decal CreateDecal(string name = null)
```

### CreateCopy

```csharp
public Decal CreateCopy()
```

### CheckAndRegisterToDecalSet

```csharp
public void CheckAndRegisterToDecalSet()
```

### SetIsVisible

```csharp
public void SetIsVisible(bool value)
```

### GetFactor1

```csharp
public uint GetFactor1()
```

### OverrideRoadBoundaryP0

```csharp
public void OverrideRoadBoundaryP0(Vec2 data)
```

### OverrideRoadBoundaryP1

```csharp
public void OverrideRoadBoundaryP1(Vec2 data)
```

### SetFactor1Linear

```csharp
public void SetFactor1Linear(uint linearFactorColor1)
```

### SetFactor1

```csharp
public void SetFactor1(uint factorColor1)
```

### SetAlpha

```csharp
public void SetAlpha(float alpha)
```

### SetVectorArgument

```csharp
public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)
```

### SetVectorArgument2

```csharp
public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)
```

### GetMaterial

```csharp
public Material GetMaterial()
```

### SetMaterial

```csharp
public void SetMaterial(Material material)
```

### SetFrame

```csharp
public void SetFrame(MatrixFrame Frame)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)