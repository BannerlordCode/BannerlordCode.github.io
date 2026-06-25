---
title: "ManagedMeshEditOperations"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedMeshEditOperations`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedMeshEditOperations

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedMeshEditOperations : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedMeshEditOperations.cs`

## 概述

`ManagedMeshEditOperations` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static ManagedMeshEditOperations Create(Mesh meshToEdit)`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### Weld
`public void Weld()`

**用途 / Purpose:** 处理 `weld` 相关逻辑。

### AddVertex
`public int AddVertex(Vec3 vertexPos)`

**用途 / Purpose:** 向当前集合/状态中添加 `vertex`。

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec3 color, Vec3 normal)`

**用途 / Purpose:** 向当前集合/状态中添加 `face corner`。

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec2 uv1, Vec3 color, Vec3 normal)`

**用途 / Purpose:** 向当前集合/状态中添加 `face corner`。

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2)`

**用途 / Purpose:** 向当前集合/状态中添加 `face`。

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 color)`

**用途 / Purpose:** 向当前集合/状态中添加 `triangle`。

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 n1, Vec3 n2, Vec3 n3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 c1, Vec3 c2, Vec3 c3)`

**用途 / Purpose:** 向当前集合/状态中添加 `triangle`。

### AddRectangle3
`public void AddRectangle3(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)`

**用途 / Purpose:** 向当前集合/状态中添加 `rectangle3`。

### AddRectangleWithInverseUV
`public void AddRectangleWithInverseUV(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)`

**用途 / Purpose:** 向当前集合/状态中添加 `rectangle with inverse u v`。

### AddRect
`public void AddRect(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)`

**用途 / Purpose:** 向当前集合/状态中添加 `rect`。

### AddRectWithZUp
`public void AddRectWithZUp(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)`

**用途 / Purpose:** 向当前集合/状态中添加 `rect with z up`。

### InvertFacesWindingOrder
`public void InvertFacesWindingOrder()`

**用途 / Purpose:** 处理 `invert faces winding order` 相关逻辑。

### ScaleVertices
`public void ScaleVertices(float newScale)`

**用途 / Purpose:** 处理 `scale vertices` 相关逻辑。

### MoveVerticesAlongNormal
`public void MoveVerticesAlongNormal(float moveAmount)`

**用途 / Purpose:** 处理 `move vertices along normal` 相关逻辑。

### ScaleVertices
`public void ScaleVertices(Vec3 newScale, bool keepUvX = false, float maxUvSize = 1f)`

**用途 / Purpose:** 处理 `scale vertices` 相关逻辑。

### TranslateVertices
`public void TranslateVertices(Vec3 newOrigin)`

**用途 / Purpose:** 处理 `translate vertices` 相关逻辑。

### AddMeshAux
`public void AddMeshAux(Mesh mesh, MatrixFrame frame, sbyte boneNo, Vec3 color, bool transformNormal, bool heightGradient, bool addSkinData, bool useDoublePrecision = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh aux`。

### ComputeTangents
`public int ComputeTangents(bool checkFixedNormals)`

**用途 / Purpose:** 处理 `compute tangents` 相关逻辑。

### GenerateGrid
`public void GenerateGrid(Vec2i numEdges, Vec2 edgeScale)`

**用途 / Purpose:** 处理 `generate grid` 相关逻辑。

### RescaleMesh2d
`public void RescaleMesh2d(Vec2 scaleSizeMin, Vec2 scaleSizeMax)`

**用途 / Purpose:** 处理 `rescale mesh2d` 相关逻辑。

### RescaleMesh2dRepeatX
`public void RescaleMesh2dRepeatX(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)`

**用途 / Purpose:** 处理 `rescale mesh2d repeat x` 相关逻辑。

### RescaleMesh2dRepeatY
`public void RescaleMesh2dRepeatY(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)`

**用途 / Purpose:** 处理 `rescale mesh2d repeat y` 相关逻辑。

### RescaleMesh2dRepeatXWithTiling
`public void RescaleMesh2dRepeatXWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)`

**用途 / Purpose:** 处理 `rescale mesh2d repeat x with tiling` 相关逻辑。

### RescaleMesh2dRepeatYWithTiling
`public void RescaleMesh2dRepeatYWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)`

**用途 / Purpose:** 处理 `rescale mesh2d repeat y with tiling` 相关逻辑。

### RescaleMesh2dWithoutChangingUV
`public void RescaleMesh2dWithoutChangingUV(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float remaining)`

**用途 / Purpose:** 处理 `rescale mesh2d without changing u v` 相关逻辑。

### AddLine
`public void AddLine(Vec3 start, Vec3 end, Vec3 color, float lineWidth = 0.004f)`

**用途 / Purpose:** 向当前集合/状态中添加 `line`。

### ComputeCornerNormals
`public void ComputeCornerNormals(bool checkFixedNormals = false, bool smoothCornerNormals = true)`

**用途 / Purpose:** 处理 `compute corner normals` 相关逻辑。

### ComputeCornerNormalsWithSmoothingData
`public void ComputeCornerNormalsWithSmoothingData()`

**用途 / Purpose:** 处理 `compute corner normals with smoothing data` 相关逻辑。

### AddMesh
`public void AddMesh(Mesh mesh, MatrixFrame frame)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh`。

### AddMeshWithSkinData
`public void AddMeshWithSkinData(Mesh mesh, MatrixFrame frame, sbyte boneIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh with skin data`。

### AddMeshWithColor
`public void AddMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh with color`。

### AddMeshToBone
`public void AddMeshToBone(Mesh mesh, MatrixFrame frame, sbyte boneIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh to bone`。

### AddMeshWithFixedNormals
`public void AddMeshWithFixedNormals(Mesh mesh, MatrixFrame frame)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh with fixed normals`。

### AddMeshWithFixedNormalsWithHeightGradientColor
`public void AddMeshWithFixedNormalsWithHeightGradientColor(Mesh mesh, MatrixFrame frame)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh with fixed normals with height gradient color`。

### AddSkinnedMeshWithColor
`public void AddSkinnedMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `skinned mesh with color`。

### SetCornerVertexColor
`public void SetCornerVertexColor(int cornerNo, Vec3 vertexColor)`

**用途 / Purpose:** 设置 `corner vertex color` 的值或状态。

### SetCornerUV
`public void SetCornerUV(int cornerNo, Vec2 newUV, int uvNumber = 0)`

**用途 / Purpose:** 设置 `corner u v` 的值或状态。

### ReserveVertices
`public void ReserveVertices(int count)`

**用途 / Purpose:** 处理 `reserve vertices` 相关逻辑。

### ReserveFaceCorners
`public void ReserveFaceCorners(int count)`

**用途 / Purpose:** 处理 `reserve face corners` 相关逻辑。

### ReserveFaces
`public void ReserveFaces(int count)`

**用途 / Purpose:** 处理 `reserve faces` 相关逻辑。

### RemoveDuplicatedCorners
`public int RemoveDuplicatedCorners()`

**用途 / Purpose:** 从当前集合/状态中移除 `duplicated corners`。

### TransformVerticesToParent
`public void TransformVerticesToParent(MatrixFrame frame)`

**用途 / Purpose:** 处理 `transform vertices to parent` 相关逻辑。

### TransformVerticesToLocal
`public void TransformVerticesToLocal(MatrixFrame frame)`

**用途 / Purpose:** 处理 `transform vertices to local` 相关逻辑。

### SetVertexColor
`public void SetVertexColor(Vec3 color)`

**用途 / Purpose:** 设置 `vertex color` 的值或状态。

### GetVertexColor
`public Vec3 GetVertexColor(int faceCornerIndex)`

**用途 / Purpose:** 获取 `vertex color` 的当前值。

### SetVertexColorAlpha
`public void SetVertexColorAlpha(float newAlpha)`

**用途 / Purpose:** 设置 `vertex color alpha` 的值或状态。

### GetVertexColorAlpha
`public float GetVertexColorAlpha()`

**用途 / Purpose:** 获取 `vertex color alpha` 的当前值。

### EnsureTransformedVertices
`public void EnsureTransformedVertices()`

**用途 / Purpose:** 处理 `ensure transformed vertices` 相关逻辑。

### ApplyCPUSkinning
`public void ApplyCPUSkinning(Skeleton skeleton)`

**用途 / Purpose:** 将 `c p u skinning` 应用到当前对象。

### UpdateOverlappedVertexNormals
`public void UpdateOverlappedVertexNormals(Mesh attachedToMesh, MatrixFrame attachFrame, float mergeRadiusSQ = 0.0025f)`

**用途 / Purpose:** 更新 `overlapped vertex normals` 的状态或数据。

### ClearAll
`public void ClearAll()`

**用途 / Purpose:** 处理 `clear all` 相关逻辑。

### SetTangentsOfFaceCorner
`public void SetTangentsOfFaceCorner(int faceCornerIndex, Vec3 tangent, Vec3 binormal)`

**用途 / Purpose:** 设置 `tangents of face corner` 的值或状态。

### SetPositionOfVertex
`public void SetPositionOfVertex(int vertexIndex, Vec3 position)`

**用途 / Purpose:** 设置 `position of vertex` 的值或状态。

### GetPositionOfVertex
`public Vec3 GetPositionOfVertex(int vertexIndex)`

**用途 / Purpose:** 获取 `position of vertex` 的当前值。

### RemoveFace
`public void RemoveFace(int faceIndex)`

**用途 / Purpose:** 从当前集合/状态中移除 `face`。

### FinalizeEditing
`public void FinalizeEditing()`

**用途 / Purpose:** 处理 `finalize editing` 相关逻辑。

## 使用示例

```csharp
ManagedMeshEditOperations.Create(meshToEdit);
```

## 参见

- [完整类目录](../catalog)