---
title: "Mesh"
description: "Auto-generated class reference for Mesh."
---
# Mesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Mesh : Resource `
**Base:** Resource
**Source:** TaleWorlds.Engine/Mesh.cs

## Overview

Auto-generated stub for `Mesh`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateMeshWithMaterial
`public static Mesh CreateMeshWithMaterial(Material material)`

### CreateMesh
`public static Mesh CreateMesh(bool editable = true)`

### GetBaseMesh
`public Mesh GetBaseMesh()`

### GetFromResource
`public static Mesh GetFromResource(string meshName)`

### GetRandomMeshWithVdecl
`public static Mesh GetRandomMeshWithVdecl(int inputLayout)`

### SetColorAndStroke
`public void SetColorAndStroke(uint color,uint strokeColor,bool drawStroke)`

### SetMeshRenderOrder
`public void SetMeshRenderOrder(int renderOrder)`

### HasTag
`public bool HasTag(string str)`

### CreateCopy
`public Mesh CreateCopy()`

### SetMaterial
`public void SetMaterial(string newMaterialName)`

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0,float vectorArgument1,float vectorArgument2,float vectorArgument3)`

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0,float vectorArgument1,float vectorArgument2,float vectorArgument3)`

### GetVectorArgument
`public Vec3 GetVectorArgument()`

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

### SetupAdditionalBoneBuffer
`public void SetupAdditionalBoneBuffer(int numBones)`

### SetAdditionalBoneFrame
`public void SetAdditionalBoneFrame(int boneIndex,in MatrixFrame frame)`

### GetMaterial
`public Material GetMaterial()`

### GetSecondMaterial
`public Material GetSecondMaterial()`

### AddFaceCorner
`public int AddFaceCorner(Vec3 position,Vec3 normal,Vec2 uvCoord,uint color,UIntPtr lockHandle)`

### AddFace
`public int AddFace(int patchNode0,int patchNode1,int patchNode2,UIntPtr lockHandle)`

### ClearMesh
`public void ClearMesh()`

### SetColorAlpha
`public void SetColorAlpha(uint newAlpha)`

### GetFaceCount
`public uint GetFaceCount()`

### GetFaceCornerCount
`public uint GetFaceCornerCount()`

### ComputeNormals
`public void ComputeNormals()`

### ComputeTangents
`public void ComputeTangents()`

### AddMesh
`public void AddMesh(string meshResourceName,MatrixFrame meshFrame)`

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

### SetLocalFrame
`public void SetLocalFrame(MatrixFrame meshFrame)`

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

### UpdateBoundingBox
`public void UpdateBoundingBox()`

### SetAsNotEffectedBySeason
`public void SetAsNotEffectedBySeason()`

### GetBoundingBoxWidth
`public float GetBoundingBoxWidth()`

### GetBoundingBoxHeight
`public float GetBoundingBoxHeight()`

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

### AddTriangle
`public void AddTriangle(Vec3 p1,Vec3 p2,Vec3 p3,Vec2 uv1,Vec2 uv2,Vec2 uv3,uint color,UIntPtr lockHandle)`

### AddTriangleWithVertexColors
`public void AddTriangleWithVertexColors(Vec3 p1,Vec3 p2,Vec3 p3,Vec2 uv1,Vec2 uv2,Vec2 uv3,uint c1,uint c2,uint c3,UIntPtr lockHandle)`

### HintIndicesDynamic
`public void HintIndicesDynamic()`

### HintVerticesDynamic
`public void HintVerticesDynamic()`

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

### SetEditDataFaceCornerVertexColor
`public void SetEditDataFaceCornerVertexColor(int index,uint color)`

### GetEditDataFaceCornerVertexColor
`public uint GetEditDataFaceCornerVertexColor(int index)`

### PreloadForRendering
`public void PreloadForRendering()`

### SetContourColor
`public void SetContourColor(Vec3 color,bool alwaysVisible,bool maskMesh)`

### DisableContour
`public void DisableContour()`

### SetExternalBoundingBox
`public void SetExternalBoundingBox(BoundingBox bbox)`

### AddEditDataUser
`public void AddEditDataUser()`

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

### LockEditDataWrite
`public UIntPtr LockEditDataWrite()`

### UnlockEditDataWrite
`public void UnlockEditDataWrite(UIntPtr handle)`

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPlanePosition,Vec3 clipPlaneNormal,int planeIndex)`

### GetClothLinearVelocityMultiplier
`public float GetClothLinearVelocityMultiplier()`

### HasCloth
`public bool HasCloth()`

## See Also

- [Section index](../)
