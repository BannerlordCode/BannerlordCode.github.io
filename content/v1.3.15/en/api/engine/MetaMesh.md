---
title: "MetaMesh"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaMesh`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MetaMesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class MetaMesh : GameEntityComponent`
**Base:** `GameEntityComponent`
**Area:** engine

## Overview

`MetaMesh` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MetaMesh.CreateMetaMesh("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
