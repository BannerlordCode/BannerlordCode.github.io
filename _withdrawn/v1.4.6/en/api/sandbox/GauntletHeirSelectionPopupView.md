---
title: "GauntletHeirSelectionPopupView"
description: "GauntletHeirSelectionPopupView: a public class in SandBox.GauntletUI.Map, inheriting MapView; 10 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletHeirSelectionPopupView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletHeirSelectionPopupView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletHeirSelectionPopupView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs. It is a public class, implementing/inheriting MapView; the inheritance chain is GauntletHeirSelectionPopupView → MapView → SandboxView. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletHeirSelectionPopupView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletHeirSelectionPopupView → MapView → SandboxView. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapView](../MapView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
- [same namespace GauntletMapBattleSimulationView](../GauntletMapBattleSimulationView/)
