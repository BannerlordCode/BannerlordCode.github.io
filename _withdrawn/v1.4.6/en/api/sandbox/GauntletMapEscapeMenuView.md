---
title: "GauntletMapEscapeMenuView"
description: "GauntletMapEscapeMenuView: a public class in SandBox.GauntletUI.Map, inheriting MapView; 7 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapEscapeMenuView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapEscapeMenuView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapEscapeMenuView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapEscapeMenuView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapEscapeMenuView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapEscapeMenuView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletMapEscapeMenuView → MapView → SandboxView. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapEscapeMenuView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapEscapeMenuView → MapView → SandboxView. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapEscapeMenuView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GauntletMapEscapeMenuView` | `public GauntletMapEscapeMenuView(List<EscapeMenuItemVM>items)` | constructor |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `IsEscaped` | `protected override bool IsEscaped()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `GetTutorialContext` | `protected override TutorialContexts GetTutorialContext()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapView](../MapView/)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
