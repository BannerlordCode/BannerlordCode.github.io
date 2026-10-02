---
title: "GauntletMapBarGlobalLayer"
description: "GauntletMapBarGlobalLayer: a public class in SandBox.GauntletUI, inheriting GlobalLayer; 11 exposed members (8 methods, 1 properties, 1 fields). Source: SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs."
---
# GauntletMapBarGlobalLayer

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapBarGlobalLayer : GlobalLayer`
**File:** `SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs`

## Overview

GauntletMapBarGlobalLayer lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletMapBarGlobalLayer → GlobalLayer. It exposes 11 public/protected members: 8 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapBarGlobalLayer is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapBarGlobalLayer → GlobalLayer. The surface is method-led (methods 8/11, properties 1/11), so it mostly exposes operations. GlobalLayer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInArmyManagement` | `public bool IsInArmyManagement` | property |
| `GauntletMapBarGlobalLayer` | `public GauntletMapBarGlobalLayer(MapScreen mapScreen, INavigationHandler navigationHandler, float contextAlphaModifider)` | constructor |
| `Initialize` | `public void Initialize(MapBarVM dataSource)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `OnMapConversationStarted` | `public void OnMapConversationStarted()` | method |
| `OnMapConversationOver` | `public void OnMapConversationOver()` | method |
| `Refresh` | `public void Refresh()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `HandlePanelSwitchingInput` | `protected virtual bool HandlePanelSwitchingInput(InputContext inputContext)` | method |
| `IsEscaped` | `public bool IsEscaped()` | method |
| `_contextAlphaTarget` | `protected float _contextAlphaTarget` | field |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
- [same namespace GauntletMapBattleSimulationView](../GauntletMapBattleSimulationView)
