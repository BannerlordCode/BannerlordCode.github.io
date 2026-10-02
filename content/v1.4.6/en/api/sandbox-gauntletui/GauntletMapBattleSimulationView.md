---
title: "GauntletMapBattleSimulationView"
description: "GauntletMapBattleSimulationView: a public class in SandBox.GauntletUI, inheriting MapView; 6 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs."
---
# GauntletMapBattleSimulationView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapBattleSimulationView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs`

## Overview

GauntletMapBattleSimulationView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletMapBattleSimulationView → MapView. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapBattleSimulationView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapBattleSimulationView → MapView. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. MapView on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMapBattleSimulationView` | `public GauntletMapBattleSimulationView(SPScoreboardVM dataSource)` | constructor |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnMapScreenUpdate` | `protected override void OnMapScreenUpdate(float dt)` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
