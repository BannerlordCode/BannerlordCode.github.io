---
title: "MetaMesh"
description: "MetaMesh: a public class in TaleWorlds.Engine, inheriting GameEntityComponent; 70 exposed members (66 methods, 4 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/MetaMesh.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MetaMesh

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class MetaMesh : GameEntityComponent`
**File:** `TaleWorlds.Engine/MetaMesh.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

MetaMesh lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/MetaMesh.cs. It is a public class (sealed), implementing/inheriting GameEntityComponent; the inheritance chain is MetaMesh → GameEntityComponent → NativeObject. It exposes 70 public/protected members: 66 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MetaMesh lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain MetaMesh → GameEntityComponent → NativeObject. The surface is method-led (methods 66/70, properties 4/70), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/MetaMesh.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateMetaMesh` | `public static MetaMesh CreateMetaMesh(string name = null)` | method |
| `IsValid` | `public bool IsValid` | property |
| `GetLodMaskForMeshAtIndex` | `public int GetLodMaskForMeshAtIndex(int index)` | method |
| `GetTotalGpuSize` | `public int GetTotalGpuSize()` | method |
| `RemoveMeshesWithTag` | `public int RemoveMeshesWithTag(string tag)` | method |
| `RemoveMeshesWithoutTag` | `public int RemoveMeshesWithoutTag(string tag)` | method |
| `GetMeshCountWithTag` | `public int GetMeshCountWithTag(string tag)` | method |
| `HasVertexBufferOrEditDataOrPackageItem` | `public bool HasVertexBufferOrEditDataOrPackageItem()` | method |
| `HasAnyGeneratedLods` | `public bool HasAnyGeneratedLods()` | method |
| `HasAnyLods` | `public bool HasAnyLods()` | method |
| `GetCopy` | `public static MetaMesh GetCopy(string metaMeshName, bool showErrors = true, bool mayReturnNull = false)` | method |
| `CopyTo` | `public void CopyTo(MetaMesh res, bool copyMeshes = true)` | method |
| `ClearMeshesForOtherLods` | `public void ClearMeshesForOtherLods(int lodToKeep)` | method |
| `ClearMeshesForLod` | `public void ClearMeshesForLod(int lodToClear)` | method |
| `ClearMeshesForLowerLods` | `public void ClearMeshesForLowerLods(int lodToClear)` | method |
| `ClearMeshes` | `public void ClearMeshes()` | method |
| `SetNumLods` | `public void SetNumLods(int lodToClear)` | method |
| `CheckMetaMeshExistence` | `public static void CheckMetaMeshExistence(string metaMeshName, int lod_count_check)` | method |
| `GetMorphedCopy` | `public static MetaMesh GetMorphedCopy(string metaMeshName, float morphTarget, bool showErrors)` | method |
| `CreateCopy` | `public MetaMesh CreateCopy()` | method |
| `AddMesh` | `public void AddMesh(Mesh mesh)` | method |
| `AddMesh` | `public void AddMesh(Mesh mesh, uint lodLevel)` | method |
| `AddMetaMesh` | `public void AddMetaMesh(MetaMesh metaMesh)` | method |
| `SetCullMode` | `public void SetCullMode(MBMeshCullingMode cullMode)` | method |
| `AddMaterialShaderFlag` | `public void AddMaterialShaderFlag(string materialShaderFlag)` | method |
| `MergeMultiMeshes` | `public void MergeMultiMeshes(MetaMesh metaMesh)` | method |
| `AssignClothBodyFrom` | `public void AssignClothBodyFrom(MetaMesh metaMesh)` | method |
| `BatchMultiMeshes` | `public void BatchMultiMeshes(MetaMesh metaMesh)` | method |
| `HasClothData` | `public bool HasClothData()` | method |
| `BatchMultiMeshesMultiple` | `public void BatchMultiMeshesMultiple(List<MetaMesh>metaMeshes)` | method |
| `ClearEditData` | `public void ClearEditData()` | method |
| `MeshCount` | `public int MeshCount` | property |
| `GetMeshAtIndex` | `public Mesh GetMeshAtIndex(int meshIndex)` | method |
| `GetFirstMeshWithTag` | `public Mesh GetFirstMeshWithTag(string tag)` | method |
| `GetFactor1` | `public uint GetFactor1()` | method |
| `SetGlossMultiplier` | `public void SetGlossMultiplier(float value)` | method |
| `GetFactor2` | `public uint GetFactor2()` | method |
| `SetFactor1Linear` | `public void SetFactor1Linear(uint linearFactorColor1)` | method |
| `SetFactor2Linear` | `public void SetFactor2Linear(uint linearFactorColor2)` | method |
| `SetFactor1` | `public void SetFactor1(uint factorColor1)` | method |
| `SetFactor2` | `public void SetFactor2(uint factorColor2)` | method |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | method |
| `SetVectorArgument2` | `public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | method |
| `GetVectorArgument2` | `public Vec3 GetVectorArgument2()` | method |
| `SetMaterial` | `public void SetMaterial(Material material)` | method |
| `SetShaderToMaterial` | `public void SetShaderToMaterial(string shaderName)` | method |
| `SetLodBias` | `public void SetLodBias(int lodBias)` | method |
| `SetBillboarding` | `public void SetBillboarding(BillboardType billboard)` | method |
| `UseHeadBoneFaceGenScaling` | `public void UseHeadBoneFaceGenScaling(Skeleton skeleton, sbyte headLookDirectionBoneIndex, MatrixFrame frame)` | method |
| `DrawTextWithDefaultFont` | `public void DrawTextWithDefaultFont(string text, Vec2 textPositionMin, Vec2 textPositionMax, Vec2 size, uint color, TextFlags flags)` | method |
| `Frame` | `public MatrixFrame Frame` | property |
| `VectorUserData` | `public Vec3 VectorUserData` | property |
| `PreloadForRendering` | `public void PreloadForRendering()` | method |
| `CheckResources` | `public int CheckResources()` | method |
| `PreloadShaders` | `public void PreloadShaders(bool useTableau, bool useTeamColor)` | method |
| `RecomputeBoundingBox` | `public void RecomputeBoundingBox(bool recomputeMeshes)` | method |
| `AddEditDataUser` | `public void AddEditDataUser()` | method |
| `ReleaseEditDataUser` | `public void ReleaseEditDataUser()` | method |
| `SetEditDataPolicy` | `public void SetEditDataPolicy(EditDataPolicy policy)` | method |
| `Fit` | `public MatrixFrame Fit()` | method |
| `GetBoundingBox` | `public BoundingBox GetBoundingBox()` | method |
| `GetVisibilityMask` | `public VisibilityMaskFlags GetVisibilityMask()` | method |
| `SetVisibilityMask` | `public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)` | method |
| `GetName` | `public string GetName()` | method |
| `GetAllMultiMeshes` | `public static void GetAllMultiMeshes(ref List<MetaMesh>multiMeshList)` | method |
| `GetMultiMesh` | `public static MetaMesh GetMultiMesh(string name)` | method |
| `SetContourState` | `public void SetContourState(bool alwaysVisible)` | method |
| `SetContourColor` | `public void SetContourColor(uint color)` | method |
| `SetMaterialToSubMeshesWithTag` | `public void SetMaterialToSubMeshesWithTag(Material bodyMaterial, string tag)` | method |
| `SetFactorColorToSubMeshesWithTag` | `public void SetFactorColorToSubMeshesWithTag(uint color, string tag)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameEntityComponent](../GameEntityComponent/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
