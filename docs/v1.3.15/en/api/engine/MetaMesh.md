<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaMesh`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MetaMesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `MetaMesh` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `MeshCount` | `public int MeshCount { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |


## Key Methods

### CreateMetaMesh

```csharp
public static MetaMesh CreateMetaMesh(string name = null)
```

### GetLodMaskForMeshAtIndex

```csharp
public int GetLodMaskForMeshAtIndex(int index)
```

### GetTotalGpuSize

```csharp
public int GetTotalGpuSize()
```

### RemoveMeshesWithTag

```csharp
public int RemoveMeshesWithTag(string tag)
```

### RemoveMeshesWithoutTag

```csharp
public int RemoveMeshesWithoutTag(string tag)
```

### GetMeshCountWithTag

```csharp
public int GetMeshCountWithTag(string tag)
```

### HasVertexBufferOrEditDataOrPackageItem

```csharp
public bool HasVertexBufferOrEditDataOrPackageItem()
```

### HasAnyGeneratedLods

```csharp
public bool HasAnyGeneratedLods()
```

### HasAnyLods

```csharp
public bool HasAnyLods()
```

### GetCopy

```csharp
public static MetaMesh GetCopy(string metaMeshName, bool showErrors = true, bool mayReturnNull = false)
```

### CopyTo

```csharp
public void CopyTo(MetaMesh res, bool copyMeshes = true)
```

### ClearMeshesForOtherLods

```csharp
public void ClearMeshesForOtherLods(int lodToKeep)
```

### ClearMeshesForLod

```csharp
public void ClearMeshesForLod(int lodToClear)
```

### ClearMeshesForLowerLods

```csharp
public void ClearMeshesForLowerLods(int lodToClear)
```

### ClearMeshes

```csharp
public void ClearMeshes()
```

### SetNumLods

```csharp
public void SetNumLods(int lodToClear)
```

### CheckMetaMeshExistence

```csharp
public static void CheckMetaMeshExistence(string metaMeshName, int lod_count_check)
```

### GetMorphedCopy

```csharp
public static MetaMesh GetMorphedCopy(string metaMeshName, float morphTarget, bool showErrors)
```

### CreateCopy

```csharp
public MetaMesh CreateCopy()
```

### AddMesh

```csharp
public void AddMesh(Mesh mesh)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)