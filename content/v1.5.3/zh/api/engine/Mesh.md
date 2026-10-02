---
title: "Mesh"
description: "Mesh 的自动生成类参考。"
---
# Mesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Mesh : Resource `
**Base:** Resource
**Source:** TaleWorlds.Engine/Mesh.cs

## 概述

`Mesh` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Mesh.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateMeshWithMaterial
`public static Mesh CreateMeshWithMaterial(Material material) `

### CreateMesh
`public static Mesh CreateMesh(bool editable = true) `

### GetBaseMesh
`public Mesh GetBaseMesh() `

### GetFromResource
`public static Mesh GetFromResource(string meshName) `

### GetRandomMeshWithVdecl
`public static Mesh GetRandomMeshWithVdecl(int inputLayout) `

### SetColorAndStroke
`public void SetColorAndStroke(uint color,uint strokeColor,bool drawStroke) `

### SetMeshRenderOrder
`public void SetMeshRenderOrder(int renderOrder) `

### HasTag
`public bool HasTag(string str) `

### CreateCopy
`public Mesh CreateCopy() `

### SetMaterial
`public void SetMaterial(string newMaterialName) `
`public void SetMaterial(Material material) `

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0,float vectorArgument1,float vectorArgument2,float vectorArgument3) `

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0,float vectorArgument1,float vectorArgument2,float vectorArgument3) `

### GetVectorArgument
`public Vec3 GetVectorArgument() `

### GetVectorArgument2
`public Vec3 GetVectorArgument2() `

### SetupAdditionalBoneBuffer
`public void SetupAdditionalBoneBuffer(int numBones) `

### SetAdditionalBoneFrame
`public void SetAdditionalBoneFrame(int boneIndex,in MatrixFrame frame) `

### GetMaterial
`public Material GetMaterial() `

### GetSecondMaterial
`public Material GetSecondMaterial() `

### AddFaceCorner
`public int AddFaceCorner(Vec3 position,Vec3 normal,Vec2 uvCoord,uint color,UIntPtr lockHandle) `

### AddFace
`public int AddFace(int patchNode0,int patchNode1,int patchNode2,UIntPtr lockHandle) `

### ClearMesh
`public void ClearMesh() `

### SetColorAlpha
`public void SetColorAlpha(uint newAlpha) `

### GetFaceCount
`public uint GetFaceCount() `

### GetFaceCornerCount
`public uint GetFaceCornerCount() `

### ComputeNormals
`public void ComputeNormals() `

### ComputeTangents
`public void ComputeTangents() `

### AddMesh
`public void AddMesh(string meshResourceName,MatrixFrame meshFrame) `
`public void AddMesh(Mesh mesh,MatrixFrame meshFrame) `

### GetLocalFrame
`public MatrixFrame GetLocalFrame() `

### SetLocalFrame
`public void SetLocalFrame(MatrixFrame meshFrame) `

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask) `

### UpdateBoundingBox
`public void UpdateBoundingBox() `

### SetAsNotEffectedBySeason
`public void SetAsNotEffectedBySeason() `

### GetBoundingBoxWidth
`public float GetBoundingBoxWidth() `

### GetBoundingBoxHeight
`public float GetBoundingBoxHeight() `

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin() `

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax() `

### AddTriangle
`public void AddTriangle(Vec3 p1,Vec3 p2,Vec3 p3,Vec2 uv1,Vec2 uv2,Vec2 uv3,uint color,UIntPtr lockHandle) `

### AddTriangleWithVertexColors
`public void AddTriangleWithVertexColors(Vec3 p1,Vec3 p2,Vec3 p3,Vec2 uv1,Vec2 uv2,Vec2 uv3,uint c1,uint c2,uint c3,UIntPtr lockHandle) `

### HintIndicesDynamic
`public void HintIndicesDynamic() `

### HintVerticesDynamic
`public void HintVerticesDynamic() `

### RecomputeBoundingBox
`public void RecomputeBoundingBox() `

### SetEditDataFaceCornerVertexColor
`public void SetEditDataFaceCornerVertexColor(int index,uint color) `

### GetEditDataFaceCornerVertexColor
`public uint GetEditDataFaceCornerVertexColor(int index) `

### PreloadForRendering
`public void PreloadForRendering() `

### SetContourColor
`public void SetContourColor(Vec3 color,bool alwaysVisible,bool maskMesh) `

### DisableContour
`public void DisableContour() `

### SetExternalBoundingBox
`public void SetExternalBoundingBox(BoundingBox bbox) `

### AddEditDataUser
`public void AddEditDataUser() `

### ReleaseEditDataUser
`public void ReleaseEditDataUser() `

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy) `

### LockEditDataWrite
`public UIntPtr LockEditDataWrite() `

### UnlockEditDataWrite
`public void UnlockEditDataWrite(UIntPtr handle) `

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPlanePosition,Vec3 clipPlaneNormal,int planeIndex) `

### GetClothLinearVelocityMultiplier
`public float GetClothLinearVelocityMultiplier() `

### HasCloth
`public bool HasCloth() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
