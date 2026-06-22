<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorldPosition`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** struct
**Area:** Engine

## Overview

> This is an auto-generated stub. `WorldPosition` is a struct in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `AsVec2` | `public Vec2 AsVec2 { get; }` |
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `IsValid` | `public bool IsValid { get; }` |


## Key Methods

### SetVec3

```csharp
public void SetVec3(UIntPtr navMesh, Vec3 position, bool hasValidZ)
```

### GetNavMesh

```csharp
public UIntPtr GetNavMesh()
```

### GetNavMeshMT

```csharp
public UIntPtr GetNavMeshMT()
```

### GetNearestNavMesh

```csharp
public UIntPtr GetNearestNavMesh()
```

### GetNavMeshZ

```csharp
public float GetNavMeshZ()
```

### GetNavMeshZMT

```csharp
public float GetNavMeshZMT()
```

### GetGroundZ

```csharp
public float GetGroundZ()
```

### GetGroundZMT

```csharp
public float GetGroundZMT()
```

### GetNavMeshVec3

```csharp
public Vec3 GetNavMeshVec3()
```

### GetNavMeshVec3MT

```csharp
public Vec3 GetNavMeshVec3MT()
```

### GetGroundVec3

```csharp
public Vec3 GetGroundVec3()
```

### GetGroundVec3MT

```csharp
public Vec3 GetGroundVec3MT()
```

### GetVec3WithoutValidity

```csharp
public Vec3 GetVec3WithoutValidity()
```

### SetVec2MT

```csharp
public void SetVec2MT(Vec2 value)
```

### SetVec2

```csharp
public void SetVec2(Vec2 value)
```

### DistanceSquaredWithLimit

```csharp
public float DistanceSquaredWithLimit(in Vec3 targetPoint, float limitSquared)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)