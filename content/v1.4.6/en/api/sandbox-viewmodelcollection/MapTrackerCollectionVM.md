---
title: "MapTrackerCollectionVM"
description: "MapTrackerCollectionVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 5 exposed members (3 methods, 1 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs."
---
# MapTrackerCollectionVM

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapTrackerCollectionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs`

## Overview

MapTrackerCollectionVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapTrackerCollectionVM → ViewModel. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTrackerCollectionVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map.Tracker) the module directory; inheritance chain MapTrackerCollectionVM → ViewModel. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapTrackerCollectionVM` | `public MapTrackerCollectionVM()` | constructor |
| `Tick` | `public void Tick(float dt)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `UpdateProperties` | `public void UpdateProperties()` | method |
| `MBBindingList` | `public MBBindingList<MapTrackerItemVM>Trackers` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapArmyTrackItemVM](../MapArmyTrackItemVM)
- [same namespace MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM)
- [same namespace MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM)
- [same namespace MapTrackerProvider](../MapTrackerProvider)
