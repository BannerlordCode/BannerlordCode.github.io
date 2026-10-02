---
title: "GauntletMapCheatsView"
description: "GauntletMapCheatsView: a public class in SandBox.GauntletUI, inheriting MapCheatsView; 8 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapCheatsView.cs."
---
# GauntletMapCheatsView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapCheatsView : MapCheatsView`
**File:** `SandBox.GauntletUI/Map/GauntletMapCheatsView.cs`

## Overview

GauntletMapCheatsView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapCheatsView.cs. It is a public class, implementing/inheriting MapCheatsView; the inheritance chain is GauntletMapCheatsView → MapCheatsView. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapCheatsView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapCheatsView → MapCheatsView. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MapCheatsView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapCheatsView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `IsEscaped` | `protected override bool IsEscaped()` | method |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `OnMenuModeTick` | `protected override void OnMenuModeTick(float dt)` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
