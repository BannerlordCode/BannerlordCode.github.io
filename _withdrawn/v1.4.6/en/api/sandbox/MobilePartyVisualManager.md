---
title: "MobilePartyVisualManager"
description: "MobilePartyVisualManager: a public class in SandBox.View.Map.Managers, inheriting EntityVisualManagerBase<PartyBase>; 10 exposed members (8 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Map/Managers/MobilePartyVisualManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MobilePartyVisualManager

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public class MobilePartyVisualManager : EntityVisualManagerBase<PartyBase>`
**File:** `SandBox.View/Map/Managers/MobilePartyVisualManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MobilePartyVisualManager lives in the SandBox.View module, source file SandBox.View/Map/Managers/MobilePartyVisualManager.cs. It is a public class, implementing/inheriting EntityVisualManagerBase<PartyBase>; the inheritance chain is MobilePartyVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. It exposes 10 public/protected members: 8 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MobilePartyVisualManager lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map.Managers`, inheritance chain MobilePartyVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. The surface is method-led (methods 8/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Managers/MobilePartyVisualManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Priority` | `public override int Priority` | property |
| `Current` | `public static MobilePartyVisualManager Current` | property |
| `OnTick` | `public override void OnTick(float realDt, float dt)` | method |
| `ClearVisualMemory` | `public override void ClearVisualMemory()` | method |
| `OnVisualTick` | `public override void OnVisualTick(MapScreen screen, float realDt, float dt)` | method |
| `OnVisualIntersected` | `public override bool OnVisualIntersected(Ray mouseRay, UIntPtr[]intersectedEntityIDs, Intersection[]intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)` | method |
| `MapEntityVisual` | `public override MapEntityVisual<PartyBase>GetVisualOfEntity(PartyBase partyBase)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `GetPartyVisual` | `public MobilePartyVisual GetPartyVisual(PartyBase partyBase)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EntityVisualManagerBase](../EntityVisualManagerBase/)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase/)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase__1/)
- [same namespace MapTracksVisualManager](../MapTracksVisualManager/)
- [same namespace MapWeatherVisualManager](../MapWeatherVisualManager/)
