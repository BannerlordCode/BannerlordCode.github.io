---
title: "GauntletMapEscapeMenuView"
description: "GauntletMapEscapeMenuView: a public class in SandBox.GauntletUI, inheriting MapView; 7 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapEscapeMenuView.cs."
---
# GauntletMapEscapeMenuView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapEscapeMenuView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapEscapeMenuView.cs`

## Overview

GauntletMapEscapeMenuView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapEscapeMenuView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletMapEscapeMenuView → MapView. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapEscapeMenuView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapEscapeMenuView → MapView. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. MapView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapEscapeMenuView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMapEscapeMenuView` | `public GauntletMapEscapeMenuView(List<EscapeMenuItemVM>items)` | constructor |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `IsEscaped` | `protected override bool IsEscaped()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `GetTutorialContext` | `protected override TutorialContexts GetTutorialContext()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
