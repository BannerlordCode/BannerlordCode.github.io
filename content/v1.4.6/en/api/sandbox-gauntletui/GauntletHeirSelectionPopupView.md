---
title: "GauntletHeirSelectionPopupView"
description: "GauntletHeirSelectionPopupView: a public class in SandBox.GauntletUI, inheriting MapView; 10 exposed members (9 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs."
---
# GauntletHeirSelectionPopupView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletHeirSelectionPopupView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs`

## Overview

GauntletHeirSelectionPopupView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletHeirSelectionPopupView → MapView. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletHeirSelectionPopupView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletHeirSelectionPopupView → MapView. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. MapView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletHeirSelectionPopupView` | `public GauntletHeirSelectionPopupView(Dictionary<Hero, int>heirApparents)` | constructor |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnMenuModeTick` | `protected override void OnMenuModeTick(float dt)` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |
| `IsEscaped` | `protected override bool IsEscaped()` | method |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `protected override bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
- [same namespace GauntletMapBattleSimulationView](../GauntletMapBattleSimulationView)
