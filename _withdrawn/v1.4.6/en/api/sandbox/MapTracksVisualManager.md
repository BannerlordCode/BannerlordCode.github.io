---
title: "MapTracksVisualManager"
description: "MapTracksVisualManager: a public class in SandBox.View.Map.Managers, inheriting EntityVisualManagerBase<Track>; 9 exposed members (6 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Map/Managers/MapTracksVisualManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapTracksVisualManager

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public class MapTracksVisualManager : EntityVisualManagerBase<Track>`
**File:** `SandBox.View/Map/Managers/MapTracksVisualManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapTracksVisualManager lives in the SandBox.View module, source file SandBox.View/Map/Managers/MapTracksVisualManager.cs. It is a public class, implementing/inheriting EntityVisualManagerBase<Track>; the inheritance chain is MapTracksVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTracksVisualManager lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map.Managers`, inheritance chain MapTracksVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Managers/MapTracksVisualManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EntityVisualManagerBase](../EntityVisualManagerBase/)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase/)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase__1/)
- [same namespace MapWeatherVisualManager](../MapWeatherVisualManager/)
- [same namespace MobilePartyVisualManager](../MobilePartyVisualManager/)
