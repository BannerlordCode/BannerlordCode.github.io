---
title: "SettlementVisualManager"
description: "SettlementVisualManager: a public class in SandBox.View.Map.Managers, inheriting EntityVisualManagerBase<PartyBase>; 10 exposed members (8 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Map/Managers/SettlementVisualManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementVisualManager

**Namespace:** `SandBox.View.Map.Managers`
**Module:** `SandBox.View`
**Type:** `public class SettlementVisualManager : EntityVisualManagerBase<PartyBase>`
**File:** `SandBox.View/Map/Managers/SettlementVisualManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SettlementVisualManager lives in the SandBox.View module, source file SandBox.View/Map/Managers/SettlementVisualManager.cs. It is a public class, implementing/inheriting EntityVisualManagerBase<PartyBase>; the inheritance chain is SettlementVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. It exposes 10 public/protected members: 8 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementVisualManager lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map.Managers`, inheritance chain SettlementVisualManager → EntityVisualManagerBase → CampaignEntityVisualComponent → IEntityComponent. The surface is method-led (methods 8/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Managers/SettlementVisualManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Priority` | `public override int Priority` | property |
| `Current` | `public static SettlementVisualManager Current` | property |
| `OnTick` | `public override void OnTick(float realDt, float dt)` | method |
| `OnVisualIntersected` | `public override bool OnVisualIntersected(Ray mouseRay, UIntPtr[]intersectedEntityIDs, Intersection[]intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)` | method |
| `OnFrameTick` | `public override void OnFrameTick(float dt)` | method |
| `OnMouseClick` | `public override bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)` | method |
| `MapEntityVisual` | `public override MapEntityVisual<PartyBase>GetVisualOfEntity(PartyBase partyBase)` | method |
| `GetSettlementVisual` | `public SettlementVisual GetSettlementVisual(Settlement settlement)` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EntityVisualManagerBase](../EntityVisualManagerBase/)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase/)
- [same namespace EntityVisualManagerBase](../EntityVisualManagerBase__1/)
- [same namespace MapTracksVisualManager](../MapTracksVisualManager/)
- [same namespace MapWeatherVisualManager](../MapWeatherVisualManager/)
