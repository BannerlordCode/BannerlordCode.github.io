---
title: "MetaMesh"
description: "Auto-generated class reference for MetaMesh."
---
# MetaMesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class MetaMesh : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/MetaMesh.cs`

## Overview

`MetaMesh` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |

## Key Methods

### CreateMetaMesh
`public static MetaMesh CreateMetaMesh(string name = null)`

**Purpose:** Constructs a new meta mesh entity and returns it to the caller.

```csharp
// Static call; no instance required
MetaMesh.CreateMetaMesh("example");
```

### GetLodMaskForMeshAtIndex
`public int GetLodMaskForMeshAtIndex(int index)`

**Purpose:** Reads and returns the lod mask for mesh at index value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetLodMaskForMeshAtIndex(0);
```

### GetTotalGpuSize
`public int GetTotalGpuSize()`

**Purpose:** Reads and returns the total gpu size value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetTotalGpuSize();
```

### RemoveMeshesWithTag
`public int RemoveMeshesWithTag(string tag)`

**Purpose:** Removes meshes with tag from the current collection or state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.RemoveMeshesWithTag("example");
```

### RemoveMeshesWithoutTag
`public int RemoveMeshesWithoutTag(string tag)`

**Purpose:** Removes meshes without tag from the current collection or state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.RemoveMeshesWithoutTag("example");
```

### GetMeshCountWithTag
`public int GetMeshCountWithTag(string tag)`

**Purpose:** Reads and returns the mesh count with tag value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetMeshCountWithTag("example");
```

### HasVertexBufferOrEditDataOrPackageItem
`public bool HasVertexBufferOrEditDataOrPackageItem()`

**Purpose:** Determines whether the this instance already holds vertex buffer or edit data or package item.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.HasVertexBufferOrEditDataOrPackageItem();
```

### HasAnyGeneratedLods
`public bool HasAnyGeneratedLods()`

**Purpose:** Determines whether the this instance already holds any generated lods.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.HasAnyGeneratedLods();
```

### HasAnyLods
`public bool HasAnyLods()`

**Purpose:** Determines whether the this instance already holds any lods.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.HasAnyLods();
```

### GetCopy
`public static MetaMesh GetCopy(string metaMeshName, bool showErrors = true, bool mayReturnNull = false)`

**Purpose:** Reads and returns the copy value held by the this instance.

```csharp
// Static call; no instance required
MetaMesh.GetCopy("example", false, false);
```

### CopyTo
`public void CopyTo(MetaMesh res, bool copyMeshes = true)`

**Purpose:** Copies the to state of the this instance to a target.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.CopyTo(res, false);
```

### ClearMeshesForOtherLods
`public void ClearMeshesForOtherLods(int lodToKeep)`

**Purpose:** Removes all meshes for other lods from the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.ClearMeshesForOtherLods(0);
```

### ClearMeshesForLod
`public void ClearMeshesForLod(int lodToClear)`

**Purpose:** Removes all meshes for lod from the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.ClearMeshesForLod(0);
```

### ClearMeshesForLowerLods
`public void ClearMeshesForLowerLods(int lodToClear)`

**Purpose:** Removes all meshes for lower lods from the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.ClearMeshesForLowerLods(0);
```

### ClearMeshes
`public void ClearMeshes()`

**Purpose:** Removes all meshes from the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.ClearMeshes();
```

### SetNumLods
`public void SetNumLods(int lodToClear)`

**Purpose:** Assigns a new value to num lods and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetNumLods(0);
```

### CheckMetaMeshExistence
`public static void CheckMetaMeshExistence(string metaMeshName, int lod_count_check)`

**Purpose:** Verifies whether meta mesh existence holds true for the this instance.

```csharp
// Static call; no instance required
MetaMesh.CheckMetaMeshExistence("example", 0);
```

### GetMorphedCopy
`public static MetaMesh GetMorphedCopy(string metaMeshName, float morphTarget, bool showErrors)`

**Purpose:** Reads and returns the morphed copy value held by the this instance.

```csharp
// Static call; no instance required
MetaMesh.GetMorphedCopy("example", 0, false);
```

### CreateCopy
`public MetaMesh CreateCopy()`

**Purpose:** Constructs a new copy entity and returns it to the caller.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.CreateCopy();
```

### AddMesh
`public void AddMesh(Mesh mesh)`

**Purpose:** Adds mesh to the current collection or state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.AddMesh(mesh);
```

### AddMesh
`public void AddMesh(Mesh mesh, uint lodLevel)`

**Purpose:** Adds mesh to the current collection or state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.AddMesh(mesh, 0);
```

### AddMetaMesh
`public void AddMetaMesh(MetaMesh metaMesh)`

**Purpose:** Adds meta mesh to the current collection or state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.AddMetaMesh(metaMesh);
```

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**Purpose:** Assigns a new value to cull mode and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetCullMode(cullMode);
```

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string materialShaderFlag)`

**Purpose:** Adds material shader flag to the current collection or state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.AddMaterialShaderFlag("example");
```

### MergeMultiMeshes
`public void MergeMultiMeshes(MetaMesh metaMesh)`

**Purpose:** Executes the MergeMultiMeshes logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.MergeMultiMeshes(metaMesh);
```

### AssignClothBodyFrom
`public void AssignClothBodyFrom(MetaMesh metaMesh)`

**Purpose:** Executes the AssignClothBodyFrom logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.AssignClothBodyFrom(metaMesh);
```

### BatchMultiMeshes
`public void BatchMultiMeshes(MetaMesh metaMesh)`

**Purpose:** Executes the BatchMultiMeshes logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.BatchMultiMeshes(metaMesh);
```

### HasClothData
`public bool HasClothData()`

**Purpose:** Determines whether the this instance already holds cloth data.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.HasClothData();
```

### BatchMultiMeshesMultiple
`public void BatchMultiMeshesMultiple(List<MetaMesh> metaMeshes)`

**Purpose:** Executes the BatchMultiMeshesMultiple logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.BatchMultiMeshesMultiple(metaMeshes);
```

### ClearEditData
`public void ClearEditData()`

**Purpose:** Removes all edit data from the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.ClearEditData();
```

### GetMeshAtIndex
`public Mesh GetMeshAtIndex(int meshIndex)`

**Purpose:** Reads and returns the mesh at index value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetMeshAtIndex(0);
```

### GetFirstMeshWithTag
`public Mesh GetFirstMeshWithTag(string tag)`

**Purpose:** Reads and returns the first mesh with tag value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetFirstMeshWithTag("example");
```

### GetFactor1
`public uint GetFactor1()`

**Purpose:** Reads and returns the factor1 value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetFactor1();
```

### SetGlossMultiplier
`public void SetGlossMultiplier(float value)`

**Purpose:** Assigns a new value to gloss multiplier and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetGlossMultiplier(0);
```

### GetFactor2
`public uint GetFactor2()`

**Purpose:** Reads and returns the factor2 value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetFactor2();
```

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**Purpose:** Assigns a new value to factor1 linear and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetFactor1Linear(0);
```

### SetFactor2Linear
`public void SetFactor2Linear(uint linearFactorColor2)`

**Purpose:** Assigns a new value to factor2 linear and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetFactor2Linear(0);
```

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**Purpose:** Assigns a new value to factor1 and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetFactor1(0);
```

### SetFactor2
`public void SetFactor2(uint factorColor2)`

**Purpose:** Assigns a new value to factor2 and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetFactor2(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to vector argument and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetVectorArgument(0, 0, 0, 0);
```

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to vector argument2 and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetVectorArgument2(0, 0, 0, 0);
```

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

**Purpose:** Reads and returns the vector argument2 value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetVectorArgument2();
```

### SetMaterial
`public void SetMaterial(Material material)`

**Purpose:** Assigns a new value to material and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetMaterial(material);
```

### SetShaderToMaterial
`public void SetShaderToMaterial(string shaderName)`

**Purpose:** Assigns a new value to shader to material and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetShaderToMaterial("example");
```

### SetLodBias
`public void SetLodBias(int lodBias)`

**Purpose:** Assigns a new value to lod bias and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetLodBias(0);
```

### SetBillboarding
`public void SetBillboarding(BillboardType billboard)`

**Purpose:** Assigns a new value to billboarding and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetBillboarding(billboard);
```

### UseHeadBoneFaceGenScaling
`public void UseHeadBoneFaceGenScaling(Skeleton skeleton, sbyte headLookDirectionBoneIndex, MatrixFrame frame)`

**Purpose:** Executes the UseHeadBoneFaceGenScaling logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.UseHeadBoneFaceGenScaling(skeleton, 0, frame);
```

### DrawTextWithDefaultFont
`public void DrawTextWithDefaultFont(string text, Vec2 textPositionMin, Vec2 textPositionMax, Vec2 size, uint color, TextFlags flags)`

**Purpose:** Executes the DrawTextWithDefaultFont logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.DrawTextWithDefaultFont("example", textPositionMin, textPositionMax, size, 0, flags);
```

### PreloadForRendering
`public void PreloadForRendering()`

**Purpose:** Executes the PreloadForRendering logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.PreloadForRendering();
```

### CheckResources
`public int CheckResources()`

**Purpose:** Verifies whether resources holds true for the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.CheckResources();
```

### PreloadShaders
`public void PreloadShaders(bool useTableau, bool useTeamColor)`

**Purpose:** Executes the PreloadShaders logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.PreloadShaders(false, false);
```

### RecomputeBoundingBox
`public void RecomputeBoundingBox(bool recomputeMeshes)`

**Purpose:** Recomputes bounding box and returns the result.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.RecomputeBoundingBox(false);
```

### AddEditDataUser
`public void AddEditDataUser()`

**Purpose:** Adds edit data user to the current collection or state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.AddEditDataUser();
```

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

**Purpose:** Executes the ReleaseEditDataUser logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.ReleaseEditDataUser();
```

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

**Purpose:** Assigns a new value to edit data policy and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetEditDataPolicy(policy);
```

### Fit
`public MatrixFrame Fit()`

**Purpose:** Executes the Fit logic.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.Fit();
```

### GetBoundingBox
`public BoundingBox GetBoundingBox()`

**Purpose:** Reads and returns the bounding box value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetBoundingBox();
```

### GetVisibilityMask
`public VisibilityMaskFlags GetVisibilityMask()`

**Purpose:** Reads and returns the visibility mask value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetVisibilityMask();
```

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**Purpose:** Assigns a new value to visibility mask and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetVisibilityMask(visibilityMask);
```

### GetName
`public string GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
var result = metaMesh.GetName();
```

### GetAllMultiMeshes
`public static void GetAllMultiMeshes(ref List<MetaMesh> multiMeshList)`

**Purpose:** Reads and returns the all multi meshes value held by the this instance.

```csharp
// Static call; no instance required
MetaMesh.GetAllMultiMeshes(multiMeshList);
```

### GetMultiMesh
`public static MetaMesh GetMultiMesh(string name)`

**Purpose:** Reads and returns the multi mesh value held by the this instance.

```csharp
// Static call; no instance required
MetaMesh.GetMultiMesh("example");
```

### SetContourState
`public void SetContourState(bool alwaysVisible)`

**Purpose:** Assigns a new value to contour state and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetContourState(false);
```

### SetContourColor
`public void SetContourColor(uint color)`

**Purpose:** Assigns a new value to contour color and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetContourColor(0);
```

### SetMaterialToSubMeshesWithTag
`public void SetMaterialToSubMeshesWithTag(Material bodyMaterial, string tag)`

**Purpose:** Assigns a new value to material to sub meshes with tag and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetMaterialToSubMeshesWithTag(bodyMaterial, "example");
```

### SetFactorColorToSubMeshesWithTag
`public void SetFactorColorToSubMeshesWithTag(uint color, string tag)`

**Purpose:** Assigns a new value to factor color to sub meshes with tag and updates the object's internal state.

```csharp
// Obtain an instance of MetaMesh from the subsystem API first
MetaMesh metaMesh = ...;
metaMesh.SetFactorColorToSubMeshesWithTag(0, "example");
```

## Usage Example

```csharp
MetaMesh.CreateMetaMesh("example");
```

## See Also

- [Area Index](../)