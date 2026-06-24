<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MetaMesh`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MetaMesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class MetaMesh : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/MetaMesh.cs`

## 概述

`MetaMesh` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `MeshCount` | `public int MeshCount { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |

## 主要方法

### CreateMetaMesh
`public static MetaMesh CreateMetaMesh(string name = null)`

**用途 / Purpose:** 创建一个 `meta mesh` 实例或对象。

### GetLodMaskForMeshAtIndex
`public int GetLodMaskForMeshAtIndex(int index)`

**用途 / Purpose:** 获取 `lod mask for mesh at index` 的当前值。

### GetTotalGpuSize
`public int GetTotalGpuSize()`

**用途 / Purpose:** 获取 `total gpu size` 的当前值。

### RemoveMeshesWithTag
`public int RemoveMeshesWithTag(string tag)`

**用途 / Purpose:** 从当前集合/状态中移除 `meshes with tag`。

### RemoveMeshesWithoutTag
`public int RemoveMeshesWithoutTag(string tag)`

**用途 / Purpose:** 从当前集合/状态中移除 `meshes without tag`。

### GetMeshCountWithTag
`public int GetMeshCountWithTag(string tag)`

**用途 / Purpose:** 获取 `mesh count with tag` 的当前值。

### HasVertexBufferOrEditDataOrPackageItem
`public bool HasVertexBufferOrEditDataOrPackageItem()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `vertex buffer or edit data or package item`。

### HasAnyGeneratedLods
`public bool HasAnyGeneratedLods()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any generated lods`。

### HasAnyLods
`public bool HasAnyLods()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any lods`。

### GetCopy
`public static MetaMesh GetCopy(string metaMeshName, bool showErrors = true, bool mayReturnNull = false)`

**用途 / Purpose:** 获取 `copy` 的当前值。

### CopyTo
`public void CopyTo(MetaMesh res, bool copyMeshes = true)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### ClearMeshesForOtherLods
`public void ClearMeshesForOtherLods(int lodToKeep)`

**用途 / Purpose:** 处理 `clear meshes for other lods` 相关逻辑。

### ClearMeshesForLod
`public void ClearMeshesForLod(int lodToClear)`

**用途 / Purpose:** 处理 `clear meshes for lod` 相关逻辑。

### ClearMeshesForLowerLods
`public void ClearMeshesForLowerLods(int lodToClear)`

**用途 / Purpose:** 处理 `clear meshes for lower lods` 相关逻辑。

### ClearMeshes
`public void ClearMeshes()`

**用途 / Purpose:** 处理 `clear meshes` 相关逻辑。

### SetNumLods
`public void SetNumLods(int lodToClear)`

**用途 / Purpose:** 设置 `num lods` 的值或状态。

### CheckMetaMeshExistence
`public static void CheckMetaMeshExistence(string metaMeshName, int lod_count_check)`

**用途 / Purpose:** 处理 `check meta mesh existence` 相关逻辑。

### GetMorphedCopy
`public static MetaMesh GetMorphedCopy(string metaMeshName, float morphTarget, bool showErrors)`

**用途 / Purpose:** 获取 `morphed copy` 的当前值。

### CreateCopy
`public MetaMesh CreateCopy()`

**用途 / Purpose:** 创建一个 `copy` 实例或对象。

### AddMesh
`public void AddMesh(Mesh mesh)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh`。

### AddMesh
`public void AddMesh(Mesh mesh, uint lodLevel)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh`。

### AddMetaMesh
`public void AddMetaMesh(MetaMesh metaMesh)`

**用途 / Purpose:** 向当前集合/状态中添加 `meta mesh`。

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**用途 / Purpose:** 设置 `cull mode` 的值或状态。

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string materialShaderFlag)`

**用途 / Purpose:** 向当前集合/状态中添加 `material shader flag`。

### MergeMultiMeshes
`public void MergeMultiMeshes(MetaMesh metaMesh)`

**用途 / Purpose:** 处理 `merge multi meshes` 相关逻辑。

### AssignClothBodyFrom
`public void AssignClothBodyFrom(MetaMesh metaMesh)`

**用途 / Purpose:** 处理 `assign cloth body from` 相关逻辑。

### BatchMultiMeshes
`public void BatchMultiMeshes(MetaMesh metaMesh)`

**用途 / Purpose:** 处理 `batch multi meshes` 相关逻辑。

### HasClothData
`public bool HasClothData()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `cloth data`。

### BatchMultiMeshesMultiple
`public void BatchMultiMeshesMultiple(List<MetaMesh> metaMeshes)`

**用途 / Purpose:** 处理 `batch multi meshes multiple` 相关逻辑。

### ClearEditData
`public void ClearEditData()`

**用途 / Purpose:** 处理 `clear edit data` 相关逻辑。

### GetMeshAtIndex
`public Mesh GetMeshAtIndex(int meshIndex)`

**用途 / Purpose:** 获取 `mesh at index` 的当前值。

### GetFirstMeshWithTag
`public Mesh GetFirstMeshWithTag(string tag)`

**用途 / Purpose:** 获取 `first mesh with tag` 的当前值。

### GetFactor1
`public uint GetFactor1()`

**用途 / Purpose:** 获取 `factor1` 的当前值。

### SetGlossMultiplier
`public void SetGlossMultiplier(float value)`

**用途 / Purpose:** 设置 `gloss multiplier` 的值或状态。

### GetFactor2
`public uint GetFactor2()`

**用途 / Purpose:** 获取 `factor2` 的当前值。

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**用途 / Purpose:** 设置 `factor1 linear` 的值或状态。

### SetFactor2Linear
`public void SetFactor2Linear(uint linearFactorColor2)`

**用途 / Purpose:** 设置 `factor2 linear` 的值或状态。

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**用途 / Purpose:** 设置 `factor1` 的值或状态。

### SetFactor2
`public void SetFactor2(uint factorColor2)`

**用途 / Purpose:** 设置 `factor2` 的值或状态。

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 设置 `vector argument` 的值或状态。

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 设置 `vector argument2` 的值或状态。

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

**用途 / Purpose:** 获取 `vector argument2` 的当前值。

### SetMaterial
`public void SetMaterial(Material material)`

**用途 / Purpose:** 设置 `material` 的值或状态。

### SetLodBias
`public void SetLodBias(int lodBias)`

**用途 / Purpose:** 设置 `lod bias` 的值或状态。

### SetBillboarding
`public void SetBillboarding(BillboardType billboard)`

**用途 / Purpose:** 设置 `billboarding` 的值或状态。

### UseHeadBoneFaceGenScaling
`public void UseHeadBoneFaceGenScaling(Skeleton skeleton, sbyte headLookDirectionBoneIndex, MatrixFrame frame)`

**用途 / Purpose:** 处理 `use head bone face gen scaling` 相关逻辑。

### DrawTextWithDefaultFont
`public void DrawTextWithDefaultFont(string text, Vec2 textPositionMin, Vec2 textPositionMax, Vec2 size, uint color, TextFlags flags)`

**用途 / Purpose:** 处理 `draw text with default font` 相关逻辑。

### PreloadForRendering
`public void PreloadForRendering()`

**用途 / Purpose:** 处理 `preload for rendering` 相关逻辑。

### CheckResources
`public int CheckResources()`

**用途 / Purpose:** 处理 `check resources` 相关逻辑。

### PreloadShaders
`public void PreloadShaders(bool useTableau, bool useTeamColor)`

**用途 / Purpose:** 处理 `preload shaders` 相关逻辑。

### RecomputeBoundingBox
`public void RecomputeBoundingBox(bool recomputeMeshes)`

**用途 / Purpose:** 处理 `recompute bounding box` 相关逻辑。

### AddEditDataUser
`public void AddEditDataUser()`

**用途 / Purpose:** 向当前集合/状态中添加 `edit data user`。

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

**用途 / Purpose:** 处理 `release edit data user` 相关逻辑。

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

**用途 / Purpose:** 设置 `edit data policy` 的值或状态。

### Fit
`public MatrixFrame Fit()`

**用途 / Purpose:** 处理 `fit` 相关逻辑。

### GetBoundingBox
`public BoundingBox GetBoundingBox()`

**用途 / Purpose:** 获取 `bounding box` 的当前值。

### GetVisibilityMask
`public VisibilityMaskFlags GetVisibilityMask()`

**用途 / Purpose:** 获取 `visibility mask` 的当前值。

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**用途 / Purpose:** 设置 `visibility mask` 的值或状态。

### GetName
`public string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetAllMultiMeshes
`public static void GetAllMultiMeshes(ref List<MetaMesh> multiMeshList)`

**用途 / Purpose:** 获取 `all multi meshes` 的当前值。

### GetMultiMesh
`public static MetaMesh GetMultiMesh(string name)`

**用途 / Purpose:** 获取 `multi mesh` 的当前值。

### SetContourState
`public void SetContourState(bool alwaysVisible)`

**用途 / Purpose:** 设置 `contour state` 的值或状态。

### SetContourColor
`public void SetContourColor(uint color)`

**用途 / Purpose:** 设置 `contour color` 的值或状态。

### SetMaterialToSubMeshesWithTag
`public void SetMaterialToSubMeshesWithTag(Material bodyMaterial, string tag)`

**用途 / Purpose:** 设置 `material to sub meshes with tag` 的值或状态。

### SetFactorColorToSubMeshesWithTag
`public void SetFactorColorToSubMeshesWithTag(uint color, string tag)`

**用途 / Purpose:** 设置 `factor color to sub meshes with tag` 的值或状态。

## 使用示例

```csharp
MetaMesh.CreateMetaMesh("example");
```

## 参见

- [完整类目录](../catalog)