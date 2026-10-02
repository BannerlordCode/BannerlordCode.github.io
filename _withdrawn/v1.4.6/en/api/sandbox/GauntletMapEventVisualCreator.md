---
title: "GauntletMapEventVisualCreator"
description: "GauntletMapEventVisualCreator: a public class in SandBox.GauntletUI.Map, inheriting IMapEventVisualCreator; 3 exposed members (2 methods, 0 properties, 1 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapEventVisualCreator

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapEventVisualCreator : IMapEventVisualCreator`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletMapEventVisualCreator lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs. It is a public class, implementing/inheriting IMapEventVisualCreator; the inheritance chain is GauntletMapEventVisualCreator → IMapEventVisualCreator. It exposes 3 public/protected members: 2 methods, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletMapEventVisualCreator lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Map`, inheritance chain GauntletMapEventVisualCreator → IMapEventVisualCreator. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateMapEventVisual` | `public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)` | method |
| `IEnumerable` | `public IEnumerable<GauntletMapEventVisual>GetCurrentEvents()` | method |
| `List` | `public List<IGauntletMapEventVisualHandler>Handlers` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMapEventVisualCreator](../../campaign/IMapEventVisualCreator/)
- [same namespace GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [same namespace GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [same namespace GauntletMapBarView](../GauntletMapBarView/)
- [same namespace GauntletMapBasicView](../GauntletMapBasicView/)
