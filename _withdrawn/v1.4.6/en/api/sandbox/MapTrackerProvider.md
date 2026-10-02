---
title: "MapTrackerProvider"
description: "MapTrackerProvider: a public class in SandBox.ViewModelCollection.Map.Tracker; 5 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapTrackerProvider

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapTrackerProvider`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapTrackerProvider lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs. It is a public class; the inheritance chain is MapTrackerProvider. It exposes 5 public/protected members: 2 methods, 1 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTrackerProvider lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Map.Tracker`, inheritance chain MapTrackerProvider. The surface is method-led (methods 2/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnTrackerAddedOrRemoved` | `public event MapTrackerProvider.OnTrackerAddedOrRemovedDelegate OnTrackerAddedOrRemoved` | event |
| `MapTrackerProvider` | `public MapTrackerProvider()` | constructor |
| `MapTrackerItemVM[]GetTrackers` | `public MapTrackerItemVM[]GetTrackers()` | method |
| `OnTrackerAddedOrRemovedDelegate` | `public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added);` | method |
| `OnTrackerAddedOrRemovedDelegate` | `public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapArmyTrackItemVM](../MapArmyTrackItemVM/)
- [same namespace MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM/)
- [same namespace MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM/)
- [same namespace MapTrackerCollectionVM](../MapTrackerCollectionVM/)
