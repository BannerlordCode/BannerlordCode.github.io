---
title: "IGauntletMapEventVisualHandler"
description: "IGauntletMapEventVisualHandler: a public interface in SandBox.GauntletUI; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs."
---
# IGauntletMapEventVisualHandler

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public interface IGauntletMapEventVisualHandler`
**File:** `SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs`

## Overview

IGauntletMapEventVisualHandler lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs. It is a public interface; the inheritance chain is IGauntletMapEventVisualHandler. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IGauntletMapEventVisualHandler is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain IGauntletMapEventVisualHandler. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnNewEventStarted` | `void OnNewEventStarted(GauntletMapEventVisual newEvent);` | method |
| `OnInitialized` | `void OnInitialized(GauntletMapEventVisual newEvent);` | method |
| `OnEventEnded` | `void OnEventEnded(GauntletMapEventVisual newEvent);` | method |
| `OnEventVisibilityChanged` | `void OnEventVisibilityChanged(GauntletMapEventVisual visibilityChangedEvent);` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
