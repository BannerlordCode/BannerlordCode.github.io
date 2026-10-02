---
title: "GauntletMapConversationBarterView"
description: "GauntletMapConversationBarterView: a public class in SandBox.GauntletUI.Map; 10 exposed members (6 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapConversationBarterView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapConversationBarterView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapConversationBarterView`
**File:** `SandBox.GauntletUI/Map/GauntletMapConversationBarterView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapConversationBarterView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapConversationBarterView.cs. It is a public class; the inheritance chain is GauntletMapConversationBarterView. It exposes 10 public/protected members: 6 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapConversationBarterView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapConversationBarterView. The surface is method-led (methods 6/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapConversationBarterView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsCreated` | `public bool IsCreated` | property |
| `IsActive` | `public bool IsActive` | property |
| `GauntletMapConversationBarterView` | `public GauntletMapConversationBarterView(GauntletLayer layer, GauntletMapConversationBarterView.OnBarterActiveStateChanged onActiveStateChanged)` | constructor |
| `CreateBarterView` | `public void CreateBarterView(BarterData args)` | method |
| `DestroyBarterView` | `public void DestroyBarterView()` | method |
| `Activate` | `public void Activate()` | method |
| `Deactivate` | `public void Deactivate()` | method |
| `TickInput` | `public void TickInput()` | method |
| `OnBarterActiveStateChanged` | `public delegate void OnBarterActiveStateChanged(bool isBarterActive);` | method |
| `OnBarterActiveStateChanged` | `public delegate void OnBarterActiveStateChanged(bool isBarterActive)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
