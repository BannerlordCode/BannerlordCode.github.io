---
title: "MapTracksVisualManager"
description: "MapTracksVisualManager: a public class in SandBox.View, inheriting EntityVisualManagerBase<Track>; 9 exposed members (6 methods, 2 properties, 0 fields). Source: SandBox.View/Map/Managers/MapTracksVisualManager.cs."
---
# MapTracksVisualManager

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public class MapTracksVisualManager : EntityVisualManagerBase<Track>`
**File:** `SandBox.View/Map/Managers/MapTracksVisualManager.cs`

## Overview

MapTracksVisualManager lives in the SandBox.View module, source file SandBox.View/Map/Managers/MapTracksVisualManager.cs. It is a public class, implementing/inheriting EntityVisualManagerBase<Track>; the inheritance chain is MapTracksVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTracksVisualManager is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Managers) the module directory; inheritance chain MapTracksVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. IEntityComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Managers/MapTracksVisualManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MapTracksVisualManager Current` | property |
| `Priority` | `public override int Priority` | property |
| `MapTracksVisualManager` | `public MapTracksVisualManager()` | constructor |
| `OnVisualTick` | `public override void OnVisualTick(MapScreen screen, float realDt, float dt)` | method |
| `OnVisualIntersected` | `public override bool OnVisualIntersected(Ray mouseRay, UIntPtr[]intersectedEntityIDs, Intersection[]intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)` | method |
| `OnGameLoadFinished` | `public override void OnGameLoadFinished()` | method |
| `MapEntityVisual` | `public override MapEntityVisual<Track>GetVisualOfEntity(Track entity)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EntityVisualManagerBase](../EntityVisualManagerBase)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase__1)
- [same namespace MapWeatherVisualManager](../MapWeatherVisualManager)
- [same namespace MobilePartyVisualManager](../MobilePartyVisualManager)
