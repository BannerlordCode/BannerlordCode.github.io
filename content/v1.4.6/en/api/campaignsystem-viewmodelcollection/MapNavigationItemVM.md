---
title: "MapNavigationItemVM"
description: "MapNavigationItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 12 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs."
---
# MapNavigationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNavigationItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs`

## Overview

MapNavigationItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapNavigationItemVM → ViewModel. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNavigationItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar) the module directory; inheritance chain MapNavigationItemVM → ViewModel. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapNavigationItemVM` | `public MapNavigationItemVM(INavigationElement navigationElement)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshStates` | `public void RefreshStates(bool forceRefresh = false)` | method |
| `ExecuteOpen` | `public void ExecuteOpen()` | method |
| `ExecuteGoToLink` | `public void ExecuteGoToLink()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsActive` | `public bool IsActive` | property |
| `HasAlert` | `public bool HasAlert` | property |
| `ItemId` | `public string ItemId` | property |
| `AlertText` | `public string AlertText` | property |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | property |
| `AlertTooltip` | `public BasicTooltipViewModel AlertTooltip` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapBarShortcuts](../MapBarShortcuts)
- [same namespace MapBarVM](../MapBarVM)
- [same namespace MapInfoItemVM](../MapInfoItemVM)
- [same namespace MapInfoVM](../MapInfoVM)
