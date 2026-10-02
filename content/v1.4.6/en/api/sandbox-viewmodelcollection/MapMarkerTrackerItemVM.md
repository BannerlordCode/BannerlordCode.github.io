---
title: "MapMarkerTrackerItemVM"
description: "MapMarkerTrackerItemVM: a public class in SandBox.ViewModelCollection, inheriting MapTrackerItemVM<MapMarker>; 6 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/Tracker/MapMarkerTrackerItemVM.cs."
---
# MapMarkerTrackerItemVM

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapMarkerTrackerItemVM : MapTrackerItemVM<MapMarker>`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapMarkerTrackerItemVM.cs`

## Overview

MapMarkerTrackerItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Tracker/MapMarkerTrackerItemVM.cs. It is a public class, implementing/inheriting MapTrackerItemVM<MapMarker>; the inheritance chain is MapMarkerTrackerItemVM → MapTrackerItemVM → ViewModel. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapMarkerTrackerItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map.Tracker) the module directory; inheritance chain MapMarkerTrackerItemVM → MapTrackerItemVM → ViewModel. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Tracker/MapMarkerTrackerItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapMarkerTrackerItemVM` | `public MapMarkerTrackerItemVM(MapMarker marker) : base(marker)` | constructor |
| `OnShowTooltip` | `protected override void OnShowTooltip()` | method |
| `IsVisibleOnMap` | `protected override bool IsVisibleOnMap()` | method |
| `GetCanToggleTrack` | `protected override bool GetCanToggleTrack()` | method |
| `GetTrackerType` | `protected override string GetTrackerType()` | method |
| `GetRelatedQuests` | `protected override CampaignUIHelper.IssueQuestFlags GetRelatedQuests()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapTrackerItemVM](../MapTrackerItemVM)
- [same namespace MapArmyTrackItemVM](../MapArmyTrackItemVM)
- [same namespace MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM)
- [same namespace MapTrackerCollectionVM](../MapTrackerCollectionVM)
- [same namespace MapTrackerProvider](../MapTrackerProvider)
