---
title: "GauntletMapIncidentView"
description: "GauntletMapIncidentView: a public class in SandBox.GauntletUI.Map, inheriting MapIncidentView; 9 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapIncidentView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapIncidentView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapIncidentView : MapIncidentView`
**File:** `SandBox.GauntletUI/Map/GauntletMapIncidentView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapIncidentView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapIncidentView.cs. It is a public class, implementing/inheriting MapIncidentView; the inheritance chain is GauntletMapIncidentView → MapIncidentView → MapView → SandboxView. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapIncidentView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapIncidentView → MapIncidentView → MapView → SandboxView. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapIncidentView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapIncidentView](../MapIncidentView/)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
