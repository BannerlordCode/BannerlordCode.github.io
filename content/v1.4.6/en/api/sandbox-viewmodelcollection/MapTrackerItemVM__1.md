---
title: "MapTrackerItemVM<T>"
description: "MapTrackerItemVM<T>: a public class in SandBox.ViewModelCollection, inheriting MapTrackerItemVM; 7 exposed members (5 methods, 1 properties, 0 fields). Source: SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs."
---
# MapTrackerItemVM<T>

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MapTrackerItemVM<T>: MapTrackerItemVM where T : ITrackableCampaignObject`
**File:** `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs`

## Overview

MapTrackerItemVM<T> lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs. It is a public class (abstract), implementing/inheriting MapTrackerItemVM; the inheritance chain is MapTrackerItemVM → MapTrackerItemVM → ViewModel. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTrackerItemVM<T> is a top-level type in SandBox.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker) the module directory; inheritance chain MapTrackerItemVM → MapTrackerItemVM → ViewModel. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TrackedObject` | `public new T TrackedObject` | property |
| `MapTrackerItemVM` | `protected MapTrackerItemVM(T trackableObject) : base(trackableObject)` | constructor |
| `OnUpdateProperties` | `protected sealed override void OnUpdateProperties()` | method |
| `OnUpdatePosition` | `protected sealed override void OnUpdatePosition(float screenX, float screenY, float screenW)` | method |
| `OnToggleTrack` | `protected sealed override void OnToggleTrack()` | method |
| `OnGoToPosition` | `protected sealed override void OnGoToPosition()` | method |
| `OnRefreshBinding` | `protected sealed override void OnRefreshBinding()` | method |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapTrackerItemVM](../MapTrackerItemVM)
