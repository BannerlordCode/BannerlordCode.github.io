<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeakGameEntity`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeakGameEntity

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 结构体 struct struct
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`WeakGameEntity` 是 `TaleWorlds.Engine` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public string Name { get; }` |
| `Scene` | `public Scene Scene { get; }` |
| `EntityFlags` | `public EntityFlags EntityFlags { get; }` |
| `EntityVisibilityFlags` | `public EntityVisibilityFlags EntityVisibilityFlags { get; }` |
| `BodyFlag` | `public BodyFlags BodyFlag { get; }` |
| `PhysicsDescBodyFlag` | `public BodyFlags PhysicsDescBodyFlag { get; }` |
| `Mass` | `public float Mass { get; }` |
| `CenterOfMass` | `public Vec3 CenterOfMass { get; }` |
| `GlobalPosition` | `public Vec3 GlobalPosition { get; }` |
| `Tags` | `public string Tags { get; }` |
| `ChildCount` | `public int ChildCount { get; }` |
| `Parent` | `public WeakGameEntity Parent { get; }` |
| `Root` | `public WeakGameEntity Root { get; }` |
| `MultiMeshComponentCount` | `public int MultiMeshComponentCount { get; }` |
| `ClothSimulatorComponentCount` | `public int ClothSimulatorComponentCount { get; }` |
| `GlobalBoxMax` | `public Vec3 GlobalBoxMax { get; }` |
| `GlobalBoxMin` | `public Vec3 GlobalBoxMin { get; }` |
| `Skeleton` | `public Skeleton Skeleton { get; set; }` |


## 主要方法

### Invalidate

```csharp
public void Invalidate()
```

### GetScenePointer

```csharp
public UIntPtr GetScenePointer()
```

### ToString

```csharp
public override string ToString()
```

### ClearEntityComponents

```csharp
public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)
```

### ClearComponents

```csharp
public void ClearComponents()
```

### ClearOnlyOwnComponents

```csharp
public void ClearOnlyOwnComponents()
```

### CheckResources

```csharp
public bool CheckResources(bool addToQueue, bool checkFaceResources)
```

### SetMobility

```csharp
public void SetMobility(GameEntity.Mobility mobility)
```

### GetMobility

```csharp
public GameEntity.Mobility GetMobility()
```

### AddMesh

```csharp
public void AddMesh(Mesh mesh, bool recomputeBoundingBox = true)
```

### AddMultiMeshToSkeleton

```csharp
public void AddMultiMeshToSkeleton(MetaMesh metaMesh)
```

### AddMultiMeshToSkeletonBone

```csharp
public void AddMultiMeshToSkeletonBone(MetaMesh metaMesh, sbyte boneIndex)
```

### SetColorToAllMeshesWithTagRecursive

```csharp
public void SetColorToAllMeshesWithTagRecursive(uint color, string tag)
```

### GetAllMeshesWithTag

```csharp
public IEnumerable<Mesh> GetAllMeshesWithTag(string tag)
```

### SetName

```csharp
public void SetName(string name)
```

### SetEntityFlags

```csharp
public void SetEntityFlags(EntityFlags flags)
```

### SetEntityVisibilityFlags

```csharp
public void SetEntityVisibilityFlags(EntityVisibilityFlags flags)
```

### GetPhysicsMaterial

```csharp
public PhysicsMaterial GetPhysicsMaterial()
```

### SetBodyFlags

```csharp
public void SetBodyFlags(BodyFlags flags)
```

### SetBodyFlagsRecursive

```csharp
public void SetBodyFlagsRecursive(BodyFlags bodyFlags)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)