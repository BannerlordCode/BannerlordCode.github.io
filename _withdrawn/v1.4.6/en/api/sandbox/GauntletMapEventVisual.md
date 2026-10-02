---
title: "GauntletMapEventVisual"
description: "GauntletMapEventVisual: a public class in SandBox.GauntletUI.Map, inheriting IMapEventVisual; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapEventVisual.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapEventVisual

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapEventVisual : IMapEventVisual`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisual.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapEventVisual lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapEventVisual.cs. It is a public class, implementing/inheriting IMapEventVisual; the inheritance chain is GauntletMapEventVisual → IMapEventVisual. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapEventVisual lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapEventVisual → IMapEventVisual. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapEventVisual.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapEvent` | `public MapEvent MapEvent` | property |
| `WorldPosition` | `public Vec2 WorldPosition` | property |
| `IsVisible` | `public bool IsVisible` | property |
| `GauntletMapEventVisual` | `public GauntletMapEventVisual(MapEvent mapEvent, Action<GauntletMapEventVisual>onInitialized, Action<GauntletMapEventVisual>onVisibilityChanged, Action<GauntletMapEventVisual>onDeactivate)` | constructor |
| `Initialize` | `public void Initialize(CampaignVec2 position, bool isVisible)` | method |
| `OnMapEventEnd` | `public void OnMapEventEnd()` | method |
| `SetVisibility` | `public void SetVisibility(bool isVisible)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMapEventVisual](../../campaign/IMapEventVisual/)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
