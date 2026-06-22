<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParticleSystem`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParticleSystem

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `ParticleSystem` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)