---
title: "GauntletMapSiegeOverlayView"
description: "GauntletMapSiegeOverlayView: a public class in SandBox.GauntletUI, inheriting MapView; 7 exposed members (7 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapSiegeOverlayView.cs."
---
# GauntletMapSiegeOverlayView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapSiegeOverlayView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapSiegeOverlayView.cs`

## Overview

GauntletMapSiegeOverlayView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapSiegeOverlayView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletMapSiegeOverlayView → MapView. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapSiegeOverlayView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapSiegeOverlayView → MapView. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. MapView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapSiegeOverlayView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnMapScreenUpdate` | `protected override void OnMapScreenUpdate(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |
| `OnSiegeEngineClick` | `protected override void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)` | method |
| `OnMapTerrainClick` | `protected override void OnMapTerrainClick()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
