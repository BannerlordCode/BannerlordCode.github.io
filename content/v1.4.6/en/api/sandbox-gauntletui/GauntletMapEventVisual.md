---
title: "GauntletMapEventVisual"
description: "GauntletMapEventVisual: a public class in SandBox.GauntletUI, inheriting IMapEventVisual; 7 exposed members (3 methods, 3 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapEventVisual.cs."
---
# GauntletMapEventVisual

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapEventVisual : IMapEventVisual`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisual.cs`

## Overview

GauntletMapEventVisual lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapEventVisual.cs. It is a public class, implementing/inheriting IMapEventVisual; the inheritance chain is GauntletMapEventVisual → IMapEventVisual. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapEventVisual is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapEventVisual → IMapEventVisual. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. IMapEventVisual on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapEventVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapEvent` | `public MapEvent MapEvent` | property |
| `WorldPosition` | `public Vec2 WorldPosition` | property |
| `IsVisible` | `public bool IsVisible` | property |
| `GauntletMapEventVisual` | `public GauntletMapEventVisual(MapEvent mapEvent, Action<GauntletMapEventVisual>onInitialized, Action<GauntletMapEventVisual>onVisibilityChanged, Action<GauntletMapEventVisual>onDeactivate)` | constructor |
| `Initialize` | `public void Initialize(CampaignVec2 position, bool isVisible)` | method |
| `OnMapEventEnd` | `public void OnMapEventEnd()` | method |
| `SetVisibility` | `public void SetVisibility(bool isVisible)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
