---
title: "MapEventVisualsVM"
description: "MapEventVisualsVM: a public class in SandBox.ViewModelCollection.Map, inheriting ViewModel; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapEventVisualsVM

**Namespace:** `SandBox.ViewModelCollection.Map`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapEventVisualsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapEventVisualsVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapEventVisualsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapEventVisualsVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Map`, inheritance chain MapEventVisualsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapEventVisualsVM` | `public MapEventVisualsVM(Camera mapCamera)` | constructor |
| `Update` | `public void Update(float dt)` | method |
| `OnMapEventVisibilityChanged` | `public void OnMapEventVisibilityChanged(MapEvent mapEvent)` | method |
| `OnMapEventStarted` | `public void OnMapEventStarted(MapEvent mapEvent)` | method |
| `OnMapEventEnded` | `public void OnMapEventEnded(MapEvent mapEvent)` | method |
| `MBBindingList` | `public MBBindingList<MapEventVisualItemVM>MapEvents` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapEventVisualItemVM](../MapEventVisualItemVM/)
