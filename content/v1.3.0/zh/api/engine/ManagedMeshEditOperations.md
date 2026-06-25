---
title: "ManagedMeshEditOperations"
description: "ManagedMeshEditOperations 的自动生成类参考。"
---
# ManagedMeshEditOperations

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedMeshEditOperations : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/ManagedMeshEditOperations.cs`

## 概述

`ManagedMeshEditOperations` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static ManagedMeshEditOperations Create(Mesh meshToEdit)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
ManagedMeshEditOperations.Create(meshToEdit);
```

### Weld
`public void Weld()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.Weld();
```

### AddVertex
`public int AddVertex(Vec3 vertexPos)`

**用途 / Purpose:** 将 「vertex」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.AddVertex(vertexPos);
```

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec3 color, Vec3 normal)`

**用途 / Purpose:** 将 「face corner」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.AddFaceCorner(0, uv0, color, normal);
```

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec2 uv1, Vec3 color, Vec3 normal)`

**用途 / Purpose:** 将 「face corner」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.AddFaceCorner(0, uv0, uv1, color, normal);
```

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2)`

**用途 / Purpose:** 将 「face」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.AddFace(0, 0, 0);
```

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 color)`

**用途 / Purpose:** 将 「triangle」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddTriangle(p1, p2, p3, uv1, uv2, uv3, color);
```

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 n1, Vec3 n2, Vec3 n3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 c1, Vec3 c2, Vec3 c3)`

**用途 / Purpose:** 将 「triangle」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddTriangle(p1, p2, p3, n1, n2, n3, uv1, uv2, uv3, c1, c2, c3);
```

### AddRectangle3
`public void AddRectangle3(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)`

**用途 / Purpose:** 将 「rectangle3」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddRectangle3(o, size, uv_origin, uvSize, color);
```

### AddRectangleWithInverseUV
`public void AddRectangleWithInverseUV(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)`

**用途 / Purpose:** 将 「rectangle with inverse u v」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddRectangleWithInverseUV(o, size, uv_origin, uvSize, color);
```

### AddRect
`public void AddRect(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)`

**用途 / Purpose:** 将 「rect」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddRect(originBegin, originEnd, uvBegin, uvEnd, color);
```

### AddRectWithZUp
`public void AddRectWithZUp(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)`

**用途 / Purpose:** 将 「rect with z up」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddRectWithZUp(originBegin, originEnd, uvBegin, uvEnd, color);
```

### InvertFacesWindingOrder
`public void InvertFacesWindingOrder()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.InvertFacesWindingOrder();
```

### ScaleVertices
`public void ScaleVertices(float newScale)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ScaleVertices(0);
```

### MoveVerticesAlongNormal
`public void MoveVerticesAlongNormal(float moveAmount)`

**用途 / Purpose:** 移动「vertices along normal」到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.MoveVerticesAlongNormal(0);
```

### ScaleVertices
`public void ScaleVertices(Vec3 newScale, bool keepUvX = false, float maxUvSize = 1f)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ScaleVertices(newScale, false, 0);
```

### TranslateVertices
`public void TranslateVertices(Vec3 newOrigin)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.TranslateVertices(newOrigin);
```

### AddMeshAux
`public void AddMeshAux(Mesh mesh, MatrixFrame frame, sbyte boneNo, Vec3 color, bool transformNormal, bool heightGradient, bool addSkinData, bool useDoublePrecision = true)`

**用途 / Purpose:** 将 「mesh aux」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshAux(mesh, frame, 0, color, false, false, false, false);
```

### ComputeTangents
`public int ComputeTangents(bool checkFixedNormals)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.ComputeTangents(false);
```

### GenerateGrid
`public void GenerateGrid(Vec2i numEdges, Vec2 edgeScale)`

**用途 / Purpose:** 生成「grid」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.GenerateGrid(numEdges, edgeScale);
```

### RescaleMesh2d
`public void RescaleMesh2d(Vec2 scaleSizeMin, Vec2 scaleSizeMax)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2d(scaleSizeMin, scaleSizeMax);
```

### RescaleMesh2dRepeatX
`public void RescaleMesh2dRepeatX(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dRepeatX(scaleSizeMin, scaleSizeMax, 0, 0);
```

### RescaleMesh2dRepeatY
`public void RescaleMesh2dRepeatY(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dRepeatY(scaleSizeMin, scaleSizeMax, 0, 0);
```

### RescaleMesh2dRepeatXWithTiling
`public void RescaleMesh2dRepeatXWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dRepeatXWithTiling(scaleSizeMin, scaleSizeMax, 0, 0, 0);
```

### RescaleMesh2dRepeatYWithTiling
`public void RescaleMesh2dRepeatYWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dRepeatYWithTiling(scaleSizeMin, scaleSizeMax, 0, 0, 0);
```

### RescaleMesh2dWithoutChangingUV
`public void RescaleMesh2dWithoutChangingUV(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float remaining)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RescaleMesh2dWithoutChangingUV(scaleSizeMin, scaleSizeMax, 0);
```

### AddLine
`public void AddLine(Vec3 start, Vec3 end, Vec3 color, float lineWidth = 0.004f)`

**用途 / Purpose:** 将 「line」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddLine(start, end, color, 0);
```

### ComputeCornerNormals
`public void ComputeCornerNormals(bool checkFixedNormals = false, bool smoothCornerNormals = true)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ComputeCornerNormals(false, false);
```

### ComputeCornerNormalsWithSmoothingData
`public void ComputeCornerNormalsWithSmoothingData()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ComputeCornerNormalsWithSmoothingData();
```

### AddMesh
`public void AddMesh(Mesh mesh, MatrixFrame frame)`

**用途 / Purpose:** 将 「mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMesh(mesh, frame);
```

### AddMeshWithSkinData
`public void AddMeshWithSkinData(Mesh mesh, MatrixFrame frame, sbyte boneIndex)`

**用途 / Purpose:** 将 「mesh with skin data」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshWithSkinData(mesh, frame, 0);
```

### AddMeshWithColor
`public void AddMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)`

**用途 / Purpose:** 将 「mesh with color」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshWithColor(mesh, frame, vertexColor, false);
```

### AddMeshToBone
`public void AddMeshToBone(Mesh mesh, MatrixFrame frame, sbyte boneIndex)`

**用途 / Purpose:** 将 「mesh to bone」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshToBone(mesh, frame, 0);
```

### AddMeshWithFixedNormals
`public void AddMeshWithFixedNormals(Mesh mesh, MatrixFrame frame)`

**用途 / Purpose:** 将 「mesh with fixed normals」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshWithFixedNormals(mesh, frame);
```

### AddMeshWithFixedNormalsWithHeightGradientColor
`public void AddMeshWithFixedNormalsWithHeightGradientColor(Mesh mesh, MatrixFrame frame)`

**用途 / Purpose:** 将 「mesh with fixed normals with height gradient color」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddMeshWithFixedNormalsWithHeightGradientColor(mesh, frame);
```

### AddSkinnedMeshWithColor
`public void AddSkinnedMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)`

**用途 / Purpose:** 将 「skinned mesh with color」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.AddSkinnedMeshWithColor(mesh, frame, vertexColor, false);
```

### SetCornerVertexColor
`public void SetCornerVertexColor(int cornerNo, Vec3 vertexColor)`

**用途 / Purpose:** 为 「corner vertex color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetCornerVertexColor(0, vertexColor);
```

### SetCornerUV
`public void SetCornerUV(int cornerNo, Vec2 newUV, int uvNumber = 0)`

**用途 / Purpose:** 为 「corner u v」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetCornerUV(0, newUV, 0);
```

### ReserveVertices
`public void ReserveVertices(int count)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ReserveVertices(0);
```

### ReserveFaceCorners
`public void ReserveFaceCorners(int count)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ReserveFaceCorners(0);
```

### ReserveFaces
`public void ReserveFaces(int count)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ReserveFaces(0);
```

### RemoveDuplicatedCorners
`public int RemoveDuplicatedCorners()`

**用途 / Purpose:** 从当前容器或状态中移除 「duplicated corners」。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.RemoveDuplicatedCorners();
```

### TransformVerticesToParent
`public void TransformVerticesToParent(MatrixFrame frame)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.TransformVerticesToParent(frame);
```

### TransformVerticesToLocal
`public void TransformVerticesToLocal(MatrixFrame frame)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.TransformVerticesToLocal(frame);
```

### SetVertexColor
`public void SetVertexColor(Vec3 color)`

**用途 / Purpose:** 为 「vertex color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetVertexColor(color);
```

### GetVertexColor
`public Vec3 GetVertexColor(int faceCornerIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「vertex color」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.GetVertexColor(0);
```

### SetVertexColorAlpha
`public void SetVertexColorAlpha(float newAlpha)`

**用途 / Purpose:** 为 「vertex color alpha」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetVertexColorAlpha(0);
```

### GetVertexColorAlpha
`public float GetVertexColorAlpha()`

**用途 / Purpose:** 读取并返回当前对象中 「vertex color alpha」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.GetVertexColorAlpha();
```

### EnsureTransformedVertices
`public void EnsureTransformedVertices()`

**用途 / Purpose:** 确保「transformed vertices」处于预期状态，必要时进行初始化或修正。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.EnsureTransformedVertices();
```

### ApplyCPUSkinning
`public void ApplyCPUSkinning(Skeleton skeleton)`

**用途 / Purpose:** 将 「c p u skinning」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ApplyCPUSkinning(skeleton);
```

### UpdateOverlappedVertexNormals
`public void UpdateOverlappedVertexNormals(Mesh attachedToMesh, MatrixFrame attachFrame, float mergeRadiusSQ = 0.0025f)`

**用途 / Purpose:** 重新计算并更新 「overlapped vertex normals」 的最新表示。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.UpdateOverlappedVertexNormals(attachedToMesh, attachFrame, 0);
```

### ClearAll
`public void ClearAll()`

**用途 / Purpose:** 清空当前对象中的「all」。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.ClearAll();
```

### SetTangentsOfFaceCorner
`public void SetTangentsOfFaceCorner(int faceCornerIndex, Vec3 tangent, Vec3 binormal)`

**用途 / Purpose:** 为 「tangents of face corner」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetTangentsOfFaceCorner(0, tangent, binormal);
```

### SetPositionOfVertex
`public void SetPositionOfVertex(int vertexIndex, Vec3 position)`

**用途 / Purpose:** 为 「position of vertex」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.SetPositionOfVertex(0, position);
```

### GetPositionOfVertex
`public Vec3 GetPositionOfVertex(int vertexIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「position of vertex」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
var result = managedMeshEditOperations.GetPositionOfVertex(0);
```

### RemoveFace
`public void RemoveFace(int faceIndex)`

**用途 / Purpose:** 从当前容器或状态中移除 「face」。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.RemoveFace(0);
```

### FinalizeEditing
`public void FinalizeEditing()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ManagedMeshEditOperations 实例
ManagedMeshEditOperations managedMeshEditOperations = ...;
managedMeshEditOperations.FinalizeEditing();
```

## 使用示例

```csharp
ManagedMeshEditOperations.Create(meshToEdit);
```

## 参见

- [本区域目录](../)