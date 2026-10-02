---
title: "ManagedMeshEditOperations"
description: "Auto-generated class reference for ManagedMeshEditOperations."
---
# ManagedMeshEditOperations

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedMeshEditOperations : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/ManagedMeshEditOperations.cs

## Overview

Auto-generated stub for `ManagedMeshEditOperations`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Create
`public static ManagedMeshEditOperations Create(Mesh meshToEdit)`

### Weld
`public void Weld()`

### AddVertex
`public int AddVertex(Vec3 vertexPos)`

### AddFaceCorner
`public int AddFaceCorner(int vertexIndex,Vec2 uv0,Vec3 color,Vec3 normal)`

### AddFace
`public int AddFace(int patchNode0,int patchNode1,int patchNode2)`

### AddTriangle
`public void AddTriangle(Vec3 p1,Vec3 p2,Vec3 p3,Vec2 uv1,Vec2 uv2,Vec2 uv3,Vec3 color)`

### AddRectangle3
`public void AddRectangle3(Vec3 o,Vec2 size,Vec2 uv_origin,Vec2 uvSize,Vec3 color)`

### AddRectangleWithInverseUV
`public void AddRectangleWithInverseUV(Vec3 o,Vec2 size,Vec2 uv_origin,Vec2 uvSize,Vec3 color)`

### AddRect
`public void AddRect(Vec3 originBegin,Vec3 originEnd,Vec2 uvBegin,Vec2 uvEnd,Vec3 color)`

### AddRectWithZUp
`public void AddRectWithZUp(Vec3 originBegin,Vec3 originEnd,Vec2 uvBegin,Vec2 uvEnd,Vec3 color)`

### InvertFacesWindingOrder
`public void InvertFacesWindingOrder()`

### ScaleVertices
`public void ScaleVertices(float newScale)`

### MoveVerticesAlongNormal
`public void MoveVerticesAlongNormal(float moveAmount)`

### TranslateVertices
`public void TranslateVertices(Vec3 newOrigin)`

### AddMeshAux
`public void AddMeshAux(Mesh mesh,MatrixFrame frame,sbyte boneNo,Vec3 color,bool transformNormal,bool heightGradient,bool addSkinData,bool useDoublePrecision = true)`

### ComputeTangents
`public int ComputeTangents(bool checkFixedNormals)`

### GenerateGrid
`public void GenerateGrid(Vec2i numEdges,Vec2 edgeScale)`

### RescaleMesh2d
`public void RescaleMesh2d(Vec2 scaleSizeMin,Vec2 scaleSizeMax)`

### RescaleMesh2dRepeatX
`public void RescaleMesh2dRepeatX(Vec2 scaleSizeMin,Vec2 scaleSizeMax,float frameThickness = 0f,int frameSide = 0)`

### RescaleMesh2dRepeatY
`public void RescaleMesh2dRepeatY(Vec2 scaleSizeMin,Vec2 scaleSizeMax,float frameThickness = 0f,int frameSide = 0)`

### RescaleMesh2dRepeatXWithTiling
`public void RescaleMesh2dRepeatXWithTiling(Vec2 scaleSizeMin,Vec2 scaleSizeMax,float frameThickness = 0f,int frameSide = 0,float xyRatio = 0f)`

### RescaleMesh2dRepeatYWithTiling
`public void RescaleMesh2dRepeatYWithTiling(Vec2 scaleSizeMin,Vec2 scaleSizeMax,float frameThickness = 0f,int frameSide = 0,float xyRatio = 0f)`

### RescaleMesh2dWithoutChangingUV
`public void RescaleMesh2dWithoutChangingUV(Vec2 scaleSizeMin,Vec2 scaleSizeMax,float remaining)`

### AddLine
`public void AddLine(Vec3 start,Vec3 end,Vec3 color,float lineWidth = 0.004f)`

### ComputeCornerNormals
`public void ComputeCornerNormals(bool checkFixedNormals = false,bool smoothCornerNormals = true)`

### ComputeCornerNormalsWithSmoothingData
`public void ComputeCornerNormalsWithSmoothingData()`

### AddMesh
`public void AddMesh(Mesh mesh,MatrixFrame frame)`

### AddMeshWithSkinData
`public void AddMeshWithSkinData(Mesh mesh,MatrixFrame frame,sbyte boneIndex)`

### AddMeshWithColor
`public void AddMeshWithColor(Mesh mesh,MatrixFrame frame,Vec3 vertexColor,bool useDoublePrecision = true)`

### AddMeshToBone
`public void AddMeshToBone(Mesh mesh,MatrixFrame frame,sbyte boneIndex)`

### AddMeshWithFixedNormals
`public void AddMeshWithFixedNormals(Mesh mesh,MatrixFrame frame)`

### AddMeshWithFixedNormalsWithHeightGradientColor
`public void AddMeshWithFixedNormalsWithHeightGradientColor(Mesh mesh,MatrixFrame frame)`

### AddSkinnedMeshWithColor
`public void AddSkinnedMeshWithColor(Mesh mesh,MatrixFrame frame,Vec3 vertexColor,bool useDoublePrecision = true)`

### SetCornerVertexColor
`public void SetCornerVertexColor(int cornerNo,Vec3 vertexColor)`

### SetCornerUV
`public void SetCornerUV(int cornerNo,Vec2 newUV,int uvNumber = 0)`

### ReserveVertices
`public void ReserveVertices(int count)`

### ReserveFaceCorners
`public void ReserveFaceCorners(int count)`

### ReserveFaces
`public void ReserveFaces(int count)`

### RemoveDuplicatedCorners
`public int RemoveDuplicatedCorners()`

### TransformVerticesToParent
`public void TransformVerticesToParent(MatrixFrame frame)`

### TransformVerticesToLocal
`public void TransformVerticesToLocal(MatrixFrame frame)`

### SetVertexColor
`public void SetVertexColor(Vec3 color)`

### GetVertexColor
`public Vec3 GetVertexColor(int faceCornerIndex)`

### SetVertexColorAlpha
`public void SetVertexColorAlpha(float newAlpha)`

### GetVertexColorAlpha
`public float GetVertexColorAlpha()`

### EnsureTransformedVertices
`public void EnsureTransformedVertices()`

### ApplyCPUSkinning
`public void ApplyCPUSkinning(Skeleton skeleton)`

### UpdateOverlappedVertexNormals
`public void UpdateOverlappedVertexNormals(Mesh attachedToMesh,MatrixFrame attachFrame,float mergeRadiusSQ = 0.0025f)`

### ClearAll
`public void ClearAll()`

### SetTangentsOfFaceCorner
`public void SetTangentsOfFaceCorner(int faceCornerIndex,Vec3 tangent,Vec3 binormal)`

### SetPositionOfVertex
`public void SetPositionOfVertex(int vertexIndex,Vec3 position)`

### GetPositionOfVertex
`public Vec3 GetPositionOfVertex(int vertexIndex)`

### RemoveFace
`public void RemoveFace(int faceIndex)`

### FinalizeEditing
`public void FinalizeEditing()`

## See Also

- [Section index](../)
