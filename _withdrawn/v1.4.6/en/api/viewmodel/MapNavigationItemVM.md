---
title: "MapNavigationItemVM"
description: "MapNavigationItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar, inheriting ViewModel; 12 exposed members (4 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapNavigationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapNavigationItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

MapNavigationItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapNavigationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNavigationItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`, inheritance chain MapNavigationItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapNavigationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapBarShortcuts](../MapBarShortcuts/)
- [same namespace MapBarVM](../MapBarVM/)
- [same namespace MapInfoItemVM](../MapInfoItemVM/)
- [same namespace MapInfoVM](../MapInfoVM/)
