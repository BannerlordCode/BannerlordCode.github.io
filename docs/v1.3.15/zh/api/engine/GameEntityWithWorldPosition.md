<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameEntityWithWorldPosition`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntityWithWorldPosition

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`GameEntityWithWorldPosition` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GameEntity` | `public WeakGameEntity GameEntity { get; }` |
| `WorldPosition` | `public WorldPosition WorldPosition { get; }` |
| `WorldFrame` | `public WorldFrame WorldFrame { get; }` |
| `AsVec2` | `public Vec2 AsVec2 { get; }` |


## 主要方法

### InvalidateWorldPosition

```csharp
public void InvalidateWorldPosition()
```

### SetCustomLocalFrame

```csharp
public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)
```

### GetNavMesh

```csharp
public UIntPtr GetNavMesh()
```

### GetNavMeshVec3

```csharp
public Vec3 GetNavMeshVec3()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)