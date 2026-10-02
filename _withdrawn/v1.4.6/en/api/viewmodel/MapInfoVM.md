---
title: "MapInfoVM"
description: "MapInfoVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar, inheriting ViewModel; 11 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapInfoVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapInfoVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

MapInfoVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapInfoVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapInfoVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`, inheritance chain MapInfoVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapInfoVM` | `public MapInfoVM()` | constructor |
| `CreateItems` | `protected virtual void CreateItems()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Tick` | `public void Tick()` | method |
| `Refresh` | `public void Refresh()` | method |
| `UpdatePlayerInfo` | `protected virtual void UpdatePlayerInfo(bool updateForced)` | method |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended` | property |
| `IsInfoBarEnabled` | `public bool IsInfoBarEnabled` | property |
| `ExtendHint` | `public HintViewModel ExtendHint` | property |
| `MBBindingList` | `public MBBindingList<MapInfoItemVM>PrimaryInfoItems` | property |
| `MBBindingList` | `public MBBindingList<MapInfoItemVM>SecondaryInfoItems` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapBarShortcuts](../MapBarShortcuts/)
- [same namespace MapBarVM](../MapBarVM/)
- [same namespace MapInfoItemVM](../MapInfoItemVM/)
- [same namespace MapNavigationItemVM](../MapNavigationItemVM/)
