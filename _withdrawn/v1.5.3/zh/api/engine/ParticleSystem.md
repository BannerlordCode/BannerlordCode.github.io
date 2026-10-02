---
title: "ParticleSystem"
description: "ParticleSystem 的自动生成类参考。"
---
# ParticleSystem

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystem : GameEntityComponent `
**Base:** GameEntityComponent
**Source:** TaleWorlds.Engine/ParticleSystem.cs

## 概述

`ParticleSystem` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/ParticleSystem.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(string systemName,Skeleton skeleton,sbyte boneIndex,ref MatrixFrame boneLocalFrame) `
`public static ParticleSystem CreateParticleSystemAttachedToBone(int systemRuntimeId,Skeleton skeleton,sbyte boneIndex,ref MatrixFrame boneLocalFrame) `

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName,GameEntity parentEntity,ref MatrixFrame boneLocalFrame) `
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName,WeakGameEntity parentEntity,ref MatrixFrame boneLocalFrame) `
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId,GameEntity parentEntity,ref MatrixFrame boneLocalFrame) `
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId,WeakGameEntity parentEntity,ref MatrixFrame boneLocalFrame) `

### AddMesh
`public void AddMesh(Mesh mesh) `

### SetEnable
`public void SetEnable(bool enable) `

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float multiplier) `

### Restart
`public void Restart() `

### SetLocalFrame
`public void SetLocalFrame(in MatrixFrame newLocalFrame) `

### SetPreviousGlobalFrame
`public void SetPreviousGlobalFrame(in MatrixFrame globalFrame) `

### GetLocalFrame
`public MatrixFrame GetLocalFrame() `

### HasAliveParticles
`public bool HasAliveParticles() `

### SetDontRemoveFromEntity
`public void SetDontRemoveFromEntity(bool value) `

### SetParticleEffectByName
`public void SetParticleEffectByName(string effectName) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
