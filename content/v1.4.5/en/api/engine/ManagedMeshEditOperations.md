---
title: "ManagedMeshEditOperations"
description: "Auto-generated class reference for ManagedMeshEditOperations."
---
# ManagedMeshEditOperations

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedMeshEditOperations : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedMeshEditOperations.cs`

## Overview

`ManagedMeshEditOperations` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static ManagedMeshEditOperations Create(Mesh meshToEdit)`

**Purpose:** Creates a new instance or related entity for the current object.

```csharp
// Static call; no instance required
ManagedMeshEditOperations.Create(meshToEdit);
```

### Weld
`public void Weld()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.Weld();
```

### AddVertex
`public int AddVertex(Vec3 vertexPos)`

**Purpose:** Adds `vertex` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.AddVertex(vertexPos);
```

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec3 color, Vec3 normal)`

**Purpose:** Adds `face corner` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.AddFaceCorner(0, uv0, color, normal);
```

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec2 uv1, Vec3 color, Vec3 normal)`

**Purpose:** Adds `face corner` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.AddFaceCorner(0, uv0, uv1, color, normal);
```

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2)`

**Purpose:** Adds `face` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.AddFace(0, 0, 0);
```

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 color)`

**Purpose:** Adds `triangle` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddTriangle(p1, p2, p3, uv1, uv2, uv3, color);
```

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 n1, Vec3 n2, Vec3 n3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 c1, Vec3 c2, Vec3 c3)`

**Purpose:** Adds `triangle` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddTriangle(p1, p2, p3, n1, n2, n3, uv1, uv2, uv3, c1, c2, c3);
```

### AddRectangle3
`public void AddRectangle3(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)`

**Purpose:** Adds `rectangle3` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddRectangle3(o, size, uv_origin, uvSize, color);
```

### AddRectangleWithInverseUV
`public void AddRectangleWithInverseUV(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)`

**Purpose:** Adds `rectangle with inverse u v` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddRectangleWithInverseUV(o, size, uv_origin, uvSize, color);
```

### AddRect
`public void AddRect(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)`

**Purpose:** Adds `rect` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddRect(originBegin, originEnd, uvBegin, uvEnd, color);
```

### AddRectWithZUp
`public void AddRectWithZUp(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)`

**Purpose:** Adds `rect with z up` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddRectWithZUp(originBegin, originEnd, uvBegin, uvEnd, color);
```

### InvertFacesWindingOrder
`public void InvertFacesWindingOrder()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.InvertFacesWindingOrder();
```

### ScaleVertices
`public void ScaleVertices(float newScale)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ScaleVertices(0);
```

### MoveVerticesAlongNormal
`public void MoveVerticesAlongNormal(float moveAmount)`

**Purpose:** Moves `vertices along normal` to a new position or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.MoveVerticesAlongNormal(0);
```

### ScaleVertices
`public void ScaleVertices(Vec3 newScale, bool keepUvX = false, float maxUvSize = 1f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ScaleVertices(newScale, false, 0);
```

### TranslateVertices
`public void TranslateVertices(Vec3 newOrigin)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.TranslateVertices(newOrigin);
```

### AddMeshAux
`public void AddMeshAux(Mesh mesh, MatrixFrame frame, sbyte boneNo, Vec3 color, bool transformNormal, bool heightGradient, bool addSkinData, bool useDoublePrecision = true)`

**Purpose:** Adds `mesh aux` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshAux(mesh, frame, 0, color, false, false, false, false);
```

### ComputeTangents
`public int ComputeTangents(bool checkFixedNormals)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.ComputeTangents(false);
```

### GenerateGrid
`public void GenerateGrid(Vec2i numEdges, Vec2 edgeScale)`

**Purpose:** Generates an instance, data, or representation of `grid`.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.GenerateGrid(numEdges, edgeScale);
```

### RescaleMesh2d
`public void RescaleMesh2d(Vec2 scaleSizeMin, Vec2 scaleSizeMax)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2d(scaleSizeMin, scaleSizeMax);
```

### RescaleMesh2dRepeatX
`public void RescaleMesh2dRepeatX(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dRepeatX(scaleSizeMin, scaleSizeMax, 0, 0);
```

### RescaleMesh2dRepeatY
`public void RescaleMesh2dRepeatY(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dRepeatY(scaleSizeMin, scaleSizeMax, 0, 0);
```

### RescaleMesh2dRepeatXWithTiling
`public void RescaleMesh2dRepeatXWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dRepeatXWithTiling(scaleSizeMin, scaleSizeMax, 0, 0, 0);
```

### RescaleMesh2dRepeatYWithTiling
`public void RescaleMesh2dRepeatYWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dRepeatYWithTiling(scaleSizeMin, scaleSizeMax, 0, 0, 0);
```

### RescaleMesh2dWithoutChangingUV
`public void RescaleMesh2dWithoutChangingUV(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float remaining)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dWithoutChangingUV(scaleSizeMin, scaleSizeMax, 0);
```

### AddLine
`public void AddLine(Vec3 start, Vec3 end, Vec3 color, float lineWidth = 0.004f)`

**Purpose:** Adds `line` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddLine(start, end, color, 0);
```

### ComputeCornerNormals
`public void ComputeCornerNormals(bool checkFixedNormals = false, bool smoothCornerNormals = true)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ComputeCornerNormals(false, false);
```

### ComputeCornerNormalsWithSmoothingData
`public void ComputeCornerNormalsWithSmoothingData()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ComputeCornerNormalsWithSmoothingData();
```

### AddMesh
`public void AddMesh(Mesh mesh, MatrixFrame frame)`

**Purpose:** Adds `mesh` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMesh(mesh, frame);
```

### AddMeshWithSkinData
`public void AddMeshWithSkinData(Mesh mesh, MatrixFrame frame, sbyte boneIndex)`

**Purpose:** Adds `mesh with skin data` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshWithSkinData(mesh, frame, 0);
```

### AddMeshWithColor
`public void AddMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)`

**Purpose:** Adds `mesh with color` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshWithColor(mesh, frame, vertexColor, false);
```

### AddMeshToBone
`public void AddMeshToBone(Mesh mesh, MatrixFrame frame, sbyte boneIndex)`

**Purpose:** Adds `mesh to bone` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshToBone(mesh, frame, 0);
```

### AddMeshWithFixedNormals
`public void AddMeshWithFixedNormals(Mesh mesh, MatrixFrame frame)`

**Purpose:** Adds `mesh with fixed normals` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshWithFixedNormals(mesh, frame);
```

### AddMeshWithFixedNormalsWithHeightGradientColor
`public void AddMeshWithFixedNormalsWithHeightGradientColor(Mesh mesh, MatrixFrame frame)`

**Purpose:** Adds `mesh with fixed normals with height gradient color` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshWithFixedNormalsWithHeightGradientColor(mesh, frame);
```

### AddSkinnedMeshWithColor
`public void AddSkinnedMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)`

**Purpose:** Adds `skinned mesh with color` to the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddSkinnedMeshWithColor(mesh, frame, vertexColor, false);
```

### SetCornerVertexColor
`public void SetCornerVertexColor(int cornerNo, Vec3 vertexColor)`

**Purpose:** Assigns a new value to `corner vertex color` and updates the object's internal state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetCornerVertexColor(0, vertexColor);
```

### SetCornerUV
`public void SetCornerUV(int cornerNo, Vec2 newUV, int uvNumber = 0)`

**Purpose:** Assigns a new value to `corner u v` and updates the object's internal state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetCornerUV(0, newUV, 0);
```

### ReserveVertices
`public void ReserveVertices(int count)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ReserveVertices(0);
```

### ReserveFaceCorners
`public void ReserveFaceCorners(int count)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ReserveFaceCorners(0);
```

### ReserveFaces
`public void ReserveFaces(int count)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ReserveFaces(0);
```

### RemoveDuplicatedCorners
`public int RemoveDuplicatedCorners()`

**Purpose:** Removes `duplicated corners` from the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.RemoveDuplicatedCorners();
```

### TransformVerticesToParent
`public void TransformVerticesToParent(MatrixFrame frame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.TransformVerticesToParent(frame);
```

### TransformVerticesToLocal
`public void TransformVerticesToLocal(MatrixFrame frame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.TransformVerticesToLocal(frame);
```

### SetVertexColor
`public void SetVertexColor(Vec3 color)`

**Purpose:** Assigns a new value to `vertex color` and updates the object's internal state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetVertexColor(color);
```

### GetVertexColor
`public Vec3 GetVertexColor(int faceCornerIndex)`

**Purpose:** Reads and returns the `vertex color` value held by the current object.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.GetVertexColor(0);
```

### SetVertexColorAlpha
`public void SetVertexColorAlpha(float newAlpha)`

**Purpose:** Assigns a new value to `vertex color alpha` and updates the object's internal state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetVertexColorAlpha(0);
```

### GetVertexColorAlpha
`public float GetVertexColorAlpha()`

**Purpose:** Reads and returns the `vertex color alpha` value held by the current object.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.GetVertexColorAlpha();
```

### EnsureTransformedVertices
`public void EnsureTransformedVertices()`

**Purpose:** Ensures `transformed vertices` is in the expected state, initializing or correcting it if necessary.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.EnsureTransformedVertices();
```

### ApplyCPUSkinning
`public void ApplyCPUSkinning(Skeleton skeleton)`

**Purpose:** Applies the effect of `c p u skinning` to the current object.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ApplyCPUSkinning(skeleton);
```

### UpdateOverlappedVertexNormals
`public void UpdateOverlappedVertexNormals(Mesh attachedToMesh, MatrixFrame attachFrame, float mergeRadiusSQ = 0.0025f)`

**Purpose:** Recalculates and stores the latest representation of `overlapped vertex normals`.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.UpdateOverlappedVertexNormals(attachedToMesh, attachFrame, 0);
```

### ClearAll
`public void ClearAll()`

**Purpose:** Removes all `all` from the current object.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ClearAll();
```

### SetTangentsOfFaceCorner
`public void SetTangentsOfFaceCorner(int faceCornerIndex, Vec3 tangent, Vec3 binormal)`

**Purpose:** Assigns a new value to `tangents of face corner` and updates the object's internal state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetTangentsOfFaceCorner(0, tangent, binormal);
```

### SetPositionOfVertex
`public void SetPositionOfVertex(int vertexIndex, Vec3 position)`

**Purpose:** Assigns a new value to `position of vertex` and updates the object's internal state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetPositionOfVertex(0, position);
```

### GetPositionOfVertex
`public Vec3 GetPositionOfVertex(int vertexIndex)`

**Purpose:** Reads and returns the `position of vertex` value held by the current object.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.GetPositionOfVertex(0);
```

### RemoveFace
`public void RemoveFace(int faceIndex)`

**Purpose:** Removes `face` from the current collection or state.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RemoveFace(0);
```

### FinalizeEditing
`public void FinalizeEditing()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ManagedMeshEditOperations from the subsystem API first
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.FinalizeEditing();
```

## Usage Example

```csharp
ManagedMeshEditOperations.Create(meshToEdit);
```

## See Also

- [Area Index](../)