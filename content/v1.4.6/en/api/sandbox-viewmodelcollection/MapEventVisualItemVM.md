---
title: "MapEventVisualItemVM"
description: "MapEventVisualItemVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 9 exposed members (4 methods, 4 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs."
---
# MapEventVisualItemVM

**Namespace:** `SandBox.ViewModelCollection.Map`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapEventVisualItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs`

## Overview

MapEventVisualItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapEventVisualItemVM → ViewModel. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapEventVisualItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map) the module directory; inheritance chain MapEventVisualItemVM → ViewModel. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapEventVisualsVM](../MapEventVisualsVM)
