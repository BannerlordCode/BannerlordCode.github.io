---
title: "GauntletMapBarGlobalLayer"
description: "GauntletMapBarGlobalLayer: a public class in SandBox.GauntletUI.Map, inheriting GlobalLayer; 11 exposed members (8 methods, 1 properties, 1 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapBarGlobalLayer

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapBarGlobalLayer : GlobalLayer`
**File:** `SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapBarGlobalLayer lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletMapBarGlobalLayer → GlobalLayer → IComparable. It exposes 11 public/protected members: 8 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapBarGlobalLayer lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapBarGlobalLayer → GlobalLayer → IComparable. The surface is method-led (methods 8/11, properties 1/11), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GlobalLayer](../../gui/GlobalLayer/)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
- [same namespace GauntletMapBattleSimulationView](../GauntletMapBattleSimulationView/)
