---
title: "ParticleSystem"
description: "Auto-generated class reference for ParticleSystem."
---
# ParticleSystem

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystem : GameEntityComponent `
**Base:** GameEntityComponent
**Source:** TaleWorlds.Engine/ParticleSystem.cs

## Overview

Auto-generated stub for `ParticleSystem`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(string systemName,Skeleton skeleton,sbyte boneIndex,ref MatrixFrame boneLocalFrame)`

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName,GameEntity parentEntity,ref MatrixFrame boneLocalFrame)`

### AddMesh
`public void AddMesh(Mesh mesh)`

### SetEnable
`public void SetEnable(bool enable)`

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float multiplier)`

### Restart
`public void Restart()`

### SetLocalFrame
`public void SetLocalFrame(in MatrixFrame newLocalFrame)`

### SetPreviousGlobalFrame
`public void SetPreviousGlobalFrame(in MatrixFrame globalFrame)`

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

### HasAliveParticles
`public bool HasAliveParticles()`

### SetDontRemoveFromEntity
`public void SetDontRemoveFromEntity(bool value)`

### SetParticleEffectByName
`public void SetParticleEffectByName(string effectName)`

## See Also

- [Section index](../)
