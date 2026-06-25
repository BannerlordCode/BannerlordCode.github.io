---
title: "ParticleSystem"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ParticleSystem`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParticleSystem

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public sealed class ParticleSystem : GameEntityComponent`
**Base:** `GameEntityComponent`
**领域:** engine

## 概述

`ParticleSystem` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(string systemName, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 创建一个 `particle system attached to bone` 实例或对象。

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(int systemRuntimeId, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 创建一个 `particle system attached to bone` 实例或对象。

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 创建一个 `particle system attached to entity` 实例或对象。

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 创建一个 `particle system attached to entity` 实例或对象。

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 创建一个 `particle system attached to entity` 实例或对象。

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 创建一个 `particle system attached to entity` 实例或对象。

### AddMesh
`public void AddMesh(Mesh mesh)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh`。

### SetEnable
`public void SetEnable(bool enable)`

**用途 / Purpose:** 设置 `enable` 的值或状态。

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float multiplier)`

**用途 / Purpose:** 设置 `runtime emission rate multiplier` 的值或状态。

### Restart
`public void Restart()`

**用途 / Purpose:** 处理 `restart` 相关逻辑。

### SetLocalFrame
`public void SetLocalFrame(in MatrixFrame newLocalFrame)`

**用途 / Purpose:** 设置 `local frame` 的值或状态。

### SetPreviousGlobalFrame
`public void SetPreviousGlobalFrame(in MatrixFrame globalFrame)`

**用途 / Purpose:** 设置 `previous global frame` 的值或状态。

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**用途 / Purpose:** 获取 `local frame` 的当前值。

### HasAliveParticles
`public bool HasAliveParticles()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `alive particles`。

### SetDontRemoveFromEntity
`public void SetDontRemoveFromEntity(bool value)`

**用途 / Purpose:** 设置 `dont remove from entity` 的值或状态。

### SetParticleEffectByName
`public void SetParticleEffectByName(string effectName)`

**用途 / Purpose:** 设置 `particle effect by name` 的值或状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ParticleSystem.CreateParticleSystemAttachedToBone("example", skeleton, 0, boneLocalFrame);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
