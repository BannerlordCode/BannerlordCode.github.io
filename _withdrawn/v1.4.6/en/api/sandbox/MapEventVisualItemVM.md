---
title: "MapEventVisualItemVM"
description: "MapEventVisualItemVM: a public class in SandBox.ViewModelCollection.Map, inheriting ViewModel; 9 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapEventVisualItemVM

**Namespace:** `SandBox.ViewModelCollection.Map`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapEventVisualItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapEventVisualItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapEventVisualItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapEventVisualItemVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Map`, inheritance chain MapEventVisualItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapEvent` | `public MapEvent MapEvent` | property |
| `MapEventVisualItemVM` | `public MapEventVisualItemVM(Camera mapCamera, MapEvent mapEvent)` | constructor |
| `UpdateProperties` | `public void UpdateProperties()` | method |
| `ParallelUpdatePosition` | `public void ParallelUpdatePosition()` | method |
| `DetermineIsVisibleOnMap` | `public void DetermineIsVisibleOnMap()` | method |
| `UpdateBindingProperties` | `public void UpdateBindingProperties()` | method |
| `Position` | `public Vec2 Position` | property |
| `EventType` | `public int EventType` | property |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapEventVisualsVM](../MapEventVisualsVM/)
