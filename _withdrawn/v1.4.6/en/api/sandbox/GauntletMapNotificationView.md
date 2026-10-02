---
title: "GauntletMapNotificationView"
description: "GauntletMapNotificationView: a public class in SandBox.GauntletUI.Map, inheriting MapNotificationView; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapNotificationView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapNotificationView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapNotificationView : MapNotificationView`
**File:** `SandBox.GauntletUI/Map/GauntletMapNotificationView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapNotificationView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapNotificationView.cs. It is a public class, implementing/inheriting MapNotificationView; the inheritance chain is GauntletMapNotificationView → MapNotificationView → MapView → SandboxView. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapNotificationView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapNotificationView → MapNotificationView → MapView → SandboxView. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapNotificationView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateLayout` | `protected override void CreateLayout()` | method |
| `RegisterMapNotificationType` | `public override void RegisterMapNotificationType(Type data, Type item)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnMenuModeTick` | `protected override void OnMenuModeTick(float dt)` | method |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | method |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | method |
| `ResetNotifications` | `public override void ResetNotifications()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapNotificationView](../MapNotificationView/)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
