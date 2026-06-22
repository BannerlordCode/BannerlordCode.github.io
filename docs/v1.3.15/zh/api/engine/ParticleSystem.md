<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ParticleSystem`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParticleSystem

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`ParticleSystem` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### CreateParticleSystemAttachedToBone

```csharp
public static ParticleSystem CreateParticleSystemAttachedToBone(string systemName, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)
```

### CreateParticleSystemAttachedToBone

```csharp
public static ParticleSystem CreateParticleSystemAttachedToBone(int systemRuntimeId, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)
```

### CreateParticleSystemAttachedToEntity

```csharp
public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)
```

### CreateParticleSystemAttachedToEntity

```csharp
public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)
```

### CreateParticleSystemAttachedToEntity

```csharp
public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)
```

### CreateParticleSystemAttachedToEntity

```csharp
public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)
```

### AddMesh

```csharp
public void AddMesh(Mesh mesh)
```

### SetEnable

```csharp
public void SetEnable(bool enable)
```

### SetRuntimeEmissionRateMultiplier

```csharp
public void SetRuntimeEmissionRateMultiplier(float multiplier)
```

### Restart

```csharp
public void Restart()
```

### SetLocalFrame

```csharp
public void SetLocalFrame(in MatrixFrame newLocalFrame)
```

### SetPreviousGlobalFrame

```csharp
public void SetPreviousGlobalFrame(in MatrixFrame globalFrame)
```

### GetLocalFrame

```csharp
public MatrixFrame GetLocalFrame()
```

### HasAliveParticles

```csharp
public bool HasAliveParticles()
```

### SetDontRemoveFromEntity

```csharp
public void SetDontRemoveFromEntity(bool value)
```

### SetParticleEffectByName

```csharp
public void SetParticleEffectByName(string effectName)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)