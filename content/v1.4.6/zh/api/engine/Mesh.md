---
title: "Mesh"
description: "Mesh：TaleWorlds.Engine 的 public 类，继承 Resource；公开成员 65 个（方法 57、属性 8、字段 0）。源文件 TaleWorlds.Engine/Mesh.cs。"
---
# Mesh

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Mesh : Resource`
**File:** `TaleWorlds.Engine/Mesh.cs`

## 概述

Mesh 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Mesh.cs。它是一个 public 类（sealed），实现/继承 Resource，继承链为 Mesh → Resource → NativeObject。public/protected 成员共 65 个：57 方法、8 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Mesh 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 Mesh → Resource → NativeObject。成员构成以方法为主（方法 57/65，属性 8/65），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Mesh.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateMeshWithMaterial` | `public static Mesh CreateMeshWithMaterial(Material material)` | 方法 |
| `CreateMesh` | `public static Mesh CreateMesh(bool editable = true)` | 方法 |
| `GetBaseMesh` | `public Mesh GetBaseMesh()` | 方法 |
| `GetFromResource` | `public static Mesh GetFromResource(string meshName)` | 方法 |
| `GetRandomMeshWithVdecl` | `public static Mesh GetRandomMeshWithVdecl(int inputLayout)` | 方法 |
| `SetColorAndStroke` | `public void SetColorAndStroke(uint color, uint strokeColor, bool drawStroke)` | 方法 |
| `SetMeshRenderOrder` | `public void SetMeshRenderOrder(int renderOrder)` | 方法 |
| `HasTag` | `public bool HasTag(string str)` | 方法 |
| `CreateCopy` | `public Mesh CreateCopy()` | 方法 |
| `SetMaterial` | `public void SetMaterial(string newMaterialName)` | 方法 |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | 方法 |
| `SetVectorArgument2` | `public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | 方法 |
| `GetVectorArgument` | `public Vec3 GetVectorArgument()` | 方法 |
| `GetVectorArgument2` | `public Vec3 GetVectorArgument2()` | 方法 |
| `SetupAdditionalBoneBuffer` | `public void SetupAdditionalBoneBuffer(int numBones)` | 方法 |
| `SetAdditionalBoneFrame` | `public void SetAdditionalBoneFrame(int boneIndex, in MatrixFrame frame)` | 方法 |
| `SetMaterial` | `public void SetMaterial(Material material)` | 方法 |
| `GetMaterial` | `public Material GetMaterial()` | 方法 |
| `GetSecondMaterial` | `public Material GetSecondMaterial()` | 方法 |
| `AddFaceCorner` | `public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color, UIntPtr lockHandle)` | 方法 |
| `AddFace` | `public int AddFace(int patchNode0, int patchNode1, int patchNode2, UIntPtr lockHandle)` | 方法 |
| `ClearMesh` | `public void ClearMesh()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `CullingMode` | `public MBMeshCullingMode CullingMode` | 属性 |
| `MorphTime` | `public float MorphTime` | 属性 |
| `Color` | `public uint Color` | 属性 |
| `Color2` | `public uint Color2` | 属性 |
| `SetColorAlpha` | `public void SetColorAlpha(uint newAlpha)` | 方法 |
| `GetFaceCount` | `public uint GetFaceCount()` | 方法 |
| `GetFaceCornerCount` | `public uint GetFaceCornerCount()` | 方法 |
| `ComputeNormals` | `public void ComputeNormals()` | 方法 |
| `ComputeTangents` | `public void ComputeTangents()` | 方法 |
| `AddMesh` | `public void AddMesh(string meshResourceName, MatrixFrame meshFrame)` | 方法 |
| `AddMesh` | `public void AddMesh(Mesh mesh, MatrixFrame meshFrame)` | 方法 |
| `GetLocalFrame` | `public MatrixFrame GetLocalFrame()` | 方法 |
| `SetLocalFrame` | `public void SetLocalFrame(MatrixFrame meshFrame)` | 方法 |
| `SetVisibilityMask` | `public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)` | 方法 |
| `UpdateBoundingBox` | `public void UpdateBoundingBox()` | 方法 |
| `SetAsNotEffectedBySeason` | `public void SetAsNotEffectedBySeason()` | 方法 |
| `GetBoundingBoxWidth` | `public float GetBoundingBoxWidth()` | 方法 |
| `GetBoundingBoxHeight` | `public float GetBoundingBoxHeight()` | 方法 |
| `GetBoundingBoxMin` | `public Vec3 GetBoundingBoxMin()` | 方法 |
| `GetBoundingBoxMax` | `public Vec3 GetBoundingBoxMax()` | 方法 |
| `AddTriangle` | `public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint color, UIntPtr lockHandle)` | 方法 |
| `AddTriangleWithVertexColors` | `public void AddTriangleWithVertexColors(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint c1, uint c2, uint c3, UIntPtr lockHandle)` | 方法 |
| `HintIndicesDynamic` | `public void HintIndicesDynamic()` | 方法 |
| `HintVerticesDynamic` | `public void HintVerticesDynamic()` | 方法 |
| `RecomputeBoundingBox` | `public void RecomputeBoundingBox()` | 方法 |
| `Billboard` | `public BillboardType Billboard` | 属性 |
| `VisibilityMask` | `public VisibilityMaskFlags VisibilityMask` | 属性 |
| `EditDataFaceCornerCount` | `public int EditDataFaceCornerCount` | 属性 |
| `SetEditDataFaceCornerVertexColor` | `public void SetEditDataFaceCornerVertexColor(int index, uint color)` | 方法 |
| `GetEditDataFaceCornerVertexColor` | `public uint GetEditDataFaceCornerVertexColor(int index)` | 方法 |
| `PreloadForRendering` | `public void PreloadForRendering()` | 方法 |
| `SetContourColor` | `public void SetContourColor(Vec3 color, bool alwaysVisible, bool maskMesh)` | 方法 |
| `DisableContour` | `public void DisableContour()` | 方法 |
| `SetExternalBoundingBox` | `public void SetExternalBoundingBox(BoundingBox bbox)` | 方法 |
| `AddEditDataUser` | `public void AddEditDataUser()` | 方法 |
| `ReleaseEditDataUser` | `public void ReleaseEditDataUser()` | 方法 |
| `SetEditDataPolicy` | `public void SetEditDataPolicy(EditDataPolicy policy)` | 方法 |
| `LockEditDataWrite` | `public UIntPtr LockEditDataWrite()` | 方法 |
| `UnlockEditDataWrite` | `public void UnlockEditDataWrite(UIntPtr handle)` | 方法 |
| `SetCustomClipPlane` | `public void SetCustomClipPlane(Vec3 clipPlanePosition, Vec3 clipPlaneNormal, int planeIndex)` | 方法 |
| `GetClothLinearVelocityMultiplier` | `public float GetClothLinearVelocityMultiplier()` | 方法 |
| `HasCloth` | `public bool HasCloth()` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 Resource](../Resource)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
