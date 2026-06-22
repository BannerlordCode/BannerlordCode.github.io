<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WorldPosition`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WorldPosition

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 结构体 struct struct
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`WorldPosition` 是 `TaleWorlds.Engine` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `AsVec2` | `public Vec2 AsVec2 { get; }` |
| `X` | `public float X { get; }` |
| `Y` | `public float Y { get; }` |
| `IsValid` | `public bool IsValid { get; }` |


## 主要方法

### SetVec3

```csharp
public void SetVec3(UIntPtr navMesh, Vec3 position, bool hasValidZ)
```

### GetNavMesh

```csharp
public UIntPtr GetNavMesh()
```

### GetNavMeshMT

```csharp
public UIntPtr GetNavMeshMT()
```

### GetNearestNavMesh

```csharp
public UIntPtr GetNearestNavMesh()
```

### GetNavMeshZ

```csharp
public float GetNavMeshZ()
```

### GetNavMeshZMT

```csharp
public float GetNavMeshZMT()
```

### GetGroundZ

```csharp
public float GetGroundZ()
```

### GetGroundZMT

```csharp
public float GetGroundZMT()
```

### GetNavMeshVec3

```csharp
public Vec3 GetNavMeshVec3()
```

### GetNavMeshVec3MT

```csharp
public Vec3 GetNavMeshVec3MT()
```

### GetGroundVec3

```csharp
public Vec3 GetGroundVec3()
```

### GetGroundVec3MT

```csharp
public Vec3 GetGroundVec3MT()
```

### GetVec3WithoutValidity

```csharp
public Vec3 GetVec3WithoutValidity()
```

### SetVec2MT

```csharp
public void SetVec2MT(Vec2 value)
```

### SetVec2

```csharp
public void SetVec2(Vec2 value)
```

### DistanceSquaredWithLimit

```csharp
public float DistanceSquaredWithLimit(in Vec3 targetPoint, float limitSquared)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)