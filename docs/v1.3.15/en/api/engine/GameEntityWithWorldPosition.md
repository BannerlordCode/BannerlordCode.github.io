<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntityWithWorldPosition`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityWithWorldPosition

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `GameEntityWithWorldPosition` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GameEntity` | `public WeakGameEntity GameEntity { get; }` |
| `WorldPosition` | `public WorldPosition WorldPosition { get; }` |
| `WorldFrame` | `public WorldFrame WorldFrame { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; }` |


## Key Methods

### InvalidateWorldPosition

```csharp
public void InvalidateWorldPosition()
```

### SetCustomLocalFrame

```csharp
public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)
```

### GetNavMesh

```csharp
public UIntPtr GetNavMesh()
```

### GetNavMeshVec3

```csharp
public Vec3 GetNavMeshVec3()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)