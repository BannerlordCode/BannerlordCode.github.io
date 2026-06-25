---
title: "ManagedMeshEditOperations"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedMeshEditOperations`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedMeshEditOperations

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedMeshEditOperations : NativeObject`
**Base:** `NativeObject`
**Area:** engine

## Overview

`ManagedMeshEditOperations` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static ManagedMeshEditOperations Create(Mesh meshToEdit)`

**Purpose:** Creates a new `create` instance or object.

### Weld
`public void Weld()`

**Purpose:** Handles logic related to `weld`.

### AddVertex
`public int AddVertex(Vec3 vertexPos)`

**Purpose:** Adds `vertex` to the current collection or state.

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec3 color, Vec3 normal)`

**Purpose:** Adds `face corner` to the current collection or state.

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec2 uv1, Vec3 color, Vec3 normal)`

**Purpose:** Adds `face corner` to the current collection or state.

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2)`

**Purpose:** Adds `face` to the current collection or state.

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 color)`

**Purpose:** Adds `triangle` to the current collection or state.

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 n1, Vec3 n2, Vec3 n3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 c1, Vec3 c2, Vec3 c3)`

**Purpose:** Adds `triangle` to the current collection or state.

### AddRectangle3
`public void AddRectangle3(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)`

**Purpose:** Adds `rectangle3` to the current collection or state.

### AddRectangleWithInverseUV
`public void AddRectangleWithInverseUV(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)`

**Purpose:** Adds `rectangle with inverse u v` to the current collection or state.

### AddRect
`public void AddRect(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)`

**Purpose:** Adds `rect` to the current collection or state.

### AddRectWithZUp
`public void AddRectWithZUp(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)`

**Purpose:** Adds `rect with z up` to the current collection or state.

### InvertFacesWindingOrder
`public void InvertFacesWindingOrder()`

**Purpose:** Handles logic related to `invert faces winding order`.

### ScaleVertices
`public void ScaleVertices(float newScale)`

**Purpose:** Handles logic related to `scale vertices`.

### MoveVerticesAlongNormal
`public void MoveVerticesAlongNormal(float moveAmount)`

**Purpose:** Handles logic related to `move vertices along normal`.

### ScaleVertices
`public void ScaleVertices(Vec3 newScale, bool keepUvX = false, float maxUvSize = 1f)`

**Purpose:** Handles logic related to `scale vertices`.

### TranslateVertices
`public void TranslateVertices(Vec3 newOrigin)`

**Purpose:** Handles logic related to `translate vertices`.

### AddMeshAux
`public void AddMeshAux(Mesh mesh, MatrixFrame frame, sbyte boneNo, Vec3 color, bool transformNormal, bool heightGradient, bool addSkinData, bool useDoublePrecision = true)`

**Purpose:** Adds `mesh aux` to the current collection or state.

### ComputeTangents
`public int ComputeTangents(bool checkFixedNormals)`

**Purpose:** Handles logic related to `compute tangents`.

### GenerateGrid
`public void GenerateGrid(Vec2i numEdges, Vec2 edgeScale)`

**Purpose:** Handles logic related to `generate grid`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ManagedMeshEditOperations.Create(meshToEdit);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
