---
title: "GauntletMapBasicView"
description: "GauntletMapBasicView: a public class in SandBox.GauntletUI, inheriting MapView; 6 exposed members (4 methods, 2 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapBasicView.cs."
---
# GauntletMapBasicView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapBasicView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapBasicView.cs`

## Overview

GauntletMapBasicView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapBasicView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletMapBasicView → MapView. It exposes 6 public/protected members: 4 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapBasicView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapBasicView → MapView. The surface is method-led (methods 4/6, properties 2/6), so it mostly exposes operations. MapView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapBasicView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletLayer` | `public GauntletLayer GauntletLayer` | property |
| `GauntletNameplateLayer` | `public GauntletLayer GauntletNameplateLayer` | property |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBattleSimulationView](../GauntletMapBattleSimulationView)
