---
title: "ParticleSystem"
description: "ParticleSystem 的自动生成类参考。"
---
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

**用途 / Purpose:** 构建一个新的 「particle system attached to bone」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ParticleSystem.CreateParticleSystemAttachedToBone("example", skeleton, 0, boneLocalFrame);
```

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(int systemRuntimeId, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 构建一个新的 「particle system attached to bone」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ParticleSystem.CreateParticleSystemAttachedToBone(0, skeleton, 0, boneLocalFrame);
```

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 构建一个新的 「particle system attached to entity」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ParticleSystem.CreateParticleSystemAttachedToEntity("example", parentEntity, boneLocalFrame);
```

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 构建一个新的 「particle system attached to entity」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ParticleSystem.CreateParticleSystemAttachedToEntity("example", parentEntity, boneLocalFrame);
```

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 构建一个新的 「particle system attached to entity」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ParticleSystem.CreateParticleSystemAttachedToEntity(0, parentEntity, boneLocalFrame);
```

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**用途 / Purpose:** 构建一个新的 「particle system attached to entity」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ParticleSystem.CreateParticleSystemAttachedToEntity(0, parentEntity, boneLocalFrame);
```

### AddMesh
`public void AddMesh(Mesh mesh)`

**用途 / Purpose:** 将 「mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
particleSystem.AddMesh(mesh);
```

### SetEnable
`public void SetEnable(bool enable)`

**用途 / Purpose:** 为 「enable」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
particleSystem.SetEnable(false);
```

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float multiplier)`

**用途 / Purpose:** 为 「runtime emission rate multiplier」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
particleSystem.SetRuntimeEmissionRateMultiplier(0);
```

### Restart
`public void Restart()`

**用途 / Purpose:** 处理与 「restart」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
particleSystem.Restart();
```

### SetLocalFrame
`public void SetLocalFrame(in MatrixFrame newLocalFrame)`

**用途 / Purpose:** 为 「local frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
particleSystem.SetLocalFrame(newLocalFrame);
```

### SetPreviousGlobalFrame
`public void SetPreviousGlobalFrame(in MatrixFrame globalFrame)`

**用途 / Purpose:** 为 「previous global frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
particleSystem.SetPreviousGlobalFrame(globalFrame);
```

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「local frame」 的结果。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
var result = particleSystem.GetLocalFrame();
```

### HasAliveParticles
`public bool HasAliveParticles()`

**用途 / Purpose:** 判断当前对象是否已经持有 「alive particles」。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
var result = particleSystem.HasAliveParticles();
```

### SetDontRemoveFromEntity
`public void SetDontRemoveFromEntity(bool value)`

**用途 / Purpose:** 为 「dont remove from entity」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
particleSystem.SetDontRemoveFromEntity(false);
```

### SetParticleEffectByName
`public void SetParticleEffectByName(string effectName)`

**用途 / Purpose:** 为 「particle effect by name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ParticleSystem 实例
ParticleSystem particleSystem = ...;
particleSystem.SetParticleEffectByName("example");
```

## 使用示例

```csharp
ParticleSystem.CreateParticleSystemAttachedToBone("example", skeleton, 0, boneLocalFrame);
```

## 参见

- [本区域目录](../)