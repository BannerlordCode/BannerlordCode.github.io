---
title: "MapTrackerCollectionVM"
description: "MapTrackerCollectionVM: a public class in SandBox.ViewModelCollection.Map.Tracker, inheriting ViewModel; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapTrackerCollectionVM

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapTrackerCollectionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapTrackerCollectionVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapTrackerCollectionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTrackerCollectionVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Map.Tracker`, inheritance chain MapTrackerCollectionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapTrackerCollectionVM` | `public MapTrackerCollectionVM()` | constructor |
| `Tick` | `public void Tick(float dt)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `UpdateProperties` | `public void UpdateProperties()` | method |
| `MBBindingList` | `public MBBindingList<MapTrackerItemVM>Trackers` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapArmyTrackItemVM](../MapArmyTrackItemVM/)
- [same namespace MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM/)
- [same namespace MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM/)
- [same namespace MapTrackerProvider](../MapTrackerProvider/)
