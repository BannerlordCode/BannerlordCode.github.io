---
title: "ParticleSystem"
description: "ParticleSystem：TaleWorlds.Engine 的 public 类，继承 GameEntityComponent；公开成员 16 个（方法 16、属性 0、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/ParticleSystem.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ParticleSystem

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ParticleSystem : GameEntityComponent`
**File:** `TaleWorlds.Engine/ParticleSystem.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

ParticleSystem 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/ParticleSystem.cs。它是一个 public 类（sealed），实现/继承 GameEntityComponent，继承链为 ParticleSystem → GameEntityComponent → NativeObject。public/protected 成员共 16 个：16 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ParticleSystem 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 ParticleSystem → GameEntityComponent → NativeObject。成员构成以方法为主（方法 16/16，属性 0/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/ParticleSystem.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateParticleSystemAttachedToBone` | `public static ParticleSystem CreateParticleSystemAttachedToBone(string systemName, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)` | 方法 |
| `CreateParticleSystemAttachedToBone` | `public static ParticleSystem CreateParticleSystemAttachedToBone(int systemRuntimeId, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)` | 方法 |
| `CreateParticleSystemAttachedToEntity` | `public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)` | 方法 |
| `CreateParticleSystemAttachedToEntity` | `public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)` | 方法 |
| `CreateParticleSystemAttachedToEntity` | `public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)` | 方法 |
| `CreateParticleSystemAttachedToEntity` | `public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)` | 方法 |
| `AddMesh` | `public void AddMesh(Mesh mesh)` | 方法 |
| `SetEnable` | `public void SetEnable(bool enable)` | 方法 |
| `SetRuntimeEmissionRateMultiplier` | `public void SetRuntimeEmissionRateMultiplier(float multiplier)` | 方法 |
| `Restart` | `public void Restart()` | 方法 |
| `SetLocalFrame` | `public void SetLocalFrame(in MatrixFrame newLocalFrame)` | 方法 |
| `SetPreviousGlobalFrame` | `public void SetPreviousGlobalFrame(in MatrixFrame globalFrame)` | 方法 |
| `GetLocalFrame` | `public MatrixFrame GetLocalFrame()` | 方法 |
| `HasAliveParticles` | `public bool HasAliveParticles()` | 方法 |
| `SetDontRemoveFromEntity` | `public void SetDontRemoveFromEntity(bool value)` | 方法 |
| `SetParticleEffectByName` | `public void SetParticleEffectByName(string effectName)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameEntityComponent](../GameEntityComponent/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
