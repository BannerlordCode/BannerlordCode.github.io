---
title: "ManagedMeshEditOperations"
description: "ManagedMeshEditOperations：TaleWorlds.Engine 的 public 类，继承 NativeObject；公开成员 57 个（方法 57、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/ManagedMeshEditOperations.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedMeshEditOperations

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ManagedMeshEditOperations : NativeObject`
**File:** `TaleWorlds.Engine/ManagedMeshEditOperations.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

ManagedMeshEditOperations 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/ManagedMeshEditOperations.cs。它是一个 public 类（sealed），实现/继承 NativeObject，继承链为 ManagedMeshEditOperations → NativeObject。public/protected 成员共 57 个：57 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedMeshEditOperations 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 ManagedMeshEditOperations → NativeObject。成员构成以方法为主（方法 57/57，属性 0/57），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/ManagedMeshEditOperations.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Create` | `public static ManagedMeshEditOperations Create(Mesh meshToEdit)` | 方法 |
| `Weld` | `public void Weld()` | 方法 |
| `AddVertex` | `public int AddVertex(Vec3 vertexPos)` | 方法 |
| `AddFaceCorner` | `public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec3 color, Vec3 normal)` | 方法 |
| `AddFaceCorner` | `public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec2 uv1, Vec3 color, Vec3 normal)` | 方法 |
| `AddFace` | `public int AddFace(int patchNode0, int patchNode1, int patchNode2)` | 方法 |
| `AddTriangle` | `public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 color)` | 方法 |
| `AddTriangle` | `public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 n1, Vec3 n2, Vec3 n3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 c1, Vec3 c2, Vec3 c3)` | 方法 |
| `AddRectangle3` | `public void AddRectangle3(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)` | 方法 |
| `AddRectangleWithInverseUV` | `public void AddRectangleWithInverseUV(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)` | 方法 |
| `AddRect` | `public void AddRect(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)` | 方法 |
| `AddRectWithZUp` | `public void AddRectWithZUp(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)` | 方法 |
| `InvertFacesWindingOrder` | `public void InvertFacesWindingOrder()` | 方法 |
| `ScaleVertices` | `public void ScaleVertices(float newScale)` | 方法 |
| `MoveVerticesAlongNormal` | `public void MoveVerticesAlongNormal(float moveAmount)` | 方法 |
| `ScaleVertices` | `public void ScaleVertices(Vec3 newScale, bool keepUvX = false, float maxUvSize = 1f)` | 方法 |
| `TranslateVertices` | `public void TranslateVertices(Vec3 newOrigin)` | 方法 |
| `AddMeshAux` | `public void AddMeshAux(Mesh mesh, MatrixFrame frame, sbyte boneNo, Vec3 color, bool transformNormal, bool heightGradient, bool addSkinData, bool useDoublePrecision = true)` | 方法 |
| `ComputeTangents` | `public int ComputeTangents(bool checkFixedNormals)` | 方法 |
| `GenerateGrid` | `public void GenerateGrid(Vec2i numEdges, Vec2 edgeScale)` | 方法 |
| `RescaleMesh2d` | `public void RescaleMesh2d(Vec2 scaleSizeMin, Vec2 scaleSizeMax)` | 方法 |
| `RescaleMesh2dRepeatX` | `public void RescaleMesh2dRepeatX(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)` | 方法 |
| `RescaleMesh2dRepeatY` | `public void RescaleMesh2dRepeatY(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)` | 方法 |
| `RescaleMesh2dRepeatXWithTiling` | `public void RescaleMesh2dRepeatXWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)` | 方法 |
| `RescaleMesh2dRepeatYWithTiling` | `public void RescaleMesh2dRepeatYWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)` | 方法 |
| `RescaleMesh2dWithoutChangingUV` | `public void RescaleMesh2dWithoutChangingUV(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float remaining)` | 方法 |
| `AddLine` | `public void AddLine(Vec3 start, Vec3 end, Vec3 color, float lineWidth = 0.004f)` | 方法 |
| `ComputeCornerNormals` | `public void ComputeCornerNormals(bool checkFixedNormals = false, bool smoothCornerNormals = true)` | 方法 |
| `ComputeCornerNormalsWithSmoothingData` | `public void ComputeCornerNormalsWithSmoothingData()` | 方法 |
| `AddMesh` | `public void AddMesh(Mesh mesh, MatrixFrame frame)` | 方法 |
| `AddMeshWithSkinData` | `public void AddMeshWithSkinData(Mesh mesh, MatrixFrame frame, sbyte boneIndex)` | 方法 |
| `AddMeshWithColor` | `public void AddMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)` | 方法 |
| `AddMeshToBone` | `public void AddMeshToBone(Mesh mesh, MatrixFrame frame, sbyte boneIndex)` | 方法 |
| `AddMeshWithFixedNormals` | `public void AddMeshWithFixedNormals(Mesh mesh, MatrixFrame frame)` | 方法 |
| `AddMeshWithFixedNormalsWithHeightGradientColor` | `public void AddMeshWithFixedNormalsWithHeightGradientColor(Mesh mesh, MatrixFrame frame)` | 方法 |
| `AddSkinnedMeshWithColor` | `public void AddSkinnedMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)` | 方法 |
| `SetCornerVertexColor` | `public void SetCornerVertexColor(int cornerNo, Vec3 vertexColor)` | 方法 |
| `SetCornerUV` | `public void SetCornerUV(int cornerNo, Vec2 newUV, int uvNumber = 0)` | 方法 |
| `ReserveVertices` | `public void ReserveVertices(int count)` | 方法 |
| `ReserveFaceCorners` | `public void ReserveFaceCorners(int count)` | 方法 |
| `ReserveFaces` | `public void ReserveFaces(int count)` | 方法 |
| `RemoveDuplicatedCorners` | `public int RemoveDuplicatedCorners()` | 方法 |
| `TransformVerticesToParent` | `public void TransformVerticesToParent(MatrixFrame frame)` | 方法 |
| `TransformVerticesToLocal` | `public void TransformVerticesToLocal(MatrixFrame frame)` | 方法 |
| `SetVertexColor` | `public void SetVertexColor(Vec3 color)` | 方法 |
| `GetVertexColor` | `public Vec3 GetVertexColor(int faceCornerIndex)` | 方法 |
| `SetVertexColorAlpha` | `public void SetVertexColorAlpha(float newAlpha)` | 方法 |
| `GetVertexColorAlpha` | `public float GetVertexColorAlpha()` | 方法 |
| `EnsureTransformedVertices` | `public void EnsureTransformedVertices()` | 方法 |
| `ApplyCPUSkinning` | `public void ApplyCPUSkinning(Skeleton skeleton)` | 方法 |
| `UpdateOverlappedVertexNormals` | `public void UpdateOverlappedVertexNormals(Mesh attachedToMesh, MatrixFrame attachFrame, float mergeRadiusSQ = 0.0025f)` | 方法 |
| `ClearAll` | `public void ClearAll()` | 方法 |
| `SetTangentsOfFaceCorner` | `public void SetTangentsOfFaceCorner(int faceCornerIndex, Vec3 tangent, Vec3 binormal)` | 方法 |
| `SetPositionOfVertex` | `public void SetPositionOfVertex(int vertexIndex, Vec3 position)` | 方法 |
| `GetPositionOfVertex` | `public Vec3 GetPositionOfVertex(int vertexIndex)` | 方法 |
| `RemoveFace` | `public void RemoveFace(int faceIndex)` | 方法 |
| `FinalizeEditing` | `public void FinalizeEditing()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NativeObject](../../core-extra/NativeObject/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
