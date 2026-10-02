---
title: "GauntletMapOverlayView"
description: "GauntletMapOverlayView: a public class in SandBox.GauntletUI, inheriting MapView; 16 exposed members (14 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapOverlayView.cs."
---
# GauntletMapOverlayView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapOverlayView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapOverlayView.cs`

## Overview

GauntletMapOverlayView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapOverlayView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletMapOverlayView → MapView. It exposes 16 public/protected members: 14 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapOverlayView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapOverlayView → MapView. The surface is method-led (methods 14/16, properties 1/16), so it mostly exposes operations. MapView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapOverlayView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInArmyManagement` | `public bool IsInArmyManagement` | property |
| `GauntletMapOverlayView` | `public GauntletMapOverlayView(MapScreen.MapOverlayType type)` | constructor |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `GetOverlay` | `public GameMenuOverlay GetOverlay(MapScreen.MapOverlayType mapOverlayType)` | method |
| `OnArmyLeft` | `protected override void OnArmyLeft()` | method |
| `GetTutorialContext` | `protected override TutorialContexts GetTutorialContext()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |
| `OnHourlyTick` | `protected override void OnHourlyTick()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `IsEscaped` | `protected override bool IsEscaped()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `OnMapScreenUpdate` | `protected override void OnMapScreenUpdate(float dt)` | method |
| `OnMenuModeTick` | `protected override void OnMenuModeTick(float dt)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
