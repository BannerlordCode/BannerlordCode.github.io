<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MeshBuilder`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MeshBuilder

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `MeshBuilder` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### AddFaceCorner

```csharp
public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color)
```

### AddFace

```csharp
public int AddFace(int patchNode0, int patchNode1, int patchNode2)
```

### Clear

```csharp
public void Clear()
```

### Finalize

```csharp
public new Mesh Finalize()
```

### CreateUnitMesh

```csharp
public static Mesh CreateUnitMesh()
```

### CreateTilingWindowMesh

```csharp
public static Mesh CreateTilingWindowMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness, Vec2 bgBorderThickness)
```

### CreateTilingButtonMesh

```csharp
public static Mesh CreateTilingButtonMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)