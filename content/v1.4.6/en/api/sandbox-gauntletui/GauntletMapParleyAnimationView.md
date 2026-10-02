---
title: "GauntletMapParleyAnimationView"
description: "GauntletMapParleyAnimationView: a public class in SandBox.GauntletUI, inheriting MapParleyAnimationView; 5 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapParleyAnimationView.cs."
---
# GauntletMapParleyAnimationView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapParleyAnimationView : MapParleyAnimationView`
**File:** `SandBox.GauntletUI/Map/GauntletMapParleyAnimationView.cs`

## Overview

GauntletMapParleyAnimationView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapParleyAnimationView.cs. It is a public class, implementing/inheriting MapParleyAnimationView; the inheritance chain is GauntletMapParleyAnimationView → MapParleyAnimationView. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapParleyAnimationView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapParleyAnimationView → MapParleyAnimationView. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. MapParleyAnimationView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapParleyAnimationView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMapParleyAnimationView` | `public GauntletMapParleyAnimationView(PartyBase parleyedParty)` | constructor |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
