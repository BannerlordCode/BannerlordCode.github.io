<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MetaMesh`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MetaMesh

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`MetaMesh` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `MeshCount` | `public int MeshCount { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)