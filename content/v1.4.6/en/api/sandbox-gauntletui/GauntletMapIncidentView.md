---
title: "GauntletMapIncidentView"
description: "GauntletMapIncidentView: a public class in SandBox.GauntletUI, inheriting MapIncidentView; 9 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapIncidentView.cs."
---
# GauntletMapIncidentView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapIncidentView : MapIncidentView`
**File:** `SandBox.GauntletUI/Map/GauntletMapIncidentView.cs`

## Overview

GauntletMapIncidentView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapIncidentView.cs. It is a public class, implementing/inheriting MapIncidentView; the inheritance chain is GauntletMapIncidentView → MapIncidentView. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapIncidentView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapIncidentView → MapIncidentView. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. MapIncidentView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapIncidentView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMapIncidentView` | `public GauntletMapIncidentView(Incident incident) : base(incident)` | constructor |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `OnMenuModeTick` | `protected override void OnMenuModeTick(float dt)` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `protected override bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
