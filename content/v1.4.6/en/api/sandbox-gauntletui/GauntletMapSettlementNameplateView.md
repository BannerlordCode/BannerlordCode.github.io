---
title: "GauntletMapSettlementNameplateView"
description: "GauntletMapSettlementNameplateView: a public class in SandBox.GauntletUI, inheriting MapView, IGauntletMapEventVisualHandler; 6 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapSettlementNameplateView.cs."
---
# GauntletMapSettlementNameplateView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapSettlementNameplateView : MapView, IGauntletMapEventVisualHandler`
**File:** `SandBox.GauntletUI/Map/GauntletMapSettlementNameplateView.cs`

## Overview

GauntletMapSettlementNameplateView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapSettlementNameplateView.cs. It is a public class, implementing/inheriting MapView, IGauntletMapEventVisualHandler; the inheritance chain is GauntletMapSettlementNameplateView → MapView. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapSettlementNameplateView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapSettlementNameplateView → MapView. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MapView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapSettlementNameplateView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnResume` | `protected override void OnResume()` | method |
| `OnMapScreenUpdate` | `protected override void OnMapScreenUpdate(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IGauntletMapEventVisualHandler](../IGauntletMapEventVisualHandler)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
