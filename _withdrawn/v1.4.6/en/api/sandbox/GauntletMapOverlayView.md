---
title: "GauntletMapOverlayView"
description: "GauntletMapOverlayView: a public class in SandBox.GauntletUI.Map, inheriting MapView; 16 exposed members (14 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapOverlayView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapOverlayView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapOverlayView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapOverlayView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapOverlayView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapOverlayView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletMapOverlayView → MapView → SandboxView. It exposes 16 public/protected members: 14 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapOverlayView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapOverlayView → MapView → SandboxView. The surface is method-led (methods 14/16, properties 1/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapOverlayView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapView](../MapView/)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
