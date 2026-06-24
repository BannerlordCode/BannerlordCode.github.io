<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaMesh`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MetaMesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class MetaMesh : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/MetaMesh.cs`

## Overview

`MetaMesh` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `MeshCount` | `public int MeshCount { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |

## Key Methods

### CreateMetaMesh
`public static MetaMesh CreateMetaMesh(string name = null)`

**Purpose:** Creates a new `meta mesh` instance or object.

### GetLodMaskForMeshAtIndex
`public int GetLodMaskForMeshAtIndex(int index)`

**Purpose:** Gets the current value of `lod mask for mesh at index`.

### GetTotalGpuSize
`public int GetTotalGpuSize()`

**Purpose:** Gets the current value of `total gpu size`.

### RemoveMeshesWithTag
`public int RemoveMeshesWithTag(string tag)`

**Purpose:** Removes `meshes with tag` from the current collection or state.

### RemoveMeshesWithoutTag
`public int RemoveMeshesWithoutTag(string tag)`

**Purpose:** Removes `meshes without tag` from the current collection or state.

### GetMeshCountWithTag
`public int GetMeshCountWithTag(string tag)`

**Purpose:** Gets the current value of `mesh count with tag`.

### HasVertexBufferOrEditDataOrPackageItem
`public bool HasVertexBufferOrEditDataOrPackageItem()`

**Purpose:** Checks whether the current object has/contains `vertex buffer or edit data or package item`.

### HasAnyGeneratedLods
`public bool HasAnyGeneratedLods()`

**Purpose:** Checks whether the current object has/contains `any generated lods`.

### HasAnyLods
`public bool HasAnyLods()`

**Purpose:** Checks whether the current object has/contains `any lods`.

### GetCopy
`public static MetaMesh GetCopy(string metaMeshName, bool showErrors = true, bool mayReturnNull = false)`

**Purpose:** Gets the current value of `copy`.

### CopyTo
`public void CopyTo(MetaMesh res, bool copyMeshes = true)`

**Purpose:** Handles logic related to `copy to`.

### ClearMeshesForOtherLods
`public void ClearMeshesForOtherLods(int lodToKeep)`

**Purpose:** Handles logic related to `clear meshes for other lods`.

### ClearMeshesForLod
`public void ClearMeshesForLod(int lodToClear)`

**Purpose:** Handles logic related to `clear meshes for lod`.

### ClearMeshesForLowerLods
`public void ClearMeshesForLowerLods(int lodToClear)`

**Purpose:** Handles logic related to `clear meshes for lower lods`.

### ClearMeshes
`public void ClearMeshes()`

**Purpose:** Handles logic related to `clear meshes`.

### SetNumLods
`public void SetNumLods(int lodToClear)`

**Purpose:** Sets the value or state of `num lods`.

### CheckMetaMeshExistence
`public static void CheckMetaMeshExistence(string metaMeshName, int lod_count_check)`

**Purpose:** Handles logic related to `check meta mesh existence`.

### GetMorphedCopy
`public static MetaMesh GetMorphedCopy(string metaMeshName, float morphTarget, bool showErrors)`

**Purpose:** Gets the current value of `morphed copy`.

### CreateCopy
`public MetaMesh CreateCopy()`

**Purpose:** Creates a new `copy` instance or object.

### AddMesh
`public void AddMesh(Mesh mesh)`

**Purpose:** Adds `mesh` to the current collection or state.

### AddMesh
`public void AddMesh(Mesh mesh, uint lodLevel)`

**Purpose:** Adds `mesh` to the current collection or state.

### AddMetaMesh
`public void AddMetaMesh(MetaMesh metaMesh)`

**Purpose:** Adds `meta mesh` to the current collection or state.

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**Purpose:** Sets the value or state of `cull mode`.

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string materialShaderFlag)`

**Purpose:** Adds `material shader flag` to the current collection or state.

### MergeMultiMeshes
`public void MergeMultiMeshes(MetaMesh metaMesh)`

**Purpose:** Handles logic related to `merge multi meshes`.

### AssignClothBodyFrom
`public void AssignClothBodyFrom(MetaMesh metaMesh)`

**Purpose:** Handles logic related to `assign cloth body from`.

### BatchMultiMeshes
`public void BatchMultiMeshes(MetaMesh metaMesh)`

**Purpose:** Handles logic related to `batch multi meshes`.

### HasClothData
`public bool HasClothData()`

**Purpose:** Checks whether the current object has/contains `cloth data`.

### BatchMultiMeshesMultiple
`public void BatchMultiMeshesMultiple(List<MetaMesh> metaMeshes)`

**Purpose:** Handles logic related to `batch multi meshes multiple`.

### ClearEditData
`public void ClearEditData()`

**Purpose:** Handles logic related to `clear edit data`.

### GetMeshAtIndex
`public Mesh GetMeshAtIndex(int meshIndex)`

**Purpose:** Gets the current value of `mesh at index`.

### GetFirstMeshWithTag
`public Mesh GetFirstMeshWithTag(string tag)`

**Purpose:** Gets the current value of `first mesh with tag`.

### GetFactor1
`public uint GetFactor1()`

**Purpose:** Gets the current value of `factor1`.

### SetGlossMultiplier
`public void SetGlossMultiplier(float value)`

**Purpose:** Sets the value or state of `gloss multiplier`.

### GetFactor2
`public uint GetFactor2()`

**Purpose:** Gets the current value of `factor2`.

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**Purpose:** Sets the value or state of `factor1 linear`.

### SetFactor2Linear
`public void SetFactor2Linear(uint linearFactorColor2)`

**Purpose:** Sets the value or state of `factor2 linear`.

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**Purpose:** Sets the value or state of `factor1`.

### SetFactor2
`public void SetFactor2(uint factorColor2)`

**Purpose:** Sets the value or state of `factor2`.

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Sets the value or state of `vector argument`.

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Sets the value or state of `vector argument2`.

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

**Purpose:** Gets the current value of `vector argument2`.

### SetMaterial
`public void SetMaterial(Material material)`

**Purpose:** Sets the value or state of `material`.

### SetLodBias
`public void SetLodBias(int lodBias)`

**Purpose:** Sets the value or state of `lod bias`.

### SetBillboarding
`public void SetBillboarding(BillboardType billboard)`

**Purpose:** Sets the value or state of `billboarding`.

### UseHeadBoneFaceGenScaling
`public void UseHeadBoneFaceGenScaling(Skeleton skeleton, sbyte headLookDirectionBoneIndex, MatrixFrame frame)`

**Purpose:** Handles logic related to `use head bone face gen scaling`.

### DrawTextWithDefaultFont
`public void DrawTextWithDefaultFont(string text, Vec2 textPositionMin, Vec2 textPositionMax, Vec2 size, uint color, TextFlags flags)`

**Purpose:** Handles logic related to `draw text with default font`.

### PreloadForRendering
`public void PreloadForRendering()`

**Purpose:** Handles logic related to `preload for rendering`.

### CheckResources
`public int CheckResources()`

**Purpose:** Handles logic related to `check resources`.

### PreloadShaders
`public void PreloadShaders(bool useTableau, bool useTeamColor)`

**Purpose:** Handles logic related to `preload shaders`.

### RecomputeBoundingBox
`public void RecomputeBoundingBox(bool recomputeMeshes)`

**Purpose:** Handles logic related to `recompute bounding box`.

### AddEditDataUser
`public void AddEditDataUser()`

**Purpose:** Adds `edit data user` to the current collection or state.

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

**Purpose:** Handles logic related to `release edit data user`.

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

**Purpose:** Sets the value or state of `edit data policy`.

### Fit
`public MatrixFrame Fit()`

**Purpose:** Handles logic related to `fit`.

### GetBoundingBox
`public BoundingBox GetBoundingBox()`

**Purpose:** Gets the current value of `bounding box`.

### GetVisibilityMask
`public VisibilityMaskFlags GetVisibilityMask()`

**Purpose:** Gets the current value of `visibility mask`.

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**Purpose:** Sets the value or state of `visibility mask`.

### GetName
`public string GetName()`

**Purpose:** Gets the current value of `name`.

### GetAllMultiMeshes
`public static void GetAllMultiMeshes(ref List<MetaMesh> multiMeshList)`

**Purpose:** Gets the current value of `all multi meshes`.

### GetMultiMesh
`public static MetaMesh GetMultiMesh(string name)`

**Purpose:** Gets the current value of `multi mesh`.

### SetContourState
`public void SetContourState(bool alwaysVisible)`

**Purpose:** Sets the value or state of `contour state`.

### SetContourColor
`public void SetContourColor(uint color)`

**Purpose:** Sets the value or state of `contour color`.

### SetMaterialToSubMeshesWithTag
`public void SetMaterialToSubMeshesWithTag(Material bodyMaterial, string tag)`

**Purpose:** Sets the value or state of `material to sub meshes with tag`.

### SetFactorColorToSubMeshesWithTag
`public void SetFactorColorToSubMeshesWithTag(uint color, string tag)`

**Purpose:** Sets the value or state of `factor color to sub meshes with tag`.

## Usage Example

```csharp
MetaMesh.CreateMetaMesh("example");
```

## See Also

- [Complete Class Catalog](../catalog)