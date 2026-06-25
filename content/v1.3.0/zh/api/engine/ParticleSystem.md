---
title: "ParticleSystem"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ParticleSystem`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ParticleSystem

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystem : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/ParticleSystem.cs`

## 概述

`ParticleSystem` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

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

### SetParticleEffectByName
`public void SetParticleEffectByName(string effectName)`

**用途 / Purpose:** 设置 `particle effect by name` 的值或状态。

## 使用示例

```csharp
ParticleSystem.CreateParticleSystemAttachedToBone("example", skeleton, 0, boneLocalFrame);
```

## 参见

- [完整类目录](../catalog)