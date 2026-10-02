---
title: "ClothSimulatorComponent"
description: "ClothSimulatorComponent: a public class in TaleWorlds.Engine, inheriting GameEntityComponent; 13 exposed members (13 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/ClothSimulatorComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClothSimulatorComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class ClothSimulatorComponent : GameEntityComponent`
**File:** `TaleWorlds.Engine/ClothSimulatorComponent.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

ClothSimulatorComponent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ClothSimulatorComponent.cs. It is a public class (sealed), implementing/inheriting GameEntityComponent; the inheritance chain is ClothSimulatorComponent → GameEntityComponent → NativeObject. It exposes 13 public/protected members: 13 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClothSimulatorComponent lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain ClothSimulatorComponent → GameEntityComponent → NativeObject. The surface is method-led (methods 13/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ClothSimulatorComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetMaxDistanceMultiplier` | `public void SetMaxDistanceMultiplier(float multiplier)` | method |
| `SetForcedWind` | `public void SetForcedWind(Vec3 windVector, bool isLocal)` | method |
| `DisableForcedWind` | `public void DisableForcedWind()` | method |
| `SetForcedGustStrength` | `public void SetForcedGustStrength(float gustStrength)` | method |
| `SetResetRequired` | `public void SetResetRequired()` | method |
| `DisableMorphAnimation` | `public void DisableMorphAnimation()` | method |
| `SetMorphBuffer` | `public void SetMorphBuffer(float morphKey)` | method |
| `GetNumberOfMorphKeys` | `public int GetNumberOfMorphKeys()` | method |
| `SetVectorArgument` | `public void SetVectorArgument(float x, float y, float z, float w)` | method |
| `GetMorphAnimLeftPoints` | `public void GetMorphAnimLeftPoints(Vec3[]leftPoints)` | method |
| `GetMorphAnimRightPoints` | `public void GetMorphAnimRightPoints(Vec3[]rightPoints)` | method |
| `GetMorphAnimCenterPoints` | `public void GetMorphAnimCenterPoints(Vec3[]centerPoints)` | method |
| `SetForcedVelocity` | `public void SetForcedVelocity(in Vec3 forcedVelocity)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameEntityComponent](../GameEntityComponent/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
