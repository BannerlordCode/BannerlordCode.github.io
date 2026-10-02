---
title: "MapTrackerItemVM"
description: "MapTrackerItemVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 27 exposed members (17 methods, 9 properties, 0 fields). Source: SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs."
---
# MapTrackerItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public abstract class MapTrackerItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs`

## Overview

MapTrackerItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is MapTrackerItemVM → ViewModel. It exposes 27 public/protected members: 17 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTrackerItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker) the module directory; inheritance chain MapTrackerItemVM → ViewModel. The surface is method-led (methods 17/27, properties 9/27), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Tracker/MapTrackerItemVM.2.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapTrackerItemVM` | `public MapTrackerItemVM(ITrackableCampaignObject trackedObject)` | constructor |
| `OnShowTooltip` | `protected abstract void OnShowTooltip();` | method |
| `OnUpdateProperties` | `protected abstract void OnUpdateProperties();` | method |
| `OnUpdatePosition` | `protected abstract void OnUpdatePosition(float screenX, float screenY, float screenW);` | method |
| `OnToggleTrack` | `protected abstract void OnToggleTrack();` | method |
| `OnGoToPosition` | `protected abstract void OnGoToPosition();` | method |
| `OnRefreshBinding` | `protected abstract void OnRefreshBinding();` | method |
| `IsVisibleOnMap` | `protected abstract bool IsVisibleOnMap();` | method |
| `GetCanToggleTrack` | `protected abstract bool GetCanToggleTrack();` | method |
| `GetTrackerType` | `protected abstract string GetTrackerType();` | method |
| `GetRelatedQuests` | `protected abstract CampaignUIHelper.IssueQuestFlags GetRelatedQuests();` | method |
| `UpdateProperties` | `public void UpdateProperties()` | method |
| `UpdatePosition` | `public void UpdatePosition(float screenX, float screenY, float screenW)` | method |
| `ExecuteToggleTrack` | `public void ExecuteToggleTrack()` | method |
| `ExecuteGoToPosition` | `public void ExecuteGoToPosition()` | method |
| `ExecuteShowTooltip` | `public void ExecuteShowTooltip()` | method |
| `ExecuteHideTooltip` | `public void ExecuteHideTooltip()` | method |
| `RefreshBinding` | `public void RefreshBinding()` | method |
| `IsTracked` | `public bool IsTracked` | property |
| `CanToggleTrack` | `public bool CanToggleTrack` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsBehind` | `public bool IsBehind` | property |
| `Name` | `public string Name` | property |
| `TrackerType` | `public string TrackerType` | property |
| `PartyPosition` | `public Vec2 PartyPosition` | property |
| `FactionVisual` | `public BannerImageIdentifierVM FactionVisual` | property |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapTrackerItemVM](../MapTrackerItemVM__1)
