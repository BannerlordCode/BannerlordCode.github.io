<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedMeshEditOperations`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedMeshEditOperations

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedMeshEditOperations : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedMeshEditOperations.cs`

## Overview

`ManagedMeshEditOperations` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### RescaleMesh2d
`public void RescaleMesh2d(Vec2 scaleSizeMin, Vec2 scaleSizeMax)`

**Purpose:** Handles logic related to `rescale mesh2d`.

### RescaleMesh2dRepeatX
`public void RescaleMesh2dRepeatX(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)`

**Purpose:** Handles logic related to `rescale mesh2d repeat x`.

### RescaleMesh2dRepeatY
`public void RescaleMesh2dRepeatY(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)`

**Purpose:** Handles logic related to `rescale mesh2d repeat y`.

### RescaleMesh2dRepeatXWithTiling
`public void RescaleMesh2dRepeatXWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)`

**Purpose:** Handles logic related to `rescale mesh2d repeat x with tiling`.

### RescaleMesh2dRepeatYWithTiling
`public void RescaleMesh2dRepeatYWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)`

**Purpose:** Handles logic related to `rescale mesh2d repeat y with tiling`.

### RescaleMesh2dWithoutChangingUV
`public void RescaleMesh2dWithoutChangingUV(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float remaining)`

**Purpose:** Handles logic related to `rescale mesh2d without changing u v`.

### AddLine
`public void AddLine(Vec3 start, Vec3 end, Vec3 color, float lineWidth = 0.004f)`

**Purpose:** Adds `line` to the current collection or state.

### ComputeCornerNormals
`public void ComputeCornerNormals(bool checkFixedNormals = false, bool smoothCornerNormals = true)`

**Purpose:** Handles logic related to `compute corner normals`.

### ComputeCornerNormalsWithSmoothingData
`public void ComputeCornerNormalsWithSmoothingData()`

**Purpose:** Handles logic related to `compute corner normals with smoothing data`.

### AddMesh
`public void AddMesh(Mesh mesh, MatrixFrame frame)`

**Purpose:** Adds `mesh` to the current collection or state.

### AddMeshWithSkinData
`public void AddMeshWithSkinData(Mesh mesh, MatrixFrame frame, sbyte boneIndex)`

**Purpose:** Adds `mesh with skin data` to the current collection or state.

### AddMeshWithColor
`public void AddMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)`

**Purpose:** Adds `mesh with color` to the current collection or state.

### AddMeshToBone
`public void AddMeshToBone(Mesh mesh, MatrixFrame frame, sbyte boneIndex)`

**Purpose:** Adds `mesh to bone` to the current collection or state.

### AddMeshWithFixedNormals
`public void AddMeshWithFixedNormals(Mesh mesh, MatrixFrame frame)`

**Purpose:** Adds `mesh with fixed normals` to the current collection or state.

### AddMeshWithFixedNormalsWithHeightGradientColor
`public void AddMeshWithFixedNormalsWithHeightGradientColor(Mesh mesh, MatrixFrame frame)`

**Purpose:** Adds `mesh with fixed normals with height gradient color` to the current collection or state.

### AddSkinnedMeshWithColor
`public void AddSkinnedMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)`

**Purpose:** Adds `skinned mesh with color` to the current collection or state.

### SetCornerVertexColor
`public void SetCornerVertexColor(int cornerNo, Vec3 vertexColor)`

**Purpose:** Sets the value or state of `corner vertex color`.

### SetCornerUV
`public void SetCornerUV(int cornerNo, Vec2 newUV, int uvNumber = 0)`

**Purpose:** Sets the value or state of `corner u v`.

### ReserveVertices
`public void ReserveVertices(int count)`

**Purpose:** Handles logic related to `reserve vertices`.

### ReserveFaceCorners
`public void ReserveFaceCorners(int count)`

**Purpose:** Handles logic related to `reserve face corners`.

### ReserveFaces
`public void ReserveFaces(int count)`

**Purpose:** Handles logic related to `reserve faces`.

### RemoveDuplicatedCorners
`public int RemoveDuplicatedCorners()`

**Purpose:** Removes `duplicated corners` from the current collection or state.

### TransformVerticesToParent
`public void TransformVerticesToParent(MatrixFrame frame)`

**Purpose:** Handles logic related to `transform vertices to parent`.

### TransformVerticesToLocal
`public void TransformVerticesToLocal(MatrixFrame frame)`

**Purpose:** Handles logic related to `transform vertices to local`.

### SetVertexColor
`public void SetVertexColor(Vec3 color)`

**Purpose:** Sets the value or state of `vertex color`.

### GetVertexColor
`public Vec3 GetVertexColor(int faceCornerIndex)`

**Purpose:** Gets the current value of `vertex color`.

### SetVertexColorAlpha
`public void SetVertexColorAlpha(float newAlpha)`

**Purpose:** Sets the value or state of `vertex color alpha`.

### GetVertexColorAlpha
`public float GetVertexColorAlpha()`

**Purpose:** Gets the current value of `vertex color alpha`.

### EnsureTransformedVertices
`public void EnsureTransformedVertices()`

**Purpose:** Handles logic related to `ensure transformed vertices`.

### ApplyCPUSkinning
`public void ApplyCPUSkinning(Skeleton skeleton)`

**Purpose:** Applies `c p u skinning` to the current object.

### UpdateOverlappedVertexNormals
`public void UpdateOverlappedVertexNormals(Mesh attachedToMesh, MatrixFrame attachFrame, float mergeRadiusSQ = 0.0025f)`

**Purpose:** Updates the state or data of `overlapped vertex normals`.

### ClearAll
`public void ClearAll()`

**Purpose:** Handles logic related to `clear all`.

### SetTangentsOfFaceCorner
`public void SetTangentsOfFaceCorner(int faceCornerIndex, Vec3 tangent, Vec3 binormal)`

**Purpose:** Sets the value or state of `tangents of face corner`.

### SetPositionOfVertex
`public void SetPositionOfVertex(int vertexIndex, Vec3 position)`

**Purpose:** Sets the value or state of `position of vertex`.

### GetPositionOfVertex
`public Vec3 GetPositionOfVertex(int vertexIndex)`

**Purpose:** Gets the current value of `position of vertex`.

### RemoveFace
`public void RemoveFace(int faceIndex)`

**Purpose:** Removes `face` from the current collection or state.

### FinalizeEditing
`public void FinalizeEditing()`

**Purpose:** Handles logic related to `finalize editing`.

## Usage Example

```csharp
ManagedMeshEditOperations.Create(meshToEdit);
```

## See Also

- [Complete Class Catalog](../catalog)