---
title: "MapArmyTrackItemVM"
description: "MapArmyTrackItemVM: a public class in SandBox.ViewModelCollection, inheriting MapTrackerItemVM<Army>; 6 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox.ViewModelCollection/Map/Tracker/MapArmyTrackItemVM.cs."
---
# MapArmyTrackItemVM

**Namespace:** `SandBox.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapArmyTrackItemVM : MapTrackerItemVM<Army>`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapArmyTrackItemVM.cs`

## Overview

MapArmyTrackItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Map/Tracker/MapArmyTrackItemVM.cs. It is a public class, implementing/inheriting MapTrackerItemVM<Army>; the inheritance chain is MapArmyTrackItemVM → MapTrackerItemVM → ViewModel. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapArmyTrackItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Map.Tracker) the module directory; inheritance chain MapArmyTrackItemVM → MapTrackerItemVM → ViewModel. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Map/Tracker/MapArmyTrackItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapArmyTrackItemVM` | `public MapArmyTrackItemVM(Army trackableObject) : base(trackableObject)` | constructor |
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
- [same namespace MapMarkerTrackerItemVM](../MapMarkerTrackerItemVM)
- [same namespace MapMobilePartyTrackItemVM](../MapMobilePartyTrackItemVM)
- [same namespace MapTrackerCollectionVM](../MapTrackerCollectionVM)
- [same namespace MapTrackerProvider](../MapTrackerProvider)
