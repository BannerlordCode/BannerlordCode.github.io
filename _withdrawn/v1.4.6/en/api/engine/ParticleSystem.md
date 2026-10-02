---
title: "ParticleSystem"
description: "ParticleSystem: a public class in TaleWorlds.Engine, inheriting GameEntityComponent; 16 exposed members (16 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/ParticleSystem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ParticleSystem

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ParticleSystem : GameEntityComponent`
**File:** `TaleWorlds.Engine/ParticleSystem.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

ParticleSystem lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ParticleSystem.cs. It is a public class (sealed), implementing/inheriting GameEntityComponent; the inheritance chain is ParticleSystem → GameEntityComponent → NativeObject. It exposes 16 public/protected members: 16 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ParticleSystem lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain ParticleSystem → GameEntityComponent → NativeObject. The surface is method-led (methods 16/16, properties 0/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ParticleSystem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateParticleSystemAttachedToBone` | `public static ParticleSystem CreateParticleSystemAttachedToBone(string systemName, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)` | method |
| `CreateParticleSystemAttachedToBone` | `public static ParticleSystem CreateParticleSystemAttachedToBone(int systemRuntimeId, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)` | method |
| `CreateParticleSystemAttachedToEntity` | `public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)` | method |
| `CreateParticleSystemAttachedToEntity` | `public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)` | method |
| `CreateParticleSystemAttachedToEntity` | `public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)` | method |
| `CreateParticleSystemAttachedToEntity` | `public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)` | method |
| `AddMesh` | `public void AddMesh(Mesh mesh)` | method |
| `SetEnable` | `public void SetEnable(bool enable)` | method |
| `SetRuntimeEmissionRateMultiplier` | `public void SetRuntimeEmissionRateMultiplier(float multiplier)` | method |
| `Restart` | `public void Restart()` | method |
| `SetLocalFrame` | `public void SetLocalFrame(in MatrixFrame newLocalFrame)` | method |
| `SetPreviousGlobalFrame` | `public void SetPreviousGlobalFrame(in MatrixFrame globalFrame)` | method |
| `GetLocalFrame` | `public MatrixFrame GetLocalFrame()` | method |
| `HasAliveParticles` | `public bool HasAliveParticles()` | method |
| `SetDontRemoveFromEntity` | `public void SetDontRemoveFromEntity(bool value)` | method |
| `SetParticleEffectByName` | `public void SetParticleEffectByName(string effectName)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameEntityComponent](../GameEntityComponent/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
