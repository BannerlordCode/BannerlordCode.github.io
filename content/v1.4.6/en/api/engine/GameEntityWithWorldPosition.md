---
title: "GameEntityWithWorldPosition"
description: "GameEntityWithWorldPosition: a public class in TaleWorlds.Engine; 9 exposed members (4 methods, 4 properties, 0 fields). Source: TaleWorlds.Engine/GameEntityWithWorldPosition.cs."
---
# GameEntityWithWorldPosition

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class GameEntityWithWorldPosition`
**File:** `TaleWorlds.Engine/GameEntityWithWorldPosition.cs`

## Overview

GameEntityWithWorldPosition lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/GameEntityWithWorldPosition.cs. It is a public class; the inheritance chain is GameEntityWithWorldPosition. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameEntityWithWorldPosition is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain GameEntityWithWorldPosition. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/GameEntityWithWorldPosition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameEntityWithWorldPosition` | `public GameEntityWithWorldPosition(WeakGameEntity gameEntity)` | constructor |
| `GameEntity` | `public WeakGameEntity GameEntity` | property |
| `WorldPosition` | `public WorldPosition WorldPosition` | property |
| `InvalidateWorldPosition` | `public void InvalidateWorldPosition()` | method |
| `WorldFrame` | `public WorldFrame WorldFrame` | property |
| `SetCustomLocalFrame` | `public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)` | method |
| `AsVec2` | `public Vec2 AsVec2` | property |
| `GetNavMesh` | `public UIntPtr GetNavMesh()` | method |
| `GetNavMeshVec3` | `public Vec3 GetNavMeshVec3()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
