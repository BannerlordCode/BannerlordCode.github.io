<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedMeshEditOperations`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedMeshEditOperations

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`ManagedMeshEditOperations` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)