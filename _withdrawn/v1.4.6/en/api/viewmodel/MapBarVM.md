---
title: "MapBarVM"
description: "MapBarVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar, inheriting ViewModel; 18 exposed members (7 methods, 11 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapBarVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapBarVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

MapBarVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapBarVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 7 methods, 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapBarVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`, inheritance chain MapBarVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/18, methods 7/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateInfoVM` | `protected virtual MapInfoVM CreateInfoVM()` | method |
| `Initialize` | `public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts>getMapBarShortcuts, Action openArmyManagement)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnRefresh` | `public void OnRefresh()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `ExecuteArmyManagement` | `public void ExecuteArmyManagement()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `MapInfo` | `public MapInfoVM MapInfo` | property |
| `MapTimeControl` | `public MapTimeControlVM MapTimeControl` | property |
| `MapNavigation` | `public MapNavigationVM MapNavigation` | property |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible` | property |
| `IsInInfoMode` | `public bool IsInInfoMode` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `CanGatherArmy` | `public bool CanGatherArmy` | property |
| `GatherArmyHint` | `public HintViewModel GatherArmyHint` | property |
| `IsCameraCentered` | `public bool IsCameraCentered` | property |
| `CurrentScreen` | `public string CurrentScreen` | property |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapBarShortcuts](../MapBarShortcuts/)
- [same namespace MapInfoItemVM](../MapInfoItemVM/)
- [same namespace MapInfoVM](../MapInfoVM/)
- [same namespace MapNavigationItemVM](../MapNavigationItemVM/)
