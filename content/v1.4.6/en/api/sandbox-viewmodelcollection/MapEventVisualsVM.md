---
title: "MapEventVisualsVM"
description: "MapEventVisualsVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 6 exposed members (4 methods, 1 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs."
---
# MapEventVisualsVM

**Namespace:** `SandBox.ViewModelCollection.Map`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapEventVisualsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs`

## Overview

MapEventVisualsVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapEventVisualsVM → ViewModel. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapEventVisualsVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map) the module directory; inheritance chain MapEventVisualsVM → ViewModel. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapEventVisualsVM` | `public MapEventVisualsVM(Camera mapCamera)` | constructor |
| `Update` | `public void Update(float dt)` | method |
| `OnMapEventVisibilityChanged` | `public void OnMapEventVisibilityChanged(MapEvent mapEvent)` | method |
| `OnMapEventStarted` | `public void OnMapEventStarted(MapEvent mapEvent)` | method |
| `OnMapEventEnded` | `public void OnMapEventEnded(MapEvent mapEvent)` | method |
| `MBBindingList` | `public MBBindingList<MapEventVisualItemVM>MapEvents` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapEventVisualItemVM](../MapEventVisualItemVM)
