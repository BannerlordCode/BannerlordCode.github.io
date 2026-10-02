---
title: "WorldPosition"
description: "WorldPosition: a public struct in TaleWorlds.Engine; 25 exposed members (16 methods, 5 properties, 1 fields). Canonical bucket engine. Source: TaleWorlds.Engine/WorldPosition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WorldPosition

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WorldPosition`
**File:** `TaleWorlds.Engine/WorldPosition.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

WorldPosition lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/WorldPosition.cs. It is a public struct; the inheritance chain is WorldPosition. It exposes 25 public/protected members: 16 methods, 5 properties, 1 fields, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorldPosition lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain WorldPosition. The surface is method-led (methods 16/25, properties 5/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/WorldPosition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AsVec2` | `public Vec2 AsVec2` | property |
| `X` | `public float X` | property |
| `Y` | `public float Y` | property |
| `IsValid` | `public bool IsValid` | property |
| `WorldPosition` | `public WorldPosition(Scene scene, Vec3 position)` | constructor |
| `WorldPosition` | `public WorldPosition(Scene scene, UIntPtr navMesh, Vec3 position, bool hasValidZ)` | constructor |
| `SetVec3` | `public void SetVec3(UIntPtr navMesh, Vec3 position, bool hasValidZ)` | method |
| `GetNavMesh` | `public UIntPtr GetNavMesh()` | method |
| `GetNavMeshMT` | `public UIntPtr GetNavMeshMT()` | method |
| `GetNearestNavMesh` | `public UIntPtr GetNearestNavMesh()` | method |
| `GetNavMeshZ` | `public float GetNavMeshZ()` | method |
| `GetNavMeshZMT` | `public float GetNavMeshZMT()` | method |
| `GetGroundZ` | `public float GetGroundZ()` | method |
| `GetGroundZMT` | `public float GetGroundZMT()` | method |
| `GetNavMeshVec3` | `public Vec3 GetNavMeshVec3()` | method |
| `GetNavMeshVec3MT` | `public Vec3 GetNavMeshVec3MT()` | method |
| `GetGroundVec3` | `public Vec3 GetGroundVec3()` | method |
| `GetGroundVec3MT` | `public Vec3 GetGroundVec3MT()` | method |
| `GetVec3WithoutValidity` | `public Vec3 GetVec3WithoutValidity()` | method |
| `SetVec2MT` | `public void SetVec2MT(Vec2 value)` | method |
| `SetVec2` | `public void SetVec2(Vec2 value)` | method |
| `DistanceSquaredWithLimit` | `public float DistanceSquaredWithLimit(in Vec3 targetPoint, float limitSquared)` | method |
| `Invalid` | `public static readonly WorldPosition Invalid` | field |
| `WorldPositionEnforcedCache` | `public enum WorldPositionEnforcedCache` | property |
| `WorldPositionEnforcedCache` | `public enum WorldPositionEnforcedCache` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
