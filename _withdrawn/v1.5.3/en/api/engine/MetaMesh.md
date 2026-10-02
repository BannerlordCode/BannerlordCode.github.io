---
title: "MetaMesh"
description: "Auto-generated class reference for MetaMesh."
---
# MetaMesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class MetaMesh : GameEntityComponent `
**Base:** GameEntityComponent
**Source:** TaleWorlds.Engine/MetaMesh.cs

## Overview

Auto-generated stub for `MetaMesh`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateMetaMesh
`public static MetaMesh CreateMetaMesh(string name = null)`

### GetLodMaskForMeshAtIndex
`public int GetLodMaskForMeshAtIndex(int index)`

### GetTotalGpuSize
`public int GetTotalGpuSize()`

### RemoveMeshesWithTag
`public int RemoveMeshesWithTag(string tag)`

### RemoveMeshesWithoutTag
`public int RemoveMeshesWithoutTag(string tag)`

### GetMeshCountWithTag
`public int GetMeshCountWithTag(string tag)`

### HasVertexBufferOrEditDataOrPackageItem
`public bool HasVertexBufferOrEditDataOrPackageItem()`

### HasAnyGeneratedLods
`public bool HasAnyGeneratedLods()`

### HasAnyLods
`public bool HasAnyLods()`

### GetCopy
`public static MetaMesh GetCopy(string metaMeshName,bool showErrors = true,bool mayReturnNull = false)`

### CopyTo
`public void CopyTo(MetaMesh res,bool copyMeshes = true)`

### ClearMeshesForOtherLods
`public void ClearMeshesForOtherLods(int lodToKeep)`

### ClearMeshesForLod
`public void ClearMeshesForLod(int lodToClear)`

### ClearMeshesForLowerLods
`public void ClearMeshesForLowerLods(int lodToClear)`

### ClearMeshes
`public void ClearMeshes()`

### SetNumLods
`public void SetNumLods(int lodToClear)`

### CheckMetaMeshExistence
`public static void CheckMetaMeshExistence(string metaMeshName,int lod_count_check)`

### GetMorphedCopy
`public static MetaMesh GetMorphedCopy(string metaMeshName,float morphTarget,bool showErrors)`

### CreateCopy
`public MetaMesh CreateCopy()`

### AddMesh
`public void AddMesh(Mesh mesh)`

### AddMetaMesh
`public void AddMetaMesh(MetaMesh metaMesh)`

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string materialShaderFlag)`

### MergeMultiMeshes
`public void MergeMultiMeshes(MetaMesh metaMesh)`

### AssignClothBodyFrom
`public void AssignClothBodyFrom(MetaMesh metaMesh)`

### BatchMultiMeshes
`public void BatchMultiMeshes(MetaMesh metaMesh)`

### HasClothData
`public bool HasClothData()`

### BatchMultiMeshesMultiple
`public void BatchMultiMeshesMultiple(List<MetaMesh> metaMeshes)`

### ClearEditData
`public void ClearEditData()`

### GetMeshAtIndex
`public Mesh GetMeshAtIndex(int meshIndex)`

### GetFirstMeshWithTag
`public Mesh GetFirstMeshWithTag(string tag)`

### GetFactor1
`public uint GetFactor1()`

### SetGlossMultiplier
`public void SetGlossMultiplier(float value)`

### GetFactor2
`public uint GetFactor2()`

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

### SetFactor2Linear
`public void SetFactor2Linear(uint linearFactorColor2)`

### SetFactor1
`public void SetFactor1(uint factorColor1)`

### SetFactor2
`public void SetFactor2(uint factorColor2)`

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0,float vectorArgument1,float vectorArgument2,float vectorArgument3)`

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0,float vectorArgument1,float vectorArgument2,float vectorArgument3)`

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

### SetMaterial
`public void SetMaterial(Material material)`

### SetShaderToMaterial
`public void SetShaderToMaterial(string shaderName)`

### SetLodBias
`public void SetLodBias(int lodBias)`

### SetBillboarding
`public void SetBillboarding(BillboardType billboard)`

### UseHeadBoneFaceGenScaling
`public void UseHeadBoneFaceGenScaling(Skeleton skeleton,sbyte headLookDirectionBoneIndex,MatrixFrame frame)`

### DrawTextWithDefaultFont
`public void DrawTextWithDefaultFont(string text,Vec2 textPositionMin,Vec2 textPositionMax,Vec2 size,uint color,TextFlags flags)`

### PreloadForRendering
`public void PreloadForRendering()`

### CheckResources
`public int CheckResources()`

### PreloadShaders
`public void PreloadShaders(bool useTableau,bool useTeamColor)`

### RecomputeBoundingBox
`public void RecomputeBoundingBox(bool recomputeMeshes)`

### AddEditDataUser
`public void AddEditDataUser()`

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

### Fit
`public MatrixFrame Fit()`

### GetBoundingBox
`public BoundingBox GetBoundingBox()`

### GetVisibilityMask
`public VisibilityMaskFlags GetVisibilityMask()`

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

### GetName
`public string GetName()`

### GetAllMultiMeshes
`public static void GetAllMultiMeshes(ref List<MetaMesh> multiMeshList)`

### GetMultiMesh
`public static MetaMesh GetMultiMesh(string name)`

### SetContourState
`public void SetContourState(bool alwaysVisible)`

### SetContourColor
`public void SetContourColor(uint color)`

### SetMaterialToSubMeshesWithTag
`public void SetMaterialToSubMeshesWithTag(Material bodyMaterial,string tag)`

### SetFactorColorToSubMeshesWithTag
`public void SetFactorColorToSubMeshesWithTag(uint color,string tag)`

## See Also

- [Section index](../)
