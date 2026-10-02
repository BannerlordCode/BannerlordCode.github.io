---
title: "ManagedMeshEditOperations"
description: "ManagedMeshEditOperations: a public class in TaleWorlds.Engine, inheriting NativeObject; 57 exposed members (57 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/ManagedMeshEditOperations.cs."
---
# ManagedMeshEditOperations

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ManagedMeshEditOperations : NativeObject`
**File:** `TaleWorlds.Engine/ManagedMeshEditOperations.cs`

## Overview

ManagedMeshEditOperations lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ManagedMeshEditOperations.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is ManagedMeshEditOperations → NativeObject. It exposes 57 public/protected members: 57 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedMeshEditOperations is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain ManagedMeshEditOperations → NativeObject. The surface is method-led (methods 57/57, properties 0/57), so it mostly exposes operations. NativeObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ManagedMeshEditOperations.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Create` | `public static ManagedMeshEditOperations Create(Mesh meshToEdit)` | method |
| `Weld` | `public void Weld()` | method |
| `AddVertex` | `public int AddVertex(Vec3 vertexPos)` | method |
| `AddFaceCorner` | `public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec3 color, Vec3 normal)` | method |
| `AddFaceCorner` | `public int AddFaceCorner(int vertexIndex, Vec2 uv0, Vec2 uv1, Vec3 color, Vec3 normal)` | method |
| `AddFace` | `public int AddFace(int patchNode0, int patchNode1, int patchNode2)` | method |
| `AddTriangle` | `public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 color)` | method |
| `AddTriangle` | `public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec3 n1, Vec3 n2, Vec3 n3, Vec2 uv1, Vec2 uv2, Vec2 uv3, Vec3 c1, Vec3 c2, Vec3 c3)` | method |
| `AddRectangle3` | `public void AddRectangle3(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)` | method |
| `AddRectangleWithInverseUV` | `public void AddRectangleWithInverseUV(Vec3 o, Vec2 size, Vec2 uv_origin, Vec2 uvSize, Vec3 color)` | method |
| `AddRect` | `public void AddRect(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)` | method |
| `AddRectWithZUp` | `public void AddRectWithZUp(Vec3 originBegin, Vec3 originEnd, Vec2 uvBegin, Vec2 uvEnd, Vec3 color)` | method |
| `InvertFacesWindingOrder` | `public void InvertFacesWindingOrder()` | method |
| `ScaleVertices` | `public void ScaleVertices(float newScale)` | method |
| `MoveVerticesAlongNormal` | `public void MoveVerticesAlongNormal(float moveAmount)` | method |
| `ScaleVertices` | `public void ScaleVertices(Vec3 newScale, bool keepUvX = false, float maxUvSize = 1f)` | method |
| `TranslateVertices` | `public void TranslateVertices(Vec3 newOrigin)` | method |
| `AddMeshAux` | `public void AddMeshAux(Mesh mesh, MatrixFrame frame, sbyte boneNo, Vec3 color, bool transformNormal, bool heightGradient, bool addSkinData, bool useDoublePrecision = true)` | method |
| `ComputeTangents` | `public int ComputeTangents(bool checkFixedNormals)` | method |
| `GenerateGrid` | `public void GenerateGrid(Vec2i numEdges, Vec2 edgeScale)` | method |
| `RescaleMesh2d` | `public void RescaleMesh2d(Vec2 scaleSizeMin, Vec2 scaleSizeMax)` | method |
| `RescaleMesh2dRepeatX` | `public void RescaleMesh2dRepeatX(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)` | method |
| `RescaleMesh2dRepeatY` | `public void RescaleMesh2dRepeatY(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0)` | method |
| `RescaleMesh2dRepeatXWithTiling` | `public void RescaleMesh2dRepeatXWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)` | method |
| `RescaleMesh2dRepeatYWithTiling` | `public void RescaleMesh2dRepeatYWithTiling(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float frameThickness = 0f, int frameSide = 0, float xyRatio = 0f)` | method |
| `RescaleMesh2dWithoutChangingUV` | `public void RescaleMesh2dWithoutChangingUV(Vec2 scaleSizeMin, Vec2 scaleSizeMax, float remaining)` | method |
| `AddLine` | `public void AddLine(Vec3 start, Vec3 end, Vec3 color, float lineWidth = 0.004f)` | method |
| `ComputeCornerNormals` | `public void ComputeCornerNormals(bool checkFixedNormals = false, bool smoothCornerNormals = true)` | method |
| `ComputeCornerNormalsWithSmoothingData` | `public void ComputeCornerNormalsWithSmoothingData()` | method |
| `AddMesh` | `public void AddMesh(Mesh mesh, MatrixFrame frame)` | method |
| `AddMeshWithSkinData` | `public void AddMeshWithSkinData(Mesh mesh, MatrixFrame frame, sbyte boneIndex)` | method |
| `AddMeshWithColor` | `public void AddMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)` | method |
| `AddMeshToBone` | `public void AddMeshToBone(Mesh mesh, MatrixFrame frame, sbyte boneIndex)` | method |
| `AddMeshWithFixedNormals` | `public void AddMeshWithFixedNormals(Mesh mesh, MatrixFrame frame)` | method |
| `AddMeshWithFixedNormalsWithHeightGradientColor` | `public void AddMeshWithFixedNormalsWithHeightGradientColor(Mesh mesh, MatrixFrame frame)` | method |
| `AddSkinnedMeshWithColor` | `public void AddSkinnedMeshWithColor(Mesh mesh, MatrixFrame frame, Vec3 vertexColor, bool useDoublePrecision = true)` | method |
| `SetCornerVertexColor` | `public void SetCornerVertexColor(int cornerNo, Vec3 vertexColor)` | method |
| `SetCornerUV` | `public void SetCornerUV(int cornerNo, Vec2 newUV, int uvNumber = 0)` | method |
| `ReserveVertices` | `public void ReserveVertices(int count)` | method |
| `ReserveFaceCorners` | `public void ReserveFaceCorners(int count)` | method |
| `ReserveFaces` | `public void ReserveFaces(int count)` | method |
| `RemoveDuplicatedCorners` | `public int RemoveDuplicatedCorners()` | method |
| `TransformVerticesToParent` | `public void TransformVerticesToParent(MatrixFrame frame)` | method |
| `TransformVerticesToLocal` | `public void TransformVerticesToLocal(MatrixFrame frame)` | method |
| `SetVertexColor` | `public void SetVertexColor(Vec3 color)` | method |
| `GetVertexColor` | `public Vec3 GetVertexColor(int faceCornerIndex)` | method |
| `SetVertexColorAlpha` | `public void SetVertexColorAlpha(float newAlpha)` | method |
| `GetVertexColorAlpha` | `public float GetVertexColorAlpha()` | method |
| `EnsureTransformedVertices` | `public void EnsureTransformedVertices()` | method |
| `ApplyCPUSkinning` | `public void ApplyCPUSkinning(Skeleton skeleton)` | method |
| `UpdateOverlappedVertexNormals` | `public void UpdateOverlappedVertexNormals(Mesh attachedToMesh, MatrixFrame attachFrame, float mergeRadiusSQ = 0.0025f)` | method |
| `ClearAll` | `public void ClearAll()` | method |
| `SetTangentsOfFaceCorner` | `public void SetTangentsOfFaceCorner(int faceCornerIndex, Vec3 tangent, Vec3 binormal)` | method |
| `SetPositionOfVertex` | `public void SetPositionOfVertex(int vertexIndex, Vec3 position)` | method |
| `GetPositionOfVertex` | `public Vec3 GetPositionOfVertex(int vertexIndex)` | method |
| `RemoveFace` | `public void RemoveFace(int faceIndex)` | method |
| `FinalizeEditing` | `public void FinalizeEditing()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
