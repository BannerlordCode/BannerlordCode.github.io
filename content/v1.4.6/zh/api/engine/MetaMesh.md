---
title: "MetaMesh"
description: "MetaMesh：TaleWorlds.Engine 的 public 类，继承 GameEntityComponent；公开成员 70 个（方法 66、属性 4、字段 0）。源文件 TaleWorlds.Engine/MetaMesh.cs。"
---
# MetaMesh

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class MetaMesh : GameEntityComponent`
**File:** `TaleWorlds.Engine/MetaMesh.cs`

## 概述

MetaMesh 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/MetaMesh.cs。它是一个 public 类（sealed），实现/继承 GameEntityComponent，继承链为 MetaMesh → GameEntityComponent → NativeObject。public/protected 成员共 70 个：66 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MetaMesh 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录一致，继承链 MetaMesh → GameEntityComponent → NativeObject。成员构成以方法为主（方法 66/70，属性 4/70），对外主要以操作入口暴露。继承链上的 NativeObject 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/MetaMesh.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateMetaMesh` | `public static MetaMesh CreateMetaMesh(string name = null)` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `GetLodMaskForMeshAtIndex` | `public int GetLodMaskForMeshAtIndex(int index)` | 方法 |
| `GetTotalGpuSize` | `public int GetTotalGpuSize()` | 方法 |
| `RemoveMeshesWithTag` | `public int RemoveMeshesWithTag(string tag)` | 方法 |
| `RemoveMeshesWithoutTag` | `public int RemoveMeshesWithoutTag(string tag)` | 方法 |
| `GetMeshCountWithTag` | `public int GetMeshCountWithTag(string tag)` | 方法 |
| `HasVertexBufferOrEditDataOrPackageItem` | `public bool HasVertexBufferOrEditDataOrPackageItem()` | 方法 |
| `HasAnyGeneratedLods` | `public bool HasAnyGeneratedLods()` | 方法 |
| `HasAnyLods` | `public bool HasAnyLods()` | 方法 |
| `GetCopy` | `public static MetaMesh GetCopy(string metaMeshName, bool showErrors = true, bool mayReturnNull = false)` | 方法 |
| `CopyTo` | `public void CopyTo(MetaMesh res, bool copyMeshes = true)` | 方法 |
| `ClearMeshesForOtherLods` | `public void ClearMeshesForOtherLods(int lodToKeep)` | 方法 |
| `ClearMeshesForLod` | `public void ClearMeshesForLod(int lodToClear)` | 方法 |
| `ClearMeshesForLowerLods` | `public void ClearMeshesForLowerLods(int lodToClear)` | 方法 |
| `ClearMeshes` | `public void ClearMeshes()` | 方法 |
| `SetNumLods` | `public void SetNumLods(int lodToClear)` | 方法 |
| `CheckMetaMeshExistence` | `public static void CheckMetaMeshExistence(string metaMeshName, int lod_count_check)` | 方法 |
| `GetMorphedCopy` | `public static MetaMesh GetMorphedCopy(string metaMeshName, float morphTarget, bool showErrors)` | 方法 |
| `CreateCopy` | `public MetaMesh CreateCopy()` | 方法 |
| `AddMesh` | `public void AddMesh(Mesh mesh)` | 方法 |
| `AddMesh` | `public void AddMesh(Mesh mesh, uint lodLevel)` | 方法 |
| `AddMetaMesh` | `public void AddMetaMesh(MetaMesh metaMesh)` | 方法 |
| `SetCullMode` | `public void SetCullMode(MBMeshCullingMode cullMode)` | 方法 |
| `AddMaterialShaderFlag` | `public void AddMaterialShaderFlag(string materialShaderFlag)` | 方法 |
| `MergeMultiMeshes` | `public void MergeMultiMeshes(MetaMesh metaMesh)` | 方法 |
| `AssignClothBodyFrom` | `public void AssignClothBodyFrom(MetaMesh metaMesh)` | 方法 |
| `BatchMultiMeshes` | `public void BatchMultiMeshes(MetaMesh metaMesh)` | 方法 |
| `HasClothData` | `public bool HasClothData()` | 方法 |
| `BatchMultiMeshesMultiple` | `public void BatchMultiMeshesMultiple(List<MetaMesh>metaMeshes)` | 方法 |
| `ClearEditData` | `public void ClearEditData()` | 方法 |
| `MeshCount` | `public int MeshCount` | 属性 |
| `GetMeshAtIndex` | `public Mesh GetMeshAtIndex(int meshIndex)` | 方法 |
| `GetFirstMeshWithTag` | `public Mesh GetFirstMeshWithTag(string tag)` | 方法 |
| `GetFactor1` | `public uint GetFactor1()` | 方法 |
| `SetGlossMultiplier` | `public void SetGlossMultiplier(float value)` | 方法 |
| `GetFactor2` | `public uint GetFactor2()` | 方法 |
| `SetFactor1Linear` | `public void SetFactor1Linear(uint linearFactorColor1)` | 方法 |
| `SetFactor2Linear` | `public void SetFactor2Linear(uint linearFactorColor2)` | 方法 |
| `SetFactor1` | `public void SetFactor1(uint factorColor1)` | 方法 |
| `SetFactor2` | `public void SetFactor2(uint factorColor2)` | 方法 |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | 方法 |
| `SetVectorArgument2` | `public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | 方法 |
| `GetVectorArgument2` | `public Vec3 GetVectorArgument2()` | 方法 |
| `SetMaterial` | `public void SetMaterial(Material material)` | 方法 |
| `SetShaderToMaterial` | `public void SetShaderToMaterial(string shaderName)` | 方法 |
| `SetLodBias` | `public void SetLodBias(int lodBias)` | 方法 |
| `SetBillboarding` | `public void SetBillboarding(BillboardType billboard)` | 方法 |
| `UseHeadBoneFaceGenScaling` | `public void UseHeadBoneFaceGenScaling(Skeleton skeleton, sbyte headLookDirectionBoneIndex, MatrixFrame frame)` | 方法 |
| `DrawTextWithDefaultFont` | `public void DrawTextWithDefaultFont(string text, Vec2 textPositionMin, Vec2 textPositionMax, Vec2 size, uint color, TextFlags flags)` | 方法 |
| `Frame` | `public MatrixFrame Frame` | 属性 |
| `VectorUserData` | `public Vec3 VectorUserData` | 属性 |
| `PreloadForRendering` | `public void PreloadForRendering()` | 方法 |
| `CheckResources` | `public int CheckResources()` | 方法 |
| `PreloadShaders` | `public void PreloadShaders(bool useTableau, bool useTeamColor)` | 方法 |
| `RecomputeBoundingBox` | `public void RecomputeBoundingBox(bool recomputeMeshes)` | 方法 |
| `AddEditDataUser` | `public void AddEditDataUser()` | 方法 |
| `ReleaseEditDataUser` | `public void ReleaseEditDataUser()` | 方法 |
| `SetEditDataPolicy` | `public void SetEditDataPolicy(EditDataPolicy policy)` | 方法 |
| `Fit` | `public MatrixFrame Fit()` | 方法 |
| `GetBoundingBox` | `public BoundingBox GetBoundingBox()` | 方法 |
| `GetVisibilityMask` | `public VisibilityMaskFlags GetVisibilityMask()` | 方法 |
| `SetVisibilityMask` | `public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)` | 方法 |
| `GetName` | `public string GetName()` | 方法 |
| `GetAllMultiMeshes` | `public static void GetAllMultiMeshes(ref List<MetaMesh>multiMeshList)` | 方法 |
| `GetMultiMesh` | `public static MetaMesh GetMultiMesh(string name)` | 方法 |
| `SetContourState` | `public void SetContourState(bool alwaysVisible)` | 方法 |
| `SetContourColor` | `public void SetContourColor(uint color)` | 方法 |
| `SetMaterialToSubMeshesWithTag` | `public void SetMaterialToSubMeshesWithTag(Material bodyMaterial, string tag)` | 方法 |
| `SetFactorColorToSubMeshesWithTag` | `public void SetFactorColorToSubMeshesWithTag(uint color, string tag)` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 GameEntityComponent](../GameEntityComponent)
- [同命名空间 AnimResult](../AnimResult)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker)
- [同命名空间 AsyncTask](../AsyncTask)
- [同命名空间 BillboardType](../BillboardType)
