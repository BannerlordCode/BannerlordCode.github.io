---
title: "MapTrackerProvider"
description: "MapTrackerProvider: a public class in SandBox.ViewModelCollection; 5 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs."
---
# MapTrackerProvider

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapTrackerProvider`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs`

## Overview

MapTrackerProvider lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs. It is a public class; the inheritance chain is MapTrackerProvider. It exposes 5 public/protected members: 2 methods, 1 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTrackerProvider is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map.Tracker) the module directory; inheritance chain MapTrackerProvider. The surface is method-led (methods 2/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnTrackerAddedOrRemoved` | `public event MapTrackerProvider.OnTrackerAddedOrRemovedDelegate OnTrackerAddedOrRemoved` | event |
| `MapTrackerProvider` | `public MapTrackerProvider()` | constructor |
| `MapTrackerItemVM[]GetTrackers` | `public MapTrackerItemVM[]GetTrackers()` | method |
| `OnTrackerAddedOrRemovedDelegate` | `public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added);` | method |
| `OnTrackerAddedOrRemovedDelegate` | `public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added)` | nested type |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapArmyTrackItemVM](../MapArmyTrackItemVM)
- [same namespace MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM)
- [same namespace MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM)
- [same namespace MapTrackerCollectionVM](../MapTrackerCollectionVM)
