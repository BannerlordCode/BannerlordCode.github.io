<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedMeshEditOperations`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedMeshEditOperations

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `ManagedMeshEditOperations` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### Create

```csharp
public static ManagedMeshEditOperations Create(Mesh meshToEdit)
```

### Weld

```csharp
public void Weld()
```

### AddVertex

```csharp
public int AddVertex(Vec3 vertexPos)
```

### AddFaceCorner

```csharp
public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec3 color, Vec3 normal)
```

### AddFaceCorner

```csharp
public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec2 uv1, Vec3 color, Vec3 normal)
```

### AddFace

```csharp
public int AddFace(int patchNode0, int patchNode1, int patchNode2)
```

### AddTriangle

```csharp
public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 color)
```

### AddTriangle

```csharp
public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 n1, Vec3 n2, Vec3 n3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 c1, Vec3 c2, Vec3 c3)
```

### AddRectangle3

```csharp
public void AddRectangle3(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)
```

### AddRectangleWithInverseUV

```csharp
public void AddRectangleWithInverseUV(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)
```

### AddRect

```csharp
public void AddRect(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)
```

### AddRectWithZUp

```csharp
public void AddRectWithZUp(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)
```

### InvertFacesWindingOrder

```csharp
public void InvertFacesWindingOrder()
```

### ScaleVertices

```csharp
public void ScaleVertices(float newScale)
```

### MoveVerticesAlongNormal

```csharp
public void MoveVerticesAlongNormal(float moveAmount)
```

### ScaleVertices

```csharp
public void ScaleVertices(Vec3 newScale, bool keepUvX = false, float maxUvSize = 1f)
```

### TranslateVertices

```csharp
public void TranslateVertices(Vec3 newOrigin)
```

### AddMeshAux

```csharp
public void AddMeshAux(Mesh mesh, MatrixFrame frame, sbyte boneNo, Vec3 color, bool transformNormal, bool heightGradient, bool addSkinData, bool useDoublePrecision = true)
```

### ComputeTangents

```csharp
public int ComputeTangents(bool checkFixedNormals)
```

### GenerateGrid

```csharp
public void GenerateGrid(Vec2i numEdges, Vec2 edgeScale)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)