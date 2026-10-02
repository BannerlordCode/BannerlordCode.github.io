---
title: "MapArmyTrackItemVM"
description: "MapArmyTrackItemVM: a public class in SandBox.ViewModelCollection.Map.Tracker, inheriting MapTrackerItemVM<Army>; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Map/Tracker/MapArmyTrackItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapArmyTrackItemVM

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapArmyTrackItemVM : MapTrackerItemVM<Army>`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapArmyTrackItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapArmyTrackItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Tracker/MapArmyTrackItemVM.cs. It is a public class, implementing/inheriting MapTrackerItemVM<Army>; the inheritance chain is MapArmyTrackItemVM → MapTrackerItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapArmyTrackItemVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Map.Tracker`, inheritance chain MapArmyTrackItemVM → MapTrackerItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Tracker/MapArmyTrackItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapArmyTrackItemVM` | `public MapArmyTrackItemVM(Army trackableObject) : base(trackableObject)` | constructor |
| `OnShowTooltip` | `protected override void OnShowTooltip()` | method |
| `IsVisibleOnMap` | `protected override bool IsVisibleOnMap()` | method |
| `GetCanToggleTrack` | `protected override bool GetCanToggleTrack()` | method |
| `GetTrackerType` | `protected override string GetTrackerType()` | method |
| `GetRelatedQuests` | `protected override CampaignUIHelper.IssueQuestFlags GetRelatedQuests()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapTrackerItemVM](../../viewmodel/MapTrackerItemVM/)
- [same namespace MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM/)
- [same namespace MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM/)
- [same namespace MapTrackerCollectionVM](../MapTrackerCollectionVM/)
- [same namespace MapTrackerProvider](../MapTrackerProvider/)
