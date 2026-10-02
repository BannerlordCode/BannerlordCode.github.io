---
title: "GauntletMapEventVisualCreator"
description: "GauntletMapEventVisualCreator: a public class in SandBox.GauntletUI, inheriting IMapEventVisualCreator; 3 exposed members (2 methods, 0 properties, 1 fields). Source: SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs."
---
# GauntletMapEventVisualCreator

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapEventVisualCreator : IMapEventVisualCreator`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs`

## Overview

GauntletMapEventVisualCreator lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs. It is a public class, implementing/inheriting IMapEventVisualCreator; the inheritance chain is GauntletMapEventVisualCreator → IMapEventVisualCreator. It exposes 3 public/protected members: 2 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapEventVisualCreator is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.Map) the module directory; inheritance chain GauntletMapEventVisualCreator → IMapEventVisualCreator. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. IMapEventVisualCreator on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateMapEventVisual` | `public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)` | method |
| `IEnumerable` | `public IEnumerable<GauntletMapEventVisual>GetCurrentEvents()` | method |
| `List` | `public List<IGauntletMapEventVisualHandler>Handlers` | field |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer)
- [same namespace GauntletMapBarView](../GauntletMapBarView)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView)
